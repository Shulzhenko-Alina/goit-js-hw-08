!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequired7c6=o);var a=o("eaxEB"),l="feedback-form-state",u={form:document.querySelector(".feedback-form"),textarea:document.querySelector(".feedback-form textarea"),input:document.querySelector("input")},i={};!function(){var e=JSON.parse(localStorage.getItem(l));if(null===e)return;u.textarea.value=e.message||"",u.input.value=e.email||""}(),u.form.addEventListener("input",e(a)((function(e){i[e.target.name]=e.target.value;var t=JSON.stringify(i);localStorage.setItem(l,t)}),500)),u.form.addEventListener("submit",(function(e){e.preventDefault();var t=JSON.parse(localStorage.getItem(l));localStorage.removeItem(l),console.log(t),e.currentTarget.reset()}))}();
//# sourceMappingURL=03-feedback.6dc79e24.js.map