import t from "../../utils/isValidDate";export default function e(e){let r=e;if(/^CZ[0-9]{8,10}$/.test(r)){r=r.substr(2)}if(!/^[0-9]{8,10}$/.test(r)){return{meta:{},valid:false}}let a=0;let s=0;if(r.length===8){if(`${r.charAt(0)}`==="9"){return{meta:{},valid:false}}a=0;for(s=0; s<7; s++){a+=parseInt(r.charAt(s),10)*(8-s)}a=11-a%11;if(a===10){a=0}if(a===11){a=1}return{meta:{},valid:`${a}`===r.substr(7,1)}}else if(r.length===9&&`${r.charAt(0)}`==="6"){a=0;for(s=0; s<7; s++){a+=parseInt(r.charAt(s+1),10)*(8-s)}a=11-a%11;if(a===10){a=0}if(a===11){a=1}a=[8,7,6,5,4,3,2,1,0,9,10][a-1];return{meta:{},valid:`${a}`===r.substr(8,1)}}else if(r.length===9||r.length===10){let e=1900+parseInt(r.substr(0,2),10);const a=parseInt(r.substr(2,2),10)%50%20;const s=parseInt(r.substr(4,2),10);if(r.length===9){if(e>=1980){e-=100}if(e>1953){return{meta:{},valid:false}}}else if(e<1954){e+=100}if(!t(e,a,s)){return{meta:{},valid:false}}if(r.length===10){let t=parseInt(r.substr(0,9),10)%11;if(e<1985){t=t%10}return{meta:{},valid:`${t}`===r.substr(9,1)}}return{meta:{},valid:true}}return{meta:{},valid:false}}
