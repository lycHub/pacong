import '../styles/index.css';
import $ from 'jquery';
import * as Select from './select';
// import iframeStr from './strs/iframeStr';
import iframeStr from './strs/baiduStr';
// import iframeStr from './strs/zhanzhang';
import getElementXpath from 'element-xpath';
import cssPath from 'css-path';

/*
* document.getElementById("mainiframe").contentWindow
* frames['mainiframe']
* */
$(function () {
   const iframe = $('#mainiframe')[0];
   const iframeWin = frames['mainiframe'];
  $('#mainiframe').attr('srcdoc', iframeStr);
  iframe.onload = function () {
    // $(this).contents()
    $(iframeWin.document.body).append(`<link rel="stylesheet" href="/src/styles/index.css" />`);
    Select.pageInit(iframeWin);


    $(iframeWin.document.body).click(function (event) {
      // event.stopPropagation();
      const target = event.target;
      const path = Select.getCssPath(target);
      // const path = cssPath(target);  太精确了
      // console.log('this', this);   // body
      // console.log('target', target);
      $(this).find(path).toggleClass('add');

      console.log("css-path" + path);
      // $(target).toggleClass('add');
      /*getElementXpath(event.toElement, function (err, xpath) {
        if(err) {
          console.log(err);
        }else {
          console.log('xpath', xpath);
        }
      });*/
    });
  }

  // document.domain = window.location.hostname;
});