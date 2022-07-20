"use strict";(self.webpackChunknext_id_doc=self.webpackChunknext_id_doc||[]).push([[464],{49613:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,g=u["".concat(p,".").concat(f)]||u[f]||d[f]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},714:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(45443),i=(n(59496),n(49613));const r={title:"How does Next.ID work"},o="How does Next.ID work",l={unversionedId:"core-concepts/how-it-works",id:"core-concepts/how-it-works",title:"How does Next.ID work",description:"Next.ID has a simple workflow on the backend. In this page, we go through the core system design concept of Next.ID. This is also a guide to creating your first application with Next.ID.",source:"@site/docs/core-concepts/how-it-works.md",sourceDirName:"core-concepts",slug:"/core-concepts/how-it-works",permalink:"/core-concepts/how-it-works",draft:!1,editUrl:"https://github.com/nextdotid/docs/edit/main/docs/core-concepts/how-it-works.md",tags:[],version:"current",frontMatter:{title:"How does Next.ID work"},sidebar:"docs",previous:{title:"Liftoff, Hello Space!",permalink:"/getting-started/quick-start"},next:{title:"Architecture",permalink:"/core-concepts/architecture"}},p={},s=[{value:"Avatar in Next.ID",id:"avatar-in-nextid",level:2},{value:"ProofService",id:"proofservice",level:2},{value:"Platform Binding",id:"platform-binding",level:3},{value:"Ethereum Binding",id:"ethereum-binding",level:3},{value:"Revoke Binding",id:"revoke-binding",level:3},{value:"KVService",id:"kvservice",level:2},{value:"Write Data",id:"write-data",level:3}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-does-nextid-work"},"How does Next.ID work"),(0,i.kt)("p",null,"Next.ID has a simple workflow on the backend. In this page, we go through the core system design concept of Next.ID. This is also a guide to creating your first application with Next.ID. "),(0,i.kt)("h2",{id:"avatar-in-nextid"},"Avatar in Next.ID"),(0,i.kt)("p",null,"Avatars can perform actions via Next.ID (eg. sign a follow action) and on-chain & off-chain activities. Next.ID's relation aggregation can map all of these actions:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(71006).Z,width:"2422",height:"1715"})),(0,i.kt)("p",null,"How two users' Avatars interact:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(77192).Z,width:"2422",height:"1715"})),(0,i.kt)("h2",{id:"proofservice"},"ProofService"),(0,i.kt)("h3",{id:"platform-binding"},"Platform Binding"),(0,i.kt)("p",null,"In this scenario, User requests Platform Binding on Application, ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," will return ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," and post-content based on the Application\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,i.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload"),". After that, user publishes Proof Post on target platforms, the Proof Post link and ID with ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," will send to ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," per request and verify from Platforms\u2019 post content. "),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate the Proof Post existence and verify the Private Key, it will return the successful binding notification back to Application and User."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(81016).Z,width:"1186",height:"676"})),(0,i.kt)("h3",{id:"ethereum-binding"},"Ethereum Binding"),(0,i.kt)("p",null,"In this scenario, User requests Ethereum Binding on Application with identity ",(0,i.kt)("inlineCode",{parentName:"p"},"0xWALLET_ADDRESS"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload"),". "),(0,i.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on Avatar",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload"),". After that, application requests user\u2019s Wallet Private Key to generate a signature based on Wallet",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload"),"."),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate with ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar and Wallet Signature. After all it will return the successful binding notification back to Application and User."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(55056).Z,width:"1186",height:"676"})),(0,i.kt)("h3",{id:"revoke-binding"},"Revoke Binding"),(0,i.kt)("p",null,"In this scenario, User requests Revoke Binding on Application, ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService")," will return the Avatar",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s ",(0,i.kt)("inlineCode",{parentName:"p"},"POST /v1/proof/payload")," as Revoke action. "),(0,i.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"ProofService"),"validate with ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar and Wallet Signature for Revoke action. After all it will return the successful Revoke notification back to Application and User. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(83766).Z,width:"1186",height:"676"})),(0,i.kt)("h2",{id:"kvservice"},"KVService"),(0,i.kt)("h3",{id:"write-data"},"Write Data"),(0,i.kt)("p",null,"In this scenario, User requests the modification on Application, ",(0,i.kt)("inlineCode",{parentName:"p"},"KVService")," will return the ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," based on the Application\u2019s POST/v1/KV/payload. "),(0,i.kt)("p",null,"Then, application requests user\u2019s Avatar Private Key to generate a signature based on ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload"),". "),(0,i.kt)("p",null,"After ",(0,i.kt)("inlineCode",{parentName:"p"},"KVService"),"validate with ",(0,i.kt)("inlineCode",{parentName:"p"},"uuid")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"created_at")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"sign_payload")," , then verify the Avatar Signature for Write Data action. After all it will return the successful notification back to Application and User. "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(49317).Z,width:"1186",height:"676"})))}d.isMDXComponent=!0},71006:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/avatar-diagram-083b185c35a5e19009c122bd0f68c5af.png"},77192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/avatar-interaction-aba0ab05aa82eb90e00a55adf9abad8b.png"},55056:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ethereum-binding-6f923b29a476f38b32fa74caf033d85a.png"},81016:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/platform-binding-0331240b6a6400bc2a2f825f72083444.png"},83766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/revoke-binding-f1008cc1addf99d2a650c3d98901ab6a.png"},49317:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/write-data-a09bcda7990a86b7dd50bc1a0676161d.png"}}]);