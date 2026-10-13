const CATS=['Pintura','Fotografia','Grafite','Desenho'];
const ORGS=[
{id:'organizacao-exemplo-1',n:'Organização Exemplo 1',o:'Grupo de grafiteiros e muralistas que transforma muros abandonados em galerias a céu aberto.',c:['Oficinas gratuitas de grafite para jovens','12 murais coletivos nos bairros','Empréstimo de material de pintura'],u:'https://exemplo.org.br/quebrada-viva'},
{id:'organizacao-exemplo-2',n:'Organização Exemplo 2',o:'Organização que registra histórias e fotografias antigas de moradores para preservar a memória local.',c:['Acervo digital com 800 fotos de família','Rodas de conversa com idosos','Exposição anual Memórias do bairro'],u:'https://exemplo.org.br/memoria-morro'},
{id:'organizacao-exemplo-3',n:'Organização Exemplo 3',o:'Escola popular de fotografia que ensina jovens a contar a história do próprio bairro com câmeras e celulares.',c:['Curso básico de fotografia','Empréstimo de câmeras','Mostra fotográfica Minha cidade'],u:'https://exemplo.org.br/casa-da-lente'},
{id:'organizacao-exemplo-4',n:'Organização Exemplo 4',o:'Instituto que leva pintura e desenho a escolas públicas e centros de convivência.',c:['Aulas de desenho em 6 escolas','Bolsa para artistas iniciantes','Ponto de coleta de obras físicas'],u:'https://exemplo.org.br/pincel-aberto'}];
const PONTOS=[['Ponto de Coleta Exemplo 1','Seg a sex, 9h às 17h'],['Ponto de Coleta Exemplo 2','Ter, qui e sáb, 10h às 16h'],['Ponto de Coleta Exemplo 3','Seg a sex, 8h às 18h']];
const EXS=[['Minha cidade','Como cada pessoa enxerga ruas, praças e esquinas do lugar onde mora.'],['Memórias do bairro','Obras que guardam histórias, personagens e lugares que marcaram a vizinhança.']];
const P=[['#2340D9','#FFD60A','#12161D'],['#E5484D','#F5E1B8','#1B2A41'],['#16A394','#F2F0E4','#2B1B3D'],['#FF8A3D','#1D3557','#F1FAEE'],['#7B4AE2','#FFD60A','#F8F9FA'],['#12161D','#FF5A5F','#F0F0F0']];
const W=[
{t:'Arte Exemplo 1',a:'Pessoa Exemplo 1',cat:'Pintura',b:'Bairro Exemplo 1',m:'Jun',ex:'Minha cidade',d:'Acrílica sobre tela com a esquina onde mora a artista, vista no fim da tarde.',alt:'Pintura abstrata em azul e amarelo que lembra fachadas de uma esquina.',l:128,v:41,s:3,p:0,cm:[['Pessoa Exemplo','Essa luz de fim de tarde é igualzinha!'],['Pessoa Exemplo','Lindo demais, parabéns.']]},
{t:'Arte Exemplo 2',a:'Pessoa Exemplo 2',cat:'Fotografia',b:'Bairro Exemplo 2',m:'Jul',ex:'Memórias do bairro',d:'Retrato de uma moradora de 84 anos que viu o bairro crescer.',alt:'Composição geométrica em vermelho e bege sugerindo uma janela aberta.',l:203,v:58,s:11,p:1,cm:[['Pessoa Exemplo','Me emocionei. Parabéns!']]},
{t:'Arte Exemplo 3',a:'Pessoa Exemplo 3',cat:'Grafite',b:'Bairro Exemplo 3',m:'Jul',ex:'Minha cidade',d:'Mural de 9 metros feito com tampinhas e tinta spray.',alt:'Grafite em verde e roxo com formas onduladas lembrando um rio.',l:176,v:63,s:21,p:2,cm:[['Pessoa Exemplo','Passo todo dia e nunca enjoo.'],['Pessoa Exemplo','Quero participar da próxima!']]},
{t:'Arte Exemplo 4',a:'Pessoa Exemplo 4',cat:'Desenho',b:'Bairro Exemplo 4',m:'Ago',ex:'Memórias do bairro',d:'Desenho a nanquim sobre as tardes de pipa na laje.',alt:'Desenho em laranja e azul-escuro com losangos como pipas no céu.',l:94,v:22,s:34,p:3,cm:[]},
{t:'Arte Exemplo 5',a:'Pessoa Exemplo 5',cat:'Fotografia',b:'Bairro Exemplo 3',m:'Ago',ex:'Minha cidade',d:'Série de fotos da montagem da feira antes de o sol nascer.',alt:'Formas roxas e amarelas que lembram barracas de feira.',l:151,v:37,s:45,p:4,cm:[['Pessoa Exemplo','Ótimo enquadramento.']]},
{t:'Arte Exemplo 6',a:'Pessoa Exemplo 6',cat:'Pintura',b:'Bairro Exemplo 2',m:'Set',ex:'Minha cidade',d:'Pintura inspirada na escadaria que liga o morro à rua principal.',alt:'Degraus pintados em preto, rosa e branco subindo em diagonal.',l:112,v:29,s:52,p:5,cm:[]},
{t:'Arte Exemplo 7',a:'Pessoa Exemplo 7',cat:'Grafite',b:'Bairro Exemplo 1',m:'Set',ex:'Memórias do bairro',d:'Painel feito pelos alunos com nomes de ex-moradores ilustres.',alt:'Painel azul e amarelo com formas circulares como rostos.',l:87,v:19,s:63,p:0,cm:[]},
{t:'Arte Exemplo 8',a:'Pessoa Exemplo 8',cat:'Desenho',b:'Bairro Exemplo 4',m:'Out',ex:'Memórias do bairro',d:'Desenho da casa onde o artista cresceu, antes da reforma.',alt:'Desenho em vermelho e azul com um retângulo central como uma casa.',l:69,v:14,s:74,p:1,cm:[]}

,{t:'Arte Exemplo 9',a:'Pessoa Exemplo 9',cat:'Texto',tipo:'texto',b:'Bairro Exemplo 1',m:'Out',ex:'Memórias do bairro',dt:'2026-10-02',d:'',alt:'',txt:'Querido bairro,\nvolto hoje à tua esquina e a padaria ainda cheira a pão quente. As crianças já não jogam bola na rua, mas o muro continua guardando nossos nomes escritos de giz. Obrigada por me ensinar que casa é onde alguém lembra da gente.',l:84,v:26,s:1,p:2,cm:[['Pessoa Exemplo','Que texto lindo!']]},
{t:'Arte Exemplo 10',a:'Pessoa Exemplo 10',cat:'Texto',tipo:'texto',b:'Bairro Exemplo 2',m:'Set',ex:'Minha cidade',dt:'2026-09-14',d:'',alt:'',txt:'Do alto da laje a cidade respira.\nRoupa no varal, pipa no céu,\nrádio baixinho, cheiro de café.\nTudo cabe num domingo\nquando a gente olha de cima\ne enxerga o que é nosso.',l:97,v:31,s:1,p:4,cm:[]}
].map((w,i)=>({...w,id:i+1,liked:false}));
const MES=['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'],fmtd=d=>d.split('-').reverse().join('/');
const S={voted:null,filt:{c:'',b:'',e:''},msg:''};
const KEY='muro-aberto-v3';
function save(){try{localStorage.setItem(KEY,JSON.stringify({W,voted:S.voted}));return true}catch(e){return false}}
try{const d=JSON.parse(localStorage.getItem(KEY)||'null');if(d){W.splice(0,W.length,...d.W);S.voted=d.voted}}catch(e){}
const $=(s,r=document)=>r.querySelector(s);
const esc=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const oa=o=>{const i=ORGS.indexOf(o),c=P[(i*2+1)%6];return `<svg class="oa" viewBox="0 0 400 140" role="img" aria-label="Imagem ilustrativa de ${esc(o.n)}" preserveAspectRatio="xMidYMid slice"><rect width="400" height="140" fill="${c[0]}"/><circle cx="${60+i*70}" cy="110" r="70" fill="${c[1]}" opacity=".85"/><circle cx="${340-i*40}" cy="20" r="55" fill="${c[2]}" opacity=".8"/><text x="24" y="118" font-family="Bricolage Grotesque,sans-serif" font-weight="800" font-size="60" fill="#fff">O${i+1}</text></svg>`};
function scene(w,cls,click){
 const c=P[w.p],id='g'+w.id;let r=w.s*7+3;const R=()=>(r=(r*9301+49297)%233280)/233280;let o='';
 const defs=`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${c[2]}"/><stop offset="1" stop-color="${c[0]}"/></linearGradient><radialGradient id="v${w.id}"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".5"/></radialGradient></defs>`;
 const bg=`<rect width="400" height="300" fill="url(#${id})"/>`;
 if(w.cat==='Pintura'){o=bg+`<circle cx="${120+R()*160}" cy="100" r="50" fill="#FFF3C4" opacity=".95"/>`+[0,1,2].map(i=>`<path d="M0 ${185+i*32} Q${90+R()*80} ${130+i*32} 200 ${180+i*32} T400 ${175+i*32} V300H0Z" fill="${c[(i+1)%3]}" opacity="${.6+i*.18}"/>`).join('')}
 else if(w.cat==='Fotografia'){let x=-10,b='';while(x<400){const bw=34+R()*30,bh=80+R()*130;b+=`<rect x="${x}" y="${300-bh}" width="${bw}" height="${bh}" fill="${c[2]}"/>`;for(let y=300-bh+12;y<290;y+=22)if(R()>.45)b+=`<rect x="${x+8}" y="${y}" width="7" height="9" fill="#FFE08A" opacity=".85"/>`;x+=bw+4}o=bg+`<circle cx="300" cy="90" r="34" fill="#FFF3C4" opacity=".9"/>`+b+`<rect width="400" height="300" fill="url(#v${w.id})"/>`}
 else if(w.cat==='Grafite'){let l='';for(let k=0;k<10;k++){l+=`M0 ${k*30}H400`;for(let x=(k%2)*40;x<400;x+=80)l+=`M${x} ${k*30}v30`}o=`<rect width="400" height="300" fill="${c[2]}"/><path d="${l}" stroke="#fff" opacity=".14" fill="none"/>`+[c[0],c[1],'#fff'].map((k,i)=>{const y=70+i*70;return `<path d="M30 ${y} C100 ${y-60} 150 ${y+60} 220 ${y} S340 ${y-40} 375 ${y+10}" stroke="${k}" stroke-width="${26-i*4}" stroke-linecap="round" fill="none"/><path d="M${90+i*70} ${y+5}v${30+R()*30}M${200+i*30} ${y+5}v${20+R()*30}" stroke="${k}" stroke-width="4" stroke-linecap="round"/>`}).join('')}
 else{o=`<rect width="400" height="300" fill="#FBF8F1"/>`;let x=20;while(x<370){const bw=60+R()*40,bh=70+R()*60;o+=`<path d="M${x} 270V${270-bh}H${x+bw}V270ZM${x-6} ${270-bh}L${x+bw/2} ${270-bh-34}L${x+bw+6} ${270-bh}" fill="${c[0]}" fill-opacity=".14" stroke="${c[2]}" stroke-width="3" stroke-linejoin="round"/><path d="M${x+14} 270v-34h18v34" fill="none" stroke="${c[2]}" stroke-width="3"/>`;x+=bw+22}o+=`<path d="M0 270H400" stroke="${c[2]}" stroke-width="3"/><path d="M320 60l22 26-22 34-22-34ZM320 120q-14 30 6 50t-4 40" fill="${c[1]}" fill-opacity=".5" stroke="${c[2]}" stroke-width="2.5"/>`}
 return `<svg class="${cls}" viewBox="0 0 400 300" role="img" aria-label="${esc(w.alt)}" preserveAspectRatio="xMidYMid slice" ${click?`data-go="artes.html?obra=${w.id}" tabindex="0"`:''}>${defs}${o}</svg>`}
