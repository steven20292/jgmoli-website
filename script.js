
// v16 hero carousel — simplified, no bottom text label
(() => {
  const slides = [...document.querySelectorAll('.hero-story-slide')];
  const dots = [...document.querySelectorAll('.hero-story-dot')];
  const prev = document.getElementById('hero-story-prev');
  const next = document.getElementById('hero-story-next');
  if (!slides.length) return;

  let current = 0;
  let timer;

  const start = () => {
    clearInterval(timer);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => show(current + 1, false), 6800);
  };

  const show = (index, restart = true) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('active', i === current));
    dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
    if (restart) start();
  };

  prev?.addEventListener('click', () => show(current - 1));
  next?.addEventListener('click', () => show(current + 1));
  dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.index))));
  document.getElementById('hero-story')?.addEventListener('mouseenter', () => clearInterval(timer));
  document.getElementById('hero-story')?.addEventListener('mouseleave', start);

  show(0);
})();


const reserveForm = document.getElementById('reserve-form');
if (reserveForm) {
  reserveForm.addEventListener('submit', e => {
    e.preventDefault();
    const reserveNote = document.getElementById('reserve-note');
    if (reserveNote) reserveNote.textContent = 'Prototype enquiry captured. Connect this form to CRM before launch.';
  });
}


const timelineModes = [
  {
    key: "focus",
    time: "09:00",
    period: "Morning",
    label: "FOCUS MODE",
    title: "A dedicated place to focus.",
    description: "Bring trading, analytics, calls and daily work into one organised multi-screen environment.",
    tags: ["Multi-screen workflow", "Upright viewing", "Focused workspace"],
    posture: "Upright",
    lighting: "Daylight",
    display: "Multi-screen",
    image: "assets/work-trading.png",
    alt: "GM520 Focus mode",
    profile: "FOCUS",
    caption: "WORK STACK",
    value: "Analytics / Trading / Calls",
    icon: "☀",
    cta: "Book a Focus demo"
  },
  {
    key: "play",
    time: "18:00",
    period: "Evening",
    label: "PLAY MODE",
    title: "Switch from work to immersive play.",
    description: "Move into competitive racing and gaming without rebuilding your desk or changing rooms.",
    tags: ["Competitive gaming", "Racing sessions", "Evening atmosphere"],
    posture: "Performance",
    lighting: "Cool blue",
    display: "Immersive",
    image: "assets/gaming-lifestyle.png",
    alt: "GM520 Play mode",
    profile: "PLAY",
    caption: "SESSION",
    value: "Ranked racing / Challenge mode",
    icon: "◐",
    cta: "Book a Play demo"
  },
  {
    key: "movie",
    time: "21:00",
    period: "Night",
    label: "MOVIE MODE",
    title: "Bring the cinema into your cockpit.",
    description: "Use the same ultra-wide display and reclined seating for science-fiction, streaming and long-form viewing.",
    tags: ["Private cinema", "Ultra-wide viewing", "Fewer distractions"],
    posture: "Reclined",
    lighting: "Cinema dark",
    display: "Ultra-wide",
    image: "assets/movie-scifi.png",
    alt: "GM520 Movie mode",
    profile: "MOVIE",
    caption: "NOW WATCHING",
    value: "Sci-fi cinema / Immersive view",
    icon: "☾",
    cta: "Book a Movie demo"
  },
  {
    key: "recharge",
    time: "23:00",
    period: "Late night",
    label: "RECHARGE MODE",
    title: "Slow down without leaving the setup.",
    description: "Shift into a warmer, quieter environment for ambient visuals, relaxed viewing and a short reset.",
    tags: ["Relaxed posture", "Warm lighting", "Quiet reset"],
    posture: "Deep recline",
    lighting: "Warm ambient",
    display: "Calm visuals",
    image: "assets/recharge-lifestyle.png",
    alt: "GM520 Recharge mode",
    profile: "RECHARGE",
    caption: "RESET",
    value: "Ambient visuals / Wind-down",
    icon: "✦",
    cta: "Book a Recharge demo"
  }
];

const timelineRange = document.getElementById("timeline-range");
const timelineNodes = document.querySelectorAll(".timeline-node");
const timelineVisual = document.getElementById("timeline-visual");
const timelineImage = document.getElementById("timeline-image");
const timelineTrackFill = document.getElementById("timeline-track-fill");

