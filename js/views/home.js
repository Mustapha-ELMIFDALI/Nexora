/* Nexora – home page */
const slides=[
 {k:'New arrival',t:'iPhone 16 Pro',s:'More power. More possibilities.',d:'Discover the latest iPhone with an advanced camera, longer battery life and a stunning titanium design.',p:'ip16'},
 {k:'Just landed',t:'Galaxy S24',s:'Galaxy AI is here.',d:'A brilliant display, pro-grade night photography and AI tools built right into your phone.',p:'s24'},
 {k:'Smart pick',t:'Pixel 9',s:'The best of Google.',d:'Magic Editor, seven years of updates and the camera everyone talks about.',p:'px9'}];

const V={};

V.home=()=>`
<section class="max-w-7xl mx-auto px-4 pt-5">
 <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0b1d5c] via-[#1238b8] to-[#2f6bff] text-white">
  <svg class="absolute inset-0 w-full h-full opacity-40" preserveAspectRatio="none" viewBox="0 0 800 400"><path d="M380 400C480 250 600 120 800 60V400Z" fill="#5b8cff" opacity=".35"/><path d="M500 400C560 300 680 220 800 200V400Z" fill="#fff" opacity=".08"/><circle cx="700" cy="80" r="160" fill="#7aa2ff" opacity=".18"/></svg>
  <div id="hero" class="snap relative flex overflow-x-auto">
   ${slides.map(s=>{const p=byId(s.p);return`<div class="w-full shrink-0 grid md:grid-cols-2 items-center gap-6 px-6 sm:px-12 py-10 md:py-14">
    <div><span class="text-xs font-semibold text-brand-200 uppercase tracking-wide">${s.k}</span><h1 class="text-4xl sm:text-5xl font-extrabold mt-2 leading-[1.05]">${s.t}</h1><p class="text-lg sm:text-xl mt-2 text-blue-100">${s.s}</p><p class="mt-4 text-sm sm:text-base text-blue-100/80 max-w-md">${s.d}</p>
    <a href="#product" data-p="${p.id}" class="inline-flex items-center gap-2 mt-7 h-12 px-7 rounded-xl bg-white text-brand-700 font-semibold hover:bg-brand-50 transition">Shop now →</a></div>
    <div class="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 max-w-sm w-full mx-auto">${pic(p,'aspect-[4/3.4]')}</div></div>`}).join('')}
  </div>
  <div class="absolute bottom-5 left-6 sm:left-12 flex gap-2" id="dots">${slides.map((_,i)=>`<button data-dot="${i}" aria-label="Slide ${i+1}" class="h-1.5 rounded-full bg-white/50 transition-all ${i?'w-4':'w-8 bg-white'}"></button>`).join('')}</div>
  <div class="absolute bottom-4 right-5 flex gap-2"><button data-hs="-1" aria-label="Previous" class="w-10 h-10 rounded-full border border-white/40 grid place-items-center hover:bg-white/10">‹</button><button data-hs="1" aria-label="Next" class="w-10 h-10 rounded-full border border-white/40 grid place-items-center hover:bg-white/10">›</button></div>
 </div>
 <div class="box mt-5 grid grid-cols-2 lg:grid-cols-4 gap-4 p-5">
  ${[['M3 7h11v9H3zM14 10h4l3 3v3h-7','Free shipping','On orders over $50'],['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6zM9 12l2 2 4-4','Secure payment','100% secure'],['M4 13a8 8 0 0116 0v4h-3v-5h3M4 13v4h3v-5H4','24/7 support','We\'re here to help'],['M4 12a8 8 0 0114-5l2 2M20 12a8 8 0 01-14 5l-2-2M20 4v5h-5M4 20v-5h5','Easy returns','30-day policy']].map(f=>`<div class="flex items-center gap-3"><span class="w-11 h-11 shrink-0 rounded-xl bg-brand-50 dark:bg-brand-500/15 text-brand-500 grid place-items-center"><svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path d="${f[0]}"/></svg></span><div><b class="text-sm block">${f[1]}</b><span class="muted text-xs">${f[2]}</span></div></div>`).join('')}
 </div>
</section>
${section('shop','Popular smartphones','Discover the most loved devices by our customers.',grid(P.slice(0,4)))}
<section class="max-w-7xl mx-auto px-4 py-4">
 <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0b1d5c] to-[#1d55f0] text-white grid md:grid-cols-[1fr_1.2fr_auto] items-center gap-6 p-7 sm:p-10">
  <div><p class="text-brand-200 text-sm font-medium">Limited time offer</p><h2 class="text-3xl sm:text-4xl font-extrabold mt-1">Up to 30% off</h2><p class="text-blue-100 mt-1">On selected smartphones</p><a href="#deals" class="inline-flex items-center gap-2 mt-5 h-11 px-6 rounded-xl bg-white text-brand-700 font-semibold">Shop deals →</a></div>
  <div class="flex justify-center -space-x-8">${['s23','ip15','px8','opn3'].map((id,i)=>`<div class="w-24 sm:w-32 rounded-2xl overflow-hidden shadow-xl ring-2 ring-white/20 ${i%2?'translate-y-3':''}">${pic(byId(id),'aspect-[3/4]')}</div>`).join('')}</div>
  <p class="font-hand text-3xl sm:text-4xl leading-tight text-blue-100 rotate-[-6deg] hidden md:block">Better<br>Faster<br>Smarter ♡</p>
 </div>
</section>
<section id="brands" class="max-w-7xl mx-auto px-4 py-8"><div class="flex items-end justify-between mb-5"><h2 class="h2">Shop by brand</h2><a href="#shop" class="text-sm font-semibold text-brand-500">View all →</a></div>
 <div class="grid grid-cols-3 sm:grid-cols-6 gap-3">${[['Apple','A','#111'],['Samsung','S','#1428a0'],['Google','G','#4285f4'],['OnePlus','1+','#eb0029'],['Xiaomi','mi','#ff6900'],['realme','r','#e6b800']].map(b=>`<button data-brand="${b[0]}" class="box py-4 grid justify-items-center gap-2 hover:border-brand-400 hover:-translate-y-0.5 transition"><span class="w-12 h-12 rounded-2xl grid place-items-center text-white font-extrabold" style="background:${b[2]}">${b[1]}</span><span class="text-sm font-medium">${b[0]}</span></button>`).join('')}</div>
</section>
${section('deals','Best deals','Top offers. Limited time only.',grid(P.slice(4,8)))}
<section class="max-w-7xl mx-auto px-4 py-6">
 <div class="relative overflow-hidden rounded-3xl bg-ink-800 dark:bg-ink-700 text-white grid md:grid-cols-[1.3fr_1fr] items-center gap-6 p-7 sm:p-10">
  <div class="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-brand-500/30 blur-3xl"></div>
  <div class="relative"><h2 class="text-2xl font-bold">Stay connected</h2><p class="text-slate-300 text-sm mt-1">Get the latest updates, offers and new arrivals.</p>
   <form id="news" class="mt-5 flex gap-2 max-w-md"><input type="email" required placeholder="Your email address" class="flex-1 h-12 px-4 rounded-xl bg-white/10 border border-white/15 text-base outline-none placeholder:text-slate-400 focus:border-brand-400"><button class="w-12 h-12 rounded-xl bg-brand-500 grid place-items-center" aria-label="Subscribe">→</button></form></div>
  <p class="relative font-hand text-4xl text-brand-200 text-center rotate-[-5deg]">Your next phone awaits ✦</p>
 </div>
</section>`;