function textArt(w,cls,click){const c=P[w.p];return `<div class="${cls} txt" style="background:linear-gradient(135deg,${c[2]},${c[0]})" role="img" aria-label="Obra em texto: ${esc(w.t)}" ${click?`data-go="artes.html?obra=${w.id}" tabindex="0"`:''}><span>${esc(w.txt.slice(0,150))}${w.txt.length>150?'…':''}</span></div>`}
function art(w,cls='art',click=true){if(w.tipo==='texto')return textArt(w,cls,click);
 if(w.img)return `<img class="${cls}" src="${w.img}" alt="${esc(w.alt)}" ${click?`data-go="artes.html?obra=${w.id}"`:''}>`;
 if(!w.old)return scene(w,cls,click);let r=w.s,rnd=()=>(r=(r*9301+49297)%233280)/233280,c=P[w.p],o='';
 for(let i=0;i<7;i++){const col=c[i%3],x=rnd()*400,y=rnd()*300,z=40+rnd()*110;
  o+=i%2?`<rect x="${x-z/2}" y="${y-z/2}" width="${z}" height="${z*(.5+rnd())}" fill="${col}" transform="rotate(${rnd()*40-20} ${x} ${y})"/>`:`<circle cx="${x}" cy="${y}" r="${z/2}" fill="${col}"/>`}
 return `<svg class="${cls}" viewBox="0 0 400 300" role="img" aria-label="${esc(w.alt)}" preserveAspectRatio="xMidYMid slice" ${click?`data-go="artes.html?obra=${w.id}" tabindex="0"`:''}><defs><linearGradient id="g${w.id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${c[2]}"/><stop offset="1" stop-color="${c[0]}"/></linearGradient></defs><rect width="400" height="300" fill="url(#g${w.id})"/>${o}</svg>`}
