(this["webpackJsonpnasa-fe"]=this["webpackJsonpnasa-fe"]||[]).push([[0],{238:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(33),r=n.n(a),s=n(19),i=n(3),l=n(20),o=n(6),u=n(7),d=n.n(u),h=n(15),j=n(44),b=n.n(j),m="http://localhost:4000/v1";function p(){return x.apply(this,arguments)}function x(){return(x=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(m,"/planets"));case 2:return t=e.sent,e.next=5,t.data;case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function O(){return f.apply(this,arguments)}function f(){return(f=Object(h.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(m,"/launches"));case 2:return t=e.sent,e.next=5,t.data;case 5:return n=e.sent,e.abrupt("return",n.sort((function(e,t){return e.flightNumber-t.flightNumber})));case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function g(e){return y.apply(this,arguments)}function y(){return(y=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/launches"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function v(e){return k.apply(this,arguments)}function k(){return(k=Object(h.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(m,"/launches/").concat(t),{method:"DELETE"});case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",{ok:!1});case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}var w=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useCallback)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:t=e.sent,a(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){r()}),[r]),n};var N=function(e,t,n){var a=Object(c.useState)([]),r=Object(l.a)(a,2),s=r[0],i=r[1],o=Object(c.useState)(!1),u=Object(l.a)(o,2),j=u[0],b=u[1],m=Object(c.useCallback)(Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))),[]);return Object(c.useEffect)((function(){m()}),[m]),{launches:s,isPendingLaunch:j,submitLaunch:Object(c.useCallback)(function(){var t=Object(h.a)(d.a.mark((function t(c){var a,r,s,i,l,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),b(!0),a=new FormData(c.target),r=new Date(a.get("launch-day")),s=a.get("mission-name"),i=a.get("rocket-name"),l=a.get("planets-selector"),t.next=9,g({launchDate:r,mission:s,rocket:i,target:l});case 9:o=t.sent,o.ok?(m(),setTimeout((function(){b(!1),e()}),800)):n();case 12:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[m,e,n]),abortLaunch:Object(c.useCallback)(function(){var e=Object(h.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(n);case 2:!0,m(),t();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[m,t,n])}},S=n(17),L=n(24),T=n(0),D=Object(i.withStyles)((function(){return{root:{margin:"0 auto",maxWidth:800},"@media (max-width: 800px)":{root:{margin:"0 12px"}}}}))((function(e){var t=e.classes,n=e.className,c=e.children,a=Object(L.a)(e,["classes","className","children"]);return Object(T.jsx)("div",Object(S.a)(Object(S.a)({className:"".concat(t.root," ").concat(n)},a),{},{children:c}))})),A=Object(i.withSounds)()((function(e){var t=e.children,n=e.sounds,c=e.onClick,a=Object(L.a)(e,["children","sounds","onClick"]);return Object(T.jsx)("span",Object(S.a)(Object(S.a)({},a),{},{onClick:function(e){n.click&&n.click.play(),c&&c(e)},children:t}))})),C=Object(i.withStyles)((function(e){return{root:{display:"flex",flexDirection:"row",lineHeight:"80px"},logo:{display:"inherit",marginTop:"15px"},nav:{display:"inherit"},banner:{display:"inherit",fontWeight:"bold",marginLeft:"10px",marginRight:"15px",fontSize:28},clickable:{fontSize:21,"& i":{marginRight:e.padding/2,fontSize:24}},link:{color:e.color.content,textDecoration:"none"},button:{padding:[0,e.padding/2]},"@media (max-width: 800px)":{logo:{display:"none"},img:{display:"none"},banner:{display:"none"},button:{padding:[0,8]},clickable:{fontSize:16}}}}))((function(e){var t=e.classes,n=e.onNav,c=Object(L.a)(e,["classes","onNav"]);return Object(T.jsx)(i.Header,{animate:!0,children:Object(T.jsxs)(D,Object(S.a)(Object(S.a)({className:t.root},c),{},{children:[Object(T.jsx)("img",{src:"/favicon.png",alt:"",className:t.img,style:{margin:"15px 10px 15px 0",height:"50px",width:"auto"}}),Object(T.jsx)(i.Logo,{animate:!0,size:50,className:t.logo,layer:"header"}),Object(T.jsx)(i.Words,{animate:!0,className:t.banner,children:"NASA Mission Control"}),Object(T.jsxs)("nav",{className:"".concat(t.nav),children:[Object(T.jsx)(A,{className:t.clickable,onClick:n,children:Object(T.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(T.jsxs)(s.b,{className:t.link,to:"/launch",children:[Object(T.jsx)("i",{className:"material-icons",children:"check_circle_outline"}),"Launch"]})})}),Object(T.jsx)(A,{className:t.clickable,onClick:n,children:Object(T.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(T.jsxs)(s.b,{className:t.link,to:"/upcoming",children:[Object(T.jsx)("i",{className:"material-icons",children:"update"}),"Upcoming"]})})}),Object(T.jsx)(A,{className:t.clickable,onClick:n,children:Object(T.jsx)(i.Highlight,{className:t.button,animate:!0,layer:"header",children:Object(T.jsxs)(s.b,{className:t.link,to:"/history",children:[Object(T.jsx)("i",{className:"material-icons",children:"history"}),"History"]})})})]})]}))})})),P=function(){return Object(T.jsx)(i.Footer,{animate:!0,children:Object(T.jsx)(D,{children:Object(T.jsx)(i.Paragraph,{style:{fontSize:14,margin:"10px 0"},children:"This is not an official site and is not affiliated with NASA or SpaceX in any way. For educational purposes only."})})})},E=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.planets)||void 0===t?void 0:t.map((function(e){return Object(T.jsx)("option",{value:e.keplerName,children:e.keplerName},e.keplerName)}))}),[e.planets]),n=(new Date).toISOString().split("T")[0];return Object(T.jsxs)(i.Appear,{id:"launch",animate:!0,show:e.entered,children:[Object(T.jsx)(i.Paragraph,{children:"Schedule a mission launch for interstellar travel to one of the Kepler Exoplanets."}),Object(T.jsx)(i.Paragraph,{children:"Only confirmed planets matching the following criteria are available for the earliest scheduled missions:"}),Object(T.jsxs)("ul",{children:[Object(T.jsx)("li",{children:"Planetary radius < 1.6 times Earth's radius"}),Object(T.jsx)("li",{children:"Effective stellar flux > 0.36 times Earth's value and < 1.11 times Earth's value"})]}),Object(T.jsxs)("form",{onSubmit:e.submitLaunch,style:{display:"inline-grid",gridTemplateColumns:"auto auto",gridGap:"10px 20px"},children:[Object(T.jsx)("label",{htmlFor:"launch-day",children:"Launch Date"}),Object(T.jsx)("input",{type:"date",id:"launch-day",name:"launch-day",min:n,max:"2040-12-31",defaultValue:n}),Object(T.jsx)("label",{htmlFor:"mission-name",children:"Mission Name"}),Object(T.jsx)("input",{type:"text",id:"mission-name",name:"mission-name"}),Object(T.jsx)("label",{htmlFor:"rocket-name",children:"Rocket Type"}),Object(T.jsx)("input",{type:"text",id:"rocket-name",name:"rocket-name",defaultValue:"Explorer IS1"}),Object(T.jsx)("label",{htmlFor:"planets-selector",children:"Destination Exoplanet"}),Object(T.jsx)("select",{id:"planets-selector",name:"planets-selector",children:t}),Object(T.jsx)(A,{children:Object(T.jsx)(i.Button,{animate:!0,show:e.entered,type:"submit",layer:"success",disabled:e.isPendingLaunch,children:"Launch Mission \u2714"})}),e.isPendingLaunch&&Object(T.jsx)(i.Loading,{animate:!0,small:!0})]})]})},F=function(e){var t=Object(c.useMemo)((function(){var t;return null===(t=e.launches)||void 0===t?void 0:t.filter((function(e){return!e.upcoming})).map((function(e){var t;return console.log(e),Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)("span",{style:{color:e.success?"greenyellow":"red"},children:"\u2588"})}),Object(T.jsx)("td",{children:e.flightNumber}),Object(T.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(T.jsx)("td",{children:e.mission}),Object(T.jsx)("td",{children:e.rocket}),Object(T.jsx)("td",{children:null===(t=e.customers)||void 0===t?void 0:t.join(", ")})]},String(e.flightNumber))}))}),[e.launches]);return Object(T.jsx)("article",{id:"history",children:Object(T.jsxs)(i.Appear,{animate:!0,show:e.entered,children:[Object(T.jsx)(i.Paragraph,{children:"History of mission launches including SpaceX launches starting from the year 2006."}),Object(T.jsx)(i.Table,{animate:!0,children:Object(T.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{style:{width:"2rem"}}),Object(T.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(T.jsx)("th",{style:{width:"9rem"},children:"Date"}),Object(T.jsx)("th",{children:"Mission"}),Object(T.jsx)("th",{style:{width:"7rem"},children:"Rocket"}),Object(T.jsx)("th",{children:"Customers"})]})}),Object(T.jsx)("tbody",{children:t})]})})]})})},M=Object(i.withStyles)((function(){return{link:{color:"red",textDecoration:"none"}}}))((function(e){var t=e.entered,n=e.launches,a=e.classes,r=e.abortLaunch,s=Object(c.useMemo)((function(){return null===n||void 0===n?void 0:n.filter((function(e){return e.upcoming})).map((function(e){return Object(T.jsxs)("tr",{children:[Object(T.jsx)("td",{children:Object(T.jsx)(A,{style:{color:"red"},children:Object(T.jsx)(i.Link,{className:a.link,onClick:function(){return r(e.flightNumber)},children:"\u2716"})})}),Object(T.jsx)("td",{children:e.flightNumber}),Object(T.jsx)("td",{children:new Date(e.launchDate).toDateString()}),Object(T.jsx)("td",{children:e.mission}),Object(T.jsx)("td",{children:e.rocket}),Object(T.jsx)("td",{children:e.target})]},String(e.flightNumber))}))}),[n,r,a.link]);return Object(T.jsxs)(i.Appear,{id:"upcoming",animate:!0,show:t,children:[Object(T.jsx)(i.Paragraph,{children:"Upcoming missions including both SpaceX launches and newly scheduled Zero to Mastery rockets."}),Object(T.jsx)(i.Words,{animate:!0,children:"Warning! Clicking on the \u2716 aborts the mission."}),Object(T.jsx)(i.Table,{animate:!0,show:t,children:Object(T.jsxs)("table",{style:{tableLayout:"fixed"},children:[Object(T.jsx)("thead",{children:Object(T.jsxs)("tr",{children:[Object(T.jsx)("th",{style:{width:"3rem"}}),Object(T.jsx)("th",{style:{width:"3rem"},children:"No."}),Object(T.jsx)("th",{style:{width:"10rem"},children:"Date"}),Object(T.jsx)("th",{style:{width:"11rem"},children:"Mission"}),Object(T.jsx)("th",{style:{width:"11rem"},children:"Rocket"}),Object(T.jsx)("th",{children:"Destination"})]})}),Object(T.jsx)("tbody",{children:s})]})})]})})),H=Object(i.withSounds)()(Object(i.withStyles)((function(){return{content:{display:"flex",flexDirection:"column",height:"100vh",margin:"auto"},centered:{flex:1,paddingTop:"20px",paddingBottom:"10px"}}}))((function(e){var t=e.sounds,n=e.classes,a=Object(c.useState)(!0),r=Object(l.a)(a,2),s=r[0],u=r[1],d=N((function(){return t.success&&t.success.play()}),(function(){return t.abort&&t.abort.play()}),(function(){return t.warning&&t.warning.play()})),h=d.launches,j=d.isPendingLaunch,b=d.submitLaunch,m=d.abortLaunch,p=w();return Object(T.jsxs)("div",{className:n.content,children:[Object(T.jsx)(C,{onNav:function(){u(!1),setTimeout((function(){u(!0)}),600)}}),Object(T.jsx)(D,{className:n.centered,children:Object(T.jsx)(i.Frame,{animate:!0,show:s,corners:4,style:{visibility:s?"visible":"hidden"},children:function(e){return Object(T.jsx)("div",{style:{padding:"20px"},children:Object(T.jsxs)(o.c,{children:[Object(T.jsx)(o.a,{exact:!0,path:"/",children:Object(T.jsx)(E,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(T.jsx)(o.a,{exact:!0,path:"/launch",children:Object(T.jsx)(E,{entered:e.entered,planets:p,submitLaunch:b,isPendingLaunch:j})}),Object(T.jsx)(o.a,{exact:!0,path:"/upcoming",children:Object(T.jsx)(M,{entered:e.entered,launches:h,abortLaunch:m})}),Object(T.jsx)(o.a,{exact:!0,path:"/history",children:Object(T.jsx)(F,{entered:e.entered,launches:h})})]})})}})}),Object(T.jsx)(P,{})]})}))),z={small:"/img/background-small.jpg",medium:"/img/background-medium.jpg",large:"/img/background-large.jpg"},W="/img/glow.png",R={shared:{volume:.5},players:{click:{sound:{src:["/sound/click.mp3"]},settings:{oneAtATime:!0}},typing:{sound:{src:["/sound/typing.mp3"]},settings:{oneAtATime:!0}},deploy:{sound:{src:["/sound/deploy.mp3"]},settings:{oneAtATime:!0}},success:{sound:{src:["/sound/success.mp3"],volume:.2},settings:{oneAtATime:!0}},abort:{sound:{src:["/sound/abort.mp3"]},settings:{oneAtATime:!0}},warning:{sound:{src:["/sound/warning.mp3"]},settings:{oneAtATime:!0}}}},B={color:{content:"#a1ecfb"},padding:20,responsive:{small:600,medium:800,large:1200},typography:{headerFontFamily:'"Titillium Web", "sans-serif"'}},I=function(){return Object(T.jsx)(i.ThemeProvider,{theme:Object(i.createTheme)(B),children:Object(T.jsx)(i.SoundsProvider,{sounds:Object(i.createSounds)(R),children:Object(T.jsx)(i.Arwes,{animate:!0,background:z.large,pattern:W,children:function(e){return Object(T.jsx)(s.a,{children:Object(T.jsx)(H,{show:e.entered})})}})})})};r.a.render(Object(T.jsx)(I,{}),document.getElementById("root"))}},[[238,1,2]]]);
//# sourceMappingURL=main.0787e1dc.chunk.js.map