/* Nexora – router, events and theme */
let order='TN'+(784000+Math.floor(Math.random()*999)), pq=1, timer;
const toast=m=>{const t=$('#toast');t.textContent=m;t.style.opacity=1;clearTimeout(t._h);t._h=setTimeout(()=>t.style.opacity=0,1800)};
const badges=()=>{const n=cart.reduce((a,i)=>a+i.q,0);$('#cc').textContent=n;$('#cc').classList.toggle('hidden',!n);$('#wl').textContent=wish.size;$('#wl').classList.toggle('hidden',!wish.size)};
const add=(id,q=1)=>{const i=cart.find(x=>x.id===id);i?i.q+=q:cart.push({id,q});save();badges();toast(byId(id).n+' added to cart')};

function render(){
 let h=location.hash.slice(1)||'home';
 const anchors=['shop','brands','deals'];
 if(anchors.includes(h)){if(!$('#'+h)){paint('home')}setTimeout(()=>$('#'+h)?.scrollIntoView(),30);return}
 if(!V[h])h='home';
 if(['checkout','payment'].includes(h)&&!cart.length)h='cart';
 paint(h);window.scrollTo(0,0);
}
function paint(h){
 $('#app').innerHTML=`<div class="view">${V[h]()}</div>`;
 document.querySelectorAll('.nl').forEach(a=>a.classList.toggle('on',a.dataset.n===h));
 $('#mobileNav').classList.add('hidden');badges();
 clearInterval(timer);
 if(h==='home'){const hero=$('#hero');let i=0;const go=n=>{i=(n+slides.length)%slides.length;hero.scrollTo({left:hero.clientWidth*i,behavior:'smooth'})};
  hero.addEventListener('scroll',()=>{i=Math.round(hero.scrollLeft/hero.clientWidth);document.querySelectorAll('[data-dot]').forEach((d,k)=>{d.classList.toggle('w-8',k===i);d.classList.toggle('bg-white',k===i);d.classList.toggle('w-4',k!==i)})},{passive:true});
  document.querySelectorAll('[data-dot]').forEach(d=>d.onclick=()=>go(+d.dataset.dot));
  document.querySelectorAll('[data-hs]').forEach(b=>b.onclick=()=>go(i+ +b.dataset.hs));
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches)timer=setInterval(()=>go(i+1),6000);}
 pq=1;
}

document.addEventListener('click',e=>{
 const t=e.target.closest('button,a');if(!t)return;const d=t.dataset;
 if(d.p)cur=d.p;
 if(d.add){add(d.add,d.useq!==undefined?pq:1)}
 if(d.buy){add(d.buy,pq)}
 if(d.w){wish.has(d.w)?wish.delete(d.w):wish.add(d.w);t.outerHTML=heart(d.w);badges();toast(wish.has(d.w)?'Saved to wishlist':'Removed from wishlist')}
 if(d.pq){pq=Math.max(1,pq+ +d.pq);$('#pq').textContent=pq}
 if(d.cq){const i=cart.find(x=>x.id===d.cq);i.q=Math.max(1,i.q+ +d.d);save();paint('cart')}
 if(d.rm){cart=cart.filter(x=>x.id!==d.rm);save();paint('cart');toast('Item removed')}
 if(d.brand){const p=P.find(x=>x.b===d.brand);if(p){cur=p.id;location.hash='product';if(location.hash==='#product')render()}else toast(d.brand+' coming soon')}
 if(t.closest('#colors')){t.parentNode.querySelectorAll('button').forEach(b=>{b.classList.toggle('ring-brand-500',b===t);b.classList.toggle('ring-transparent',b!==t)})}
 if(t.hash==='#product'&&location.hash==='#product')render();
});
document.addEventListener('change',e=>{if(e.target.name==='pm'){pay=e.target.value;paint('payment')}});
document.addEventListener('submit',e=>{e.preventDefault();const f=e.target;
 if(f.id==='news'){f.reset();toast('Subscribed. Welcome to TechNova!')}
 if(f.id==='shipForm'){Object.assign(ship,Object.fromEntries(new FormData(f)));location.hash='payment'}
 if(f.id==='payForm'){toast('Payment confirmed');cart=[];save();location.hash='success'}
});
$('#themeBtn').onclick=()=>{const dk=document.documentElement.classList.toggle('dark');try{localStorage.setItem('tn-theme',dk?'dark':'light')}catch(e){}};
$('#menuBtn').onclick=()=>$('#mobileNav').classList.toggle('hidden');
$('#searchBtn').onclick=()=>{$('#searchBar').classList.toggle('hidden');$('#q').focus()};
$('#q').oninput=e=>{const v=e.target.value.trim().toLowerCase();$('#qres').innerHTML=v?P.filter(p=>(p.n+p.b).toLowerCase().includes(v)).map(p=>`<a href="#product" data-p="${p.id}" class="flex justify-between px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5"><span>${p.n}</span><b>${money(p.p)}</b></a>`).join('')||'<p class="muted px-3 py-2">No results</p>':''};
$('#qres').onclick=()=>{$('#searchBar').classList.add('hidden');$('#q').value='';$('#qres').innerHTML=''};
$('#payBadges').innerHTML=['VISA','MC','PayPal','Apple Pay'].map(b=>`<span class="chip">${b}</span>`).join('');
$('#socials').innerHTML=['f','ig','yt','tt'].map(s=>`<span class="w-9 h-9 rounded-full bg-slate-100 dark:bg-white/10 grid place-items-center text-xs font-bold">${s}</span>`).join('');
window.addEventListener('hashchange',render);
render();