function workCard(w){return `<article class="card">${art(w)}<div class="b"><span class="tag">${w.cat}</span><h3>${esc(w.t)}</h3><div class="meta"><span>${esc(w.a)}</span><span>${w.b}</span></div><div class="meta"><span>♥ ${w.l}</span><span>${w.cm.length} comentários</span></div></div></article>`}
const maisCurtidas=()=>[...W].sort((a,b)=>b.l-a.l);
const likeBtn=w=>`<button class="like" data-like="${w.id}" aria-pressed="${w.liked}">${w.liked?'♥ Curtida':'♡ Curtir'} · ${w.l}</button>`;

const car=(id,sl,lb)=>`<div class="car" role="region" aria-roledescription="carrossel" aria-label="${lb}"><div class="trk" id="${id}" tabindex="0">${sl.map(s=>`<div class="sl">${s}</div>`).join('')}</div><div class="cc"><span class="cnt" data-for="${id}" aria-live="polite">1 / ${sl.length}</span><button class="cb" data-car="${id}" data-d="-1" aria-label="Anterior">‹</button><button class="cb" data-car="${id}" data-d="1" aria-label="Próximo">›</button></div></div>`;
function inicio(){
 const t=maisCurtidas().slice(0,5),c=[...W].sort((a,b)=>b.v-a.v).slice(0,5),tot=W.reduce((s,w)=>s+w.v,0);
 const as=t.map((w,i)=>`<article class="asl"><span class="rk">#${i+1}</span>${art(w)}<div class="b"><span class="tag">${w.cat}</span><h3>${esc(w.t)}</h3><div class="meta"><span>${esc(w.a)}</span><span>${w.b}</span></div><div class="meta"><span>♥ ${w.l} curtidas</span><span>💬 ${w.cm.length} comentários</span></div><a class="btn alt" style="align-self:flex-start;margin-top:6px" href="artes.html?obra=${w.id}">Ver obra</a></div></article>`);
 const os=ORGS.slice(0,3).map(o=>`<article class="osl">${oa(o)}<div><h3>${o.n}</h3><p style="color:var(--mut)">${o.o}</p><b style="font-size:.9rem">Principais contribuições</b><ul>${o.c.map(x=>`<li>${x}</li>`).join('')}</ul><a class="btn" href="organizacoes.html#${o.id}">Conhecer organização</a></div></article>`);
 return `<section class="hero"><div class="wrap hb"><div class="ht"><h1>A arte do seu bairro, aberta para todo mundo.</h1><p>Envie sua obra, veja o que os vizinhos estão criando e conheça as organizações que fazem a cultura local acontecer.</p><div class="row"><a class="btn" href="artes.html">Ver todas as artes</a></div></div><div class="col" aria-hidden="true">${[W[2],W[1],W[0]].map(w=>art(w,'art',false)).join('')}</div></div></section>
 <section><div class="wrap"><div class="sh"><div><span class="chip">Destaque da página Artes</span><h2>Mais curtidas e votação do mês</h2><p>As 5 obras que mais encantaram a comunidade e a disputa de outubro.</p></div><a class="btn alt" href="artes.html">Ver galeria completa</a></div>
 <div class="two ac"><div><h3 style="margin-bottom:12px">Top 5 mais curtidas</h3>${car('ca',as,'Top 5 artes mais curtidas')}</div>
 <div class="vote vp"><h3>Votação de outubro</h3><p>${S.voted?'Voto registrado. Obrigado por participar!':'Escolha sua favorita. Cada pessoa vota uma vez.'} Total: ${tot} votos.</p>
 ${c.map(w=>`<button class="opt" data-vote="${w.id}" ${S.voted?'disabled':''} aria-label="Votar em ${esc(w.t)}">${art(w,'',false)}<span><b>${esc(w.t)}</b><br><small>${esc(w.a)}</small></span><span>${Math.round(w.v/tot*100)}% · ${w.v}${S.voted===w.id?' ✓':''}</span><i class="bar" style="width:${w.v/tot*100}%"></i></button>`).join('')}</div></div></div></section>
 <section><div class="wrap"><div class="sh"><div><span class="chip">Destaque da página Organizações</span><h2>Organizações que apoiam o Muro Aberto</h2><p>Parceiras que formam, divulgam e dão estrutura aos artistas.</p></div><a class="btn alt" href="organizacoes.html">Ver todas</a></div>${car('co',os,'Organizações parceiras')}</div></section>`}

