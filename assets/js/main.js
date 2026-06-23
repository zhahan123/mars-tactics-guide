/* Mars Tactics Guide — Full Data & Logic */
const guidesData = [
  {
    id:'beginner-guide',title:'Mars Tactics Beginner Guide — Everything I Wish I Knew Before Starting',
    category:'beginner',tag:'Beginner',featured:true,author:'MarsGuide Team',date:'2026-05-30',views:0,likes:0,
    excerpt:'Honest advice from someone who has been tracking this game for over a year. Pick the right faction, avoid dumb early mistakes, and actually enjoy your first campaign.',
    content:`
<h2>So What Even Is This Game?</h2>
<p>Mars Tactics is what you get when XCOM and a grand strategy game have a baby. You're commanding squads in turn-based firefights <em>and</em> running a planet-wide war at the same time — supply lines, railways, prison camps, the works. It's from the publisher behind Manor Lords and Against the Storm, so yeah, the strategy layer actually matters.</p>
<p>I've been following this game since the first trailer dropped, and honestly? The thing that sets it apart isn't the shooting — it's the <strong>everything else</strong>. You can win a battle and lose the war because your water supply dried up. More on that below.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#choose">1. Which Faction to Pick (Real Talk)</a><a href="#combat">2. How Combat Actually Works</a><a href="#strategy">3. The Strategy Part Nobody Talks About</a><a href="#tips">4. 10 Things I'd Tell My Past Self</a></div>

<h2 id="choose">1. Which Faction to Pick (Real Talk)</h2>
<p>Two factions. Totally different campaigns. Here's the honest breakdown — not the marketing version:</p>
<div class="table-wrap"><table>
<tr><th></th><th>🔵 Capital</th><th>🔴 Labor</th></tr>
<tr><td>Difficulty</td><td>Baby's first Mars colony</td><td>Dark Souls on Mars</td></tr>
<tr><td>Vibe</td><td>Corporate enforcer with a blank check</td><td>Underground revolution with duct tape and hope</td></tr>
<tr><td>Early Game</td><td>You have mechs. You have money. You're fine.</td><td>You have a wrench and a dream. Good luck.</td></tr>
<tr><td>Late Game</td><td>Shareholders breathing down your neck</td><td>Entire Martian population behind you</td></tr>
<tr><td>Fun Factor</td><td>Power fantasy. Stomp things with robots.</td><td>Underdog story. Every win feels earned.</td></tr>
</table></div>
<blockquote>🎯 <strong>My take:</strong> If this is your first time, play Capital. You'll actually learn the mechanics instead of fighting for survival. Then do a Labor run — it's the "real" campaign, and it's way more satisfying once you know what you're doing.</blockquote>

<h2 id="combat">2. How Combat Actually Works</h2>
<h3>The 360° Aim System</h3>
<p>Forget everything XCOM taught you about cover. In Mars Tactics, <strong>walls are a suggestion</strong>. You can shoot through floors, drop ceilings on people, or blow a hole in the wall and shoot through it. Nothing is safe. Not you, not the enemy, not the building.</p>
<p>The first time you realize you can collapse an entire floor and kill three enemies at once without firing a single bullet directly at them... that's when the game clicks.</p>
<h3>Suppression Actually Matters</h3>
<p>In XCOM, suppression is that thing you use when your sniper missed and you need to pretend you had a plan. In Mars Tactics, suppression <strong>steals enemy action points</strong>. Have three soldiers lay down fire on one target and that target doesn't get a turn. Zero AP. Frozen. This is not optional — this is how you win fights without taking damage.</p>
<h3>Throw Stuff to Your Teammates</h3>
<p>You can toss grenades, ammo, and medkits between squad members mid-fight. Sounds like a gimmick, but it's actually brilliant — your pinned sniper runs out of ammo? Have the guy in the next building chuck a magazine through the window. No mods, no special abilities, just physics.</p>

<h2 id="strategy">3. The Strategy Part Nobody Talks About</h2>
<p>The tactical battles are the headline act, but the strategy layer is what actually decides who wins. Here's what actually matters:</p>
<ul><li><strong>Railways > Everything:</strong> A base without a rail connection is an island. Your troops there are on their own. Build rails before you build anything else.</li><li><strong>Water is life:</strong> Ice mines produce water. No water = dead colony. The enemy knows this. Protect your ice mines like your campaign depends on it — because it does.</li><li><strong>Prisoners aren't just flavor:</strong> Interrogate them for intel and enemy positions show up on your map. Ransom them for resources. Rescue your own captured guys. This system has depth.</li><li><strong>Adjacent squads reinforce each other:</strong> If two of your squads are in neighboring regions when a battle starts, both show up. Position your forces accordingly.</li></ul>

<h2 id="tips">4. 10 Things I'd Tell My Past Self</h2>
<ol>
<li>Build a railway <strong>before</strong> you expand. I cannot stress this enough. Cut-off bases starve.</li>
<li>Suppression fire is not optional. Three shooters on one target = that target skips its turn.</li>
<li>Destroy everything. Walls, floors, ceilings. The environment is a weapon.</li>
<li>Don't sit on grenades. Toss them to whoever has the best throw angle <em>right now</em>.</li>
<li>Capture at least one enemy in your first 10 missions. The intel snowball is real.</li>
<li>As Capital: time your pushes with supply drops. Don't fight hungry.</li>
<li>As Labor: manufacture early, manufacture often. Your workshop is your lifeline.</li>
<li>Wounded veterans are upgrade candidates, not casualties. Cybernetics turn them into monsters.</li>
<li>Blow up the enemy's ice mine. Watch their economy collapse. Then attack.</li>
<li>Don't restart when things go wrong. Mars Tactics is at its best when you're barely hanging on.</li>
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
    excerpt:'Deep dive into the combat system: fully destructible terrain, ballistic simulation, creative kill strategies, and environmental warfare on Mars.',
    content:`
<h2>🔬 Beyond Basic Shooting</h2>
<p>Mars Tactics isn't just about pointing guns at enemies. The combat system is built on a <strong>full physics simulation</strong> — bullets are physical objects, structures have material properties, and the environment is 100% destructible. Master these systems and you'll win fights before they start.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#physics">1. Bullet Physics & Ballistics</a><a href="#destruction">2. Environmental Destruction</a><a href="#vertical">3. Vertical Combat</a><a href="#kills">4. Creative Kill Strategies</a></div>

<h2 id="physics">1. Bullet Physics & Ballistics</h2>
<p>Every round fired is a <strong>physical projectile</strong> with mass, velocity, and penetration values. This has major tactical implications:</p>
<h3>Penetration Mechanics</h3>
<div class="table-wrap"><table>
<tr><th>Caliber</th><th>Penetration</th><th>Best Use</th></tr>
<tr><td>9mm</td><td>Low — stopped by most cover</td><td>Close quarters, low AP cost</td></tr>
<tr><td>5.56mm</td><td>Medium — goes through wood, drywall</td><td>General purpose, affordable ammo</td></tr>
<tr><td>7.62mm</td><td>High — punches through concrete</td><td>Designated marksman, wall-banging</td></tr>
<tr><td>.50 cal</td><td>Extreme — multiple walls, light vehicles</td><td>Anti-materiel, entrenched positions</td></tr>
</table></div>
<h3>Stray Bullets Matter</h3>
<p>Missed shots <strong>continue traveling</strong> along their trajectory. A round that misses its target can:</p>
<ul><li>Hit a different enemy behind the original target</li><li>Strike a friendly soldier in the line of fire</li><li>Destroy equipment or environmental objects</li><li>Penetrate walls and hit units in adjacent rooms</li></ul>
<blockquote>⚠️ <strong>Watch your firing lines!</strong> Unlike XCOM where missed shots disappear, Mars Tactics tracks every bullet to its final impact. Friendly fire is a real threat.</blockquote>

<h2 id="destruction">2. Environmental Destruction</h2>
<p>The entire battlefield is destructible. Every wall, floor, ceiling, and piece of furniture has material properties that determine how it reacts to damage.</p>
<h3>Material Types</h3>
<ul><li><strong>Concrete:</strong> High durability, requires 7.62mm+ or explosives to breach</li><li><strong>Martian Regolith Brick:</strong> Medium durability, common in colony buildings</li><li><strong>Glass/Plastic:</strong> Shatters from any weapon, provides no cover after breaking</li><li><strong>Metal Plating:</strong> Highest durability, only breached by .50 cal, rockets, or sustained fire</li><li><strong>Ice:</strong> Unique to Mars — melts under sustained fire, creating slippery surfaces</li></ul>
<h3>Tactical Destruction</h3>
<ul><li><strong>Create sightlines:</strong> Blow holes in walls to expose enemies hiding behind cover</li><li><strong>Collapse ceilings:</strong> Destroy support structures to drop floors on enemies below</li><li><strong>Remove enemy cover:</strong> Sustained fire gradually destroys objects enemies are hiding behind</li><li><strong>Block paths:</strong> Collapse doorways and corridors to funnel enemies into kill zones</li></ul>

<h2 id="vertical">3. Vertical Combat</h2>
<p>Mars Tactics features full multi-level combat. The 360° aim system lets you target <strong>any surface in line of sight</strong>, including:</p>
<ul><li>Shooting through the floor to hit enemies below</li><li>Firing up through ceilings to ambush enemies above</li><li>Blasting holes in rooftops for aerial extraction or orbital strike targeting</li></ul>
<p>Buildings in Mars colonies often have <strong>atrium designs</strong> — multi-story open spaces that create complex vertical sightlines. Use height advantage for accuracy bonuses and expanded field of view.</p>

<h2 id="kills">4. Creative Kill Strategies</h2>
<p>Once you understand the physics, you can engineer kills that the tutorial never teaches:</p>
<ul><li><strong>The Cook-Off:</strong> Shoot an enemy's unprimed grenade on their belt — it detonates on their turn</li><li><strong>The Pressure Cooker:</strong> Seal enemies in a room by collapsing exits, then breach with flamethrowers</li><li><strong>The Domino:</strong> Destroy a support beam to collapse multiple floors, killing enemies on every level</li><li><strong>The Ricochet:</strong> Bank shots off metal surfaces to hit enemies behind total cover (low accuracy, high style)</li><li><strong>The Icebreaker:</strong> Melt ice structures enemies are standing on — they fall through and take fall damage</li></ul>
<blockquote>💡 <strong>Pro tip:</strong> The most efficient kills use the environment, not your ammo. One well-placed shot to a support beam can kill an entire enemy squad.</blockquote>
    `
  },
  {
    id:'base-building',title:'Base Building & Logistics — Optimal Layouts & Supply Chains',
    category:'base',tag:'Base Building',featured:false,author:'MarsGuide Team',date:'2026-05-20',views:0,likes:0,
    excerpt:'How to build efficient bases, manage supply lines, construct railways, and keep your troops fed and armed across the harsh Martian surface.',
    content:`
<h2>🏗️ Why Your Base Matters</h2>
<p>Battles are won on the front line, but <strong>wars are won in the factory</strong>. Your base determines what weapons, troops, and resources you have available for every mission. A poorly planned base will slowly starve your campaign.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#layout">1. Base Layout Principles</a><a href="#supply">2. Supply Line Management</a><a href="#railways">3. Railway Networks</a><a href="#expansion">4. Expansion Strategy</a></div>

<h2 id="layout">1. Base Layout Principles</h2>
<h3>Core Facilities</h3>
<div class="table-wrap"><table>
<tr><th>Facility</th><th>Function</th><th>Priority</th></tr>
<tr><td>Command Center</td><td>Unlocks all other buildings, regional coordination</td><td>Starting</td></tr>
<tr><td>Barracks</td><td>Troop capacity, training, recovery speed</td><td>High</td></tr>
<tr><td>Workshop (Labor) / Supply Depot (Capital)</td><td>Weapon production or storage</td><td>High</td></tr>
<tr><td>Research Lab</td><td>Tech tree advancement</td><td>Medium</td></tr>
<tr><td>Medical Bay</td><td>Wounded recovery, cybernetic surgery</td><td>Medium</td></tr>
<tr><td>Railway Hub</td><td>Connects bases, enables resource transfer</td><td>Medium</td></tr>
<tr><td>Defense Grid</td><td>Protects against enemy raids</td><td>Low (initially)</td></tr>
</table></div>
<h3>Adjacency Bonuses</h3>
<p>Certain buildings gain efficiency when placed next to each other:</p>
<ul><li><strong>Workshop + Research Lab:</strong> Faster prototype development</li><li><strong>Barracks + Medical Bay:</strong> Faster soldier recovery</li><li><strong>Railway Hub + Supply Depot:</strong> Double transfer speed</li></ul>
<blockquote>💡 <strong>Pro tip:</strong> Leave room for expansion. Buildings can be upgraded, and upgraded versions often have a larger footprint.</blockquote>

<h2 id="supply">2. Supply Line Management</h2>
<p>Every bullet, grenade, and medkit in your soldiers' hands traveled through your supply chain. A break in the chain means troops fight with inferior gear — or no gear at all.</p>
<h3>Supply Types</h3>
<ul><li><strong>Ammunition:</strong> Consumed every mission. Running out means melee-only combat</li><li><strong>Medical Supplies:</strong> Required for post-mission recovery. Shortage = longer recovery times</li><li><strong>Fuel:</strong> Powers vehicles and generators. No fuel = no mech deployments</li><li><strong>Food:</strong> Keeps morale up. Hungry soldiers have reduced combat effectiveness</li><li><strong>Building Materials:</strong> Required for construction and repair</li></ul>
<h3>Capital Supply Chain</h3>
<p>As Capital, supplies arrive via <strong>orbital drops from Earth</strong>. Drops are scheduled — you cannot rush them. Protect your landing zones at all costs. Losing a supply drop means waiting for the next window, which could be 5-10 turns away.</p>
<h3>Labor Supply Chain</h3>
<p>As Labor, you <strong>manufacture locally</strong>. This gives flexibility — produce exactly what you need — but requires raw materials from mines and scrapyards. Secure resource nodes early and defend them relentlessly.</p>

<h2 id="railways">3. Railway Networks</h2>
<p>Mars Tactics features a <strong>railway construction system</strong> — the primary method of moving resources between bases. Rails are expensive to build but dramatically increase your logistics capacity.</p>
<h3>Railway Strategy</h3>
<ul><li>Connect every major base to the network</li><li>Build defensive outposts at railway junctions — they're prime ambush targets</li><li>Upgrade rail lines for faster transport speed</li><li>Railway sabotage is a valid offensive tactic against enemy supply lines</li></ul>

<h2 id="expansion">4. Expansion Strategy</h2>
<p>When founding a new base, consider:</p>
<ol>
<li><strong>Resource proximity:</strong> Is there water ice, mineral deposits, or salvage nearby?</li>
<li><strong>Defensibility:</strong> Can you hold this position if attacked?</li>
<li><strong>Railway connectivity:</strong> Can you connect it to your network within 10 turns?</li>
<li><strong>Strategic value:</strong> Does it give you access to new regions or cut enemy supply lines?</li>
</ol>
<p>Don't over-expand. Each new base needs <strong>garrison troops, supplies, and management attention</strong>. A thinly-spread empire collapses faster than a compact one.</p>
    `
  },
  {
    id:'cybernetics-guide',title:'Cybernetic Upgrades — Turning Veterans into Super-Soldiers',
    category:'combat',tag:'Combat',featured:false,author:'MarsGuide Team',date:'2026-05-18',views:0,likes:0,
    excerpt:'Every cybernetic upgrade explained: which augments to prioritize, how to save wounded veterans, and building your ultimate cyborg squad on Mars.',
    content:`
<h2>🤖 From Wounded to Weaponized</h2>
<p>In Mars Tactics, a soldier who loses a limb isn't discharged — they're upgraded. The cybernetics system transforms severely wounded veterans into <strong>customizable super-soldiers</strong>, often stronger than they were before the injury.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#how">1. How Cybernetics Work</a><a href="#types">2. Augment Types</a><a href="#strategy">3. Augmentation Strategy</a><a href="#cost">4. Costs & Trade-offs</a></div>

<h2 id="how">1. How Cybernetics Work</h2>
<p>When a soldier suffers a <strong>critical injury</strong> (lost limb, crushed organ, spinal damage), you have a choice:</p>
<ul><li><strong>Medical discharge:</strong> The soldier retires. You lose their experience permanently.</li><li><strong>Cybernetic augmentation:</strong> Replace the damaged part with a cybernetic. The soldier returns to duty with new abilities.</li></ul>
<p>Augmented soldiers keep all their <strong>experience, traits, and skills</strong>. A cybernetic limb doesn't reset a veteran — it enhances them.</p>

<h2 id="types">2. Augment Types</h2>
<div class="table-wrap"><table>
<tr><th>Augment</th><th>Replaces</th><th>Abilities</th></tr>
<tr><td>Cyber Arm — Combat</td><td>Arm</td><td>+15% accuracy, integrated weapon mount (free sidearm)</td></tr>
<tr><td>Cyber Arm — Engineer</td><td>Arm</td><td>Faster repair, remote hacking, deployable turret control</td></tr>
<tr><td>Cyber Legs — Sprint</td><td>Legs</td><td>+3 movement tiles, can scale walls</td></tr>
<tr><td>Cyber Legs — Stabilized</td><td>Legs</td><td>Immune to knockdown, +20% heavy weapon accuracy</td></tr>
<tr><td>Cyber Eye — Targeting</td><td>Eye</td><td>+10% crit chance, thermal vision through smoke/walls</td></tr>
<tr><td>Cyber Eye — Tactical</td><td>Eye</td><td>See enemy AP, detect traps, expanded sight radius</td></tr>
<tr><td>Cyber Spine</td><td>Spine</td><td>Ignore first fatal hit (once per mission), +2 AP</td></tr>
<tr><td>Neural Implant</td><td>Brain (partial)</td><td>+20% XP gain, squad-wide +5% accuracy aura</td></tr>
<tr><td>Dermal Armor</td><td>Skin</td><td>+3 armor, fire/acid resistance</td></tr>
</table></div>

<h2 id="strategy">3. Augmentation Strategy</h2>
<h3>Which Soldiers to Augment?</h3>
<ul><li><strong>High-rank veterans:</strong> Always augment. Their traits and skills are too valuable to lose.</li><li><strong>Mid-rank specialists:</strong> Augment if the replacement synergizes with their role (sniper → cyber eye, scout → cyber legs).</li><li><strong>Rookies:</strong> Usually not worth the resource cost. Discharge and recruit fresh.</li></ul>
<h3>Building a Cyborg Squad</h3>
<p>The most powerful squads in Mars Tactics are <strong>heavily augmented veteran teams</strong>. A fully-augmented soldier can have 3-4 cybernetics across different body slots. Each augment's bonuses stack, creating soldiers that vastly outperform baseline humans.</p>
<blockquote>💡 <strong>Pro tip:</strong> Don't rush augmentation. Wait until you have the medical bay upgraded to reduce surgery failure risk. A failed augmentation kills the soldier permanently.</blockquote>

<h2 id="cost">4. Costs & Trade-offs</h2>
<ul><li><strong>Resources:</strong> Cybernetics require rare materials — titanium alloys, microprocessors, medical-grade polymers</li><li><strong>Time:</strong> Surgery takes 10-20 turns depending on complexity</li><li><strong>Morale:</strong> Some squadmates react negatively to heavy augmentation — manage team dynamics</li><li><strong>EMP Vulnerability:</strong> Cybernetic soldiers are weak to EMP weapons. Bring EMP shielding as a counter-upgrade</li></ul>
    `
  },
  {
    id:'economy-guide',title:'Mars Economy System — UBI, Labor Camps & Market Manipulation',
    category:'economy',tag:'Economy',featured:false,author:'MarsGuide Team',date:'2026-05-15',views:0,likes:0,
    excerpt:'Understand emergent economics: how wrecking an ice mine crashes the water market, UBI strategies, and governance models that shape your campaign.',
    content:`
<h2>📈 The Invisible Hand of Mars</h2>
<p>Mars Tactics features a <strong>living, player-driven economy</strong>. Prices aren't scripted — they emerge from supply and demand across the entire Martian colony. Your actions ripple through the economy, creating opportunities and crises.</p>
<div class="toc"><h3>Quick Navigation</h3><a href="#basics">1. Economic Basics</a><a href="#markets">2. Key Markets</a><a href="#governance">3. Governance Models</a><a href="#warfare">4. Economic Warfare</a></div>

<h2 id="basics">1. Economic Basics</h2>
<p>The Martian economy runs on five core resources that every faction needs:</p>
<div class="table-wrap"><table>
<tr><th>Resource</th><th>Uses</th><th>Production</th></tr>
<tr><td>Water (Ice)</td><td>Life support, agriculture, fuel processing</td><td>Ice mines, atmospheric condensers</td></tr>
<tr><td>Metals</td><td>Weapons, buildings, railways</td><td>Mines, scrapyards, asteroid salvage</td></tr>
<tr><td>Electronics</td><td>Cybernetics, advanced weapons, comms</td><td>Factories, Earth imports (Capital only)</td></tr>
<tr><td>Fuel</td><td>Vehicles, mechs, generators</td><td>Water electrolysis, methane extraction</td></tr>
<tr><td>Labor</td><td>Everything — mining, building, fighting</td><td>Population, immigration, prisoners</td></tr>
</table></div>
<p>Prices are <strong>regional</strong>, not global. A water surplus in the northern colonies doesn't help a water shortage in the south unless you have railways connecting them.</p>

<h2 id="markets">2. Key Markets & How to Manipulate Them</h2>
<h3>Water Market</h3>
<p>Water is the <strong>most volatile market</strong> on Mars. When an ice mine is destroyed (by you or enemies), the regional water price spikes. This is both a threat and a weapon.</p>
<ul><li><strong>As Capital:</strong> Protect your ice mines — they're Labor's favorite sabotage targets</li><li><strong>As Labor:</strong> Wreck Capital's ice infrastructure to drive up their costs and trigger civilian unrest in their territory</li></ul>
<h3>Weapons Market</h3>
<p>Weapon prices rise during wars and crash during peace. Stockpile during lulls, sell during conflicts. Labor's local manufacturing can undercut Capital's imported weapons, creating a price war.</p>
<h3>Electronics Market</h3>
<p>Electronics are the gatekeeper for advanced technology. Cybernetics, orbital communications, and automated defenses all require electronics. As Capital, you import them from Earth. As Labor, you must capture and repurpose existing stockpiles or build your own factories.</p>

<h2 id="governance">3. Governance Models</h2>
<p>How you govern captured territory affects your economy:</p>
<div class="table-wrap"><table>
<tr><th>Model</th><th>Effect</th><th>Best For</th></tr>
<tr><td>Universal Basic Income (UBI)</td><td>+Morale, +Population growth, -Revenue</td><td>Long-term empire building</td></tr>
<tr><td>Corporate State</td><td>+Revenue, +Production speed, -Morale</td><td>Capital faction, rapid expansion</td></tr>
<tr><td>Labor Democracy</td><td>+Production efficiency, +Combat volunteers</td><td>Labor faction, defensive play</td></tr>
<tr><td>Police State</td><td>+Control, -Unrest, -Population growth</td><td>Occupied enemy territory</td></tr>
<tr><td>Laissez-faire</td><td>+Innovation, +Trade, -Control</td><td>Safe rear territories</td></tr>
</table></div>
<blockquote>💡 <strong>Pro tip:</strong> Mix governance models. Use Police State in recently-captured enemy cities to suppress rebellion, then transition to UBI or Labor Democracy once the territory stabilizes.</blockquote>

<h2 id="warfare">4. Economic Warfare</h2>
<p>You can win without firing a shot. Economic warfare targets the enemy's ability to sustain their military:</p>
<ul><li><strong>Resource denial:</strong> Destroy mines, refineries, and factories</li><li><strong>Market flooding:</strong> Crash weapon prices to bankrupt enemy manufacturers</li><li><strong>Railway sabotage:</strong> Cut supply lines — isolated bases starve</li><li><strong>Labor strikes:</strong> As Labor, incite worker uprisings in Capital territory to paralyze their production</li><li><strong>Water hoarding:</strong> Buy up regional water supply and sell high during shortages</li></ul>
<p>The most devastating strategy is combined arms: destroy the enemy's water supply, then attack when their troops are suffering dehydration penalties and their civilians are rioting.</p>
    `
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
<div class="toc"><h3>Quick Navigation</h3><a href="#capital">Capital — Mellon Corporation</a><a href="#labor">Labor — Worker Revolution</a><a href="#compare">Side-by-Side Comparison</a><a href="#which">Which Faction Should You Pick?</a></div>

<h2 id="capital">🔵 Capital — Mellon Corporation</h2>
<p>Capital represents the entrenched corporate power on Mars. You command superior technology — mechs, orbital weapons, and factory-fresh gear — but answer to <strong>shareholders on Earth</strong> who demand results on their schedule.</p>

<h3>Lore & Background</h3>
<p>The Mellon Corporation secured the first Martian colonization contract from Earth's governments. For decades, they built the domes, mined the ice, and controlled the air supply. Now the workers who built this world want a piece of it — and Mellon's board of directors has dispatched you to protect their investment.</p>

<h3>Playstyle</h3>
<ul><li><strong>Defensive & methodical:</strong> You're the established power. Hold what you have and expand when conditions favor you.</li><li><strong>Mech-centric:</strong> Your mech units are the backbone. Protect them — each loss costs more than an entire infantry squad.</li><li><strong>Orbital superiority:</strong> Time offensives with Earth supply shipments for maximum impact.</li><li><strong>Shareholder management:</strong> Keep the board happy or they'll cut your funding. Sometimes this means taking missions you'd rather avoid.</li></ul>

<h3>Starting Assets</h3>
<div class="table-wrap"><table>
<tr><th>Category</th><th>Details</th></tr>
<tr><td>Units</td><td>2 Mech Squads + 3 Infantry Squads + 1 Orbital Communications Team</td></tr>
<tr><td>Tech</td><td>Mech Armor Plating, Precision Orbital Drops, Corporate Negotiations</td></tr>
<tr><td>Resources</td><td>Abundant — regular Earth shipments provide high-quality gear</td></tr>
<tr><td>Territory</td><td>Central colony domes, spaceport, primary ice mines</td></tr>
<tr><td>Victory</td><td>Crush the revolution, maintain corporate control of Mars</td></tr>
</table></div>

<h3>Tech Tree Highlights</h3>
<ul><li><strong>Mech Armor Mk II/III:</strong> Progressive armor upgrades — your mechs become nearly indestructible</li><li><strong>Orbital Strike Coordination:</strong> Call precision strikes from orbiting platforms (long cooldown, devastating effect)</li><li><strong>Automated Defenses:</strong> Turrets, mines, and drone patrols for base defense</li><li><strong>Shareholder Relations:</strong> Better mission rewards, longer supply windows, fewer penalty demands</li></ul>

<h2 id="labor" style="margin-top:44px;">🔴 Labor — Worker Revolution</h2>
<p>Labor fights from the bottom — scavenged weapons, volunteer fighters, and righteous fury against corporate exploitation. Your strength grows with every victory as more workers join the cause.</p>

<h3>Lore & Background</h3>
<p>Three generations of Martian workers built the colonies, mined the ice, and maintained the life support systems — all while living in cramped quarters on corporate wages. When Mellon cut water rations to boost quarterly profits, the workers walked out. When Mellon sent security forces to break the strike, the workers picked up improvised weapons and fought back. That's where you come in.</p>

<h3>Playstyle</h3>
<ul><li><strong>Aggressive & mobile:</strong> You can't win a stand-up fight against mechs. Strike isolated targets, then disappear.</li><li><strong>Manufacturing independence:</strong> Your workshops produce weapons tailored to each mission. No waiting for Earth.</li><li><strong>Population as power:</strong> Every liberated territory converts more workers to your cause. Success snowballs.</li><li><strong>Reverse engineering:</strong> Captured Capital equipment isn't just loot — it's a blueprint for your next weapon.</li></ul>

<h3>Starting Assets</h3>
<div class="table-wrap"><table>
<tr><th>Category</th><th>Details</th></tr>
<tr><td>Units</td><td>3 Guerrilla Squads + 1 Workshop Team + Safe House Network</td></tr>
<tr><td>Tech</td><td>Local Manufacturing, Reverse Engineering, Population Conversion</td></tr>
<tr><td>Resources</td><td>Scarce — scavenge, steal, or manufacture everything you need</td></tr>
<tr><td>Territory</td><td>Hidden safe houses, one captured mining outpost, tunnel networks</td></tr>
<tr><td>Victory</td><td>Liberate Mars, seize the means of production, establish worker governance</td></tr>
</table></div>

<h3>Tech Tree Highlights</h3>
<ul><li><strong>Improvised → Professional Manufacturing:</strong> Progress from scavenged zip guns to factory-quality weapons</li><li><strong>Guerrilla Tactics:</strong> Ambush bonuses, faster movement in tunnels, reduced enemy detection range</li><li><strong>Worker Solidarity:</strong> Increased population conversion rate, passive intelligence from sympathetic civilians</li><li><strong>Captured Tech Integration:</strong> Reverse-engineer Capital mechs, orbital tracking, and automated defenses</li></ul>

<h2 id="compare" style="margin-top:44px;">⚖️ Side-by-Side Comparison</h2>
<div class="table-wrap"><table>
<tr><th>Dimension</th><th>🔵 Capital</th><th>🔴 Labor</th></tr>
<tr><td>Difficulty Curve</td><td>Easy start, harder late game</td><td>Hard start, stronger late game</td></tr>
<tr><td>Resources</td><td>Abundant, scheduled deliveries</td><td>Scarce, self-manufactured</td></tr>
<tr><td>Unit Quality</td><td>High — mechs, professional soldiers</td><td>Low→High — improves with tech</td></tr>
<tr><td>Unit Quantity</td><td>Fewer, more expensive units</td><td>More, cheaper (but fragile) units</td></tr>
<tr><td>Economy</td><td>Earth-dependent trade</td><td>Self-sufficient manufacturing</td></tr>
<tr><td>Diplomacy</td><td>Shareholder management</td><td>Population morale & conversion</td></tr>
<tr><td>Combat Style</td><td>Entrenched, firepower-heavy</td><td>Mobile, hit-and-run, adaptive</td></tr>
<tr><td>Campaign Length</td><td>~35 hours</td><td>~45 hours</td></tr>
</table></div>

<h2 id="which" style="margin-top:44px;">🤔 Which Faction Should You Pick?</h2>
<div class="table-wrap"><table>
<tr><th>If you enjoy...</th><th>Pick</th></tr>
<tr><td>XCOM on Normal difficulty</td><td>🔵 Capital</td></tr>
<tr><td>XCOM on Legend/Ironman</td><td>🔴 Labor</td></tr>
<tr><td>Heavy weapons, mechs, overwhelming firepower</td><td>🔵 Capital</td></tr>
<tr><td>Guerrilla warfare, creative tactics, underdog stories</td><td>🔴 Labor</td></tr>
<tr><td>Traditional base-building and tech progression</td><td>🔵 Capital</td></tr>
<tr><td>Adaptive manufacturing and resource scavenging</td><td>🔴 Labor</td></tr>
<tr><td>Playing as the established power</td><td>🔵 Capital</td></tr>
<tr><td>Leading a revolution from nothing</td><td>🔴 Labor</td></tr>
</table></div>
<blockquote>💡 <strong>Recommendation:</strong> Play Capital first to learn the game's systems in a more forgiving environment, then replay as Labor for the full challenge. The two campaigns are different enough to feel like separate games.</blockquote>
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
<div class="toc"><h3>Quick Navigation</h3><a href="#grid">1. Gun Grid Editor</a><a href="#attachments">2. Attachment Catalog</a><a href="#builds">3. Recommended Builds</a><a href="#ballistics">4. Ballistics</a><a href="#sharing">5. Equipment Sharing</a></div>

<h2 id="grid">🔫 The Gun Grid Editor</h2>
<p>Mars Tactics replaces traditional weapon mod slots with a <strong>Gun Grid Editor</strong> — a puzzle-like interface where you fit attachments onto a 6×4 grid. Each weapon has a <strong>unique grid shape</strong> with blocked cells, and each attachment consumes a specific grid footprint. Finding the optimal layout is a tactical puzzle in itself.</p>
<h3>How It Works</h3>
<ul><li>Every gun has a grid with some cells blocked (representing fixed components)</li><li>Attachments are Tetris-like pieces that must fit into open cells</li><li>You can rotate attachments to optimize placement</li><li>Higher-quality guns have larger grids with fewer blocked cells</li></ul>
<blockquote>💡 <strong>Pro tip:</strong> Place large attachments first (scopes, extended mags), then fill remaining gaps with small pieces (foregrips, bayonets).</blockquote>

<h2 id="attachments">📋 Attachment Catalog</h2>
<div class="table-wrap"><table>
<tr><th>Category</th><th>Attachment</th><th>Grid Cost</th><th>Effect</th><th>Best For</th></tr>
<tr><td>Sights</td><td>Iron Sights</td><td>Free (built-in)</td><td>Baseline accuracy, no AP cost</td><td>Shotguns, CQB</td></tr>
<tr><td>Sights</td><td>Red Dot Sight</td><td>2×1</td><td>+10% accuracy, -1 AP to aim</td><td>Assault rifles</td></tr>
<tr><td>Sights</td><td>Holographic</td><td>2×1</td><td>+15% accuracy, faster target acquisition</td><td>SMGs, carbines</td></tr>
<tr><td>Sights</td><td>ACOG (4×)</td><td>3×1</td><td>+25% accuracy at range, +1 AP to aim</td><td>DMRs, battle rifles</td></tr>
<tr><td>Sights</td><td>Sniper Scope (8×)</td><td>4×1</td><td>+40% accuracy at range, +2 AP to aim</td><td>Sniper rifles</td></tr>
<tr><td>Barrel</td><td>Suppressor</td><td>1×2</td><td>Silent shots, no position reveal</td><td>Scout rifles, ambush</td></tr>
<tr><td>Barrel</td><td>Compensator</td><td>1×1</td><td>-20% recoil, louder (enemies detect faster)</td><td>LMGs, heavy rifles</td></tr>
<tr><td>Magazine</td><td>Extended Mag</td><td>2×2</td><td>+50% magazine capacity</td><td>All automatic weapons</td></tr>
<tr><td>Magazine</td><td>Quick-Release Mag</td><td>1×2</td><td>-1 AP to reload</td><td>Shotguns, sniper rifles</td></tr>
<tr><td>Underbarrel</td><td>Foregrip</td><td>1×1</td><td>-15% recoil</td><td>Assault rifles, SMGs</td></tr>
<tr><td>Underbarrel</td><td>Bipod</td><td>3×1</td><td>-40% recoil when deployed (costs 1 AP)</td><td>LMGs, DMRs</td></tr>
<tr><td>Underbarrel</td><td>Grenade Launcher</td><td>3×2</td><td>Underbarrel grenade capability (2 rounds)</td><td>Assault rifles</td></tr>
<tr><td>Stock</td><td>Folding Stock</td><td>1×1</td><td>-1 inventory slot, faster swap</td><td>CQB weapons</td></tr>
<tr><td>Stock</td><td>Precision Stock</td><td>2×1</td><td>+10% accuracy, -1 movement tile</td><td>DMRs, sniper rifles</td></tr>
<tr><td>Accessory</td><td>Bayonet</td><td>1×1</td><td>Melee attack option, +intimidation</td><td>Any frontline weapon</td></tr>
<tr><td>Accessory</td><td>Laser Sight</td><td>1×1</td><td>+5% hip-fire accuracy</td><td>SMGs, shotguns</td></tr>
</table></div>

<h2 id="builds">🎯 Recommended Builds</h2>
<div class="table-wrap"><table>
<tr><th>Weapon Type</th><th>Build</th><th>Grid Layout</th><th>Role</th></tr>
<tr><td>Assault Rifle</td><td>Red Dot + Compensator + Foregrip + Extended Mag</td><td>Compact — fits most AR grids</td><td>General combat, medium range</td></tr>
<tr><td>DMR</td><td>ACOG + Precision Stock + Bipod + Extended Mag</td><td>Long horizontal layout</td><td>Overwatch, long-range support</td></tr>
<tr><td>CQB Carbine</td><td>Holographic + Suppressor + Folding Stock + Laser Sight</td><td>Very compact</td><td>Room clearing, ambushes</td></tr>
<tr><td>LMG</td><td>Red Dot + Compensator + Bipod + Extended Mag</td><td>Maximum grid used</td><td>Suppression, area denial</td></tr>
<tr><td>Sniper Rifle</td><td>Sniper Scope + Precision Stock + Bipod + Quick-Release Mag</td><td>Heavy — slow to aim</td><td>Long-range elimination</td></tr>
</table></div>

<h2 id="ballistics">🧪 Ballistics System</h2>
<p>Bullets are <strong>physical objects</strong> with mass, velocity, and penetration values. Missed shots continue traveling and can hit objects or units behind the target:</p>
<ul><li>Intentionally shoot through walls to hit enemies behind cover</li><li>Stray bullets can hit friendlies — <strong>watch your firing lines</strong></li><li>High-caliber rounds penetrate more materials</li><li>Ricochets off metal surfaces are possible at shallow angles</li><li>Martian gravity (38% of Earth's) slightly flattens bullet trajectories at long range</li></ul>

<h2 id="sharing">🤝 Equipment Sharing</h2>
<p>A unique feature: soldiers can <strong>toss unprimed grenades, spare magazines, and medical supplies</strong> to squadmates mid-battle. This creates emergent teamwork:</p>
<ul><li>A pinned sniper receives ammo from a rifleman without either breaking cover</li><li>A scout tosses a frag grenade to a heavy gunner who has a clear throw angle</li><li>Medkits passed between soldiers to reach a critically wounded squadmate</li><li>Throw range depends on soldier strength and item weight</li></ul>
<blockquote>💡 <strong>Pro tip:</strong> Position a dedicated "supply runner" — a fast soldier with high strength whose job is shuttling ammo, grenades, and medkits between squad members in prolonged firefights.</blockquote>
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
