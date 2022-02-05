"use strict";(self.webpackChunkkubedl_website=self.webpackChunkkubedl_website||[]).push([[263],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1615:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},u="Contributing to KubeDL",s={unversionedId:"contribution/contributing",id:"contribution/contributing",title:"Contributing to KubeDL",description:"Welcome to KubeDL!",source:"@site/docs/contribution/contributing.md",sourceDirName:"contribution",slug:"/contribution/contributing",permalink:"/docs/contribution/contributing",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/contribution/contributing.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Comparisons",permalink:"/docs/comparisons"},next:{title:"Code of Conduct",permalink:"/docs/contribution/code-of-conduct"}},c=[{value:"Developing Environment",id:"developing-environment",children:[],level:2},{value:"Developing guide",id:"developing-guide",children:[{value:"Enable DCO",id:"enable-dco",children:[],level:3},{value:"Code Structure",id:"code-structure",children:[],level:3},{value:"How to Build",id:"how-to-build",children:[{value:"Build the binary",id:"build-the-binary",children:[],level:4},{value:"Run controller locally",id:"run-controller-locally",children:[],level:4},{value:"Run the tests",id:"run-the-tests",children:[],level:4},{value:"Generate manifests: CRD, RBAC YAML files etc",id:"generate-manifests-crd-rbac-yaml-files-etc",children:[],level:4},{value:"Build the docker image",id:"build-the-docker-image",children:[],level:4},{value:"Push the image",id:"push-the-image",children:[],level:4},{value:"Generate the helm chart",id:"generate-the-helm-chart",children:[],level:4}],level:3},{value:"Add a new CRD",id:"add-a-new-crd",children:[],level:3},{value:"Git Preparation (Skip if you are familiar with Git)",id:"git-preparation-skip-if-you-are-familiar-with-git",children:[],level:3}],level:2},{value:"Engage to help anything",id:"engage-to-help-anything",children:[{value:"Reporting issues",id:"reporting-issues",children:[],level:3},{value:"Code and doc contribution",id:"code-and-doc-contribution",children:[],level:3}],level:2},{value:"Join KubeDL as a maintainer",id:"join-kubedl-as-a-maintainer",children:[{value:"Some Requirements",id:"some-requirements",children:[],level:3}],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"contributing-to-kubedl"},"Contributing to KubeDL"),(0,i.kt)("p",null,"Welcome to KubeDL!\nWe encourage you to help out by reporting issues, improving documentation, fixing bugs, or adding new features.\nPlease also take a look at our code of conduct, which details how contributors are expected to conduct themselves as part of the KubeDL community."),(0,i.kt)("h2",{id:"developing-environment"},"Developing Environment"),(0,i.kt)("p",null,"As a contributor, if you want to make any contribution to KubeDL project, we should reach an agreement on the version of tools used in the development environment.\nHere are some dependents with specific version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Golang : v1.13+ (1.14 is best)"),(0,i.kt)("li",{parentName:"ul"},"Kubernetes: v1.12+")),(0,i.kt)("h2",{id:"developing-guide"},"Developing guide"),(0,i.kt)("h3",{id:"enable-dco"},"Enable DCO"),(0,i.kt)("p",null,"KubeDL has enabled ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apps/dco"},"DCO")," ( Developer Certificate of Origin).\nThus, you will need to sign-off your commits in your pull requests.\nJust add the ",(0,i.kt)("inlineCode",{parentName:"p"},"-s")," option in your ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," and that will sign-off your commit automatically:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git commit -s -m 'This is my commit message'\n")),(0,i.kt)("h3",{id:"code-structure"},"Code Structure"),(0,i.kt)("p",null,"KubeDL uses ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kubebuilder"},"KubeBuilder")," for scaffolding code."),(0,i.kt)("p",null,"KubeDL code base consists of several components:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"codestructure",src:n(227).Z,width:"760",height:"1164"})),(0,i.kt)("h3",{id:"how-to-build"},"How to Build"),(0,i.kt)("p",null,"There's a ",(0,i.kt)("inlineCode",{parentName:"p"},"Makefile")," in the root folder which describes the options to build and install. Here are some common ones:"),(0,i.kt)("h4",{id:"build-the-binary"},"Build the binary"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make manager\n")),(0,i.kt)("h4",{id:"run-controller-locally"},"Run controller locally"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make manager # This command generates a binary called manager\n./manager --enable-leader-election=false\n")),(0,i.kt)("h4",{id:"run-the-tests"},"Run the tests"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make test\n")),(0,i.kt)("h4",{id:"generate-manifests-crd-rbac-yaml-files-etc"},"Generate manifests: CRD, RBAC YAML files etc"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make manifests\n")),(0,i.kt)("h4",{id:"build-the-docker-image"},"Build the docker image"),(0,i.kt)("p",null,"Replace the image name to your own image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"export IMG=kubedl/kubedl:v0.3.0 && make docker-build\n")),(0,i.kt)("h4",{id:"push-the-image"},"Push the image"),(0,i.kt)("p",null,"Change the image name to your own image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker push kubedl/kubedl:v0.3.0\n")),(0,i.kt)("h4",{id:"generate-the-helm-chart"},"Generate the helm chart"),(0,i.kt)("p",null,"Generate the helm chart, the helm chart will be generated under ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubedl-io/kubedl/tree/master/helm/kubedl"},"helm/kubedl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make helm-chart\n")),(0,i.kt)("h3",{id:"add-a-new-crd"},"Add a new CRD"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"KubeBuilder")," to generate a CRD YAML file, for example, below command will generate a new kind ",(0,i.kt)("inlineCode",{parentName:"p"},"dog")," under api group ",(0,i.kt)("inlineCode",{parentName:"p"},"pet")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"kubebuilder create api --group pet --version v1alpha1 --kind dog\n")),(0,i.kt)("p",null,"Generate the zz_generated.deepcopy.go file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make generate\n")),(0,i.kt)("p",null,"Generate the zz_generated.defaults.go file"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go get k8s.io/code-generator/cmd/defaulter-gen\ncd apis/\ndefaulter-gen -O zz_generated.defaults -i ./pet/... -h ../hack/boilerplate.go.txt\n")),(0,i.kt)("h3",{id:"git-preparation-skip-if-you-are-familiar-with-git"},"Git Preparation (Skip if you are familiar with Git)"),(0,i.kt)("p",null,"To put forward a PR, we assume you have registered a GitHub ID.\nThen you could finish the preparation in the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Fork")," the repository you wish to work on. You just need to click the button Fork in right-left of project repository main page. Then you will end up with your repository in your GitHub username."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Clone")," your own repository to develop locally. Use ",(0,i.kt)("inlineCode",{parentName:"li"},"git clone https://github.com/<your-username>/kubedl.git")," to clone repository to your local machine. Then you can create new branches to finish the change you wish to make."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Set remote")," upstream to be ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/kubel-io/kubedl.git")," using the following two commands:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git remote add upstream https://github.com/kubedl-io/kubedl.git\ngit remote set-url --push upstream no-pushing\n")),(0,i.kt)("p",null,"Adding this, we can easily synchronize local branches with upstream branches."),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Create a branch")," to add a new feature or fix issues")),(0,i.kt)("p",null,"Update local working directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd <project>\ngit fetch upstream\ngit checkout master\ngit rebase upstream/master\n")),(0,i.kt)("p",null,"Create a new branch:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git checkout -b <new-branch>\n")),(0,i.kt)("p",null,"Make any change on the new-branch then build and test your codes."),(0,i.kt)("h2",{id:"engage-to-help-anything"},"Engage to help anything"),(0,i.kt)("h3",{id:"reporting-issues"},"Reporting issues"),(0,i.kt)("p",null,"We regard every user of KubeDL as a very kind contributor.\nAfter experiencing KubeDL, you may have some feedback for the project.\nThen feel free to open an issue."),(0,i.kt)("p",null,"There are lot of cases when you could open an issue:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bug report"),(0,i.kt)("li",{parentName:"ul"},"feature request"),(0,i.kt)("li",{parentName:"ul"},"performance issues"),(0,i.kt)("li",{parentName:"ul"},"feature proposal"),(0,i.kt)("li",{parentName:"ul"},"feature design"),(0,i.kt)("li",{parentName:"ul"},"help wanted"),(0,i.kt)("li",{parentName:"ul"},"doc incomplete"),(0,i.kt)("li",{parentName:"ul"},"test improvement"),(0,i.kt)("li",{parentName:"ul"},"any questions on project"),(0,i.kt)("li",{parentName:"ul"},"and so on")),(0,i.kt)("p",null,"Also we must remind that when filing a new issue, please remember to remove the sensitive data from your post.\nSensitive data could be password, secret key, network locations, private business data and so on."),(0,i.kt)("h3",{id:"code-and-doc-contribution"},"Code and doc contribution"),(0,i.kt)("p",null,"The KubeDL website repo is hosted at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/kubedl-io/website"},"https://github.com/kubedl-io/website"),"."),(0,i.kt)("p",null,"Every action to make KubeDL better is encouraged."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you find a typo, try to fix it!"),(0,i.kt)("li",{parentName:"ul"},"If you find a bug, try to fix it!"),(0,i.kt)("li",{parentName:"ul"},"If you find some redundant codes, try to remove them!"),(0,i.kt)("li",{parentName:"ul"},"If you find some test cases missing, try to add them!"),(0,i.kt)("li",{parentName:"ul"},"If you could enhance a feature, please DO NOT hesitate!"),(0,i.kt)("li",{parentName:"ul"},"If you find code implicit, try to add comments to make it clear!"),(0,i.kt)("li",{parentName:"ul"},"If you find code ugly, try to refactor that!"),(0,i.kt)("li",{parentName:"ul"},"If you can help to improve documents, it could not be better!"),(0,i.kt)("li",{parentName:"ul"},"If you find document incorrect, just do it and fix that!"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("p",null,"Although contributions via PR is an explicit way to help, we still call for any other ways."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"reply to other's issues if you could;"),(0,i.kt)("li",{parentName:"ul"},"help solve other user's problems;"),(0,i.kt)("li",{parentName:"ul"},"help review other's PR design;"),(0,i.kt)("li",{parentName:"ul"},"help review other's codes in PR;"),(0,i.kt)("li",{parentName:"ul"},"discuss about KubeDL to make things clearer;"),(0,i.kt)("li",{parentName:"ul"},"advocate KubeDL technology beyond GitHub;"),(0,i.kt)("li",{parentName:"ul"},"write blogs on KubeDL and so on.")),(0,i.kt)("p",null,"In a word, ",(0,i.kt)("strong",{parentName:"p"},"ANY HELP IS CONTRIBUTION"),"."),(0,i.kt)("h2",{id:"join-kubedl-as-a-maintainer"},"Join KubeDL as a maintainer"),(0,i.kt)("p",null,"You are welcome to join KubeDL maintainer team if you are willing to participate. Please contact one of us in the community."),(0,i.kt)("h3",{id:"some-requirements"},"Some Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have submitted multiple PRs to the community"),(0,i.kt)("li",{parentName:"ul"},"Be active in the community, may including but not limited",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Submitting or commenting on issues"),(0,i.kt)("li",{parentName:"ul"},"Contributing PRs to the community"),(0,i.kt)("li",{parentName:"ul"},"Reviewing PRs in the community")))))}d.isMDXComponent=!0},227:function(e,t,n){t.Z=n.p+"assets/images/codestructure-1080791687e1283f4738a7a1fcec0c40.jpg"}}]);