function obras(){
 const f=S.filt,list=W.filter(w=>(!f.c||w.cat===f.c)&&(!f.b||w.b===f.b)&&(!f.e||w.ex===f.e)),bs=[...new Set(W.map(w=>w.b))];
 const opt=(a,v)=>a.map(x=>`<option ${x===v?'selected':''}>${x}</option>`).join('');
 return `<section><div class="wrap"><div class="sh"><div><h1 style="font-size:clamp(2.2rem,6vw,3.8rem)">Artes</h1><p>Tudo o que a comunidade enviou. Filtre por categoria, bairro ou exposição.</p></div></div>${S.msg?`<p class="ok" role="status" style="margin-bottom:16px">${S.msg}</p>`:''}<div class="cta"><div><h2>Tem uma obra para mostrar?</h2><p>Envie uma imagem ou um texto e apareça na galeria do bairro.</p></div><button class="btn lg" data-open>+ Adicionar obra</button></div>
 <h2 style="font-size:1.3rem;margin-bottom:12px">Destaques da comunidade</h2><div class="grid" style="margin-bottom:36px">${maisCurtidas().slice(0,3).map(workCard).join('')}</div><h2 style="font-size:1.3rem;margin-bottom:10px">Exposições temáticas</h2><div class="pills" role="group" aria-label="Exposições"><button class="pill" data-ex="" aria-pressed="${!f.e}">Todas</button>${EXS.map(e=>`<button class="pill" data-ex="${e[0]}" aria-pressed="${f.e===e[0]}">${e[0]}</button>`).join('')}</div>
 <div class="filters"><div><label for="fc">Categoria</label><select id="fc"><option value="">Todas</option>${opt([...CATS,'Texto'],f.c)}</select></div><div><label for="fb">Bairro</label><select id="fb"><option value="">Todos</option>${opt(bs,f.b)}</select></div></div>
 <p aria-live="polite" class="hint" style="margin-bottom:14px">${list.length} obra(s) encontrada(s)</p>
 ${list.length?`<div class="grid">${list.map(workCard).join('')}</div>`:'<p>Nenhuma obra com esses filtros. Tente remover algum.</p>'}<h2 style="font-size:1.3rem;margin:36px 0 12px">Comentários recentes</h2><div class="grid">${W.flatMap(w=>w.cm.map(c=>({w,c}))).slice(-3).map(({w,c})=>`<div class="ex"><b>${esc(c[0])}</b> em <a href="artes.html?obra=${w.id}">${esc(w.t)}</a><p>${esc(c[1])}</p></div>`).join('')}</div></div></section>`}

