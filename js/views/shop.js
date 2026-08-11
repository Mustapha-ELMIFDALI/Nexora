/* Nexora – product and cart pages */
V.product=()=>{const p=byId(cur);return`<section class="max-w-6xl mx-auto px-4 py-6">${back('Back to shop')}
<div class="grid md:grid-cols-2 gap-8">
 <div class="grid grid-cols-[64px_1fr] sm:grid-cols-[80px_1fr] gap-3">
  <div class="grid gap-3 content-start">${[0,1,2,3].map(i=>`<div class="rounded-xl overflow-hidden border-2 ${i?'border-transparent opacity-70':'border-brand-500'}">${pic(p)}</div>`).join('')}</div>
  <div class="relative box overflow-hidden">${heart(p.id)}${pic(p,'aspect-[4/5]')}</div>
 </div>
 <div>
  <h1 class="text-3xl font-extrabold">${p.n}</h1><p class="muted mt-1">${p.v}</p>
  <p class="text-sm mt-2">${stars(p.r)} <b>${p.r}</b> <span class="muted">(${p.rc} reviews)</span></p>
  <p class="text-3xl font-extrabold mt-4">${money(p.p)} ${p.o?`<s class="text-base font-medium text-slate-400 ml-2">${money(p.o)}</s>`:''}</p>
  <p class="mt-4 text-slate-600 dark:text-slate-300 leading-relaxed">The ${p.n} delivers exceptional performance with a powerful chip, a pro camera system and a stunning design built to last.</p>
  <div class="grid grid-cols-4 gap-2 mt-6">${[['6.3"','Display'],[p.v.split(' ')[0],'Storage'],['Pro chip','Processor'],['5G','5G ready']].map(s=>`<div class="box p-3 text-center"><b class="block text-sm">${s[0]}</b><span class="muted text-[11px]">${s[1]}</span></div>`).join('')}</div>
  <p class="font-semibold mt-6 mb-2 text-sm">Color</p><div class="flex gap-3" id="colors">${['#1e3a8a','#3a3f4b','#8b95a7','#d6d0c4'].map((c,i)=>`<button aria-label="Color ${i+1}" class="w-8 h-8 rounded-full ring-2 ring-offset-2 dark:ring-offset-ink-900 ${i?'ring-transparent':'ring-brand-500'}" style="background:${c}"></button>`).join('')}</div>
  <p class="font-semibold mt-6 mb-2 text-sm">Quantity</p>
  <div class="flex flex-wrap gap-3"><div class="qty"><button data-pq="-1" aria-label="Less">−</button><span id="pq" class="w-8 text-center font-semibold">1</span><button data-pq="1" aria-label="More">+</button></div>
  <button data-add="${p.id}" data-useq class="btn flex-1 min-w-[180px]">Add to cart</button></div>
  <a href="#cart" data-buy="${p.id}" class="btn-o w-full mt-3">Buy now</a>
 </div></div></section>
${section('more','You may also like','',grid(P.filter(x=>x.id!==p.id&&!x.bud).slice(0,4)))}`};

V.cart=()=>{const t=totals();return`<section class="max-w-6xl mx-auto px-4 py-6">${back('Continue shopping')}<h1 class="h2 mb-5">Your cart (${cart.reduce((a,i)=>a+i.q,0)})</h1>
${cart.length?`<div class="grid lg:grid-cols-[1fr_360px] gap-6 items-start"><div class="grid gap-3">${cart.map(i=>{const p=byId(i.id);return`<div class="box p-3 flex gap-4 items-center">
 <div class="w-20 sm:w-24 rounded-xl overflow-hidden shrink-0">${pic(p)}</div>
 <div class="flex-1"><b class="block">${p.n}</b><span class="muted text-xs">${p.v}</span><b class="block mt-1 text-brand-500 whitespace-nowrap">${money(p.p)}</b>
 <div class="flex items-center justify-between mt-2"><div class="qty"><button data-cq="${p.id}" data-d="-1" aria-label="Less">−</button><span class="w-7 text-center font-semibold text-sm">${i.q}</span><button data-cq="${p.id}" data-d="1" aria-label="More">+</button></div>
 <button data-rm="${p.id}" aria-label="Remove" class="ib text-slate-400 hover:text-rose-500"><svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13"/></svg></button></div></div></div>`}).join('')}</div>
 <div class="box p-5 lg:sticky lg:top-24">${sumRows(t)}<a href="#checkout" class="btn w-full mt-5">Proceed to checkout →</a></div></div>`
:`<div class="box p-10 text-center"><p class="text-lg font-semibold">Your cart is empty</p><p class="muted mt-1">Find something you'll love.</p><a href="#home" class="btn mt-5">Start shopping</a></div>`}</section>`};
