import t from "../../algorithms/mod11And10";export default function e(e){let r=e;if(/^HR[0-9]{11}$/.test(r)){r=r.substr(2)}if(!/^[0-9]{11}$/.test(r)){return{meta:{},valid:false}}return{meta:{},valid:t(r)}}