function detalhe(id){
 const w=W.find(x=>x.id==id);if(!w)return obras();
 return `<section><div class="wrap"><p><a href="artes.html">← Voltar para as artes</a></p><div class="detail"><div>${w.tipo==='texto'?`<div class="textfull">${esc(w.txt)}</div>`:art(w,'art',false)}</div><div><span class="tag">${w.cat}</span><h1 style="font-size:2.4rem;margin:8px 0">${esc(w.t)}</h1><p class="meta"><span>${esc(w.a)}</span><span>${w.b}</span><span>${w.dt?fmtd(w.dt):w.m+'/2026'}</span>${w.ex?`<span>${esc(w.ex)}</span>`:''}</p><p>${esc(w.d)}</p>${likeBtn(w)}
 <h2 style="font-size:1.4rem;margin:28px 0 8px">Comentários (${w.cm.length})</h2>${w.cm.map(c=>`<div class="cm"><b>${esc(c[0])}</b><p>${esc(c[1])}</p></div>`).join('')||'<p class="hint">Ninguém comentou ainda. Seja a primeira pessoa.</p>'}
 <form data-cm="${w.id}" style="display:grid;gap:10px;margin-top:14px"><div><label for="cn">Seu nome</label><input id="cn" type="text" required maxlength="40"></div><div><label for="ct">Comentário</label><textarea id="ct" rows="3" required maxlength="300"></textarea></div><button class="btn" style="justify-self:start">Publicar comentário</button></form></div></div></div></section>`}

