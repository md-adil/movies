(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2568:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return Hn}});var t=r(2809),i=r(266),s=r(809),o=r.n(s),a=r(7673);function l(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?l(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(){return(u=(0,i.Z)(o().mark((function e(n){var r,t,i,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log({query:n}),r=a.stringify(c({sort:"seeds",short:"1",cb:"",quality:"720p,1080p,3d",page:"1",ver:"6.2.1.17",os:"mac"},n)),t="https://api.pctapi.com/list?"+r,e.next=5,fetch(t);case 5:return i=e.sent,e.next=8,i.json();case 8:return(s=e.sent).MovieList.forEach((function(e){e.title=e.title.replace(/\(\d+\)$/,"")})),e.abrupt("return",s);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(){return(d=(0,i.Z)(o().mark((function e(n){var r,t,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return r=a.stringify({cb:"",quality:"720p,1080p,3d",imdb:n,ver:"6.2.1.17",os:"mac"}),t="https://api.pctapi.com/movie?"+r,e.next=6,fetch(t);case 6:return i=e.sent,e.abrupt("return",i.json());case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var h=r(5893);function v(e){var n=e.children;return(0,h.jsx)("div",{children:n})}var p=r(1163),f=r(7354),m=r(9062);function x(){return(0,h.jsx)(m.Z,{})}var g=r(2209),j=r(7294),b=r(8592),y=r(9327),Z=r(6486),w=r(8396);function O(){return(0,w.Z)("(max-width:600px)")}var P,N=r(6311),k=r(2238),C=r.n(k);function S(){var e;return null!==(e=window.navigator)&&void 0!==e&&e.userAgent?(P||(P=new(C())(window.navigator.userAgent).getResult()),P):null}var D={xs:0,sm:600,md:960,lg:1280,xl:1920},_=Object.entries(D).reduce((function(e,n){var r=(0,N.Z)(n,2),t=r[0],i=r[1];return e[t]="@media (min-width: ".concat(i+1,"px)"),e}),{}),E=Object.entries(D).reduce((function(e,n){var r=(0,N.Z)(n,2),t=r[0],i=r[1];return e[t]="@media (max-width: ".concat(i,"px)"),e}),{});function B(e,n){return"@media (min-width: ".concat(D[e]+1,"px) and (max-width: ").concat(D[n],"px)")}B.up=_,B.down=E;var q,z,M,R,A,T=r(6400),F=r(7584);function W(e){var n=(0,F.Z)({start:0,end:60*e*1e3});return"".concat(n.hours,":").concat(n.minutes,":").concat(n.seconds)}var I=(0,b.iv)(q||(q=(0,g.Z)(["\n    overflow: hidden;\n    background: rgba(0,0,0, .8);\n    transition: box-shadow .3s;\n    box-shadow: 0 0 0;\n    margin: 0.25rem;\n    border: 0.25rem solid #fff;\n    border-radius: 0.25rem;\n    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);\n    "," {\n        flex: 1;\n        min-width: 160px;\n        max-width: 200px;\n        &:hover {\n            box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n            z-index: 1;\n        }\n    }\n    "," {\n        display: flex;\n        background: #fff;\n        justify-content: flex-start;\n        align-items: flex-start;\n        border: 1px solid rgba(0, 0, 0, 0.12);\n        box-shadow: none;\n        img {\n            width: 80px;\n        }\n    }\n    &:hover > div {\n        max-height: 70%;\n    }\n"])),B.up.sm,B.down.sm),L=(0,b.iv)(z||(z=(0,g.Z)(["\n    position: absolute;\n    bottom: 0;\n    background: rgba(0,0,0,.4);\n    color: #fff;\n    max-height: 0;\n    transition: max-height .3s;\n    left: 0; right: 0;\n"]))),Y=(0,b.iv)(M||(M=(0,g.Z)(["\n    padding: 0.5rem 1rem;\n    text-align: left;\n    h3, div {\n        padding-bottom: 0.25rem;\n    }\n"]))),V=(0,b.iv)(R||(R=(0,g.Z)(["\n    font-weight: 500;\n    margin: 0;\n"])));function G(e){var n=e.movie,r=e.onClick,i=O();return(0,h.jsxs)(y.Z,{className:I,onClick:r,children:[(0,h.jsx)("img",{src:n.poster_med,alt:n.title}),(0,h.jsx)("div",{className:(0,b.cx)((0,t.Z)({},L,!i)),children:(0,h.jsxs)("div",{className:Y,children:[(0,h.jsx)("h3",{className:V,children:n.title}),(0,h.jsxs)("div",{children:[(0,h.jsx)("strong",{children:n.year})," | ",(0,h.jsx)(T.Z,{fontSize:"inherit",className:(0,b.iv)(A||(A=(0,g.Z)(["margin-bottom: -2px;"])))})," ",n.rating," | ",W(n.runtime)]}),(0,h.jsx)("div",{}),(0,h.jsxs)("div",{children:[n.genres.map(Z.capitalize).join(", "),"."]}),n.actors&&(0,h.jsxs)("div",{children:[n.actors,"."]})]})})]})}var H=r(4276),K=r.n(H),Q=r(219),U=r(9647),X=r(6867),$=r(594),J=r(2318),ee=["title","children","header"];function ne(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function re(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ne(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function te(e){e.title;var n=e.children,r=e.header,t=(0,Q.Z)(e,ee);return O()?(0,h.jsxs)(J.ZP,{anchor:"bottom",open:t.open,onClose:t.onClose,children:[r,(0,h.jsx)(X.Z,{"aria-label":"close",onClick:t.onClose,sx:{position:"absolute",right:8,top:8,zIndex:1,color:function(e){return e.palette.grey[500]}},children:(0,h.jsx)($.Z,{})}),n]}):(0,h.jsxs)(U.Z,re(re({},t),{},{children:[r,(0,h.jsx)(X.Z,{"aria-label":"close",onClick:t.onClose,sx:{position:"absolute",right:8,top:8,color:function(e){return e.palette.grey[500]}},children:(0,h.jsx)($.Z,{})}),n]}))}var ie,se,oe,ae,le,ce,ue,de,he=r(558),ve=r(461),pe=r(6634),fe=r(9573),me=r(8732),xe=r(3694),ge=r(6926),je=r(1481),be=r(8953),ye=r(9702);function Ze(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=n?1e3:1024;if(Math.abs(e)<t)return e+" B";var i=n?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],s=-1,o=Math.pow(10,r);do{e/=t,++s}while(Math.round(Math.abs(e)*o)/o>=t&&s<i.length-1);return e.toFixed(r)+" "+i[s]}var we,Oe=(0,b.iv)(ie||(ie=(0,g.Z)(["\n    display: flex;\n"]))),Pe=(0,b.iv)(se||(se=(0,g.Z)(["\n    max-height: 80vh;\n    overflow: auto;\n    padding-bottom: 3.5rem;\n"]))),Ne=(0,b.iv)(oe||(oe=(0,g.Z)(["\n    > div {\n        display: block !important;\n    }\n"]))),ke=(0,b.iv)(ae||(ae=(0,g.Z)(["\n    display: block;\n    max-width: 100%;\n"]))),Ce=(0,b.iv)(le||(le=(0,g.Z)(["\n    font-weight: 500;\n"]))),Se=(0,b.iv)(ce||(ce=(0,g.Z)(["\n    padding: 1rem;\n    overflow: auto;\n"]))),De=(0,b.iv)(ue||(ue=(0,g.Z)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n"]))),_e=((0,b.iv)(de||(de=(0,g.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]))),(0,b.iv)(we||(we=(0,g.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100vh;\n"]))));function Ee(e){return(0,h.jsx)("div",{className:(0,b.cx)(_e,e.className),style:e.style,children:e.children})}var Be,qe,ze,Me,Re,Ae,Te,Fe,We,Ie,Le=r(5113),Ye=r(6186),Ve=r(2981),Ge=r(14),He=(0,b.iv)(Be||(Be=(0,g.Z)(["padding-bottom: 0.5rem;"]))),Ke=(0,b.iv)(qe||(qe=(0,g.Z)(["color: #666;"])));function Qe(){var e=S();return e?"Android"===e.os.name?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:He,children:"You might need to install a torrent client first if you don't have already"}),(0,h.jsx)("div",{className:Ke,children:"Suggestions:"}),(0,h.jsx)("ol",{children:(0,h.jsx)("li",{children:(0,h.jsx)(pe.Z,{target:"playstore",href:"https://play.google.com/store/apps/details?id=com.delphicoder.flud&hl=en_IN&gl=US",children:"Flud"})})})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:He,children:"You might need to install a torrent client first if you don't have already"}),(0,h.jsx)("div",{className:Ke,children:"Suggestions:"}),(0,h.jsx)("ol",{children:(0,h.jsx)("li",{children:(0,h.jsx)(pe.Z,{target:"Webtorrent",href:"https://webtorrent.io/",children:"Webtorrent"})})})]}):null}function Ue(){var e=(0,j.useState)(!1),n=e[0],r=e[1],t=S();return"iOS"===(null===t||void 0===t?void 0:t.os.name)?(0,h.jsx)(Ye.Z,{severity:"error",className:(0,b.iv)(ze||(ze=(0,g.Z)(["margin-top: 0.5rem;"]))),children:"IOS doesn't support torrent client yet. You might consider other operating system."}):(0,h.jsxs)("div",{className:(0,b.iv)(Me||(Me=(0,g.Z)(["display:flex;margin-top: 0.5rem"]))),children:[(0,h.jsx)(Ve.Z,{in:n,children:(0,h.jsx)(Qe,{})}),(0,h.jsx)("div",{children:(0,h.jsx)(Ge.Z,{title:"How to download",children:(0,h.jsx)(X.Z,{size:"small",onClick:function(){r((function(e){return!e}))},children:n?(0,h.jsx)($.Z,{fontSize:"inherit"}):(0,h.jsx)(Le.Z,{fontSize:"inherit"})})})})]})}var Xe=(0,b.iv)(Re||(Re=(0,g.Z)(["\n    padding-bottom: 1rem;\n"]))),$e=(0,b.iv)(Ae||(Ae=(0,g.Z)(["\n    position: absolute;\n    bottom: 3rem;\n    right: 1rem;\n    background: rgba(0,0,0,0.2);\n"]))),Je=(0,b.iv)(Te||(Te=(0,g.Z)(["\n    height: 50vh;\n    width: 50vw;\n    "," {\n        width: 100%;\n    }\n"])),B.down.sm);function en(e){var n=O(),r=(0,f.Z)((function(){return function(e){return d.apply(this,arguments)}(e.id)}),[e.id]),i=r.loading,s=r.value;return i?(0,h.jsx)(Ee,{className:Je,children:(0,h.jsx)(x,{})}):s?(0,h.jsxs)(he.ZP,{container:!0,className:(0,b.cx)(Oe,(0,t.Z)({},Pe,n)),children:[(0,h.jsxs)(he.ZP,{item:!0,xs:12,sm:5,className:Ne,children:[(0,h.jsx)("img",{className:ke,src:s.poster_big,alt:s.title}),n&&(0,h.jsx)(X.Z,{onClick:function(){var e;null===(e=document.getElementById("downloads"))||void 0===e||e.scrollIntoView({behavior:"smooth"})},className:$e,children:(0,h.jsx)(je.Z,{})})]}),(0,h.jsxs)(he.ZP,{item:!0,xs:12,sm:7,className:Se,children:[(0,h.jsx)("h3",{className:Ce,children:s.title}),(0,h.jsx)("div",{className:Xe,children:W(s.runtime)}),(0,h.jsx)("div",{className:Xe,style:{color:"#727272"},children:s.description}),(0,h.jsx)("div",{className:Xe,children:s.genres.map((function(e){return(0,h.jsx)(ve.Z,{className:(0,b.iv)(Fe||(Fe=(0,g.Z)(["margin-right: 0.4rem;margin-bottom: 0.4rem;"]))),label:(0,Z.capitalize)(e)},e)}))}),s.actors&&(0,h.jsxs)("div",{className:Xe,children:[s.actors,"."]}),(0,h.jsxs)("div",{className:(0,b.iv)(We||(We=(0,g.Z)(["display: flex;align-items: center;justify-content: space-between;"]))),children:[s.year," ",(0,h.jsxs)(pe.Z,{target:"imdb",href:"https://www.imdb.com/title/".concat(s.imdb),children:["Rating ",s.rating]}),(0,h.jsxs)(pe.Z,{className:(0,b.iv)(Ie||(Ie=(0,g.Z)(["display: flex;text-decoration: none;align-items: center;"]))),target:"youtube-trailer",href:"https://www.youtube.com/watch?v=".concat(s.trailer),children:["Trailer \xa0",(0,h.jsx)(be.Z,{})]})]}),(0,h.jsx)(Ue,{}),(0,h.jsx)(nn,{movie:s})]})]}):null}function nn(e){var n=e.movie;return(0,h.jsx)("div",{className:De,id:"downloads",children:(0,h.jsx)(fe.Z,{children:(0,h.jsx)(me.Z,{children:n.items.map((function(e){return(0,h.jsx)(rn,{item:e},e.id)}))})})})}function rn(e){var n=e.item;return(0,h.jsxs)(xe.Z,{sx:{"&:last-child td":{border:0}},children:[(0,h.jsxs)(ge.Z,{children:[n.quality," ",n.language&&(0,h.jsxs)(h.Fragment,{children:[" - ",n.language]})]}),(0,h.jsxs)(ge.Z,{children:[n.torrent_seeds,"/",n.torrent_peers]}),(0,h.jsx)(ge.Z,{children:Ze(n.size_bytes)}),(0,h.jsx)(ge.Z,{children:(0,h.jsx)(X.Z,{size:"small",href:n.torrent_magnet,children:(0,h.jsx)(ye.Z,{style:{fontSize:"inherit"}})},n.id)})]})}var tn,sn,on,an="/_next/static/image/src/list/box.892bd5952464ffc9399ff82d7695c08a.png";function ln(){var e=(0,p.useRouter)();return(0,h.jsx)(Ee,{style:{height:"600px"},children:(0,h.jsxs)("div",{children:[(0,h.jsx)("img",{src:an,alt:"Empty",className:(0,b.iv)(tn||(tn=(0,g.Z)(["max-width: 300px;"])))}),(0,h.jsxs)("div",{className:(0,b.iv)(sn||(sn=(0,g.Z)(["text-align: center;"]))),children:["The results on this Keywords ",e.query.keywords," is not found."]})]})})}var cn=(0,b.iv)(on||(on=(0,g.Z)(["\n  "," {\n    flex-direction: column;\n  }\n"])),B.down.sm);function un(e){var n=e.list,r=(0,j.useState)(),t=r[0],i=r[1];return n.length?(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:(0,b.cx)(K().container,cn),children:n.map((function(e){return(0,h.jsx)(G,{onClick:function(){return i(e)},movie:e},e.id)}))}),(0,h.jsx)(te,{maxWidth:"md",open:Boolean(t),onClose:function(){return i(void 0)},children:(0,h.jsx)(en,{id:null===t||void 0===t?void 0:t.imdb})})]}):(0,h.jsx)(ln,{})}var dn=r(6492),hn=r(6506),vn=r(5295),pn=r(3981),fn=r(2642);var mn,xn={stringify:function(e){return new URLSearchParams(e).toString()}},gn=r(6446),jn=r(6871),bn=r(1275),yn=r(2887),Zn=r(9334);(0,b.iv)(mn||(mn=(0,g.Z)(["\n"])));var wn={PaperProps:{style:{}}};function On(e){return(0,h.jsx)(gn.Z,{fullWidth:!0,children:(0,h.jsx)(jn.Z,{variant:"standard",label:e.label,multiple:!0,placeholder:e.label,displayEmpty:!0,value:e.value,onChange:function(n){return e.onChange(n.target.value)},renderValue:function(n){return n.length?n.join(", "):e.label},MenuProps:wn,children:e.data.map((function(n){return(0,h.jsxs)(bn.Z,{value:n.value,children:[(0,h.jsx)(yn.Z,{checked:e.value.includes(n.value)}),(0,h.jsx)(Zn.Z,{primary:n.label})]},n.value)}))})})}function Pn(e){return(0,h.jsx)(gn.Z,{fullWidth:!0,children:(0,h.jsxs)(jn.Z,{variant:"standard",value:e.value,label:e.label,placeholder:e.label,displayEmpty:!0,onChange:function(n){return e.onChange(n.target.value)},children:[(0,h.jsx)(bn.Z,{value:"",children:e.label}),e.data.map((function(e){return(0,h.jsx)(bn.Z,{value:e.value,children:e.label},e.value)}))]})})}var Nn,kn,Cn,Sn,Dn,_n,En,Bn=["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Sport","Talk-Show","Thriller","War","Western"].map((function(e){return{label:e,value:e}})),qn=["720P","1080P","2160P","3D"].map((function(e){return{label:e,value:e.toLowerCase()}})),zn=[{label:"Date Added",value:"dateadded"},"Title","Year",{label:"Popularity",value:"seeds"}].map((function(e){return"string"===typeof e?{label:e,value:e.toLowerCase()}:e})),Mn=["genre","quality","sort","keywords"];function Rn(e){var n=(0,p.useRouter)(),r=(0,j.useState)((function(){return e(n.query)})),t=r[0],i=r[1];return(0,j.useEffect)((function(){i(e(n.query))}),[n.query]),[t,i]}function An(e){var n=(0,p.useRouter)(),r=Rn((function(e){var n;return null!==(n=e.genre)&&void 0!==n?n:""})),t=(0,N.Z)(r,2),i=t[0],s=t[1],o=Rn((function(e){return e.keywords})),a=(0,N.Z)(o,2),l=a[0],c=a[1],u=Rn((function(e){var n,r;return null!==(n=null===(r=e.quality)||void 0===r?void 0:r.split(","))&&void 0!==n?n:[]})),d=(0,N.Z)(u,2),v=d[0],f=d[1],m=Rn((function(e){var n;return null!==(n=e.sort)&&void 0!==n?n:"seeds"})),x=(0,N.Z)(m,2),y=x[0],w=x[1],O=(0,j.useMemo)((function(){return Mn.some((function(e){return n.query[e]}))}),[n.query]);return(0,h.jsx)("form",{onSubmit:function(e){e.preventDefault();var r,t=xn.stringify((r={keywords:l,genre:i,quality:v.join(","),sort:y,page:void 0},(0,Z.transform)(r,(function(e,n,r){var t=n&&n.trim();t&&"seeds"!==t&&(e[r]=t)}))));n.push("?".concat(t))},children:(0,h.jsxs)(he.ZP,{container:!0,flexDirection:"row-reverse",spacing:2,children:[(0,h.jsx)(he.ZP,{item:!0,xs:12,sm:4,className:(0,b.iv)(Nn||(Nn=(0,g.Z)(["position:relative;"]))),children:(0,h.jsx)(pn.Z,{fullWidth:!0,type:"search",autoFocus:!0,name:"keywords",placeholder:"Search by movie title",value:l,onChange:function(e){return c(e.target.value)},defaultValue:n.query.keywords})}),(0,h.jsx)(he.ZP,{item:!0,xs:12,sm:3,children:(0,h.jsx)(Pn,{label:"Genre",data:Bn,value:i,onChange:s})}),(0,h.jsx)(he.ZP,{item:!0,xs:6,sm:2,children:(0,h.jsx)(On,{label:"Quality",data:qn,value:v,onChange:f})}),(0,h.jsx)(he.ZP,{item:!0,xs:6,sm:2,children:(0,h.jsx)(Pn,{label:"Sort",value:y,data:zn,onChange:w})}),(0,h.jsxs)(he.ZP,{item:!0,xs:12,className:(0,b.iv)(kn||(kn=(0,g.Z)(["padding-top: 0.5rem;text-align: right;"]))),children:[(0,h.jsx)(fn.Z,{onClick:e.onClose,color:"secondary",children:"done"}),O&&(0,h.jsx)(fn.Z,{onClick:function(){n.push("?"),e.onClose()},type:"reset",color:"warning",children:"Reset"}),(0,h.jsx)(fn.Z,{type:"submit",children:"Apply"})]})]})})}function Tn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var Fn=(0,b.iv)(Cn||(Cn=(0,g.Z)(["\n    background: rgb(0,0,0);\n    background: linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0, 0, 0, 0.2) 100%);\n    color: #fff;\n    position: fixed;\n    top: 0;\n    left: 0;\n    right: 0;\n    z-index: 2;\n"]))),Wn=(0,b.iv)(Sn||(Sn=(0,g.Z)(["\n    padding: 1rem;\n"]))),In=(0,b.iv)(Dn||(Dn=(0,g.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    "," {\n        padding-left: 0.5rem;\n        padding-right: 0.5rem;\n    }\n"])),B.down.sm);function Ln(){var e=(0,j.useState)(!1),n=e[0],r=e[1],t=(0,j.useRef)(null);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:(0,b.cx)(Fn),children:(0,h.jsx)(Ve.Z,{in:!n,children:(0,h.jsxs)("div",{className:In,style:{textAlign:"right"},children:[(0,h.jsx)(Yn,{}),(0,h.jsx)(X.Z,{size:"large",onClick:function(){var e;r(!0),null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})},color:"inherit",children:(0,h.jsx)(hn.Z,{fontSize:"inherit",color:"inherit"})})]})})}),(0,h.jsx)(Ve.Z,{in:n,ref:t,unmountOnExit:!0,children:(0,h.jsx)(vn.Z,{className:(0,b.iv)(_n||(_n=(0,g.Z)(["margin: 0.25rem;"]))),children:(0,h.jsx)("div",{className:Wn,children:(0,h.jsx)(An,{onClose:function(){return r(!1)}})})})})]})}function Yn(){var e=(0,p.useRouter)(),n=e.query,r=e.push,i=function(e){var i=function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Tn(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Tn(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({},n);delete i[e],r("/?".concat(xn.stringify(i)))};return(0,h.jsx)("div",{children:Mn.map((function(e){return n[e]&&(0,h.jsx)(ve.Z,{size:"small",className:(0,b.iv)(En||(En=(0,g.Z)(["margin-left: 0.4rem;color: inherit;background: #b7b7b782;"]))),variant:"filled",label:n[e],onDelete:function(){return i(e)}},e)}))})}function Vn(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function Gn(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?Vn(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Vn(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var Hn=function(e){var n,r,t,i=(0,p.useRouter)(),s=(0,f.Z)((function(){return function(e){return u.apply(this,arguments)}(i.query)}),[i.query]),o=s.loading,l=void 0===o||o,c=s.value;return(0,h.jsxs)(v,{children:[(0,h.jsx)(Ln,{}),l?(0,h.jsx)(Ee,{children:(0,h.jsx)(x,{})}):(0,h.jsx)(un,{list:null!==(n=null===c||void 0===c?void 0:c.MovieList)&&void 0!==n?n:[]}),(null!==(r=null===c||void 0===c?void 0:c.MovieList.length)&&void 0!==r?r:0)>74&&(0,h.jsx)("div",{style:{padding:"1rem 0",display:"flex",justifyContent:"flex-end"},children:(0,h.jsx)(dn.Z,{onChange:function(e,n){i.push("?".concat(a.stringify(Gn(Gn({},i.query),{},{page:n}))),void 0,{shallow:!0})},count:100,page:parseInt(null!==(t=i.query.page)&&void 0!==t?t:"1")})})]})}},5301:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2568)}])},4276:function(e){e.exports={container:"list_container__26QnA"}}},function(e){e.O(0,[774,662,245,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);