var dt=Object.defineProperty,ct=Object.defineProperties;var pt=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var ut=Object.prototype.hasOwnProperty,mt=Object.prototype.propertyIsEnumerable;var G=(n,i,d)=>i in n?dt(n,i,{enumerable:!0,configurable:!0,writable:!0,value:d}):n[i]=d,$=(n,i)=>{for(var d in i||(i={}))ut.call(i,d)&&G(n,d,i[d]);if(V)for(var d of V(i))mt.call(i,d)&&G(n,d,i[d]);return n},S=(n,i)=>ct(n,pt(i));var Z=(n,i,d)=>{if(!i.has(n))throw TypeError("Cannot "+d)};var x=(n,i,d)=>(Z(n,i,"read from private field"),d?d.call(n):i.get(n)),j=(n,i,d)=>{if(i.has(n))throw TypeError("Cannot add the same private member more than once");i instanceof WeakSet?i.add(n):i.set(n,d)},J=(n,i,d,w)=>(Z(n,i,"write to private field"),w?w.call(n,d):i.set(n,d),d);(function(n){typeof define=="function"&&define.amd?define(n):n()})(function(){"use strict";const n=t=>typeof t=="string",i=t=>typeof t=="object"&&t!==null,d=t=>typeof t=="function",w=Array.isArray,K=t=>{const e=new RegExp(`^${t}$`,"i");return["path","svg","use","g"].some(s=>e.test(s))},Q=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase(),U=(t,e)=>t==="dataset"?Object.entries(e).reduce((s,[o,r])=>S($({},s),{[o]:r===""?!0:r}),{}):e===""?!0:e,W=(t,e,s)=>{var o;if(!(s instanceof DocumentFragment))if(i(e))Object.assign(s[t],e);else if(d(e)){const r=t.toLowerCase();/^(on[a-z]+)$/i.test(r)&&(s[r]=e)}else t==="innerHTML"||t==="dangerouslySetInnerHTML"?n(e)&&(s.innerHTML=(o=e.html)!=null?o:e):t==="className"?s.setAttribute("class",e):s.setAttribute(t,e)},E=(t,e)=>{t!==void 0&&(w(t)?t.forEach(s=>E(s,e)):i(t)?e.append(t):e.append(document.createTextNode(t.toString())))},X=t=>K(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t),Y=t=>{var s;if(d(t.tag))return t.tag(t.attributes,t.children);const e=t.tag==="fragment"?new DocumentFragment:X(t.tag);return Object.entries((s=t.attributes)!=null?s:{}).forEach(([o,r])=>W(o,r,e)),t.children.forEach(o=>E(o,e)),e},_=(t,e,...s)=>Y({tag:t,attributes:e,children:s}),a=(t,e={},...s)=>_(t,e,...s),C=t=>[...new DOMParser().parseFromString(t,"text/html").body.children],m=(...t)=>t.reduce((e,s)=>(n(s)?e+=`${s} `:i(s)&&Object.entries(s).filter(([o,r])=>r).forEach(([o])=>{e+=`${o} `}),e),"").trim(),tt=(t,e=[])=>{(e!=null?e:[]).length>0&&Promise.all(e.map(s=>{if(n(s))return new CSSStyleSheet().replace(s);if(s instanceof CSSStyleSheet)return Promise.resolve(s);throw new Error("invalid css in styles")})).then(s=>{t.adoptedStyleSheets=s})},et=({onAttributeChanged:t,onConnected:e,onDisconnected:s,props:o={},styles:r=[],template:h})=>{var p,b,D;return D=class extends HTMLElement{constructor(){super();j(this,p,!1);j(this,b,new Proxy(this,{get(l,c){const g=Reflect.get(l,c);return d(g)?g.bind(l):U(c,g)}}));tt(this.attachShadow({mode:"open"}),r),Object.entries(o).filter(([l,c])=>c).forEach(([l,c])=>{var g,z;i(c)?Object.assign(this[l],Object.entries(c).filter(([y,v])=>v).reduce((y,[v,lt])=>{var P;return S($({},y),{[v]:(P=y[v])!=null?P:lt})},(g=this[l])!=null?g:{})):(z=this[l])!=null||(this[l]=c)}),this.update()}static get observedAttributes(){return[...Object.entries(o).map(([l,c])=>l==="dataset"?Object.keys(c).map(g=>`data-${Q(g)}`):l).flat()]}connectedCallback(){J(this,p,!0),e&&e(x(this,b))}disconnectedCallback(){s&&s(x(this,b))}attributeChangedCallback(l,c,g){x(this,p)&&c!==g&&t&&t(l,c,g,x(this,b))}update(){const l=h?h(x(this,b)):"",c=this.shadowRoot;n(l)?c.innerHTML=l:c.replaceChildren(...w(l)?l.flat():[l])}fire(l,c){this.dispatchEvent(new CustomEvent(l,c))}event(l,c,g,z){var v;const y=n(l)?(v=this.shadowRoot)==null?void 0:v.getElementById(`${l}`):l;if(!y)throw new Error(`element with id="${l}" not found`);y.addEventListener(c,g,z)}get root(){var l;return(l=this.shadowRoot)==null?void 0:l.getElementById("root")}},p=new WeakMap,b=new WeakMap,D},u=(t,e)=>{window.customElements.get(t)||customElements.define(t,et(e))},O=({dataset:t})=>m("block text-content py-2 px-4",t.classAppend);u("ui-accordion",{props:{dataset:{classAppend:void 0,header:""}},onAttributeChanged(t,e,s,{dataset:o,update:r,root:h,shadowRoot:p}){switch(t){case"data-class-append":h.className=O({dataset:o});break;case"data-header":{const b=p==null?void 0:p.getElementById("header");b&&(b.innerText=s);break}}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("style",{},"details[open] summary ~ * { animation: open 0.5s ease-in-out; } details svg { transition: transform 0.3s ease-in-out; } details[open] svg { transform: rotate(90deg); } details summary::-webkit-details-marker { display: none; } @keyframes open { 0% { opacity: 0; display: none; } 1% { opacity: 0; display: block; } 100% { opacity: 1; display: block; } }"),a("details",{id:"root",className:O({dataset:t})},a("summary",{className:"block py-1 cursor-pointer"},C('<svg class="w-4 h-4 float-left mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 23 23" xmlns="http://www.w3.org/2000/svg"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>'),a("span",{id:"header"},t.header)),a("div",{},a("slot")))]});const A=({dataset:t})=>m("block rounded-lg px-2 py-1",{"bg-canvas border border-contrast-200":t.variant==="primary","bg-transparent":t.variant==="secondary"||t.variant==="tertiary"},t.append),M=(t,{dataset:e})=>{const s=["block","border-b","border-contrast-200"],o=["block","mb-2","rounded-lg","bg-canvas","border","border-contrast-200"],r=["block","border-b","border-contrast-800"];[...t].forEach((h,p)=>{h.classList.remove(...s,...o,...r),e.variant==="secondary"?h.classList.add(...o):p<t.length-1&&h.classList.add(...e.variant==="tertiary"?r:s)})};u("ui-accordion-group",{props:{dataset:{append:void 0,variant:"primary"}},onAttributeChanged(t,e,s,{children:o,dataset:r,root:h}){switch(t){case"data-append":h.className=A({dataset:r});break;case"data-variant":h.className=A({dataset:r}),M(o,{dataset:r});break}},onConnected:({dataset:t,children:e})=>{M(e,{dataset:t})},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("div",{id:"root",className:A({dataset:t})},a("slot"))]});const T=({dataset:t})=>m("flex justify-between items-center py-2 px-4 text-sm border rounded-xl shadow-sm",t.variant?{"text-primary-content bg-primary-backdrop border-primary-focus":t.variant==="info","text-error-content bg-error-backdrop border-error-focus":t.variant==="error","text-success-content bg-success-backdrop border-success-focus":t.variant==="success","text-contrast-50 bg-contrast-800 border-contrast-700":t.variant==="contrast"}:"text-content bg-contrast-50 border-contrast-200",t.append);u("ui-alert",{props:{dataset:{append:void 0,variant:void 0}},onAttributeChanged(t,e,s,{dataset:o,root:r}){r.className=T({dataset:o})},template:({dataset:t,fire:e,remove:s})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("div",{id:"root",className:T({dataset:t})},a("span",{className:"text-sm"},a("slot")),a("button",{id:"button",type:"button",dataset:{collapseToggle:"alert"},className:"inline-flex items-center justify-center ml-2 -mr-2 p-0.5 h-8 w-8 text-current",ariaLabel:"close",onclick:()=>{e("close"),s()}},a("span",{className:"sr-only"},"close"),C('<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>')))]});const R=({dataset:t})=>m("overflow-hidden border border-white/30",{"rounded-full":t.style==="circle","rounded-lg":t.style==="rounded"},t.append);u("ui-avatar",{props:{dataset:{append:void 0,style:"circle"}},onAttributeChanged(t,e,s,{dataset:o,root:r}){r.className=R({dataset:o})},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("style",{},"::slotted(:first-child) { display: flex; justify-content: center; align-items: center; }"),a("div",{id:"root",className:R({dataset:t})},a("slot"))]});const H=({dataset:t})=>m("inline-flex items-center flex-wrap",t.append);u("ui-avatar-group",{props:{dataset:{append:void 0}},onAttributeChanged(t,e,s,{dataset:o,root:r}){r.className=H({dataset:o})},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("div",{id:"root",className:H({dataset:t})},a("slot"))]});const B=({dataset:t})=>m("inline-flex flex-wrap items-center justify-center text-center whitespace-nowrap align-middle font-semibold py-0.5 px-2",t.pill?"rounded-full":"rounded-lg",{"text-xs":t.size==="xs","text-sm":t.size==="sm","text-base":t.size==="md","text-lg":t.size==="lg","text-xl":t.size==="xl"},t.variant?{"text-primary-contrast bg-primary border-primary-focus":t.variant==="info","text-error-contrast bg-error border-error-focus":t.variant==="error","text-success-contrast bg-success border-success-focus":t.variant==="success","text-contrast-50 bg-contrast-800 border-contrast-700":t.variant==="contrast"}:"text-content bg-contrast-50 border-contrast-200",t.append);u("ui-badge",{props:{dataset:{append:void 0,pill:void 0,size:"md",variant:void 0}},onAttributeChanged:(t,e,s,{dataset:o,root:r})=>{switch(t){case"data-append":case"data-pill":case"data-size":case"data-variant":r.className=B({dataset:o});break}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("span",{id:"root",className:B({dataset:t})},a("slot"))]});const at=({dataset:t})=>m("flex justify-center rounded-lg shadow-lg bg-white dark:bg-canvas border border-contrast-200 max-w-sm overflow-hidden",t.horizontal?"flex-row":"flex-col",t.append);u("ui-card",{props:{dataset:{append:void 0,horizontal:void 0}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("div",{className:at({dataset:t})},a("slot"))]});const st=({dataset:t})=>m("flex flex-col gap-2 text-base text-content p-4",t.append);u("ui-card-body",{props:{dataset:{append:void 0}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("section",{className:st({dataset:t})},a("slot"))]});const rt=({dataset:t})=>m("inline-flex gap-2 w-full",t.append);u("ui-card-footer",{props:{dataset:{append:void 0}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("footer",{className:rt({dataset:t})},a("slot"))]});const ot=({dataset:t})=>m("align-middle text-content text-xl font-medium",t.append);u("ui-card-header",{props:{dataset:{append:void 0}},template:({dataset:t,classList:e})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("header",{className:ot({dataset:t})},a("slot"))]});const nt=({dataset:t})=>m("w-auto h-full object-cover",t.append);u("ui-card-image",{props:{dataset:{append:void 0,url:void 0}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("img",{className:nt({dataset:t}),src:t.url,alt:""},a("slot"))]});const it=({dataset:t})=>m("block text-sm text-content-tertiary",t.append);u("ui-card-meta",{props:{dataset:{append:void 0}},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("span",{className:it({dataset:t})},a("slot"))]});let f=0,L;const k=(t,e,s,o=8e3)=>{f=s,f>=t.length&&(f=0),f<0&&(f=t.length-1);for(let r=0;r<t.length;r++)t[r].classList.remove("opacity-100"),t[r].classList.add("opacity-0");for(let r=0;r<e.length;r++)e[r].classList.remove("border-white"),e[r].classList.add("border-white/60");t[f].classList.replace("opacity-0","opacity-100"),e[f].classList.replace("border-white/60","border-white"),o!==0&&(L&&clearInterval(L),L=setTimeout(()=>k(t,e,f+1),o))};u("ui-carousel",{props:{},onConnected:({children:t,shadowRoot:e})=>{k(t,e.querySelectorAll("li"),f)},template:({dataset:t,children:e,shadowRoot:s})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("style",{},".carousel { -ms-overflow-style: none; scrollbar-width: none; } .carousel::-webkit-scrollbar { display: none; }"),a("div",{className:"relative w-full"},a("div",{id:"root",className:"carousel snap-x snap-mandatory scroll-smooth overflow-x-auto flex relative w-full"},a("slot")),a("button",{className:"absolute inset-y-0 left-0 w-12 text-white",onclick:()=>k(e,s.querySelectorAll("li"),f-1)},"\u276E"),a("button",{className:"absolute inset-y-0 right-0 w-12 text-white",onclick:()=>k(e,s.querySelectorAll("li"),f+1)},"\u276F"),a("ol",{className:"absolute inset-x-0 bottom-0 flex gap-2 justify-center pb-4"},[...Array(e.length)].map((o,r)=>a("li",{className:"transition duration-1000 border-b-4 w-8 border-white/60 hover:border-white",onclick:()=>{k(e,s.querySelectorAll("li"),r)}}))))]}),u("ui-carousel-item",{props:{dataset:{src:""}},onConnected:({classList:t})=>{t.add("absolute","first:relative","w-full","transition-opacity","duration-1000","ease-in")},template:({dataset:t,shadowRoot:e})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("img",{src:t.src,className:"block relative w-full",alt:""}),a("div",{className:"hidden md:block absolute inset-x-0 bottom-0 text-center pb-8"},a("slot"))]});const q=({dataset:t})=>m("block text-content bg-canvas border border-contrast-200 rounded-lg p-5",t.append);u("ui-box",{props:{dataset:{append:void 0}},onAttributeChanged(t,e,s,{dataset:o,root:r}){r.className=q({dataset:o})},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("div",{id:"root",className:q({dataset:t})},a("slot"))]});const F=({dataset:t})=>C(`
  <svg
    class="${m("absolute animate-spin",{"h-3 w-3":t.size==="xs","h-4 w-4":t.size==="sm","h-5 w-5":t.size==="md"||!t.size,"h-6 w-6":t.size==="lg","h-7 w-7":t.size==="xl"},t.outline?{"text-primary":t.variant==="primary","text-error":t.variant==="error","text-success":t.variant==="success"}:{"text-primary-contrast":t.variant==="primary","text-error-contrast":t.variant==="error","text-success-contrast":t.variant==="success"})}"
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
`),N=({dataset:t})=>m("inline-flex flex-wrap items-center justify-center text-center font-semibold border-transparent gap-2",!t.group&&"shadow-sm",t.group&&!t.circle?{"-mx-px":t.outline,"rounded-l-lg":t.group==="first","rounded-r-lg":t.group==="last"}:t.rounded?"rounded-full":"rounded-lg",t.block&&"w-full",t.circle?{"rounded-full p-0":!0,"h-8 w-8":t.size==="xs","h-10 w-10":t.size==="sm","h-12 w-12":t.size==="md","h-14 w-14":t.size==="lg","h-16 w-16":t.size==="xl"}:t.outline&&!t.disabled?{"text-xs px-4 py-0.5 mt-0.5":t.size==="xs","text-sm px-4 py-1.5":t.size==="sm","text-base px-5 py-2.5":t.size==="md","text-lg px-5 py-3.5":t.size==="lg","text-xl px-6 py-3.5":t.size==="xl"}:{"text-xs px-4 py-1":t.size==="xs","text-sm px-4 py-2":t.size==="sm","text-base px-5 py-3":t.size==="md","text-lg px-5 py-4":t.size==="lg","text-xl px-6 py-4":t.size==="xl"},t.disabled?`bg-neutral-500 border-opacity-0 bg-opacity-20 ${t.loading?"text-transparent":"text-neutral-600/25"}`:t.outline?{"bg-transparent border-2":!0,"border-primary hover:ring-4 focus:ring-4 ring-primary-focus":t.variant==="primary","border-error hover:ring-4 focus:ring-4 ring-error-focus":t.variant==="error","border-success hover:ring-4 focus:ring-4 ring-success-focus":t.variant==="success","text-transparent":t.loading,[`text-${t.variant}`]:!t.loading}:{"border-none":!0,"bg-primary hover:ring-4 focus:ring-4 ring-primary-focus":t.variant==="primary","bg-error hover:ring-4 focus:ring-4 ring-error-focus":t.variant==="error","bg-success hover:ring-4 focus:ring-4 ring-success-focus":t.variant==="success","text-transparent":t.loading,[`text-${t.variant}-contrast`]:!t.loading},t.append);u("ui-button",{props:{dataset:{append:void 0,block:void 0,circle:void 0,disabled:void 0,group:void 0,loading:void 0,outline:void 0,rounded:void 0,size:"md",type:"button",variant:"primary"}},onAttributeChanged:(t,e,s,{classList:o,root:r,update:h,dataset:p})=>{var b;switch(t){case"data-append":case"data-circle":case"data-group":case"data-outline":case"data-rounded":case"data-size":case"data-variant":r.className=N({dataset:p});break;case"data-loading":s===null?(b=r.querySelector("svg"))==null||b.remove():r.prepend(F({dataset:p})[0]),r.className=N({dataset:p});break;case"data-disabled":r.disabled=s!==null,r.className=N({dataset:p});break;case"data-block":o[p.block?"add":"remove"]("w-full"),r.className=N({dataset:p});break;default:h()}},onConnected({classList:t,dataset:e}){t[e.block?"add":"remove"]("w-full")},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"}),a("button",{id:"root",type:t.type,disabled:t.disabled,className:N({dataset:t})},t.loading&&F({dataset:t}),a("slot"))]});const I=({dataset:t})=>m("inline-flex rounded-md shadow-sm",t.append);u("ui-button-group",{props:{dataset:{append:void 0}},onAttributeChanged(t,e,s,{dataset:o,root:r}){r.className=I({dataset:o})},onConnected({children:t}){for(let e=0;e<(t!=null?t:[]).length;e++)t[e].setAttribute("data-group",e===0?"first":e===t.length-1?"last":"")},template:({dataset:t})=>[a("link",{rel:"stylesheet",href:"/tailwind.css"},a("div",{id:"root",className:I({dataset:t})},a("slot")))]})});
