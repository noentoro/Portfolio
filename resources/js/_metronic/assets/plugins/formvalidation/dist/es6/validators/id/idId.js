import t from "../../algorithms/verhoeff";export default function e(e){if(!/^[2-9]\d{11}$/.test(e)){return{meta:{},valid:false}}const r=e.split("").map(t=>parseInt(t,10));return{meta:{},valid:t(r)}}
