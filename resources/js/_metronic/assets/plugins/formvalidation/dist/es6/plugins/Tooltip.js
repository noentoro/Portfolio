import t from "../core/Plugin";import e from "../utils/classSet";export default class i extends t{constructor(t){super(t);this.messages=new Map;this.opts=Object.assign({},{placement:"top",trigger:"click"},t);this.iconPlacedHandler=this.onIconPlaced.bind(this);this.validatorValidatedHandler=this.onValidatorValidated.bind(this);this.elementValidatedHandler=this.onElementValidated.bind(this);this.documentClickHandler=this.onDocumentClicked.bind(this)}install(){this.tip=document.createElement("div");e(this.tip,{"fv-plugins-tooltip":true,[`fv-plugins-tooltip--${this.opts.placement}`]:true});document.body.appendChild(this.tip);this.core.on("plugins.icon.placed",this.iconPlacedHandler).on("core.validator.validated",this.validatorValidatedHandler).on("core.element.validated",this.elementValidatedHandler);if("click"===this.opts.trigger){document.addEventListener("click",this.documentClickHandler)}}uninstall(){this.messages.clear();document.body.removeChild(this.tip);this.core.off("plugins.icon.placed",this.iconPlacedHandler).off("core.validator.validated",this.validatorValidatedHandler).off("core.element.validated",this.elementValidatedHandler);if("click"===this.opts.trigger){document.removeEventListener("click",this.documentClickHandler)}}onIconPlaced(t){e(t.iconElement,{"fv-plugins-tooltip-icon":true});switch(this.opts.trigger){case"hover":t.iconElement.addEventListener("mouseenter", e=>this.show(t.element,e));t.iconElement.addEventListener("mouseleave", t=>this.hide());break;case"click":default:t.iconElement.addEventListener("click", e=>this.show(t.element,e));break}}onValidatorValidated(t){if(!t.result.valid){const e=t.elements;const i=t.element.getAttribute("type");const s="radio"===i||"checkbox"===i?e[0]:t.element;const l=typeof t.result.message==="string"?t.result.message:t.result.message[this.core.getLocale()];this.messages.set(s,l)}}onElementValidated(t){if(t.valid){const e=t.elements;const i=t.element.getAttribute("type");const s="radio"===i||"checkbox"===i?e[0]:t.element;this.messages.delete(s)}}onDocumentClicked(t){this.hide()}show(t, i){i.preventDefault();i.stopPropagation();if(!this.messages.has(t)){return}e(this.tip,{"fv-plugins-tooltip--hide":false});this.tip.innerHTML=`<span class="fv-plugins-tooltip__content">${this.messages.get(t)}</span>`;const s=i.target;const l=s.getBoundingClientRect();let o=0;let n=0;switch(this.opts.placement){case"top":default:o=l.top-l.height;n=l.left+l.width/2-this.tip.clientWidth/2;break;case"top-left":o=l.top-l.height;n=l.left;break;case"top-right":o=l.top-l.height;n=l.left+l.width-this.tip.clientWidth;break;case"bottom":o=l.top+l.height;n=l.left+l.width/2-this.tip.clientWidth/2;break;case"bottom-left":o=l.top+l.height;n=l.left;break;case"bottom-right":o=l.top+l.height;n=l.left+l.width-this.tip.clientWidth;break;case"left":o=l.top+l.height/2-this.tip.clientHeight/2;n=l.left-this.tip.clientWidth;break;case"right":o=l.top+l.height/2-this.tip.clientHeight/2;n=l.left+l.width;break}const a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;const d=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;o=o+a;n=n+d;this.tip.setAttribute("style",`top: ${o}px; left: ${n}px`)}hide(){e(this.tip,{"fv-plugins-tooltip--hide":true})}}
