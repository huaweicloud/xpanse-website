"use strict";(self.webpackChunkxpanse_website=self.webpackChunkxpanse_website||[]).push([[853],{999:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var t=i(5893),s=i(1151),r=i(6367);const o={},a="Bug Handling Process",l={id:"Contribute/bug-handling-process",title:"Bug Handling Process",description:"Overview",source:"@site/docs/Contribute/bug-handling-process.mdx",sourceDirName:"Contribute",slug:"/Contribute/bug-handling-process",permalink:"/xpanse/docs/Contribute/bug-handling-process",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Planning",permalink:"/xpanse/docs/Contribute/planning"},next:{title:"Calendar",permalink:"/xpanse/docs/Contribute/calendar"}},h={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Report a Bug?",id:"how-to-report-a-bug",level:2},{value:"Bug Triage",id:"bug-triage",level:2},{value:"When the Issue is in the Code Developed by the Project`",id:"when-the-issue-is-in-the-code-developed-by-the-project",level:3},{value:"When the Issue Originates from Dependencies",id:"when-the-issue-originates-from-dependencies",level:3},{value:"Detailed Workflow",id:"detailed-workflow",level:2},{value:"Bug Sources",id:"bug-sources",level:3},{value:"Acknowledgement and Bug Triage",id:"acknowledgement-and-bug-triage",level:3},{value:"Prioritizing and Fixing",id:"prioritizing-and-fixing",level:3},{value:"Releasing",id:"releasing",level:3}];function c(e){const n={blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bug-handling-process",children:"Bug Handling Process"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(n.p,{children:"xpanse is aiming to build a secure system from the foundation,\napplying the best industry practices in terms of development quality. However,\nas in every software projects, bugs do happen. This process explains how we\nhandle bugs."}),"\n",(0,t.jsx)(n.h2,{id:"how-to-report-a-bug",children:"How to Report a Bug?"}),"\n",(0,t.jsx)(n.p,{children:"If you think you have found a bug in xpanse, please open an issue in GitHub and in the project that you think is the\nsource of the issue. Use the provided template:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"What's the action to reproduce the bug? (Steps to reproduce)"}),"\n",(0,t.jsx)(n.li,{children:"What's the result you see? (Actual result)"}),"\n",(0,t.jsx)(n.li,{children:"What's the result you expect? (Expected behaviour)"}),"\n",(0,t.jsx)(n.li,{children:"Frequency? (always, sometimes, one-time issue)"}),"\n",(0,t.jsx)(n.li,{children:"Tested version (Release or commit version, platform)"}),"\n",(0,t.jsx)(n.li,{children:"Do you know any workaround of this issue? (link to workaround/mitigation steps etc)"}),"\n",(0,t.jsx)(n.li,{children:"Do you have a fix for this issue?"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Developers review the reported issues and perform triage (see below). When a fix\nis available, the ticket is updated with the details of the solution."}),"\n",(0,t.jsx)(n.h2,{id:"bug-triage",children:"Bug Triage"}),"\n",(0,t.jsx)(n.p,{children:"The bug triage is a process where developers asses the bug and set its\nseverity and domain. At the end of this process the bug will:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Be classified as a security issue, normal bug, feature request, or be rejected\nif the feature is working as planned or couldn't be reproduced."}),"\n",(0,t.jsx)(n.li,{children:"Have its severity set. Please refer to the documentation of severity levels\nbelow."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If the bug is classified as a security vulnerability, please also refer to our security guidelines ",(0,t.jsx)(r.Z,{name:"here",url:"./security",isOpenInNewTab:!1}),"."]}),"\n",(0,t.jsx)(n.p,{children:"If the bug is confirmed as a bug, the developer will assign bug severity:\ncritical, major, minor or low."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.em,{children:"Note:"})})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Critical"})," severity bugs make a feature unusable, cause a major data loss.\nThere is no workaround, or a complex one."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Normal"})," severity bugs make a feature hard to use, but there is a workaround\n(including another feature to use instead of the desired one)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Minor"})," severity bugs cause a loss of non-critical feature (like missing or\nincorrect logging)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Low"})," severity bugs cause minor inconveniences (like a typo in the user\ninterface or in the documentation)."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The bug can originate in the software developed by the project, or from the dependencies we use from other sources. The\nprocess of handling a bug report will change\nbetween those two cases:"}),"\n",(0,t.jsx)(n.h3,{id:"when-the-issue-is-in-the-code-developed-by-the-project",children:"When the Issue is in the Code Developed by the Project`"}),"\n",(0,t.jsx)(n.p,{children:"In the case where the bug originates in the code directly maintained by the\nProject, the bug is handled directly in the bug tracker."}),"\n",(0,t.jsx)(n.h3,{id:"when-the-issue-originates-from-dependencies",children:"When the Issue Originates from Dependencies"}),"\n",(0,t.jsx)(n.p,{children:"If the issue was identified in dependencies code, we report an issue in\na way appropriate to that particular dependency project. We store the reference to their\nbug report in our bug tracker. Depending on the bug severity,\nwe might decide to develop and maintain a fix locally. However, we strongly\nprefer the dependency library maintainers to fix the issue first, and then get it with a regular dependency version\nupdate."}),"\n",(0,t.jsx)(n.p,{children:"Please note also that we periodically update maintained dependencies, regardless of the bugs filled in our system. Our\ngoal is to update to the latest stable version of the project."}),"\n",(0,t.jsx)(n.h2,{id:"detailed-workflow",children:"Detailed Workflow"}),"\n",(0,t.jsx)(n.h3,{id:"bug-sources",children:"Bug Sources"}),"\n",(0,t.jsx)(n.p,{children:"Bugs might be reported by different sources, including Project's own findings\n(like QA), partner findings or community. There might be\nalso different ways the Project team learns about the issue, including\nchats, discussion forums etc. Issues coming from different sources\nare centralized in the bug tracker, which also provides a unified\nidentification of all issues."}),"\n",(0,t.jsx)(n.h3,{id:"acknowledgement-and-bug-triage",children:"Acknowledgement and Bug Triage"}),"\n",(0,t.jsx)(n.p,{children:"After the bug is entered, a developer will perform triage. The process starts\nfrom acknowledging the issue and then consists of verifying all the information\nprovided by the bug reporter to reproduce the issue. The developer performing\ntriage might ask additional questions. Then they assign severity and domain to\nthe issue in the bug tracker. They also check which versions are affected and might\nmodify the severity level set by the reporter.\nAny project member, or the bug reporter, who disagrees with the assignment might\ncomment on the issue."}),"\n",(0,t.jsx)(n.p,{children:"If there is a fix available from the reporter, the developer also verifies if\nthe fix is correct and matches the IP policy. If the fix is judged acceptable,\nthe process might skip to the Releasing step."}),"\n",(0,t.jsx)(n.p,{children:"We aim at the first answer of the triage (either finishing triage, or additional\nquestions to the reporter) in three working days for critical bugs and seven days\nfor other bugs. In case of a critical bug, the person performing triage informs\nthe maintainers of the affected subsystem."}),"\n",(0,t.jsx)(n.h3,{id:"prioritizing-and-fixing",children:"Prioritizing and Fixing"}),"\n",(0,t.jsx)(n.p,{children:"Bugs with the severity attached enter the prioritization process. It includes a weekly\nmeeting when the team reviews bugs entered or modified during the last week: those\nduring the process of triage, and those with the triage finished. For the bugs with\ntriage finished, the team sets the priority and might assign it to a developer."}),"\n",(0,t.jsx)(n.p,{children:"The bug fixes should follow the same contributions guidelines as any other\ncontribution. The best practice is to develop a fix for the bug in a separate\nbranch. Fixes for related bugs are possible in the same branch."}),"\n",(0,t.jsx)(n.h3,{id:"releasing",children:"Releasing"}),"\n",(0,t.jsx)(n.p,{children:"When a bug fix is available in a branch, the developer creates a merge request.\nWhen the change is accepted, it's merged in the main branch. The developer in\ncharge of the bug verifies with the release manager to which branches the change\nshould be backported."}),"\n",(0,t.jsx)(n.p,{children:"If the bug comes from a dependent library, developers upstream the bug fix. If\nthe upstream is delayed, the Project might ship a local fix. However, we aim to upstream all fixes."}),"\n",(0,t.jsx)(n.p,{children:"During the time of development of the patch and eventual upstream, the developer\nupdates the documentation (if appropriate), and adds a notification to the release\nnotes. Our release notes contain: links to bugs fixed in the release, links to CVEs\nfixed in the release (publicly known) and a list of CVEs fixed that are still under\nembargo."}),"\n",(0,t.jsx)(n.p,{children:"If the bug is classified as critical, it might be decided to perform a separate\nbug-fix release to fix the issue. Otherwise, the bug fix lands in the next bug-fix\nrelease."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},6367:(e,n,i)=>{i.d(n,{Z:()=>s});i(7294);var t=i(5893);function s(e){let{name:n,url:i,isOpenInNewTab:s=!0}=e;return(0,t.jsx)("a",{href:i,className:"link-text",target:s?"_blank":"_self",children:n})}},1151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>o});var t=i(7294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);