"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[8185],{88473:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=r(85893),t=r(11151);const s={sidebar_position:8},a="Runtime",o={id:"runtime",title:"Runtime",description:"Xpanse runtime is the running module built on SpringBoot.",source:"@site/docs/runtime.md",sourceDirName:".",slug:"/runtime",permalink:"/xpanse/docs/runtime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/xpanse/docs/plugins"},next:{title:"Supported Clouds",permalink:"/xpanse/docs/supported-clouds"}},l={},d=[{value:"Pre-Requisites",id:"pre-requisites",level:2},{value:"Properties and Environment Variables",id:"properties-and-environment-variables",level:2},{value:"Terraform CLI Installation",id:"terraform-cli-installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Build",id:"build",level:4},{value:"Run",id:"run",level:4},{value:"From Command Line",id:"from-command-line",level:5},{value:"From IDE",id:"from-ide",level:5},{value:"Production",id:"production",level:3},{value:"Run using jar",id:"run-using-jar",level:4},{value:"Run using Docker image",id:"run-using-docker-image",level:4},{value:"Running API behind a proxy",id:"running-api-behind-a-proxy",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"runtime",children:"Runtime"}),"\n",(0,i.jsx)(n.p,{children:"Xpanse runtime is the running module built on SpringBoot."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Xpanse Runtime"})," has two ways to start, one is to use the local terraform module, the other is Use\nthe remote terraform-boot service. The remote terraform-boot service is used by default."]}),"\n",(0,i.jsx)(n.h2,{id:"pre-requisites",children:"Pre-Requisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If using local terraform module, the ",(0,i.jsx)(n.code,{children:"Xpanse Runtime"})," host must have ",(0,i.jsx)(n.code,{children:"Terraform CLI"})," installed."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If using remote terraform-boot service, a remote ",(0,i.jsx)(n.code,{children:"Terrafom-boot"})," service must be\ndeployed/started.More details about the Terraform-boot project can be found\n",(0,i.jsx)(n.a,{href:"https://github.com/eclipse-xpanse/terraform-boot/blob/main/README.md",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fully configured Zitadel instance."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"properties-and-environment-variables",children:"Properties and Environment Variables"}),"\n",(0,i.jsx)(n.p,{children:"Xpanse has integration to multiple systems, and the aim is also to keep the system as flexible as\npossible and to cover all use-cases possible. Therefore, there are some configuration properties\nthat the developer and the production administrators must take care of before starting/deploying\nxpanse."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Configuration properties of authentication layer.\nDocumented ",(0,i.jsx)(n.a,{href:"/xpanse/docs/authentication-authorization#runtime",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Configuration properties of database layer. Documented ",(0,i.jsx)(n.a,{href:"/xpanse/docs/database#maria-db",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Plugin activation variables. Documented ",(0,i.jsx)(n.a,{href:"/xpanse/docs/plugins#plugin-activation",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"terraform-cli-installation",children:"Terraform CLI Installation"}),"\n",(0,i.jsxs)(n.p,{children:["Terraform CLI can be installed using the steps from\nthe ",(0,i.jsx)(n.a,{href:"https://developer.hashicorp.com/terraform/downloads",children:"official guide"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"local-development",children:"Local Development"}),"\n",(0,i.jsx)(n.h4,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(n.p,{children:["As a requirement, we need Java Developer Kit (JDK) version 17 installed. You can\nuse ",(0,i.jsx)(n.a,{href:"https://openjdk.org/",children:"openjdk"}),"\nor ",(0,i.jsx)(n.a,{href:"https://adoptium.net/",children:"temurin"})]}),"\n",(0,i.jsx)(n.p,{children:"Clone the project using the command below"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ git clone https://github.com/eclipse-xpanse/xpanse\n$ cd xpanse\n"})}),"\n",(0,i.jsx)(n.p,{children:"Then compile the entire project using the below command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ ./mvnw clean install -DskipTests\n"})}),"\n",(0,i.jsx)(n.h4,{id:"run",children:"Run"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure all properties mentioned in the ",(0,i.jsx)(n.a,{href:"#properties-and-environment-variables",children:"above section"})," are\ncorrectly set."]}),"\n",(0,i.jsx)(n.h5,{id:"from-command-line",children:"From Command Line"}),"\n",(0,i.jsx)(n.p,{children:"If you have a fully configured Zitadel instance running on your local system, then you can use the\nbelow command to start the application by passing all variables."}),"\n",(0,i.jsx)(n.p,{children:"To start the application from the command line, run the below application from the root of the\nproject."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ java -jar runtime/target/xpanse-runtime-1.0.0-SNAPSHOT.jar \\\n--authorization-api-client-id=${client-id} \\\n--authorization-api-client-secret=${client-secret} \\\n--authorization-swagger-ui-client-id=${swagger-ui-cleint-id}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you would like to use our ",(0,i.jsx)(n.code,{children:"zitadel-testbed"}),", then start the server using the below command. This\nwill automatically set properties required for connecting to our Zitadel test bed."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"$ cd runtime/target\n$ java -jar xpanse-runtime-1.0.0-SNAPSHOT.jar --spring.profiles.active=zitadel,zitadel-testbed\n"})}),"\n",(0,i.jsx)(n.p,{children:"By default, Xpanse Runtime starts using Terraform-boot. If you want to use local terraform, just\ndon't activate the terraform-boot scenario in the application.properties configuration file."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-properties",children:"spring.profiles.active=zitadel,zitadel-testbed\n"})}),"\n",(0,i.jsx)(n.h5,{id:"from-ide",children:"From IDE"}),"\n",(0,i.jsx)(n.p,{children:"Or the application can be started using the IDE by executing the main application directly. Below is\nthe example from IntellijIdea"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"img.png",src:r(81595).Z+"",width:"1306",height:"852"})}),"\n",(0,i.jsx)(n.p,{children:"You must see the below messages in the console."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'   _  __   ____    ____ _   ____    _____  ___\n  | |/_/  / __ \\  / __ `/  / __ \\  / ___/ / _ \\\n _>  <   / /_/ / / /_/ /  / / / / (__  ) /  __/\n/_/|_|  / .___/  \\__,_/  /_/ /_/ /____/  \\___/\n       /_/\n\n        xpanse 1.0.0-SNAPSHOT (2023)\n13:44:19.633 [main] INFO  o.e.xpanse.runtime.XpanseApplication - Starting XpanseApplication using Java 17.0.5 with PID 7344\n13:44:19.645 [main] INFO  o.e.xpanse.runtime.XpanseApplication - No active profile set, falling back to 1 default profile: "default"\n13:44:22.211 [main] INFO  o.e.x.o.FileOrchestratorStorage - No other storage beans found. Using default file storage.\n13:44:23.878 [main] WARN  o.e.x.o.OrchestratorService - No xpanse plugins loaded by the runtime.\n13:44:23.886 [main] INFO  o.e.xpanse.runtime.XpanseApplication - Started XpanseApplication in 5.029 seconds (process running for 5.992)\n'})}),"\n",(0,i.jsx)(n.p,{children:"You can check the status of the runtime by opening the swagger UI from any browser:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"http://localhost:8080/swagger-ui/index.html\n"})}),"\n",(0,i.jsx)(n.h3,{id:"production",children:"Production"}),"\n",(0,i.jsxs)(n.p,{children:["Ensure all properties mentioned in the ",(0,i.jsx)(n.a,{href:"#properties-and-environment-variables",children:"above section"})," are\ncorrectly set."]}),"\n",(0,i.jsx)(n.h4,{id:"run-using-jar",children:"Run using jar"}),"\n",(0,i.jsxs)(n.p,{children:["Download the released runtime jar from maven central repository. You can list all available released\nversions ",(0,i.jsx)(n.a,{href:"https://oss.sonatype.org/#nexus-search;quick~xpanse-runtime",children:"here"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After downloading, follow the same steps mentioned in ",(0,i.jsx)(n.a,{href:"#from-command-line",children:"this"})," section."]}),"\n",(0,i.jsx)(n.h4,{id:"run-using-docker-image",children:"Run using Docker image"}),"\n",(0,i.jsx)(n.p,{children:"You can start the runtime using our released docker image, and this is the preferred way. This image\ncontains all necessary tools preinstalled."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:'$ docker pull ghcr.io/eclipse-xpanse/xpanse:${release-version}\n$ docker run -d -p 8080:8080 --name xpanse -e "SPRING_PROFILES_ACTIVE=zitadel,mariadb" ghcr.io/eclipse-xpanse/xpanse:${release-version}\n$ docker logs xpanse\n'})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," It is safe to provide all properties as environment variables rather than passing them\ndirectly in the command line.\nIn case of this, the same property name must be set in UPPERCASE for all 4 variables."]}),"\n",(0,i.jsxs)(n.p,{children:["For running, using docker image, we can use the ",(0,i.jsx)(n.code,{children:" --env-file"})," option of the ",(0,i.jsx)(n.code,{children:" docker run"})," command to store all sensitive data.\nAgain here the property names must be in UPPERCASE."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"running-api-behind-a-proxy",children:"Running API behind a proxy"}),"\n",(0,i.jsxs)(n.p,{children:["For running the runtime application behind a proxy, we must ensure that the proxy forwards the\ncorrect ",(0,i.jsx)(n.code,{children:"X-Forwarded-*"}),"headers to the API. This is necessary as the API has some features where the\nlinks to html pages are returned and this link will have the correct protocol and host only when\nthese headers are set."]}),"\n",(0,i.jsx)(n.p,{children:"In the case of Nginx, the configuration will look like this"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-nginx",metastring:"configuration",children:"proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto https;\nproxy_set_header Host $host;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},81595:(e,n,r)=>{r.d(n,{Z:()=>i});const i=r.p+"assets/images/ide-run-0c717d68ffba16b4dc8edfc9b9453d78.png"},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var i=r(67294);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);