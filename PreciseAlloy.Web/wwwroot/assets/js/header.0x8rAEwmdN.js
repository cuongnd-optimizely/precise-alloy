import{j as e}from"./react-loader.0xvLkPUxwq.js";import{v as l,g as c}from"./functions.0xed5XM7m0.js";import{R as x}from"./require-css.0x9vBH_hGY.js";const z=({path:s,async:r,defer:a,inplace:t,type:i})=>{const o=/^https?:\/\//gi.test(s)?s:s.startsWith("vendors/")?l("/assets/")+s+".js":l("/assets/js/"+s+".js");return e.jsx("script",{type:i??"module",async:r,defer:a,src:o,"data-pl-require":!0,"data-pl-inplace":t})},n=s=>{const{height:r,iconPath:a,viewBoxHeight:t,viewBoxWidth:i,width:o}=s,h=c(s,"zzz-a-icon"),d=a.startsWith("#")?"/assets/images/icons.svg"+a:a;return e.jsx("svg",{className:h,"aria-hidden":"true",viewBox:`0 0 ${i} ${t}`,width:o||i,height:r||t,children:e.jsx("use",{xlinkHref:d})})},v=s=>{const r=c(s,"zzz-o-header"),{title:a,navlinks:t,logo:i}=s,o="/assets/images/logo.svg";return e.jsxs("header",{className:r,children:[e.jsx("div",{className:"zzz-container",children:e.jsxs("div",{className:"zzz-o-header__header-container",children:[e.jsx("a",{href:"#",children:e.jsx("img",{className:"zzz-o-header__logo",width:70,height:50,alt:"Precise Alloy's logo",src:(i==null?void 0:i.src)??o})}),e.jsx("span",{className:"zzz-o-header__title",children:a}),(t==null?void 0:t.links)&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"zzz-o-header__nav-mobile",children:e.jsxs("div",{className:"zzz-o-header__nav-toggle",children:[e.jsx("span",{}),e.jsx("span",{}),e.jsx("span",{})]})}),e.jsxs("ul",{className:"zzz-o-header__nav-list",children:[t.links.map(h=>e.jsx("li",{className:"zzz-o-header__nav-list__item",children:e.jsx("a",{href:h.url,children:h.text})},h.text)),e.jsx("li",{className:"theme-toggle",children:e.jsxs("a",{"aria-label":"Toggle Theme",children:[e.jsx(n,{iconPath:"#zzz-theme-light",viewBoxWidth:19,viewBoxHeight:19}),e.jsx(n,{iconPath:"#zzz-theme-moon",viewBoxWidth:19,viewBoxHeight:19})]})})]})]})]})}),e.jsx(z,{path:"header",defer:!0}),e.jsx(x,{path:"b-header"})]})};export{v as default};
//# sourceMappingURL=header.0x8rAEwmdN.js.map