(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{862:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[[...index]]",function(){return t(6369)}])},6369:function(n,e,t){"use strict";let r;t.r(e),t.d(e,{default:function(){return eI}});var i=t(2729),l=t(5893);let o="https://fusme.link";async function s(n){let{page:e=1,...t}=n,r=new URLSearchParams({sort:"seeds",short:"1",cb:"",quality:"720p,1080p,3d",ver:"6.2.1.17",os:"mac",...t}),i="".concat(o,"/movies/").concat(e,"?")+r,l=await fetch(i);if(!l.ok)return[];let s=await l.json();return s.forEach(n=>{n.title=n.title.replace(/\(\d+\)$/,"")}),s.map(n=>a(n))}function a(n){return{id:n._id,imdb:n.imdb_id,rating:n.rating.percentage/10,artwork:n.images.fanart,genres:n.genres,runtime:Number(n.runtime),title:n.title,year:Number(n.year),actors:""}}async function u(n){var e;if(!n)return;let t="".concat(o,"/movie/").concat(n),r=await fetch(t);return{...a(e=await r.json()),directors:"",poster:e.images.poster,trailer:e.trailer,items:function(n){let e=[],t=1;for(let r of Object.keys(n))for(let i of Object.keys(n[r])){let l=n[r][i];e.push({language:r,quality:l.quality,size_bytes:Number(l.size),torrent_magnet:l.url,torrent_peers:l.peer,torrent_seeds:l.seed,id:String(t)}),t++}return e}(e.torrents),description:e.synopsis}}function c(n){let{children:e}=n;return(0,l.jsx)("div",{children:e})}var d=t(1163),f=t(3395),h=t(8456);function m(){return(0,l.jsx)(h.Z,{})}var x=t(7294),v=t(8872),p=t(5150),g=t(8403),j=t.n(g),y=t(8396);function b(){return(0,y.Z)("(max-width:600px)")}var Z=t(2238),w=t.n(Z);function _(){var n;return(null===(n=window.navigator)||void 0===n?void 0:n.userAgent)?(r||(r=new(w())(window.navigator.userAgent).getResult()),r):null}let N={xs:0,sm:600,md:960,lg:1280,xl:1920},k=Object.entries(N).reduce((n,e)=>{let[t,r]=e;return n[t]="@media (min-width: ".concat(r+1,"px)"),n},{}),C=Object.entries(N).reduce((n,e)=>{let[t,r]=e;return n[t]="@media (max-width: ".concat(r,"px)"),n},{});function P(n,e){return"@media (min-width: ".concat(N[n]+1,"px) and (max-width: ").concat(N[e],"px)")}P.up=k,P.down=C;var S=t(3375),B=t(7348);function q(n){let e=(0,B.y)({start:0,end:6e4*n});return[e.hours,"h ",e.minutes,"m"].join("")}var R=t(1664),E=t.n(R);function z(){let n=(0,i._)(["\n  overflow: hidden;\n  background: rgba(0, 0, 0, 0.8);\n  transition: box-shadow 0.3s;\n  box-shadow: 0 0 0;\n  margin: 0.25rem;\n  border: 0.25rem solid #fff;\n  border-radius: 0.25rem;\n  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.12);\n  "," {\n    flex: 1;\n    min-width: 160px;\n    max-width: 200px;\n    &:hover {\n      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);\n      z-index: 1;\n    }\n  }\n  "," {\n    display: flex;\n    background: rgba(0, 0, 0, 0.35);\n    justify-content: flex-start;\n    align-items: flex-start;\n    border: 1px solid rgba(0, 0, 0, 0.12);\n    box-shadow: none;\n    img {\n      width: 80px;\n    }\n  }\n"]);return z=function(){return n},n}function M(){let n=(0,i._)(["\n  position: absolute;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.4);\n  color: #fff;\n  max-height: 0;\n  transition: max-height 0.3s;\n  left: 0;\n  right: 0;\n"]);return M=function(){return n},n}function T(){let n=(0,i._)(["\n  padding: 0.5rem 1rem;\n  text-align: left;\n  h3,\n  div {\n    padding-bottom: 0.25rem;\n  }\n"]);return T=function(){return n},n}function O(){let n=(0,i._)(["\n  min-height: 45%;\n"]);return O=function(){return n},n}function A(){let n=(0,i._)(["\n  font-weight: 500;\n  font-size: 1.1rem;\n  margin: 0;\n"]);return A=function(){return n},n}function D(){let n=(0,i._)(["\n                  margin-bottom: -2px;\n                "]);return D=function(){return n},n}let F=(0,v.iv)(z(),P.up.sm,P.down.sm),Y=(0,v.iv)(M()),I=(0,v.iv)(T()),W=(0,v.iv)(O()),H=(0,v.iv)(A());function X(n){let{movie:e,href:t}=n,r=b();return(0,l.jsx)(E(),{href:"/".concat(e.imdb).concat(location.search),passHref:!0,shallow:!0,children:(0,l.jsxs)(p.Z,{className:F,href:t,children:[(0,l.jsx)("img",{src:e.artwork,alt:e.title,style:{objectFit:"contain"}}),(0,l.jsx)("div",{className:(0,v.cx)({[Y]:!r},W),children:(0,l.jsxs)("div",{className:I,children:[(0,l.jsx)("h3",{className:H,children:e.title}),(0,l.jsxs)("div",{children:[(0,l.jsx)("strong",{children:e.year})," |"," ",(0,l.jsx)(S.Z,{fontSize:"inherit",className:(0,v.iv)(D())})," ",e.rating," | ",q(e.runtime)]}),(0,l.jsx)("div",{}),(0,l.jsxs)("div",{children:[e.genres.map(j()).join(", "),"."]}),e.actors&&(0,l.jsxs)("div",{children:[e.actors,"."]})]})})]})})}var G=t(8262),L=t(3946),U=t(594),V=t(7533);function K(n){let{title:e,children:t,header:r,...i}=n;return b()?(0,l.jsxs)(V.ZP,{anchor:"bottom",open:i.open,onClose:i.onClose,children:[r,(0,l.jsx)(L.Z,{"aria-label":"close",onClick:i.onClose,sx:{position:"absolute",right:8,top:8,zIndex:1,color:n=>n.palette.grey[500]},children:(0,l.jsx)(U.Z,{})}),t]}):(0,l.jsxs)(G.Z,{...i,children:[r,(0,l.jsx)(L.Z,{"aria-label":"close",onClick:i.onClose,sx:{position:"absolute",right:8,top:8,color:n=>n.palette.grey[500]},children:(0,l.jsx)(U.Z,{})}),t]})}var Q=t(6886),$=t(7918),J=t(3795),nn=t(7906),ne=t(295),nt=t(3816),nr=t(3252),ni=t(1481),nl=t(8953),no=t(9702);function ns(){let n=(0,i._)(["\n    display: flex;\n"]);return ns=function(){return n},n}function na(){let n=(0,i._)(["\n    max-height: 80vh;\n    overflow: auto;\n    padding-bottom: 3.5rem;\n"]);return na=function(){return n},n}function nu(){let n=(0,i._)(["\n    > div {\n        display: block !important;\n    }\n"]);return nu=function(){return n},n}function nc(){let n=(0,i._)(["\n    display: block;\n    max-width: 100%;\n"]);return nc=function(){return n},n}function nd(){let n=(0,i._)(["\n    font-weight: 500;\n"]);return nd=function(){return n},n}function nf(){let n=(0,i._)(["\n    padding: 1rem;\n    overflow: auto;\n"]);return nf=function(){return n},n}function nh(){let n=(0,i._)(["\n    display: flex;\n    flex-direction: column;\n    margin-top: 1rem;\n"]);return nh=function(){return n},n}function nm(){let n=(0,i._)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"]);return nm=function(){return n},n}let nx=(0,v.iv)(ns()),nv=(0,v.iv)(na()),np=(0,v.iv)(nu()),ng=(0,v.iv)(nc()),nj=(0,v.iv)(nd()),ny=(0,v.iv)(nf()),nb=(0,v.iv)(nh());(0,v.iv)(nm());var nZ=t(5944),nw=t(917);function n_(){let n=(0,i._)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: calc(100vh - 56px);\n"]);return n_=function(){return n},n}let nN=(0,nw.iv)(n_());function nk(n){return(0,nZ.tZ)("div",{className:n.className,css:nN,style:n.style,children:n.children})}var nC=t(5113),nP=t(1737),nS=t(7922),nB=t(4156);function nq(){let n=(0,i._)(["padding-bottom: 0.5rem;"]);return nq=function(){return n},n}function nR(){let n=(0,i._)(["color: #666;"]);return nR=function(){return n},n}function nE(){let n=(0,i._)(["margin-top: 0.5rem;"]);return nE=function(){return n},n}function nz(){let n=(0,i._)(["display:flex;margin-top: 0.5rem"]);return nz=function(){return n},n}let nM=(0,v.iv)(nq()),nT=(0,v.iv)(nR());function nO(){let n=_();return n?"Android"===n.os.name?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:nM,children:"You might need to install a torrent client first if you don't have already"}),(0,l.jsx)("div",{className:nT,children:"Suggestions:"}),(0,l.jsx)("ol",{children:(0,l.jsx)("li",{children:(0,l.jsx)(J.Z,{target:"playstore",href:"https://play.google.com/store/apps/details?id=com.delphicoder.flud&hl=en_IN&gl=US",children:"Flud"})})})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:nM,children:"You might need to install a torrent client first if you don't have already"}),(0,l.jsx)("div",{className:nT,children:"Suggestions:"}),(0,l.jsx)("ol",{children:(0,l.jsx)("li",{children:(0,l.jsx)(J.Z,{target:"Webtorrent",href:"https://webtorrent.io/",children:"Webtorrent"})})})]}):null}function nA(){let[n,e]=(0,x.useState)(!1),t=_();return(null==t?void 0:t.os.name)==="iOS"?(0,l.jsx)(nP.Z,{severity:"error",className:(0,v.iv)(nE()),children:"IOS doesn't support torrent client yet. You might consider other operating system."}):(0,l.jsxs)("div",{className:(0,v.iv)(nz()),children:[(0,l.jsx)(nS.Z,{in:n,children:(0,l.jsx)(nO,{})}),(0,l.jsx)("div",{children:(0,l.jsx)(nB.Z,{title:"How to download",children:(0,l.jsx)(L.Z,{size:"small",onClick:()=>{e(n=>!n)},children:n?(0,l.jsx)(U.Z,{fontSize:"inherit"}):(0,l.jsx)(nC.Z,{fontSize:"inherit"})})})})]})}function nD(){let n=(0,i._)(["\n  padding-bottom: 1rem;\n"]);return nD=function(){return n},n}function nF(){let n=(0,i._)(["\n  position: absolute;\n  bottom: 3rem;\n  right: 1rem;\n  background: rgba(0, 0, 0, 0.2);\n"]);return nF=function(){return n},n}function nY(){let n=(0,i._)(["\n  height: 50vh;\n  width: 50vw;\n  "," {\n    width: 100%;\n  }\n"]);return nY=function(){return n},n}function nI(){let n=(0,i._)(["\n                margin-right: 0.4rem;\n                margin-bottom: 0.4rem;\n              "]);return nI=function(){return n},n}function nW(){let n=(0,i._)(["\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n          "]);return nW=function(){return n},n}function nH(){let n=(0,i._)(["\n              display: flex;\n              text-decoration: none;\n              align-items: center;\n            "]);return nH=function(){return n},n}let nX=(0,v.iv)(nD()),nG=(0,v.iv)(nF()),nL=(0,v.iv)(nY(),P.down.sm);function nU(n){let e=b(),{loading:t,value:r}=(0,f.Z)(()=>u(n.id),[n.id]);return t?(0,l.jsx)(nk,{className:nL,children:(0,l.jsx)(m,{})}):r?(0,l.jsxs)(Q.ZP,{container:!0,className:(0,v.cx)(nx,{[nv]:e}),children:[(0,l.jsxs)(Q.ZP,{item:!0,xs:12,sm:5,className:np,children:[(0,l.jsx)("img",{className:ng,src:r.poster,alt:r.title}),e&&(0,l.jsx)(L.Z,{onClick:()=>{var n;null===(n=document.getElementById("downloads"))||void 0===n||n.scrollIntoView({behavior:"smooth"})},className:nG,children:(0,l.jsx)(ni.Z,{})})]}),(0,l.jsxs)(Q.ZP,{item:!0,xs:12,sm:7,className:ny,children:[(0,l.jsx)("h3",{className:nj,children:r.title}),(0,l.jsx)("div",{className:nX,children:q(r.runtime)}),(0,l.jsx)("div",{className:nX,style:{color:"#727272"},children:r.description}),(0,l.jsx)("div",{className:nX,children:r.genres.map(n=>(0,l.jsx)($.Z,{className:(0,v.iv)(nI()),label:j()(n)},n))}),r.actors&&(0,l.jsxs)("div",{className:nX,children:[r.actors,"."]}),(0,l.jsxs)("div",{className:(0,v.iv)(nW()),children:[r.year," ",(0,l.jsxs)(J.Z,{target:"imdb",href:"https://www.imdb.com/title/".concat(r.imdb),children:["Rating ",r.rating]}),(0,l.jsxs)(J.Z,{className:(0,v.iv)(nH()),target:"youtube-trailer",href:r.trailer,children:["Trailer \xa0",(0,l.jsx)(nl.Z,{})]})]}),(0,l.jsx)(nA,{}),(0,l.jsx)(nV,{movie:r})]})]}):null}function nV(n){let{movie:e}=n;return(0,l.jsx)("div",{className:nb,id:"downloads",children:(0,l.jsx)(nn.Z,{children:(0,l.jsx)(ne.Z,{children:e.items.map(n=>(0,l.jsx)(nK,{item:n},n.id))})})})}function nK(n){let{item:e}=n;return(0,l.jsxs)(nt.Z,{sx:{"&:last-child td":{border:0}},children:[(0,l.jsxs)(nr.Z,{children:[e.quality," ",e.language&&(0,l.jsxs)(l.Fragment,{children:[" - ",e.language]})]}),(0,l.jsxs)(nr.Z,{children:[e.torrent_seeds,"/",e.torrent_peers]}),(0,l.jsx)(nr.Z,{children:function(n){let e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e?1e3:1024;if(Math.abs(n)<r)return n+" B";let i=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],l=-1,o=10**t;do n/=r,++l;while(Math.round(Math.abs(n)*o)/o>=r&&l<i.length-1);return n.toFixed(t)+" "+i[l]}(e.size_bytes)}),(0,l.jsx)(nr.Z,{children:(0,l.jsx)(L.Z,{size:"small",href:e.torrent_magnet,children:(0,l.jsx)(no.Z,{style:{fontSize:"inherit"}})},e.id)})]})}function nQ(){let n=(0,i._)(["max-width: 300px;"]);return nQ=function(){return n},n}function n$(){let n=(0,i._)(["text-align: center;"]);return n$=function(){return n},n}function nJ(){let n=(0,d.useRouter)();return(0,l.jsx)(nk,{style:{height:"600px"},children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"/movies/_next/static/media/box.08b5ebea.png",alt:"Empty",className:(0,v.iv)(nQ())}),(0,l.jsxs)("div",{className:(0,v.iv)(n$()),children:["The results on this Keywords ",n.query.keywords," is not found."]})]})})}function n0(){let n=(0,i._)(["\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n  "," {\n    flex-direction: column;\n  }\n"]);return n0=function(){return n},n}let n1=(0,v.iv)(n0(),P.down.sm);function n2(n){let{list:e}=n,t=(0,d.useRouter)(),r=(0,x.useMemo)(()=>{var n;if(null===(n=t.query.index)||void 0===n?void 0:n.length)return t.query.index[0]},[t.query.index]);return e.length?(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{className:n1,children:e.map(n=>(0,l.jsx)(X,{movie:n},n.id))}),(0,l.jsx)(K,{maxWidth:"md",open:!!r,onClose:()=>t.push("/".concat(location.search),void 0,{shallow:!0}),children:(0,l.jsx)(nU,{id:r})})]}):(0,l.jsx)(nJ,{})}var n5=t(872),n3=t(6964),n8=t(7334),n6=t.n(n8),n7=t(6236),n4=t(6506),n9=t(6242),en=t(89),ee=t(9417),et={stringify:function(n){return new URLSearchParams(n).toString()}},er=t(4054),ei=t(4428),el=t(9840),eo=t(5071),es=t(9334);function ea(){let n=(0,i._)([""]);return ea=function(){return n},n}function eu(){let n=(0,i._)(["\n                        color: #fff;\n                    "]);return eu=function(){return n},n}function ec(){let n=(0,i._)(["\n                        color: #fff;\n                    "]);return ec=function(){return n},n}(0,v.iv)(ea());let ed={PaperProps:{style:{}}};function ef(n){return(0,l.jsx)(er.Z,{fullWidth:!0,children:(0,l.jsx)(ei.Z,{variant:"standard",label:n.label,multiple:!0,placeholder:n.label,displayEmpty:!0,value:n.value,onChange:e=>n.onChange(e.target.value),renderValue:e=>e.length?e.join(", "):n.label,MenuProps:ed,inputProps:{className:(0,v.iv)(eu())},children:n.data.map(e=>(0,l.jsxs)(el.Z,{value:e.value,children:[(0,l.jsx)(eo.Z,{checked:n.value.includes(e.value)}),(0,l.jsx)(es.Z,{primary:e.label})]},e.value))})})}function eh(n){return(0,l.jsx)(er.Z,{fullWidth:!0,children:(0,l.jsxs)(ei.Z,{variant:"standard",inputProps:{className:(0,v.iv)(ec())},value:n.value,label:n.label,placeholder:n.label,displayEmpty:!0,onChange:e=>n.onChange(e.target.value),children:[(0,l.jsx)(el.Z,{value:"",children:n.label}),n.data.map(n=>(0,l.jsx)(el.Z,{value:n.value,children:n.label},n.value))]})})}let em=["Action","Adventure","Animation","Biography","Comedy","Crime","Documentary","Drama","Family","Fantasy","Film-Noir","Game-Show","History","Horror","Music","Musical","Mystery","News","Reality-TV","Romance","Sci-Fi","Sport","Talk-Show","Thriller","War","Western"].map(n=>({label:n,value:n})),ex=["720P","1080P","2160P","3D"].map(n=>({label:n,value:n.toLowerCase()})),ev=[{label:"Date Added",value:"dateadded"},"Title","Year",{label:"Popularity",value:"seeds"}].map(n=>"string"==typeof n?{label:n,value:n.toLowerCase()}:n),ep=["genre","quality","sort","keywords","page"];var eg=t(8718),ej=t.n(eg);function ey(){let n=(0,i._)(["\n                        padding-top: 0.5rem;\n                        text-align: right;\n                    "]);return ey=function(){return n},n}let eb=n=>ej()(n,(n,e,t)=>{let r=e&&e.trim();r&&"seeds"!==r&&(n[t]=r)});function eZ(n){let e=(0,d.useRouter)(),[t,r]=(0,x.useState)(()=>n(e.query));return(0,x.useEffect)(()=>{r(n(e.query))},[e.query]),[t,r]}function ew(n){let e=(0,d.useRouter)(),[t,r]=eZ(n=>{var e;return null!==(e=n.genre)&&void 0!==e?e:""}),[i,o]=eZ(n=>{var e,t;return null!==(t=null===(e=n.quality)||void 0===e?void 0:e.split(","))&&void 0!==t?t:[]}),[s,a]=eZ(n=>{var e;return null!==(e=n.sort)&&void 0!==e?e:"seeds"}),u=(0,x.useMemo)(()=>ep.some(n=>e.query[n]),[e.query]);return(0,l.jsx)("form",{onSubmit:r=>{r.preventDefault();let l=et.stringify(eb({genre:t,quality:i.join(","),sort:s,page:void 0}));e.push("?".concat(l)),n.onClose()},children:(0,l.jsxs)(Q.ZP,{container:!0,flexDirection:"row-reverse",spacing:2,children:[(0,l.jsx)(Q.ZP,{item:!0,xs:12,sm:3,children:(0,l.jsx)(eh,{label:"Genre",data:em,value:t,onChange:r})}),(0,l.jsx)(Q.ZP,{item:!0,xs:6,sm:2,children:(0,l.jsx)(ef,{label:"Quality",data:ex,value:i,onChange:o})}),(0,l.jsx)(Q.ZP,{item:!0,xs:6,sm:2,children:(0,l.jsx)(eh,{label:"Sort",value:s,data:ev,onChange:a})}),(0,l.jsxs)(Q.ZP,{item:!0,xs:12,className:(0,v.iv)(ey()),children:[(0,l.jsx)(ee.Z,{onClick:n.onClose,color:"secondary",children:"cancel"}),u&&(0,l.jsx)(ee.Z,{onClick:()=>{e.push("?"),n.onClose()},type:"reset",color:"warning",children:"Reset"}),(0,l.jsx)(ee.Z,{type:"submit",children:"Apply"})]})]})})}function e_(){let n=(0,i._)(["\nbackground: rgb(0, 0, 0);\nbackground: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.2) 100%);\ncolor: #fff;\n"]);return e_=function(){return n},n}function eN(){let n=(0,i._)(["\n    padding: 1rem;\n"]);return eN=function(){return n},n}function ek(){let n=(0,i._)(["\ndisplay: flex;\njustify-content: space-between !important;\nflex-direction: row-reverse;\nalign-items: flex-start;\npadding-left: 1rem;\npadding-right: 1rem;\npadding-top: 0.5rem;\npadding-bottom: 0.5rem;\n"," {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n}\n"]);return ek=function(){return n},n}function eC(){let n=(0,i._)(["\ndisplay: flex;\njustify-content: flex-end;\nflex: 1;\n"]);return eC=function(){return n},n}let eP=(0,nw.iv)(e_()),eS=(0,nw.iv)(eN()),eB=(0,nw.iv)(ek(),P.down.sm),eq=(0,nw.iv)(eC());function eR(){let n=(0,i._)(["\n                                flex: 2;\n                            "]);return eR=function(){return n},n}function eE(){let n=(0,i._)(["\n                        background-color: rgba(0, 0, 0, 0.35);\n                        margin: 0.25rem;\n                    "]);return eE=function(){return n},n}function ez(){let n=(0,i._)(["\n                                margin-left: 0.4rem;\n                                margin-bottom: 0.25rem;\n                                margin-top: 0.25rem;\n                                color: inherit;\n                                background: #b7b7b782;\n                            "]);return ez=function(){return n},n}function eM(){let n=(0,i._)(["\n                display: flex;\n                justify-content: flex-end;\n            "]);return eM=function(){return n},n}function eT(){let n=(0,i._)(["\n                    width: ","px;\n                    transition: width 0.3s;\n                    overflow: hidden;\n                "]);return eT=function(){return n},n}function eO(){let[n,e]=(0,x.useState)(!1),t=(0,x.useRef)(null);return(0,nZ.BX)(nZ.HY,{children:[(0,nZ.tZ)("div",{css:eP,children:(0,nZ.tZ)(nS.Z,{in:!n,children:(0,nZ.BX)(Q.ZP,{container:!0,css:eB,children:[(0,nZ.BX)(Q.ZP,{item:!0,xs:12,sm:4,css:eq,children:[(0,nZ.tZ)(eD,{}),(0,nZ.tZ)(L.Z,{color:"inherit",onClick:()=>{e(n=>!n),n||window.scrollTo({top:0})},children:(0,nZ.tZ)(n7.Z,{color:"inherit"})})]}),(0,nZ.tZ)(Q.ZP,{item:!0,xs:12,sm:8,css:(0,nw.iv)(eR()),children:(0,nZ.tZ)(eA,{})})]})})}),(0,nZ.tZ)(nS.Z,{in:n,unmountOnExit:!0,children:(0,nZ.tZ)(n9.Z,{ref:t,css:(0,nw.iv)(eE()),children:(0,nZ.tZ)("div",{css:eS,children:(0,nZ.tZ)(ew,{onClose:()=>e(!1)})})})})]})}function eA(){let{query:n,push:e}=(0,d.useRouter)(),t=t=>{let r={...n};delete r[t],e("/?".concat(et.stringify(r)))};return(0,nZ.tZ)(nZ.HY,{children:ep.map(e=>n[e]&&(0,nZ.tZ)($.Z,{size:"small",css:(0,nw.iv)(ez()),variant:"filled",label:n[e],onDelete:()=>t(e)},e))})}function eD(){let n=(0,d.useRouter)(),[e,t]=eZ(n=>{var e;return null!==(e=n.keywords)&&void 0!==e?e:""}),[r,i]=(0,x.useState)(!0),l=(0,x.useRef)(null);return(0,nZ.BX)("form",{onSubmit:t=>{t.preventDefault(),n.push("/?".concat(et.stringify({...n.query,keywords:e})))},css:(0,nw.iv)(eM()),children:[(0,nZ.tZ)(en.Z,{inputRef:l,onBlur:()=>i(!0),css:(0,nw.iv)(eT(),r?0:250),type:"text",name:"keywords",style:{color:"inherit"},placeholder:"Search by movie title",value:e,onChange:n=>t(n.target.value)}),(0,nZ.tZ)("button",{style:{display:"none"},type:"submit"}),(0,nZ.tZ)(L.Z,{onClick:()=>{if(i(n=>!n),r){var n;null===(n=l.current)||void 0===n||n.focus()}},color:"inherit",children:r?(0,nZ.tZ)(n4.Z,{}):(0,nZ.tZ)(U.Z,{})})]})}function eF(){let n=(0,i._)(["\n              color: #fff;\n            "]);return eF=function(){return n},n}function eY(){let n=(0,i._)(["\n                  color: #fff;\n                "]);return eY=function(){return n},n}var eI=n=>{var e,t;let r=(0,d.useRouter)(),{loading:i=!0,value:o}=(0,f.Z)(()=>s(r.query),[...ep.map(n=>r.query[n])]);return(0,l.jsxs)(c,{children:[(0,l.jsx)(eO,{}),i?(0,l.jsx)(nk,{children:(0,l.jsx)(m,{})}):(0,l.jsx)(n2,{list:null!=o?o:[]}),(null!==(e=null==o?void 0:o.length)&&void 0!==e?e:0)>74&&(0,l.jsx)("div",{style:{padding:"1rem 0",display:"flex",justifyContent:"flex-end"},children:(0,l.jsx)(n5.Z,{className:(0,v.iv)(eF()),onChange:(n,e)=>{r.push("?".concat(n6().stringify({...r.query,page:e})),void 0,{shallow:!0})},color:"primary",count:100,renderItem:n=>(0,l.jsx)(n3.Z,{...n,className:(0,v.iv)(eY())}),page:parseInt(null!==(t=r.query.page)&&void 0!==t?t:"1")})})]})}}},function(n){n.O(0,[597,888,774,179],function(){return n(n.s=862)}),_N_E=n.O()}]);