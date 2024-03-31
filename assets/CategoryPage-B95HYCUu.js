import{O as q,P as ne,b8 as pe,p as M,g as H,s as W,r as _,w as F,n as oe,ae as me,v as L,D as U,A as le,B as S,N as $e,_ as _e,k as X,bA as xe,bB as Se,h as j,Y as he,bv as ke,a0 as n,ai as D,aj as Be,am as Oe,aM as Re,aE as K,Q as ze,H as se,b2 as Ae,j as ie,i as Le,e as Fe,q as Me,bC as ue,an as Ie,ao as Ve,C as De,ak as Ke,L as Ue,S as je,T as qe,X as He,x as ee,y as x,z as V,a1 as de,I as be,J as te,K as fe}from"./index-CW4DnbBb.js";import{x as re,U as ge,_ as We,k as Xe,l as Ye,m as Je,E as Qe}from"./plugin-vueexport-helper-tpmt3a24.js";import{a as Ge,E as Ze,b as et}from"./el-image-viewer-PGrzMePy.js";import{L as tt}from"./LayoutContainer-DFUVgAB1.js";import{c as z}from"./strings-BXRczwlC.js";import{u as at}from"./index-DUDOokPF.js";import"./debounce-C3t0kCl-.js";const Y=Symbol("tabsRootContextKey"),st=q({tabs:{type:ne(Array),default:()=>pe([])}}),ye="ElTabBar",nt=M({name:ye}),ot=M({...nt,props:st,setup(e,{expose:l}){const p=e,R=X(),d=H(Y);d||re(ye,"<el-tabs><el-tab-bar /></el-tabs>");const t=W("tabs"),P=_(),B=_(),c=()=>{let i=0,y=0;const u=["top","bottom"].includes(d.props.tabPosition)?"width":"height",o=u==="width"?"x":"y",k=o==="x"?"left":"top";return p.tabs.every(a=>{var v,C;const h=(C=(v=R.parent)==null?void 0:v.refs)==null?void 0:C[`tab-${a.uid}`];if(!h)return!1;if(!a.active)return!0;i=h[`offset${z(k)}`],y=h[`client${z(u)}`];const N=window.getComputedStyle(h);return u==="width"&&(p.tabs.length>1&&(y-=Number.parseFloat(N.paddingLeft)+Number.parseFloat(N.paddingRight)),i+=Number.parseFloat(N.paddingLeft)),!1}),{[u]:`${y}px`,transform:`translate${z(o)}(${i}px)`}},f=()=>B.value=c();return F(()=>p.tabs,async()=>{await oe(),f()},{immediate:!0}),me(P,()=>f()),l({ref:P,update:f}),(i,y)=>(L(),U("div",{ref_key:"barRef",ref:P,class:le([S(t).e("active-bar"),S(t).is(S(d).props.tabPosition)]),style:$e(B.value)},null,6))}});var lt=_e(ot,[["__file","tab-bar.vue"]]);const rt=q({panes:{type:ne(Array),default:()=>pe([])},currentName:{type:[String,Number],default:""},editable:Boolean,type:{type:String,values:["card","border-card",""],default:""},stretch:Boolean}),ct={tabClick:(e,l,p)=>p instanceof Event,tabRemove:(e,l)=>l instanceof Event},ve="ElTabNav",it=M({name:ve,props:rt,emits:ct,setup(e,{expose:l,emit:p}){const R=X(),d=H(Y);d||re(ve,"<el-tabs><tab-nav /></el-tabs>");const t=W("tabs"),P=xe(),B=Se(),c=_(),f=_(),i=_(),y=_(),u=_(!1),o=_(0),k=_(!1),a=_(!0),v=j(()=>["top","bottom"].includes(d.props.tabPosition)?"width":"height"),C=j(()=>({transform:`translate${v.value==="width"?"X":"Y"}(-${o.value}px)`})),h=()=>{if(!c.value)return;const r=c.value[`offset${z(v.value)}`],b=o.value;if(!b)return;const s=b>r?b-r:0;o.value=s},N=()=>{if(!c.value||!f.value)return;const r=f.value[`offset${z(v.value)}`],b=c.value[`offset${z(v.value)}`],s=o.value;if(r-s<=b)return;const T=r-s>b*2?s+b:r-b;o.value=T},$=async()=>{const r=f.value;if(!u.value||!i.value||!c.value||!r)return;await oe();const b=i.value.querySelector(".is-active");if(!b)return;const s=c.value,T=["top","bottom"].includes(d.props.tabPosition),E=b.getBoundingClientRect(),g=s.getBoundingClientRect(),O=T?r.offsetWidth-g.width:r.offsetHeight-g.height,w=o.value;let m=w;T?(E.left<g.left&&(m=w-(g.left-E.left)),E.right>g.right&&(m=w+E.right-g.right)):(E.top<g.top&&(m=w-(g.top-E.top)),E.bottom>g.bottom&&(m=w+(E.bottom-g.bottom))),m=Math.max(m,0),o.value=Math.min(m,O)},I=()=>{var r;if(!f.value||!c.value)return;e.stretch&&((r=y.value)==null||r.update());const b=f.value[`offset${z(v.value)}`],s=c.value[`offset${z(v.value)}`],T=o.value;s<b?(u.value=u.value||{},u.value.prev=T,u.value.next=T+s<b,b-T<s&&(o.value=b-s)):(u.value=!1,T>0&&(o.value=0))},Te=r=>{const b=r.code,{up:s,down:T,left:E,right:g}=K;if(![s,T,E,g].includes(b))return;const O=Array.from(r.currentTarget.querySelectorAll("[role=tab]:not(.is-disabled)")),w=O.indexOf(r.target);let m;b===E||b===s?w===0?m=O.length-1:m=w-1:w<O.length-1?m=w+1:m=0,O[m].focus({preventScroll:!0}),O[m].click(),ce()},ce=()=>{a.value&&(k.value=!0)},J=()=>k.value=!1;return F(P,r=>{r==="hidden"?a.value=!1:r==="visible"&&setTimeout(()=>a.value=!0,50)}),F(B,r=>{r?setTimeout(()=>a.value=!0,50):a.value=!1}),me(i,I),he(()=>setTimeout(()=>$(),0)),ke(()=>I()),l({scrollToActiveTab:$,removeFocus:J}),F(()=>e.panes,()=>R.update(),{flush:"post",deep:!0}),()=>{const r=u.value?[n("span",{class:[t.e("nav-prev"),t.is("disabled",!u.value.prev)],onClick:h},[n(D,null,{default:()=>[n(Be,null,null)]})]),n("span",{class:[t.e("nav-next"),t.is("disabled",!u.value.next)],onClick:N},[n(D,null,{default:()=>[n(Oe,null,null)]})])]:null,b=e.panes.map((s,T)=>{var E,g,O,w;const m=s.uid,Q=s.props.disabled,G=(g=(E=s.props.name)!=null?E:s.index)!=null?g:`${T}`,Z=!Q&&(s.isClosable||e.editable);s.index=`${T}`;const Ee=Z?n(D,{class:"is-icon-close",onClick:A=>p("tabRemove",s,A)},{default:()=>[n(Re,null,null)]}):null,Pe=((w=(O=s.slots).label)==null?void 0:w.call(O))||s.props.label,we=!Q&&s.active?0:-1;return n("div",{ref:`tab-${m}`,class:[t.e("item"),t.is(d.props.tabPosition),t.is("active",s.active),t.is("disabled",Q),t.is("closable",Z),t.is("focus",k.value)],id:`tab-${G}`,key:`tab-${m}`,"aria-controls":`pane-${G}`,role:"tab","aria-selected":s.active,tabindex:we,onFocus:()=>ce(),onBlur:()=>J(),onClick:A=>{J(),p("tabClick",s,G,A)},onKeydown:A=>{Z&&(A.code===K.delete||A.code===K.backspace)&&p("tabRemove",s,A)}},[Pe,Ee])});return n("div",{ref:i,class:[t.e("nav-wrap"),t.is("scrollable",!!u.value),t.is(d.props.tabPosition)]},[r,n("div",{class:t.e("nav-scroll"),ref:c},[n("div",{class:[t.e("nav"),t.is(d.props.tabPosition),t.is("stretch",e.stretch&&["top","bottom"].includes(d.props.tabPosition))],ref:f,style:C.value,role:"tablist",onKeydown:Te},[e.type?null:n(lt,{ref:y,tabs:[...e.panes]},null),b])])])}}}),ut=q({type:{type:String,values:["card","border-card",""],default:""},closable:Boolean,addable:Boolean,modelValue:{type:[String,Number]},editable:Boolean,tabPosition:{type:String,values:["top","right","bottom","left"],default:"top"},beforeLeave:{type:ne(Function),default:()=>!0},stretch:Boolean}),ae=e=>Le(e)||Fe(e),dt={[ge]:e=>ae(e),tabClick:(e,l)=>l instanceof Event,tabChange:e=>ae(e),edit:(e,l)=>["remove","add"].includes(l),tabRemove:e=>ae(e),tabAdd:()=>!0},bt=M({name:"ElTabs",props:ut,emits:dt,setup(e,{emit:l,slots:p,expose:R}){var d;const t=W("tabs"),{children:P,addChild:B,removeChild:c}=at(X(),"ElTabPane"),f=_(),i=_((d=e.modelValue)!=null?d:"0"),y=async(a,v=!1)=>{var C,h,N;if(!(i.value===a||ie(a)))try{await((C=e.beforeLeave)==null?void 0:C.call(e,a,i.value))!==!1&&(i.value=a,v&&(l(ge,a),l("tabChange",a)),(N=(h=f.value)==null?void 0:h.removeFocus)==null||N.call(h))}catch{}},u=(a,v,C)=>{a.props.disabled||(y(v,!0),l("tabClick",a,C))},o=(a,v)=>{a.props.disabled||ie(a.props.name)||(v.stopPropagation(),l("edit",a.props.name,"remove"),l("tabRemove",a.props.name))},k=()=>{l("edit",void 0,"add"),l("tabAdd")};return F(()=>e.modelValue,a=>y(a)),F(i,async()=>{var a;await oe(),(a=f.value)==null||a.scrollToActiveTab()}),ze(Y,{props:e,currentName:i,registerPane:B,unregisterPane:c}),R({currentName:i}),()=>{const a=p["add-icon"],v=e.editable||e.addable?n("span",{class:t.e("new-tab"),tabindex:"0",onClick:k,onKeydown:N=>{N.code===K.enter&&k()}},[a?se(p,"add-icon"):n(D,{class:t.is("icon-plus")},{default:()=>[n(Ae,null,null)]})]):null,C=n("div",{class:[t.e("header"),t.is(e.tabPosition)]},[v,n(it,{ref:f,currentName:i.value,editable:e.editable,type:e.type,panes:P.value,stretch:e.stretch,onTabClick:u,onTabRemove:o},null)]),h=n("div",{class:t.e("content")},[se(p,"default")]);return n("div",{class:[t.b(),t.m(e.tabPosition),{[t.m("card")]:e.type==="card",[t.m("border-card")]:e.type==="border-card"}]},[...e.tabPosition!=="bottom"?[C,h]:[h,C]])}}}),ft=q({label:{type:String,default:""},name:{type:[String,Number]},closable:Boolean,disabled:Boolean,lazy:Boolean}),vt=["id","aria-hidden","aria-labelledby"],Ce="ElTabPane",pt=M({name:Ce}),mt=M({...pt,props:ft,setup(e){const l=e,p=X(),R=Me(),d=H(Y);d||re(Ce,"usage: <el-tabs><el-tab-pane /></el-tabs/>");const t=W("tab-pane"),P=_(),B=j(()=>l.closable||d.props.closable),c=ue(()=>{var o;return d.currentName.value===((o=l.name)!=null?o:P.value)}),f=_(c.value),i=j(()=>{var o;return(o=l.name)!=null?o:P.value}),y=ue(()=>!l.lazy||f.value||c.value);F(c,o=>{o&&(f.value=!0)});const u=Ie({uid:p.uid,slots:R,props:l,paneName:i,active:c,index:P,isClosable:B});return he(()=>{d.registerPane(u)}),Ve(()=>{d.unregisterPane(u.uid)}),(o,k)=>S(y)?De((L(),U("div",{key:0,id:`pane-${S(i)}`,class:le(S(t).b()),role:"tabpanel","aria-hidden":!S(c),"aria-labelledby":`tab-${S(i)}`},[se(o.$slots,"default")],10,vt)),[[Ke,S(c)]]):Ue("v-if",!0)}});var Ne=_e(mt,[["__file","tab-pane.vue"]]);const _t=je(bt,{TabPane:Ne}),ht=qe(Ne),gt={class:"container"},yt={class:"product-items"},Ct={class:"love-btn"},Nt=["onClick"],Tt={__name:"CategoryPage",setup(e){const l=He(),{products:p,collect:R,isProductInCollection:d}=H("collect"),t=_([]),P=c=>{t.value=p.value.filter(f=>f.category===String(c.props.label))},B=_([{label:"全部",products:p},{label:"雜物",products:t},{label:"收藏",products:t},{label:"其他",products:t}]);return(c,f)=>{const i=Ge,y=Xe,u=Ye,o=Ze,k=Je,a=et,v=Qe,C=ht,h=_t;return L(),ee(tt,null,{content:x(()=>[V("div",gt,[n(h,{"tab-position":"right",class:"demo-tabs",onTabClick:P},{default:x(()=>[(L(!0),U(be,null,de(B.value,N=>(L(),ee(C,{key:N.label,label:N.label},{default:x(()=>[V("div",yt,[n(v,{class:"items"},{default:x(()=>[(L(!0),U(be,null,de(N.products,$=>(L(),ee(a,{shadow:"hover",key:$.id},{header:x(()=>[te(fe($.title),1)]),footer:x(()=>[n(k,{justify:"space-between"},{default:x(()=>[n(u,{class:"more",span:8},{default:x(()=>[n(y,{onClick:I=>S(l).push(`/main/productDetail/${$.id}`),underline:!1},{default:x(()=>[te("查看更多")]),_:2},1032,["onClick"])]),_:2},1024),n(u,{class:"price",span:8},{default:x(()=>[n(o,{size:"large",tag:"b"},{default:x(()=>[te("NT$ "+fe($.price),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),default:x(()=>[n(i,{style:{width:"200",height:"250px"},src:$.img,fit:"contain"},null,8,["src"]),V("div",Ct,[V("span",{onClick:I=>S(R)($.id),class:le(["material-symbols-outlined",{fillLove:S(d)($.id)}])}," favorite ",10,Nt)])]),_:2},1024))),128))]),_:2},1024)])]),_:2},1032,["label"]))),128))]),_:1})])]),_:1})}}},Bt=We(Tt,[["__scopeId","data-v-7964a97a"]]);export{Bt as default};
