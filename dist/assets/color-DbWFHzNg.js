import{i,ad as C,s as l,ao as n,as as g,aD as r,aE as f,aF as v,aG as b}from"./index-nzVM3_sH.js";const x=i({rounded:{type:[Boolean,Number,String],default:void 0},tile:Boolean},"rounded");function m(e){let o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:C();return{roundedClasses:l(()=>{const t=n(e)?e.value:e.rounded,s=n(e)?e.value:e.tile,u=[];if(t===!0||t==="")u.push(`${o}--rounded`);else if(typeof t=="string"||t===0)for(const c of String(t).split(" "))u.push(`rounded-${c}`);else(s||t===!1)&&u.push("rounded-0");return u})}}function d(e){return g(()=>{const o=[],a={};if(e.value.background)if(r(e.value.background)){if(a.backgroundColor=e.value.background,!e.value.text&&f(e.value.background)){const t=v(e.value.background);if(t.a==null||t.a===1){const s=b(t);a.color=s,a.caretColor=s}}}else o.push(`bg-${e.value.background}`);return e.value.text&&(r(e.value.text)?(a.color=e.value.text,a.caretColor=e.value.text):o.push(`text-${e.value.text}`)),{colorClasses:o,colorStyles:a}})}function y(e,o){const a=l(()=>({text:n(e)?e.value:o?e[o]:null})),{colorClasses:t,colorStyles:s}=d(a);return{textColorClasses:t,textColorStyles:s}}function S(e,o){const a=l(()=>({background:n(e)?e.value:o?e[o]:null})),{colorClasses:t,colorStyles:s}=d(a);return{backgroundColorClasses:t,backgroundColorStyles:s}}export{S as a,y as b,d as c,x as m,m as u};
