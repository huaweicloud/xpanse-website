"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[5927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),h=i,f=u["".concat(c,".").concat(h)]||u[h]||d[h]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},81527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:2},o="Architecture",s={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Xpanse is a project aimed reshaping the cloud services ecosystem:",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/xpanse/docs/architecture",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/xpanse/docs/intro"},next:{title:"Authentication and Authorization",permalink:"/xpanse/docs/authentication-authorization"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"architecture"},"Architecture"),(0,i.kt)("p",null,"Xpanse is a project aimed reshaping the cloud services ecosystem:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the cloud users can find the same services across different cloud providers, exactly the same services provided by\nXpanse."),(0,i.kt)("li",{parentName:"ul"},"the software vendors can easily create native and portable managed services for their software, including seamless and\nlow level integration with cloud provider services. In addition, of software artifacts, software vendor describe the\nservice using the Xpanse data model."),(0,i.kt)("li",{parentName:"ul"},"the cloud providers can easily extend their services catalog by registering services described using the Xpanse data model.")),(0,i.kt)("p",null,"Xpanse allows anyone to create managed services (not only the cloud provider), portable, and fully\nintegrated within the cloud provider infrastructure."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Xpanse Architecture",src:r(36501).Z,title:"Xpanse Architecture",width:"1121",height:"949"})),(0,i.kt)("p",null,"The Xpanse service descriptor is a yaml fully describing the service. This descriptor is handled by the orchestrator."),(0,i.kt)("p",null,"The orchestrator reads the deployment scripts provided as part of the service descriptor and executes it when the service is ordered."),(0,i.kt)("p",null,"The interaction logic with the cloud provider is delegated to orchestrator plugins. The orchestrator can use one or more\nplugins to deal with the underlying infrastructure services and create the service resources."),(0,i.kt)("p",null,"The orchestrator defines the following lifecycle for each service:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A service is registered in the orchestrator (in a persistent store)."),(0,i.kt)("li",{parentName:"ol"},"Once registered, the service is available for the end user for deployments."),(0,i.kt)("li",{parentName:"ol"},"the orchestrator can delete the service and with this will remove the service from the catalog.")),(0,i.kt)("p",null,"You can interact with the Xpanse API using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api"},"REST API"),"."),(0,i.kt)("p",null,"The orchestrator, plugins and API are all managed in the Xpanse runtime Spring Boot application.\nThe runtime is the glue between all components."))}d.isMDXComponent=!0},36501:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xpanse_architecture-f89c340bfacd494584dfc5bd3203563c.svg"}}]);