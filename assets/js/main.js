/* Mars Tactics Guide — Full Data & Logic */
const guidesData = [
  {
    id:'beginner-guide',title:'Mars Tactics Beginner Guide — Everything You Need to Know Before Playing',
    category:'beginner',tag:'Beginner',featured:true,author:'MarsGuide Team',date:'2026-05-30',views:0,likes:0,
    excerpt:'New to Mars Tactics? Learn the core mechanics, choose your faction, master combat basics, and avoid rookie mistakes in this comprehensive starter guide.',
    content:`
<h2>What is Mars Tactics?</h2>
<p>Mars Tactics is a turn-based tactical strategy game set on a colonized Mars. Think <strong>XCOM meets grand strategy</strong> — you command squads in tactical battles while managing a planet-wide campaign of logistics, research, and territory control.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#choose">1. Choosing Your Faction</a><a href="#combat">2. Combat Fundamentals</a><a href="#strategy">3. The Strategy Layer</a><a href="#tips">4. 10 Pro Tips</a></div>

<h2 id="choose">1. Choosing Your Faction</h2>
<p>You have two choices, and they play <strong>completely differently</strong>:</p>
<div class="table-wrap"><table>
<tr><th></th><th>🔵 Capital</th><th>🔴 Labor</th></tr>
<tr><td>Difficulty</td><td>Easier start</td><td>Harder start, snowballs later</td></tr>
<tr><td>Resources</td><td>Abundant (from Earth)</td><td>Scarce (must scavenge)</td></tr>
<tr><td>Units</td><td>Mechs, heavy weapons</td><td>Guerrilla fighters, improvised gear</td></tr>
<tr><td>Playstyle</td><td>Defensive, entrenched</td><td>Aggressive, mobile</td></tr>
</table></div>
<blockquote>🔰 <strong>Recommendation:</strong> Start with Capital to learn mechanics, then replay as Labor for the full challenge.</blockquote>

<h2 id="combat">2. Combat Fundamentals</h2>
<h3>The 360° Aim System</h3>
<p>You can shoot at <strong>anything in line of sight</strong> — including ceilings, walls, and the floor. This enables:</p>
<ul><li>Shooting through walls to hit enemies behind cover</li><li>Dropping ceilings on enemies below</li><li>Creating your own sightlines by destroying obstacles</li></ul>
<h3>Suppression System</h3>
<p>Even <strong>missed shots matter</strong>. Taking fire reduces enemy Action Points. Successful suppression <strong>steals AP</strong> for your squad — stack multiple units firing on one target to completely lock it down.</p>
<h3>Throwable Sharing</h3>
<p>You can <strong>toss unprimed grenades and spare magazines</strong> between squad members mid-battle. A pinned soldier can receive ammo from a teammate without either moving from cover.</p>

<h2 id="strategy">3. The Strategy Layer</h2>
<ul><li><strong>Base Building:</strong> Develop tech, train soldiers, invest in engineers and scientists</li><li><strong>Supply Lines:</strong> Build railways, guard convoys — poorly supplied troops suffer combat penalties</li><li><strong>Reinforcements:</strong> Adjacent squads join battles; artillery support from neighboring regions</li><li><strong>Prisoners:</strong> Capture enemies, interrogate for intel, ransom them, or rescue your own captured troops</li></ul>

<h2 id="tips">4. 10 Pro Tips for Beginners</h2>
<ol>
<li>Always keep your supply lines secure — a cut-off squad is a dead squad</li>
<li>Use suppression fire liberally — stealing AP wins fights</li>
<li>Destroy terrain to create new firing angles</li>
<li>Don't hoard grenades — toss them to teammates who need them</li>
<li>Capture prisoners early — intel reveals enemy positions on the map</li>
<li>Invest in railways before expanding too far</li>
<li>Labor: manufacture your own weapons instead of waiting for drops</li>
<li>Capital: time your offensives with Earth supply shipments</li>
<li>Veteran soldiers with cybernetic upgrades are worth more than fresh recruits</li>
<li>Wrecking an enemy ice mine drives up water prices — use economic warfare</li>
</ol>
    `
  },
  {
    id:'capital-guide',title:'Capital Faction Deep Dive — Mastering Mellon Corporation',
    category:'faction',tag:'Factions',featured:true,author:'MarsGuide Team',date:'2026-05-28',views:0,likes:0,
    excerpt:'Full Capital strategy guide: optimal research order, mech compositions, supply chain management, and how to keep shareholders happy while crushing the revolution.',
    content:`
<h2>🔵 Capital Overview</h2>
<p>As the Mellon Corporation's enforcer, you start from a position of supremacy. Your forces are better equipped, better trained, and backed by the full might of Earth's industrial complex. But power comes with strings attached.</p>

<h2>Core Mechanics</h2>
<h3>Earth Supply Chain</h3>
<p>Unlike Labor, you don't manufacture locally. Equipment arrives via <strong>orbital supply drops from Earth</strong>. This means:</p>
<ul><li>Higher quality gear than Labor can produce</li><li>But you must wait for shipments — plan offensives around delivery schedules</li><li>Protect your landing zones — losing a supply drop is devastating</li></ul>

<h3>Shareholder Demands</h3>
<p>The "fat cats" back on Earth constantly demand results. Failing objectives or wasting resources hurts your <strong>corporate standing</strong>, which can reduce future supply allocations.</p>

<h2>Recommended Build Order</h2>
<div class="table-wrap"><table>
<tr><th>Priority</th><th>Research</th><th>Why</th></tr>
<tr><td>1</td><td>Advanced Logistics</td><td>Faster supply drops, bigger shipments</td></tr>
<tr><td>2</td><td>Mech Armor Plating</td><td>Your mechs are your backbone — keep them alive</td></tr>
<tr><td>3</td><td>Orbital Reconnaissance</td><td>Reveals enemy positions before committing troops</td></tr>
<tr><td>4</td><td>Shareholder Relations</td><td>Better mission rewards, fewer penalty demands</td></tr>
</table></div>

<h2>Combat Strategy</h2>
<ul><li><strong>Anchor with mechs:</strong> Deploy mechs as mobile cover for infantry</li><li><strong>Suppressive fire:</strong> Your superior ammo supply means you can afford to suppress</li><li><strong>Defensive posture:</strong> You're the entrenched power — let Labor come to you</li></ul>
    `
  },
  {
    id:'labor-guide',title:'Labor Faction Guide — Winning the Revolution',
    category:'faction',tag:'Factions',featured:true,author:'MarsGuide Team',date:'2026-05-28',views:0,likes:0,
    excerpt:'Master the Labor uprising: guerrilla warfare tactics, local manufacturing optimization, territory expansion, and turning the Red Planet even redder.',
    content:`
<h2>🔴 Labor Overview</h2>
<p>You start with nothing — scavenged equipment, untrained volunteers, and a dream. But Labor's ability to <strong>manufacture weapons locally</strong> and adapt on the fly makes it the most rewarding faction to master.</p>

<h2>Core Mechanics</h2>
<h3>Local Manufacturing</h3>
<p>Your biggest advantage: <strong>you don't wait for Earth</strong>. Build workshops, develop blueprints, and produce weapons tailored to your tactical needs.</p>
<ul><li>Customize guns for specific missions</li><li>No supply chain dependency — you ARE the supply chain</li><li>Captured Capital equipment can be reverse-engineered</li></ul>

<h2>Early Game Survival</h2>
<div class="table-wrap"><table>
<tr><th>Turn</th><th>Priority</th></tr>
<tr><td>1-5</td><td>Secure resource deposits, avoid Capital patrols</td></tr>
<tr><td>5-10</td><td>Build first workshop, start manufacturing basic weapons</td></tr>
<tr><td>10-15</td><td>Capture a railway hub — mobility is survival</td></tr>
<tr><td>15+</td><td>Start taking territory, convert population to your cause</td></tr>
</table></div>

<h2>Combat Style</h2>
<ul><li><strong>Hit and run:</strong> Strike isolated Capital units, retreat before reinforcements</li><li><strong>Terrain advantage:</strong> Destroy infrastructure Capital depends on</li><li><strong>Snowball:</strong> Each victory converts more workers to your cause</li></ul>
    `
  },
  {
    id:'weapon-customization',title:'Weapon Customization — Gun Grid Editor Explained',
    category:'weapons',tag:'Weapons',featured:true,author:'MarsGuide Team',date:'2026-05-25',views:0,likes:0,
    excerpt:'Master the Gun Grid Editor: caliber selection, scope attachments, stock types, and how to build the perfect weapon for every tactical situation.',
    content:`
<h2>🔫 The Gun Grid Editor</h2>
<p>Mars Tactics features an extensive weapon customization system where you can modify every aspect of your firearms using a grid-based interface.</p>

<h2>Attachment Categories</h2>
<div class="table-wrap"><table>
<tr><th>Slot</th><th>Options</th><th>Effect</th></tr>
<tr><td>Caliber</td><td>5.56, 7.62, .50, 9mm</td><td>Damage, penetration, ammo weight</td></tr>
<tr><td>Scope</td><td>Iron, Red Dot, ACOG, Sniper</td><td>Accuracy at range, AP cost to aim</td></tr>
<tr><td>Stock</td><td>Folding, Fixed, Precision</td><td>Stability, weight, mobility</td></tr>
<tr><td>Barrel</td><td>Short, Standard, Long, Suppressed</td><td>Range, noise, heat management</td></tr>
<tr><td>Underbarrel</td><td>Grip, Bipod, Grenade Launcher</td><td>Recoil control, special functions</td></tr>
</table></div>

<h2>Recommended Builds</h2>
<ul><li><strong>Assault Rifle:</strong> Red Dot + Folding Stock + Standard Barrel → Balanced for medium range</li><li><strong>DMR:</strong> ACOG + Precision Stock + Long Barrel → Accurate at distance</li><li><strong>CQB:</strong> Iron Sights + Folding Stock + Short Barrel → Low AP cost, high mobility</li></ul>
    `
  },
  {
    id:'combat-tactics',title:'Advanced Combat Tactics — Destructible Environments & Ballistics',
    category:'combat',tag:'Combat',featured:false,author:'MarsGuide Team',date:'2026-05-22',views:0,likes:0,
    excerpt:'Deep dive into the combat system: fully destructible terrain, ballistic simulation, creative kill strategies, and environmental warfare.',
    content:'<h2>Coming at launch</h2><p>Full combat tactics guide will be updated when the game releases in late 2026.</p>'
  },
  {
    id:'base-building',title:'Base Building & Logistics — Optimal Layouts & Supply Chains',
    category:'base',tag:'Base Building',featured:false,author:'MarsGuide Team',date:'2026-05-20',views:0,likes:0,
    excerpt:'How to build efficient bases, manage supply lines, construct railways, and keep your troops fed and armed across the Martian surface.',
    content:'<h2>Coming at launch</h2><p>Full base building guide will be updated when the game releases in late 2026.</p>'
  },
  {
    id:'cybernetics-guide',title:'Cybernetic Upgrades — Turning Veterans into Super-Soldiers',
    category:'combat',tag:'Combat',featured:false,author:'MarsGuide Team',date:'2026-05-18',views:0,likes:0,
    excerpt:'Every cybernetic upgrade explained: which augments to prioritize, how to save wounded veterans, and building your ultimate cyborg squad.',
    content:'<h2>Coming at launch</h2><p>Full cybernetics guide will be updated when the game releases in late 2026.</p>'
  },
  {
    id:'economy-guide',title:'Mars Economy System — UBI, Labor Camps & Market Manipulation',
    category:'economy',tag:'Economy',featured:false,author:'MarsGuide Team',date:'2026-05-15',views:0,likes:0,
    excerpt:'Understand emergent economics: how wrecking an ice mine crashes the water market, UBI strategies, and neoliberal vs police state governance.',
    content:'<h2>Coming at launch</h2><p>Full economy guide will be updated when the game releases in late 2026.</p>'
  }
];

