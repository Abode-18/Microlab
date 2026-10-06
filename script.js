const lang = {
    En: {
        title: 'MicroLap',
        lang_button: 'Ar',
        sidebar_h3: 'Choose a sample',
        sidebar_1: 'Pancreas Cell',
        sidebar_2: 'Stratified Squamous Epithelium',
        sidebar_3: 'Skeletal Muscle Cells',
        sidebar_4: 'Dense Irregular Connective Tissue',
        sidebar_5: 'Purkinje Cell',
        Show_info_not_pressed: 'Show information',
        Show_info_pressed: 'Hide information',
        info_box: {
            'body cell_X4.webp': {
                box1: 'The exocrine part (Pancreatic Acini): the pink regions secrete digestive enzymes.',
                box2: 'Ducts: these ducts collect the enzymes and transport them to the intestine.'
            },
            'purkinje cell_X4.webp': {
                box1: 'Neurons located in the cerebellum.',
                box2: 'These cells coordinate voluntary movement and motor learning.'
            },
            'Stratified Cuboidal Epithelium_X4.webp': {
                box1: 'This type of tissue acts as a protective barrier to withstand friction and mechanical stress.',
                box2: 'Located in the skin.'
            },
            'Skeletal Muscle Cells_X4.webp': {
                box1: 'This tissue is responsible for voluntary body movement.',
                box2: 'They maintain body posture and help stabilize joints.'
            },
            'Dense Irregular Connective Tissue_X4.webp': {
                box1: 'Responsible for resisting tension from all directions.',
                box2: 'They provide structural strength and function like a very strong network.'
            }
        }
    },

    Ar: {
        title: 'المجهر الإفتراضي',
        lang_button: 'En',
        sidebar_h3: 'إختر عينة',
        sidebar_1: 'خلية البنكرياس',
        sidebar_2: 'النسيج الطلائي الحرشفي الطبقي',
        sidebar_3: 'خلايا العضلات الهيكلية',
        sidebar_4: 'نسيج ضام كثيف غير منتظم',
        sidebar_5: 'خلية بوركنجي',
        Show_info_not_pressed: 'إظهار المعلومات',
        Show_info_pressed: 'إخفاء المعلومات',
        info_box: {
            'body cell_X4.webp': {
                box1: 'الجزء الخارجي الإفرازي : المناطق الوردية تفرز الإنزيمات الهضمية',
                box2: 'القنوات: هذه القنوات تجمع الإنزيمات وتنقلها للأمعاء'
            },
            'purkinje cell_X4.webp': {
                box1: 'خلايا عصبية تتواجد في المخيخ ',
                box2: 'هذه الخلايا تنسق الحركة الإرادية والتعلم الحركي'
            },
            'Stratified Cuboidal Epithelium_X4.webp': {
                box1: 'هذا النوع من الأنسجة يعمل كحاجز وقائي لتحمل الاحتكاك والإجهاد الميكانيكي',
                box2: 'توجد في الجلد'
            },
            'Skeletal Muscle Cells_X4.webp': {
                box1: 'هذا النسيج مسؤول عن الحركة الإرادية للجسم',
                box2: 'تحافظ على وضعية الجسم وتساعد على استقرار المفاصل'
            },
            'Dense Irregular Connective Tissue_X4.webp': {
                box1: 'مسؤول عن مقاومة الشد من جميع الإتجاهات',
                box2: 'توفر قوة هيكلية وتعمل مثل شبكة قوية جدا'
            }
        }
    }
};

/* ------------------------------------------------------------------
   SLIDES
   Built-in slides + any extra ones found in assets/ (see README below).
   anchors: where each info box points, as [x, y] fractions of the photo
   (0,0 = top-left, 1,1 = bottom-right), per zoom level. No anchors for a
   zoom level = no arrows at that zoom level.
   !! The anchor numbers below are PLACEHOLDERS - set them to the real
   !! position of each structure in your X4 photos.
------------------------------------------------------------------- */
const slides = [
    { base: 'body cell', ext: 'webp', key: 'sidebar_1', anchors: {
        X4:  [[0.43, 0.32], [0.82, 0.84]],
        X20: [[0.84, 0.51], [0.11, 0.08]],
        X40: [[0.16, 0.34], null] } },
    { base: 'Stratified Cuboidal Epithelium', ext: 'webp', key: 'sidebar_2', anchors: {} },   // photo shows smooth muscle - see note
    { base: 'Skeletal Muscle Cells', ext: 'webp', key: 'sidebar_3', anchors: {} },            // photo shows bone growth plate - see note
    { base: 'Dense Irregular Connective Tissue', ext: 'webp', key: 'sidebar_4', anchors: {
        X4:  [[0.53, 0.70], [0.72, 0.48]],
        X20: [[0.76, 0.64], [0.53, 0.76]],
        X40: [[0.76, 0.51], [0.46, 0.83]] } },
    { base: 'purkinje cell', ext: 'webp', key: 'sidebar_5', anchors: {
        X4:  [[0.71, 0.64], [0.86, 0.80]],
        X20: [[0.71, 0.78], [0.38, 0.29]],
        X40: [[0.61, 0.43], [0.05, 0.14]] } }
];

