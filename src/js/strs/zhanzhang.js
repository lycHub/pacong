export default `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>日期选择代码_日期选择特效_jquery日期选择代码</title>
<meta name="Keywords" content="日期选择代码 日期选择特效 jquery日期选择代码" />
<meta name="description" content="日期选择jquery特效 日期选择js特效 日期选择网页代码" />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="x-ua-compatible" content="ie=7" />
<link href="/style/kz_all.css" type="text/css" rel="stylesheet" />
<link href="http://img.chinaz.com/max-templates/passport/styles/topbar.css" type="text/css" rel="Stylesheet" />
<script type="text/javascript" src="/style/js/jquery-1.2.pack.js"></script>
<script type="text/javascript" src="/style/js/jquery.masonry.min.js"></script>
<script type="text/javascript" src="/style/js/mainutf8.js"></script>
</head>
<body>
<div class="toolbar">
    <div class="clearfix toolbar-inner">
        <div class="quicklink">
            <ul id="chinaz_website_links" class="accesslink">
                <li><a href="http://www.chinaz.com"><span>站长之家</span></a></li>
                <li onmouseover="chinazTopBarMenu.create(this,'chinaz_website_menu_1');" onmouseout="chinazTopBarMenu.clear(this);">
                    <a class="item-expand" href="http://tool.chinaz.com" target="_blank"><span>站长工具</span></a>
                </li>
                <li onmouseover="chinazTopBarMenu.create(this,'chinaz_website_menu_2');" onmouseout="chinazTopBarMenu.clear(this);">
                    <a class="item-expand" href="http://sc.chinaz.com" target="_blank"><span>站长素材</span></a>
                </li>                
                <li><a href="http://down.chinaz.com" target="_blank"><span>源码下载</span></a></li>
                <li onmouseover="chinazTopBarMenu.create(this,'chinaz_website_menu_3');" onmouseout="chinazTopBarMenu.clear(this);">
                    <a class="item-expand" href="http://top.chinaz.com" target="_blank"><span>网站排行榜</span></a>
                </li>  
                <li><a href="http://api.chinaz.com" target="_blank"><span>站长数据API</span></a></li>
            </ul>

            <div id="chinaz_website_menu_1" class="topbar-hiddencontents">
                <a href="http://alexa.chinaz.com" target="_blank">ALEXA排名查询</a> 
                        <a href="http://rank.chinaz.com" target="_blank">百度权重查询</a> 
                        <a href="http://seo.chinaz.com" target="_blank">SEO概况查询</a> 
                        <a href="http://link.chinaz.com" target="_blank">友情链接查询</a> 
                        <a target="_blank"  href="http://ping.chinaz.com" target="_blank">网站ping测速</a> 
                        <a href="http://whois.chinaz.com" target="_blank">Whois信息查询</a> 
                        <a href="http://icp.chinaz.com" target="_blank">域名备案查询</a> 
            </div>
            <div id="chinaz_website_menu_2" class="topbar-hiddencontents">
                <a href="http://font.chinaz.com/" target="_blank">字体下载</a> 
                        <a href="http://sc.chinaz.com/jianli/" target="_blank">简历模板</a> 
                        <a href="http://sc.chinaz.com/tupian/" target="_blank">高清图片</a> 
                        <a href="http://sc.chinaz.com/shiliang/" target="_blank">矢量素材</a> 
                        <a href="http://sc.chinaz.com/ppt/" target="_blank">PPT模板</a> 
                        <a href="http://sc.chinaz.com/psd/" target="_blank">PSD素材</a>
            </div>

            <div id="chinaz_website_menu_3" class="topbar-hiddencontents">
               <a href="https://aso.chinaz.com/" target="_blank">App榜单</a>
               <a href=" https://live.chinaz.com/" target="_blank">主播排行榜</a>
               <a href="http://top.chinaz.com/" target="_blank">网站排行榜</a>
            </div>

        </div>
        <div id="chinaz_topbar"></div>
    </div>
</div>
        <div class="all_wrap">
        <div class="banner">
        	 <div class="logo">
                <a href='http://sc.chinaz.com'><span>站长素材</span></a>
             </div>
            <div class="gg1" style="margin-left: 130px">
<script type="text/javascript" src="//stats.chinaz.com/sc_g/todgxdgxk.js"></script>
        </div>
        </div>
        <div class="nav">
        	<ul>
            	<li class="index_list">
                     <a href="/" target="_blank">素材首页</a>
                </li>
                <li class="nos">
                    <a href="/shiliang/" target="_blank">矢量</a>
                	<a href="/tupian/" target="_blank">高清图片</a>
                    <a href="/tubiao/" target="_blank">图标</a>
                    <a href="/psd/" target="_blank">PSD素材</a>
                </li>
                 <li class="nos no2">
                	<a href="http://font.chinaz.com/" target="_blank">字体</a>
                    <a href="http://font.chinaz.com/zhongwenziti.html" target="_blank">中文字体</a>
                    <a href="http://font.chinaz.com/yingwenziti.html" target="_blank">英文字体</a>
                    <a href="/yinxiao/" target="_blank">音效</a>
                    <a href="/donghua/" target="_blank">Flash动画</a>
                    <a href="/biaoqing/" target="_blank">QQ表情 </a>
                </li>
                 <li class="nos no3">
                	<a href="/moban/" target="_blank">网页模板</a>
                    <a href="/3D/" target="_blank">3D模型</a>
                    <a href="/ppt/" target="_blank">PPT模板</a>
					<a href="/jianli/" target="_blank">简历模板</a>
                    <a href="/jiaoben/" target="_blank">脚本代码</a>
                    <a href="/tag_jiaoben/jquery.html" target="_blank">JQuery </a>
                </li>
                  <li class="nos no4">  
                  <a style="" href="http://sc.chinaz.com/ppt/gerenjianlipptmoban.html" target="_blank">个人简历PPT</a>
					<a href="http://sc.chinaz.com/zt/hanyi/" target="_blank">汉仪字体</a>
                    <a style="" href="http://sc.chinaz.com/ppt/zongjie.html" target="_blank">工作总结PPT</a>
					<a style="" href="http://sc.chinaz.com/jianli/shangye.html" target="_blank">商业简历</a>
                </li>
                 <li class="nos no5">
                    <a href="http://sc.chinaz.com/zt/hanyi/dabao.html" target="_blank">字体打包</a>
                	<a href="http://sc.chinaz.com/kuzhan/" target="_blank">酷站欣赏</a>
                	<a href="http://sc.chinaz.com/zhuanti/" target="_blank">节日专题</a>
                    <a href="http://sc.chinaz.com/hezuo.html" target="_blank">商务合作</a>
                    <a href="http://sc.chinaz.com/new/" target="_blank">最新更新</a>
					 <a href="http://sc.chinaz.com/ppt/jiaocheng.html" target="_blank">PPT教程</a>
                </li>
            </ul>
        </div>        
        <div class="new_search">
        	<div class="left">
           		<span>快速导航</span>
                <a href="http://sc.chinaz.com/3D/" class="max" target="_blank"><span>3d</span></a>
            	<a href="/tupian/" class="jpg" target="_blank"><span class="active">jpg</span></a>
                <a href="/psd/" class="psd" target="_blank"><span>psd</span></a>
                <a href="/shiliang/" class="ai" target="_blank"><span>ai</span></a>
                <a href="/shiliang/" class="eps" target="_blank"><span>eps</span></a>
                <a href="/shiliang/" class="cdr" target="_blank"><span>cdr</span></a>
                <a href="/ppt/" class="ppt" target="_blank"><span>ppt</span></a>
                <a href="http://font.chinaz.com/" class="ttf" target="_blank"><span>ttf</span></a>
                <a href="/moban/" class="htmls" target="_blank"><span>html</span></a>
                <a href="/tubiao/" class="png" target="_blank"><span>png</span></a>
                <a href="/yinxiao/" class="mp3" target="_blank"><span>mp3</span></a>
                <a href="/donghua/" class="fla" target="_blank"><span>fla</span></a>
                <a href="/donghua/" class="swf" target="_blank"><span>swf</span></a>
                <a href="/biaoqing/" class="gif" target="_blank"><span>gif</span></a>
            </div>
            <div class="right">
                <form id="searchform" name="searchform" method="get" action="http://aspx.sc.chinaz.com/query.aspx" target="_blank" onsubmit="return checkForm(this);">
                <input name="keyword" type="text" value="" class="text" />
                <input name="classID" type="hidden" id="classID" value="835" />
                <input name="" type="submit" class="btn" value="" />
                </form>
            </div>
        </div>
        <div class="advert" style=" margin-top:5PX">
<script type="text/javascript" src="//stats.chinaz.com/sc_g/sc_970.js"></script>
<script type="text/javascript" src="//stats.chinaz.com/sc_g/rmbevbebv.js"></script>
        	</div>           
	  <div class="active_dq">
            <p>您当前位置：<a href="http://sc.chinaz.com/">站长素材</a> >><a target="_blank" href="/jiaoben/">脚本</a> >><a href="/tag_jiaoben/riqixuanze.html" >日期选择脚本</a></p><div class="bread_right"><div id="tagwz"></div></div>
        </div>
    <div class="text">
    <div class="tagsbox"><i></i>
			<p class="tags_a"> 
			<a style="color:#bd7611" target="_blank" title="图片切换" href="/tag_jiaoben/tupianqiehuan.html">图片切换</a>
			<a target="_blank" title="返回顶部" href="/tag_jiaoben/fanhuidingbu.html">返回顶部</a> 
			<a target="_blank" title="动画效果" href="/tag_jiaoben/donghuaxiaoguo.html">动画效果</a> 
			<a target="_blank" title="倒计时" href="/tag_jiaoben/daojishi.html">倒计时</a> 
			<a style="color:#229c38" target="_blank" title="弹出层" href="/tag_jiaoben/danchuceng.html">弹出层</a> 
			<a target="_blank" title="在线客服" href="/jiaoben/kefu.html">在线客服</a> 
			<a target="_blank" title="手风琴" href="/tag_jiaoben/shoufengqin.html">手风琴</a> 
			<a style="color:#36f" target="_blank" title="表单代码" href="/tag_jiaoben/biaodan.html">表单代码</a> 
			<a style="color:#bd7611" target="_blank" title="文字特效" href="/tag_jiaoben/wenzitexiao.html">文字特效</a> 
			<a target="_blank" title="滚动条" href="/tag_jiaoben/gundongtiao.html">滚动条</a> 
			<a style="color:#9c222d" target="_blank" title="瀑布流" href="/tag_jiaoben/pubuliu.html">瀑布流</a> 
			<a target="_blank" title="表单验证" href="/tag_jiaoben/biaodanyanzheng.html">表单验证</a> 
			<a style="color:#36f" target="_blank" title="时钟代码" href="/tag_jiaoben/shizhong.html">时钟代码</a> 
			<a target="_blank" title="抽奖转盘" href="/tag_jiaoben/dazhuanpan.html">抽奖转盘</a> 
			<a style="color:#9c222d" target="_blank" title="标签云" href="/tag_jiaoben/biaoqianyun.html">标签云</a> 
			<a target="_blank" title="播放器" href="/tag_jiaoben/bofangqi.html">播放器</a> 
			<a target="_blank" title="图片放大" href="/tag_jiaoben/tupianfangda.html">图片放大</a> 
			<a style="color:#bd7611" target="_blank" title="时间轴" href="/tag_jiaoben/shijianzhou.html">时间轴</a> 
			<a target="_blank" title="日历代码" href="/tag_jiaoben/rilidaima.html">日历代码</a> 
			<a target="_blank" title="滚动代码" href="/tag_jiaoben/gundongdaima.html">滚动代码</a>
			<a target="_blank" title="选项卡" href="/tag_jiaoben/xuanxiangka.html">选项卡</a>
			<a target="_blank" title="进度条" href="/jiaoben/jindutiao.html">进度条</a> 
			</p>
		</div>
		<div class="text_left text_leftbq">
                <div id="container" class="clearfixs imgload">
                
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:197px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190509426340.htm" alt="jQuery选择日期时间下拉框代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201905/jiaoben6755_s.jpg" alt="jQuery选择日期时间下拉框代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190509426340.htm" alt="jQuery选择日期时间下拉框代码">jQuery选择日期时间下拉框代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=201985242781      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:171px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span><span class="css3">css3</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190508492690.htm" alt="jQuery星云密布背景动画特效"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201905/jiaoben6754_s.jpg" alt="jQuery星云密布背景动画特效"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190508492690.htm" alt="jQuery星云密布背景动画特效">jQuery星云密布背景动画特效</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=2019114549264     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:249px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190506161200.htm" alt="jQuery基于Layui搜索下拉框代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6746_s.jpg" alt="jQuery基于Layui搜索下拉框代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190506161200.htm" alt="jQuery基于Layui搜索下拉框代码">jQuery基于Layui搜索下拉框代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=201934216814      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:189px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190506395770.htm" alt="jQuery饼图服务器资源统计代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6747_s.jpg" alt="jQuery饼图服务器资源统计代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190506395770.htm" alt="jQuery饼图服务器资源统计代码">jQuery饼图服务器资源统计代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=201991939760      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:270px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190501316500.htm" alt="jQuery移动端多图上传插件"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6739_s.jpg" alt="jQuery移动端多图上传插件"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190501316500.htm" alt="jQuery移动端多图上传插件">jQuery移动端多图上传插件</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=2019110131790     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:147px">
                    <div class="framework_require">
                    <span class="html5">html5</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190426116910.htm" alt="HTML5圆形导航全屏图片切换"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6728_s.jpg" alt="HTML5圆形导航全屏图片切换"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190426116910.htm" alt="HTML5圆形导航全屏图片切换">HTML5圆形导航全屏图片切换</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=6201985411880     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:342px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190425211440.htm" alt="jQuery手机选择日期日历插件"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6725_s.jpg" alt="jQuery手机选择日期日历插件"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190425211440.htm" alt="jQuery手机选择日期日历插件">jQuery手机选择日期日历插件</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=520193092118      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:408px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190424266920.htm" alt="jQuery移动端抽奖大转盘代码"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6722_s.jpg" alt="jQuery移动端抽奖大转盘代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190424266920.htm" alt="jQuery移动端抽奖大转盘代码">jQuery移动端抽奖大转盘代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=4201934026628     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:146px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190424365300.htm" alt="jQuery每日秒杀倒计时代码"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6721_s.jpg" alt="jQuery每日秒杀倒计时代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190424365300.htm" alt="jQuery每日秒杀倒计时代码">jQuery每日秒杀倒计时代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=4201984836805     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:172px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190423104370.htm" alt="jQuery左右列表添加删除代码"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6720_s.jpg" alt="jQuery左右列表添加删除代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190423104370.htm" alt="jQuery左右列表添加删除代码">jQuery左右列表添加删除代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=32019102010812    "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:232px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190418044820.htm" alt="jQuery手机屏幕手势解锁代码"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6708_s.jpg" alt="jQuery手机屏幕手势解锁代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190418044820.htm" alt="jQuery手机屏幕手势解锁代码">jQuery手机屏幕手势解锁代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=8201934404880     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:151px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190417406590.htm" alt="jQuery无限级ajax加载菜单代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6707_s.jpg" alt="jQuery无限级ajax加载菜单代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190417406590.htm" alt="jQuery无限级ajax加载菜单代码">jQuery无限级ajax加载菜单代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=7201990140181     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:169px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190416244560.htm" alt="json数据创建多级下拉菜单"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6703_s.jpg" alt="json数据创建多级下拉菜单"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190416244560.htm" alt="json数据创建多级下拉菜单">json数据创建多级下拉菜单</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=62019104724426    "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:251px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190416036370.htm" alt="jQuery登录表单捂眼睛代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6702_s.jpg" alt="jQuery登录表单捂眼睛代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190416036370.htm" alt="jQuery登录表单捂眼睛代码">jQuery登录表单捂眼睛代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=620193160331      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:163px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span><span class="css3">css3</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190412137150.htm" alt="jQuery+CSS3列表布局切换特效"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6694_s.jpg" alt="jQuery+CSS3列表布局切换特效"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190412137150.htm" alt="jQuery+CSS3列表布局切换特效">jQuery+CSS3列表布局切换特效</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=2201932913187     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:160px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190411401280.htm" alt="jQuery联系人生成二维码代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6691_s.jpg" alt="jQuery联系人生成二维码代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190411401280.htm" alt="jQuery联系人生成二维码代码">jQuery联系人生成二维码代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=1201985140942     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:158px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190409484000.htm" alt="jQuery页面区域预加载代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6685_s.jpg" alt="jQuery页面区域预加载代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190409484000.htm" alt="jQuery页面区域预加载代码">jQuery页面区域预加载代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=201984548502      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:158px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190407083300.htm" alt="jQuery网页二维码生成插件"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6681_s.jpg" alt="jQuery网页二维码生成插件"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190407083300.htm" alt="jQuery网页二维码生成插件">jQuery网页二维码生成插件</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=2019113708638     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:217px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190406082880.htm" alt="jQuery小时跟分钟选择代码"><img src2="http://pic1.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6680_s.jpg" alt="jQuery小时跟分钟选择代码"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190406082880.htm" alt="jQuery小时跟分钟选择代码">jQuery小时跟分钟选择代码</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=201943608534      "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                    <div class="box picblock col3 masonry-brick" style="width:220px;height:167px">
                    <div class="framework_require">
                    <span class="jquery">jquery</span><span class="css3">css3</span>
                    </div>
                    <div>
                    <a target="_blank" href="http://sc.chinaz.com/jiaoben/190402279640.htm" alt="页面元素滚动插件xScroll.js"><img src2="http://pic2.sc.chinaz.com/Files/pic/webjs1/201904/jiaoben6673_s.jpg" alt="页面元素滚动插件xScroll.js"></a>
                    </div>
                    <p><a target="_blank" href="http://sc.chinaz.com/jiaoben/190402279640.htm" alt="页面元素滚动插件xScroll.js">页面元素滚动插件xScroll.js</a>
                    
                    <a class="ico_html ico_jq" target="_blank" href="/jiaobendemo.aspx?downloadid=2019101727965     "><span>演示</span></a>
                                        
                    </p><b></b>
                    </div>
               
                </div>
			<div class="clear"></div>
		</div>		
		<div class="clear"></div>
	</div>
        <div class="fybg">
                    <div class="fenye">
<a class="backpage grey">上一页</a><a href="javascript:;" class='active'><b>1</b></a> <a href="riqixuanze_2.html"><b>2</b></a><a href="riqixuanze_3.html"><b>3</b></a><a href="riqixuanze_2.html" class="nextpage">下一页</a>转到第 <input name="tbpage" id="tbpage" type="text" onkeydown="if(event.keyCode==13){ event.keyCode=9; document.getElementById('btngo').click();}" size="3"> 页 <input type="submit" id="btngo" onclick="return btngoUrl('tbpage','riqixuanze','3')" value="跳转">
                    </div>
            <div class="clear"></div>
		</div>
		<script type="text/javascript" src="//stats.chinaz.com/sc_g/sc_980.js"></script>
		</div>
		    <script type="text/javascript" src="/style/js/lazyload.js"></script>
<div class="foodte">
        <div class="bot_dh">
              <a href="http://www.chinaz.com/aboutus/index.html" class="hui333" target="_blank">关于站长之家</a> - 
               <a href="http://ww.chinaz.com/aboutus/contact.php?from=sc" class="hui333" target="_blank">联系我们(电话)</a> - 
               <a href="http://www.chinaz.com/aboutus/ad.html" class="hui333" target="_blank">广告服务</a> - 
               <a href="http://www.chinaz.com/aboutus/announce.html" class="hui333" target="_blank">版权声明</a> - 
               <a href="http://sc.chinaz.com/link.html" class="hui333" target="_blank">友情链接</a> - 
               <a href="http://sc.chinaz.com/ditu.html" class="hui333" target="_blank">栏目地图</a> - 
               <a href="http://sc.chinaz.com/bangzhu.html" class="hui333" target="_blank">帮助说明</a>
        </div>
        <div class="banquan">		
			  <p>&copy; CopyRight 2002-2019, <a href="http://www.chinaz.com">CHINAZ.COM</a>, Inc.All Rights Reserved. <script src="http://s4.cnzz.com/stat.php?id=300636&web_id=300636" language="JavaScript"></script></p>	
		    </div>
        </div>
        <script type="text/javascript" src="//stats.chinaz.com/sc_g/sc_s.js"></script>
<script type="text/javascript" src="/style/js/uc.js" charset="utf-8"></script>

    
<div style="display:none">
<script src="http://s23.cnzz.com/stat.php?id=4674020&web_id=4674020" language="JavaScript"></script>
</div>
</body>
</html>`;