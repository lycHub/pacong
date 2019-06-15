import '../styles/index.css';
import $ from 'jquery';
import * as Select from './select';
// import iframeStr from './iframeStr';
import iframeStr from './strs/baiduStr';
// import iframeStr from './strs/zhanzhang';
import getElementXpath from 'element-xpath';
/*
* document.getElementById("mainiframe").contentWindow
* frames['mainiframe']
* */
$(function () {
   const iframe = document.getElementById('mainiframe');
   // const iframeWin = frames['mainiframe'];
   const iframeWin = iframe.contentWindow;
  iframe.setAttribute('srcdoc', iframeStr);
  iframe.onload = function () {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '/src/styles/index.css';
    iframeWin.document.body.appendChild(link);
    Select.pageInit(iframeWin);

    iframeWin.document.addEventListener('click', function (event) {
      // event.stopPropagation();
      const target = event.target;
      if (target.classList.contains('add')) {
        target.classList.remove('add');
      }else {
        target.classList.add('add');
      }

      // console.log(target.innerHTML);
      // console.log(target.parentNode.outerHTML);
      /*getElementXpath(event.toElement, function (err, xpath) {
       if(err) {
       console.log(err);
       }else {
       console.log('xpath', xpath);
       }
       });*/
      /*  var path = Select.getCssPath(target);
       console.log("path：" + path);*/
    });
  }

  // document.domain = window.location.hostname;
});