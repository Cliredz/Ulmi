/* ============================================================
   CONFIG — edit everything here. Nothing else in this file
   needs to change to personalize the birthday journey.
   ============================================================ */
const CONFIG = {
  recipientName: "Iyayuu",           // ganti dengan nama pasanganmu
  senderClosing: "Yang selalu bersyukur memilikimu,",
  senderName: "— Limii",
  letterParagraphs: [
    "Assalamu'alaikum warahmatullahi wabarakatuh lyayuu, HALOO HALOO.. EKHEM EKHEM, ada yang ulang tahun nihh yeee??🤭🤭",
    "Aku masih ingat Assalamu'alaikum warahmatullahi wabarakatuh lyayuu, HALOO HALOO.. EKHEM EKHEM, ada yang ulang tahun nihh yeee??🤭🤭-detail kecil yang mungkin sudah kamu lupakan: caramu tertawa sampai lupa bernapas, caramu diam saat sedang memikirkan sesuatu, dan caramu selalu memastikan aku baik-baik saja lebih dulu sebelum bertanya tentang dirimu sendiri.",
    "Lyayuu sudah berusia sembilan belas tahun yaa, ndak lama lagi bakal kepala dua nihh.. XIXIXII \nsemoga di usia sembilan belas tahun inii, lyayuu menjadii pribadi yang lebih baik, lebih bersemangatt, dan pantang mneyerah dalam menghadapi segala rintangan di kemudian harii lyayuu🤲✨️🤩",
    "lyayuu orangnyaa hebatt, terus jugaa rajin, baik, dan banyak lagii yang limii kagumi dari lyayuuu.. ohh yaaa, imii sudahh ada jawaban kenapaa imii suka lyayuu (imii udah pernah ceritain apa belum yaa?? imii lupaa, HEHEHE), jadii imii suka lyayuutuhh karnaa.. imii melihat dirinya imii dari dirinyaa lyayuu, imii ngerasa kita berdua punyaa  kesamaan satu sama lainn lyayuu, dari cara menyampaikan perasaan, sudut pandang yang tergolong sama, kebiasaan kebiasaan kita berdua yang menurutnya imii ndak jauh berbedaa. sekarang, rasa sukanya limii ke lyayuu, semakin lama semakin meningkatt, DUH ENTAH KENAPAA YAA.. HEHEHEE, IMIII Kagum sekali lahh dengan lyayuuu..🥳🤩✨️",
    "Lyayuuu, timakasiiiiii banyakk yaaa untuk semuanyaaa, pesannyaa imiii cuma satu, sesibuk dan sesulit apapun kita di kemudian hari, kita jangan sampai asing yaa lyayuu!!!😌😌",
    "SEMANGATT SEMANGATT TERUSS LYAYUU YANG LAGI ULTAH HARI INI YEE🤭🤭"
  ],
  memories: [
    { src:"Assets/images/ulmi1.jpg.jpeg", fallback:"Kenangan 01", caption:"awal yang tak kami rencanakan" },
    { src:"Assets/images/ulmi2.jpg.jpeg", fallback:"Kenangan 02", caption:"tawa yang masih kuingat suaranya" },
    { src:"Assets/images/ulmi3.jpg.jpeg", fallback:"Kenangan 03", caption:"hari biasa yang jadi istimewa" },
    { src:"Assets/images/ulmi4.jpg.jpeg", fallback:"Kenangan 04", caption:"perjalanan yang kami tempuh berdua" },
    { src:"Assets/images/ulmi5.jpg.jpeg", fallback:"Kenangan 05", caption:"momen kecil yang kusimpan diam-diam" },
    { src:"Assets/images/ulmi6.jpg.jpeg", fallback:"Kenangan 06", caption:"dan kami, masih berjalan bersama" }
  ],
  gift: {
    line1: "Ada satu hal lagi untukmu.",
    line2: "Buka ya."
  },
  music: {
    enabled: true,          // set false to disable music entirely
    src: "Assets/songs/song.mp3",
    volume: 0.35,
    loop: true,
    fadeMs: 900              // duration of the volume fade-in when the journey starts
  }
};

/* ---------- inject config into the page ---------- */
document.getElementById('nameSlot').textContent = CONFIG.recipientName;
document.getElementById('closingSlot').textContent = CONFIG.senderClosing;
document.getElementById('senderSlot').textContent = CONFIG.senderName;
document.getElementById('giftCue1').textContent = CONFIG.gift.line1;
document.getElementById('giftCue2').textContent = CONFIG.gift.line2;