function updateTimelineMode(index) {
  const mode = timelineModes[index];
  if (!mode) return;

  if (timelineRange) timelineRange.value = index;
  if (timelineTrackFill) timelineTrackFill.style.width = `${index * 33.333}%`;

  timelineNodes.forEach((node, nodeIndex) => {
    const active = nodeIndex === index;
    node.classList.toggle("active", active);
    node.setAttribute("aria-selected", active ? "true" : "false");
  });

  if (timelineVisual) timelineVisual.classList.add("changing");

  window.setTimeout(() => {
    const setText = (id, value) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    };

    setText("timeline-time", mode.time);
    setText("timeline-period", mode.period);
    setText("timeline-label", mode.label);
    setText("timeline-title", mode.title);
    setText("timeline-description", mode.description);
    setText("timeline-posture", mode.posture);
    setText("timeline-lighting", mode.lighting);
    setText("timeline-display", mode.display);
    setText("timeline-cta", mode.cta);
    setText("timeline-ui-profile", mode.profile);
    setText("timeline-ui-caption", mode.caption);
    setText("timeline-ui-value", mode.value);
    setText("timeline-clock-icon", mode.icon);
    setText("timeline-clock-time", mode.time);

    const tags = document.getElementById("timeline-tags");
    if (tags) tags.innerHTML = mode.tags.slice(0, 2).map(tag => `<span>${tag}</span>`).join("");

    if (timelineImage) {
      timelineImage.src = mode.image;
      timelineImage.alt = mode.alt;
    }

    if (timelineVisual) {
      timelineVisual.dataset.mode = mode.key;
      timelineVisual.classList.remove("changing");
    }
  }, 140);
}


timelineNodes.forEach((node, index) => {
  node.dataset.index = String(index);
  node.setAttribute("role", "button");
  node.setAttribute("tabindex", "0");

  const activate = () => updateTimelineMode(index);

  node.addEventListener("click", activate);
  node.addEventListener("pointerup", event => {
    if (event.pointerType !== "mouse") activate();
  });
  node.addEventListener("keydown", event => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      activate();
    }
  });
});

if (timelineNodes.length) updateTimelineMode(0);


const fitButton = document.getElementById("fit-check");
if (fitButton) {
  fitButton.addEventListener("click", () => {
    const l = Number(document.getElementById("room-length").value);
    const w = Number(document.getElementById("room-width").value);
    const d = Number(document.getElementById("door-width").value);
    const out = document.getElementById("fit-result");
    if (!l || !w || !d) { out.textContent = "Enter all three measurements to continue."; return; }
    if (l >= 230 && w >= 180 && d >= 75) {
      out.textContent = "Preliminary check: your space may be suitable. Final model clearance and access still require confirmation.";
    } else {
      out.textContent = "Preliminary check: access or room clearance may be tight. Request a manual space review before choosing a model.";
    }
  });
}


// v10 cockpit finder
const finderGo = document.getElementById('finder-go');
const recommendations = {
  mini: {name:'MOLI Cockpit', copy:'Entry single-screen setup. Best starting point under A$15k.'},
  plus: {name:'MOLI Cockpit Plus', copy:'Scorpion-style platform for ultrawide gaming, streaming and visual impact.'},
  pro: {name:'MOLI Cockpit Pro', copy:'GM520-based multi-screen setup for people who split time between work and play.'},
  ultra: {name:'MOLI Cockpit Ultra', copy:'Flagship M2HB-based setup for large displays, integrated audio and statement-level hardware.'}
};
function runFinder(){
  if(!finderGo) return;
  const use=document.getElementById('finder-use').value;
  const display=document.getElementById('finder-display').value;
  const budget=Number(document.getElementById('finder-budget').value);
  let key='mini';
  if(display==='five') key=budget>=40000?'ultra':budget>=30000?'pro':'mini';
  else if(use==='statement') key=budget>=40000?'ultra':budget>=25000?'plus':'mini';
  else if(use==='sim') key=budget>=30000?'pro':budget>=25000?'plus':'mini';
  else if(display==='triple') key=budget>=30000?'pro':budget>=25000?'plus':'mini';
  else if(use==='gaming') key=budget>=25000?'plus':'mini';
  else if(use==='workplay') key=budget>=30000?'pro':'mini';
  const rec=recommendations[key];
  const box=document.getElementById('finder-result');
  box.innerHTML=`<div><span class="finder-eyebrow">YOUR MATCH</span><strong>${rec.name}</strong></div><p>${rec.copy}</p><a href="#cockpits">Explore cockpit →</a>`;
}
if(finderGo) finderGo.addEventListener('click',runFinder);

// v10 proposed finance planning calculator
const financeModel=document.getElementById('finance-model');
const termButtons=document.querySelectorAll('.term-tabs button');
let financeMonths=60;
function updateFinance(){
  if(!financeModel) return;
  const price=Number(financeModel.value);
  const monthly=Math.round(price/financeMonths);
  document.getElementById('monthly-payment').textContent=`A$${monthly.toLocaleString('en-AU')}`;
  document.getElementById('finance-total').textContent=`A$${price.toLocaleString('en-AU')}`;
}
termButtons.forEach(btn=>btn.addEventListener('click',()=>{
  termButtons.forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  financeMonths=Number(btn.dataset.months);
  updateFinance();
}));
if(financeModel){financeModel.addEventListener('change',updateFinance);updateFinance();}