function orgs(){
 const n=k=>{const m={};W.forEach(w=>m[w[k]]=(m[w[k]]||0)+1);return Object.entries(m)};
 const bars=(a,k)=>`<div>${a.map(([x,v])=>`<div class="stat"><span>${x}</span><i style="width:${v/W.length*100*2}%"></i><b>${v}</b></div>`).join('')}</div>`;
 const meses=['Jun','Jul','Ago','Set','Out'].map(m=>[m,W.filter(w=>w.m===m).length]);
 return `<section><div class="wrap"><div class="sh"><div><h1 style="font-size:clamp(2.2rem,6vw,3.8rem)">Organizações</h1><p>ONGs e coletivos que estão em parceria com o Muro Aberto.</p></div></div>
 <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">${ORGS.map(o=>`<article class="card org" id="${o.id}">${oa(o)}<div class="b"><h3>${o.n}</h3><p>${o.o}</p><b style="font-size:.9rem">O que fazem pelo bairro</b><ul>${o.c.map(x=>`<li>${x}</li>`).join('')}</ul><div class="btns"><a class="btn" href="${o.u}" target="_blank" rel="noopener">Visitar site</a></div></div></article>`).join('')}</div></div></section>
 <section style="background:var(--card);border-block:2px solid var(--ink)"><div class="wrap"><div class="sh"><div><h2>Painel de dados</h2><p>O que a comunidade já enviou, em números.</p></div></div>
 <div class="nums"><div><b>${W.length}</b>obras enviadas</div><div><b>${W.reduce((s,w)=>s+w.l,0)}</b>curtidas</div><div><b>${ORGS.length}</b>organizações parceiras</div></div>
 <div class="two"><div><h3>Por categoria</h3>${bars(n('cat'))}<h3 style="margin-top:20px">Por mês</h3>${bars(meses)}</div><div><h3>Por bairro</h3>${bars(n('b'))}</div></div></div></section>
 <section><div class="wrap"><h2 style="margin-bottom:6px">Exposições temáticas</h2><p style="color:var(--mut);margin:0 0 20px">Coleções organizadas pelas parceiras.</p><div class="two">${EXS.map(e=>`<div class="ex"><h3>${e[0]}</h3><p>${e[1]} ${W.filter(w=>w.ex===e[0]).length} obras.</p><a class="btn alt" href="artes.html?ex=${encodeURIComponent(e[0])}">Ver obras da exposição</a></div>`).join('')}</div></div></section>
 <section><div class="wrap"><h2 style="margin-bottom:6px">Pontos de coleta</h2><p style="color:var(--mut);margin:0 0 20px">Sem internet em casa? Leve sua obra, preencha o termo de autorização e a equipe digitaliza para você.</p><div class="grid">${PONTOS.map(p=>`<div class="card"><div class="b"><h3>${p[0]}</h3><p>${p[1]}</p></div></div>`).join('')}</div></div></section>`}