function getParam(p){return new URL(window.location.href).searchParams.get(p)}
function fmtNum(n){return n>=1000?(n/1000).toFixed(1)+'K':n}

// Home Page
function renderHome(){
  const g=document.getElementById('hotGuides');if(!g)return;
  g.innerHTML=guidesData.filter(x=>x.featured).slice(0,3).map(g=>`
    <article class="card"><div class="card-img">${g.tag==='Beginner'?'🌱':g.tag==='Factions'?'⚔️':'🔫'}</div>
    <div class="card-body"><span class="card-tag">${g.tag}</span><h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3><p>${g.excerpt}</p></div>
    <div class="card-footer"><span>👤 ${g.author}</span><span>📅 ${g.date}</span></div></article>`).join('');
}

// Factions Page
function renderFactions(){
  const el=document.getElementById('factionContent');if(!el)return;
  el.innerHTML=`
<h2 id="capital">🔵 Capital — Mellon Corporation</h2>
<p>Capital represents the entrenched corporate power on Mars. You command superior technology — mechs, orbital weapons, and factory-fresh gear — but answer to shareholders on Earth who demand results on their schedule.</p>
<h3>Playstyle</h3><ul><li>Defensive, methodical, overpowering</li><li>Anchor positions with mech units</li><li>Time offensives with Earth supply shipments</li><li>Superior firepower but expensive losses</li></ul>
<div class="table-wrap"><table><tr><th>Starting Units</th><th>Unique Tech</th><th>Victory Condition</th></tr><tr><td>2 Mech Squads + 3 Infantry + Orbital Comms</td><td>Mech Armor, Orbital Strikes, Shareholder Favors</td><td>Crush the revolution, maintain corporate control</td></tr></table></div>

<h2 id="labor" style="margin-top:40px;">🔴 Labor — Worker Revolution</h2>
<p>Labor fights from the bottom — scavenged weapons, volunteer fighters, and righteous fury against corporate exploitation. Your strength grows with every victory as more workers join the cause.</p>
<h3>Playstyle</h3><ul><li>Aggressive, mobile, adaptive</li><li>Hit isolated Capital units, retreat before reinforcements</li><li>Manufacture weapons tailored to each mission</li><li>Convert population and territory to snowball</li></ul>
<div class="table-wrap"><table><tr><th>Starting Units</th><th>Unique Tech</th><th>Victory Condition</th></tr><tr><td>3 Guerrilla Squads + Workshop + Safe House</td><td>Local Manufacturing, Reverse Engineering, Population Conversion</td><td>Liberate Mars, seize the means of production</td></tr></table></div>
`;
}

