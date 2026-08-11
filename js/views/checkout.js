/* Nexora – checkout and payment pages */
V.checkout=()=>`<section class="max-w-6xl mx-auto px-4 py-6">${back('Back to cart','#cart')}<h1 class="h2">Checkout</h1>${steps(1)}
<div class="grid lg:grid-cols-[1fr_380px] gap-6 items-start">
 <form id="shipForm" class="box p-5 grid gap-4"><h2 class="font-bold">Shipping address</h2>
  ${fld('name','Full name')}${fld('addr','Address')}${fld('city','City')}
  <div class="grid grid-cols-2 gap-3">${fld('phone','Phone number','tel')}${fld('zip','Postal code')}</div>
  <button class="btn w-full">Continue to payment →</button></form>
 ${summary(true)}</div></section>`;

V.payment=()=>`<section class="max-w-6xl mx-auto px-4 py-6">${back('Back to shipping','#checkout')}<h1 class="h2">Payment method</h1>${steps(2)}
<div class="grid lg:grid-cols-[1fr_380px] gap-6 items-start">
 <form id="payForm" class="box p-5 grid gap-3">
  ${[['card','Credit / debit card','VISA · MC · AMEX'],['paypal','PayPal','PayPal'],['apple','Apple Pay','Pay'],['cod','Cash on delivery','📦']].map(m=>`<label class="flex items-center gap-3 p-4 rounded-xl border cursor-pointer ${pay===m[0]?'border-brand-500 bg-brand-50 dark:bg-brand-500/10':'border-slate-200 dark:border-white/10'}"><input type="radio" name="pm" value="${m[0]}" ${pay===m[0]?'checked':''} class="accent-brand-500 w-5 h-5"><span class="flex-1 font-medium">${m[1]}</span><span class="chip">${m[0]==='cod'?'COD':m[2]}</span></label>`).join('')}
  <div id="cardFields" class="grid gap-3 mt-2 ${pay==='card'?'':'hidden'}">${fld('cn','Card number','text','1234 5678 9012 3456')}<div class="grid grid-cols-2 gap-3">${fld('ex','Expiry date','text','04/28')}${fld('cvv','CVV','text','123')}</div></div>
  <button class="btn w-full mt-2">Confirm payment</button>
  <p class="muted text-xs text-center">🔒 Your payment information is secure and encrypted.</p></form>
 ${summary()}</div></section>`;
