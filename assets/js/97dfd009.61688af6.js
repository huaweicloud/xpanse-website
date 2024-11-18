"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[580],{1042:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"ui","title":"UI","description":"This is the frontend for the xpanse project which allows cloud service providers to register managed services to the","source":"@site/docs/ui.mdx","sourceDirName":".","slug":"/ui","permalink":"/xpanse/docs/ui","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10},"sidebar":"tutorialSidebar","previous":{"title":"Supported Clouds","permalink":"/xpanse/docs/supported-clouds"},"next":{"title":"Workflows","permalink":"/xpanse/docs/workflows"}}');var s=i(4848),o=i(8453),a=i(2585);const r={sidebar_position:10},l="UI",d={},c=[{value:"Application Stack",id:"application-stack",level:2},{value:"Authentication and Authorization",id:"authentication-and-authorization",level:2},{value:"Disable",id:"disable",level:3},{value:"OAuth",id:"oauth",level:3},{value:"Zitadel Configuration",id:"zitadel-configuration",level:4},{value:"Configuration Properties",id:"configuration-properties",level:2},{value:"Setting Configuration Values",id:"setting-configuration-values",level:3},{value:".env Files",id:"env-files",level:4},{value:"Environment Variables",id:"environment-variables",level:4},{value:"Getting Configuration Values",id:"getting-configuration-values",level:3},{value:"Starting local development server",id:"starting-local-development-server",level:2},{value:"No Auth",id:"no-auth",level:3},{value:"Local OAuth",id:"local-oauth",level:3},{value:"Testbed OAuth",id:"testbed-oauth",level:3},{value:"Static Code Analysis",id:"static-code-analysis",level:3},{value:"Code Formatting",id:"code-formatting",level:3},{value:"Generate Rest Client for xpanse API",id:"generate-rest-client-for-xpanse-api",level:3},{value:"Build for production",id:"build-for-production",level:2},{value:"Docker Image",id:"docker-image",level:2},{value:"Run UI Container",id:"run-ui-container",level:3},{value:"Application Logs",id:"application-logs",level:3},{value:"Non production environments without HTTPS",id:"non-production-environments-without-https",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"ui",children:"UI"})}),"\n",(0,s.jsx)(n.p,{children:"This is the frontend for the xpanse project which allows cloud service providers to register managed services to the\nservice catalog and also for end users to deploy services from the service catalog and manage them."}),"\n",(0,s.jsx)(n.h2,{id:"application-stack",children:"Application Stack"}),"\n",(0,s.jsxs)(n.p,{children:["Project is built using ",(0,s.jsx)(n.code,{children:"ReactJS"})," library. As we use ",(0,s.jsx)(n.code,{children:"TypeScript"})," here, we must ensure all objects have its type explicit\ndefined."]}),"\n",(0,s.jsxs)(n.p,{children:["GUI components are built using ",(0,s.jsx)(n.code,{children:"antd"})," library."]}),"\n",(0,s.jsx)(n.h2,{id:"authentication-and-authorization",children:"Authentication and Authorization"}),"\n",(0,s.jsxs)(n.p,{children:["Auth can be controlled by",(0,s.jsx)(n.code,{children:" VITE_APP_AUTH_DISABLED"})," configuration property.\nThis property is also already configured with appropriate values in different configuration files."]}),"\n",(0,s.jsx)(n.h3,{id:"disable",children:"Disable"}),"\n",(0,s.jsxs)(n.p,{children:["When we start the UI with the default run command ",(0,s.jsx)(n.code,{children:"npm run start"}),",\nthen the UI will start with no authentication and authorization.\nThis must be used only for testing and development purposes."]}),"\n",(0,s.jsx)(n.admonition,{title:"Default Roles",type:"important",children:(0,s.jsxs)(n.p,{children:["When authentication and authorization is disabled,\nthe ",(0,s.jsx)(n.strong,{children:"test user"})," will then have all ",(0,s.jsx)(a.A,{name:"roles",url:"authentication-authorization#roles"}),"\nby default."]})}),"\n",(0,s.jsx)(n.h3,{id:"oauth",children:"OAuth"}),"\n",(0,s.jsxs)(n.p,{children:["Authentication and authorization are protected by an OAuth provider.\nThe default implementation uses ",(0,s.jsx)(n.code,{children:"Zitadel"})," as the OAuth provider."]}),"\n",(0,s.jsx)(n.h4,{id:"zitadel-configuration",children:"Zitadel Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Before we can start using the UI, we must ensure ",(0,s.jsx)(n.code,{children:"Zitadel"})," instance that we consider using,\nhas all the required configuration. Details can be found ",(0,s.jsx)(a.A,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-iam/blob/main/zitadel/terraform/README.md"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["For local environments, the ",(0,s.jsx)(n.code,{children:"access_tokens"})," are stored with in the browser storage.\nThis isn't safe, but it's enough for non-production environments and for debugging purposes."]}),"\n",(0,s.jsxs)(n.p,{children:["For production environments, we must use ",(0,s.jsx)(n.code,{children:"Service Workers"})," which will block anyone from accessing the token.\nThis can be enabled by making the following configurations."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:"VITE_APP_AUTH_USE_SERVICE_WORKER_ONLY=true\n"})}),"\n",(0,s.jsxs)(n.p,{children:["and the file ",(0,s.jsx)(a.A,{name:"OidcTrustedDomains.js",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/public/OidcTrustedDomains.js"})," must be updated with correct information.\n",(0,s.jsx)(n.code,{children:"oidcDomains"})," must have the identity provider URL and ",(0,s.jsx)(n.code,{children:"accessTokenDomains"})," must have the xpanse API server URL."]}),"\n",(0,s.jsx)(n.admonition,{title:"OidcTrustedDomains.js changes not necessary",type:"info",children:(0,s.jsx)(n.p,{children:"If the same must be used with our official docker images, then this file need not be touched. It will be automatically set from the environment variables."})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-properties",children:"Configuration Properties"}),"\n",(0,s.jsxs)(n.p,{children:["All required configuration parameters must be added to .env\nfile ",(0,s.jsx)(a.A,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/.env"}),".\nEven if we don't have a valid default value, we must just add empty value.\nThis file serves as a reference to all required properties."]}),"\n",(0,s.jsx)(n.admonition,{title:"No secrets in configuration file",type:"danger",children:(0,s.jsx)(n.p,{children:"Since React is compiled to a static app, all configuration values can be seen directly in the browser too.\nTherefore, no secure configurations such as passwords, keys, etc. must be added here."})}),"\n",(0,s.jsx)(n.h3,{id:"setting-configuration-values",children:"Setting Configuration Values"}),"\n",(0,s.jsx)(n.h4,{id:"env-files",children:".env Files"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Set values in the .env files.\nAll default values are set in .env files.\nThese are automatically loaded by ",(0,s.jsx)(n.code,{children:"React"})," and there is no need to do anything for this to be loaded."]}),"\n",(0,s.jsxs)(n.li,{children:["For non-default properties or to override the values is .env, we can set the values in new .env files and load them\nusing ",(0,s.jsx)(n.code,{children:"env-cmd"})," framework which will automatically inject the variables.\nExample can be\nfound ",(0,s.jsx)(a.A,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/package.json#L25"})]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Default configuration location",type:"tip",children:(0,s.jsx)(n.p,{children:".env files must be used only for default configurations or for development environment configurations values."})}),"\n",(0,s.jsx)(n.h4,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["All variables can be overridden by setting environment variables and then running the ",(0,s.jsx)(n.code,{children:"npm run start"})," for development or\nwith ",(0,s.jsx)(n.code,{children:"docker run"})," for production."]}),"\n",(0,s.jsx)(n.h3,{id:"getting-configuration-values",children:"Getting Configuration Values"}),"\n",(0,s.jsx)(n.p,{children:"We've a custom implementation which reads the configuration from all sources and provides a unified configuration map.\nOnly this must be used for reading configuration from the React app."}),"\n",(0,s.jsxs)(n.p,{children:["Implementation can be found ",(0,s.jsx)(a.A,{name:"here",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/src/config/config.ts#L16"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"starting-local-development-server",children:"Starting local development server"}),"\n",(0,s.jsxs)(n.p,{children:["In the project directory, you can run the below command to start the local development server. This also additionally\nneeds ",(0,s.jsx)(n.code,{children:"nodejs"})," to be installed on the development machine."]}),"\n",(0,s.jsx)(n.h3,{id:"no-auth",children:"No Auth"}),"\n",(0,s.jsx)(n.p,{children:"To start local development server without any auth, use the below command."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ npm run start\n"})}),"\n",(0,s.jsx)(n.h3,{id:"local-oauth",children:"Local OAuth"}),"\n",(0,s.jsxs)(n.p,{children:["To start local development server with local OAuth server,\nthen update the ",(0,s.jsx)(n.code,{children:"VITE_APP_ZITADEL_CLIENT_ID"})," value in the ",(0,s.jsx)(n.code,{children:".env.zitadel-local"})," fie and\nthen start the server with below command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ npm run start-with-zitadel-local\n"})}),"\n",(0,s.jsx)(n.h3,{id:"testbed-oauth",children:"Testbed OAuth"}),"\n",(0,s.jsx)(n.p,{children:"If you wish to use our central Zitadel testbed instance, then simply start the application with the below command.\nFor this you would need an account on our testbed instance."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ npm run start-with-zitadel-testbed\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.a,{href:"http://localhost:3000",children:"http://localhost:3000"})," to view it in the browser."]}),"\n",(0,s.jsx)(n.h3,{id:"static-code-analysis",children:"Static Code Analysis"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"eslint"})," and ",(0,s.jsx)(n.code,{children:"knip"})," to statically analyze code.\nAlways run the below command locally to ensure the changes made results in no errors. This will also validate the code\nformat.\nIn case of any errors, the CI pipeline will fail when a PR is opened."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" npx eslint . --ext .js,.jsx,.ts,.tsx --config package.json --max-warnings=0\n npx knip\n"})}),"\n",(0,s.jsx)(n.h3,{id:"code-formatting",children:"Code Formatting"}),"\n",(0,s.jsxs)(n.p,{children:["We use ",(0,s.jsx)(n.code,{children:"prettier"})," to format our UI code. To auto format the code, you can run the below command."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"npx prettier --config .prettierrc --write .\n"})}),"\n",(0,s.jsx)(n.h3,{id:"generate-rest-client-for-xpanse-api",children:"Generate Rest Client for xpanse API"}),"\n",(0,s.jsx)(n.p,{children:"We use the OpenAPI generator to generate data models and rest client from the OpenAPI JSON file.\nThe following steps must be followed to generate a new client and data models whenever there is a new version if the\nswagger JSON."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Copy the OpenAPI file\nto ",(0,s.jsx)(a.A,{name:"OpenAPI JSON File",url:"https://github.com/eclipse-xpanse/xpanse-ui/blob/main/src/xpanse-api/api.json"})]}),"\n",(0,s.jsxs)(n.li,{children:["Run the code generator as below","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"    ./scripts/generate_api_client.sh\n"})}),"\n","This script will generate all required models and client, add license headers and format newly generated files."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"build-for-production",children:"Build for production"}),"\n",(0,s.jsx)(n.p,{children:"The only recommended way to run UI in production is to use the docker image"}),"\n",(0,s.jsx)(n.h2,{id:"docker-image",children:"Docker Image"}),"\n",(0,s.jsx)(n.p,{children:"Docker image for the UI project is based on NGINX base image. This is because the project only serves static content."}),"\n",(0,s.jsxs)(n.p,{children:["As part of our UI release process, we deliver our official images to GitHub packages.\nAll available images can be found ",(0,s.jsx)(a.A,{name:"here",url:"https://github.com/orgs/eclipse-xpanse/packages?tab=packages&q=xpanse-ui"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"run-ui-container",children:"Run UI Container"}),"\n",(0,s.jsxs)(n.p,{children:["Container runs the application on port ",(0,s.jsx)(n.code,{children:"3000"})," by default and exposes the UI using HTTP.\nWe must use another SSL load balancer to expose the UI for end users."]}),"\n",(0,s.jsxs)(n.p,{children:["Production configuration values must be passed as environment variables to docker run for the below vars using ",(0,s.jsx)(n.code,{children:"-e"})," option."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-dotenv",children:"VITE_APP_ZITADEL_AUTHORITY_NAME # URL for the Oauth provider\nVITE_APP_ZITADEL_CLIENT_ID # Client ID provided by the Oauth provider for UI\nVITE_APP_XPANSE_API_URL # xpanse API URL\nVITE_APP_AUTH_USE_SERVICE_WORKER_ONLY=true # for production. Otherwise, this step config can be ignored.\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker pull ghcr.io/eclipse-xpanse/xpanse-ui:${version}\ndocker run -d --name ui xpanse-ui\n"})}),"\n",(0,s.jsx)(n.h3,{id:"application-logs",children:"Application Logs"}),"\n",(0,s.jsx)(n.p,{children:"All logs from NGINX are routed to stdout by default. Using the below command, all application logs can be viewed."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"docker logs ui\n"})}),"\n",(0,s.jsx)(n.h2,{id:"non-production-environments-without-https",children:"Non production environments without HTTPS"}),"\n",(0,s.jsxs)(n.p,{children:["The OAuth client libraries used by the UI are highly secure and don't allow using plain HTTP except for ",(0,s.jsx)(n.code,{children:"localhost"}),".\nFor all other test purposes when there is a necessity to use HTTP together with an IP or host name that's not ",(0,s.jsx)(n.code,{children:"localhost"}),",\nthen the browser configuration must be changed as below to consider that IP or host name as a secure origin."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Go to  chrome://flags/#unsafely-treat-insecure-origin-as-secure."}),"\n",(0,s.jsxs)(n.li,{children:["Add the origin which you want to treat as secure that is, ",(0,s.jsx)(n.a,{href:"http://example.com:8080",children:"http://example.com:8080"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"Restart chrome."}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},2585:(e,n,i)=>{i.d(n,{A:()=>s});i(6540);var t=i(4848);function s(e){let{name:n,url:i,isOpenInNewTab:s=!0}=e;return(0,t.jsx)("a",{href:i,className:"link-text",target:s?"_blank":"_self",children:n})}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(6540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);