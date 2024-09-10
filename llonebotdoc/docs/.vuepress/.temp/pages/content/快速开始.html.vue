<template><div><h1 id="写在前面" tabindex="-1"><a class="header-anchor" href="#写在前面"><span>写在前面</span></a></h1>
<h4 id="到底什么是个markdown" tabindex="-1"><a class="header-anchor" href="#到底什么是个markdown"><span>到底什么是个Markdown?</span></a></h4>
<ul>
<li>
<p><strong>Markdown</strong> 是一种文本编辑时候使用的<strong>语法</strong>，通过在文字中加入助记符，将排版/编号/列表/文字高亮/加粗等问题交给机器处理，对文字进行自动排版，从而大大提高编辑记录效率。</p>
</li>
<li>
<p>有道云Markdown编辑器 or 简书Markdown编辑器都是依照这种Markdown<strong>语法的实现</strong>，所以难免上渲染出来的效果有些小偏差，但是排版方式是通用的。</p>
</li>
</ul>
<h4 id="为什么要用markdown" tabindex="-1"><a class="header-anchor" href="#为什么要用markdown"><span>为什么要用Markdown?</span></a></h4>
<ul>
<li>
<p>文章的排版很麻烦，如果有一种对于文章排版的解决方案就好了。</p>
</li>
<li>
<p>学习实践Markdown语法后你可以自定义你的文章排版。</p>
</li>
<li>
<p>这是一套定义文章排版格式的语法。</p>
</li>
<li>
<p>这是一个边际成本递减的升维实践过程。</p>
</li>
</ul>
<h4 id="markdown的应用场景" tabindex="-1"><a class="header-anchor" href="#markdown的应用场景"><span>Markdown的应用场景?</span></a></h4>
<p>可以说，所有的文本场景下都可以使用Markdown语法，只要你有一个支持Markdown语法的编辑器就可以，笔者使用的是有道云笔记的Markdown编辑器，因为其支持语法全面(包括文本高亮标记)。当前探索出的支持Markdown的环境有:有道云笔记、简书、微信公众号推送(粘贴渲染排版后的文本即可)。</p>
<h4 id="本文逻辑安排目录" tabindex="-1"><a class="header-anchor" href="#本文逻辑安排目录"><span>本文逻辑安排目录：</span></a></h4>
<ol>
<li>
<p><strong>Markdown可以实现的排版效果</strong></p>
</li>
<li>
<p><strong>Markdown文章示例</strong></p>
</li>
<li>
<p><strong>本文的Markdown语法的原文</strong></p>
</li>
</ol>
<h1 id="_0x01-标题相关示例" tabindex="-1"><a class="header-anchor" href="#_0x01-标题相关示例"><span>0x01 标题相关示例</span></a></h1>
<hr>
<h1 id="主标题" tabindex="-1"><a class="header-anchor" href="#主标题"><span>主标题</span></a></h1>
<h2 id="副标题" tabindex="-1"><a class="header-anchor" href="#副标题"><span>副标题</span></a></h2>
<h3 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题"><span>一级标题</span></a></h3>
<h4 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题"><span>二级标题</span></a></h4>
<h5 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题"><span>三级标题</span></a></h5>
<h6 id="六级小标题" tabindex="-1"><a class="header-anchor" href="#六级小标题"><span>六级小标题</span></a></h6>
<h3 id="标题网址" tabindex="-1"><a class="header-anchor" href="#标题网址"><span><a href="http://yq.upwith.me/" target="_blank" rel="noopener noreferrer">标题网址</a></span></a></h3>
<blockquote>
<p>引用文字块</p>
</blockquote>
<hr>
<h1 id="_0x02-无序列表相关示例" tabindex="-1"><a class="header-anchor" href="#_0x02-无序列表相关示例"><span>0x02 无序列表相关示例</span></a></h1>
<hr>
<ul>
<li>
<h1 id="一级列表" tabindex="-1"><a class="header-anchor" href="#一级列表"><span>一级列表</span></a></h1>
</li>
<li>
<h2 id="二级列表" tabindex="-1"><a class="header-anchor" href="#二级列表"><span>二级列表</span></a></h2>
</li>
<li>
<h3 id="三级列表" tabindex="-1"><a class="header-anchor" href="#三级列表"><span>三级列表</span></a></h3>
</li>
<li>
<h4 id="四级列表" tabindex="-1"><a class="header-anchor" href="#四级列表"><span>四级列表</span></a></h4>
</li>
<li>
<h5 id="五级列表" tabindex="-1"><a class="header-anchor" href="#五级列表"><span>五级列表</span></a></h5>
</li>
<li>
<h6 id="六级列表" tabindex="-1"><a class="header-anchor" href="#六级列表"><span>六级列表</span></a></h6>
</li>
</ul>
<hr>
<h1 id="_0x03-有序列表相关示例" tabindex="-1"><a class="header-anchor" href="#_0x03-有序列表相关示例"><span>0x03 有序列表相关示例</span></a></h1>
<hr>
<ol>
<li><strong>加粗标题1</strong>
<ol>
<li>自编号标题1.1
<ol>
<li>++下划线自编号标题1.1.1++
<ol>
<li><em>斜体自编号标题1.1.1.1</em></li>
</ol>
</li>
</ol>
</li>
</ol>
</li>
</ol>
<hr>
<h1 id="_0x04-综合使用示例" tabindex="-1"><a class="header-anchor" href="#_0x04-综合使用示例"><span>0x04 综合使用示例</span></a></h1>
<blockquote>
<p>使用MD时候的要点，合理使用无序列表语法与自定义序号，尽量少使用有序列表语法，因为存在兼容性问题(有道云笔记兼容性比简书好很多)会导致标题无层次分类，示例开始。</p>
</blockquote>
<p><img src="http://upload-images.jianshu.io/upload_images/6189910-13d61acf16fccc84.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1240" alt="image"></p>
<h2 id="一、如何更好地理解第四章" tabindex="-1"><a class="header-anchor" href="#一、如何更好地理解第四章"><span>一、如何更好地理解第四章？</span></a></h2>
<h3 id="一-前置两个问题-升维与复杂系统" tabindex="-1"><a class="header-anchor" href="#一-前置两个问题-升维与复杂系统"><span>(一) 前置两个问题：升维与复杂系统</span></a></h3>
<h4 id="_1-升维" tabindex="-1"><a class="header-anchor" href="#_1-升维"><span>1. 升维</span></a></h4>
<h5 id="_1-维度是什么" tabindex="-1"><a class="header-anchor" href="#_1-维度是什么"><span>(1) 维度是什么？</span></a></h5>
<p>时空坐标体系下的坐标轴数量，可以理解为<strong>增加的视野角度</strong>。</p>
<h5 id="_2-高维和低维的关系" tabindex="-1"><a class="header-anchor" href="#_2-高维和低维的关系"><span>(2) 高维和低维的关系</span></a></h5>
<ul>
<li>信息密度<em>高</em>，信息量<em>大</em></li>
<li>低维是高维的切片</li>
<li>高维的低维展开会导致低维量级的无限扩张</li>
<li>推演：高维比低维的视角更多</li>
</ul>
<h3 id="_2-复杂系统" tabindex="-1"><a class="header-anchor" href="#_2-复杂系统"><span>2. 复杂系统</span></a></h3>
<h4 id="_1-定义" tabindex="-1"><a class="header-anchor" href="#_1-定义"><span>(1) 定义</span></a></h4>
<p>什么叫系统？一组组内相互作用、相互依赖的复杂整体</p>
<h4 id="_2-要素" tabindex="-1"><a class="header-anchor" href="#_2-要素"><span>(2) 要素</span></a></h4>
<h4 id="_3-系统的三要素" tabindex="-1"><a class="header-anchor" href="#_3-系统的三要素"><span>(3) 系统的三要素</span></a></h4>
<ul>
<li>系统关系</li>
<li><strong>元素间关系</strong></li>
<li>系统功能</li>
</ul>
<h4 id="_4-两大类系统" tabindex="-1"><a class="header-anchor" href="#_4-两大类系统"><span>(4) 两大类系统</span></a></h4>
<h5 id="_1-他组织系统" tabindex="-1"><a class="header-anchor" href="#_1-他组织系统"><span>① 他组织系统</span></a></h5>
<ul>
<li>系统元素</li>
<li>系统结构关系</li>
<li>系统功能</li>
<li>特点：功能稳定，输入一定，输出一定。</li>
</ul>
<h5 id="_2-自组织系统" tabindex="-1"><a class="header-anchor" href="#_2-自组织系统"><span>② 自组织系统</span></a></h5>
<hr>
<h1 id="_0x05-markdown原文" tabindex="-1"><a class="header-anchor" href="#_0x05-markdown原文"><span>0x05 Markdown原文</span></a></h1>
<p>Markdown与Markdown编辑器与排版文字的关系梳理与实践：</p>
<ul>
<li>
<p>Markdown格式原文-&gt;有道云Markdown编辑器 or 简书Markdown编辑器-&gt;预览效果就是发布后的效果</p>
</li>
<li>
<p>简书中Markdown编辑器开启方式</p>
<ul>
<li><code v-pre>个人设置-基础设置-常用编辑器-Markdown</code></li>
</ul>
</li>
<li>
<p>有道云笔记Markdown编辑器开启方式</p>
<ul>
<li><code v-pre>新文档-新建Markdown</code></li>
</ul>
</li>
</ul>
</div></template>