const letterBody = document.getElementById('letterBody');
CONFIG.letterParagraphs.forEach((text, i)=>{
  const p = document.createElement('p');
  p.style.setProperty('--p-delay', (1.85 + i*0.32)+'s');
  p.textContent = text;
  if(i === CONFIG.letterParagraphs.length - 1){
    const heart = document.createElement('span');
    heart.className = 'heart-pulse';
    heart.textContent = '♡';
    p.appendChild(heart);
  }
  letterBody.appendChild(p);
});
document.getElementById('signoffBlock').style.setProperty('--signoff-delay', (1.85 + CONFIG.letterParagraphs.length*0.32 + 0.4)+'s');

/* ---------- build the six memory sections from CONFIG.memories ---------- */
const journeyTrack = document.getElementById('journeyTrack');
const giftSectionEl = document.getElementById('giftSection');
const memorySections = [];
CONFIG.memories.forEach((mem, i)=>{
  const side = (i % 2 === 0) ? 'left' : 'right';
  const section = document.createElement('section');
  section.className = `memory-section ${side} js-memory`;
  section.dataset.index = i;
  section.innerHTML = `
    <div class="memory-card" data-reveal>
      <div class="memory-glow"></div>
      <div class="memory-frame">
        <img src="${mem.src}" alt="Kenangan ${i+1}" data-fallback="${mem.fallback}">
      </div>
      <div class="memory-num">
        <span class="memory-index">${String(i+1).padStart(2,'0')} —</span>
        <span class="memory-caption">${mem.caption}</span>
      </div>
    </div>`;
  journeyTrack.insertBefore(section, giftSectionEl);
  memorySections.push(section);
});

/* ---------- couple SVG (walking, holding hands) ---------- */
document.getElementById('coupleFigure').innerHTML = `
<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="110" cy="182" rx="86" ry="8" fill="#5B5042" opacity="0.07"/>

  <!-- girl (behind, left) -->
  <g transform="translate(38,26)">
    <g class="leg leg-a" style="transform-box:fill-box; transform-origin:22px 122px;">
      <rect x="18" y="122" width="8" height="20" rx="3" fill="#F1D8B8"/>
    </g>
    <g class="leg leg-b" style="transform-box:fill-box; transform-origin:38px 122px;">
      <rect x="34" y="122" width="8" height="20" rx="3" fill="#F1D8B8"/>
    </g>
    <path d="M30 60 C10 70 6 100 14 130 L46 130 C50 104 48 82 30 60Z" fill="#F6C9DA"/>
    <g class="head-bob" style="transform-box:fill-box; transform-origin:30px 34px;">
      <circle cx="30" cy="34" r="17" fill="#3E3630"/>
      <circle cx="30" cy="36" r="14" fill="#F1D8B8"/>
      <path d="M14 30 C14 12 46 12 46 30 C46 22 40 16 30 16 C20 16 14 22 14 30Z" fill="#3E3630"/>
    </g>
    <g class="arm-swing" style="transform-box:fill-box; transform-origin:16px 66px;">
      <path d="M16 66 C6 76 4 90 10 98" stroke="#F1D8B8" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>
  </g>

  <!-- boy (front, right), hand held with girl -->
  <g transform="translate(112,30)">
    <g class="leg leg-a" style="transform-box:fill-box; transform-origin:24px 120px;">
      <rect x="20" y="120" width="8" height="20" rx="3" fill="#F1D8B8"/>
    </g>
    <g class="leg leg-b" style="transform-box:fill-box; transform-origin:36px 120px;">
      <rect x="32" y="120" width="8" height="20" rx="3" fill="#F1D8B8"/>
    </g>
    <path d="M28 56 C10 62 8 96 16 128 L52 128 C56 98 52 78 28 56Z" fill="#BAED91"/>
    <g class="head-bob" style="transform-box:fill-box; transform-origin:28px 32px;">
      <circle cx="28" cy="32" r="17" fill="#F1D8B8"/>
      <path d="M11 28 C11 12 45 12 45 28 C45 22 40 18 28 18 C16 18 11 22 11 28Z" fill="#5B4636"/>
    </g>
    <!-- linked hand / holding arm stays still relative to bodies -->
    <path d="M2 66 C-10 78 -12 92 -4 100" stroke="#F1D8B8" stroke-width="9" fill="none" stroke-linecap="round"/>
  </g>

  <circle cx="98" cy="100" r="5" fill="#F1D8B8"/>
</svg>`;

