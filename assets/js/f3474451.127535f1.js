"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[5894],{7486:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var s=t(5893),i=t(1151);const o={},l="Pull Requests",r={id:"Contribute/pull-requests",title:"Pull Requests",description:"All changes to source code is possible only via Pull Requests on GitHub.",source:"@site/docs/Contribute/pull-requests.md",sourceDirName:"Contribute",slug:"/Contribute/pull-requests",permalink:"/xpanse/docs/Contribute/pull-requests",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Continuous Integration",permalink:"/xpanse/docs/Contribute/continuous-integration"},next:{title:"Releases",permalink:"/xpanse/docs/Contribute/releases"}},a={},c=[];function u(e){const n={code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pull-requests",children:"Pull Requests"}),"\n",(0,s.jsxs)(n.p,{children:["All changes to source code is possible only via ",(0,s.jsx)(n.code,{children:"Pull Requests"})," on GitHub."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Every pull request should be "linked" to an issue.'}),"\n",(0,s.jsx)(n.li,{children:"Create a branch using:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"$ git clone https://github.com/eclipse-xpanse/xpanse\ngit fetch --all\ngit checkout -b my-branch origin/main\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Don't forget to periodically rebase your branch ",(0,s.jsx)(n.code,{children:"git rebase -i origin/main"})]}),"\n",(0,s.jsx)(n.li,{children:"If you have a group of commits related to the same change, please squash your commits into one and force push to your branch."}),"\n",(0,s.jsx)(n.li,{children:"Test that your change works by adapting or adding tests."}),"\n",(0,s.jsx)(n.li,{children:'Follow the boy scout rule to "Always leave the campground cleaner than you found it."'}),"\n",(0,s.jsx)(n.li,{children:"Build your changes,\nIn case of xpanse App, make sure you do a build before doing a PR. and the build has to be successful"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  $ mvn clean verify\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"In case of xpanse UI and website, make sure the application starts without any errors and warnings:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"  $ npm run start\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"If your PR has conflicts with the main then rebase the branch. PRs with conflicts are unlikely to be applied"}),"\n",(0,s.jsx)(n.li,{children:"Don't change too much in a PR. The smaller the PR the easier it's to review, apply and the faster it will be done"}),"\n",(0,s.jsx)(n.li,{children:"Even if we're monitoring closely the PR, if you think your PR doesn't move forward fast enough, don't hesitate to\nping in a PR comment to get some update."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var s=t(7294);const i={},o=s.createContext(i);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);