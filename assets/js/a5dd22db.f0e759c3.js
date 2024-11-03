"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[1311],{9458:(e,r,t)=>{t.r(r),t.d(r,{DEPLOYER_INTERFACE:()=>h,DEPLOY_RESOURCE_HANDLER_INTERFACE:()=>d,DEPLOY_RESULT_MODEL:()=>u,assets:()=>c,contentTitle:()=>l,default:()=>x,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=t(5893),s=t(1151),o=t(6367);const i={sidebar_position:8},l="Service Deployment",a={id:"service-deployment",title:"Service Deployment",description:"xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such",source:"@site/docs/service-deployment.mdx",sourceDirName:".",slug:"/service-deployment",permalink:"/xpanse/docs/service-deployment",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Service Changes",permalink:"/xpanse/docs/service-changes"},next:{title:"Service Hosting Types",permalink:"/xpanse/docs/service-hosting"}},c={},d="https://github.com/eclipse-xpanse/xpanse/blob/main/modules/orchestrator/src/main/java/org/eclipse/xpanse/modules/orchestrator/deployment/DeployResourceHandler.java",h="https://github.com/eclipse-xpanse/xpanse/blob/main/modules/orchestrator/src/main/java/org/eclipse/xpanse/modules/orchestrator/deployment/Deployer.java",u="https://github.com/eclipse-xpanse/xpanse/blob/main/modules/models/src/main/java/org/eclipse/xpanse/modules/models/service/deploy/DeployResult.java",p=[{value:"Deployer Implementation",id:"deployer-implementation",level:2},{value:"Processing Deployment Results",id:"processing-deployment-results",level:3},{value:"Resource Handlers",id:"resource-handlers",level:4},{value:"Asynchronous Processing",id:"asynchronous-processing",level:2},{value:"Terraform",id:"terraform",level:2},{value:"Terraform Boot",id:"terraform-boot",level:3},{value:"OpenTofu",id:"opentofu",level:2},{value:"Tofu Maker",id:"tofu-maker",level:3},{value:"Script Validation",id:"script-validation",level:3},{value:"Script Execution",id:"script-execution",level:3},{value:"Reading Script Output",id:"reading-script-output",level:3},{value:"Capturing Service Details",id:"capturing-service-details",level:3}];function m(e){const r={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"service-deployment",children:"Service Deployment"})}),"\n","\n","\n",(0,n.jsx)(r.p,{children:"xpanse aims to unify the service deployment on any cloud by re-using already available cloud infrastructure management tools such\nas Terraform, OpenTofu, Pulumi, etc., in the market."}),"\n",(0,n.jsx)(r.p,{children:"Service Deployment involves the following tasks"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"The service provider must provide the script that must be executed to create the cloud resources\nrequired for running the service. The script must be provided as part of the service template."}),"\n",(0,n.jsx)(r.li,{children:"Install the software and configurations needed for running the service."}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsx)(r.p,{children:"Note: At the moment, Terraform and OpenTofu is supported by xpanse for service deployment. We plan to add support for other\ndeployment tools in the upcoming releases."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"deployer-implementation",children:"Deployer Implementation"}),"\n",(0,n.jsxs)(r.p,{children:["Every deployer must implement the methods defined in the ",(0,n.jsx)(o.Z,{name:"Deployer",url:h})," interface.\nThe deployer implementation will abstract all the service deployment tasks that must be executed for provisioning the service and return the result as ",(0,n.jsx)(o.Z,{name:"DeployResult",url:u})," object."]}),"\n",(0,n.jsx)(r.h3,{id:"processing-deployment-results",children:"Processing Deployment Results"}),"\n",(0,n.jsxs)(r.p,{children:["Each deployer can put all the necessary information about deployment results to a ",(0,n.jsx)(r.code,{children:"privateProperties"})," map in ",(0,n.jsx)(r.code,{children:"DeployResult"})," object."]}),"\n",(0,n.jsx)(r.h4,{id:"resource-handlers",children:"Resource Handlers"}),"\n",(0,n.jsxs)(r.p,{children:["Each plugin must implement a ",(0,n.jsx)(o.Z,{name:"DeployResourceHandler",url:d})," for each ",(0,n.jsx)(r.code,{children:"DeployerKind"})," and this will be invoked to extract the cloud resources deployed from the ",(0,n.jsx)(r.code,{children:"DeployerResult"}),"."]}),"\n",(0,n.jsx)(r.mermaid,{value:"classDiagram\n    class Deployer\n        <<interface>> Deployer\n        Deployer : deploy()\n        Deployer : destroy()\n    class DeployResourceHandler\n        <<interface>> DeployResourceHandler\n        DeployResourceHandler: handler(DeployResult deployResult)\n    class ServiceResourceHandler\n        <<interface>> ServiceResourceHandler\n        ServiceResourceHandler: resourceHandlers()\n\n    class OrchestratorPlugin\n        <<interface>> OrchestratorPlugin\n    Deployer --\x3e ResourceHandlerManager\n\n    class CloudProviderPlugin\n    class ResourceHandlerManager\n        ResourceHandlerManager: getResourceHandler()\n\n    ResourceHandlerManager --\x3e DeployResourceHandler\n    OrchestratorPlugin <|-- CloudProviderPlugin : implements\n    ServiceResourceHandler <|-- CloudProviderPlugin : implements\n    DeployResourceHandler <|-- CloudProviderPlugin : implements"}),"\n",(0,n.jsx)(r.h2,{id:"asynchronous-processing",children:"Asynchronous Processing"}),"\n",(0,n.jsx)(r.p,{children:"Since a service deployment can take longer depending on the complexity of the service and the resources required for it,\nthe entire deployment process is implemented to run asynchronously."}),"\n",(0,n.jsxs)(r.p,{children:["After the ",(0,n.jsx)(r.code,{children:"deploy"})," or the ",(0,n.jsx)(r.code,{children:"destroy"})," request is submitted, the runtime validates the request and the client receives an\naccepted/rejected message synchronously. After this, the runtime hands over the deployment request to another thread which executes the deployment independently."]}),"\n",(0,n.jsxs)(r.p,{children:["The clients can then fetch the status of the deployment using ",(0,n.jsx)(r.code,{children:"getDeployedServiceDetailsById"})," service."]}),"\n",(0,n.jsx)(r.h2,{id:"terraform",children:"Terraform"}),"\n",(0,n.jsxs)(r.p,{children:["Terraform script that must be executed must be passed as is, in the service definition when the service is registered.\nYou can find examples of how the script can look like in\nthe ",(0,n.jsx)(o.Z,{name:"samples",url:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples"})," folder."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"Terraform"})," binaries must be installed on the system where the runtime is running. Or use our docker image, which\ncontains all required software pre-installed."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"terraform-boot",children:"Terraform Boot"}),"\n",(0,n.jsxs)(r.p,{children:["To offload the service deployment tasks from the xpanse's main runtime engine, we created a project called ",(0,n.jsx)(o.Z,{name:"terraform-boot",url:"https://github.com/eclipse-xpanse/terraform-boot"}),".\nWe used this application for all our Terraform related tasks."]}),"\n",(0,n.jsx)(r.h2,{id:"opentofu",children:"OpenTofu"}),"\n",(0,n.jsxs)(r.p,{children:["OpenTofu script that must be executed must be passed as is, in the service definition when the service is registered.\nYou can find examples of how the script can look like in\nthe ",(0,n.jsx)(o.Z,{name:"samples",url:"https://github.com/eclipse-xpanse/xpanse/tree/main/samples/develop"})," folder."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"OpenTofu"})," binaries must be installed on the system where the runtime is running. Or use our docker image, which\ncontains all required software pre-installed."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"tofu-maker",children:"Tofu Maker"}),"\n",(0,n.jsxs)(r.p,{children:["To offload the service deployment tasks from the xpanse's main runtime engine, we created a project called ",(0,n.jsx)(o.Z,{name:"tofu-maker",url:"https://github.com/eclipse-xpanse/tofu-maker"}),".\nWe used this application for all our OpenTofu related tasks."]}),"\n",(0,n.jsx)(r.h3,{id:"script-validation",children:"Script Validation"}),"\n",(0,n.jsx)(r.p,{children:"As part of the service registration process, xpanse validates the syntax of the Terraform script provided. The service\nis registered only when the script validation is successful."}),"\n",(0,n.jsxs)(r.p,{children:["We use the Terraform ",(0,n.jsx)(o.Z,{name:"validate",url:"https://developer.hashicorp.com/terraform/cli/commands/validate"})," feature to achieve\nthis."]}),"\n",(0,n.jsx)(r.h3,{id:"script-execution",children:"Script Execution"}),"\n",(0,n.jsx)(r.p,{children:"When the customer orders the service, the following happens"}),"\n",(0,n.jsxs)(r.ol,{children:["\n",(0,n.jsx)(r.li,{children:"Generate a unique ID for the service requested. This is based on UUID."}),"\n",(0,n.jsx)(r.li,{children:"Create a folder with this ID as the name."}),"\n",(0,n.jsx)(r.li,{children:"From the runtime, call the start the Terraform process outside the JVM to do the following"}),"\n"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Inside the folder, the runtime will then create a Terraform workspace."}),"\n",(0,n.jsx)(r.li,{children:"Execute the Terraform scripts"}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Note: To avoid dependency on the filesystem, the state ",(0,n.jsx)(r.code,{children:"terraform.tfstate"})," file contents are copied to the database at\nthe end of the service deployment. We reuse this later when the customer requests to destroy the service."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"reading-script-output",children:"Reading Script Output"}),"\n",(0,n.jsxs)(r.p,{children:["After the runtime starts the Terraform script as a system command, it then starts to listen to ",(0,n.jsx)(r.code,{children:"stdout"})," and ",(0,n.jsx)(r.code,{children:"stderr"})," of\nthe job to gather all output generated from the script."]}),"\n",(0,n.jsx)(r.h3,{id:"capturing-service-details",children:"Capturing Service Details"}),"\n",(0,n.jsx)(r.p,{children:"For any service ordered by the customer, it's important to return the details of the ordered service. Such as the IP addresses,\ncredentials, etc. which the customer must use to start consuming the service."}),"\n",(0,n.jsxs)(r.p,{children:["We use the\nTerraform ",(0,n.jsx)(r.code,{children:"output"})," ",(0,n.jsx)(o.Z,{name:"feature",url:"https://developer.hashicorp.com/terraform/tutorials/configuration-language/outputs"})," to get\nsuch information from the service deployment. So it's important to add the ",(0,n.jsx)(r.code,{children:"output"})," section to the scripts. The same\nis also used by the xpanse UI for displaying the service details."]})]})}function x(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},6367:(e,r,t)=>{t.d(r,{Z:()=>s});t(7294);var n=t(5893);function s(e){let{name:r,url:t,isOpenInNewTab:s=!0}=e;return(0,n.jsx)("a",{href:t,className:"link-text",target:s?"_blank":"_self",children:r})}},1151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>i});var n=t(7294);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);