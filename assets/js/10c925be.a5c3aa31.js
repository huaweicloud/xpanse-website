"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[4906],{1426:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var a=n(5893),i=n(1151),s=n(6367);const r={sidebar_position:7},l="Observability",o={id:"observability",title:"Observability",description:"xpanse stack is built with observability in mind. It provides traces, metrics and logging at different levels",source:"@site/docs/observability.mdx",sourceDirName:".",slug:"/observability",permalink:"/xpanse/docs/observability",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Developer Setup",permalink:"/xpanse/docs/developer-setup"},next:{title:"Package Structure",permalink:"/xpanse/docs/package-structure"}},c={},d=[{value:"OpenTelemetry",id:"opentelemetry",level:3},{value:"Telemetry Data Generated",id:"telemetry-data-generated",level:3},{value:"Logs",id:"logs",level:4},{value:"Metrics and Traces",id:"metrics-and-traces",level:4},{value:"Telemetry Data collector",id:"telemetry-data-collector",level:3},{value:"Components Generating Observability Data",id:"components-generating-observability-data",level:3},{value:"Sample Full Stack Observability",id:"sample-full-stack-observability",level:3}];function p(e){const t={code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"observability",children:"Observability"}),"\n",(0,a.jsx)(t.p,{children:"xpanse stack is built with observability in mind. It provides traces, metrics and logging at different levels\nwhich helps to monitor all systems involved in the xpanse stack."}),"\n",(0,a.jsx)(t.h3,{id:"opentelemetry",children:"OpenTelemetry"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyN7sCv7Y3XWDuSl3Pz0KSEBpO8mryvl_l5c7qbQv3cw&s",alt:"OpenTelemetry"})}),"\n",(0,a.jsxs)(t.p,{children:["As a default implementation, we use ",(0,a.jsx)(s.Z,{url:"https://opentelemetry.io/",name:"OpenTelemetry"})," to generate and collect telemetry data. The OpenTelemetry\nprovided SDKs and auto instrumentation features helps to generate all necessary data with no additional implementation. Using\nOpenTelemetry provides an advantage that, we generate data based on standards specified by OpenTelemetry and thereby gives\nus the flexibility to feed this data to any OpenTelemetry protocol supported backends."]}),"\n",(0,a.jsx)(t.h3,{id:"telemetry-data-generated",children:"Telemetry Data Generated"}),"\n",(0,a.jsx)(t.h4,{id:"logs",children:"Logs"}),"\n",(0,a.jsx)(t.p,{children:"All applications involved in the xpanse stack, generates logs with useful information to trace a request\nend-to-end.\nLogs have metadata which provides very high level of traceability."}),"\n",(0,a.jsx)(t.p,{children:"The OpenTelemetry auto instrumentation SDK is then used to export all generated logs from existing logging frameworks to\nOTEL collector."}),"\n",(0,a.jsx)(t.h4,{id:"metrics-and-traces",children:"Metrics and Traces"}),"\n",(0,a.jsx)(t.p,{children:"All applications are provided with an option to enable OpenTelemetry's auto instrumentation features which then\ngenerates metrics and traces."}),"\n",(0,a.jsx)(t.h3,{id:"telemetry-data-collector",children:"Telemetry Data collector"}),"\n",(0,a.jsx)(t.p,{children:"We can use any product which implements the OpenTelemetry specifications for collecting data. The collector's endpoint\nmust then be configured in the data producing systems for forwarding the generated Telemetry data to the collector."}),"\n",(0,a.jsx)(t.h3,{id:"components-generating-observability-data",children:"Components Generating Observability Data"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["xpanse - activated using spring profile ",(0,a.jsx)(t.code,{children:"opentelemetry"})]}),"\n",(0,a.jsxs)(t.li,{children:["terraform-boot - activated using spring profile ",(0,a.jsx)(t.code,{children:"opentelemetry"})]}),"\n",(0,a.jsx)(t.li,{children:"policy-man - activated by starting OpenTelemetry's instrumentation process together with policy-man"}),"\n",(0,a.jsx)(t.li,{children:"zitadel - enabled by default"}),"\n"]}),"\n",(0,a.jsx)(t.h3,{id:"sample-full-stack-observability",children:"Sample Full Stack Observability"}),"\n",(0,a.jsxs)(t.p,{children:["An example on how to enable auto instrumentation for all xpanse components and then export data to OTEL collector which\ncan\nbe later feed into Grafana monitoring stack can be\nfound ",(0,a.jsx)(s.Z,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-relops/blob/main/testbed/full-stack/docker-compose.yml"}),"."]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},6367:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(5893);function i(e){let{name:t,url:n,isOpenInNewTab:i=!0}=e;return(0,a.jsx)("a",{href:n,className:"link-text",target:i?"_blank":"_self",children:t})}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>r});var a=n(7294);const i={},s=a.createContext(i);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);