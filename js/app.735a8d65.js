(function(){"use strict";var t={7197:function(t,e,s){var a=s(7195),i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative bg-yellow-50 overflow-hidden",attrs:{id:"app"}},[e("Sidebar"),e("main",{staticClass:"ml-60 bg-yellow-50 overflow-auto min-h-screen"},[e("router-view")],1)],1)},n=[],r=function(){var t=this,e=t._self._c;return e("aside",{staticClass:"fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60"},[e("div",{staticClass:"flex flex-col justify-between h-full"},[e("div",{staticClass:"flex-grow"},[t._m(0),e("div",{staticClass:"p-4"},[e("ul",{staticClass:"space-y-1"},[e("li",[e("router-link",{staticClass:"flex items-center rounded-xl font-bold text-sm py-3 px-4",class:"/"===t.$route.path?"bg-yellow-200 text-yellow-900":"text-gray-600 hover:bg-yellow-50",attrs:{to:"/"}},[e("svg",{staticClass:"text-lg mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z"}})]),t._v("Dashboard ")])],1),e("li",[e("router-link",{staticClass:"flex rounded-xl font-bold text-sm py-3 px-4",class:"/tasklist"===t.$route.path?"bg-yellow-200 text-yellow-900":"text-gray-600 hover:bg-yellow-50",attrs:{to:"/tasklist"}},[e("svg",{staticClass:"text-lg mr-4",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z"}})]),t._v("Task list ")])],1)])])])])])},o=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"px-4 py-6 text-center border-b"},[e("h1",{staticClass:"text-xl font-bold leading-none"},[e("span",{staticClass:"text-yellow-700"},[t._v("Task Manager")]),t._v(" App ")])])}],l={name:"SidebarComponent"},d=l,c=s(1001),u=(0,c.Z)(d,r,o,!1,null,null,null),f=u.exports,v={name:"App",components:{Sidebar:f}},h=v,m=(0,c.Z)(h,i,n,!1,null,null,null),p=m.exports,g=s(2241),x=function(){var t=this,e=t._self._c;return e("div",{staticClass:"h-screen"},[t._m(0),e("div",{staticClass:"relative overflow-hidden"},[e("div",{staticClass:"px-6 py-8"},[e("div",{staticClass:"max-w-4xl mx-auto"},[e("div",{staticClass:"bg-white rounded-3xl p-8 mb-5"},[e("h1",{staticClass:"text-3xl font-bold mb-10"},[t._v("Welcome back, John Doe")]),e("hr",{staticClass:"my-10"}),e("div",{staticClass:"grid grid-cols-2 gap-x-20"},[e("div",[e("h2",{staticClass:"text-2xl font-bold mb-4"},[t._v("Stats")]),e("div",{staticClass:"grid grid-cols-2 gap-4"},[t._m(1),e("div",{staticClass:"p-4 bg-yellow-100 rounded-xl text-gray-800"},[e("div",{staticClass:"font-bold text-2xl leading-none"},[t._v(" "+t._s(t.finished_tasks)+" ")]),e("div",{staticClass:"mt-2"},[t._v("Tasks finished")])]),t._m(2),t._m(3)])]),e("div",[e("div",{staticClass:"flex justify-between items-center mb-4"},[e("div",{staticClass:"h-1 w-1"}),e("h2",{staticClass:"text-2xl font-bold"},[t._v("Your tasks today")]),e("router-link",{staticClass:"text-yellow-600 underline hover:text-yellow-700 transition",attrs:{to:"/tasklist"}},[t._v(" View tasks ")])],1),e("div",{staticClass:"space-y-4"},t._l(t.todays_tasks,(function(s){return e("div",{key:s.id,staticClass:"p-4 bg-white border rounded-xl text-gray-800 space-y-2"},[e("div",{staticClass:"flex justify-between"},[e("div",{staticClass:"text-gray-400 text-xs"},[t._v(t._s(s.id))]),e("div",{staticClass:"text-gray-400 text-xs"},[t._v(" "+t._s(t._f("dateFormatter")(s.start_date))+" ")])]),e("span",{staticClass:"font-bold"},[t._v(t._s(s.title))]),e("div",{staticClass:"text-sm text-gray-600"},[e("svg",{staticClass:"text-gray-800 inline align-middle mr-1",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",viewBox:"0 0 16 16"}},[e("path",{attrs:{d:"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}})]),t._v(" Deadline is today ")])])})),0)])])])])])])])},b=[function(){var t=this,e=t._self._c;return e("header",{staticClass:"bg-yellow-50 py-3 px-4 h-16"},[e("div",{staticClass:"max-w-4xl mx-auto"},[e("div",{staticClass:"text-lg font-bold text-center"},[t._v("Today's Plan")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-span-2"},[e("div",{staticClass:"p-4 bg-green-100 rounded-xl"},[e("div",{staticClass:"font-bold text-xl text-gray-800 leading-none"},[t._v(" Good day, "),e("br"),t._v("John ")]),e("div",{staticClass:"mt-5"},[e("button",{staticClass:"inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition",attrs:{type:"button"}},[t._v(" Start tracking ")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"p-4 bg-yellow-100 rounded-xl text-gray-800"},[e("div",{staticClass:"font-bold text-2xl leading-none"},[t._v("5,5")]),e("div",{staticClass:"mt-2"},[t._v("Tracked hours")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"col-span-2"},[e("div",{staticClass:"p-4 bg-purple-100 rounded-xl text-gray-800"},[e("div",{staticClass:"font-bold text-xl leading-none"},[t._v(" Your daily plan ")]),e("div",{staticClass:"mt-2"},[t._v("5 of 8 completed")])])])}],y={name:"HomeView",computed:{finished_tasks(){return this.$store.getters.finished_tasks},todays_tasks(){return this.$store.getters.todays_tasks}},filters:{dateFormatter(t){return new Date(t).toLocaleDateString()}}},_=y,k=(0,c.Z)(_,x,b,!1,null,null,null),w=k.exports;a.ZP.use(g.ZP);const C=[{path:"/",name:"home",component:w},{path:"/tasklist",name:"tasklist",component:()=>s.e(443).then(s.bind(s,9271))}],S=new g.ZP({mode:"history",base:"/",routes:C});var T=S,O=(s(7658),s(408)),P=JSON.parse('[{"id":1,"title":"GraphQL API","start_date":"2023-06-17","end_date":"2023-06-17","status":3},{"id":2,"title":"New benefits plan","start_date":"2023-06-21","end_date":"2023-06-21","status":2},{"id":3,"title":"Onboarding emails","start_date":"2023-06-21","end_date":"2023-06-21","status":2},{"id":4,"title":"iOS app","start_date":"2023-06-21","end_date":"2023-06-21","status":2},{"id":5,"title":"Marketing site redesign","start_date":"2023-06-21","end_date":"2023-06-21","status":1}]');a.ZP.use(O.ZP);var j=new O.ZP.Store({state:{tasks:P},getters:{tasks:t=>t.tasks,finished_tasks:t=>t.tasks.filter((t=>1===t.status)).length,todays_tasks:t=>t.tasks.filter((t=>t.end_date===(new Date).toISOString().substr(0,10)&&2===t.status)).slice(0,3)},mutations:{addTask(t,e){t.tasks.push(e)},editTask(t,e){t.tasks=t.tasks.map((t=>t.id===e.id?e:t))},changeStatus(t,e){t.tasks.forEach((t=>{if(t.id===e.id)switch(t.status){case 1:t.status=3;break;case 2:t.status=1;break}}))},revertStatus(t,e){t.tasks.forEach((t=>{if(t.id===e.id)switch(t.status){case 3:t.status=1;break;case 1:t.status=2;break}}))},deleteTask(t,e){t.tasks=t.tasks.filter((t=>t.id!==e.id))}},actions:{addTask({commit:t},e){t("addTask",e)},editTask({commit:t},e){t("editTask",e)},changeStatus({commit:t},e){t("changeStatus",e)},revertStatus({commit:t},e){t("revertStatus",e)},deleteTask({commit:t},e){t("deleteTask",e)}},modules:{}});a.ZP.config.productionTip=!1,a.ZP.directive("click-outside",{bind(t,e,s){var a=s.context,i=e.value;t.clickOutsideEvent=function(e){if(t!=e.target&&!t.contains(e.target)&&!e.target.classList.contains("menu-button"))return i.call(a,e)},document.body.addEventListener("click",t.clickOutsideEvent)},unbind(t){document.body.removeEventListener("click",t.clickOutsideEvent)}}),new a.ZP({router:T,store:j,render:t=>t(p)}).$mount("#app")}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var n=e[a]={exports:{}};return t[a].call(n.exports,n,n.exports,s),n.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,n){if(!a){var r=1/0;for(c=0;c<t.length;c++){a=t[c][0],i=t[c][1],n=t[c][2];for(var o=!0,l=0;l<a.length;l++)(!1&n||r>=n)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(o=!1,n<r&&(r=n));if(o){t.splice(c--,1);var d=i();void 0!==d&&(e=d)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[a,i,n]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.f={},s.e=function(t){return Promise.all(Object.keys(s.f).reduce((function(e,a){return s.f[a](t,e),e}),[]))}}(),function(){s.u=function(t){return"js/about.113a9bad.js"}}(),function(){s.miniCssF=function(t){}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="tasklist:";s.l=function(a,i,n,r){if(t[a])t[a].push(i);else{var o,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==e+n){o=u;break}}o||(l=!0,o=document.createElement("script"),o.charset="utf-8",o.timeout=120,s.nc&&o.setAttribute("nonce",s.nc),o.setAttribute("data-webpack",e+n),o.src=a),t[a]=[i];var f=function(e,s){o.onerror=o.onload=null,clearTimeout(v);var i=t[a];if(delete t[a],o.parentNode&&o.parentNode.removeChild(o),i&&i.forEach((function(t){return t(s)})),e)return e(s)},v=setTimeout(f.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=f.bind(null,o.onerror),o.onload=f.bind(null,o.onload),l&&document.head.appendChild(o)}}}(),function(){s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){s.p="/"}(),function(){var t={143:0};s.f.j=function(e,a){var i=s.o(t,e)?t[e]:void 0;if(0!==i)if(i)a.push(i[2]);else{var n=new Promise((function(s,a){i=t[e]=[s,a]}));a.push(i[2]=n);var r=s.p+s.u(e),o=new Error,l=function(a){if(s.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var n=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;o.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",o.name="ChunkLoadError",o.type=n,o.request=r,i[1](o)}};s.l(r,l,"chunk-"+e,e)}},s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,n,r=a[0],o=a[1],l=a[2],d=0;if(r.some((function(e){return 0!==t[e]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(l)var c=l(s)}for(e&&e(a);d<r.length;d++)n=r[d],s.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return s.O(c)},a=self["webpackChunktasklist"]=self["webpackChunktasklist"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(7197)}));a=s.O(a)})();
//# sourceMappingURL=app.735a8d65.js.map