const coupleEl = document.getElementById('coupleFigure');

/* ---------- ambient parallax clouds — organic multi-puff clusters ---------- */
const cloudTints = ['rgba(246,201,218,0.5)', 'rgba(214,199,240,0.45)', 'rgba(210,228,246,0.45)', 'rgba(234,203,142,0.4)'];
function jitter(v, amt){ return v + (Math.random()*amt*2 - amt); }

function buildCloud(spec){
  const wrap = document.createElement('div');
  const blurClass = spec.depth === 'far' ? 'blur-far' : spec.depth === 'mid' ? 'blur-mid' : 'blur-near';
  wrap.className = 'cloud drift ' + blurClass;
  wrap.style.width = spec.w+'px';
  wrap.style.height = spec.h+'px';
  wrap.style.top = spec.top;
  wrap.style.left = spec.left;
  wrap.style.setProperty('--dur', spec.dur+'s');
  wrap.style.animationDuration = spec.dur+'s';
  wrap.style.opacity = spec.op;

  /* cumulus silhouette: a wide core, side lobes, top bumps and a soft
     base — jittered per-instance so no two clouds read as identical */
  const template = [
    {x:50, y:56, s:68},
    {x:24, y:62, s:44},
    {x:76, y:60, s:46},
    {x:37, y:34, s:40},
    {x:64, y:32, s:38},
  ];
  template.forEach(p=>{
    const puff = document.createElement('span');
    puff.className = 'puff';
    puff.style.left = jitter(p.x, 4)+'%';
    puff.style.top = jitter(p.y, 4)+'%';
    const s = jitter(p.s, 6);
    puff.style.width = s+'%';
    puff.style.height = (s*0.74)+'%';
    wrap.appendChild(puff);
  });
  /* one faint pastel-tinted puff low in the cluster for gentle shading */
  const tint = document.createElement('span');
  tint.className = 'puff tint';
  tint.style.setProperty('--puff-tint', spec.tint || cloudTints[Math.floor(Math.random()*cloudTints.length)]);
  tint.style.left = '50%';
  tint.style.top = '70%';
  tint.style.width = '78%';
  tint.style.height = '55%';
  wrap.appendChild(tint);

  return wrap;
}
function buildCloudLayer(container, specs){
  specs.forEach(c=> container.appendChild(buildCloud(c)));
}

/* far layer — large, soft banks running down the left/right edges and
   along the bottom, plus soft top corners, framing the whole viewport
   while the centre stays clear for the text (matches the reference) */
buildCloudLayer(document.getElementById('layerBg'), [
  {w:380,h:190,top:'-8%', left:'-16%', dur:78, op:0.55, depth:'far'}, // TL
  {w:380,h:190,top:'32%', left:'-18%', dur:84, op:0.5,  depth:'far'}, // L-mid
  {w:380,h:190,top:'72%', left:'-16%', dur:80, op:0.55, depth:'far'}, // BL
  {w:400,h:190,top:'-8%', left:'62%',  dur:82, op:0.55, depth:'far'}, // TR
  {w:400,h:190,top:'32%', left:'64%',  dur:88, op:0.5,  depth:'far'}, // R-mid
  {w:400,h:190,top:'72%', left:'62%',  dur:86, op:0.55, depth:'far'}, // BR
  {w:440,h:160,top:'84%', left:'22%',  dur:94, op:0.4,  depth:'far'}, // bottom-centre thickener
]);
/* mid layer — denser, more defined clouds tight along the edges */
buildCloudLayer(document.getElementById('layerMid'), [
  {w:260,h:130,top:'0%',  left:'-9%', dur:48, op:0.68, depth:'mid'},
  {w:250,h:125,top:'44%', left:'-10%',dur:52, op:0.62, depth:'mid'},
  {w:260,h:130,top:'80%', left:'-6%', dur:44, op:0.62, depth:'mid'},
  {w:260,h:130,top:'0%',  left:'78%', dur:50, op:0.68, depth:'mid'},
  {w:250,h:125,top:'44%', left:'80%', dur:56, op:0.62, depth:'mid'},
  {w:260,h:130,top:'80%', left:'76%', dur:46, op:0.62, depth:'mid'},
]);
/* fg layer — small, crisp accents right at the extreme edges/corners */
buildCloudLayer(document.getElementById('layerFg'), [
  {w:150,h:75,top:'8%',  left:'88%', dur:26, op:0.7,  depth:'near'},
  {w:150,h:75,top:'88%', left:'4%',  dur:28, op:0.68, depth:'near'},
  {w:130,h:65,top:'52%', left:'-2%', dur:24, op:0.6,  depth:'near'},
  {w:130,h:65,top:'20%', left:'-4%', dur:25, op:0.62, depth:'near'},
  {w:140,h:70,top:'92%', left:'68%', dur:27, op:0.6,  depth:'near'},
]);

