(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/0+H":function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(i("q1tI")),s=i("lwAK");function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,i=void 0!==t&&t,n=e.hybrid,o=void 0!==n&&n,s=e.hasQuery;return i||o&&(void 0!==s&&s)}t.isInAmpMode=r,t.useAmp=function(){return r(o.default.useContext(s.AmpStateContext))}},"3niX":function(e,t,i){"use strict";t.__esModule=!0,t.flush=function(){var e=s.cssRules();return s.flush(),e},t.default=void 0;var n,o=i("q1tI");var s=new(((n=i("SevZ"))&&n.__esModule?n:{default:n}).default),r=function(e){var t,i;function n(t){var i;return(i=e.call(this,t)||this).prevProps={},i}i=e,(t=n).prototype=Object.create(i.prototype),t.prototype.constructor=t,t.__proto__=i,n.dynamic=function(e){return e.map((function(e){var t=e[0],i=e[1];return s.computeId(t,i)})).join(" ")};var o=n.prototype;return o.shouldComponentUpdate=function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)},o.componentWillUnmount=function(){s.remove(this.props)},o.render=function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&s.remove(this.prevProps),s.add(this.props),this.prevProps=this.props),null},n}(o.Component);t.default=r},"7W2i":function(e,t,i){var n=i("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}},"8Kt/":function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=n(i("q1tI")),s=n(i("Xuae")),r=i("lwAK"),a=i("FYa8"),l=i("/0+H");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}t.defaultHead=c;var d=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var i=o.default.Children.toArray(t.props.children);return e.concat(i)}),[]).reduce(u,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,i=new Set,n={};return function(o){var s=!0;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){var r=o.key.slice(o.key.indexOf("$")+1);e.has(r)?s=!1:e.add(r)}switch(o.type){case"title":case"base":t.has(o.type)?s=!1:t.add(o.type);break;case"meta":for(var a=0,l=d.length;a<l;a++){var c=d[a];if(o.props.hasOwnProperty(c))if("charSet"===c)i.has(c)?s=!1:i.add(c);else{var u=o.props[c],p=n[c]||new Set;p.has(u)?s=!1:(p.add(u),n[c]=p)}}}return s}}()).reverse().map((function(e,t){var i=e.key||t;return o.default.cloneElement(e,{key:i})}))}var f=s.default();function m(e){var t=e.children;return o.default.createElement(r.AmpStateContext.Consumer,null,(function(e){return o.default.createElement(a.HeadManagerContext.Consumer,null,(function(i){return o.default.createElement(f,{reduceComponentsToState:p,handleStateChange:i,inAmpMode:l.isInAmpMode(e)},t)}))}))}m.rewind=f.rewind,t.default=m},"8oxB":function(e,t){var i,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(i===setTimeout)return setTimeout(e,0);if((i===s||!i)&&setTimeout)return i=setTimeout,setTimeout(e,0);try{return i(e,0)}catch(t){try{return i.call(null,e,0)}catch(t){return i.call(this,e,0)}}}!function(){try{i="function"===typeof setTimeout?setTimeout:s}catch(e){i=s}try{n="function"===typeof clearTimeout?clearTimeout:r}catch(e){n=r}}();var l,c=[],u=!1,d=-1;function p(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&f())}function f(){if(!u){var e=a(p);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===r||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var i=1;i<arguments.length;i++)t[i-1]=arguments[i];c.push(new m(e,t)),1!==c.length||u||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},"9kyW":function(e,t,i){"use strict";e.exports=function(e){for(var t=5381,i=e.length;i;)t=33*t^e.charCodeAt(--i);return t>>>0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},EbDI:function(e,t){e.exports=function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}},FYa8:function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(i("q1tI"));t.HeadManagerContext=o.createContext(null)},Ijbi:function(e,t){e.exports=function(e){if(Array.isArray(e)){for(var t=0,i=new Array(e.length);t<e.length;t++)i[t]=e[t];return i}}},MX0m:function(e,t,i){e.exports=i("3niX")},Nsbk:function(e,t){function i(t){return e.exports=i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},i(t)}e.exports=i},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,i){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},RIqP:function(e,t,i){var n=i("Ijbi"),o=i("EbDI"),s=i("Bnag");e.exports=function(e){return n(e)||o(e)||s()}},RNiq:function(e,t,i){"use strict";i.r(t);var n=i("MX0m"),o=i.n(n),s=i("q1tI"),r=i.n(s),a=i("8Kt/"),l=i.n(a),c=r.a.createElement;function u(e){return c("div",{className:o.a.dynamic([["555684230",[e.color||"rgba(255,255,255,1)",e.iconColor||e.color||"rgba(255,255,255,1)",e.iconColor||e.color||"rgba(255,255,255,1)"]]])+" container"},e.text||"none",c(o.a,{id:"555684230",dynamic:[e.color||"rgba(255,255,255,1)",e.iconColor||e.color||"rgba(255,255,255,1)",e.iconColor||e.color||"rgba(255,255,255,1)"]},["@-webkit-keyframes iconScrollAnim-__jsx-style-dynamic-selector{0%{opacity:1;height:8px;}20%{opacity:1;height:8px;}30%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;height:19px;}40%{opacity:1;}80%{-webkit-transform:translateY(19px);-ms-transform:translateY(19px);transform:translateY(19px);opacity:0;height:0;}81%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:0;height:8px;}100%{opacity:1;height:8px;}}","@keyframes iconScrollAnim-__jsx-style-dynamic-selector{0%{opacity:1;height:8px;}20%{opacity:1;height:8px;}30%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:1;height:19px;}40%{opacity:1;}80%{-webkit-transform:translateY(19px);-ms-transform:translateY(19px);transform:translateY(19px);opacity:0;height:0;}81%{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);opacity:0;height:8px;}100%{opacity:1;height:8px;}}",".container.__jsx-style-dynamic-selector{position:relative;display:block;font-size:11pt;font-weight:bold;color:".concat(e.color||"rgba(255,255,255,1)",";-webkit-text-decoration:none;text-decoration:none;padding:10px 4px 4px 40px;max-width:170px;text-align:center;}"),".container.__jsx-style-dynamic-selector:before{display:block;position:absolute;top:4px;left:0;width:24px;height:40px;border:2px solid ".concat(e.iconColor||e.color||"rgba(255,255,255,1)",';border-radius:12px;content:"";}'),".container.__jsx-style-dynamic-selector:after{display:block;position:absolute;top:12px;left:13px;width:2px;height:8px;background:".concat(e.iconColor||e.color||"rgba(255,255,255,1)",';border-radius:1px;content:"";-webkit-animation-name:iconScrollAnim-__jsx-style-dynamic-selector;animation-name:iconScrollAnim-__jsx-style-dynamic-selector;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-delay:2s;animation-delay:2s;}')]))}var d=r.a.createElement;function p(){var e=Object(s.useState)(1),t=e[0],i=e[1],n=function(e){var t=document.documentElement,n=document.body,o="scrollTop",s="scrollHeight",r=(t[o]||n[o])/((t[s]||n[s])-t.clientHeight)*100;i(480*r/100)};Object(s.useEffect)((function(){return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}}));var r=function(e){console.log(e),document.getElementById(e).scrollIntoView()};return d("div",{id:"welcome-page",className:"jsx-2329205105"},d("div",{style:{height:"100vh",width:"100%"},className:"jsx-2329205105 spaceHolder"}),d("div",{className:"jsx-2329205105 navbar"},d("div",{className:"jsx-2329205105 inside"},d("div",{className:"jsx-2329205105"},d("img",{src:"https://afaithraf.github.io/my-portfolio/assets/logo.png",alt:"ashraf logo",className:"jsx-2329205105 logo"})),d("div",{className:"jsx-2329205105 navigation"},d("ul",{className:"jsx-2329205105"},d("li",{onClick:r.bind(this,"welcome-page"),className:"jsx-2329205105"},"Welcome"),d("li",{onClick:r.bind(this,"about-page"),className:"jsx-2329205105"},"About me"),d("li",{onClick:r.bind(this,"work-page"),className:"jsx-2329205105"},"Work"),d("li",{onClick:r.bind(this,"contact-page"),className:"jsx-2329205105"},"Contact")),d("div",{style:{width:t},className:"jsx-2329205105 indicator"})))),d("div",{className:"jsx-2329205105 cont"},d("main",{className:"jsx-2329205105 content"},d("div",{className:"jsx-2329205105 left"},d("div",{className:"jsx-2329205105"},d("p",{className:"jsx-2329205105"},"I\u2019m ",d("span",{className:"jsx-2329205105 bold"},"Achraf"),", a ",d("span",{className:"jsx-2329205105 bold"},"Web Designer")," that codes. i\u2019m dedicated to ",d("span",{className:"jsx-2329205105 bold"},"UX"),", ",d("span",{className:"jsx-2329205105 bold"},"Coding")," and ",d("span",{className:"jsx-2329205105 bold"},"Tech"),".")),d("div",{className:"jsx-2329205105 divider"}),d("div",{className:"jsx-2329205105"},d("p",{className:"jsx-2329205105"},"I don't just build websites, I build websites that ",d("span",{className:"jsx-2329205105 bold"},"IMPRESS"),".")),d("div",{className:"jsx-2329205105"},d("button",{onClick:r.bind(this,"contact-page"),className:"jsx-2329205105 yob"},"Contact"))),d("div",{className:"jsx-2329205105 right"},d("img",{src:"https://afaithraf.github.io/my-portfolio/assets/me.png",alt:"ashraf portrait",className:"jsx-2329205105 portrait"}))),d("div",{className:"jsx-2329205105 scroll"},d(u,{color:"#fff",iconColor:"#f7f749",text:"Start scrolling to see more"}))),d(o.a,{id:"2329205105"},["button.yob.jsx-2329205105{background:#ffff00;color:#010101;border:2px solid #ffff00;padding:14px 60px;font-size:13pt;font-weight:600;-webkit-transition-duration:200ms;transition-duration:200ms;cursor:pointer;}","button.yob.jsx-2329205105:hover{background:#f7f749;border-color:#f7f749;}",".bold.jsx-2329205105{font-weight:bold;}",".cont.jsx-2329205105{background:#111111;height:100vh;width:100%;color:#f1f1f1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;font-weight:300;position:fixed;top:0;}",".navbar.jsx-2329205105{left:0;right:0;position:fixed;top:0;color:#f1f1f1;font-weight:500;z-index:2;}",".inside.jsx-2329205105{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:0 10vw;}",".logo.jsx-2329205105{margin:24px 0;height:30px;}",".scroll.jsx-2329205105{margin:0 auto;margin-bottom:20px;}",".content.jsx-2329205105{width:70%;margin:auto;display:grid;grid-template-columns:auto auto;grid-gap:16px;}",".left.jsx-2329205105{margin-right:100px;font-size:26pt;max-width:60vw;text-align:left;margin-top:40px;}",".divider.jsx-2329205105{height:4px;width:140px;background:#ffff00;}",".portrait.jsx-2329205105{height:auto;width:460px;max-width:100%;border:2px solid #ffff00;border-radius:100%;}",".navigation.jsx-2329205105 ul.jsx-2329205105{list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:1px;padding:0;}",".navigation.jsx-2329205105 ul.jsx-2329205105 li.jsx-2329205105{padding:10px 0;margin:0;width:120px;text-align:center;cursor:pointer;}",".navigation.jsx-2329205105 .indicator.jsx-2329205105{height:5px;width:0px;background:#ffff00;border-radius:1px;}","@media (max-width:600px){.navbar.jsx-2329205105{display:none;}.right.jsx-2329205105{grid-row-start:1;}.left.jsx-2329205105{font-size:1.1em;margin:auto;text-align:center;}.portrait.jsx-2329205105{width:240px;}.content.jsx-2329205105{grid-template-columns:auto;text-align:center;}.divider.jsx-2329205105{margin:auto;}}","@media (min-width:600px){.navbar.jsx-2329205105{display:none;}.left.jsx-2329205105{font-size:1.3em;margin:auto;text-align:center;}.portrait.jsx-2329205105{width:300px;}.right.jsx-2329205105{grid-row-start:1;}.content.jsx-2329205105{grid-template-columns:auto;text-align:center;}.divider.jsx-2329205105{margin:auto;}}","@media (min-width:768px){.navbar.jsx-2329205105{display:block;}.left.jsx-2329205105{font-size:1.4em;text-align:left;}.portrait.jsx-2329205105{width:240px;}.content.jsx-2329205105{grid-template-columns:auto auto;text-align:left;}.right.jsx-2329205105{grid-column-start:2;}.divider.jsx-2329205105{margin:0;margin-right:auto;}}","@media (min-width:992px){.left.jsx-2329205105{font-size:1.8em;}.portrait.jsx-2329205105{width:300px;}}","@media (min-width:1400px){.left.jsx-2329205105{font-size:2.6em;}.portrait.jsx-2329205105{width:400px;}}"]))}var f=r.a.createElement;function m(){return f("div",{id:"about-page",className:"jsx-865466259 cont"},f("div",{className:"jsx-865466259 box"},f("h2",{className:"jsx-865466259"},"About Me"),f("p",{className:"jsx-865466259"},"I live, study in Oujda, Morocco. I design and develop cross platform websites. I also freelance when I can, mostly building custom websites and apps that you can\u2019t get from a template.")),f("div",{className:"jsx-865466259 box"},f("h2",{className:"jsx-865466259"},"Skills"),f("div",{className:"jsx-865466259 tools"},f("img",{src:"/assets/ux-ui.png",alt:"",className:"jsx-865466259"}),f("img",{src:"/assets/hjc.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://sass-lang.com/assets/img/styleguide/color-1c4aab2b.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png",alt:"",className:"jsx-865466259"}))),f("div",{className:"jsx-865466259 box"},f("h2",{className:"jsx-865466259"},"Tools I Use"),f("div",{className:"jsx-865466259 tools"},f("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Adobe_Photoshop_Express_logo.svg/2000px-Adobe_Photoshop_Express_logo.svg.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Adobe_XD_CC_icon.svg/1200px-Adobe_XD_CC_icon.svg.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://lh3.googleusercontent.com/proxy/6XTRG-KX_pa_Wq19jo4il4IPJQIsmHjgA1kYr1_bsk0YNMRqwCxbE9s1fpQwNt2cqHPSl9stT4AvXyD3QdqdjTVFS8F7XssZeYwW77cgZ9d8x5T-kGIfbg",alt:"",className:"jsx-865466259"}),f("img",{src:"https://seeklogo.com/images/V/visual-studio-code-logo-284BC24C39-seeklogo.com.png",alt:"",className:"jsx-865466259"}),f("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png",alt:"",className:"jsx-865466259"}))),f(o.a,{id:"865466259"},[".cont.jsx-865466259{width:100%;position:relative;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);text-align:center;color:#ffffff;}","h2.jsx-865466259{margin-top:6px;}",".box.jsx-865466259{border-top:1px solid #ffffff38;border-bottom:1px solid #ffffff38;padding:40px;}",".tools.jsx-865466259 img.jsx-865466259{height:70px;margin:20px;}","p.jsx-865466259{max-width:700px;margin:auto;font-size:1.3em;font-weight:500;color:#ececec;}"]))}var h=r.a.createElement;function x(){return h("div",{id:"work-page",className:"jsx-2497854279 cont"},h("h1",{className:"jsx-2497854279"},"Previous Works"),h("div",{className:"jsx-2497854279 posts"},h("div",{className:"jsx-2497854279 post"},h("img",{src:"https://afaithraf.github.io/my-portfolio//assets/works/1.jpg",alt:"",className:"jsx-2497854279"})),h("div",{className:"jsx-2497854279 post"},h("img",{src:"https://afaithraf.github.io/my-portfolio//assets/works/2.jpg",alt:"",className:"jsx-2497854279"}))),h(o.a,{id:"2497854279"},[".cont.jsx-2497854279{width:100%;position:relative;text-align:center;color:#ffffff;height:auto;background:#010101;padding:30px;}",".posts.jsx-2497854279{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".post.jsx-2497854279{height:400px;width:500px;margin:60px;border-radius:16px;overflow:hidden;border:1px solid #ffff00;cursor:default;}",".post.jsx-2497854279 img.jsx-2497854279{width:100%;height:100%;margin:0;padding:0;}"]))}var g=r.a.createElement;function b(){return g("div",{id:"contact-page",className:"jsx-1188179570 cont"},g("div",{className:"jsx-1188179570 box"},g("div",{className:"jsx-1188179570 left"},g("div",{className:"jsx-1188179570 overlay"},g("div",{className:"jsx-1188179570 part"},g("h4",{className:"jsx-1188179570"},"Address"),g("span",{className:"jsx-1188179570"},"lots Mostaqbal, Sidi Maafa, Oujda, 60000 Morocco")),g("div",{className:"jsx-1188179570 part"},g("h4",{className:"jsx-1188179570"},"Email"),g("span",{className:"jsx-1188179570"},"afaithraf@gmail.com")),g("div",{className:"jsx-1188179570 part"},g("h4",{className:"jsx-1188179570"},"Phone/Whatsapp"),g("span",{className:"jsx-1188179570"},"+212660157611")))),g("div",{className:"jsx-1188179570 right"},g("h2",{className:"jsx-1188179570"},"Send Me A Message"),g("form",{className:"jsx-1188179570"},g("input",{type:"text",name:"Name",placeholder:"Name",className:"jsx-1188179570"}),g("input",{type:"email",name:"Email",placeholder:"Email",className:"jsx-1188179570"}),g("input",{type:"text",name:"Phone",placeholder:"Phone Number",className:"jsx-1188179570"}),g("textarea",{placeholder:"Write me Something here...",className:"jsx-1188179570"}),g("br",{className:"jsx-1188179570"}),g("button",{className:"jsx-1188179570"},"Send")))),g(o.a,{id:"1188179570"},[".cont.jsx-1188179570{width:100%;height:100vh;position:relative;background:#111111b3;-webkit-backdrop-filter:blur(25px);backdrop-filter:blur(25px);text-align:center;color:#ffffff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}",".box.jsx-1188179570{height:80%;width:90vw;max-width:1000px;background:#fff;margin:auto;display:grid;grid-template-rows:100%;grid-template-columns:50% 50%;}",'.box.jsx-1188179570 .left.jsx-1188179570{background:url("https://afaithraf.github.io/my-portfolio//assets/cbg.jpg");background-size:cover;padding:0;}',".overlay.jsx-1188179570{background:#00000090;height:100%;width:100%;padding:0;margin:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;text-align:left;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".left.jsx-1188179570 h4.jsx-1188179570{color:#fff;margin-top:0;font-size:1.2em;}",".part.jsx-1188179570{margin:30px 80px;color:#e1e1e1;}",".right.jsx-1188179570{color:#010101;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}",".right.jsx-1188179570 input.jsx-1188179570{height:40px;width:80%;margin:10px;padding:10px;}",".right.jsx-1188179570 textarea.jsx-1188179570{min-width:80%;max-width:80%;height:200px;margin:10px;padding:10px;}",".right.jsx-1188179570 button.jsx-1188179570{background:#ffff00;border:0;color:#010101;padding:10px 20px;float:right;margin:10px 40px;font-size:1em;}"]))}var y=r.a.createElement;t.default=function(){return y("div",{className:"jsx-3558990243 container"},y(l.a,null,y("title",{className:"jsx-3558990243"},"Ashraf El ghinoussi's Cool Portfolio"),y("link",{rel:"icon",href:"/favicon.ico",className:"jsx-3558990243"})),y(p,null),y(m,null),y(x,null),y(b,null),y(o.a,{id:"3558990243"},["html,body{padding:0;margin:0;font-family:'Raleway',-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen, Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;font-weight:400;}","*{box-sizing:border-box;}"]))}},SevZ:function(e,t,i){"use strict";t.__esModule=!0,t.default=void 0;var n=s(i("9kyW")),o=s(i("bVZc"));function s(e){return e&&e.__esModule?e:{default:e}}var r=function(){function e(e){var t=void 0===e?{}:e,i=t.styleSheet,n=void 0===i?null:i,s=t.optimizeForSpeed,r=void 0!==s&&s,a=t.isBrowser,l=void 0===a?"undefined"!==typeof window:a;this._sheet=n||new o.default({name:"styled-jsx",optimizeForSpeed:r}),this._sheet.inject(),n&&"boolean"===typeof r&&(this._sheet.setOptimizeForSpeed(r),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var i=this.getIdAndRules(e),n=i.styleId,o=i.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var s=o.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[n]=s,this._instancesCounts[n]=1}},t.remove=function(e){var t=this,i=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(i in this._instancesCounts,"styleId: `"+i+"` not found"),this._instancesCounts[i]-=1,this._instancesCounts[i]<1){var n=this._fromServer&&this._fromServer[i];n?(n.parentNode.removeChild(n),delete this._fromServer[i]):(this._indices[i].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[i]),delete this._instancesCounts[i]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],i=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return i[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.createComputeId=function(){var e={};return function(t,i){if(!i)return"jsx-"+t;var o=String(i),s=t+o;return e[s]||(e[s]="jsx-"+(0,n.default)(t+"-"+o)),e[s]}},t.createComputeSelector=function(e){void 0===e&&(e=/__jsx-style-dynamic-selector/g);var t={};return function(i,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var o=i+n;return t[o]||(t[o]=n.replace(e,i)),t[o]}},t.getIdAndRules=function(e){var t=this,i=e.children,n=e.dynamic,o=e.id;if(n){var s=this.computeId(o,n);return{styleId:s,rules:Array.isArray(i)?i.map((function(e){return t.computeSelector(s,e)})):[this.computeSelector(s,i)]}}return{styleId:this.computeId(o),rules:Array.isArray(i)?i:[i]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.default=r},SksO:function(e,t){function i(t,n){return e.exports=i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},i(t,n)}e.exports=i},W8MJ:function(e,t){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}e.exports=function(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}},Xuae:function(e,t,i){"use strict";var n=i("lwsE"),o=i("PJYZ"),s=i("W8MJ"),r=i("7W2i"),a=i("a1gu"),l=i("Nsbk"),c=i("RIqP");function u(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}Object.defineProperty(t,"__esModule",{value:!0});var d=i("q1tI"),p=!1;t.default=function(){var e,t=new Set;function i(i){e=i.props.reduceComponentsToState(c(t),i.props),i.props.handleStateChange&&i.props.handleStateChange(e)}return function(c){r(m,c);var d,f=(d=m,function(){var e,t=l(d);if(u()){var i=l(this).constructor;e=Reflect.construct(t,arguments,i)}else e=t.apply(this,arguments);return a(this,e)});function m(e){var s;return n(this,m),s=f.call(this,e),p&&(t.add(o(s)),i(o(s))),s}return s(m,null,[{key:"rewind",value:function(){var i=e;return e=void 0,t.clear(),i}}]),s(m,[{key:"componentDidMount",value:function(){t.add(this),i(this)}},{key:"componentDidUpdate",value:function(){i(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),i(this)}},{key:"render",value:function(){return null}}]),m}(d.Component)}},a1gu:function(e,t,i){var n=i("cDf5"),o=i("PJYZ");e.exports=function(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?o(e):t}},bVZc:function(e,t,i){"use strict";(function(e){function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.__esModule=!0,t.default=void 0;var n="undefined"!==typeof e&&e.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,i=t.name,s=void 0===i?"stylesheet":i,a=t.optimizeForSpeed,l=void 0===a?n:a,c=t.isBrowser,u=void 0===c?"undefined"!==typeof window:c;r(o(s),"`name` must be a string"),this._name=s,this._deletedRulePlaceholder="#"+s+"-deleted-rule____{}",r("boolean"===typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,s,a,l=e.prototype;return l.setOptimizeForSpeed=function(e){r("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),r(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},l.isOptimizeForSpeed=function(){return this._optimizeForSpeed},l.inject=function(){var e=this;if(r(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,i){return"number"===typeof i?e._serverSheet.cssRules[i]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),i},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},l.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},l.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},l.insertRule=function(e,t){if(r(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var i=this.getSheet();"number"!==typeof t&&(t=i.cssRules.length);try{i.insertRule(e,t)}catch(a){return n||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var s=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,s))}return this._rulesCount++},l.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var i=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!i.cssRules[e])return e;i.deleteRule(e);try{i.insertRule(t,e)}catch(s){n||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),i.insertRule(this._deletedRulePlaceholder,e)}}else{var o=this._tags[e];r(o,"old rule at index `"+e+"` not found"),o.textContent=t}return e},l.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];r(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},l.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},l.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,i){return i?t=t.concat(Array.prototype.map.call(e.getSheetForTag(i).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},l.makeStyleTag=function(e,t,i){t&&r(o(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-"+e,""),t&&n.appendChild(document.createTextNode(t));var s=document.head||document.getElementsByTagName("head")[0];return i?s.insertBefore(n,i):s.appendChild(n),n},t=e,(s=[{key:"length",get:function(){return this._rulesCount}}])&&i(t.prototype,s),a&&i(t,a),e}();function r(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s}).call(this,i("8oxB"))},cDf5:function(e,t){function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(t){return"function"===typeof Symbol&&"symbol"===i(Symbol.iterator)?e.exports=n=function(e){return i(e)}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":i(e)},n(t)}e.exports=n},lwAK:function(e,t,i){"use strict";var n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)Object.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t.default=e,t};Object.defineProperty(t,"__esModule",{value:!0});var o=n(i("q1tI"));t.AmpStateContext=o.createContext({})},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},vlRD:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i("RNiq")}])}},[["vlRD",0,1]]]);