const PAGE=document.body.dataset.page,Q=new URLSearchParams(location.search);
if(Q.get('ex'))S.filt.e=Q.get('ex');
function route(){
 const m=$('#main');m.className=PAGE;
 if(PAGE==='inicio')m.innerHTML=inicio();
 else if(PAGE==='obras')m.innerHTML=Q.get('obra')?detalhe(Q.get('obra')):obras();
 else{m.innerHTML=orgs();const id=location.hash.slice(1),el=id&&document.getElementById(id);if(el){el.classList.add('hl');el.scrollIntoView({block:'center'})}}
}
addEventListener('hashchange',route);
document.addEventListener('click',e=>{
 const t=e.target.closest('[data-go],[data-vote],[data-like],[data-ex]');if(!t)return;
 if(t.dataset.go)location.href=t.dataset.go;
 if(t.dataset.vote&&!S.voted){const w=W.find(x=>x.id==t.dataset.vote);w.v++;S.voted=w.id;save();const y=scrollY;route();scrollTo(0,y)}
 if(t.dataset.like){const w=W.find(x=>x.id==t.dataset.like);w.liked=!w.liked;w.l+=w.liked?1:-1;save();const y=scrollY;route();scrollTo(0,y)}
 if(t.dataset.ex!==undefined&&t.classList.contains('pill')){S.filt.e=t.dataset.ex;route()}
 else if(t.dataset.ex!==undefined)S.filt.e=t.dataset.ex;
});
document.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.dataset?.go)location.href=e.target.dataset.go});
document.addEventListener('change',e=>{if(e.target.id==='fc'){S.filt.c=e.target.value;route()}if(e.target.id==='fb'){S.filt.b=e.target.value;route()}});
document.addEventListener('submit',e=>{
 e.preventDefault();const f=e.target;
 if(f.dataset.cm){const w=W.find(x=>x.id==f.dataset.cm);w.cm.push([$('#cn').value.trim(),$('#ct').value.trim()]);save();const y=scrollY;route();scrollTo(0,y);return}
 if(f.id!=='env')return;
 const v=i=>$('#'+i).value.trim(),er=$('#er'),tp=f.querySelector('input[name=tp]:checked').value,file=$('#i').files[0];
 if(!v('t')||!v('a'))return er.textContent='Preencha o título e o nome do autor.';
 if(!v('dt'))return er.textContent='Informe a data de criação da obra.';
 if(v('dt')>new Date().toISOString().slice(0,10))return er.textContent='A data de criação não pode ser no futuro.';
 const base={id:Math.max(...W.map(w=>w.id))+1,t:v('t'),a:v('a'),b:v('b')||'Outros',m:MES[+v('dt').slice(5,7)-1],ex:'',dt:v('dt'),d:'',alt:'',l:0,v:0,s:1,p:W.length%6,cm:[],liked:false};
 const fim=w=>{W.push(w);S.msg=save()?'Obra publicada! Ela já aparece na galeria.':'Obra publicada, mas o navegador não conseguiu guardá-la (espaço cheio).';$('#md').close();route();S.msg='';scrollTo(0,0)};
 if(tp==='texto'){
  if(v('tx').length<20)return er.textContent='Escreva o texto da obra (mínimo de 20 caracteres).';
  if(!$('#k').checked)return er.textContent='Marque a autorização de uso para publicar.';
  return fim({...base,cat:'Texto',tipo:'texto',txt:$('#tx').value.trim()})}
 if(!file)return er.textContent='Escolha a imagem da obra.';
 if(!['image/jpeg','image/png','image/webp'].includes(file.type))return er.textContent='Formato não aceito. Envie JPG, PNG ou WebP.';
 if(file.size>5*1024*1024)return er.textContent='A imagem passa de 5 MB. Reduza o tamanho e tente de novo.';
 if(!v('x'))return er.textContent='Escreva o texto alternativo para descrever a imagem.';
 if(!$('#k').checked)return er.textContent='Marque a autorização de uso da imagem para publicar.';
 const rd=new FileReader();rd.onload=()=>{const im=new Image();im.onload=()=>{const k=Math.min(1,900/im.width),cv=document.createElement('canvas');cv.width=im.width*k;cv.height=im.height*k;cv.getContext('2d').drawImage(im,0,0,cv.width,cv.height);
  fim({...base,cat:$('#c').value,tipo:'imagem',alt:v('x'),img:cv.toDataURL('image/jpeg',.82)})};im.src=rd.result};rd.readAsDataURL(file)});
