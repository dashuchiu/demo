import{g as y,X as B,v as l,x as i,y as e,z as a,a0 as t,J as n,D as b,a1 as w,B as s,I as z,bz as L,K as _,A as T}from"./index-bayp96YF.js";import{_ as I,j as N,E as $,k as j,l as D,m as P}from"./plugin-vueexport-helper-G55EKMhO.js";import{a as R,E as V,b as A}from"./el-image-viewer-Cn9Y4wS6.js";import{L as F,E as J}from"./LayoutContainer-iCao_4Uc.js";import"./debounce-CD8YdIEW.js";const K={class:"btn-container"},M={class:"product-items"},S={class:"love-btn"},X=["onClick"],q={__name:"CollectionPage",setup(G){const{collection:c,isProductInCollection:d,cancelCollect:u}=y("collect"),p=B(),m=async()=>{await J.confirm("你確定要全部移除嗎？","稍等一下",{type:"warning",confirmButtonText:"確認",cancelButtonText:"取消"}),L([]),c.value=[]};return(H,O)=>{const f=N,C=R,g=j,r=D,h=V,v=P,E=A,k=$;return l(),i(F,null,{content:e(()=>[a("div",K,[t(f,{onClick:m,round:"",size:"large"},{default:e(()=>[n("全部移除")]),_:1})]),a("div",M,[t(k,{class:"items"},{default:e(()=>[(l(!0),b(z,null,w(s(c),o=>(l(),i(E,{shadow:"hover",key:o.id},{header:e(()=>[n(_(o.title),1)]),footer:e(()=>[t(v,{justify:"space-between"},{default:e(()=>[t(r,{class:"more",span:8},{default:e(()=>[t(g,{onClick:x=>s(p).push(`/main/productDetail/${o.id}`),underline:!1},{default:e(()=>[n("查看更多")]),_:2},1032,["onClick"])]),_:2},1024),t(r,{class:"price",span:8},{default:e(()=>[t(h,{size:"large",tag:"b"},{default:e(()=>[n("NT$ "+_(o.price),1)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),default:e(()=>[t(C,{style:{width:"200",height:"250px"},src:o.img,fit:"contain"},null,8,["src"]),a("div",S,[a("span",{onClick:x=>s(u)(o.id),class:T(["material-symbols-outlined",{fillLove:s(d)(o.id)}])}," favorite ",10,X)])]),_:2},1024))),128))]),_:1})])]),_:1})}}},ee=I(q,[["__scopeId","data-v-e536895a"]]);export{ee as default};
