const userSignals = [
  { icon: '👁️', name: 'Blink', desc: 'A natural blink the system can pick up.' },
  { icon: '😉', name: 'Wink', desc: 'A deliberate one-eye wink.' },
  { icon: '🎯', name: 'Focus', desc: 'Sustained attention on something on screen.' },
  { icon: '🧠', name: 'Relax', desc: 'A calm, low-activity baseline.' },
  { icon: '🙂', name: 'Jaw clench', desc: 'A subtle, intentional jaw tension.' },
];

const commands = [
  { icon: '📜', name: 'Scroll', desc: 'Move through a feed or page.' },
  { icon: '→', name: 'Next', desc: 'Jump to the next item.' },
  { icon: '←', name: 'Back', desc: 'Step back through the interface.' },
  { icon: '🤖', name: 'Call AI', desc: 'Summon the assistant.' },
  { icon: '☝️', name: 'Select / Tap', desc: 'Confirm the active element.' },
  { icon: '🔊', name: 'Volume', desc: 'Raise or lower the sound.' },
];

const principles = [
  {
    title: 'Hands-free, by intent',
    body: "We're exploring a phone interface you don't have to touch — built around natural signals like blink, focus and jaw clench.",
  },
  {
    title: 'Signal-first thinking',
    body: 'Instead of forcing new “brain commands”, we map gestures your body already produces into clear, reliable inputs.',
  },
  {
    title: 'An honest research project',
    body: "Viovox is early. We're prototyping, testing, and writing about what works — no hardware sold, no promises of dates.",
  },
  {
    title: 'Accessibility-first, not accessibility-only',
    body: "People who can't fully rely on touch are our north star — but a hands-free phone is for everyone who'd rather not be glued to a screen.",
  },
];

const useCases = [
  { title: 'Accessibility', body: "An interface we hope can serve people who can't fully rely on touch — and stays open to everyone else." },
  { title: 'Driving & cycling', body: 'A future where you can stay focused on the road without reaching for the phone.' },
  { title: 'Workouts', body: 'Control music, timers and calls mid-set without breaking flow.' },
  { title: 'Reading & focus', body: 'Turn pages and switch tabs without disturbing your posture.' },
];

const steps = [
  { n: '01', title: 'Read the signal', body: "We're researching how to fuse EEG from a wearable sensor with glance and micro-expression cues from the phone's front camera." },
  { n: '02', title: 'Translate into intent', body: 'Brain signals plus what the camera sees — blink, focus, relax, jaw clench — get mapped to clear, repeatable inputs.' },
  { n: '03', title: 'Drive the phone', body: 'Those inputs become commands — scroll, next, back, select, volume, call AI.' },
];

function card(item) {
  return `<article class="card"><div class="card-icon" aria-hidden="true">${item.icon || '✦'}</div><h3>${item.title || item.name}</h3><p>${item.body || item.desc}</p></article>`;
}

function stepCard(item) {
  return `<article class="card"><div class="step-number">${item.n}</div><h3>${item.title}</h3><p>${item.body}</p></article>`;
}

function render(id, items, renderer = card) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = items.map(renderer).join('');
}

render('signalsGrid', userSignals);
render('commandsGrid', commands);
render('principlesGrid', principles);
render('stepsGrid', steps, stepCard);
render('useCasesGrid', useCases);

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
