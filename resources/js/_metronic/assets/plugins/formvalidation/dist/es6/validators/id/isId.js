import t from "../../utils/isValidDate";export default function e(e){if(!/^[0-9]{6}[-]{0,1}[0-9]{4}$/.test(e)){return{meta:{},valid:false}}const r=e.replace(/-/g,"");const s=parseInt(r.substr(0,2),10);const a=parseInt(r.substr(2,2),10);let n=parseInt(r.substr(4,2),10);const l=parseInt(r.charAt(9),10);n=l===9?1900+n:(20+l)*100+n;if(!t(n,a,s,true)){return{meta:{},valid:false}}const c=[3,2,7,6,5,4,3,2];let i=0;for(let t=0; t<8; t++){i+=parseInt(r.charAt(t),10)*c[t]}i=11-i%11;return{meta:{},valid:`${i}`===r.charAt(8)}}