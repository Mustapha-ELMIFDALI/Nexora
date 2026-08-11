/* Nexora – product catalogue */
const U=id=>`https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`;
const P=[
 {id:'ip16',n:'iPhone 16 Pro',b:'Apple',v:'256GB • Titanium Blue',p:1199,r:4.8,rc:'2.5k',c:'#3d5a9e',img:U('photo-1695048133142-1a20484d2569'),tag:'Best seller'},
 {id:'s24',n:'Samsung Galaxy S24',b:'Samsung',v:'256GB • Phantom Black',p:999,r:4.7,rc:'1.8k',c:'#22262f',img:U('photo-1610945265064-0e34e5519bbf')},
 {id:'px9',n:'Google Pixel 9',b:'Google',v:'128GB • Obsidian',p:799,r:4.6,rc:'1.2k',c:'#2b2f3a',img:U('photo-1598327105666-5b89351aff97')},
 {id:'op12',n:'OnePlus 12',b:'OnePlus',v:'256GB • Flowy Emerald',p:899,r:4.5,rc:'980',c:'#2f6b5a',img:U('photo-1511707171634-5f897ff02aa9')},
 {id:'ip15',n:'iPhone 15',b:'Apple',v:'128GB • Blue',p:849,o:999,r:4.8,rc:'3.1k',c:'#7f9fd6',img:U('photo-1592750475338-74b7b21085ab'),d:15},
 {id:'s23',n:'Samsung Galaxy S23',b:'Samsung',v:'256GB • Lavender',p:719,o:899,r:4.6,rc:'1.5k',c:'#b9a7dc',img:U('photo-1580910051074-3eb694886505'),d:20},
 {id:'px8',n:'Google Pixel 8',b:'Google',v:'128GB • Hazel',p:719,o:799,r:4.5,rc:'860',c:'#c9c2b1',img:U('photo-1567581935884-3349723552ca'),d:10},
 {id:'opn3',n:'OnePlus Nord 3',b:'OnePlus',v:'256GB • Black',p:599,o:679,r:4.4,rc:'620',c:'#1e2128',img:U('photo-1601784551446-20c9e07cdbdb'),d:12},
 {id:'apods',n:'AirPods Pro 2',b:'Apple',v:'White',p:249,r:4.8,rc:'5.2k',c:'#f1f2f5',img:U('photo-1600294037681-c80b4cb5b434'),bud:1}
];
const byId=id=>P.find(p=>p.id===id);
