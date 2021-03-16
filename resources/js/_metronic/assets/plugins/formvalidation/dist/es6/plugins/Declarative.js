import e from "../core/Plugin";export default class t extends e{constructor(e){super(e);this.addedFields=new Map;this.opts=Object.assign({},{html5Input:false,pluginPrefix:"data-fvp-",prefix:"data-fv-"},e);this.fieldAddedHandler=this.onFieldAdded.bind(this);this.fieldRemovedHandler=this.onFieldRemoved.bind(this)}install(){this.parsePlugins();const e=this.parseOptions();Object.keys(e).forEach(t=>{if(!this.addedFields.has(t)){this.addedFields.set(t,true)}this.core.addField(t,e[t])});this.core.on("core.field.added",this.fieldAddedHandler).on("core.field.removed",this.fieldRemovedHandler)}uninstall(){this.addedFields.clear();this.core.off("core.field.added",this.fieldAddedHandler).off("core.field.removed",this.fieldRemovedHandler)}onFieldAdded(e){const t=e.elements;if(!t||t.length===0||this.addedFields.has(e.field)){return}this.addedFields.set(e.field,true);t.forEach(t=>{const s=this.parseElement(t);if(!this.isEmptyOption(s)){const t={selector:e.options.selector,validators:Object.assign({},e.options.validators||{},s.validators)};this.core.setFieldOptions(e.field,t)}})}onFieldRemoved(e){if(e.field&&this.addedFields.has(e.field)){this.addedFields.delete(e.field)}}parseOptions(){const e=this.opts.prefix;const t={};const s=this.core.getFields();const a=this.core.getFormElement();const i=[].slice.call(a.querySelectorAll(`[name], [${e}field]`));i.forEach(s=>{const a=this.parseElement(s);if(!this.isEmptyOption(a)){const i=s.getAttribute("name")||s.getAttribute(`${e}field`);t[i]=Object.assign({},t[i],a)}});Object.keys(t).forEach(e=>{Object.keys(t[e].validators).forEach(a=>{t[e].validators[a].enabled=t[e].validators[a].enabled||false;if(s[e]&&s[e].validators&&s[e].validators[a]){Object.assign(t[e].validators[a],s[e].validators[a])}})});return Object.assign({},s,t)}createPluginInstance(e, t){const s=e.split(".");let a=window||this;for(let e=0,t=s.length; e<t; e++){a=a[s[e]]}if(typeof a!=="function"){throw new Error(`the plugin ${e} doesn't exist`)}return new a(t)}parsePlugins(){const e=this.core.getFormElement();const t=new RegExp(`^${this.opts.pluginPrefix}([a-z0-9-]+)(___)*([a-z0-9-]+)*$`);const s=e.attributes.length;const a={};for(let i=0; i<s; i++){const s=e.attributes[i].name;const n=e.attributes[i].value;const r=t.exec(s);if(r&&r.length===4){const e=this.toCamelCase(r[1]);a[e]=Object.assign({},r[3]?{[this.toCamelCase(r[3])]:n}:{enabled:""===n||"true"===n},a[e])}}Object.keys(a).forEach(e=>{const t=a[e];const s=t["enabled"];const i=t["class"];if(s&&i){delete t["enabled"];delete t["clazz"];const s=this.createPluginInstance(i,t);this.core.registerPlugin(e,s)}})}isEmptyOption(e){const t=e.validators;return Object.keys(t).length===0&&t.constructor===Object}parseElement(e){const t=new RegExp(`^${this.opts.prefix}([a-z0-9-]+)(___)*([a-z0-9-]+)*$`);const s=e.attributes.length;const a={};const i=e.getAttribute("type");for(let n=0; n<s; n++){const s=e.attributes[n].name;const r=e.attributes[n].value;if(this.opts.html5Input){switch(true){case"minlength"===s:a["stringLength"]=Object.assign({},{enabled:true,min:parseInt(r,10)},a["stringLength"]);break;case"maxlength"===s:a["stringLength"]=Object.assign({},{enabled:true,max:parseInt(r,10)},a["stringLength"]);break;case"pattern"===s:a["regexp"]=Object.assign({},{enabled:true,regexp:r},a["regexp"]);break;case"required"===s:a["notEmpty"]=Object.assign({},{enabled:true},a["notEmpty"]);break;case"type"===s&&"color"===r:a["color"]=Object.assign({},{enabled:true,type:"hex"},a["color"]);break;case"type"===s&&"email"===r:a["emailAddress"]=Object.assign({},{enabled:true},a["emailAddress"]);break;case"type"===s&&"url"===r:a["uri"]=Object.assign({},{enabled:true},a["uri"]);break;case"type"===s&&"range"===r:a["between"]=Object.assign({},{enabled:true,max:parseFloat(e.getAttribute("max")),min:parseFloat(e.getAttribute("min"))},a["between"]);break;case"min"===s&&i!=="date"&&i!=="range":a["greaterThan"]=Object.assign({},{enabled:true,min:parseFloat(r)},a["greaterThan"]);break;case"max"===s&&i!=="date"&&i!=="range":a["lessThan"]=Object.assign({},{enabled:true,max:parseFloat(r)},a["lessThan"]);break;default:break}}const l=t.exec(s);if(l&&l.length===4){const e=this.toCamelCase(l[1]);a[e]=Object.assign({},l[3]?{[this.toCamelCase(l[3])]:this.normalizeValue(r)}:{enabled:""===r||"true"===r},a[e])}}return{validators:a}}normalizeValue(e){return e==="true"?true:e==="false"?false:e}toUpperCase(e){return e.charAt(1).toUpperCase()}toCamelCase(e){return e.replace(/-./g,this.toUpperCase)}}
