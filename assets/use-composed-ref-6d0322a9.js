import{r as n}from"./react-c1a9316a.js";var o=function(t,r){if(typeof t=="function"){t(r);return}t.current=r},p=function(t,r){var e=n.useRef();return n.useCallback(function(u){t.current=u,e.current&&o(e.current,null),e.current=r,r&&o(r,u)},[r])};export{p as u};