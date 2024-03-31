import{O as K,P as h,p as j,s as q,h as S,b5 as Fe,b6 as ce,ay as Le,b7 as pe,aM as fe,aH as ve,i as ee,v as g,D as w,A as v,B as e,z as N,N as A,H as L,K as W,L as k,x as D,y as T,M as Re,ai as M,_ as z,S as ye,l as me,aS as ge,b8 as Q,b9 as C,ah as Te,r as he,I as _e,a1 as Ue,aN as be,F as H,a0 as B,ba as De,bb as Oe,bc as Be,bd as Ne,g as je,ad as Y,be as te,bf as Ae,bg as Me,w as se,af as Ie,Q as qe,aP as He,bh as ae,aD as oe}from"./index-bayp96YF.js";import{x,u as V,d as Ke}from"./plugin-vueexport-helper-G55EKMhO.js";import{f as ze,i as We}from"./el-form-item-BoQB_ZmM.js";var Ve=1,Xe=4;function ne(a){return ze(a,Ve|Xe)}const Ge=K({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:a=>a>=0&&a<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:h(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:h([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:h(Function),default:a=>`${a}%`}}),Je=["aria-valuenow"],Qe={viewBox:"0 0 100 100"},Ye=["d","stroke","stroke-linecap","stroke-width"],Ze=["d","stroke","opacity","stroke-linecap","stroke-width"],xe={key:0},et=j({name:"ElProgress"}),tt=j({...et,props:Ge,setup(a){const t=a,s={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},i=q("progress"),p=S(()=>({width:`${t.percentage}%`,animationDuration:`${t.duration}s`,backgroundColor:P(t.percentage)})),d=S(()=>(t.strokeWidth/t.width*100).toFixed(1)),y=S(()=>["circle","dashboard"].includes(t.type)?Number.parseInt(`${50-Number.parseFloat(d.value)/2}`,10):0),E=S(()=>{const n=y.value,F=t.type==="dashboard";return`
          M 50 50
          m 0 ${F?"":"-"}${n}
          a ${n} ${n} 0 1 1 0 ${F?"-":""}${n*2}
          a ${n} ${n} 0 1 1 0 ${F?"":"-"}${n*2}
          `}),b=S(()=>2*Math.PI*y.value),$=S(()=>t.type==="dashboard"?.75:1),R=S(()=>`${-1*b.value*(1-$.value)/2}px`),m=S(()=>({strokeDasharray:`${b.value*$.value}px, ${b.value}px`,strokeDashoffset:R.value})),l=S(()=>({strokeDasharray:`${b.value*$.value*(t.percentage/100)}px, ${b.value}px`,strokeDashoffset:R.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),o=S(()=>{let n;return t.color?n=P(t.percentage):n=s[t.status]||s.default,n}),c=S(()=>t.status==="warning"?Fe:t.type==="line"?t.status==="success"?ce:Le:t.status==="success"?pe:fe),r=S(()=>t.type==="line"?12+t.strokeWidth*.4:t.width*.111111+2),f=S(()=>t.format(t.percentage));function u(n){const F=100/n.length;return n.map((_,U)=>ee(_)?{color:_,percentage:(U+1)*F}:_).sort((_,U)=>_.percentage-U.percentage)}const P=n=>{var F;const{color:O}=t;if(ve(O))return O(n);if(ee(O))return O;{const _=u(O);for(const U of _)if(U.percentage>n)return U.color;return(F=_[_.length-1])==null?void 0:F.color}};return(n,F)=>(g(),w("div",{class:v([e(i).b(),e(i).m(n.type),e(i).is(n.status),{[e(i).m("without-text")]:!n.showText,[e(i).m("text-inside")]:n.textInside}]),role:"progressbar","aria-valuenow":n.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[n.type==="line"?(g(),w("div",{key:0,class:v(e(i).b("bar"))},[N("div",{class:v(e(i).be("bar","outer")),style:A({height:`${n.strokeWidth}px`})},[N("div",{class:v([e(i).be("bar","inner"),{[e(i).bem("bar","inner","indeterminate")]:n.indeterminate},{[e(i).bem("bar","inner","striped")]:n.striped},{[e(i).bem("bar","inner","striped-flow")]:n.stripedFlow}]),style:A(e(p))},[(n.showText||n.$slots.default)&&n.textInside?(g(),w("div",{key:0,class:v(e(i).be("bar","innerText"))},[L(n.$slots,"default",{percentage:n.percentage},()=>[N("span",null,W(e(f)),1)])],2)):k("v-if",!0)],6)],6)],2)):(g(),w("div",{key:1,class:v(e(i).b("circle")),style:A({height:`${n.width}px`,width:`${n.width}px`})},[(g(),w("svg",Qe,[N("path",{class:v(e(i).be("circle","track")),d:e(E),stroke:`var(${e(i).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":n.strokeLinecap,"stroke-width":e(d),fill:"none",style:A(e(m))},null,14,Ye),N("path",{class:v(e(i).be("circle","path")),d:e(E),stroke:e(o),fill:"none",opacity:n.percentage?1:0,"stroke-linecap":n.strokeLinecap,"stroke-width":e(d),style:A(e(l))},null,14,Ze)]))],6)),(n.showText||n.$slots.default)&&!n.textInside?(g(),w("div",{key:2,class:v(e(i).e("text")),style:A({fontSize:`${e(r)}px`})},[L(n.$slots,"default",{percentage:n.percentage},()=>[n.status?(g(),D(e(M),{key:1},{default:T(()=>[(g(),D(Re(e(c))))]),_:1})):(g(),w("span",xe,W(e(f)),1))])],6)):k("v-if",!0)],10,Je))}});var st=z(tt,[["__file","progress.vue"]]);const at=ye(st),ke=Symbol("uploadContextKey"),ot="ElUpload";class nt extends Error{constructor(t,s,i,p){super(t),this.name="UploadAjaxError",this.status=s,this.method=i,this.url=p}}function re(a,t,s){let i;return s.response?i=`${s.response.error||s.response}`:s.responseText?i=`${s.responseText}`:i=`fail to ${t.method} ${a} ${s.status}`,new nt(i,s.status,t.method,a)}function rt(a){const t=a.responseText||a.response;if(!t)return t;try{return JSON.parse(t)}catch{return t}}const lt=a=>{typeof XMLHttpRequest>"u"&&x(ot,"XMLHttpRequest is undefined");const t=new XMLHttpRequest,s=a.action;t.upload&&t.upload.addEventListener("progress",d=>{const y=d;y.percent=d.total>0?d.loaded/d.total*100:0,a.onProgress(y)});const i=new FormData;if(a.data)for(const[d,y]of Object.entries(a.data))me(y)&&y.length?i.append(d,...y):i.append(d,y);i.append(a.filename,a.file,a.file.name),t.addEventListener("error",()=>{a.onError(re(s,a,t))}),t.addEventListener("load",()=>{if(t.status<200||t.status>=300)return a.onError(re(s,a,t));a.onSuccess(rt(t))}),t.open(a.method,s,!0),a.withCredentials&&"withCredentials"in t&&(t.withCredentials=!0);const p=a.headers||{};if(p instanceof Headers)p.forEach((d,y)=>t.setRequestHeader(y,d));else for(const[d,y]of Object.entries(p))ge(y)||t.setRequestHeader(d,String(y));return t.send(i),t},$e=["text","picture","picture-card"];let it=1;const Z=()=>Date.now()+it++,we=K({action:{type:String,default:"#"},headers:{type:h(Object)},method:{type:String,default:"post"},data:{type:h([Object,Function,Promise]),default:()=>Q({})},multiple:{type:Boolean,default:!1},name:{type:String,default:"file"},drag:{type:Boolean,default:!1},withCredentials:Boolean,showFileList:{type:Boolean,default:!0},accept:{type:String,default:""},fileList:{type:h(Array),default:()=>Q([])},autoUpload:{type:Boolean,default:!0},listType:{type:String,values:$e,default:"text"},httpRequest:{type:h(Function),default:lt},disabled:Boolean,limit:Number}),ut=K({...we,beforeUpload:{type:h(Function),default:C},beforeRemove:{type:h(Function)},onRemove:{type:h(Function),default:C},onChange:{type:h(Function),default:C},onPreview:{type:h(Function),default:C},onSuccess:{type:h(Function),default:C},onProgress:{type:h(Function),default:C},onError:{type:h(Function),default:C},onExceed:{type:h(Function),default:C},crossorigin:{type:h(String)}}),dt=K({files:{type:h(Array),default:()=>Q([])},disabled:{type:Boolean,default:!1},handlePreview:{type:h(Function),default:C},listType:{type:String,values:$e,default:"text"},crossorigin:{type:h(String)}}),ct={remove:a=>!!a},pt=["onKeydown"],ft=["src","crossorigin"],vt=["onClick"],yt=["title"],mt=["onClick"],gt=["onClick"],ht=j({name:"ElUploadList"}),bt=j({...ht,props:dt,emits:ct,setup(a,{emit:t}){const s=a,{t:i}=Te(),p=q("upload"),d=q("icon"),y=q("list"),E=V(),b=he(!1),$=S(()=>[p.b("list"),p.bm("list",s.listType),p.is("disabled",s.disabled)]),R=m=>{t("remove",m)};return(m,l)=>(g(),D(Ne,{tag:"ul",class:v(e($)),name:e(y).b()},{default:T(()=>[(g(!0),w(_e,null,Ue(m.files,o=>(g(),w("li",{key:o.uid||o.name,class:v([e(p).be("list","item"),e(p).is(o.status),{focusing:b.value}]),tabindex:"0",onKeydown:be(c=>!e(E)&&R(o),["delete"]),onFocus:l[0]||(l[0]=c=>b.value=!0),onBlur:l[1]||(l[1]=c=>b.value=!1),onClick:l[2]||(l[2]=c=>b.value=!1)},[L(m.$slots,"default",{file:o},()=>[m.listType==="picture"||o.status!=="uploading"&&m.listType==="picture-card"?(g(),w("img",{key:0,class:v(e(p).be("list","item-thumbnail")),src:o.url,crossorigin:m.crossorigin,alt:""},null,10,ft)):k("v-if",!0),o.status==="uploading"||m.listType!=="picture-card"?(g(),w("div",{key:1,class:v(e(p).be("list","item-info"))},[N("a",{class:v(e(p).be("list","item-name")),onClick:H(c=>m.handlePreview(o),["prevent"])},[B(e(M),{class:v(e(d).m("document"))},{default:T(()=>[B(e(De))]),_:1},8,["class"]),N("span",{class:v(e(p).be("list","item-file-name")),title:o.name},W(o.name),11,yt)],10,vt),o.status==="uploading"?(g(),D(e(at),{key:0,type:m.listType==="picture-card"?"circle":"line","stroke-width":m.listType==="picture-card"?6:2,percentage:Number(o.percentage),style:A(m.listType==="picture-card"?"":"margin-top: 0.5rem")},null,8,["type","stroke-width","percentage","style"])):k("v-if",!0)],2)):k("v-if",!0),N("label",{class:v(e(p).be("list","item-status-label"))},[m.listType==="text"?(g(),D(e(M),{key:0,class:v([e(d).m("upload-success"),e(d).m("circle-check")])},{default:T(()=>[B(e(ce))]),_:1},8,["class"])):["picture-card","picture"].includes(m.listType)?(g(),D(e(M),{key:1,class:v([e(d).m("upload-success"),e(d).m("check")])},{default:T(()=>[B(e(pe))]),_:1},8,["class"])):k("v-if",!0)],2),e(E)?k("v-if",!0):(g(),D(e(M),{key:2,class:v(e(d).m("close")),onClick:c=>R(o)},{default:T(()=>[B(e(fe))]),_:2},1032,["class","onClick"])),k(" Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn"),k(" This is a bug which needs to be fixed "),k(" TODO: Fix the incorrect navigation interaction "),e(E)?k("v-if",!0):(g(),w("i",{key:3,class:v(e(d).m("close-tip"))},W(e(i)("el.upload.deleteTip")),3)),m.listType==="picture-card"?(g(),w("span",{key:4,class:v(e(p).be("list","item-actions"))},[N("span",{class:v(e(p).be("list","item-preview")),onClick:c=>m.handlePreview(o)},[B(e(M),{class:v(e(d).m("zoom-in"))},{default:T(()=>[B(e(Oe))]),_:1},8,["class"])],10,mt),e(E)?k("v-if",!0):(g(),w("span",{key:0,class:v(e(p).be("list","item-delete")),onClick:c=>R(o)},[B(e(M),{class:v(e(d).m("delete"))},{default:T(()=>[B(e(Be))]),_:1},8,["class"])],10,gt))],2)):k("v-if",!0)])],42,pt))),128)),L(m.$slots,"append")]),_:3},8,["class","name"]))}});var le=z(bt,[["__file","upload-list.vue"]]);const kt=K({disabled:{type:Boolean,default:!1}}),$t={file:a=>me(a)},wt=["onDrop","onDragover"],Ee="ElUploadDrag",Et=j({name:Ee}),St=j({...Et,props:kt,emits:$t,setup(a,{emit:t}){je(ke)||x(Ee,"usage: <el-upload><el-upload-dragger /></el-upload>");const i=q("upload"),p=he(!1),d=V(),y=b=>{if(d.value)return;p.value=!1,b.stopPropagation();const $=Array.from(b.dataTransfer.files);t("file",$)},E=()=>{d.value||(p.value=!0)};return(b,$)=>(g(),w("div",{class:v([e(i).b("dragger"),e(i).is("dragover",p.value)]),onDrop:H(y,["prevent"]),onDragover:H(E,["prevent"]),onDragleave:$[0]||($[0]=H(R=>p.value=!1,["prevent"]))},[L(b.$slots,"default")],42,wt))}});var Ct=z(St,[["__file","upload-dragger.vue"]]);const Pt=K({...we,beforeUpload:{type:h(Function),default:C},onRemove:{type:h(Function),default:C},onStart:{type:h(Function),default:C},onSuccess:{type:h(Function),default:C},onProgress:{type:h(Function),default:C},onError:{type:h(Function),default:C},onExceed:{type:h(Function),default:C}}),Ft=["onKeydown"],Lt=["name","multiple","accept"],Rt=j({name:"ElUploadContent",inheritAttrs:!1}),Tt=j({...Rt,props:Pt,setup(a,{expose:t}){const s=a,i=q("upload"),p=V(),d=Y({}),y=Y(),E=r=>{if(r.length===0)return;const{autoUpload:f,limit:u,fileList:P,multiple:n,onStart:F,onExceed:O}=s;if(u&&P.length+r.length>u){O(r,P);return}n||(r=r.slice(0,1));for(const _ of r){const U=_;U.uid=Z(),F(U),f&&b(U)}},b=async r=>{if(y.value.value="",!s.beforeUpload)return R(r);let f,u={};try{const n=s.data,F=s.beforeUpload(r);u=te(s.data)?ne(s.data):s.data,f=await F,te(s.data)&&We(n,u)&&(u=ne(s.data))}catch{f=!1}if(f===!1){s.onRemove(r);return}let P=r;f instanceof Blob&&(f instanceof File?P=f:P=new File([f],r.name,{type:r.type})),R(Object.assign(P,{uid:r.uid}),u)},$=async(r,f)=>ve(r)?r(f):r,R=async(r,f)=>{const{headers:u,data:P,method:n,withCredentials:F,name:O,action:_,onProgress:U,onSuccess:Se,onError:Ce,httpRequest:Pe}=s;try{f=await $(f??P,r)}catch{s.onRemove(r);return}const{uid:X}=r,G={headers:u||{},withCredentials:F,file:r,data:f,method:n,filename:O,action:_,onProgress:I=>{U(I,r)},onSuccess:I=>{Se(I,r),delete d.value[X]},onError:I=>{Ce(I,r),delete d.value[X]}},J=Pe(G);d.value[X]=J,J instanceof Promise&&J.then(G.onSuccess,G.onError)},m=r=>{const f=r.target.files;f&&E(Array.from(f))},l=()=>{p.value||(y.value.value="",y.value.click())},o=()=>{l()};return t({abort:r=>{Ae(d.value).filter(r?([u])=>String(r.uid)===u:()=>!0).forEach(([u,P])=>{P instanceof XMLHttpRequest&&P.abort(),delete d.value[u]})},upload:b}),(r,f)=>(g(),w("div",{class:v([e(i).b(),e(i).m(r.listType),e(i).is("drag",r.drag)]),tabindex:"0",onClick:l,onKeydown:be(H(o,["self"]),["enter","space"])},[r.drag?(g(),D(Ct,{key:0,disabled:e(p),onFile:E},{default:T(()=>[L(r.$slots,"default")]),_:3},8,["disabled"])):L(r.$slots,"default",{key:1}),N("input",{ref_key:"inputRef",ref:y,class:v(e(i).e("input")),name:r.name,multiple:r.multiple,accept:r.accept,type:"file",onChange:m,onClick:f[0]||(f[0]=H(()=>{},["stop"]))},null,42,Lt)],42,Ft))}});var ie=z(Tt,[["__file","upload-content.vue"]]);const ue="ElUpload",de=a=>{var t;(t=a.url)!=null&&t.startsWith("blob:")&&URL.revokeObjectURL(a.url)},_t=(a,t)=>{const s=Me(a,"fileList",void 0,{passive:!0}),i=l=>s.value.find(o=>o.uid===l.uid);function p(l){var o;(o=t.value)==null||o.abort(l)}function d(l=["ready","uploading","success","fail"]){s.value=s.value.filter(o=>!l.includes(o.status))}const y=(l,o)=>{const c=i(o);c&&(console.error(l),c.status="fail",s.value.splice(s.value.indexOf(c),1),a.onError(l,c,s.value),a.onChange(c,s.value))},E=(l,o)=>{const c=i(o);c&&(a.onProgress(l,c,s.value),c.status="uploading",c.percentage=Math.round(l.percent))},b=(l,o)=>{const c=i(o);c&&(c.status="success",c.response=l,a.onSuccess(l,c,s.value),a.onChange(c,s.value))},$=l=>{ge(l.uid)&&(l.uid=Z());const o={name:l.name,percentage:0,status:"ready",size:l.size,raw:l,uid:l.uid};if(a.listType==="picture-card"||a.listType==="picture")try{o.url=URL.createObjectURL(l)}catch(c){Ke(ue,c.message),a.onError(c,o,s.value)}s.value=[...s.value,o],a.onChange(o,s.value)},R=async l=>{const o=l instanceof File?i(l):l;o||x(ue,"file to be removed not found");const c=r=>{p(r);const f=s.value;f.splice(f.indexOf(r),1),a.onRemove(r,f),de(r)};a.beforeRemove?await a.beforeRemove(o,s.value)!==!1&&c(o):c(o)};function m(){s.value.filter(({status:l})=>l==="ready").forEach(({raw:l})=>{var o;return l&&((o=t.value)==null?void 0:o.upload(l))})}return se(()=>a.listType,l=>{l!=="picture-card"&&l!=="picture"||(s.value=s.value.map(o=>{const{raw:c,url:r}=o;if(!r&&c)try{o.url=URL.createObjectURL(c)}catch(f){a.onError(f,o,s.value)}return o}))}),se(s,l=>{for(const o of l)o.uid||(o.uid=Z()),o.status||(o.status="success")},{immediate:!0,deep:!0}),{uploadFiles:s,abort:p,clearFiles:d,handleError:y,handleProgress:E,handleStart:$,handleSuccess:b,handleRemove:R,submit:m,revokeFileObjectURL:de}},Ut=j({name:"ElUpload"}),Dt=j({...Ut,props:ut,setup(a,{expose:t}){const s=a,i=V(),p=Y(),{abort:d,submit:y,clearFiles:E,uploadFiles:b,handleStart:$,handleError:R,handleRemove:m,handleSuccess:l,handleProgress:o,revokeFileObjectURL:c}=_t(s,p),r=S(()=>s.listType==="picture-card"),f=S(()=>({...s,fileList:b.value,onStart:$,onProgress:o,onSuccess:l,onError:R,onRemove:m}));return Ie(()=>{b.value.forEach(c)}),qe(ke,{accept:He(s,"accept")}),t({abort:d,submit:y,clearFiles:E,handleStart:$,handleRemove:m}),(u,P)=>(g(),w("div",null,[e(r)&&u.showFileList?(g(),D(le,{key:0,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({append:T(()=>[B(ie,oe({ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?L(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?L(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)]),_:2},[u.$slots.file?{name:"default",fn:T(({file:n})=>[L(u.$slots,"file",{file:n})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0),!e(r)||e(r)&&!u.showFileList?(g(),D(ie,oe({key:1,ref_key:"uploadRef",ref:p},e(f)),{default:T(()=>[u.$slots.trigger?L(u.$slots,"trigger",{key:0}):k("v-if",!0),!u.$slots.trigger&&u.$slots.default?L(u.$slots,"default",{key:1}):k("v-if",!0)]),_:3},16)):k("v-if",!0),u.$slots.trigger?L(u.$slots,"default",{key:2}):k("v-if",!0),L(u.$slots,"tip"),!e(r)&&u.showFileList?(g(),D(le,{key:3,disabled:e(i),"list-type":u.listType,files:e(b),crossorigin:u.crossorigin,"handle-preview":u.onPreview,onRemove:e(m)},ae({_:2},[u.$slots.file?{name:"default",fn:T(({file:n})=>[L(u.$slots,"file",{file:n})])}:void 0]),1032,["disabled","list-type","files","crossorigin","handle-preview","onRemove"])):k("v-if",!0)]))}});var Ot=z(Dt,[["__file","upload.vue"]]);const At=ye(Ot);export{At as E};
