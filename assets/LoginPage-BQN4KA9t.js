import{d as se,b as Pe,a as Me,c as Te,u as ge,i as ue,e as re,f as J,g as T,h as w,j as Q,w as G,n as he,k as ke,r as N,l as M,m as X,o as Ge,t as ie,p as z,q as we,s as Z,v as _,x as U,y as p,z as L,A as E,B as o,C as R,D as $,E as O,F as A,G as K,H as ee,I as ye,J as B,K as S,L as Y,M as _e,_ as ae,N as Re,O as Oe,P as Ae,Q as Ke,R as We,S as qe,T as xe,U as je,V as He,W as Je,X as Qe,Y as Xe,Z as de,$ as Ye,a0 as g,a1 as Ze,a2 as ea,a3 as ce,a4 as D,a5 as aa,a6 as me,a7 as ve,a8 as la,a9 as pe,aa as j,ab as oa,ac as na}from"./index-CW4DnbBb.js";import{U as W,u as ta,a as le,d as Ce,b as fe,c as Ve,e as H,_ as sa,E as ua,f as ra,g as ia,h as da,i as ca,j as ma,k as va,l as pa,m as fa,n as ba,o as ga}from"./plugin-vueexport-helper-tpmt3a24.js";import{i as ha,E as ka,a as wa}from"./el-form-item-1sob2X2W.js";import{i as ya,f as _a,h as xa}from"./hasIn-5Kijc_8k.js";function Ca(e,l,u){switch(u.length){case 0:return e.call(l);case 1:return e.call(l,u[0]);case 2:return e.call(l,u[0],u[1]);case 3:return e.call(l,u[0],u[1],u[2])}return e.apply(l,u)}var Va=800,Sa=16,Ea=Date.now;function La(e){var l=0,u=0;return function(){var n=Ea(),c=Sa-(n-u);if(u=n,c>0){if(++l>=Va)return arguments[0]}else l=0;return e.apply(void 0,arguments)}}function Ia(e){return function(){return e}}var Ba=se?function(e,l){return se(e,"toString",{configurable:!0,enumerable:!1,value:Ia(l),writable:!0})}:ya;const $a=Ba;var Na=La($a),be=Math.max;function Da(e,l,u){return l=be(l===void 0?e.length-1:l,0),function(){for(var n=arguments,c=-1,i=be(n.length-l,0),m=Array(i);++c<i;)m[c]=n[l+c];c=-1;for(var a=Array(l+1);++c<l;)a[c]=n[c];return a[l]=u(m),Ca(e,this,a)}}function Ua(e){return Na(Da(e,void 0,_a),e+"")}function za(e,l,u){for(var n=-1,c=l.length,i={};++n<c;){var m=l[n],a=Pe(e,m);u(a,m)&&Me(i,Te(m,e),a)}return i}function Fa(e,l){return za(e,l,function(u,n){return xa(e,n)})}var Pa=Ua(function(e,l){return e==null?{}:Fa(e,l)});const Se={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object],default:void 0},value:{type:[String,Boolean,Number,Object],default:void 0},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueValue:{type:[String,Number],default:void 0},falseValue:{type:[String,Number],default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:ge,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},Ee={[W]:e=>ue(e)||re(e)||J(e),change:e=>ue(e)||re(e)||J(e)},F=Symbol("checkboxGroupContextKey"),Ma=({model:e,isChecked:l})=>{const u=T(F,void 0),n=w(()=>{var i,m;const a=(i=u==null?void 0:u.max)==null?void 0:i.value,h=(m=u==null?void 0:u.min)==null?void 0:m.value;return!Q(a)&&e.value.length>=a&&!l.value||!Q(h)&&e.value.length<=h&&l.value});return{isDisabled:ta(w(()=>(u==null?void 0:u.disabled.value)||n.value)),isLimitDisabled:n}},Ta=(e,{model:l,isLimitExceeded:u,hasOwnLabel:n,isDisabled:c,isLabeledByFormItem:i})=>{const m=T(F,void 0),{formItem:a}=le(),{emit:h}=ke();function v(s){var t,r;return[!0,e.trueValue,e.trueLabel].includes(s)?(t=e.trueValue||e.trueLabel)!=null?t:!0:(r=e.falseValue||e.falseLabel)!=null?r:!1}function d(s,t){h("change",v(s),t)}function k(s){if(u.value)return;const t=s.target;h("change",v(t.checked),s)}async function x(s){u.value||!n.value&&!c.value&&i.value&&(s.composedPath().some(f=>f.tagName==="LABEL")||(l.value=v([!1,e.falseValue,e.falseLabel].includes(l.value)),await he(),d(l.value,s)))}const I=w(()=>(m==null?void 0:m.validateEvent)||e.validateEvent);return G(()=>e.modelValue,()=>{I.value&&(a==null||a.validate("change").catch(s=>Ce()))}),{handleChange:k,onClickRoot:x}},Ga=e=>{const l=N(!1),{emit:u}=ke(),n=T(F,void 0),c=w(()=>Q(n)===!1),i=N(!1),m=w({get(){var a,h;return c.value?(a=n==null?void 0:n.modelValue)==null?void 0:a.value:(h=e.modelValue)!=null?h:l.value},set(a){var h,v;c.value&&M(a)?(i.value=((h=n==null?void 0:n.max)==null?void 0:h.value)!==void 0&&a.length>(n==null?void 0:n.max.value)&&a.length>m.value.length,i.value===!1&&((v=n==null?void 0:n.changeEvent)==null||v.call(n,a))):(u(W,a),l.value=a)}});return{model:m,isGroup:c,isLimitExceeded:i}},Ra=(e,l,{model:u})=>{const n=T(F,void 0),c=N(!1),i=w(()=>X(e.value)?e.label:e.value),m=w(()=>{const d=u.value;return J(d)?d:M(d)?Ge(i.value)?d.map(ie).some(k=>ha(k,i.value)):d.map(ie).includes(i.value):d!=null?d===e.trueValue||d===e.trueLabel:!!d}),a=fe(w(()=>{var d;return(d=n==null?void 0:n.size)==null?void 0:d.value}),{prop:!0}),h=fe(w(()=>{var d;return(d=n==null?void 0:n.size)==null?void 0:d.value})),v=w(()=>!!l.default||!X(i.value));return{checkboxButtonSize:a,isChecked:m,isFocused:c,checkboxSize:h,hasOwnLabel:v,actualValue:i}},Le=(e,l)=>{const{formItem:u}=le(),{model:n,isGroup:c,isLimitExceeded:i}=Ga(e),{isFocused:m,isChecked:a,checkboxButtonSize:h,checkboxSize:v,hasOwnLabel:d,actualValue:k}=Ra(e,l,{model:n}),{isDisabled:x}=Ma({model:n,isChecked:a}),{inputId:I,isLabeledByFormItem:s}=Ve(e,{formItemContext:u,disableIdGeneration:d,disableIdManagement:c}),{handleChange:t,onClickRoot:r}=Ta(e,{model:n,isLimitExceeded:i,hasOwnLabel:d,isDisabled:x,isLabeledByFormItem:s});return(()=>{function b(){M(n.value)&&!n.value.includes(k.value)?n.value.push(k.value):n.value=e.trueValue||e.trueLabel||!0}e.checked&&b()})(),H({from:"label act as value",replacement:"value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},w(()=>c.value&&X(e.value))),H({from:"true-label",replacement:"true-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},w(()=>!!e.trueLabel)),H({from:"false-label",replacement:"false-value",version:"3.0.0",scope:"el-checkbox",ref:"https://element-plus.org/en-US/component/checkbox.html"},w(()=>!!e.falseLabel)),{inputId:I,isLabeledByFormItem:s,isChecked:a,isDisabled:x,isFocused:m,checkboxButtonSize:h,checkboxSize:v,hasOwnLabel:d,model:n,actualValue:k,handleChange:t,onClickRoot:r}},Oa=["id","indeterminate","name","tabindex","disabled","true-value","false-value"],Aa=["id","indeterminate","disabled","value","name","tabindex"],Ka=z({name:"ElCheckbox"}),Wa=z({...Ka,props:Se,emits:Ee,setup(e){const l=e,u=we(),{inputId:n,isLabeledByFormItem:c,isChecked:i,isDisabled:m,isFocused:a,checkboxSize:h,hasOwnLabel:v,model:d,actualValue:k,handleChange:x,onClickRoot:I}=Le(l,u),s=Z("checkbox"),t=w(()=>[s.b(),s.m(h.value),s.is("disabled",m.value),s.is("bordered",l.border),s.is("checked",i.value)]),r=w(()=>[s.e("input"),s.is("disabled",m.value),s.is("checked",i.value),s.is("indeterminate",l.indeterminate),s.is("focus",a.value)]);return(f,b)=>(_(),U(_e(!o(v)&&o(c)?"span":"label"),{class:E(o(t)),"aria-controls":f.indeterminate?f.controls:null,onClick:o(I)},{default:p(()=>[L("span",{class:E(o(r))},[f.trueValue||f.falseValue||f.trueLabel||f.falseLabel?R((_(),$("input",{key:0,id:o(n),"onUpdate:modelValue":b[0]||(b[0]=C=>O(d)?d.value=C:null),class:E(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,name:f.name,tabindex:f.tabindex,disabled:o(m),"true-value":f.trueValue||f.trueLabel,"false-value":f.falseValue||f.falseLabel,onChange:b[1]||(b[1]=(...C)=>o(x)&&o(x)(...C)),onFocus:b[2]||(b[2]=C=>a.value=!0),onBlur:b[3]||(b[3]=C=>a.value=!1),onClick:b[4]||(b[4]=A(()=>{},["stop"]))},null,42,Oa)),[[K,o(d)]]):R((_(),$("input",{key:1,id:o(n),"onUpdate:modelValue":b[5]||(b[5]=C=>O(d)?d.value=C:null),class:E(o(s).e("original")),type:"checkbox",indeterminate:f.indeterminate,disabled:o(m),value:o(k),name:f.name,tabindex:f.tabindex,onChange:b[6]||(b[6]=(...C)=>o(x)&&o(x)(...C)),onFocus:b[7]||(b[7]=C=>a.value=!0),onBlur:b[8]||(b[8]=C=>a.value=!1),onClick:b[9]||(b[9]=A(()=>{},["stop"]))},null,42,Aa)),[[K,o(d)]]),L("span",{class:E(o(s).e("inner"))},null,2)],2),o(v)?(_(),$("span",{key:0,class:E(o(s).e("label"))},[ee(f.$slots,"default"),f.$slots.default?Y("v-if",!0):(_(),$(ye,{key:0},[B(S(f.label),1)],64))],2)):Y("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var qa=ae(Wa,[["__file","checkbox.vue"]]);const ja=["name","tabindex","disabled","true-value","false-value"],Ha=["name","tabindex","disabled","value"],Ja=z({name:"ElCheckboxButton"}),Qa=z({...Ja,props:Se,emits:Ee,setup(e){const l=e,u=we(),{isFocused:n,isChecked:c,isDisabled:i,checkboxButtonSize:m,model:a,actualValue:h,handleChange:v}=Le(l,u),d=T(F,void 0),k=Z("checkbox"),x=w(()=>{var s,t,r,f;const b=(t=(s=d==null?void 0:d.fill)==null?void 0:s.value)!=null?t:"";return{backgroundColor:b,borderColor:b,color:(f=(r=d==null?void 0:d.textColor)==null?void 0:r.value)!=null?f:"",boxShadow:b?`-1px 0 0 0 ${b}`:void 0}}),I=w(()=>[k.b("button"),k.bm("button",m.value),k.is("disabled",i.value),k.is("checked",c.value),k.is("focus",n.value)]);return(s,t)=>(_(),$("label",{class:E(o(I))},[s.trueValue||s.falseValue||s.trueLabel||s.falseLabel?R((_(),$("input",{key:0,"onUpdate:modelValue":t[0]||(t[0]=r=>O(a)?a.value=r:null),class:E(o(k).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(i),"true-value":s.trueValue||s.trueLabel,"false-value":s.falseValue||s.falseLabel,onChange:t[1]||(t[1]=(...r)=>o(v)&&o(v)(...r)),onFocus:t[2]||(t[2]=r=>n.value=!0),onBlur:t[3]||(t[3]=r=>n.value=!1),onClick:t[4]||(t[4]=A(()=>{},["stop"]))},null,42,ja)),[[K,o(a)]]):R((_(),$("input",{key:1,"onUpdate:modelValue":t[5]||(t[5]=r=>O(a)?a.value=r:null),class:E(o(k).be("button","original")),type:"checkbox",name:s.name,tabindex:s.tabindex,disabled:o(i),value:o(h),onChange:t[6]||(t[6]=(...r)=>o(v)&&o(v)(...r)),onFocus:t[7]||(t[7]=r=>n.value=!0),onBlur:t[8]||(t[8]=r=>n.value=!1),onClick:t[9]||(t[9]=A(()=>{},["stop"]))},null,42,Ha)),[[K,o(a)]]),s.$slots.default||s.label?(_(),$("span",{key:2,class:E(o(k).be("button","inner")),style:Re(o(c)?o(x):void 0)},[ee(s.$slots,"default",{},()=>[B(S(s.label),1)])],6)):Y("v-if",!0)],2))}});var Ie=ae(Qa,[["__file","checkbox-button.vue"]]);const Xa=Oe({modelValue:{type:Ae(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:ge,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),Ya={[W]:e=>M(e),change:e=>M(e)},Za=z({name:"ElCheckboxGroup"}),el=z({...Za,props:Xa,emits:Ya,setup(e,{emit:l}){const u=e,n=Z("checkbox"),{formItem:c}=le(),{inputId:i,isLabeledByFormItem:m}=Ve(u,{formItemContext:c}),a=async v=>{l(W,v),await he(),l("change",v)},h=w({get(){return u.modelValue},set(v){a(v)}});return Ke(F,{...Pa(We(u),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:h,changeEvent:a}),G(()=>u.modelValue,()=>{u.validateEvent&&(c==null||c.validate("change").catch(v=>Ce()))}),(v,d)=>{var k;return _(),U(_e(v.tag),{id:o(i),class:E(o(n).b("group")),role:"group","aria-label":o(m)?void 0:v.label||"checkbox-group","aria-labelledby":o(m)?(k=o(c))==null?void 0:k.labelId:void 0},{default:p(()=>[ee(v.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var Be=ae(el,[["__file","checkbox-group.vue"]]);const al=qe(qa,{CheckboxButton:Ie,CheckboxGroup:Be});xe(Ie);xe(Be);const ll="/demo/assets/garbage_login_logo-hzSWaoRO.png",oe=e=>(oa("data-v-454c9b21"),e=e(),na(),e),ol=oe(()=>L("a",{href:"/"},[L("img",{class:"logo",src:ll,alt:""})],-1)),nl=oe(()=>L("span",{class:"el-dropdown-link"},[L("span",{class:"material-symbols-outlined"}," language ")],-1)),tl=oe(()=>L("div",{class:"bg"},null,-1)),sl={class:"flex"},ul={__name:"LoginPage",setup(e){const{t:l,locale:u}=je();console.log(u);const n=He();console.log(n);const c=N([{name:"中文",lang:"zh-TW"},{name:"ENG",lang:"en-US"}]),i=N(!1),m=N(),a=N({email:"",password:"",repassword:""}),h=N(!1),v={email:[{required:!0,message:"請輸入email",trigger:"change"},{pattern:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,message:"請輸入有效的email",trigger:"change"}],password:[{required:!0,message:"請輸入密碼",trigger:"change"},{pattern:/^\S{6,15}$/,message:"密碼必須包含6-15位字元",trigger:"change"}],repassword:[{required:!0,message:"請再次輸入密碼",trigger:"change"},{validator:(t,r,f)=>{r!==a.value.password?f(new Error("兩次密碼輸入不一致")):f()},trigger:"change"}]},d=async()=>{try{await m.value.validate(),await ea(ce,a.value.email,a.value.password),D.success("註冊成功"),i.value=!1}catch(t){switch(console.log(t.code),t.code){case"auth/invalid-email":D.error("無效的email");break;case"auth/email-already-in-use":D.error("該email已被使用");break;case"auth/invalid-continue-uri":D.error("必須是有效的email地址");break;default:D.error("email或密碼不正確");break}}},k=Je(),x=Qe(),I=async()=>{try{await m.value.validate();const t=await aa(ce,a.value.email,a.value.password);k.setToken(t.user.accessToken),me("email"),me("password"),h.value&&(ve("email",a.value.email),ve("password",a.value.password)),D.success(l("messages.login_success")),console.log(t),x.push("/")}catch(t){console.log(t.code),D.error("無效的用戶名稱")}};return Xe(()=>{const t=de("email"),r=de("password");t&&r&&(a.value.email=t,a.value.password=r,h.value=!0)}),(async()=>{const t=await Ye.getData();console.log(t)})(),G(i,()=>{a.value={email:"",password:"",repassword:""}}),G(u,t=>{la(t)}),(t,r)=>{const f=ga,b=ra,C=ia,$e=da,V=ka,P=ca,ne=ma,q=va,te=wa,Ne=al,De=pa,Ue=fa,ze=ba,Fe=ua;return _(),U(Fe,null,{default:p(()=>[g($e,{class:"nav"},{default:p(()=>[ol,g(C,null,{dropdown:p(()=>[g(b,null,{default:p(()=>[(_(!0),$(ye,null,Ze(c.value,y=>(_(),U(f,{key:y,onClick:rl=>u.value=y.lang},{default:p(()=>[B(S(y.name),1)]),_:2},1032,["onClick"]))),128))]),_:1})]),default:p(()=>[nl]),_:1})]),_:1}),g(ze,null,{default:p(()=>[g(Ue,{class:"login-page",justify:"center"},{default:p(()=>[tl,g(De,{xs:8,sm:6,md:4,class:"form"},{default:p(()=>[i.value?(_(),U(te,{key:0,model:a.value,rules:v,ref_key:"form",ref:m,size:"large",autocomplete:"off"},{default:p(()=>[g(V,null,{default:p(()=>[L("h1",null,S(o(l)("common.signup")),1)]),_:1}),g(V,{prop:"email"},{default:p(()=>[g(P,{modelValue:a.value.email,"onUpdate:modelValue":r[0]||(r[0]=y=>a.value.email=y),"prefix-icon":o(pe),placeholder:o(l)("placeholder.email")},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),g(V,{prop:"password"},{default:p(()=>[g(P,{modelValue:a.value.password,"onUpdate:modelValue":r[1]||(r[1]=y=>a.value.password=y),"prefix-icon":o(j),type:"password",placeholder:o(l)("placeholder.password")},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),g(V,{prop:"repassword"},{default:p(()=>[g(P,{modelValue:a.value.repassword,"onUpdate:modelValue":r[2]||(r[2]=y=>a.value.repassword=y),"prefix-icon":o(j),type:"password",placeholder:o(l)("placeholder.repassword")},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),g(V,null,{default:p(()=>[g(ne,{onClick:d,class:"button",type:"primary","auto-insert-space":""},{default:p(()=>[B(S(o(l)("common.signup")),1)]),_:1})]),_:1}),g(V,{class:"flex"},{default:p(()=>[g(q,{type:"info",underline:!1,onClick:r[3]||(r[3]=y=>i.value=!1)},{default:p(()=>[B(" ← "+S(o(l)("common.return")),1)]),_:1})]),_:1})]),_:1},8,["model"])):(_(),U(te,{key:1,model:a.value,rules:v,ref_key:"form",ref:m,size:"large",autocomplete:"off"},{default:p(()=>[g(V,null,{default:p(()=>[L("h1",null,S(o(l)("common.login")),1)]),_:1}),g(V,{prop:"email"},{default:p(()=>[g(P,{modelValue:a.value.email,"onUpdate:modelValue":r[4]||(r[4]=y=>a.value.email=y),"prefix-icon":o(pe),placeholder:o(l)("placeholder.email")},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),g(V,{prop:"password"},{default:p(()=>[g(P,{modelValue:a.value.password,"onUpdate:modelValue":r[5]||(r[5]=y=>a.value.password=y),name:"password","prefix-icon":o(j),type:"password",placeholder:o(l)("placeholder.password")},null,8,["modelValue","prefix-icon","placeholder"])]),_:1}),g(V,{class:"flex"},{default:p(()=>[L("div",sl,[g(Ne,{modelValue:h.value,"onUpdate:modelValue":r[6]||(r[6]=y=>h.value=y)},{default:p(()=>[B(S(o(l)("common.remember")),1)]),_:1},8,["modelValue"]),g(q,{type:"primary",underline:!1},{default:p(()=>[B(S(o(l)("common.forget")),1)]),_:1})])]),_:1}),g(V,null,{default:p(()=>[g(ne,{onClick:I,class:"button",type:"primary","auto-insert-space":""},{default:p(()=>[B(S(o(l)("common.login")),1)]),_:1})]),_:1}),g(V,{class:"flex"},{default:p(()=>[g(q,{type:"info",underline:!1,onClick:r[7]||(r[7]=y=>i.value=!0)},{default:p(()=>[B(S(o(l)("common.signup"))+" → ",1)]),_:1})]),_:1})]),_:1},8,["model"]))]),_:1})]),_:1})]),_:1})]),_:1})}}},vl=sa(ul,[["__scopeId","data-v-454c9b21"]]);export{vl as default};
