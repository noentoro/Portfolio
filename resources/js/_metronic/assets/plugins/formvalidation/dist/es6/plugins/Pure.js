import e from "../utils/classSet";import r from "./Framework";export default class t extends r{constructor(e){super(Object.assign({},{formClass:"fv-plugins-pure",messageClass:"fv-help-block",rowInvalidClass:"fv-has-error",rowPattern:/^.*pure-control-group.*$/,rowSelector:".pure-control-group",rowValidClass:"fv-has-success"},e))}onIconPlaced(r){const t=r.element.getAttribute("type");if("checkbox"===t||"radio"===t){const t=r.element.parentElement;e(r.iconElement,{"fv-plugins-icon-check":true});if("LABEL"===t.tagName){t.parentElement.insertBefore(r.iconElement,t.nextSibling)}}}}
