import t from "../../algorithms/luhn";export default function e(e){let r=e;if(/^IT[0-9]{11}$/.test(r)){r=r.substr(2)}if(!/^[0-9]{11}$/.test(r)){return{meta:{},valid:false}}if(parseInt(r.substr(0,7),10)===0){return{meta:{},valid:false}}const a=parseInt(r.substr(7,3),10);if(a<1||a>201&&a!==999&&a!==888){return{meta:{},valid:false}}return{meta:{},valid:t(r)}}
