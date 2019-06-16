import {AfterViewInit, Component, ElementRef, Inject, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import iframeStr from '../assets/baiduStr';
import iframeStyles from '../assets/iframeStyle';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  template: `
    <div class="main">
      <!--<h2 class="hover">sdasdsa</h2>-->
      <iframe #iframe [srcdoc]="srcdoc" frameborder="0" height="1000px" id="mainiframe" name="mainiframe" scrolling="auto" width="100%"></iframe>
    </div>
  `,
  styles: []
})
export class AppComponent implements AfterViewInit, OnDestroy{
  srcdoc: SafeHtml;
  private iframeBody: HTMLElement;
  
  private frameLoad: Function;
  private frameClick: Function;
  private frameMouseOver: Function;
  private frameMouseOut: Function;
  @ViewChild('iframe', { static: true }) private iframeRef: ElementRef;
  
  constructor(@Inject(DOCUMENT) private doc: Document, private sanitized: DomSanitizer, private rd: Renderer2) {
    this.srcdoc = this.sanitized.bypassSecurityTrustHtml(iframeStr);
  }
  
  ngAfterViewInit(): void {
    this.frameLoad = this.rd.listen(this.iframeRef.nativeElement, 'load', this.onFrameLoad.bind(this));
  }
  
  private onFrameLoad() {
    this.iframeBody = this.iframeRef.nativeElement.contentWindow.document.body;
    this.insertCss(this.iframeBody);
    this.pageInit(this.iframeBody);
  }
  
  private insertCss(body: HTMLElement) {
    const cssStyle = this.rd.createElement('style');
    cssStyle.innerHTML = iframeStyles;
    this.rd.appendChild(body, cssStyle);
  }
  
  private pageInit(body: HTMLElement) {
    this.frameClick = this.rd.listen(body, 'click', e => {
      e.preventDefault();
      const path = this.getCssPath(e.target);
      const targets = body.querySelectorAll(path);
      this.toggleClass(targets);
    });
  
    this.frameMouseOver = this.rd.listen(body, 'mouseover', e => {
      e.preventDefault();
      e.stopPropagation();
      const path = this.getCssPath(e.target);
      const targets = body.querySelectorAll(path);
      this.changeClass(targets);
    });
  
    this.frameMouseOut = this.rd.listen(body, 'mouseout', e => {
      e.preventDefault();
      e.stopPropagation();
      const path = this.getCssPath(e.target);
      const targets = body.querySelectorAll(path);
      this.changeClass(targets, 'remove');
    });
  }
  
  private changeClass(targets: NodeListOf<Element>, type = 'add') {
    for (let a = 0; a < targets.length; a++) {
      targets[a].classList[type]('hover');
    }
  }
  private toggleClass(targets: NodeListOf<Element>) {
    for (let a = 0; a < targets.length; a++) {
      const classList = targets[a].classList;
      if (classList.contains('add')) {
        classList.remove('add');
      }else {
        classList.add('add');
      }
    }
  }
  
  private getCssPath(dom: HTMLElement) {
    let path = '';
    for (; dom && dom.nodeType === 1; dom = this.rd.parentNode(dom)) {
      if (dom.tagName.toLowerCase() == 'body') break;
      /*var index = 1;
       for (var sib = dom.previousSibling; sib; sib = sib.previousSibling) {
       if (sib.nodeType == 1 && sib.tagName == dom.tagName) index++
       }*/
      let xname = '>' + dom.tagName.toLowerCase();
      const id = dom.getAttribute('id');  // dom.id?
      // const id = dom.id;  // dom.id?
      if (id) {
        xname += '#' + id
      } else if (dom.className) {
        xname += '.' + dom.className.replace(new RegExp(/( )/g), '.')
      } else {
        xname += ''
      }
      path = xname + path
    }
    // console.log('da', path);
    if (path.substring(0, 1) == '>') {
      path = path.replace('>', '')
    }
    do {
      path = path.replace('..', '.')
    } while (path.indexOf('..') > 0);
    do {
      path = path.replace('.>', '>')
    } while (path.indexOf('.>') > 0);
    
    let patt = /\.$/;
    //如果是以.结尾则删除
    while (patt.test(path)) {
      path = path.replace(patt, "")
    }
    //把所有的>替换为空格
    path = path.replace(new RegExp(/(>)/g), ' ');
  
    //去除为纯数字的class
    path = path.replace(new RegExp(/\.[\d]+/), '');
    
    path = path.replace(new RegExp(/\#[\d]+/), '');
    return path;
  }
  
  
  ngOnDestroy(): void {
    const arr = ['frameLoad', 'frameClick', 'frameMouseOver', 'frameMouseOut'];
    arr.forEach(item => {
      if (this[item]) this[item]();
    });
  }
}