/* dreamy falling petals + light motes on page 1 */
const cloudLayerRoot = document.getElementById('cloudLayer');
const dreamColors = ['#F6E1E6','#E2EEF6','#EACB8E','#FBF6EE'];
for(let i=0;i<16;i++){
  const el = document.createElement('div');
  const light = Math.random() < 0.45;
  el.className = 'dream-petal' + (light ? ' is-light' : '');
  const size = light ? (3+Math.random()*3) : (7+Math.random()*7);
  el.style.width = size+'px';
  el.style.height = (light ? size : size*0.75)+'px';
  el.style.left = (Math.random()*100)+'%';
  el.style.background = light
    ? dreamColors[i % dreamColors.length]
    : `radial-gradient(circle at 32% 30%, rgba(255,255,255,0.9), ${dreamColors[i % dreamColors.length]} 72%)`;
  el.style.setProperty('--drift', (Math.random()*70-35)+'px');
  el.style.setProperty('--peak-op', (light ? 0.35+Math.random()*0.2 : 0.4+Math.random()*0.25));
  el.style.animationDuration = (14+Math.random()*12)+'s';
  el.style.animationDelay = (Math.random()*16)+'s';
  cloudLayerRoot.appendChild(el);
}
for(let i=0;i<12;i++){
  const m = document.createElement('div');
  m.className = 'mote';
  m.style.left = (Math.random()*100)+'%';
  m.style.top = (30+Math.random()*60)+'%';
  m.style.animationDelay = (Math.random()*9)+'s';
  m.style.animationDuration = (7+Math.random()*5)+'s';
  cloudLayerRoot.appendChild(m);
}
const dreamHeartColors = ['#E39FB6','#D98FAE','#F0C3D2'];
for(let i=0;i<9;i++){
  const h = document.createElement('div');
  h.className = 'dream-heart';
  h.textContent = '♥';
  const size = 9 + Math.random()*14;
  h.style.fontSize = size+'px';
  h.style.left = (5 + Math.random()*90)+'%';
  h.style.color = dreamHeartColors[i % dreamHeartColors.length];
  h.style.filter = 'drop-shadow(0 0 4px rgba(217,143,174,0.5))';
  h.style.setProperty('--h-drift', (Math.random()*44-22)+'px');
  h.style.setProperty('--h-op', (0.32+Math.random()*0.28).toFixed(2));
  h.style.animationDuration = (11+Math.random()*9)+'s';
  h.style.animationDelay = (Math.random()*13)+'s';
  cloudLayerRoot.appendChild(h);
}

/* soft bokeh glows drifting near the edges of the sky */
const bokehColors = ['rgba(234,203,142,0.55)','rgba(246,201,218,0.5)','rgba(214,199,240,0.5)','rgba(210,228,246,0.5)'];
const bokehSpots = [{x:8,y:20},{x:90,y:16},{x:14,y:78},{x:88,y:82},{x:50,y:8}];
bokehSpots.forEach((pos,i)=>{
  const b = document.createElement('div');
  b.className = 'bokeh';
  const size = 60 + Math.random()*50;
  b.style.width = size+'px';
  b.style.height = size+'px';
  b.style.left = pos.x+'%';
  b.style.top = pos.y+'%';
  b.style.background = `radial-gradient(circle, ${bokehColors[i % bokehColors.length]}, transparent 70%)`;
  b.style.animationDuration = (8+Math.random()*6)+'s';
  b.style.animationDelay = (Math.random()*5)+'s';
  cloudLayerRoot.appendChild(b);
});

