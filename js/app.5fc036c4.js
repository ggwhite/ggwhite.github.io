(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],u=0,d=[];u<s.length;u++)i=s[u],a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==a[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},o=[];function s(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"78529850"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"af26e639"}[e]+".css",a=c.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var l=o[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===a))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete i[e],p.parentNode.removeChild(p),n(o)},p.href=a;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){i[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=o);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=s(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+i+")");o.type=r,o.request=i,n[1](o)}a[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var p=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"06ce":function(e,t,n){},"160f":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"description"},["string"===typeof e.description?n("div",[e._v("\n    "+e._s(e.description)+"\n  ")]):e._e(),"object"===typeof e.description&&Array.isArray(e.description)?n("ul",e._l(e.description,function(t,r){return n("li",{key:r},[e._v("\n      "+e._s(t)+"\n    ")])}),0):e._e(),"object"!==typeof e.description||Array.isArray(e.description)?e._e():n("ul",e._l(e.description,function(t,r){return n("li",{key:r},[n("label",[e._v(e._s(r))]),n("description",{attrs:{description:t}})],1)}),0)])},i=[],a={name:"description",props:{description:String|Object}},o=a,s=(n("d134"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"5d480a12",null);t["a"]=c.exports},1766:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project"},[n("div",{staticClass:"name"},[n("label",[e._v(e._s(e.name))]),n("label",[e._v(e._s(e.start)+" - "+e._s(e.end))])]),n("description",{attrs:{description:e.description}})],1)},i=[],a=n("160f"),o={name:"project",props:{name:String,start:String,end:String,description:String|Object},components:{Description:a["a"]}},s=o,c=(n("7aad"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,"41f5f761",null);t["a"]=l.exports},"1f01":function(e,t,n){"use strict";var r=n("06ce"),i=n.n(r);i.a},"325d":function(e,t,n){},"4f52":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"summary-qualification"},["string"===typeof e.summary?n("div",[e._v("\n      "+e._s(e.summary)+"\n  ")]):e._e(),Array.isArray(e.summary)?n("ul",e._l(e.summary,function(t){return n("li",{key:t},[e._v(e._s(t))])}),0):e._e()])},i=[],a={name:"summary-qualification",props:{summary:String|Array}},o=a,s=(n("db75"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"ad05b3b0",null);t["a"]=c.exports},5662:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795"),n("130f"),n("ac6a"),n("96cf");var r=n("2b0e"),i=n("9f7b");n("ab8b"),n("2dd8");r["a"].use(i["a"]);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("div",{attrs:{id:"links"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/resume/en"}},[e._v("Resume(English)")]),n("router-link",{attrs:{to:"/resume/zh-tw"}},[e._v("Resume(Chinese)")])],1),n("div",{attrs:{id:"social"}},[n("a",{staticClass:"email",attrs:{href:e._email}}),n("a",{staticClass:"github",attrs:{href:e.github,target:"_blank"}}),n("a",{staticClass:"linkedin",attrs:{href:e.linkedin,target:"_blank"}})])]),n("router-view")],1)},o=[],s={name:"app",data:function(){return{email:"eddy6868@msn.com",github:"https://github.com/ggwhite",linkedin:"https://linkedin.com/in/white-chang"}},computed:{_email:function(){return"mailto:"+this.email}}},c=s,l=(n("7c55"),n("2877")),u=Object(l["a"])(c,a,o,!1,null,null,null),d=u.exports,p=n("8c4f"),f=n("acbc");r["a"].use(p["a"]);var m=new p["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:f["default"]},{path:"/resume/en",name:"resume-en",component:function(){return n.e("about").then(n.bind(null,"acbc"))}},{path:"/resume/zh-tw",name:"resume-zh-tw",component:function(){return n.e("about").then(n.bind(null,"88cf"))}}]});r["a"].config.productionTip=!1,new r["a"]({router:m,render:function(e){return e(d)}}).$mount("#app")},"5b47":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"education"},[n("div",{staticClass:"degree"},[n("b",[e._v(e._s(e.degree))]),n("b",[e._v(e._s(e.start)+" - "+e._s(e.end))])]),n("b",[e._v(e._s(e.school))])])},i=[],a=n("160f"),o={name:"education",props:{degree:String,school:String,start:String,end:String,description:String|Object},components:{Description:a["a"]}},s=o,c=(n("1f01"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,"b6edbddc",null);t["a"]=l.exports},"5c48":function(e,t,n){},"61cd":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"experience"},[n("div",{staticClass:"position"},[e._v(e._s(e.position))]),n("div",{staticClass:"period"},[e._v(e._s(e.start)+" - "+e._s(e.end))]),n("div",{staticClass:"company"},[e._v(e._s(e.company))]),n("description",{attrs:{description:e.description}})],1)},i=[],a=n("160f"),o={name:"experience",props:{company:String,position:String,start:String,end:String,description:String|Object},components:{Description:a["a"]}},s=o,c=(n("7a4f"),n("2877")),l=Object(c["a"])(s,r,i,!1,null,"70b69132",null);t["a"]=l.exports},"66aa":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profile"},[n("div",{staticClass:"photo"},[n("div",[n("img",{attrs:{src:e.photo}})])]),e._m(0),n("div",{staticClass:"phone"},[e._v(e._s(e.phone))]),n("div",{staticClass:"email"},[n("a",{attrs:{href:e._email}},[e._v(e._s(e.email))])]),n("div",{staticClass:"github"},[n("a",{attrs:{href:e.github,target:"_blank"}},[e._v(e._s(e._f("url")(e.github)))])]),n("div",{staticClass:"linkedin"},[n("a",{attrs:{href:e.linkedin,target:"_blank"}},[e._v(e._s(e._f("url")(e.linkedin)))])]),e._m(1),e._l(e.programming,function(t,r){return n("div",{key:r+t,staticClass:"lang"},[n("label",[e._v(e._s(r))]),n("ul",{staticClass:"libs"},e._l(t,function(t){return n("li",{key:r+t,staticClass:"lib"},[e._v(e._s(t))])}),0)])}),e._m(2),e._l(e.tools,function(t,r){return n("div",{key:r+t,staticClass:"lang"},[n("label",[e._v(e._s(r))]),n("ul",{staticClass:"libs"},e._l(t,function(t){return n("li",{key:r+t,staticClass:"lib"},[e._v(e._s(t))])}),0)])})],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Personal Info")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Programming")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Tools")])])}],a={name:"profile",props:{photo:String,phone:String,email:String,github:String,linkedin:String,programming:Object,tools:Object},computed:{_email:function(){return"mailto:"+this.email}},filters:{url:function(e){return e=e.replace("http://",""),e=e.replace("https://",""),e}}},o=a,s=(n("87f13"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"feefeee8",null);t["a"]=c.exports},7113:function(e,t,n){},"7a4f":function(e,t,n){"use strict";var r=n("cfbc"),i=n.n(r);i.a},"7aad":function(e,t,n){"use strict";var r=n("7113"),i=n.n(r);i.a},"7c55":function(e,t,n){"use strict";var r=n("5c48"),i=n.n(r);i.a},8311:function(e,t,n){e.exports=n.p+"img/photo.8b379025.jpg"},"87f1":function(e,t,n){},"87f13":function(e,t,n){"use strict";var r=n("5662"),i=n.n(r);i.a},8904:function(e,t,n){"use strict";var r=n("d6fc"),i=n.n(r);i.a},a692:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-head"},[n("b",{staticClass:"name"},[e._v(e._s(e.name))]),n("b",{staticClass:"position"},[e._v(e._s(e.position))])])},i=[],a={name:"main-head",props:{name:String,position:String}},o=a,s=(n("8904"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"78603b0f",null);t["a"]=c.exports},acbc:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"resume container"},[n("nav",[n("a",{staticClass:"download",attrs:{href:e.pdf}})]),n("main-head",{attrs:{name:e.profile.name,position:e.profile.position}}),n("profile",{attrs:{photo:e.profile.photo,email:e.profile.email,phone:e.profile.phone,github:e.profile.github,linkedin:e.profile.linkedin,programming:e.profile.programming,tools:e.profile.tools}}),n("section",[e._m(0),n("summary-qualification",{attrs:{summary:e.summary}})],1),n("section",[e._m(1),e._l(e.experience,function(e){return n("experience",{key:e.id,attrs:{company:e.company,position:e.position,start:e.start,end:e.end,description:e.description}})})],2),n("section",[e._m(2),e._l(e.project,function(e){return n("project",{key:e.id,attrs:{name:e.name,start:e.start,end:e.end,description:e.description}})})],2),n("section",[e._m(3),e._l(e.education,function(e){return n("education",{key:e.id,attrs:{degree:e.degree,school:e.school,start:e.start,end:e.end}})})],2)],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Summary of Qualifications")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Employment History")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Piecework Project")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"title"},[n("b",[e._v("Education")])])}],a=n("a692"),o=n("4f52"),s=n("66aa"),c=n("61cd"),l=n("1766"),u=n("5b47"),d=n("8311"),p=n.n(d),f={name:"ResumeEn",components:{MainHead:a["a"],SummaryQualification:o["a"],Profile:s["a"],Experience:c["a"],Project:l["a"],Education:u["a"]},data:function(){return{pdf:"/WhiteChang-Resume.en.pdf",profile:{name:"White Chang",position:"Senior Backend Engineer",email:"eddy6868@msn.com",phone:"+886 928827611",github:"https://github.com/ggwhite",linkedin:"https://linkedin.com/in/white-chang",photo:p.a,programming:{Golang:["Gin","Gorilla"],Java:["Spring","Quartz"],"Javascript & Node.js":["Vue.js","jQuery"],PHP:["Phalcon","Yii","CodeIgniter"],"HTML & CSS":["Bootstrap","Less.js"]},tools:{DevOps:["Docker","Jenkins","Ansible"],"Data Store":["Memcached","Redis","Elasticsearch","SQL Server","Oracle","Postgres","MySQL"],"Message Queue":["Kafka"],Testing:["Postman","JMeter"],Other:["Git","Logstash","Kibana"]}},summary:["7+ years experience as a backend engineer.","Ability to solve problems efficiently.","Possessing all-round analysis and programming skills.","Methodical yet creative and having a proven ability for effective problem-solving."],experience:[{id:"exp-1",company:"WistronITS Corp. Stationed: Taiwan Mobile",position:"Senior Backend Engineer",start:"Sup. 2016",end:"Present",description:{"Led 2 engineers, Developed Backend server":{"Developed micro-service, provided RESTful API web service":["OpenId Service (Golang, Google APIs)","Product Service (Java, SpringBoot, Golang, SQL Server, Memcached)","Payment Service (Golang, SQL Server, Memcached)","Stock Service (Golang, SQL Server, Memcached)","Kafka Forwarder (Golang, Kafka)"],"Maintained Invoice & Receipt Process System (Java, Spring, JBoss, Oracle\b)":""},"Developed Frontend components":"Developed Vue.js components for \bthe CMS \b\bteam, increased development efficiency (Vue.js, Webpack)","Built-up automated test / static-analysis / deploy mechanism":"","Created dev environments and tools with Docker":["Jenkins Server: Auto build Maven, NPM project and publish to Nexus Server","Nexus Server: Managed private Maven repository and NPM registry","Gitbook Demo: Wrote development documents with Gitbook","Vue Components Demo","Tomcat Server"]}},{id:"exp-2",company:"Kangda Info Corp.",position:"Software Engineer",start:"Jul. 2015",end:"Aug. 2016",description:{"Developed project for MOST(Ministry of Science and Technology, R.O.C.) Department":""}},{id:"exp-3",company:"BenQ Corp.",position:"Software Engineer",start:"Nov. 2013",end:"Feb. 2015",description:{"Developed 『Qmobi』, POC of E-Commerce (PHP, Wordpress, MySQL)":"","Developed 『eBookTaiwan』(now: digiPages) (Javascript, jQuery)":""}},{id:"exp-4",company:"Open-Life Corp.",position:"Software Engineer",start:"Nov. 2011",end:"Oct. 2013",description:{"Developed and maintained CMS (PHP, Yii, Postgres)":"","Developed event site (PHP)":""}}],project:[{id:"project-1",name:"Muxin CarePro CMS(Content Management System)",start:"Nov. 2013",end:"Mar. 2015",description:["5 members team work.","Created Server, Linode account, base on CentOS, Apache, PHP, Postgres SQL."]}],education:[{id:"edu-1",degree:"Bachelor of Electrical Engineering",school:"National Kaohsiung University of Science and Technology(NKUST), Taiwan",start:"Sep. 2006",end:"Jun 2010"}]}}},m=f,v=(n("bb64"),n("2877")),b=Object(v["a"])(m,r,i,!1,null,"067ec572",null);t["default"]=b.exports},bb64:function(e,t,n){"use strict";var r=n("325d"),i=n.n(r);i.a},cfbc:function(e,t,n){},d134:function(e,t,n){"use strict";var r=n("e267"),i=n.n(r);i.a},d6fc:function(e,t,n){},db75:function(e,t,n){"use strict";var r=n("87f1"),i=n.n(r);i.a},e267:function(e,t,n){}});
//# sourceMappingURL=app.5fc036c4.js.map