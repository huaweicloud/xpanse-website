"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[5849],{7495:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"architecture","title":"Architecture","description":"xpanse provides a highly configurable and easily extendable architecture to ensure the framework can be","source":"@site/docs/architecture.mdx","sourceDirName":".","slug":"/architecture","permalink":"/xpanse/docs/architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"API","permalink":"/xpanse/docs/api"},"next":{"title":"Authentication and Authorization","permalink":"/xpanse/docs/authentication-authorization"}}');var r=t(4848),i=t(8453),a=t(2585);const c={sidebar_position:2},o="Architecture",l={},d=[{value:"Runtime",id:"runtime",level:2}];function h(e){const n={h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"architecture",children:"Architecture"})}),"\n",(0,r.jsxs)(n.p,{children:["xpanse provides a highly configurable and easily extendable architecture to ensure the framework can be\nused in different contexts and also be used in different possible ",(0,r.jsx)(a.A,{name:"modes",url:"./modes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"xpanse Architecture",src:t(6627).A+"",width:"1317",height:"1484"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"API"})," - REST APIs which exposes all functionalities of xpanse."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"UI"})," - An optional GUI for xpanse which is just wrapper for the API."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Orchestrator"})," - Main component which manages the full life cycle of service templates and the deployed service instances."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Deployer"})," - Manages\n",(0,r.jsx)(a.A,{name:"service deployment",url:"./service-deployment"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Plugin"})," - Implements integrations to cloud provider's management systems necessary to offer a native fully managed service."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Database"})," - Stores\n",(0,r.jsx)(a.A,{name:"service templates",url:"./configuration-language"}),", service instances,\n",(0,r.jsx)(a.A,{name:"service policies",url:"./policies"})," and service orders. See\n",(0,r.jsx)(a.A,{name:"databases",url:"./databases"})," page for more details."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Agent"})," - This runs on the component's compute resources. Agents poll the controller for any service configuration state\nchanges requested by the user and executes it."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"runtime",children:"Runtime"}),"\n",(0,r.jsx)(n.p,{children:"The runtime is the glue between all components.\nIt brings all necessary components such as the API layer, orchestrator, deployer and one or more plugins into a\ndeployable application."})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2585:(e,n,t)=>{t.d(n,{A:()=>r});t(6540);var s=t(4848);function r(e){let{name:n,url:t,isOpenInNewTab:r=!0}=e;return(0,s.jsx)("a",{href:t,className:"link-text",target:r?"_blank":"_self",children:n})}},6627:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/xpanse-high-level-architecture.excalidraw-afed24dbcdb2a588a405f4c4f8f05bed.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var s=t(6540);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);