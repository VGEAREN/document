import{d as c,u as l,b as r,e as m,h as o,P as i,r as p}from"./app.78104469.js";import{S as g}from"./SkipLink.9d3d9e83.js";var L=c({name:"404",setup(){var a;const n=l(),e=r(),s=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:u}=m({to:(a=e.value.home)!=null?a:n.value});return()=>[o(g),o(p("CommonWrapper"),{sidebar:!1},()=>o("main",{class:"page not-found",id:"main-content"},[o(i),o("blockquote",s()),o("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),o("button",{class:"action-button",onClick:()=>u()},e.value.routeLocales.home)]))]}});export{L as default};
