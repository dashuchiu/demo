import{O as ge,P as W,b8 as se,bS as z,aW as ne,bT as xe,u as we,e as ce,p as fe,g as Y,s as Ce,r as E,h as r,l as q,o as ie,bF as G,i as re,w as Ie,v,D as C,I as F,a1 as _e,A as I,B as l,a0 as d,y as x,C as ue,x as $,M as O,ak as de,L as J,ai as ve,N as B,K as w,_ as Ee,aE as j,aO as me,S as Se,a4 as Te,b1 as De,V as ke,Y as Ne,bU as Me,z as t,J as X,bV as $e,bW as Be,ab as Pe,ac as He}from"./index-bayp96YF.js";import{C as Ae,U as K,z as Le,A as ze,b as Oe,c as je,_ as Fe,l as Ke,j as Re,m as Ue,i as We}from"./plugin-vueexport-helper-G55EKMhO.js";import{L as qe,a as Ge}from"./LayoutContainer-iCao_4Uc.js";import{d as pe}from"./dayjs.min-a_h655SK.js";const Je=ge({modelValue:{type:Number,default:0},id:{type:String,default:void 0},lowThreshold:{type:Number,default:2},highThreshold:{type:Number,default:4},max:{type:Number,default:5},colors:{type:W([Array,Object]),default:()=>se(["","",""])},voidColor:{type:String,default:""},disabledVoidColor:{type:String,default:""},icons:{type:W([Array,Object]),default:()=>[z,z,z]},voidIcon:{type:ne,default:()=>xe},disabledVoidIcon:{type:ne,default:()=>z},disabled:Boolean,allowHalf:Boolean,showText:Boolean,showScore:Boolean,textColor:{type:String,default:""},texts:{type:W(Array),default:()=>se(["Extremely bad","Disappointed","Fair","Satisfied","Surprise"])},scoreTemplate:{type:String,default:"{value}"},size:we,label:{type:String,default:void 0},clearable:{type:Boolean,default:!1}}),Xe={[Ae]:i=>ce(i),[K]:i=>ce(i)},Ye=["id","aria-label","aria-labelledby","aria-valuenow","aria-valuetext","aria-valuemax"],Qe=["onMousemove","onClick"],Ze=fe({name:"ElRate"}),ea=fe({...Ze,props:Je,emits:Xe,setup(i,{expose:h,emit:b}){const e=i;function g(a,o){const s=f=>ie(f),V=Object.keys(o).map(f=>+f).filter(f=>{const L=o[f];return(s(L)?L.excluded:!1)?a<f:a<=f}).sort((f,L)=>f-L),M=o[V[0]];return s(M)&&M.value||M}const S=Y(Le,void 0),T=Y(ze,void 0),R=Oe(),c=Ce("rate"),{inputId:y,isLabeledByFormItem:P}=je(e,{formItemContext:T}),n=E(e.modelValue),k=E(-1),_=E(!0),u=r(()=>[c.b(),c.m(R.value)]),m=r(()=>e.disabled||(S==null?void 0:S.disabled)),N=r(()=>c.cssVarBlock({"void-color":e.voidColor,"disabled-void-color":e.disabledVoidColor,"fill-color":A.value})),H=r(()=>{let a="";return e.showScore?a=e.scoreTemplate.replace(/\{\s*value\s*\}/,m.value?`${e.modelValue}`:`${n.value}`):e.showText&&(a=e.texts[Math.ceil(n.value)-1]),a}),D=r(()=>e.modelValue*100-Math.floor(e.modelValue)*100),U=r(()=>q(e.colors)?{[e.lowThreshold]:e.colors[0],[e.highThreshold]:{value:e.colors[1],excluded:!0},[e.max]:e.colors[2]}:e.colors),A=r(()=>{const a=g(n.value,U.value);return ie(a)?"":a}),p=r(()=>{let a="";return m.value?a=`${D.value}%`:e.allowHalf&&(a="50%"),{color:A.value,width:a}}),Z=r(()=>{let a=q(e.icons)?[...e.icons]:{...e.icons};return a=G(a),q(a)?{[e.lowThreshold]:a[0],[e.highThreshold]:{value:a[1],excluded:!0},[e.max]:a[2]}:a}),he=r(()=>g(e.modelValue,Z.value)),ee=r(()=>m.value?re(e.disabledVoidIcon)?e.disabledVoidIcon:G(e.disabledVoidIcon):re(e.voidIcon)?e.voidIcon:G(e.voidIcon)),be=r(()=>g(n.value,Z.value));function ae(a){const o=m.value&&D.value>0&&a-1<e.modelValue&&a>e.modelValue,s=e.allowHalf&&_.value&&a-.5<=n.value&&a>n.value;return o||s}function le(a){e.clearable&&a===e.modelValue&&(a=0),b(K,a),e.modelValue!==a&&b("change",a)}function ye(a){m.value||(e.allowHalf&&_.value?le(n.value):le(a))}function Ve(a){if(m.value)return;let o=n.value;const s=a.code;return s===j.up||s===j.right?(e.allowHalf?o+=.5:o+=1,a.stopPropagation(),a.preventDefault()):(s===j.left||s===j.down)&&(e.allowHalf?o-=.5:o-=1,a.stopPropagation(),a.preventDefault()),o=o<0?0:o,o=o>e.max?e.max:o,b(K,o),b("change",o),o}function oe(a,o){if(!m.value){if(e.allowHalf&&o){let s=o.target;me(s,c.e("item"))&&(s=s.querySelector(`.${c.e("icon")}`)),(s.clientWidth===0||me(s,c.e("decimal")))&&(s=s.parentNode),_.value=o.offsetX*2<=s.clientWidth,n.value=_.value?a-.5:a}else n.value=a;k.value=a}}function te(){m.value||(e.allowHalf&&(_.value=e.modelValue!==Math.floor(e.modelValue)),n.value=e.modelValue,k.value=-1)}return Ie(()=>e.modelValue,a=>{n.value=a,_.value=e.modelValue!==Math.floor(e.modelValue)}),e.modelValue||b(K,0),h({setCurrentValue:oe,resetCurrentValue:te}),(a,o)=>{var s;return v(),C("div",{id:l(y),class:I([l(u),l(c).is("disabled",l(m))]),role:"slider","aria-label":l(P)?void 0:a.label||"rating","aria-labelledby":l(P)?(s=l(T))==null?void 0:s.labelId:void 0,"aria-valuenow":n.value,"aria-valuetext":l(H)||void 0,"aria-valuemin":"0","aria-valuemax":a.max,tabindex:"0",style:B(l(N)),onKeydown:Ve},[(v(!0),C(F,null,_e(a.max,(V,M)=>(v(),C("span",{key:M,class:I(l(c).e("item")),onMousemove:f=>oe(V,f),onMouseleave:te,onClick:f=>ye(V)},[d(l(ve),{class:I([l(c).e("icon"),{hover:k.value===V},l(c).is("active",V<=n.value)])},{default:x(()=>[ae(V)?J("v-if",!0):(v(),C(F,{key:0},[ue((v(),$(O(l(be)),null,null,512)),[[de,V<=n.value]]),ue((v(),$(O(l(ee)),null,null,512)),[[de,!(V<=n.value)]])],64)),ae(V)?(v(),C(F,{key:1},[(v(),$(O(l(ee)),{class:I([l(c).em("decimal","box")])},null,8,["class"])),d(l(ve),{style:B(l(p)),class:I([l(c).e("icon"),l(c).e("decimal")])},{default:x(()=>[(v(),$(O(l(he))))]),_:1},8,["style","class"])],64)):J("v-if",!0)]),_:2},1032,["class"])],42,Qe))),128)),a.showText||a.showScore?(v(),C("span",{key:0,class:I(l(c).e("text")),style:B({color:a.textColor})},w(l(H)),7)):J("v-if",!0)],46,Ye)}}});var aa=Ee(ea,[["__file","rate.vue"]]);const la=Se(aa),oa=async i=>{let h=document.createElement("input");h.value=i,document.body.appendChild(h),h.select(),document.execCommand("copy"),Te.success("複製成功"),document.body.removeChild(h)},ta=i=>{const b=De().find(T=>T.id===i);let e=null;const g=pe(b.date),S=pe();return e=g.diff(S,"day"),e},Q=i=>(Pe("data-v-5a84bcf9"),i=i(),He(),i),sa={class:"container"},na={class:"img-container"},ca={class:"love-btn"},ia={class:"product-title"},ra={class:"seller-card"},ua={class:"seller-id"},da={class:"price"},va={class:"time-items"},ma=Q(()=>t("span",{class:"material-symbols-outlined"}," timer ",-1)),pa={class:"buy-items"},fa=Q(()=>t("div",{class:"about-title"},"關於這個廢物",-1)),_a=["innerHTML"],ha=Q(()=>t("div",{class:"replay-title"},"留言",-1)),ba={class:"replay-box"},ya={class:"left"},Va={class:"comment-content"},ga={class:"box"},xa={__name:"ProductDetailPage",setup(i){const h=E(""),b=E(3.7),g=ke().params.id,S=E(window.location.href),{isProductInCollection:T,collect:R,products:c}=Y("collect"),y=r(()=>c.value.find(_=>_.id===g)),P=r(()=>ta(g)),n=E([]),k=async()=>{const _=await Me.getComment();n.value=_[g],n.value.forEach(u=>{u.avatar=u.author.slice(0,2)})};return Ne(()=>k()),(_,u)=>{const m=Ke,N=Ge,H=la,D=Re,U=Ue,A=We;return v(),$(qe,null,{content:x(()=>[t("div",sa,[d(U,null,{default:x(()=>[d(m,{span:15},{default:x(()=>[t("div",na,[t("div",{class:"img",style:B({"background-image":`url(${y.value.img})`})},null,4),t("div",ca,[t("span",{onClick:u[0]||(u[0]=p=>l(R)(y.value.id)),class:I(["material-symbols-outlined",{fillLove:l(T)(y.value.id)}])}," favorite ",2)])])]),_:1}),d(m,{class:"imgCard-right",span:9},{default:x(()=>[t("div",ia,w(y.value.title),1),t("div",ra,[t("span",null,[d(N,{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"})]),t("span",ua,w(y.value.author),1),d(H,{modelValue:b.value,"onUpdate:modelValue":u[1]||(u[1]=p=>b.value=p),disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value} 好評"},null,8,["modelValue"])]),t("div",null,[t("span",da,"NT$ "+w(y.value.price),1)]),t("div",va,[ma,t("span",null,"倒數"+w(P.value)+"天",1)]),t("div",pa,[d(D,{class:"buy",type:"primary",round:"",size:"large"},{default:x(()=>[X("我要廢物")]),_:1}),d(D,{onClick:u[2]||(u[2]=p=>l(oa)(`${S.value}`)),class:"icon-link",icon:l($e),size:"large",circle:""},null,8,["icon"])])]),_:1})]),_:1}),fa,t("div",{innerHTML:y.value.content,class:"about-content"},null,8,_a),ha,t("div",ba,[t("div",ya,[d(N,{icon:l(Be)},null,8,["icon"]),d(A,{modelValue:h.value,"onUpdate:modelValue":u[3]||(u[3]=p=>h.value=p),style:{width:"92%",height:"40px"},placeholder:"留個言吧"},null,8,["modelValue"])]),d(D,{class:"buy",type:"primary",size:"large"},{default:x(()=>[X("送出")]),_:1})]),(v(!0),C(F,null,_e(n.value,p=>(v(),C("div",{class:"comment-box",key:p.id},[d(N,null,{default:x(()=>[X(w(p.avatar),1)]),_:2},1024),t("div",null,w(p.author),1),t("div",Va,w(p.content),1)]))),128))]),t("div",ga,[t("div",{class:"box",style:B({"background-image":`url(${y.value.img})`})},null,4)])]),_:1})}}},Ta=Fe(xa,[["__scopeId","data-v-5a84bcf9"]]);export{Ta as default};