/* Optional per-slide data for NEW slides, in assets/slide-info.js:
   window.SLIDE_INFO = {
     "my slide": {                       // = file name without _X4.webp
       names:   { En: "My Slide", Ar: "شريحتي" },
       info:    { En: ["text 1", "text 2"], Ar: ["نص 1", "نص 2"] },
       anchors: { X4: [[0.3, 0.4], [0.7, 0.6]] }
     }
   };
*/
const EXTRA = window.SLIDE_INFO || {};

const $ = id => document.getElementById(id);
const title = $('title'), langButton = $('lang_button'), sidebarH3 = $('sidebar_h3'), sidebar = $('sidebar');
const imageSelect = $('Img-select'), mainImg = $('main-img'), showInfo = $('Show-info'), frame = $('frame');
const area = $('microscope-area'), box1 = $('cell-box1'), box2 = $('cell-box2'), arrows = $('arrows'), ins = $('ins');
const zoomButtons = { X4: $('Zoom-X4'), X20: $('Zoom-X20'), X40: $('Zoom-X40') };

let L = 'En', cur = slides[0], zoom = 'X4', show = true, first = true;
let pos = { x: 0, y: 0 }, D = 400, W = 0, H = 0, drag = null;
const PAN = 1.15; // photo is shown 1.15x the eyepiece height so it can be dragged

const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const url = (base, z, ext) => `assets/${encodeURIComponent(base)}_${z}.${ext}`;
const altBase = b => b.includes(' ') ? b.replace(/ /g, '_') : b.replace(/_/g, ' ');
/* loads NAME_ZOOM.ext; if that file is missing tries the same name with _ and spaces swapped */
function setSrc(img, s, z, onFail) {
    const list = [url(s.base, z, s.ext), url(altBase(s.base), z, s.ext)];
    let i = 0;
    img.onerror = () => { if (++i < list.length) img.src = list[i]; else if (onFail) onFail(); };
    img.src = list[0];
}
const nameOf = s => s.key ? lang[L][s.key] : (EXTRA[s.base]?.names?.[L] || s.base.replace(/_/g, ' '));
const infoOf = s => {
    const e = EXTRA[s.base]?.info?.[L];
    if (e) return e;
    const i = lang[L].info_box[`${s.base}_X4.${s.ext}`];
    return i ? [i.box1, i.box2] : [];
};
const anchorsOf = s => ((s.anchors || EXTRA[s.base]?.anchors || {})[zoom]) || [];

/* ---------- slide box (sidebar) ---------- */
const glass = s => `<div class="glass"><div class="lab"><b>${esc(nameOf(s))}</b></div>` +
    `<div class="cov"><img alt="" draggable="false"></div></div>`;

function renderOptions() {
    imageSelect.innerHTML = '';
    slides.forEach((s, i) => {
        const b = document.createElement('button');
        b.className = 'sl' + (s === cur ? ' on' : '');
        b.style.setProperty('--i', i);
        b.innerHTML = glass(s);
        setSrc(b.querySelector('img'), s, 'X4');
        b.addEventListener('click', () => selectSlide(s));
        imageSelect.appendChild(b);
    });
}

function selectSlide(s) {
    if (s === cur) { sidebar.classList.remove('open'); return; }
    imageSelect.querySelectorAll('.sl').forEach((b, i) => b.classList.toggle('on', slides[i] === s));
    setTimeout(() => sidebar.classList.remove('open'), 350);
    frame.style.opacity = 0;
    frame.style.transform = 'scale(.94)';
    ins.classList.remove('run');
    ins.innerHTML = glass(s);
    setSrc(ins.querySelector('img'), s, 'X4');
    void ins.offsetWidth;
    ins.classList.add('run');
    setTimeout(() => { cur = s; zoom = 'X4'; setImage(); updateAll(); }, 700);
}

/* ---------- photo, drag, arrows ---------- */
function setImage() {
    setSrc(mainImg, cur, zoom, () => { if (zoom !== 'X4') { zoom = 'X4'; setImage(); } });
    Object.entries(zoomButtons).forEach(([z, b]) => b.classList.toggle('on', z === zoom));
}

mainImg.addEventListener('load', () => {
    pos = { x: 0, y: 0 };
    layout();
    setTimeout(() => { frame.style.opacity = 1; frame.style.transform = ''; }, first ? 0 : 300);
    first = false;
});

function clampPos() {
    const mx = Math.max(0, (W - D) / 2), my = Math.max(0, (H - D) / 2);
    pos.x = Math.min(mx, Math.max(-mx, pos.x));
    pos.y = Math.min(my, Math.max(-my, pos.y));
}

function layout() {
    const r = area.getBoundingClientRect();
    D = Math.floor(Math.min(r.width, r.height) * 0.93);
    Object.assign(frame.style, { width: D + 'px', height: D + 'px', left: (r.width - D) / 2 + 'px', top: (r.height - D) / 2 + 'px' });
    const ar = (mainImg.naturalWidth / mainImg.naturalHeight) || 1;
    if (ar >= 1) { H = D * PAN; W = H * ar; } else { W = D * PAN; H = W / ar; }
    Object.assign(mainImg.style, { width: W + 'px', height: H + 'px', left: (D - W) / 2 + 'px', top: (D - H) / 2 + 'px' });
    applyPos();
}