document.addEventListener('click',e=>{const b=e.target.closest('[data-car]');if(!b)return;const t=document.getElementById(b.dataset.car),d=+b.dataset.d,end=t.scrollLeft+t.clientWidth>=t.scrollWidth-4;
 if(d>0&&end)t.scrollTo({left:0,behavior:'smooth'});else if(d<0&&t.scrollLeft<4)t.scrollTo({left:t.scrollWidth,behavior:'smooth'});else t.scrollBy({left:d*t.clientWidth,behavior:'smooth'})});
document.addEventListener('scroll',e=>{const t=e.target;if(!t.classList||!t.classList.contains('trk'))return;const n=t.children.length,i=Math.round(t.scrollLeft/t.clientWidth)+1,c=document.querySelector('.cnt[data-for="'+t.id+'"]');if(c)c.textContent=i+' / '+n},true);
const MODAL=`<dialog id="md" aria-labelledby="mt"><form id="env" novalidate>
<div class="mh"><h2 id="mt">Adicionar obra</h2><button type="button" class="x" data-close aria-label="Fechar">×</button></div>
<fieldset class="tp"><legend>Tipo de obra</legend>
<label class="tc"><input type="radio" name="tp" value="imagem" checked><span><b>Imagem</b><small>Pintura, foto, grafite, desenho</small></span></label>
<label class="tc"><input type="radio" name="tp" value="texto"><span><b>Texto</b><small>Poema, crônica, conto</small></span></label></fieldset>
<div class="g2"><div><label for="t">Título da obra</label><input id="t" type="text" maxlength="80"></div><div><label for="a">Nome do autor</label><input id="a" type="text" maxlength="60"></div></div>
<div class="g2"><div><label for="dt">Data de criação</label><input id="dt" type="date"></div><div><label for="b">Bairro (opcional)</label><input id="b" type="text" maxlength="40"></div></div>
<div id="pi" class="pp"><div><label for="c">Categoria</label><select id="c">${CATS.map(x=>`<option>${x}</option>`).join('')}</select></div>
<label class="dz"><span id="dzt"><b>Clique para escolher a imagem</b><br><small>JPG, PNG ou WebP, até 5 MB</small></span><img id="pv" hidden alt="Pré-visualização da imagem escolhida"><input id="i" type="file" class="sr" accept="image/jpeg,image/png,image/webp"></label>
<div><label for="x">Texto alternativo da imagem</label><input id="x" type="text" maxlength="160"><p class="hint">Descreva a obra para quem não consegue vê-la.</p></div></div>
<div id="pt" class="pp" hidden><div><label for="tx">Texto da obra</label><textarea id="tx" rows="8" maxlength="3000" placeholder="Escreva ou cole aqui o seu texto"></textarea></div></div>
<label class="ck"><input type="checkbox" id="k"> Autorizo o uso da obra no site e declaro que sou o autor ou tenho permissão do autor. Os direitos autorais continuam com o artista.</label>
<p class="err" id="er" role="alert"></p>
<div class="mf"><button type="button" class="btn alt" data-close>Cancelar</button><button class="btn">Publicar obra</button></div></form></dialog>`;
const tgl=t=>{$('#pi').hidden=t==='texto';$('#pt').hidden=t!=='texto'};
if(PAGE==='obras'){document.body.insertAdjacentHTML('beforeend',MODAL);
 document.addEventListener('click',e=>{
  if(e.target.closest('[data-open]')){const f=$('#env');f.reset();tgl('imagem');$('#er').textContent='';$('#pv').hidden=true;$('#dzt').hidden=false;$('#dt').max=new Date().toISOString().slice(0,10);$('#md').showModal()}
  else if(e.target.closest('[data-close]')||e.target.id==='md')$('#md').close()});
 document.addEventListener('change',e=>{
  if(e.target.name==='tp')tgl(e.target.value);
  if(e.target.id==='i'){const f=e.target.files[0],pv=$('#pv');if(f&&f.type.startsWith('image/')){pv.src=URL.createObjectURL(f);pv.hidden=false;$('#dzt').hidden=true}else{pv.hidden=true;$('#dzt').hidden=false}}})}
route();
