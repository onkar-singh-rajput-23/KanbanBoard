(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,a,t){e.exports=t.p+"static/media/Done.ee99e204.svg"},function(e,a,t){e.exports=t.p+"static/media/urgent.4eca8404.svg"},function(e,a,t){e.exports=t.p+"static/media/high.10cfcedf.svg"},function(e,a,t){e.exports=t.p+"static/media/mediam.861ebea5.svg"},function(e,a,t){e.exports=t.p+"static/media/low.2ad281d3.svg"},function(e,a,t){e.exports=t.p+"static/media/No-priority.0d2cbadc.svg"},function(e,a,t){e.exports=t.p+"static/media/To-do.991aa8ff.svg"},function(e,a,t){e.exports=t.p+"static/media/in-progress.6f7f6c8e.svg"},function(e,a,t){e.exports=t.p+"static/media/Cancelled.15c84b14.svg"},function(e,a,t){e.exports=t.p+"static/media/Backlog.47973b09.svg"},,,function(e,a,t){e.exports=t.p+"static/media/feature.b773d848.png"},function(e,a,t){e.exports=t.p+"static/media/add.a19048c9.svg"},function(e,a,t){e.exports=t.p+"static/media/dot.6c272d9d.svg"},function(e,a,t){e.exports=t.p+"static/media/Display.b96d92a3.svg"},function(e,a,t){e.exports=t.p+"static/media/down.990a9026.svg"},function(e,a,t){e.exports=t(31)},,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),i=t.n(c),r=(t(27),t(28),t(29),t(2)),s=t.n(r),o=t(3),m=t.n(o),d=t(4),u=t.n(d),g=t(5),p=t.n(g),E=t(6),b=t.n(E),v=t(13),f=t.n(v),N=t(7),y=t.n(N),h=t(8),k=t.n(h),w=t(1),x=t.n(w),C=t(9),D=t.n(C),I=t(10),j=t.n(I);var O=e=>{let{data:a}=e;const t={4:{label:"Urgent",img:s.a},3:{label:"High",img:m.a},2:{label:"Medium",img:u.a},1:{label:"Low",img:p.a},0:{label:"No priority",img:b.a}},n={Todo:{label:"ToDo",img:y.a},"In progress":{label:"In Progress",img:k.a},Done:{label:"Done",img:x.a},Cancelled:{label:"Cancelled",img:D.a},Backlog:{label:"Backlog",img:j.a}},c=t[a.priority]||t[0],i=n[a.status]||{label:"No Status",img:x.a};return l.a.createElement("div",{className:"kanban-card"},l.a.createElement("div",{className:"card-header"},l.a.createElement("span",{className:"card-id"},a.id)),l.a.createElement("div",{className:"container"},l.a.createElement("span",null,l.a.createElement("img",{src:i.img,alt:`${i.label} Icon`,className:"title-image"})),l.a.createElement("span",null,l.a.createElement("h4",{className:"card-title"},a.title))),l.a.createElement("div",{className:"card-footer"},l.a.createElement("div",{className:"status-badge"},l.a.createElement("img",{src:c.img,alt:`${c.label} Icon`,className:"priority-image"})),l.a.createElement("div",{className:"card-tag"},l.a.createElement("span",null,l.a.createElement("img",{src:f.a,alt:"icon",className:"feature-image"})),l.a.createElement("span",null,a.tag))))},S=(t(30),t(14)),T=t.n(S),B=t(15),P=t.n(B);const L={4:"Urgent",3:"High",2:"mediam",1:"low",0:"No-Periority"},F={4:{label:"Urgent",img:s.a},3:{label:"High",img:m.a},2:{label:"Medium",img:u.a},1:{label:"Low",img:p.a},0:{label:"No priority",img:b.a},Todo:{label:"ToDo",img:y.a},"In progress":{label:"In Progress",img:k.a},Done:{label:"Done",img:x.a},Cancelled:{label:"Cancelled",img:D.a},Backlog:{label:"Backlog",img:j.a}};var M=e=>{let{title:a,items:t}=e;const n=F[a]||F[0];return l.a.createElement("div",{className:"kanban-column"},l.a.createElement("div",{className:"column-header"},l.a.createElement("div",{className:"title-header"},l.a.createElement("img",{src:n.img,alt:`${n.label} Icon`,className:"priority-image"}),l.a.createElement("h2",null,isNaN(a)?a:L[Number(a)]),l.a.createElement("span",{className:"task-count"},t.length)),l.a.createElement("div",{className:"add-task-icons"},l.a.createElement("img",{src:T.a,alt:"Add Task",className:"task-icon"}),l.a.createElement("img",{src:P.a,alt:"More Options",className:"task-icon"}))),t.map(e=>l.a.createElement("div",{className:"card-with-icons",key:e.id},l.a.createElement(O,{data:e}))))};var U=t(16),H=t.n(U),$=t(17),J=t.n($);var R=()=>{const[e,a]=Object(n.useState)([]),[t,c]=Object(n.useState)("status"),[i,r]=Object(n.useState)("priority"),[s,o]=Object(n.useState)(!1),m=Object(n.useRef)(null);Object(n.useEffect)(()=>{(async()=>{const e=await(async()=>{try{const a=await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");if(!a.ok)throw new Error("Failed to fetch data");const{tickets:t}=await a.json();return t}catch(e){return console.error("Error fetching data:",e),[]}})();a(e)})()},[]),Object(n.useEffect)(()=>{const e=e=>{m.current&&!m.current.contains(e.target)&&o(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const d=e=>[...e].sort((e,a)=>"priority"===i?a.priority-e.priority:"title"===i?e.title.localeCompare(a.title):0),u=e.reduce((e,a)=>{const n="status"===t?a.status:"user"===t?a.userId:a.priority;return e[n]=e[n]||[],e[n].push(a),e},{});return l.a.createElement("div",null,l.a.createElement("div",{className:"header"},l.a.createElement("button",{className:"display-button",onClick:()=>{o(!s)}},l.a.createElement("img",{src:H.a,alt:"Display"}),"Display",l.a.createElement("img",{src:J.a,alt:"Down"})),s&&l.a.createElement("div",{className:"floating-card",ref:m},l.a.createElement("div",{className:"dropdown-container"},l.a.createElement("label",null,"Group by:",l.a.createElement("select",{onChange:e=>c(e.target.value),value:t},l.a.createElement("option",{value:"status"},"Status"),l.a.createElement("option",{value:"user"},"User"),l.a.createElement("option",{value:"priority"},"Priority")))),l.a.createElement("div",{className:"dropdown-container"},l.a.createElement("label",null,"Sort by:",l.a.createElement("select",{onChange:e=>r(e.target.value),value:i},l.a.createElement("option",{value:"priority"},"Priority"),l.a.createElement("option",{value:"title"},"Title")))))),l.a.createElement("div",{className:"kanban-board"},Object.keys(u).map(e=>l.a.createElement(M,{key:e,title:e,items:d(u[e])}))))};var q=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,32)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:c,getTTFB:i}=a;t(e),n(e),l(e),c(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(R,null))),q()}],[[18,1,2]]]);
//# sourceMappingURL=main.7ee7403f.chunk.js.map