/* tiny twinkling stars scattered across the upper sky */
for(let i=0;i<12;i++){
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = (Math.random()*100)+'%';
  s.style.top = (4 + Math.random()*46)+'%';
  s.style.setProperty('--s-op', (0.5+Math.random()*0.4).toFixed(2));
  s.style.animationDuration = (2.6+Math.random()*3)+'s';
  s.style.animationDelay = (Math.random()*6)+'s';
  cloudLayerRoot.appendChild(s);
}

/* a handful of larger, cross-shaped bright sparkles scattered near the edges */
const bigSparkleSpots = [
  {x:5,y:16},{x:22,y:38},{x:94,y:12},{x:80,y:30},{x:10,y:66},{x:90,y:70}
];
bigSparkleSpots.forEach(pos=>{
  const sp = document.createElement('div');
  sp.className = 'sparkle-4';
  const size = 12 + Math.random()*10;
  sp.style.width = size+'px';
  sp.style.height = size+'px';
  sp.style.left = pos.x+'%';
  sp.style.top = pos.y+'%';
  sp.style.setProperty('--s-op', (0.75+Math.random()*0.2).toFixed(2));
  sp.style.animationDuration = (3+Math.random()*2.5)+'s';
  sp.style.animationDelay = (Math.random()*5)+'s';
  const bar = document.createElement('div');
  bar.className = 'bar-v';
  sp.appendChild(bar);
  cloudLayerRoot.appendChild(sp);
});

/* faint diagonal light streaks / comet trails, upper sky only */
const streakSpecs = [
  {top:'9%',  left:'6%',  width:150, rot:-20, dur:8, delay:1},
  {top:'6%',  left:'70%', width:170, rot:16,  dur:9, delay:3.5},
];
streakSpecs.forEach(sp=>{
  const ls = document.createElement('div');
  ls.className = 'light-streak';
  ls.style.top = sp.top;
  ls.style.left = sp.left;
  ls.style.width = sp.width+'px';
  ls.style.transform = `rotate(${sp.rot}deg)`;
  ls.style.animationDuration = sp.dur+'s';
  ls.style.animationDelay = sp.delay+'s';
  cloudLayerRoot.appendChild(ls);
});

/* scroll-driven parallax offset (background moves slower than midground/foreground) */
const layerBg = document.getElementById('layerBg');
const layerMid = document.getElementById('layerMid');
const layerFg = document.getElementById('layerFg');
let lastScrollY = -1;
function updateParallax(){
  const y = window.scrollY;
  if(y !== lastScrollY){
    layerBg.style.transform = `translateY(${y * -0.03}px)`;
    layerMid.style.transform = `translateY(${y * -0.08}px)`;
    layerFg.style.transform = `translateY(${y * -0.15}px)`;
    lastScrollY = y;
  }
  requestAnimationFrame(updateParallax);
}
requestAnimationFrame(updateParallax);

/* subtle parallax float on visible memory photos */
function updateMemoryParallax(){
  const vh = window.innerHeight;
  memorySections.forEach(sec=>{
    const frame = sec.querySelector('.memory-frame');
    if(!frame) return;
    const rect = sec.getBoundingClientRect();
    if(rect.bottom < 0 || rect.top > vh) return;
    const centerOffset = (rect.top + rect.height/2) - vh/2;
    const shift = Math.max(-10, Math.min(10, centerOffset * -0.015));
    frame.style.transform = `translateY(${shift}px)`;
  });
  requestAnimationFrame(updateMemoryParallax);
}
requestAnimationFrame(updateMemoryParallax);

/* ---------- placeholder fallback for memory photos ---------- */
document.querySelectorAll('.memory-frame img').forEach(img=>{
  img.addEventListener('error', ()=>{
    img.style.display='none';
    const frame = img.closest('.memory-frame');
    frame.classList.add('placeholder');
    frame.dataset.label = img.dataset.fallback || 'kenangan';
  }, {once:true});
});

/* ---------- scroll reveal ---------- */
const revealTargets = document.querySelectorAll('[data-reveal], .memory-card');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('in-view'); }
  });
}, {threshold:0.25});
revealTargets.forEach(t=>io.observe(t));

/* ---------- journey progress indicator ---------- */
const progressEl = document.getElementById('journeyProgress');
const memoryIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting && e.intersectionRatio > 0.4){
      const idx = Number(e.target.dataset.index);
      progressEl.textContent = `${String(idx+1).padStart(2,'0')} / ${CONFIG.memories.length}`;
      progressEl.classList.add('show');
    }
  });
}, {threshold:[0.4]});
memorySections.forEach(s=>memoryIO.observe(s));

