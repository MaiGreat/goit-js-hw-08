!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),v=Object.prototype.toString,g=Math.max,m=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,i,u,a,f,l,c=0,d=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function x(e){return c=e,f=setTimeout(w,t),d?b(e):a}function h(e){var n=e-l;return void 0===l||n>=t||n<0||s&&e-c>=u}function w(){var e=p();if(h(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-l);return s?m(n,u-(e-c)):n}(e))}function T(e){return f=void 0,v&&o?b(e):(o=i=void 0,a)}function O(){var e=p(),n=h(e);if(o=arguments,i=this,l=e,n){if(void 0===f)return x(l);if(s)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),a}return t=j(t)||0,y(n)&&(d=!!n.leading,u=(s="maxWait"in n)?g(j(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=i=f=void 0},O.flush=function(){return void 0===f?a:T(p())},O}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:o,maxWait:t,trailing:i})};var x,h="feedback-form-state",w={},T={form:document.querySelector(".feedback-form"),textarea:document.querySelector("textarea")};console.log(T),T.form.addEventListener("submit",(function(e){e.preventDefault(),e.target.reset(),localStorage.removeItem(h)})),T.textarea.addEventListener("input",e(t)((function(e){var t=e.target.value;console.log(t),localStorage.setItem(h,t)}),500)),(x=localStorage.getItem(h))&&(console.log(x),T.textarea.value=x),T.form.addEventListener("input",(function(e){w[e.target.name]=e.target.value,console.log(w)}))}();
//# sourceMappingURL=03-feedback.e37576a8.js.map