// Guides Page
function renderGuides(){
  const grid=document.getElementById('guidesGrid');if(!grid)return;
  let guides=[...guidesData];
  const sq=getParam('search'),cq=getParam('cat');
  if(sq){const q=sq.toLowerCase();guides=guides.filter(g=>g.title.toLowerCase().includes(q)||g.excerpt.toLowerCase().includes(q));document.getElementById('searchInput').value=sq}
  let af=cq||'all';if(af!=='all')guides=guides.filter(g=>g.category===af);
  document.getElementById('resultCount').textContent=guides.length;
  renderGuideCards(guides);
  document.querySelectorAll('#filterBar .filter-btn').forEach(b=>{b.classList.toggle('active',b.dataset.filter===af);b.addEventListener('click',()=>{document.querySelectorAll('#filterBar .filter-btn').forEach(bb=>bb.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;document.getElementById('resultCount').textContent=(f==='all'?guidesData:guidesData.filter(g=>g.category===f)).length;renderGuideCards(f==='all'?guidesData:guidesData.filter(g=>g.category===f))})});
  document.getElementById('searchBtn').addEventListener('click',()=>{const q=document.getElementById('searchInput').value.trim();if(q)window.location.href='guides.html?search='+encodeURIComponent(q)});
}
function renderGuideCards(list){document.getElementById('guidesGrid').innerHTML=list.map(g=>`
  <article class="card"><div class="card-img">${g.tag==='Beginner'?'🌱':g.tag==='Factions'?'⚔️':'🔫'}</div>
  <div class="card-body"><span class="card-tag">${g.tag}</span><h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3><p>${g.excerpt}</p></div>
  <div class="card-footer"><span>👤 ${g.author}</span><span>📅 ${g.date}</span></div></article>`).join('');}

// Guide Detail
function renderGuideDetail(){
  const el=document.getElementById('guideTitle');if(!el)return;
  const id=getParam('id'),guide=guidesData.find(g=>g.id===id);
  if(!guide){el.textContent='Not Found';return}
  el.textContent=guide.title;document.getElementById('guideMeta').innerHTML=`👤 ${guide.author} · 📅 ${guide.date}`;document.getElementById('breadcrumbCat').textContent=guide.tag;document.getElementById('guideContent').innerHTML=guide.content;
  const related=guidesData.filter(g=>g.category===guide.category&&g.id!==guide.id).slice(0,3);
  document.getElementById('relatedGuides').innerHTML=related.map(g=>`
    <article class="card"><div class="card-img">${g.tag==='Beginner'?'🌱':'⚔️'}</div>
    <div class="card-body"><span class="card-tag">${g.tag}</span><h3><a href="guide-detail.html?id=${g.id}">${g.title}</a></h3><p>${g.excerpt}</p></div></article>`).join('');
  document.title=guide.title+' — Mars Tactics Guide';
}

// Weapons Page
function renderWeapons(){
  const el=document.getElementById('weaponsContent');if(!el)return;
  el.innerHTML=`
<h2>🔫 Weapon Customization System</h2>
<p>Mars Tactics features a <strong>Gun Grid Editor</strong> — a puzzle-like interface where you fit attachments onto a grid. Each weapon has a unique grid shape, and attachments consume grid space. Finding the optimal layout is part of the strategy.</p>
<div class="table-wrap"><table><tr><th>Attachment</th><th>Grid Cost</th><th>Effect</th></tr>
<tr><td>Red Dot Sight</td><td>2×1</td><td>+10% accuracy, -1 AP to aim</td></tr>
<tr><td>ACOG Scope</td><td>3×1</td><td>+25% accuracy at range, +1 AP to aim</td></tr>
<tr><td>Suppressor</td><td>1×2</td><td>Silent shots, no position reveal</td></tr>
<tr><td>Extended Mag</td><td>2×2</td><td>+50% magazine capacity</td></tr>
<tr><td>Foregrip</td><td>1×1</td><td>-15% recoil</td></tr>
<tr><td>Bipod</td><td>3×1</td><td>-40% recoil when deployed (costs AP)</td></tr>
<tr><td>Grenade Launcher</td><td>3×2</td><td>Underbarrel grenade capability</td></tr>
<tr><td>Bayonet</td><td>1×1</td><td>Melee attack option</td></tr></table></div>
<h2>Ballistics System</h2>
<p>Bullets are <strong>physical objects</strong> in Mars Tactics. Missed shots continue traveling and can hit objects or units behind the target. This means:</p>
<ul><li>You can intentionally shoot through walls to hit hidden enemies</li><li>Stray bullets can hit friendlies — watch your firing lines</li><li>High-caliber rounds penetrate more materials</li></ul>
<h2>Ammo Sharing</h2>
<p>A unique feature: soldiers can <strong>toss unprimed grenades and spare magazines</strong> to squadmates mid-battle. This creates emergent teamwork — a pinned sniper can receive ammo from a rifleman without breaking cover.</p>
`;
}

// Init
document.addEventListener('DOMContentLoaded',()=>{
  const path=window.location.pathname.replace(/^\/+/,'').replace(/\/$/,'');
  if(path.includes('guide-detail'))renderGuideDetail();
  else if(path.includes('guides'))renderGuides();
  else if(path.includes('factions'))renderFactions();
  else if(path.includes('weapons'))renderWeapons();
  else renderHome();
});
