(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2675:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return bt}});var n=r(2809),i=r(3789),s=r(266),a=r(809),o=r.n(a),l=r(7673);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(){return(d=(0,s.Z)(o().mark((function e(t){var r,n,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({query:t}),r=l.stringify(u({sort:"seeds",short:"1",cb:"",quality:"720p,1080p,3d",page:"1",ver:"6.2.1.17",os:"mac"},t)),n="https://api.pctapi.com/list?"+r,e.next=5,fetch(n);case 5:return i=e.sent,e.next=8,i.json();case 8:return(s=e.sent).MovieList.forEach((function(e){e.title=e.title.replace(/\(\d+\)$/,"")})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(){return(m=(0,s.Z)(o().mark((function e(t){var r,n,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return r=l.stringify({cb:"",quality:"720p,1080p,3d",imdb:t,ver:"6.2.1.17",os:"mac"}),n="https://api.pctapi.com/movie?"+r,e.next=6,fetch(n);case 6:return i=e.sent,e.abrupt("return",i.json());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=r(5893);function f(e){var t=e.children;return(0,h.jsx)("div",{children:t})}var p=r(1163),v=r(7354),x=r(9062);function y(){return(0,h.jsx)(x.Z,{})}var g=r(7294),j=r(8592),b=r(9327),w=r(6486),Z=r(8396);function O(){return(0,Z.Z)("(max-width:600px)")}var P,k=r(318),N=r(2238),C=r.n(N);function S(){var e;return null!==(e=window.navigator)&&void 0!==e&&e.userAgent?(P||(P=new(C())(window.navigator.userAgent).getResult()),P):null}var q={xs:0,sm:600,md:960,lg:1280,xl:1920},B=Object.entries(q).reduce((function(e,t){var r=(0,k.Z)(t,2),n=r[0],i=r[1];return e[n]="@media (min-width: ".concat(i+1,"px)"),e}),{}),D=Object.entries(q).reduce((function(e,t){var r=(0,k.Z)(t,2),n=r[0],i=r[1];return e[n]="@media (max-width: ".concat(i,"px)"),e}),{});function z(e,t){return"@media (min-width: ".concat(q[e]+1,"px) and (max-width: ").concat(q[t],"px)")}z.up=B,z.down=D;var E=r(6400),_=r(7584);function R(e){var t=(0,_.Z)({start:0,end:60*e*1e3});return"".concat(t.hours,":").concat(t.minutes,":").concat(t.seconds)}var M=r(1664);var T=(0,j.iv)("overflow:hidden;background:rgba(0, 0, 0, 0.8);transition:box-shadow 0.3s;box-shadow:0 0 0;margin:0.25rem;border:0.25rem solid #fff;border-radius:0.25rem;box-shadow:0 0 0 1px rgba(0, 0, 0, 0.12);",z.up.sm,"{flex:1;min-width:160px;max-width:200px;&:hover{box-shadow:0 14px 28px rgba(0, 0, 0, 0.25),0 10px 10px rgba(0, 0, 0, 0.22);z-index:1;}}",z.down.sm,"{display:flex;background:rgba(0, 0, 0, 0.35);justify-content:flex-start;align-items:flex-start;border:1px solid rgba(0, 0, 0, 0.12);box-shadow:none;img{width:80px;}}&:hover>div{max-height:70%;}",""),A=(0,j.iv)({name:"1ai8x8p",styles:"position:absolute;bottom:0;background:rgba(0, 0, 0, 0.4);color:#fff;max-height:0;transition:max-height 0.3s;left:0;right:0"}),Y=(0,j.iv)({name:"tayrag",styles:"padding:0.5rem 1rem;text-align:left;h3,div{padding-bottom:0.25rem;}"}),F=(0,j.iv)({name:"umkpd",styles:"font-weight:500;font-size:1.1rem;margin:0"});function I(e){var t=e.movie,r=e.href,i=O();return(0,h.jsx)(M.default,{href:"/".concat(t.imdb).concat(location.search),passHref:!0,shallow:!0,children:(0,h.jsxs)(b.Z,{className:T,href:r,children:[(0,h.jsx)("img",{src:t.poster_med,alt:t.title}),(0,h.jsx)("div",{className:(0,j.cx)((0,n.Z)({},A,!i)),children:(0,h.jsxs)("div",{className:Y,children:[(0,h.jsx)("h3",{className:F,children:t.title}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:t.year})," |"," ",(0,h.jsx)(E.Z,{fontSize:"inherit",className:(0,j.iv)({name:"edg9ku",styles:"margin-bottom:-2px"})})," ",t.rating," | ",R(t.runtime)]}),(0,h.jsx)("div",{}),(0,h.jsxs)("div",{children:[t.genres.map(w.capitalize).join(", "),"."]}),t.actors&&(0,h.jsxs)("div",{children:[t.actors,"."]})]})})]})})}var W=r(219),H=r(9647),L=r(6867),X=r(594),G=r(2318),V=["title","children","header"];function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Q(e){e.title;var t=e.children,r=e.header,n=(0,W.Z)(e,V);return O()?(0,h.jsxs)(G.ZP,{anchor:"bottom",open:n.open,onClose:n.onClose,children:[r,(0,h.jsx)(L.Z,{"aria-label":"close",onClick:n.onClose,sx:{position:"absolute",right:8,top:8,zIndex:1,color:function(e){return e.palette.grey[500]}},children:(0,h.jsx)(X.Z,{})}),t]}):(0,h.jsxs)(H.Z,U(U({},n),{},{children:[r,(0,h.jsx)(L.Z,{"aria-label":"close",onClick:n.onClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,h.jsx)(X.Z,{})}),t]}))}var $=r(558),J=r(461),ee=r(6634),te=r(9573),re=r(8732),ne=r(3694),ie=r(6926),se=r(1481),ae=r(8953),oe=r(9702);function le(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,n=t?1e3:1024;if(Math.abs(e)<n)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=-1,a=Math.pow(10,r);do{e/=n,++s}while(Math.round(Math.abs(e)*a)/a>=n&&s<i.length-1);return e.toFixed(r)+" "+i[s]}var ce=(0,j.iv)({name:"zjik7",styles:"display:flex"}),ue=(0,j.iv)({name:"5f8jcx",styles:"max-height:80vh;overflow:auto;padding-bottom:3.5rem"}),de=(0,j.iv)({name:"183qp66",styles:">div{display:block!important;}"}),me=(0,j.iv)({name:"1wdikty",styles:"display:block;max-width:100%"}),he=(0,j.iv)({name:"f3vz0n",styles:"font-weight:500"}),fe=(0,j.iv)({name:"xt3aqz",styles:"padding:1rem;overflow:auto"}),pe=(0,j.iv)({name:"1fjm13b",styles:"display:flex;flex-direction:column;margin-top:1rem"}),ve=r(5944);var xe={name:"1jazyp",styles:"display:flex;align-items:center;justify-content:center;height:calc(100vh - 56px)"};function ye(e){return(0,ve.tZ)("div",{className:e.className,css:xe,style:e.style,children:e.children})}var ge=r(5113),je=r(6186),be=r(2981),we=r(14);var Ze=(0,j.iv)({name:"l5x7cd",styles:"padding-bottom:0.5rem"}),Oe=(0,j.iv)({name:"1e7d20y",styles:"color:#666"});function Pe(){var e=S();return e?"Android"===e.os.name?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:Ze,children:"You might need to install a torrent client first if you don't have already"}),(0,h.jsx)("div",{className:Oe,children:"Suggestions:"}),(0,h.jsx)("ol",{children:(0,h.jsx)("li",{children:(0,h.jsx)(ee.Z,{target:"playstore",href:"https://play.google.com/store/apps/details?id=com.delphicoder.flud&hl=en_IN&gl=US",children:"Flud"})})})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:Ze,children:"You might need to install a torrent client first if you don't have already"}),(0,h.jsx)("div",{className:Oe,children:"Suggestions:"}),(0,h.jsx)("ol",{children:(0,h.jsx)("li",{children:(0,h.jsx)(ee.Z,{target:"Webtorrent",href:"https://webtorrent.io/",children:"Webtorrent"})})})]}):null}function ke(){var e=(0,g.useState)(!1),t=e[0],r=e[1],n=S();return"iOS"===(null===n||void 0===n?void 0:n.os.name)?(0,h.jsx)(je.Z,{severity:"error",className:(0,j.iv)({name:"1e4sizb",styles:"margin-top:0.5rem"}),children:"IOS doesn't support torrent client yet. You might consider other operating system."}):(0,h.jsxs)("div",{className:(0,j.iv)({name:"1dxybtf",styles:"display:flex;margin-top:0.5rem"}),children:[(0,h.jsx)(be.Z,{in:t,children:(0,h.jsx)(Pe,{})}),(0,h.jsx)("div",{children:(0,h.jsx)(we.Z,{title:"How to download",children:(0,h.jsx)(L.Z,{size:"small",onClick:function(){r((function(e){return!e}))},children:t?(0,h.jsx)(X.Z,{fontSize:"inherit"}):(0,h.jsx)(ge.Z,{fontSize:"inherit"})})})})]})}var Ne=(0,j.iv)({name:"znht3n",styles:"padding-bottom:1rem"}),Ce=(0,j.iv)({name:"z8vabl",styles:"position:absolute;bottom:3rem;right:1rem;background:rgba(0,0,0,0.2)"}),Se=(0,j.iv)("height:50vh;width:50vw;",z.down.sm,"{width:100%;}","");function qe(e){var t=O(),r=(0,v.Z)((function(){return function(e){return m.apply(this,arguments)}(e.id)}),[e.id]),i=r.loading,s=r.value;return i?(0,h.jsx)(ye,{className:Se,children:(0,h.jsx)(y,{})}):s?(0,h.jsxs)($.ZP,{container:!0,className:(0,j.cx)(ce,(0,n.Z)({},ue,t)),children:[(0,h.jsxs)($.ZP,{item:!0,xs:12,sm:5,className:de,children:[(0,h.jsx)("img",{className:me,src:s.poster_big,alt:s.title}),t&&(0,h.jsx)(L.Z,{onClick:function(){var e;null===(e=document.getElementById("downloads"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},className:Ce,children:(0,h.jsx)(se.Z,{})})]}),(0,h.jsxs)($.ZP,{item:!0,xs:12,sm:7,className:fe,children:[(0,h.jsx)("h3",{className:he,children:s.title}),(0,h.jsx)("div",{className:Ne,children:R(s.runtime)}),(0,h.jsx)("div",{className:Ne,style:{color:"#727272"},children:s.description}),(0,h.jsx)("div",{className:Ne,children:s.genres.map((function(e){return(0,h.jsx)(J.Z,{className:(0,j.iv)({name:"1kiant7",styles:"margin-right:0.4rem;margin-bottom:0.4rem"}),label:(0,w.capitalize)(e)},e)}))}),s.actors&&(0,h.jsxs)("div",{className:Ne,children:[s.actors,"."]}),(0,h.jsxs)("div",{className:(0,j.iv)({name:"bcffy2",styles:"display:flex;align-items:center;justify-content:space-between"}),children:[s.year," ",(0,h.jsxs)(ee.Z,{target:"imdb",href:"https://www.imdb.com/title/".concat(s.imdb),children:["Rating ",s.rating]}),(0,h.jsxs)(ee.Z,{className:(0,j.iv)({name:"dfvjiw",styles:"display:flex;text-decoration:none;align-items:center"}),target:"youtube-trailer",href:"https://www.youtube.com/watch?v=".concat(s.trailer),children:["Trailer \xa0",(0,h.jsx)(ae.Z,{})]})]}),(0,h.jsx)(ke,{}),(0,h.jsx)(Be,{movie:s})]})]}):null}function Be(e){var t=e.movie;return(0,h.jsx)("div",{className:pe,id:"downloads",children:(0,h.jsx)(te.Z,{children:(0,h.jsx)(re.Z,{children:t.items.map((function(e){return(0,h.jsx)(De,{item:e},e.id)}))})})})}function De(e){var t=e.item;return(0,h.jsxs)(ne.Z,{sx:{"&:last-child td":{border:0}},children:[(0,h.jsxs)(ie.Z,{children:[t.quality," ",t.language&&(0,h.jsxs)(h.Fragment,{children:[" - ",t.language]})]}),(0,h.jsxs)(ie.Z,{children:[t.torrent_seeds,"/",t.torrent_peers]}),(0,h.jsx)(ie.Z,{children:le(t.size_bytes)}),(0,h.jsx)(ie.Z,{children:(0,h.jsx)(L.Z,{size:"small",href:t.torrent_magnet,children:(0,h.jsx)(oe.Z,{style:{fontSize:"inherit"}})},t.id)})]})}var ze="/_next/static/image/src/list/box.892bd5952464ffc9399ff82d7695c08a.png";function Ee(){var e=(0,p.useRouter)();return(0,h.jsx)(ye,{style:{height:"600px"},children:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:ze,alt:"Empty",className:(0,j.iv)({name:"1hetg88",styles:"max-width:300px"})}),(0,h.jsxs)("div",{className:(0,j.iv)({name:"1azakc",styles:"text-align:center"}),children:["The results on this Keywords ",e.query.keywords," is not found."]})]})})}var _e=(0,j.iv)("display:flex;justify-content:center;flex-wrap:wrap;",z.down.sm,"{flex-direction:column;}","");function Re(e){var t=e.list,r=(0,p.useRouter)(),n=(0,g.useMemo)((function(){var e;if(null!==(e=r.query.index)&&void 0!==e&&e.length)return r.query.index[0]}),[r.query.index]);return t.length?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:_e,children:t.map((function(e){return(0,h.jsx)(I,{movie:e},e.id)}))}),(0,h.jsx)(Q,{maxWidth:"md",open:Boolean(n),onClose:function(){return r.push("/".concat(location.search),void 0,{shallow:!0})},children:(0,h.jsx)(qe,{id:n})})]}):(0,h.jsx)(Ee,{})}var Me=r(9725),Te=r(5128),Ae=r(917),Ye=r(6236),Fe=r(6506),Ie=r(5295),We=r(3981),He=r(2642);var Le={stringify:function(e){return new URLSearchParams(e).toString()}},Xe=r(6446),Ge=r(6871),Ve=r(1275),Ke=r(2887),Ue=r(9334);var Qe={PaperProps:{style:{}}};function $e(e){return(0,h.jsx)(Xe.Z,{fullWidth:!0,children:(0,h.jsx)(Ge.Z,{variant:"standard",label:e.label,multiple:!0,placeholder:e.label,displayEmpty:!0,value:e.value,onChange:function(t){return e.onChange(t.target.value)},renderValue:function(t){return t.length?t.join(", "):e.label},MenuProps:Qe,inputProps:{className:(0,j.iv)({name:"220rkc",styles:"color:#fff"})},children:e.data.map((function(t){return(0,h.jsxs)(Ve.Z,{value:t.value,children:[(0,h.jsx)(Ke.Z,{checked:e.value.includes(t.value)}),(0,h.jsx)(Ue.Z,{primary:t.label})]},t.value)}))})})}function Je(e){return(0,h.jsx)(Xe.Z,{fullWidth:!0,children:(0,h.jsxs)(Ge.Z,{variant:"standard",inputProps:{className:(0,j.iv)({name:"220rkc",styles:"color:#fff"})},value:e.value,label:e.label,placeholder:e.label,displayEmpty:!0,onChange:function(t){return e.onChange(t.target.value)},children:[(0,h.jsx)(Ve.Z,{value:"",children:e.label}),e.data.map((function(e){return(0,h.jsx)(Ve.Z,{value:e.value,children:e.label},e.value)}))]})})}var et=["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return{label:e,value:e}})),tt=["720P","1080P","2160P","3D"].map((function(e){return{label:e,value:e.toLowerCase()}})),rt=[{label:"Date Added",value:"dateadded"},"Title","Year",{label:"Popularity",value:"seeds"}].map((function(e){return"string"===typeof e?{label:e,value:e.toLowerCase()}:e})),nt=["genre","quality","sort","keywords","page"];function it(e){var t=(0,p.useRouter)(),r=(0,g.useState)((function(){return e(t.query)})),n=r[0],i=r[1];return(0,g.useEffect)((function(){i(e(t.query))}),[t.query]),[n,i]}function st(e){var t=(0,p.useRouter)(),r=it((function(e){var t;return null!==(t=e.genre)&&void 0!==t?t:""})),n=(0,k.Z)(r,2),i=n[0],s=n[1],a=it((function(e){var t,r;return null!==(t=null===(r=e.quality)||void 0===r?void 0:r.split(","))&&void 0!==t?t:[]})),o=(0,k.Z)(a,2),l=o[0],c=o[1],u=it((function(e){var t;return null!==(t=e.sort)&&void 0!==t?t:"seeds"})),d=(0,k.Z)(u,2),m=d[0],f=d[1],v=(0,g.useMemo)((function(){return nt.some((function(e){return t.query[e]}))}),[t.query]);return(0,h.jsx)("form",{onSubmit:function(r){r.preventDefault();var n,s=Le.stringify((n={genre:i,quality:l.join(","),sort:m,page:void 0},(0,w.transform)(n,(function(e,t,r){var n=t&&t.trim();n&&"seeds"!==n&&(e[r]=n)}))));t.push("?".concat(s)),e.onClose()},children:(0,h.jsxs)($.ZP,{container:!0,flexDirection:"row-reverse",spacing:2,children:[(0,h.jsx)($.ZP,{item:!0,xs:12,sm:3,children:(0,h.jsx)(Je,{label:"Genre",data:et,value:i,onChange:s})}),(0,h.jsx)($.ZP,{item:!0,xs:6,sm:2,children:(0,h.jsx)($e,{label:"Quality",data:tt,value:l,onChange:c})}),(0,h.jsx)($.ZP,{item:!0,xs:6,sm:2,children:(0,h.jsx)(Je,{label:"Sort",value:m,data:rt,onChange:f})}),(0,h.jsxs)($.ZP,{item:!0,xs:12,className:(0,j.iv)({name:"144pmwp",styles:"padding-top:0.5rem;text-align:right"}),children:[(0,h.jsx)(He.Z,{onClick:e.onClose,color:"secondary",children:"cancel"}),v&&(0,h.jsx)(He.Z,{onClick:function(){t.push("?"),e.onClose()},type:"reset",color:"warning",children:"Reset"}),(0,h.jsx)(He.Z,{type:"submit",children:"Apply"})]})]})})}var at={name:"mwfnhz",styles:"background:rgb(0, 0, 0);background:linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);color:#fff"},ot={name:"1dvcxr3",styles:"padding:1rem"},lt=(0,Ae.iv)("display:flex;justify-content:space-between!important;flex-direction:row-reverse;align-items:flex-start;padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;",z.down.sm,"{padding-left:0.5rem;padding-right:0.5rem;}",""),ct={name:"13qya2q",styles:"display:flex;justify-content:flex-end;flex:1"};function ut(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function dt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ut(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ut(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var mt={name:"198abgr",styles:"background-color:rgba(0, 0, 0, 0.35);margin:0.25rem"},ht={name:"1189xqs",styles:"flex:2"};function ft(){var e=(0,g.useState)(!1),t=e[0],r=e[1],n=(0,g.useRef)(null);return(0,ve.BX)(ve.HY,{children:[(0,ve.tZ)("div",{css:at,children:(0,ve.tZ)(be.Z,{in:!t,children:(0,ve.BX)($.ZP,{container:!0,css:lt,children:[(0,ve.BX)($.ZP,{item:!0,xs:12,sm:4,css:ct,children:[(0,ve.tZ)(yt,{}),(0,ve.tZ)(L.Z,{color:"inherit",onClick:function(){r((function(e){return!e})),t||window.scrollTo({top:0})},children:(0,ve.tZ)(Ye.Z,{color:"inherit"})})]}),(0,ve.tZ)($.ZP,{item:!0,xs:12,sm:8,css:ht,children:(0,ve.tZ)(vt,{})})]})})}),(0,ve.tZ)(be.Z,{in:t,unmountOnExit:!0,children:(0,ve.tZ)(Ie.Z,{ref:n,css:mt,children:(0,ve.tZ)("div",{css:ot,children:(0,ve.tZ)(st,{onClose:function(){return r(!1)}})})})})]})}var pt={name:"iefhay",styles:"margin-left:0.4rem;margin-bottom:0.25rem;margin-top:0.25rem;color:inherit;background:#b7b7b782"};function vt(){var e=(0,p.useRouter)(),t=e.query,r=e.push;return(0,ve.tZ)(ve.HY,{children:nt.map((function(e){return t[e]&&(0,ve.tZ)(J.Z,{size:"small",css:pt,variant:"filled",label:t[e],onDelete:function(){return function(e){var n=dt({},t);delete n[e],r("/?".concat(Le.stringify(n)))}(e)}},e)}))})}var xt={name:"skgbeu",styles:"display:flex;justify-content:flex-end"};function yt(){var e=(0,p.useRouter)(),t=it((function(e){var t;return null!==(t=e.keywords)&&void 0!==t?t:""})),r=(0,k.Z)(t,2),n=r[0],i=r[1],s=(0,g.useState)(!0),a=s[0],o=s[1],l=(0,g.useRef)(null);return(0,ve.BX)("form",{onSubmit:function(t){t.preventDefault(),e.push("/?".concat(Le.stringify(dt(dt({},e.query),{},{keywords:n}))))},css:xt,children:[(0,ve.tZ)(We.Z,{inputRef:l,onBlur:function(){return o(!0)},css:(0,Ae.iv)("width:",a?0:250,"px;transition:width 0.3s;overflow:hidden;",""),type:"text",name:"keywords",style:{color:"inherit"},placeholder:"Search by movie title",value:n,onChange:function(e){return i(e.target.value)}}),(0,ve.tZ)("button",{style:{display:"none"},type:"submit"}),(0,ve.tZ)(L.Z,{onClick:function(){var e;(o((function(e){return!e})),a)&&(null===(e=l.current)||void 0===e||e.focus())},color:"inherit",children:a?(0,ve.tZ)(Fe.Z,{}):(0,ve.tZ)(X.Z,{})})]})}function gt(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function jt(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?gt(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):gt(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var bt=function(e){var t,r,n,s=(0,p.useRouter)(),a=(0,v.Z)((function(){return function(e){return d.apply(this,arguments)}(s.query)}),(0,i.Z)(nt.map((function(e){return s.query[e]})))),o=a.loading,c=void 0===o||o,u=a.value;return(0,h.jsxs)(f,{children:[(0,h.jsx)(ft,{}),c?(0,h.jsx)(ye,{children:(0,h.jsx)(y,{})}):(0,h.jsx)(Re,{list:null!==(t=null===u||void 0===u?void 0:u.MovieList)&&void 0!==t?t:[]}),(null!==(r=null===u||void 0===u?void 0:u.MovieList.length)&&void 0!==r?r:0)>74&&(0,h.jsx)("div",{style:{padding:"1rem 0",display:"flex",justifyContent:"flex-end"},children:(0,h.jsx)(Me.Z,{className:(0,j.iv)({name:"220rkc",styles:"color:#fff"}),onChange:function(e,t){s.push("?".concat(l.stringify(jt(jt({},s.query),{},{page:t}))),void 0,{shallow:!0})},color:"primary",count:100,renderItem:function(e){return(0,h.jsx)(Te.Z,jt(jt({},e),{},{className:(0,j.iv)({name:"220rkc",styles:"color:#fff"})}))},page:parseInt(null!==(n=s.query.page)&&void 0!==n?n:"1")})})]})}},9024:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...index]]",function(){return r(2675)}])}},function(e){e.O(0,[662,544,774,888,179],(function(){return t=9024,e(e.s=t);var t}));var t=e.O();_N_E=t}]);