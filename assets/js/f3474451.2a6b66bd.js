"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[5894],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3057:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={},l="Pull Requests",i={unversionedId:"Contribute/pull-requests",id:"Contribute/pull-requests",title:"Pull Requests",description:"All changes to source code is possible only via Pull Requests on GitHub.",source:"@site/docs/Contribute/pull-requests.md",sourceDirName:"Contribute",slug:"/Contribute/pull-requests",permalink:"/xpanse/docs/Contribute/pull-requests",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Continuous Integration",permalink:"/xpanse/docs/Contribute/continuous-integration"},next:{title:"Releases",permalink:"/xpanse/docs/Contribute/releases"}},s={},u=[],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pull-requests"},"Pull Requests"),(0,a.kt)("p",null,"All changes to source code is possible only via ",(0,a.kt)("inlineCode",{parentName:"p"},"Pull Requests")," on GitHub."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Every pull request should be "linked" to an issue.'),(0,a.kt)("li",{parentName:"ul"},"Create a branch using:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ git clone https://github.com/eclipse-xpanse/xpanse\ngit fetch --all\ngit checkout -b my-branch origin/main\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don't forget to periodically rebase your branch ",(0,a.kt)("inlineCode",{parentName:"li"},"git rebase -i origin/main")),(0,a.kt)("li",{parentName:"ul"},"If you have a group of commits related to the same change, please squash your commits into one and force push to your branch."),(0,a.kt)("li",{parentName:"ul"},"Test that your change works by adapting or adding tests."),(0,a.kt)("li",{parentName:"ul"},'Follow the boy scout rule to "Always leave the campground cleaner than you found it."'),(0,a.kt)("li",{parentName:"ul"},"Build your changes,\nIn case of Xpanse App, make sure you do a build before doing a PR. and the build has to be successful")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  $ mvn clean verify\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In case of Xpanse UI and website, make sure the application starts without any errors and warnings:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"  $ npm run start\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If your PR has conflicts with the main then rebase the branch. PRs with conflicts are unlikely to be applied"),(0,a.kt)("li",{parentName:"ul"},"Do not change too much in a PR. The smaller the PR the easier it is to review, apply and the faster it will be done"),(0,a.kt)("li",{parentName:"ul"},"Even if we are monitoring closely the PR, if you think your PR doesn't move forward fast enough, do not hesitate to\nping in a PR comment to get some update.")))}m.isMDXComponent=!0}}]);