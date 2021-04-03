(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{80:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(92),o=a(93),i=a(84),c=a(85);var s=function(e){var t=e.nextItem,a=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":Object(i.b)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},r.a.createElement("div",{className:"pagination-nav__item"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},r.a.createElement(i.a,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),r.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},m=a(95),u=a(83);var d=function(e,t,a){var r=Object(n.useState)(void 0),l=r[0],o=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),t=e.find((function(e){return e.getBoundingClientRect().top>=a}));if(t){if(t.getBoundingClientRect().top>=a){var n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(n)for(var r=0,i=!1,c=document.getElementsByClassName(e);r<c.length&&!i;){var s=c[r],m=s.href,u=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===u&&(l&&l.classList.remove(t),s.classList.add(t),o(s),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},p=a(78),g=a.n(p),h="table-of-contents__link";function v(e){var t=e.toc,a=e.isChild;return t.length?r.a.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:h,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(v,{isChild:!0,toc:e.children}))}))):null}var y=function(e){var t=e.toc;return d(h,"table-of-contents__link--active",100),r.a.createElement("div",{className:Object(u.a)(g.a.tableOfContents,"thin-scrollbar")},r.a.createElement(v,{toc:t}))},f=a(3),b=a(7),E=a(79),k=a.n(E),N=function(e){var t=e.className,a=Object(b.a)(e,["className"]);return r.a.createElement("svg",Object(f.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(u.a)(k.a.iconEdit,t),"aria-label":"Edit page"},a),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function j(e){var t=e.editUrl;return r.a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.a.createElement(N,null),r.a.createElement(i.a,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}t.default=function(e){var t=e.content,a=e.sidebar,n=t.frontMatter,i=t.metadata,c=i.title,u=i.description,d=i.nextItem,p=i.prevItem,g=i.editUrl,h=n.hide_table_of_contents;return r.a.createElement(l.a,{title:c,description:u,wrapperClassName:"blog-wrapper"},t&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--3"},r.a.createElement(m.a,{sidebar:a})),r.a.createElement("main",{className:"col col--7"},r.a.createElement(o.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(t,null)),r.a.createElement("div",null,g&&r.a.createElement(j,{editUrl:g})),(d||p)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:d,prevItem:p}))),!h&&t.toc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(y,{toc:t.toc})))))}},91:function(e,t){function a(e){let t,a=[];for(let n of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(n))a.push(parseInt(n,10));else if(t=n.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,n,r,l]=t;if(n&&l){n=parseInt(n),l=parseInt(l);const e=n<l?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(l+=e);for(let t=n;t!==l;t+=e)a.push(t)}}return a}t.default=a,e.exports=a},93:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(83),o=a(90),i=a(84),c=a(85),s=a(3),m={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},u={Prism:a(21).a,theme:m};function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var g=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},v=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},y=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=p({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=p({},a,{backgroundColor:null}),r};function f(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var b=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),d(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?y(e.theme,e.language):void 0;return t.themeDict=a})),d(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=p({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?p({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),d(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},i=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(i))}})),d(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=p({},f(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?p({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o})),d(this,"tokenize",(function(e,t,a,n){var r={code:t,grammar:a,language:n,tokens:[]};e.hooks.run("before-tokenize",r);var l=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,i=[],c=[i];o>-1;){for(;(l=n[o]++)<r[o];){var s=void 0,m=t[o],u=a[o][l];if("string"==typeof u?(m=o>0?m:["plain"],s=u):(m=v(m,u.type),u.alias&&(m=v(m,u.alias)),s=u.content),"string"==typeof s){var d=s.split(g),p=d.length;i.push({types:m,content:d[0]});for(var y=1;y<p;y++)h(i),c.push(i=[]),i.push({types:m,content:d[y]})}else o++,t.push(m),a.push(s),n.push(0),r.push(s.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return h(i),c}(void 0!==o?this.tokenize(t,n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(n.Component);var E=a(91),k=a.n(E),N={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(88),_=a(82),O=function(){var e=Object(_.useThemeConfig)().prism,t=Object(j.a)().isDarkTheme,a=e.theme||N,n=e.darkTheme||a;return t?n:a},T=a(54),x=a.n(T),w=/{([\d,-]+)}/,C=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},P=/(?:title=")(.*)(?:")/;function L(e){var t=e.children,a=e.className,o=e.metastring,c=Object(_.useThemeConfig)().prism,m=Object(n.useState)(!1),d=m[0],p=m[1],g=Object(n.useState)(!1),h=g[0],v=g[1];Object(n.useEffect)((function(){v(!0)}),[]);var y=Object(n.useRef)(null),f=[],E="",N=O(),j=Array.isArray(t)?t.join(""):t;if(o&&w.test(o)){var T=o.match(w)[1];f=k()(T).filter((function(e){return e>0}))}o&&P.test(o)&&(E=o.match(P)[1]);var L=a&&a.replace(/language-/,"");!L&&c.defaultLanguage&&(L=c.defaultLanguage);var B=j.replace(/\n$/,"");if(0===f.length&&void 0!==L){for(var I,R="",S=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return C(["js","jsBlock"]);case"jsx":case"tsx":return C(["js","jsBlock","jsx"]);case"html":return C(["js","jsBlock","html"]);case"python":case"py":return C(["python"]);default:return C()}}(L),A=j.replace(/\n$/,"").split("\n"),D=0;D<A.length;){var z=D+1,M=A[D].match(S);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":R+=z+",";break;case"highlight-start":I=z;break;case"highlight-end":R+=I+"-"+(z-1)+","}A.splice(D,1)}else D+=1}f=k()(R),B=A.join("\n")}var F=function(){!function(e,{target:t=document.body}={}){const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch{}a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus()}(B),p(!0),setTimeout((function(){return p(!1)}),2e3)};return r.a.createElement(b,Object(s.a)({},u,{key:String(h),theme:N,code:B,language:L}),(function(e){var t,a=e.className,n=e.style,o=e.tokens,c=e.getLineProps,m=e.getTokenProps;return r.a.createElement("div",{className:x.a.codeBlockContainer},E&&r.a.createElement("div",{style:n,className:x.a.codeBlockTitle},E),r.a.createElement("div",{className:Object(l.a)(x.a.codeBlockContent,L)},r.a.createElement("div",{tabIndex:0,className:Object(l.a)(a,x.a.codeBlock,"thin-scrollbar",(t={},t[x.a.codeBlockWithTitle]=E,t))},r.a.createElement("div",{className:x.a.codeBlockLines,style:n},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=c({line:e,key:t});return f.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),r.a.createElement("div",Object(s.a)({key:t},a),e.map((function(e,t){return r.a.createElement("span",Object(s.a)({key:t},m({token:e,key:t})))})))})))),r.a.createElement("button",{ref:y,type:"button","aria-label":Object(i.b)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:Object(l.a)(x.a.copyButton),onClick:F},d?r.a.createElement(i.a,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):r.a.createElement(i.a,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var B=a(7),I=(a(55),a(56)),R=a.n(I),S=function(e){return function(t){var a,n=t.id,o=Object(B.a)(t,["id"]),c=Object(_.useThemeConfig)().navbar.hideOnScroll;return n?r.a.createElement(e,o,r.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(l.a)("anchor",(a={},a[R.a.enhancedAnchor]=!c,a)),id:n}),o.children,r.a.createElement("a",{className:"hash-link",href:"#"+n,title:Object(i.b)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):r.a.createElement(e,o)}},A={code:function(e){var t=e.children;return"string"==typeof t?t.includes("\n")?r.a.createElement(L,e):r.a.createElement("code",e):t},a:function(e){return r.a.createElement(c.a,e)},pre:function(e){var t=e.children;return r.a.createElement(L,Object(n.isValidElement)(t)?null==t?void 0:t.props:{children:t})},h1:S("h1"),h2:S("h2"),h3:S("h3"),h4:S("h4"),h5:S("h5"),h6:S("h6")},D=a(94),z=a(57),M=a.n(z);t.a=function(e){var t,a,n=(t=Object(_.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return t(a,Object(i.b)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),s=e.children,m=e.frontMatter,u=e.metadata,d=e.truncated,p=e.isBlogPostPage,g=void 0!==p&&p,h=u.date,v=u.formattedDate,y=u.permalink,f=u.tags,b=u.readingTime,E=m.author,k=m.title,N=m.image,j=m.keywords,O=m.author_url||m.authorURL,T=m.author_title||m.authorTitle,x=m.author_image_url||m.authorImageURL;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{keywords:j,image:N}),r.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",r.a.createElement("header",null,r.a.createElement(a,{className:Object(l.a)("margin-bottom--sm",M.a.blogPostTitle)},g?k:r.a.createElement(c.a,{to:y},k)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:h,className:M.a.blogPostDate},v,b&&r.a.createElement(r.a.Fragment,null," \xb7 ",n(b)))),r.a.createElement("div",{className:"avatar margin-vert--md"},x&&r.a.createElement(c.a,{className:"avatar__photo-link avatar__photo",href:O},r.a.createElement("img",{src:x,alt:E})),r.a.createElement("div",{className:"avatar__intro"},E&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement(c.a,{href:O},E)),r.a.createElement("small",{className:"avatar__subtitle"},T)))))),r.a.createElement("div",{className:"markdown"},r.a.createElement(o.a,{components:A},s)),(f.length>0||d)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,r.a.createElement(i.a,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),f.map((function(e){var t=e.label,a=e.permalink;return r.a.createElement(c.a,{key:a,className:"margin-horiz--sm",to:a},t)}))),d&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:u.permalink,"aria-label":"Read more about "+k},r.a.createElement("strong",null,r.a.createElement(i.a,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}}}]);