(window.webpackJsonprobofriends=window.webpackJsonprobofriends||[]).push([[0],{20:function(e,t,n){e.exports=n(32)},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(4),c=n.n(a),i=n(8),s=n(3),l=n(17),u={searchField:""},d={robots:[],isPending:!1,error:""},h=n(18),b=(n(29),n(5)),f=n(6),m=n(9),g=n(7),p=n(10),E=function(e){var t=e.name,n=e.email,o=e.id;return r.a.createElement("div",{className:" tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(o,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null,n)))},v=Object(o.memo)((function(e){var t=e.robots.map((function(e,t){return r.a.createElement(E,{key:t,id:e.id,name:e.name,email:e.email})}));return r.a.createElement("div",null,t)})),O=Object(o.memo)((function(e){e.searchField;var t=e.searchChange;return console.log("SearchBox"),r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))})),w=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"80vh"}},e.children)},j=n(19),y=Object(o.memo)((function(e){var t=e.color,n=Object(o.useState)(0),a=Object(j.a)(n,2),c=a[0],i=a[1];return r.a.createElement("button",{color:t,onClick:function(){return i(c+1)}},"Count: ",c)})),R=Object(o.memo)((function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Robofriends"),r.a.createElement(y,{color:"red"}))})),S=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(m.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops. That is not good."):this.props.children}}]),t}(o.Component),C=(n(30),function(e){function t(){return Object(b.a)(this,t),Object(m.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,o=e.robots,a=e.isPending,c=o.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement(R,null),r.a.createElement(O,{searchChange:n}),r.a.createElement(w,null,a?r.a.createElement("h1",{className:"tc"},"Loading"):r.a.createElement(S,null,r.a.createElement(v,{robots:c}))))}}]),t}(o.Component)),k=Object(i.b)((function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}}),(function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e((function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})})).catch((function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})}))}))}}}))(C),_=(n(31),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function T(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(l.createLogger)();var N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),A=Object(s.d)(N,Object(s.a)(h.a));c.a.render(r.a.createElement(i.a,{store:A},r.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/robofriends","/service-worker.js");_?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):T(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):T(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.00eaca27.chunk.js.map