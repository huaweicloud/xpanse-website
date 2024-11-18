"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[3854],{4022:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>I,frontMatter:()=>s,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"service-portability","title":"Service Portability","description":"Service portability is the process of migrating a running service and its data from one cloud service provider to another","source":"@site/docs/service-portability.mdx","sourceDirName":".","slug":"/service-portability","permalink":"/xpanse/docs/service-portability","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Service Hosting Types","permalink":"/xpanse/docs/service-hosting"},"next":{"title":"Service Template Reviews","permalink":"/xpanse/docs/service-template-reviews"}}');var i=r(4848),o=r(8453);const s={sidebar_position:8},a="Service Portability",c={},d=[];function l(e){const t={h1:"h1",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"service-portability",children:"Service Portability"})}),"\n",(0,i.jsx)(t.p,{children:"Service portability is the process of migrating a running service and its data from one cloud service provider to another\nservice provider."}),"\n",(0,i.jsx)(t.p,{children:"xpanse implements the service portability using a workflow engine, which supports two different use cases"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Port service between two different regions with the same cloud service provider."}),"\n",(0,i.jsx)(t.li,{children:"Port service between two different cloud service providers."}),"\n"]}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\n    customer --\x3e> MigrateAPI: Migrate Service Request\n    MigrateAPI --\x3e> SERVICE_ORDER: Create MIGRATE order.\n    MigrateAPI --\x3e> ACTIVITI: create workflow instance and store ORDER_ID in process variable.\n    MigrateAPI --\x3e> SERVICE_ORDER: Update WORKFLOW_ID to MIGRATE order.\n    MigrateAPI --\x3e> customer: Return OrderID and OldServiceId\n    critical start data export\n        ACTIVITI --\x3e> ACTIVITI: Skip data transfer.\n    end\n    critical start new deployment\n        ACTIVITI --\x3e> DeployServiceApi: start deployment. Set hidden field workflow ID\n        DeployServiceApi --\x3e> DEPLOY_SERVICE: create new SERIVCE_ID\n        DeployServiceApi --\x3e> SERVICE_ORDER: Create DEPLOY order and store WORKFLOW_ID.\n        DeployServiceApi --\x3e> DEPLOYER: Use ORDER_ID in request to deployer.\n        DeployServiceApi --\x3e> ACTIVITI: Return new ORDER_ID and SERVICE_ID\n        ACTIVITI --\x3e> SERVICE_ORDER: update NEW_SERVICE_ID to MIGRATE order.\n    end\n    critical process deployment result\n        DEPLOYER --\x3e> CallbackHook: Update result for ORDER_ID\n        Callbackhook --\x3e> SERVICE_ORDER: Get SERVICE_ID from table and update result.\n        critical SERVICE_ORDER contains WORKFLOW_ID\n            Callbackhook --\x3e> ACTIVITI: update workflow with deployment status.\n            ACTIVITI --\x3e SERVICE_ORDER: If it's a final state, then update MIGRATE order with details.\n        end\n    end\n    critical start data import\n        ACTIVITI --\x3e> ACTIVITI: Skip data transfer.\n    end\n    critical destroy old deployment\n        ACTIVITI --\x3e> DestroyServiceApi: start destroy. Set hidden field workflow ID\n        DestroyServiceApi --\x3e> SERVICE_ORDER: Create DESTROY order and store WORKFLOW_ID.\n        DestroyServiceApi --\x3e> DEPLOYER: Use ORDER_ID in request to deployer.\n        DestroyServiceApi --\x3e> ACTIVITI: Return new ORDER_ID and SERVICE_ID\n    end\n    critical process deployment result\n        DEPLOYER --\x3e> CallbackHook: Update result for ORDER_ID\n        Callbackhook --\x3e> SERVICE_ORDER: Get SERVICE_ID from table and update result.\n        critical SERVICE_ORDER contains WORKFLOW_ID\n            Callbackhook --\x3e> ACTIVITI: update workflow with deployment status.\n            ACTIVITI --\x3e SERVICE_ORDER: If it's error, then update MIGRATE order with new state and error details.\n        end\n    end\n    critical update final state of MIGRATE order\n        ACTIVITI --\x3e SERVICE_ORDER: If last step is successful, update MIGRATE order state.\n    end"})]})}function I(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>a});var n=r(6540);const i={},o=n.createContext(i);function s(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);