const heroEl = document.getElementById('hero');
const coupleStage = document.getElementById('coupleStage');
const heroIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      progressEl.classList.remove('show');
      coupleStage.classList.remove('show');
    } else {
      coupleStage.classList.add('show');
    }
  });
}, {threshold:0.6});
heroIO.observe(heroEl);

/* ---------- gift arrival: pause the couple, reveal messages ---------- */
const giftWrap = document.getElementById('giftWrap');
const giftCue2 = document.getElementById('giftCue2');
const skyBg = document.getElementById('skyBg');
let arrived = false;
const giftIO = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting && e.intersectionRatio > 0.5 && !arrived){
      arrived = true;
      coupleEl.classList.add('paused');
      giftWrap.classList.add('arrived');
      skyBg.classList.add('calm');
      setTimeout(()=>{ giftCue2.classList.add('show'); }, 1400);
    } else if(!e.isIntersecting && arrived === true && e.boundingClientRect.top > 0){
      // scrolled back up above the gift — resume walking
      arrived = false;
      coupleEl.classList.remove('paused');
      giftWrap.classList.remove('arrived');
      skyBg.classList.remove('calm');
      giftCue2.classList.remove('show');
    }
  });
}, {threshold:[0.5]});
giftIO.observe(giftSectionEl);

/* sparkles around the gift once arrived */
(function seedGiftSparkles(){
  const wrap = giftWrap;
  for(let i=0;i<6;i++){
    const s = document.createElement('div');
    s.className = 'sparkle';
    s.style.left = (20 + Math.random()*110)+'px';
    s.style.top = (Math.random()*90)+'px';
    s.style.animationDelay = (Math.random()*2.6)+'s';
    wrap.appendChild(s);
  }
})();

/* ---------- automatic journey ---------- */
const startBtn = document.getElementById('startBtn');
const skipBtn = document.getElementById('skipBtn');
let journeyActive = false;
let journeyCancelled = false;

function spawnButtonBurst(originEl){
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  for(let i=0;i<10;i++){
    const p = document.createElement('div');
    p.className = 'burst-particle';
    const angle = (Math.PI*2*i)/10;
    const dist = 40 + Math.random()*30;
    p.style.left = cx+'px';
    p.style.top = cy+'px';
    p.style.setProperty('--bx', Math.cos(angle)*dist+'px');
    p.style.setProperty('--by', Math.sin(angle)*dist+'px');
    document.body.appendChild(p);
    p.addEventListener('animationend', ()=>p.remove());
  }
}

function wait(ms){ return new Promise(res=>setTimeout(res, ms)); }

async function runJourney(){
  journeyActive = true;
  journeyCancelled = false;
  skipBtn.classList.add('show');
  await wait(900);
  const waypoints = [...memorySections, giftSectionEl];
  for(const wp of waypoints){
    if(journeyCancelled) return;
    wp.scrollIntoView({behavior:'smooth', block:'center'});
    await wait(1500);
    if(journeyCancelled) return;
    await wait(wp === giftSectionEl ? 400 : 1700); // dwell on each memory
  }
  skipBtn.classList.remove('show');
  journeyActive = false;
}

function cancelJourney(){
  journeyCancelled = true;
  journeyActive = false;
  skipBtn.classList.remove('show');
}

startBtn.addEventListener('click', ()=>{
  startBtn.classList.add('pressed');
  spawnButtonBurst(startBtn);
  heroEl.classList.add('faded');
  startBtn.disabled = true;
  attemptMusicStart();
  setTimeout(()=>{ runJourney(); }, 350);
});

skipBtn.addEventListener('click', cancelJourney);

/* if the user manually scrolls/touches during the auto journey, hand control back to them */
['wheel','touchmove','keydown'].forEach(evt=>{
  window.addEventListener(evt, ()=>{ if(journeyActive) cancelJourney(); }, {passive:true});
});

/* ---------- gift click -> transition to page 2 ---------- */
const giftBtn = document.getElementById('giftBtn');
const overlay = document.getElementById('transition-overlay');
const page1 = document.getElementById('page1');
const page2 = document.getElementById('page2');
const p2Content = document.getElementById('p2Content');
const p2Light = document.getElementById('p2Light');