function applyPos() {
    clampPos();
    mainImg.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    drawArrows();
}

frame.addEventListener('pointerdown', e => { frame.setPointerCapture(e.pointerId); drag = { x: e.clientX, y: e.clientY }; });
frame.addEventListener('pointermove', e => {
    if (!drag) return;
    pos.x += e.clientX - drag.x; pos.y += e.clientY - drag.y;
    drag = { x: e.clientX, y: e.clientY };
    applyPos();
});
['pointerup', 'pointercancel'].forEach(t => frame.addEventListener(t, () => { drag = null; }));

function drawArrows() {
    let h = '';
    const an = anchorsOf(cur), texts = infoOf(cur);
    // slides with anchors: a box is shown only while its structure is inside the eyepiece
    // slides without any anchors: the box is general information and always shown
    const tracked = Object.keys(cur.anchors || EXTRA[cur.base]?.anchors || {}).length > 0;
    const ar = area.getBoundingClientRect(), fr = frame.getBoundingClientRect();
    const ox = fr.left - ar.left + D / 2, oy = fr.top - ar.top + D / 2;
    [box1, box2].forEach((b, i) => {
        let vis = !!texts[i], ax = 0, ay = 0;
        if (vis && tracked) {
            const a = an[i];
            if (!a) vis = false;                       // structure is not in this photo
            else {
                ax = ox + pos.x + (a[0] - 0.5) * W;
                ay = oy + pos.y + (a[1] - 0.5) * H;
                vis = Math.hypot(ax - ox, ay - oy) <= D * 0.47;   // inside the round view?
            }
        }
        b.classList.toggle('off', !vis);
        if (vis && tracked && show) {
            const r = b.getBoundingClientRect();
            const bx = r.left - ar.left + r.width / 2, by = r.top - ar.top + r.height / 2;
            h += `<line x1="${bx}" y1="${by}" x2="${ax}" y2="${ay}" stroke="#2a0307" stroke-width="5"/>` +
                 `<line x1="${bx}" y1="${by}" x2="${ax}" y2="${ay}" stroke="#fff" stroke-width="2"/>` +
                 `<circle cx="${ax}" cy="${ay}" r="8" fill="none" stroke="#2a0307" stroke-width="5"/>` +
                 `<circle cx="${ax}" cy="${ay}" r="8" fill="none" stroke="#fff" stroke-width="2"/>`;
        }
    });
    arrows.innerHTML = h;
}

/* ---------- text / language ---------- */
function updateAll() {
    document.documentElement.lang = L === 'Ar' ? 'ar' : 'en';
    document.documentElement.dir = L === 'Ar' ? 'rtl' : 'ltr';
    title.textContent = lang[L].title;
    langButton.textContent = lang[L].lang_button;
    sidebarH3.textContent = lang[L].sidebar_h3;
    showInfo.textContent = show ? lang[L].Show_info_pressed : lang[L].Show_info_not_pressed;
    const t = infoOf(cur);
    box1.textContent = t[0] || ''; box2.textContent = t[1] || '';
    box1.style.display = show && t[0] ? '' : 'none';
    box2.style.display = show && t[1] ? '' : 'none';
    renderOptions();
    drawArrows();
}

/* ---------- controls ---------- */
Object.entries(zoomButtons).forEach(([z, b]) => b.addEventListener('click', () => { zoom = z; setImage(); updateAll(); }));
$('toggle-btn').addEventListener('click', () => sidebar.classList.toggle('open'));
area.addEventListener('click', () => sidebar.classList.remove('open'));
langButton.addEventListener('click', () => { L = L === 'En' ? 'Ar' : 'En'; updateAll(); });
showInfo.addEventListener('click', () => { show = !show; updateAll(); });
new ResizeObserver(layout).observe(area);

/* ---------- auto-add slides from assets/ ----------
   A slide = three photos:  NAME_X4.webp  NAME_X20.webp  NAME_X40.webp
   1) assets/slides.js (made by scan_assets.py) lists them - works everywhere.
   2) If your server shows folder listings (python -m http.server, VS Code
      Live Server, Apache) new photos are also found automatically.      */
const norm = b => b.toLowerCase().replace(/[_\s]+/g, ' ').trim();
const addSlide = s => {
    if (!slides.some(x => norm(x.base) === norm(s.base))) slides.push({ base: s.base, ext: s.ext || 'webp' });
};
(window.EXTRA_SLIDES || []).forEach(addSlide);

async function discover() {
    try {
        const r = await fetch('assets/');
        if (!r.ok) return;
        const txt = await r.text(), re = /href="([^"?#]*?)_X4\.(webp|png|jpe?g)"/gi;
        let m;
        while ((m = re.exec(txt))) addSlide({ base: decodeURIComponent(m[1]).split('/').pop(), ext: m[2] });
    } catch (e) { /* no folder listing available */ }
}

setImage();
updateAll();
discover().then(renderOptions);
