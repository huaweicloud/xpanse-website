"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[8856],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||i;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(7462),a=(t(7294),t(3905));const i={sidebar_position:8},o="Plugins",s={unversionedId:"plugins",id:"plugins",title:"Plugins",description:"This section described how to develop an orchestrator plugin (and associated storage).",source:"@site/docs/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/xpanse-website/docs/plugins",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Supported Clouds",permalink:"/xpanse-website/docs/supported-clouds"},next:{title:"New Developers",permalink:"/xpanse-website/docs/Contribute/new-developers"}},c={},l=[{value:"Orchestrator",id:"orchestrator",level:2},{value:"Adding in Xpanse runtime",id:"adding-in-xpanse-runtime",level:2}],p={toc:l},d="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugins"},"Plugins"),(0,a.kt)("p",null,"This section described how to develop an orchestrator plugin (and associated storage)."),(0,a.kt)("h2",{id:"orchestrator"},"Orchestrator"),(0,a.kt)("p",null,"An orchestrator plugin is basically a class that implements\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"org.eclipse.xpanse.orchestrator.OrchestratorPlugin"),"\ninterface. It must also be annotated with ",(0,a.kt)("inlineCode",{parentName:"p"},"@Component")," so that the class is scanned and loaded into\nthe spring context."),(0,a.kt)("p",null,"You can create a basic plugin Maven ",(0,a.kt)("inlineCode",{parentName:"p"},"pom.xml")," containing the OSC Orchestrator and OclLoader:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<project xmlns="http://maven.apache.org/POM/4.0.0"\n  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n  xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">\n\n  <modelVersion>4.0.0</modelVersion>\n\n  <groupId>my-group</groupId>\n  <artifactId>my-plugin</artifactId>\n  <version>1.0-SNAPSHOT</version>\n\n  <dependencies>\n    <dependency>\n      <groupId>org.eclipse.xpanse.modules</groupId>\n      <artifactId>orchestrator</artifactId>\n      <version>1.0.0-SNAPSHOT</version>\n    </dependency>\n    <dependency>\n      <groupId>org.eclipse.xpanse.modules</groupId>\n      <artifactId>models</artifactId>\n      <version>${project.version}</version>\n    </dependency>\n  </dependencies>\n\n</project>\n')),(0,a.kt)("p",null,"Then, you can create your plugin class in the ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java")," folder:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MyPlugin implements OrchestratorPlugin {\n\n    @Override\n    public void registerManagedService(Ocl ocl) {\n        // load the OCL and register the corresponding managed service (creating all required resources)\n    }\n\n    @Override\n    public void updateManagedService(String managedServiceName, Ocl ocl) {\n        // update an existing service with a new OCL descriptor\n    }\n\n    @Override\n    public void startManagedService(String managedServiceName) {\n        // start a registered service\n    }\n\n    @Override\n    public void stopManagedService(String managedServiceName) {\n        // stop a registered service\n    }\n\n    @Override\n    public void unregisterManagedService(String managedServiceName) {\n        // unregister (remove and destroy service resources)\n    }\n\n    // optional method, only needed if you want to execute code when the plugin is loaded\n    @Override\n    public void onRegister(ServiceRegistry serviceRegistry) {\n        // here you can interact with other services (via ServiceRegistry) in the OSC runtime\n    }\n}\n")),(0,a.kt)("h2",{id:"adding-in-xpanse-runtime"},"Adding in Xpanse runtime"),(0,a.kt)("p",null,"To ensure the plugin and storage implementations are correctly scanned and loaded, both the classes\nmust also be additionally annotated wit ",(0,a.kt)("inlineCode",{parentName:"p"},"@Profile")," and with value with the plugin name."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'@Profile(value = "${pluginName})')))}u.isMDXComponent=!0}}]);