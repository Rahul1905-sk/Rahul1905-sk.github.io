import{r as $}from"./react-c1a9316a.js";import{b as O}from"./react-activity-calendar-bb914c0f.js";var m={};Object.defineProperty(m,"__esModule",{value:!0});var n=$,p=O;function h(e){return e&&e.__esModule?e:{default:e}}var o=h(n),R=h(p);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var r=arguments[a];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},l.apply(this,arguments)}const M="https://github-contributions-api.jogruber.de/v4/",P={light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["#161b22","#0e4429","#006d32","#26a641","#39d353"]},S=(e,a)=>{if(typeof a!="function")return e;const r=a(e);if(!Array.isArray(r))throw new Error("Passed function transformData must return a list of Day objects.");if(r.length>0){const t=r[0];if(typeof t.count!="number"||t.count<0)throw new Error(`Required property "count: number" missing or invalid. Got: ${t.count}`);if(!/\d{4}-\d{2}-\d{2}/.test(t.date))throw new Error(`Required property "date: YYYY-MM-DD" missing or invalid. Got: ${t.date}`);if(typeof t.level!="number"||t.level<0||t.level>4)throw new Error(`Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${t.level}.`)}return r};async function A(e,a){const r=await fetch(`${M}${e}?y=${a}`),t=await r.json();if(!r.ok)throw new Error(t.error);return t}const G=e=>{var a;let{username:r,year:t="last",labels:v,transformData:y,transformTotalCount:g=!0,...s}=e;const[u,E]=n.useState(null),[_,f]=n.useState(!1),[w,d]=n.useState(null),b=n.useCallback(()=>{f(!0),d(null),A(r,t).then(i=>{let{contributions:c}=i;return E(c)}).catch(d).finally(()=>f(!1))},[r,t]);if(n.useEffect(b,[b]),w)return o.default.createElement("div",null,o.default.createElement("i",null,"Unable to fetch contribution data. See console."));if(_||!u)return o.default.createElement(p.Skeleton,l({},s,{loading:!0}));const D=(a=s.theme)!==null&&a!==void 0?a:P,j={totalCount:`{{count}} contributions in ${t==="last"?"the last year":"{{year}}"}`},C=g?void 0:u.reduce((i,c)=>i+c.count,0);return o.default.createElement(R.default,l({data:S(u,y),theme:D,labels:Object.assign({},j,v),totalCount:C},s))};var q=m.default=G;export{q as _};