"use strict";(self.webpackChunkosc_website=self.webpackChunkosc_website||[]).push([[671],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,y=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:1},i="Introduction",l={unversionedId:"intro",id:"intro",title:"Introduction",description:"Let's discover Open Services Cloud in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/xpanse-website/docs/intro",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Architecture",permalink:"/xpanse-website/docs/architecture"}},s={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"What you&#39;ll need",id:"what-youll-need",level:3},{value:"Running locally or on VM",id:"running-locally-or-on-vm",level:4},{value:"Running on Docker, Kubernetes",id:"running-on-docker-kubernetes",level:4},{value:"Create service descriptor",id:"create-service-descriptor",level:2},{value:"Deploy the service",id:"deploy-the-service",level:2}],c={toc:u},p="wrapper";function d(e){let{components:n,...t}=e;return(0,a.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Let's discover ",(0,a.kt)("strong",{parentName:"p"},"Open Services Cloud in less than 5 minutes"),"."),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Open Services Cloud")," is composed by:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an orchestrator responsible of the managed services (deployment, start, stop, ...) and loading\nplugins specific for each supported cloud provider"),(0,a.kt)("li",{parentName:"ul"},"a language describing managed services, called OCL (Open Services Cloud Configuration Language)"),(0,a.kt)("li",{parentName:"ul"},"a REST API to interact with the orchestrator"),(0,a.kt)("li",{parentName:"ul"},"runtime (eventually including cloud provider plugins) assemblying all components together in a\nrunning service")),(0,a.kt)("p",null,"Let's get started by ",(0,a.kt)("strong",{parentName:"p"},"launching OSC runtime")," and ",(0,a.kt)("strong",{parentName:"p"},"deploying a simple managed service"),"."),(0,a.kt)("p",null,"You will create a simple service descriptor and you will deploy to Open Services Cloud using the\norchestrator REST API."),(0,a.kt)("h3",{id:"what-youll-need"},"What you'll need"),(0,a.kt)("p",null,"You need a OSC runtime:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"use the runtime provided by a cloud provider supporting Open Services Cloud (the cloud provider\nalready have the runtime and you can directly use the APIs)"),(0,a.kt)("li",{parentName:"ul"},"launch the runtime of your cloud infrastructure (on a VM or Kubernetes cluster for instance)"),(0,a.kt)("li",{parentName:"ul"},"launch the runtime on your machine or cloud infrastructure.")),(0,a.kt)("h4",{id:"running-locally-or-on-vm"},"Running locally or on VM"),(0,a.kt)("p",null,"You can ",(0,a.kt)("a",{parentName:"p",href:"/download"},"download")," the OSC runtime or ",(0,a.kt)("a",{parentName:"p",href:"runtime"},"build your own runtime"),"."),(0,a.kt)("p",null,'In "exploded mode", you have a ',(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," folder, where you can easily launch with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ java -jar osc-runtime-1.0-SNAPSHOT.jar\n")),(0,a.kt)("p",null,"You can copy the whole ",(0,a.kt)("inlineCode",{parentName:"p"},"runtime")," folder on another VM or machine and launch the same way."),(0,a.kt)("h4",{id:"running-on-docker-kubernetes"},"Running on Docker, Kubernetes"),(0,a.kt)("p",null,"The runtime is also available as Docker images. You can run a Docker container with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ docker run -d --name my-runtime -p 8080:8080 osc\n")),(0,a.kt)("p",null,"OS also provides Kubernetes manifest files allowing you to easily deploy on K8S\nusing ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl apply -f"),"."),(0,a.kt)("p",null,"Take a look on ",(0,a.kt)("a",{parentName:"p",href:"runtime"},"runtime documentation")," for details."),(0,a.kt)("h2",{id:"create-service-descriptor"},"Create service descriptor"),(0,a.kt)("p",null,"A service is described with a ",(0,a.kt)("strong",{parentName:"p"},"json file"),". In this descriptor, you will define:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the service components"),(0,a.kt)("li",{parentName:"ul"},"the integration of the service with the fundamental services (computing, billing, ...)")),(0,a.kt)("p",null,"The descriptor can be created by hand, or using CLI or starter site (interactive mode)."),(0,a.kt)("p",null,"For example, here's a very simple service descriptor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-service",\n  "category": "compute",\n  "namespace": "my-namespace",\n  "billing": {\n    "model": "flat",\n    "period": "monthly",\n    "currency": "euro",\n    "fixedPrice": 20,\n    "variablePrice": 10\n  },\n  "compute": {\n    "vms": [\n      {\n        "name": "my-vm",\n        "type": "t2.large",\n        "image": "c7d4ff3e-a851-11ed-b9df-f329738732c0",\n        "subnets": [\n          "$.network.subnets[0]"\n        ],\n        "securityGroups": [\n          "$.network.securityGroups[0]"\n        ],\n        "storages": [\n          "$.storages[0]"\n        ],\n        "publicly": true\n      }\n    ]\n  },\n  "network": {\n    "vpc": [\n      {\n        "name": "my-vpc",\n        "cidr": "172.31.0.0/16"\n      },\n      {\n        "name": "my-another-vpc",\n        "cidr": "172.32.0.0/16"\n      }\n    ],\n    "subnets": [\n      {\n        "name": "my-subnet",\n        "vpc": "$.network.vpc[0]",\n        "cidr": "172.31.1.0/24"\n      }\n    ],\n    "securityGroups": [\n      {\n        "name": "my-sg",\n        "rules": [\n          {\n            "name": "my-app-msg",\n            "priority": 1,\n            "protocol": "TCP",\n            "cidr": "172.31.2.0/24",\n            "direction": "inbound",\n            "ports": "3389",\n            "action": "allow"\n          }\n        ]\n      }\n    ]\n  },\n  "storages": [\n    {\n      "name": "my-storage",\n      "type": "ssd",\n      "size": "80",\n      "sizeUnit": "GB"\n    }\n  ]\n}\n')),(0,a.kt)("h2",{id:"deploy-the-service"},"Deploy the service"),(0,a.kt)("p",null,"To actually deploy the service, you have to submit the ",(0,a.kt)("strong",{parentName:"p"},"json file")," to the ",(0,a.kt)("strong",{parentName:"p"},"Open Services Cloud\norchestrator"),"."),(0,a.kt)("p",null,"The orchestrator supports several channels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CLI"),(0,a.kt)("li",{parentName:"ul"},"REST"),(0,a.kt)("li",{parentName:"ul"},"SDK")),(0,a.kt)("p",null,"For instance, you can deploy the service descriptor via REST:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST -d @service.yaml -H "Content-Type: application/json" http://osc.host/path\n')))}d.isMDXComponent=!0}}]);