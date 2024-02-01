"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[9488],{7216:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=t(5893),i=t(1151);const r={sidebar_position:8},o="Service Hosting Types",c={id:"service-hosting",title:"Service Hosting Types",description:"Service hosting type refers to the cloud provider account that must be used for deploying the managed service.",source:"@site/docs/service-hosting.mdx",sourceDirName:".",slug:"/service-hosting",permalink:"/xpanse/docs/service-hosting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Service Deployment",permalink:"/xpanse/docs/service-deployment"},next:{title:"Supported Clouds",permalink:"/xpanse/docs/supported-clouds"}},d={},l=[{value:"Available Service Hosting Types",id:"available-service-hosting-types",level:2},{value:"Self-Hosted",id:"self-hosted",level:3},{value:"Service-Vendor-Hosted",id:"service-vendor-hosted",level:3},{value:"Credentials",id:"credentials",level:2},{value:"Service With Multiple Service Hosting Types",id:"service-with-multiple-service-hosting-types",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"service-hosting-types",children:"Service Hosting Types"}),"\n",(0,n.jsx)(s.p,{children:"Service hosting type refers to the cloud provider account that must be used for deploying the managed service."}),"\n",(0,n.jsx)(s.p,{children:"Xpanse provides an option to offer services directly using the customer's account where the customer is billed directly\nor via the service vendor's account where the service vendor is billed by CSP and the service vendor later bills the end user."}),"\n",(0,n.jsx)(s.h2,{id:"available-service-hosting-types",children:"Available Service Hosting Types"}),"\n",(0,n.jsx)(s.h3,{id:"self-hosted",children:"Self-Hosted"}),"\n",(0,n.jsx)(s.p,{children:"In this case, the service is deployed on the end customer's cloud account. When a service is self-hosted, the end user\ncan view more information such as service deployment errors, etc.\nThe service vendor only can view only very basic details of the deployed service. The service vendor must contact the\nend user in case any information is required."}),"\n",(0,n.jsx)(s.h3,{id:"service-vendor-hosted",children:"Service-Vendor-Hosted"}),"\n",(0,n.jsx)(s.p,{children:"In this case, the service is deployed on the service vendor's cloud account. When a service is service-vendor hosted,\nthe end user has very restricted access to the deployed service details. The user will only receive the end point details to\naccess the service."}),"\n",(0,n.jsx)(s.p,{children:"The service vendor has more access to the service deployment details. But the service vendor cannot access the end point\ndetails."}),"\n",(0,n.jsx)(s.p,{children:"This mode makes more sense to host a SaaS type of managed service."}),"\n",(0,n.jsx)(s.h2,{id:"credentials",children:"Credentials"}),"\n",(0,n.jsxs)(s.p,{children:["Service vendors can use the ",(0,n.jsx)(s.code,{children:"ISV Cloud Credentials Management"})," services to manage the cloud accounts for service deployments."]}),"\n",(0,n.jsxs)(s.p,{children:["End users can use the ",(0,n.jsx)(s.code,{children:"User Cloud Credentials Management"})," services to manage the cloud accounts for service deployments."]}),"\n",(0,n.jsx)(s.h2,{id:"service-with-multiple-service-hosting-types",children:"Service With Multiple Service Hosting Types"}),"\n",(0,n.jsx)(s.p,{children:"The service vendor must specify the service hosting type in the service template.\nOne service template can only offer a service on only one hosting type.\nSo when the service vendor want to offer service on multiple hosting types, then one service template must be registered\nfor each hosting type."})]})}function h(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>o});var n=t(7294);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);