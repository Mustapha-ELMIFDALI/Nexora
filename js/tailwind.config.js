/* Nexora – Tailwind config + early theme */
tailwind.config={darkMode:'class',theme:{extend:{fontFamily:{sans:['Inter','system-ui','sans-serif'],hand:['Caveat','cursive']},
colors:{brand:{50:'#eef3ff',100:'#dbe6ff',200:'#bcd0ff',400:'#5b8cff',500:'#2f6bff',600:'#1d55f0',700:'#1642c4',900:'#0b1d5c'},ink:{900:'#0a0f1f',800:'#111830',700:'#1a2340',600:'#26304f'}}}}};
try{const t=localStorage.getItem('tn-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches))document.documentElement.classList.add('dark')}catch(e){}
