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
   const iframe = $('#mainiframe')[0];
   const iframeWin = frames['mainiframe'];
  $('#mainiframe').attr('srcdoc', iframeStr);
  iframe.onload = function () {
    // $(this).contents()
    $(iframeWin.document.body).append(`<link rel="stylesheet" href="/src/styles/index.css" />`);
    Select.pageInit(iframeWin);


    $(iframeWin.document).click(function (event) {
      // event.stopPropagation();
      const target = event.target;
      $(target).toggleClass('add');
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