function spawnGiftParticles(originEl){
  const rect = originEl.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  const colors = ['#EACB8E','#F6C9DA','#BAED91','#fff'];
  for(let i=0;i<18;i++){
    const p = document.createElement('div');
    p.className = 'gift-particle';
    const size = 4 + Math.random()*5;
    p.style.width = size+'px';
    p.style.height = size+'px';
    p.style.background = colors[i % colors.length];
    p.style.left = cx+'px';
    p.style.top = cy+'px';
    const angle = Math.random()*Math.PI*2;
    const dist = 60 + Math.random()*90;
    p.style.setProperty('--gx', Math.cos(angle)*dist+'px');
    p.style.setProperty('--gy', Math.sin(angle)*dist+'px');
    p.style.animationDelay = (Math.random()*0.15)+'s';
    document.body.appendChild(p);
    p.addEventListener('animationend', ()=>p.remove());
  }
}

function spawnPetals(){
  const layer = document.getElementById('petalLayer');
  const colors = ['#F6C9DA','#BAED91','#F6E1E6'];
  for(let i=0;i<16;i++){
    const p = document.createElement('div');
    p.className='petal';
    const size = 8 + Math.random()*10;
    p.style.width = size+'px';
    p.style.height = size*0.8+'px';
    p.style.left = (Math.random()*100)+'%';
    p.style.background = colors[i % colors.length];
    p.style.setProperty('--drift', (Math.random()*80-40)+'px');
    p.style.animationDuration = (9+Math.random()*8)+'s';
    p.style.animationDelay = (Math.random()*10)+'s';
    layer.appendChild(p);
  }
}

/* a few bouquet sparkles + separating petals, added once */
(function seedBouquet(){
  const wrap = document.getElementById('bouquetWrap');
  for(let i=0;i<4;i++){
    const s = document.createElement('div');
    s.className = 'bq-sparkle';
    s.style.left = (60 + Math.random()*100)+'px';
    s.style.top = (20 + Math.random()*90)+'px';
    s.style.animationDelay = (Math.random()*3)+'s';
    wrap.appendChild(s);
  }
  for(let i=0;i<3;i++){
    const p = document.createElement('div');
    p.className = 'bq-petal-fall';
    p.style.left = (75 + Math.random()*70)+'px';
    p.style.top = (55 + Math.random()*40)+'px';
    p.style.animationDelay = (i*1.6 + Math.random())+'s';
    wrap.appendChild(p);
  }
})();

let opened = false;
function openGift(){
  if(opened) return;
  opened = true;
  journeyCancelled = true;
  giftBtn.classList.add('popping');
  spawnGiftParticles(giftBtn);
  setTimeout(()=>{
    overlay.classList.add('opening');
  }, 260);
  setTimeout(()=>{
    page1.style.display='none';
    page2.classList.add('visible');
    spawnPetals();
    requestAnimationFrame(()=>{
      p2Content.classList.add('reveal');
    });
    window.scrollTo(0,0);
    setTimeout(()=>p2Light.classList.add('settled'), 250);
    document.getElementById('musicBtn').classList.add('show');
  }, 900);
  setTimeout(()=>{
    overlay.classList.remove('opening');
  }, 1550);
}
giftBtn.addEventListener('click', openGift);
giftBtn.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') openGift(); });

/* ---------- back link resets to page 1 ---------- */
document.getElementById('backLink').addEventListener('click', (e)=>{
  e.preventDefault();
  page2.classList.remove('visible');
  p2Content.classList.remove('reveal');
  p2Light.classList.remove('settled');
  page1.style.display='block';
  opened = false;
  arrived = false;
  coupleEl.classList.remove('paused');
  coupleStage.classList.remove('show');
  giftWrap.classList.remove('arrived');
  skyBg.classList.remove('calm');
  giftCue2.classList.remove('show');
  window.scrollTo(0,0);
});

/* ---------- tiny hearts on tap (page 2) ---------- */
const MAX_HEARTS = 12;
let activeHearts = 0;
const heartColors = ['#D98FAE','#6E9A4C','#F6C9DA'];
page2.addEventListener('pointerdown', (e)=>{
  if(e.target.closest('.back-link') || e.target.closest('.music-btn')) return;
  if(activeHearts >= MAX_HEARTS) return;
  activeHearts++;
  const heart = document.createElement('div');
  heart.className = 'tap-heart';
  heart.textContent = '♡';
  heart.style.left = e.clientX+'px';
  heart.style.top = e.clientY+'px';
  heart.style.color = heartColors[Math.floor(Math.random()*heartColors.length)];
  heart.style.setProperty('--hx', (Math.random()*40-20)+'px');
  document.body.appendChild(heart);
  heart.addEventListener('animationend', ()=>{ heart.remove(); activeHearts--; });
});

