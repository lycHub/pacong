import $ from 'jquery';
/**
 * 获取传入元素的cssSelector
 * @param dom
 * @returns {string}
 */
export function getCssPath(dom) {
  var path = '';
  for (; dom && dom.nodeType == 1; dom = dom.parentNode) {
    if (dom.tagName == 'BODY') {
      break
    }
    /*var index = 1;
    for (var sib = dom.previousSibling; sib; sib = sib.previousSibling) {
      if (sib.nodeType == 1 && sib.tagName == dom.tagName) index++
    }*/
    var xname = '>' + dom.tagName.toLowerCase();
    const id = dom.getAttribute('id');  // dom.id?
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
  var patt = /\.$/;
  //如果是以.结尾则删除
  while (patt.test(path)) {
    path = path.replace(patt, "")
  }
  //把所有的>替换为空格
  path = path.replace(new RegExp(/(>)/g), ' ');

  //去除为纯数字的class
  path = path.replace(new RegExp(/\.[\d]+/), '');
  return path;
}


/**
 * 页面预处理
 */
export function pageInit(iframeWin) {
  /**
   * 取消页面点击事件
   */
  $(iframeWin.document.body).off().click(function (event) {
    event.preventDefault();
  }).mouseover(function (e) {
    // console.log("鼠标所在：" + path);
    e.stopPropagation();
    const path = getCssPath(e.target);
  /*  const target = $(e.target);
    target.addClass('hover');*/
    $(this).find(path).addClass('hover');
  }).mouseout(function (e) {
    e.stopPropagation();
    var path = getCssPath(e.target);
    // $(e.target).removeClass('hover');
    $(this).find(path).removeClass('hover');
  });
}


/**
 * 自动调整IFrame高度
 */
export function changeFrameHeight() {
  var ifm = document.getElementById("mainiframe");
  var h = $(".header").height();
  ifm.height = document.documentElement.clientHeight - h;
}