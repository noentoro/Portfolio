import t from "../core/Plugin";export default class e extends t{constructor(t){super(t);this.messageFilter=this.getMessage.bind(this)}install(){this.core.registerFilter("validator-message",this.messageFilter)}uninstall(){this.core.deregisterFilter("validator-message",this.messageFilter)}getMessage(t, e, s){if(this.opts[e]&&this.opts[e][s]){const i=this.opts[e][s];const r=typeof i;if("object"===r&&i[t]){return i[t]}else if("function"===r){const r=i.apply(this,[e,s]);return r&&r[t]?r[t]:""}}return""}}