/* ---------- background music ----------
   Starts only on the "Mulai perjalanan" click (a real user gesture,
   so mobile autoplay restrictions are respected), fades in smoothly,
   and then just keeps playing — page1/page2 are divs within the same
   script, not real navigations, so the single Audio element's
   position is naturally preserved when moving between them or
   coming back to page 1. */
const bgMusic = new Audio();
bgMusic.loop = CONFIG.music.loop;
bgMusic.volume = 0;
bgMusic.preload = 'none';
let musicAvailable = true;
let musicStarted = false;   // true once the journey-start play has been attempted
let musicPlaying = false;
let fadeRAF = null;
const musicBtn = document.getElementById('musicBtn');
const iconPlay = document.getElementById('musicIconPlay');
const iconPause = document.getElementById('musicIconPause');

bgMusic.addEventListener('error', ()=>{
  musicAvailable = false;
  musicBtn.classList.remove('show');
}, {once:true});

function setPlayingUI(isPlaying){
  musicPlaying = isPlaying;
  musicBtn.classList.toggle('playing', isPlaying);
  iconPlay.style.display = isPlaying ? 'none' : 'block';
  iconPause.style.display = isPlaying ? 'block' : 'none';
}

/* smoothly ramps bgMusic.volume from 0 up to the configured level */
function fadeMusicIn(){
  if(fadeRAF) cancelAnimationFrame(fadeRAF);
  const target = CONFIG.music.volume;
  const duration = CONFIG.music.fadeMs || 900;
  const start = performance.now();
  function step(now){
    const t = Math.min(1, (now - start) / duration);
    bgMusic.volume = target * t;
    if(t < 1){
      fadeRAF = requestAnimationFrame(step);
    } else {
      fadeRAF = null;
    }
  }
  fadeRAF = requestAnimationFrame(step);
}

/* called once, from the "Mulai perjalanan" click — the journey's
   real starting moment, and the user gesture browsers require */
function startJourneyMusic(){
  if(musicStarted || !CONFIG.music.enabled || !CONFIG.music.src) return;
  musicStarted = true;
  try{
    bgMusic.src = CONFIG.music.src;
    bgMusic.currentTime = 0;
    bgMusic.volume = 0;
    bgMusic.play().then(()=>{
      setPlayingUI(true);
      fadeMusicIn();
    }).catch(()=>{
      /* autoplay blocked or file missing — the hidden toggle button
         (revealed on page 2) still lets the user start it manually */
      musicStarted = false;
    });
  }catch(err){
    musicAvailable = false;
    musicBtn.classList.remove('show');
  }
}

/* kept for backward compatibility with the earlier call site */
function attemptMusicStart(){ startJourneyMusic(); }

/* if the browser itself pauses playback (tab backgrounded, OS
   audio-focus interruption, low-power mode, etc.) just reflect that
   in the UI rather than letting anything break; resume quietly when
   the tab is visible again since this continues already-permitted
   playback rather than starting fresh */
bgMusic.addEventListener('pause', ()=>{ setPlayingUI(false); });
bgMusic.addEventListener('play', ()=>{ setPlayingUI(true); });
document.addEventListener('visibilitychange', ()=>{
  if(!document.hidden && musicStarted && musicAvailable && bgMusic.paused && !bgMusic.ended){
    bgMusic.play().catch(()=>{ /* still blocked — leave it to the toggle button */ });
  }
});

musicBtn.addEventListener('click', ()=>{
  if(!musicAvailable) return;
  try{
    if(!bgMusic.src){
      /* music never got a chance to start (autoplay was blocked) —
         this manual tap is the user gesture that starts it now */
      musicStarted = true;
      bgMusic.src = CONFIG.music.src;
      bgMusic.currentTime = 0;
      bgMusic.volume = 0;
      bgMusic.play().then(fadeMusicIn).catch(()=>{
        musicAvailable = false;
        musicBtn.classList.remove('show');
      });
    } else if(musicPlaying){
      bgMusic.pause();
    } else {
      bgMusic.play().catch(()=>{
        musicAvailable = false;
        musicBtn.classList.remove('show');
      });
    }
  }catch(err){
    musicAvailable = false;
    musicBtn.classList.remove('show');
  }
});
