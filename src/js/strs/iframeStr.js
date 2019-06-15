export default `
<!DOCTYPE html><html lang="zh"><head><meta charset="utf-8"><title>用纯CSS实现的箭头 - OurJS</title><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="用CSS即可绘制出各种箭头，无需裁剪图片，甚至没有用到CSS3的东西。对浏览器支持良好。基本原理原理非常简单，通过截取border(边框)的部分“拐角”实现，几行CSS代码即可理解："><meta name="author" content="OurJS.org"><link rel="shortcut icon" href="/favicon.ico"><link href="/css/libs.min.css" rel="stylesheet"><link href="/css/prod.min.css?v=217" rel="stylesheet"><!--[if lt IE 8]><link href="/css/ie7.min.css" rel="stylesheet"><![endif]--><style>#adsInner{float:left; margin:0 14px 14px 0;}#content pre,#content blockquote{clear:left;}#adsBottom{border: solid 1px #efefef; margin:24px 0 14px;clear:left;}</style><script>var conf={ _id: "532bc9f36922aa7e1d000001", username:"", useravatar:""}</script></head><body class="detail"><!--[if lt IE 7 ]><div style="z-index: 10000; top: 0px; left: 0px; right: 0px; bottom: 0px; position: fixed; background: #000; color: #fff; text-align: center;padding:60px"> 抱歉我们不支持IE6及以下版本<br>请更换现代浏览器，或使用手机浏览</div><![endif]--><div class="navbar navbar-inverse navbar-fixed-top"> <div class="navbar-inner"> <div class="container"> <a href="/" class="brand">Our<b>JS</b></a> <button type="button" class="btn btn-navbar"> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button> <ul class="nav menu toggle"> <li class="dropdown"> <a data-toggle="dropdown" class="dropdown-toggle" href="/"> <span id="categoryText">阅读</span> <b class="caret"></b> </a> <ul class="dropdown-menu"> <li class="nav-header">文章分类</li> <li class="divider"></li>  <li><a href="/home//">所有文章</a></li>  <li><a href="/home/大话编程/">大话编程</a></li>  <li><a href="/home/轻松一刻/">轻松一刻</a></li>  <li><a href="/home/JS学习/">JS学习</a></li>  <li><a href="/home/JS开源/">JS开源</a></li>  <li><a href="/home/技术前沿/">技术前沿</a></li>  <li><a href="/home/编程技巧/">编程技巧</a></li>  <li><a href="/home/骇客攻防/">骇客攻防</a></li>  <li><a href="/home/心得体会/">心得体会</a></li>  <li><a href="/home/我要吐嘈/">我要吐嘈</a></li>  <li><a href="/home/创业辛勤/">创业辛勤</a></li>  <li><a href="/home/求职面试/">求职面试</a></li>  <li><a href="/home/行业动态/">行业动态</a></li>  <li><a href="/home/挨踢职场/">挨踢职场</a></li>  <li><a href="/home/开源OurJS/">开源OurJS</a></li>  <li class="divider"></li> <li><a href="/rss" target="_blank">RSS订阅</a></li> <li><a href="#top" id="aboutlink">关于我们</a></li> </ul> </li> <li class="dropdown"> <a href="/bbs/">全端</a> </li> <li class="dropdown">  <a href="#signup" data-toggle="modal"> <i class="icon-edit"></i> <span>发布</span> <b class="caret"></b> </a>  </li> <li class="dropdown"> <form class="site-search navbar-form" action="http://cn.bing.com/search" target="_blank"> <input  type="text" class="form-control" name="query" placeholder="搜索"> <input  type="hidden" class="realQuery" name="q"> <button type="submit" class="btn"><i class="icon-search"></i></button> </form> </li>  <li class="pull-right"> <form id="subscribe" method="post" action="http://list.qq.com/cgi-bin/qf_compose_send" target="_blank" class="navbar-form"> <input type="hidden" value="qf_booked_feedback" name="t" /> <input type="hidden" value="c13a5bc9044bced9388831616a30239fc33ccfa553f09bdd" name="id" /> <input type="email" name="to" id="to" placeholder="Email"/> <button class="btn" type="submit">订阅邮件</button> <a href="/rss" target="_blank" class="rss"><img src="/img/rss.png"></a> </form> </li>  </ul> </div> </div></div><div class="container"> <div class="jumbotron"> <div id="about" class="hide"> <iframe name="subscribeFrame" style="display:none"></iframe> <h1 class="brand">Our<b>JS</b></h1> <p class="lead"> <br> OurJS-我们的JS, 我们的技术-IT文摘; 专注JS相关领域; <br> 我们热爱编程, 我们热爱技术;我们是高大上, 有品味的码农;       </p> <h3>欢迎您订阅我们的技术周刊</h3> <br> <p class="lead"> 我们会向您分享我们精心收集整理的，最新的行业资讯，技术动态，外文翻译，热点文章; <br> 我们使用第三方邮件列表向您推送，我们<b>不保存您的任何个人资料，注重您的隐私，您可以随时退订</b>, <br> </p> <h3>欢迎分享您的观点，经验，技巧，心得</h3> <p class="lead"> 让我们一起找寻程序员的快乐，探索技术, 发现IT人生的乐趣;       </p> <hr/> <p> 本网站使用缓存技术每次加载仅需很小流量, 可在手机中流畅浏览; <br> 如果您发现任何BUG，请即时告知我们： ourjs(at)ourjs.com </p> </div> </div> <!-- Modal --> <div id="signup" class="modal hide" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"> <div class="modal-header"> <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button> <h4 id="myModalLabel">登录或注册</h4> </div> <div class="modal-body"> <ul class="nav nav-tabs" id="signtab"> <li class="active"><a href="#signuptab">注册</a></li> <li><a href="#signintab">登录</a></li> </ul> <div class="tab-content"> <div class="tab-pane active" id="signuptab"> <form class="form-horizontal"> <div class="control-group"> <label class="control-label" for="signupUsername">用户名</label> <div class="controls"> <input type="text" id="signupUsername" name="username" placeholder="用户名"> </div> </div> <div class="control-group"> <label class="control-label" for="signupEmail">邮箱</label> <div class="controls"> <input type="text" id="signupEmail" name="email" placeholder="邮箱"> </div> </div> <div class="control-group"> <label class="control-label" for="signupPassword">密码</label> <div class="controls"> <input type="password" id="signupPassword" name="password" placeholder="密码"> </div> </div> <div class="control-group"> <div class="controls"> <label class="checkbox"> <input name="autosign" class="signinRemember" type="checkbox" checked="checked"> 自动登录 </label> <label class="checkbox"> <input id="signupSubscribe" type="checkbox" checked="checked"> 订阅邮件周刊 </label> </div> </div> <input type="submit" class="hide" /> </form> </div> <div class="tab-pane" id="signintab"> <form class="form-horizontal"> <div class="control-group"> <label class="control-label" for="signinUsername" required>登录名</label> <div class="controls"> <input type="text" id="signinUsername" name="username" placeholder="用户名"> </div> </div> <div class="control-group"> <label class="control-label" for="signinPassword">密码</label> <div class="controls"> <input type="password" id="signinPassword" name="password" placeholder="密码"> </div> </div> <div class="control-group"> <div class="controls"> <label class="checkbox"> <input name="autosign" class="signinRemember" type="checkbox" checked="checked"> 自动登录 </label> </div> </div> <input type="submit" class="hide" /> </form> </div> </div> </div> <div class="modal-footer"> <button class="btn" data-dismiss="modal" aria-hidden="true">取消</button> <button id="signOK" class="btn btn-primary">确定</button> </div> </div></div><div class="container"> <div class="row-fluid"> <div class="span12"> <h1>用纯CSS实现的箭头</h1> <hr> <div class="bdsharebuttonbox"><spam style="float: left;line-height: 35px;font-size: 16px;margin-right: 13px;">分享到 </spam> <a href="#" class="bds_more" data-cmd="more"></a><a href="#" class="bds_qzone" data-cmd="qzone" title="分享到QQ空间"></a><a href="#" class="bds_weixin" data-cmd="weixin" title="分享到微信"></a><a href="#" class="bds_tsina" data-cmd="tsina" title="分享到新浪微博"></a><a href="#" class="bds_douban" data-cmd="douban" title="分享到豆瓣网"></a><a href="#" class="bds_linkedin" data-cmd="linkedin" title="分享到linkedin"></a></div> <script>window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"2","bdMiniList":false,"bdPic":"","bdStyle":"0","bdSize":"24"},"share":{}};with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion='+~(-new Date()/36e5)];</script> <br><br> </div> </div> <div class="row-fluid"> <div id="article" class="span8"> <div id="summary">  <b>分类</b> <a href="/home/编程技巧">编程技巧</a>&nbsp;&nbsp;   <b>关键字</b> <a class="category" target="_blank" href="/bbs/Html5">Html5</a>&nbsp;&nbsp;  <b>发布</b> <a href="/userinfo/newghost" target="_blank">newghost</a>&nbsp; <span class="formatdate date">1395378675000</span> <br> <b>注意</b> 转载须保留原文链接，译文链接，作者译者等信息。&nbsp;&nbsp;   </div> <div id="adsInner"> <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> <ins class="adsbygoogle" style="display:inline-block;width:300px;height:250px" data-ad-client="ca-pub-1941367294435664" data-ad-slot="3620146836"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script> </div> <div id="content" style="overflow:visible">  <p>
用CSS即可绘制出各种箭头，无需裁剪图片，甚至没有用到CSS3的东西。对浏览器支持良好。
</p>

<h3>基本原理</h3>

<p>
原理非常简单，通过截取border(边框)的部分“拐角”实现，几行CSS代码即可理解：
</p>

<h4>一个梯形</h4>
<p>
当元素宽、高和边框的宽相近（等）时，改变某一边的颜色可以看到一个梯形；
</p>

<div id="demo11"></div>

<style>
#demo11, #demo12, #demo13, #demo14{margin:20px;}

/*一个倒梯形出现了*/
#demo11 {
  border: 10px solid #000;
  border-left-color: #f00;
  width: 10px;
  height: 10px;
}
</style>

<pre>
&lt;div id="demo11"&gt;&lt;/div&gt;

&lt;style&gt;
#demo11 {
  border: 10px solid #000;
  border-left-color: #f00;
  width: 10px;
  height: 10px;
}
&lt;/style&gt;
</pre>

<h4>一个三角形</h4>
<p>
当元素宽、高为零，且其他边为透明颜色时，可以形一个三角形。
</p>

<div id="demo13"></div>

<style>
#demo13 {
  border: 10px solid transparent;
  border-left-color: #f00;
  width: 0;
  height: 0;
}
</style>

<pre>
&lt;div id="demo12"&gt;&lt;/div&gt;

&lt;style&gt;
#demo12 {
  border: 10px solid #000;
  border-left-color: #f00;
  width: 0;
  height: 0;
}
&lt;/style&gt;
</pre>


<h4>任意角度的三角形</h4>
<p>
改变各个边的宽度，即通过调整“边框”厚度可以配置出任意角度
</p>

<div id="demo14"></div>

<style>
#demo14 {
  border: 10px solid transparent;
  border-left: 20px solid #f00;
  width: 0;
  height: 0px;
}
</style>

<pre>
&lt;div id="demo14"&gt;&lt;/div&gt;

&lt;style&gt;
#demo14 {
  border: 10px solid transparent;
  border-left: 20px solid #f00;
  width: 0;
  height: 0px;
}
&lt;/style&gt;
</pre>



<h4>通过伪元素实现</h4>
<p>
三角形可以通过伪元素绘制出，而无需改变原来的DOM结构
</p>

<span id="demo15">文字内容</span>

<style>
#demo15{
  position: relative;
}
#demo15:after {
  border: 10px solid transparent;
  border-left: 10px solid #f00;
  width: 0;
  height: 0;
  position: absolute;
  content: ' '
}
</style>

<pre>
&lt;span id="demo15"&gt;文字内容&lt;/span&gt;

&lt;style&gt;
#demo15{
  position: relative;
}
#demo15:after {
  border: 10px solid transparent;
  border-left: 10px solid #f00;
  width: 0;
  height: 0;
  position: absolute;
  content: ' '
}
&lt;/style&gt;
</pre>




<h4>伪元素实现三角线箭头</h4>
<p>
通过伪元素绘制出的两个，一个与背景色相同覆盖部分红色箭头，形成三角线
</p>

<span id="demo16">文字内容</span>

<style>
#demo16{
  position: relative;
}
#demo16:after, #demo16:before {
  border: 10px solid transparent;
  border-left: 10px solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: -20px;
  content: ' '
}

#demo16:before {
  border-left-color: #f00;
  right: -21px;
}
</style>

<pre>
&lt;span id="demo15"&gt;文字内容&lt;/span&gt;

&lt;style&gt;
#demo16{
  position: relative;
}
#demo16:after, #demo16:before {
  border: 10px solid transparent;
  border-left: 10px solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: -20px;
  content: ' '
}

#demo16:before {
  border-left-color: #f00;
  right: -21px;
}
&lt;/style&gt;
</pre>



<h4>三角线分割的Tab页</h4>

<ul id="demo17">
  <li>文字内容 Tab1</li>
  <li>文字内容 Tab2</li>
  <li>文字内容 Tab3</li>
</ul>

<style>
#demo17{
  font-size: 10px;
  height: 24px;
}

#demo17 li {
  float: left;
  position: relative;
  list-style: none;
  margin: 0 20px 12px -19px;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  padding-left: 12px;
}

#demo17 li:after, #demo17 li:before {
  border: 10px solid transparent;
  border-left: 10px solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: -18px;
  content: ' '
}

#demo17 li:before {
  border-left-color: #ddd;
  right: -19px;
}
</style>
<div style="clear:both"></div>

<pre>
&lt;ul id="demo17"&gt;
  &lt;li&gt;文字内容 Tab1&lt;/li&gt;
  &lt;li&gt;文字内容 Tab2&lt;/li&gt;
  &lt;li&gt;文字内容 Tab3&lt;/li&gt;
&lt;/ul&gt;

&lt;style&gt;
#demo17{
  font-size: 10px;
  height: 24px;
}

#demo17 li {
  float: left;
  position: relative;
  list-style: none;
  margin: 0 20px 12px -19px;
  border-top: solid 1px #ddd;
  border-bottom: solid 1px #ddd;
  padding-left: 12px;
}

#demo17 li:after, #demo17 li:before {
  border: 10px solid transparent;
  border-left: 10px solid #fff;
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  right: -18px;
  content: ' '
}

#demo17 li:before {
  border-left-color: #ddd;
  right: -19px;
}
&lt;/style&gt;
</pre>


<h4>三角形跟矩形组合成提示框</h4>
<p>这里还有另一种效果，使用三角形跟矩形组合成提示框，代码来自这篇文章： <a href="http://www.yuiblog.com/blog/2010/11/22/css-quick-tip-css-arrows-and-shapes-without-markup/" target="_blank">Css arrows and shapes without markup</a><p>

<div id="demo"></div>

<style>
#demo {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  position: relative;
  border: 4px solid #333;
}

#demo:after, #demo:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  left: 100%;
  position: absolute;
  width: 0;
}

#demo:after {
  border-width: 9px;
  border-left-color: #ccc;
  top: 15px;
}

#demo:before {
  border-width: 14px;
  border-left-color: #333;
  top: 10px;
}
</style>

<br>
<pre>
&lt;div id="demo"&gt;&lt;/div&gt;

&lt;style&gt;
#demo {
  width: 100px;
  height: 100px;
  background-color: #ccc;
  position: relative;
  border: 4px solid #333;
}

#demo:after, #demo:before {
  border: solid transparent;
  content: ' ';
  height: 0;
  left: 100%;
  position: absolute;
  width: 0;
}

#demo:after {
  border-width: 9px;
  border-left-color: #ccc;
  top: 15px;
}

#demo:before {
  border-width: 14px;
  border-left-color: #333;
  top: 10px;
}
&lt;/style&gt;
</pre> <div id="adsBottom"> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-1941367294435664" data-ad-slot="5227599630" data-ad-format="auto"></ins> <script> (adsbygoogle = window.adsbygoogle || []).push({}); </script> </div>  </div> <div id="count" class="count text-right" data-count="#content"> <span></span> </div> <div id="comments"> <div> <b style="font-size:20px">社区评论</b> <span style="font-size:12px"> ( Beta版 )</span> </div> <ul id="comments_list" class="unstyled comments">  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">0</b>  <a>哑雀</a>  <span class="formatdate">1395461349000</span> </div> <div class="content">这个技巧很不错</div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">1</b>  <a>凡尘清心</a>  <span class="formatdate">1395579869000</span> </div> <div class="content">很刁</div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">2</b>  <a>bugknightyyp</a>  <span class="formatdate">1395580509000</span> </div> <div class="content">goudiao</div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">3</b>  <a>renren150743391</a>  <span class="formatdate">1395617009000</span> </div> <div class="content">mark
</div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">4</b>  <a>Sima</a>  <span class="formatdate">1395885720000</span> </div> <div class="content">高尚大啊</div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">5</b>  <a>卫芒亚</a>  <span class="formatdate">1428387510859</span> </div> <div class="content"><p>好</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">6</b>  <a>车卫产</a>  <span class="formatdate">1456208674202</span> </div> <div class="content"><p>good</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">7</b>  <a>母凶次</a>  <span class="formatdate">1464863110434</span> </div> <div class="content"><p>感谢  很棒</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">8</b>  <a>成厌切</a>  <span class="formatdate">1467185633402</span> </div> <div class="content"><p>非常棒 给赞</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">9</b>  <a>侯而本</a>  <span class="formatdate">1471405522986</span> </div> <div class="content"><p>咸鱼</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">10</b>  <a>孔勿杂</a>  <span class="formatdate">1474251726161</span> </div> <div class="content"><p>@哑雀 #0</p>

<p>真心不错，就是自己不会写</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">11</b>  <a>你大爷</a>  <span class="formatdate">1484631916941</span> </div> <div class="content"><p>good</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">12</b>  <a>沈方奶</a>  <span class="formatdate">1487062293419</span> </div> <div class="content"><p>@bugknightyyp #21111</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">13</b>  <a>胡干丝</a>  <span class="formatdate">1497604680652</span> </div> <div class="content"><p><img src="https://ss0.baidu.com/73F1bjeh1BF3odCf/it/u=3543650085,2815710169&amp;fm=85&amp;s=F8013A769E841E412812AABE03007025" alt="加粗文本" title=""></p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">14</b>  <a>黄纤未</a>  <span class="formatdate">1498611139377</span> </div> <div class="content"><p>厉害！</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">15</b>  <a>母乐子</a>  <span class="formatdate">1501066393734</span> </div> <div class="content"><p>牛了</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">16</b>  <a>姜决无</a>  <span class="formatdate">1502699665490</span> </div> <div class="content"><p>.</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">17</b>  <a>甘网毛3</a>  <span class="formatdate">1502699696886</span> </div> <div class="content"><p>.</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">18</b>  <a>孙立正</a>  <span class="formatdate">1503992765338</span> </div> <div class="content"><p>学习了 多谢</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">19</b>  <a>我不叫蒋日发</a>  <span class="formatdate">1504497837257</span> </div> <div class="content"><p>t</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">20</b>  <a>林级号</a>  <span class="formatdate">1504855486708</span> </div> <div class="content"><p>樓主不錯啊！</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">21</b>  <a>幕</a>  <span class="formatdate">1504937295847</span> </div> <div class="content"><p>很强</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">22</b>  <a>关士尤</a>  <span class="formatdate">1505814779946</span> </div> <div class="content"><p>好</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">23</b>  <a>廖丈灭</a>  <span class="formatdate">1506046238057</span> </div> <div class="content"><p>我靠</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">24</b>  <a>张又庄</a>  <span class="formatdate">1508383018416</span> </div> <div class="content"><p>hoa </p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">25</b>  <a>丘休么</a>  <span class="formatdate">1508471741133</span> </div> <div class="content"><p>实用</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">26</b>  <a>龚设乡</a>  <span class="formatdate">1508471771774</span> </div> <div class="content"><p>特赞</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">27</b>  <a>倪让亿</a>  <span class="formatdate">1510497596965</span> </div> <div class="content"><p>第一次知道绿箭头的原理</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">28</b>  <a>路示亿</a>  <span class="formatdate">1523344416250</span> </div> <div class="content"><p>请问伪元素实现三角线箭头，怎么改变箭头的粗细啊？</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">29</b>  <a>叶舟灭</a>  <span class="formatdate">1525831458442</span> </div> <div class="content"><p>牛逼</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">30</b>  <a>雷卡件</a>  <span class="formatdate">1525914327004</span> </div> <div class="content"><p>一直在用，挺实用的</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  <li>  <a class="avatar"><img src="http://www.gravatar.com/avatar/undefined"></a> <div class="info"> #<b class="floor">31</b>  <a>黎对计</a>  <span class="formatdate">1540194259088</span> </div> <div class="content"><p>11111111111111111111111111</p></div> <div class="command">  <a class="reply"><i class="icon-share-alt"></i> 回复</a> </div>  </li>  </ul> <form id="addReply"> <div id="wmd-preview" class="wmd-panel wmd-preview"></div> <div id="wmd-button-bar"></div> <textarea class="wmd-input" id="wmd-input"></textarea> <div class="toolbar">  <label for="nickname">游客 </label> <input name="nickname" id="nickname" class="name" /> <i class="icon-refresh"></i>  <button type="submit" class="btn btn-primary">发布评论</button> </div> </form> </div> </div> <div class="span4"> <div id="article-panel"> <a href="http://onceair.com/page/view/onceair" title="OnceDoc 您自己的企业内容管理系统——文档、流程、知识库、报表、网盘All In One" target="_blank"><img src="/img/oncedoc.png" alt="OnceDoc 您自己的企业内容管理系统——文档、流程、知识库、报表、网盘All In One" /></a><br><br> <a class="title-highlight" href="/404" target="_blank">访问404页面，寻找丢失儿童</a>  <h5> <i class="icon-star-empty"></i> &nbsp;热门文章 - 分享最多 </h5> <ol>  <li> <a target="_blank" href="/detail/5310bbf992b2049526000016">JSON为王，为什么XML会慢慢淡出人们的视野</a> </li>  <li> <a target="_blank" href="/detail/5320393ab79767cf7b000004">为什么你写的Python运行的那么慢呢？</a> </li>  <li> <a target="_blank" href="/detail/531bfa3bf21aca1267000001">什么是最好的编程语言？(怎样才能爱上编程呢？)</a> </li>  <li> <a target="_blank" href="/detail/531b2ce89144f4934f00000b">该不该闭合这些元素？曾经〈br/〉的写法是错误的</a> </li>  <li> <a target="_blank" href="/detail/530b64f23b73342e03000012">使用简单的JavaScript，我们为什么应该抵制ES6</a> </li>  <li> <a target="_blank" href="/detail/5304b73bad1ec28303000007">我们抛弃了AngularJS：单页面应用的5大缺陷</a> </li>  <li> <a target="_blank" href="/detail/53158fc78029b7f144000007">如何雇佣杰出的外包程序员</a> </li>  <li> <a target="_blank" href="/detail/53272b83cc7e181509000003">快乐Node程序员的10个习惯</a> </li>  <li> <a target="_blank" href="/detail/530d4ca9765f86de1f000001">HTML5版Flappy Bird,虐心游戏你能过几关</a> </li>  <li> <a target="_blank" href="/detail/5306b3ad3b73342e0300000a">图解Node.js流行趋势，Node在路上</a> </li>  <li><a href="http://onceair.com" target="_blank"> 用 OnceAir 搭建个人Git/Svn/照片备份服务器，每年电费7块钱 </a></li> </ol> <br>   <h5> <i class="icon-list-alt"></i> &nbsp;相关阅读 - 编程技巧 </h5> <ol>  <li> <a target="_blank" href="/detail/5320190bb79767cf7b000003">使用Javascript将相对路径地址转换为绝对路径</a> </li>  <li> <a target="_blank" href="/detail/531b2ce89144f4934f00000b">该不该闭合这些元素？曾经〈br/〉的写法是错误的</a> </li>  <li> <a target="_blank" href="/detail/53002a6ca396846e6b00001c">for in 比for loop慢至少20倍</a> </li>  <li> <a target="_blank" href="/detail/52f444d04534c0d80600001f">停止使用循环，教你用underscore优雅的写代码</a> </li>  <li> <a target="_blank" href="/detail/52e9b2384534c0d806000014">不到30行JS代码实现的Excel表格，jQuery并非不可替代</a> </li>  <li> <a target="_blank" href="/detail/52da083ded5c277203000017">如何在网页上隐藏你的Email邮件地址</a> </li>  <li> <a target="_blank" href="/detail/52ba3e68d17d41eb0b000011">Ruby己死？NodeJS能否取代Ruby？</a> </li>  <li> <a target="_blank" href="/detail/52b4fc7dd17d41eb0b000001">永远不要在Linux执行的10个最危险的命令</a> </li>  <li> <a target="_blank" href="/detail/52a7bcd7127c763203000005">代码审查：写出好的 commit message</a> </li>  <li> <a target="_blank" href="/detail/52954f16f45056c314000001">性能测评：Ngix_Lua, Node.JS Python三者性能相当，均比php快近一倍</a> </li>  </ol> <br>   <h5> <i class="icon-list-alt"></i> &nbsp;关键字 - Html5 </h5> <ol>  <li> <a target="_blank" href="/detail/5b12020b1fba5269ce0530c6">用CSS和Bootstrap图标制作上下跳动的指示箭头动画效果</a> </li>  <li> <a target="_blank" href="/detail/52e9b2384534c0d806000014">不到30行JS代码实现的Excel表格，jQuery并非不可替代</a> </li>  <li> <a target="_blank" href="/detail/59965ab9f1239006149617b0">让Select选择框可编辑可输入可自动补全可下拉选择</a> </li>  <li> <a target="_blank" href="/detail/532bc9f36922aa7e1d000001">用纯CSS实现的箭头</a> </li>  <li> <a target="_blank" href="/detail/540474ae06f721255f000004">创造canvas的艺术</a> </li>  <li> <a target="_blank" href="/detail/54810f3e0dad0fbb6d000012">HTML5的TCP和UDP Web Socket API草案定稿</a> </li>  <li> <a target="_blank" href="/detail/5812f99271e01c68e9619139">传统广告与H5广告的差别在哪里？</a> </li>  <li> <a target="_blank" href="/detail/57fb3f6a3048f85d45ff3f27">WeMall微信商城源码插件代金券部分代码</a> </li>  <li> <a target="_blank" href="/detail/57f8ad259b7ca511ccbf4aa3">WeMall微信商城源码插件会员卡代码详情</a> </li>  <li> <a target="_blank" href="/detail/57f609ce9b7ca511ccbf4a9f">WeMall微信商城源码插件大转盘代码详情</a> </li>  </ol> <br>  <h5> <i class="icon-eye-open"></i> &nbsp;欢迎订阅 - 技术周刊 </h5> <p style="color:#000;margin: 0 0 20px 24px;"> 我们热爱编程, 我们热爱技术; 我们是高端, 大气, 上档次, 有品味, 时刻需要和国际接轨的码农; <b>欢迎您订阅我们的技术周刊</b>; 您只需要在右上角输入您的邮箱即可; 我们<b>注重您的隐私，您可以随时退订</b>. <br> 加入我们吧! 让我们一起找寻码农的快乐，探索技术, 发现IT人生的乐趣; </p> <br> <h5> <i class="icon-eye-open"></i> &nbsp;关注我们 </h5> <p style="color:#000;margin: 0 0 20px 24px;"> 我们的微信公众号: ourjs-com <br> 打开微信扫一扫即可关注我们: <br> IT文摘-程序员(码农)技术周刊 <br><br> <img src="/img/weixin.jpg" alt="ourjs官方微信号" width="160" height="160" style="border: solid 1px #666;" /> </p> </div> </div> </div></div><hr><div class="container"> <div class="footer"> <div style="margin:0 0 60px 0"> <p style="float:left;line-height: 30px;"> 沪ICP备13020027号-2 </p> <p style="text-align:right;"> <a class="btn" href="#top">返回顶部</a>  </p> </div> </div></div><script src="/js/libs.min.js"></script><script src="/js/prod.min.js?v=219"></script><script>(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');ga('create', 'UA-43238430-2', 'ourjs.com');ga('send', 'pageview');</script><!--Powered By OurJS --><script type="text/javascript" src="http://v3.jiathis.com/code/jia.js?uid=1862627" charset="utf-8"></script></body></html>`;