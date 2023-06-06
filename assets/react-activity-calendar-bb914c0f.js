import{c as de}from"./chroma-js-c1bd14d8.js";import{r as ie}from"./date-fns-0c9d5872.js";import{r as ce}from"./react-c1a9316a.js";var N={};Object.defineProperty(N,"__esModule",{value:!0});var ue=de,s=ie,S=ce;function Z(e){return e&&e.__esModule?e:{default:e}}var L=Z(ue),l=Z(S);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},O.apply(this,arguments)}const m="react-activity-calendar",p=5,H=2,J=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],V=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],fe={months:J,weekdays:V,totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}};function me(){const[e,n]=S.useState("light"),t=a=>n(a.matches?"dark":"light");return S.useEffect(()=>{const a=window.matchMedia("(prefers-color-scheme: dark)");return n(a.matches?"dark":"light"),a.addEventListener("change",t),()=>{a.removeEventListener("change",t)}},[]),e}const ge="(prefers-reduced-motion: reduce)";function he(){const[e,n]=S.useState(!0);return S.useEffect(()=>{const t=window.matchMedia(ge);n(t.matches);const a=r=>{n(r.matches)};return t.addEventListener("change",a),()=>{t.removeEventListener("change",a)}},[]),e}function ye(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(e.length===0)return[];const t=ve(e),a=s.parseISO(t[0].date),r=s.getDay(a)===n?a:s.subWeeks(s.nextDay(a,n),1),f=[...Array(s.differenceInCalendarDays(a,r)).fill(void 0),...t];return Array(Math.ceil(f.length/7)).fill(void 0).map((_,g)=>f.slice(g*7,g*7+7))}function ve(e){const n=e.reduce((t,a)=>(t.set(a.date,a),t),new Map);return s.eachDayOfInterval({start:s.parseISO(e[0].date),end:s.parseISO(e[e.length-1].date)}).map(t=>{const a=s.formatISO(t,{representation:"date"});return n.has(a)?n.get(a):{date:a,count:0,level:0}})}function _e(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:J;return e.reduce((t,a,r)=>{const f=a.find(C=>C!==void 0);if(!f)throw new Error(`Unexpected error: Week is empty: [${a}].`);const _=n[s.getMonth(s.parseISO(f.date))],g=t[t.length-1];return r===0||g.text!==_?[...t,{x:r,y:0,text:_}]:t},[]).filter((t,a,r)=>a===0?r[1]&&r[1].x-t.x>H:!0)}function k(e,n){return n?`${m}__${e} ${n}`:`${m}__${e}`}function pe(){const e=new Date().getFullYear();return s.eachDayOfInterval({start:new Date(e,0,1),end:new Date(e,11,31)}).map(t=>({date:s.formatISO(t,{representation:"date"}),count:0,level:0}))}const D=Y({light:["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],dark:["hsl(0, 0%, 20%)","hsl(0, 0%, 92%)"]});function Y(e){if(e){var n,t;return Ee(e),e.light=(n=e.light)!==null&&n!==void 0?n:D.light,e.dark=(t=e.dark)!==null&&t!==void 0?t:D.dark,{light:q(e.light)?e.light:U(e.light),dark:q(e.dark)?e.dark:U(e.dark)}}return D}function Ee(e){if(typeof e!="object"||e.light===void 0&&e.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${p} colors respectively.`);if(e.light){const{length:n}=e.light;if(n!==2&&n!==p)throw new Error(`theme.light must contain exactly 2 or ${p} colors, ${n} passed.`)}if(e.dark){const{length:n}=e.dark;if(n!==2&&n!==p)throw new Error(`theme.dark must contain exactly 2 or ${p} colors, ${n} passed.`)}}function q(e){const n=e.find(t=>!L.default.valid(t));if(n)throw new Error(`Invalid color "${n}" passed. All CSS color formats are accepted.`);return e.length===p}function U(e){return L.default.scale(e).mode("lch").colors(p)}function ke(e,n){n===void 0&&(n={});var t=n.insertAt;if(!(!e||typeof document>"u")){var a=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&a.firstChild?a.insertBefore(r,a.firstChild):a.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}var Se=`.styles-module_container__Zq3Ln rect {
  stroke: rgba(0, 0, 0, 0.08);
  stroke-width: 1px;
  shape-rendering: geometricPrecision;
}

@media (prefers-color-scheme: dark) {
  .styles-module_container__Zq3Ln rect {
    stroke: rgba(255, 255, 255, 0.04);
  }
}

.styles-module_calendar__-Ozc6 {
  display: block;
  max-width: 100%;
  height: auto;
  overflow: visible;
}

.styles-module_calendar__-Ozc6 text {
  fill: currentColor;
}

.styles-module_calendar__-Ozc6 [data-level='0'] {
  fill: var(--react-activity-calendar-level-0);
}

.styles-module_calendar__-Ozc6 [data-level='1'] {
  fill: var(--react-activity-calendar-level-1);
}

.styles-module_calendar__-Ozc6 [data-level='2'] {
  fill: var(--react-activity-calendar-level-2);
}

.styles-module_calendar__-Ozc6 [data-level='3'] {
  fill: var(--react-activity-calendar-level-3);
}

.styles-module_calendar__-Ozc6 [data-level='4'] {
  fill: var(--react-activity-calendar-level-4);
}

.styles-module_footer__IMos1 {
  display: flex;
}

.styles-module_legendColors__oZihX {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.2em;
}

@keyframes styles-module_loadingAnimation__Vul35 {
  0% {
    fill: var(--react-activity-calendar-loading);
  }
  50% {
    fill: var(--react-activity-calendar-loading-active);
  }
  100% {
    fill: var(--react-activity-calendar-loading);
  }
}
`,w={container:"styles-module_container__Zq3Ln",calendar:"styles-module_calendar__-Ozc6",footer:"styles-module_footer__IMos1",legendColors:"styles-module_legendColors__oZihX",loadingAnimation:"styles-module_loadingAnimation__Vul35"};ke(Se);const Q=e=>{var W;let{data:n,blockMargin:t=4,blockRadius:a=2,blockSize:r=12,colorScheme:f=void 0,eventHandlers:_={},fontSize:g=14,hideColorLegend:C=!1,hideMonthLabels:A=!1,hideTotalCount:T=!1,labels:X=void 0,loading:E=!1,renderBlock:I=void 0,showWeekdayLabels:z=!1,style:K={},theme:G=void 0,totalCount:B=void 0,weekStart:F=0}=e;const ee=Y(G),te=me(),h=ee[f??te],j=!he();if(E&&(n=pe()),n.length===0)return null;const P=s.getYear(s.parseISO((W=n[0])==null?void 0:W.date)),x=ye(n,F),u=Object.assign({},fe,X),M=A?0:g+2*t;function ne(){return{width:x.length*(r+t)-t,height:M+(r+t)*7-t}}function ae(c){return Object.keys(_).reduce((d,o)=>({...d,[o]:i=>{var y;return(y=_[o])==null?void 0:y.call(_,i)(c)}}),{})}function re(){return x.map((c,d)=>c.map((o,i)=>{if(!o)return null;const y=E&&j?{animation:`${w.loadingAnimation} 1.75s ease-in-out infinite`,animationDelay:`${d*20+i*20}ms`}:void 0,v=l.default.createElement("rect",O({},ae(o),{x:0,y:M+(r+t)*i,width:r,height:r,rx:a,ry:a,"data-date":o.date,"data-level":o.level,style:y}));return l.default.createElement(S.Fragment,{key:o.date},I?I(v,o):v)})).map((c,d)=>l.default.createElement("g",{key:d,transform:`translate(${(r+t)*d}, 0)`},c))}function le(){var i,y;var c,d;if(T&&C)return null;const o=typeof B=="number"?B:n.reduce((v,$)=>v+$.count,0);return l.default.createElement("footer",{className:k("footer",w.footer),style:{marginTop:2*t,fontSize:g}},E&&l.default.createElement("div",null," "),!E&&!T&&l.default.createElement("div",{className:k("count")},u.totalCount?u.totalCount.replace("{{count}}",String(o)).replace("{{year}}",String(P)):`${o} activities in ${P}`),!E&&!C&&l.default.createElement("div",{className:k("legend-colors",w.legendColors)},l.default.createElement("span",{style:{marginRight:"0.4em"}},(c=(i=u==null?void 0:u.legend)==null?void 0:i.less)!==null&&c!==void 0?c:"Less"),Array(p).fill(void 0).map((v,$)=>l.default.createElement("svg",{width:r,height:r,key:$},l.default.createElement("rect",{width:r,height:r,fill:h[$],rx:a,ry:a}))),l.default.createElement("span",{style:{marginLeft:"0.4em"}},(d=(y=u==null?void 0:u.legend)==null?void 0:y.more)!==null&&d!==void 0?d:"More")))}function oe(){const c={fontSize:g};return!z&&A?null:l.default.createElement(l.default.Fragment,null,z&&l.default.createElement("g",{className:k("legend-weekday"),style:c},x[0].map((d,o)=>{if(o%2===0)return null;const i=(o+F)%7;return l.default.createElement("text",{x:-2*t,y:M+(g/2+t)+(r+t)*o,textAnchor:"end",key:o},u.weekdays?u.weekdays[i]:V[i])})),!A&&l.default.createElement("g",{className:k("legend-month"),style:c},_e(x,u.months).map((d,o,i)=>{let{text:y,x:v}=d;return o===0&&i[1]&&i[1].x-v<=H?null:l.default.createElement("text",{x:(r+t)*v,dominantBaseline:"hanging",key:v},y)})))}const{width:b,height:R}=ne(),se={maxWidth:b,[`--${m}-level-0`]:h[0],[`--${m}-level-1`]:h[1],[`--${m}-level-2`]:h[2],[`--${m}-level-3`]:h[3],[`--${m}-level-4`]:h[4],...j&&{[`--${m}-loading`]:h[0],[`--${m}-loading-active`]:f==="light"?L.default(h[0]).darken(.3).hex():L.default(h[0]).brighten(.25).hex()}};return l.default.createElement("article",{className:`${m} ${w.container}`,style:{...K,...se}},l.default.createElement("svg",{width:b,height:R,viewBox:`0 0 ${b} ${R}`,className:k("calendar",w.calendar)},!E&&oe(),re()),le())},we=e=>l.default.createElement(Q,O({data:[]},e));N.Skeleton=we;N.default=Q;export{N as b};
