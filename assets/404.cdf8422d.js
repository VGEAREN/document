import{g as c,u as l,h as r,i,j as o,P as m,r as g}from"./app.cb7bb131.js";import{S as h}from"./SkipLink.cc5d9d41.js";var L=c({name:"404",setup(){var a;const s=l(),e=r(),n=()=>{const t=e.value.routeLocales["404msg"];return t[Math.floor(Math.random()*t.length)]},{navigate:u}=i({to:(a=e.value.home)!=null?a:s.value});return()=>[o(h),o(g("CommonWrapper"),{sidebar:!1},()=>o("main",{class:"page not-found",id:"main-content"},[o(m),o("blockquote",n()),o("button",{class:"action-button",onClick:()=>{window.history.go(-1)}},e.value.routeLocales.back),o("button",{class:"action-button",onClick:()=>u()},e.value.routeLocales.home)]))]}});export{L as default};
