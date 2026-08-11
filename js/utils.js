/* Nexora – helpers and cart state */
const $=s=>document.querySelector(s);
const money=n=>'$'+n.toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let cart=[{id:'ip16',q:1},{id:'s24',q:1},{id:'apods',q:1}], wish=new Set(), cur='ip16', pay='card', ship={name:'Sarah Ahmed',addr:'12 Rue des Fleurs',city:'Algiers',phone:'+213 555 123 456',zip:'16000'};
try{const s=JSON.parse(localStorage.getItem('tn-cart'));if(Array.isArray(s))cart=s.filter(i=>byId(i.id))}catch(e){}
const save=()=>{try{localStorage.setItem('tn-cart',JSON.stringify(cart))}catch(e){}};

