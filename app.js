/* 集集街舞 MV 拍攝路線
   資料順序即拍攝順序；tier 決定顏色與篩選。 */

const TIERS = {
  main:     { label: '主要景點',   icon: '🟥' },
  backup:   { label: '重要備案',   icon: '🟧' },
  optional: { label: '有時間再拍', icon: '🟨' },
  end:      { label: '收隊',       icon: '—' }
};

const SPOTS = [
  {
    no: 1, name: '車埕車站', tier: 'main', section: '車埕段',
    lat: 23.832637, lng: 120.86574, nav: '車埕車站',
    address: '南投縣水里鄉民權巷2號',
    feature: '集集支線終點站、木造車站、鐵道與山城景觀',
    note: '路線第一站。集集支線終點的木造車站，適合開場、月台與鐵道 B-roll。',
    noteStrong: '路線第一站。',

  },
  {
    no: 2, name: '集集車站', tier: 'main', section: '市區段',
    lat: 23.82361, lng: 120.78778, nav: '集集車站',
    address: '南投縣集集鎮民生路75號',
    feature: '集集鐵道小鎮代表、木造車站、月台與鐵道景觀',
    note: 'MV開場核心。建議完成主要團體舞、車站正面、月台及鐵道 B-roll。',
    noteStrong: 'MV開場核心。',

  },
  {
    no: 3, name: '軍史公園', tier: 'backup', section: '市區段',
    lat: 23.82718, lng: 120.79541, nav: '集集軍史公園',
    address: '南投縣集集鎮軍史公園（距集集車站約800公尺）',
    feature: '軍機、軍事展示、開闊空間',
    note: '與車站、明新書院同屬市區北側景點。時間不足可取消。',

  },
  {
    no: 4, name: '明新書院', tier: 'main', section: '市區段',
    lat: 23.82753, lng: 120.79963, nav: '明新書院',
    address: '南投縣集集鎮永昌里東昌巷4號',
    feature: '清代書院、紅磚建築、傳統中式格局',
    note: '歷史建築核心。利用門廊、柱列、階梯與對稱空間拍攝。',

  },
  {
    no: 5, name: '集集3D彩繪秘境', tier: 'main', section: '市區段',
    lat: 23.82810, lng: 120.78650, nav: '集集鎮公所',
    address: '南投縣集集鎮玉映里庄子巷、玉映巷（集集鎮公所對面，民生路61號）',
    feature: '老宅巷弄、3D 彩繪牆、火車與石虎主題',
    note: '公所對面巷弄的彩繪牆。適合近景、走位與巷弄縱深；導航先到鎮公所，再進入對面巷弄。',
    extra: '補充：標記點為公所南側巷口附近，實際機位現勘再定。',

  },
  {
    no: 6, name: '泰順廊橋', tier: 'main', section: '市區段',
    lat: 23.830313, lng: 120.792791, nav: '泰順廊橋',
    address: '南投縣集集鎮八張街（武昌宮旁）',
    feature: '木造廊橋、橋體縱深、特殊空間',
    note: '與下一站武昌宮相鄰，適合連續拍攝。適合雙人、群舞、走位及縱深構圖。',
    noteStrong: '與下一站武昌宮相鄰，適合連續拍攝。',
    extra: '補充：可同一次停車完成廊橋與武昌宮。',

  },
  {
    no: 7, name: '武昌宮', tier: 'main', section: '市區段',
    lat: 23.831675, lng: 120.792361, nav: '集集武昌宮',
    address: '南投縣集集鎮八張街181號',
    feature: '921 地震遺址、特殊建築、歷史記憶',
    note: '重要視覺場景。建議完整拍攝一段舞蹈；注意遺址安全及場地規範。',
    noteStrong: '重要視覺場景。',

  },
  {
    no: 8, name: '大眾爺廟', tier: 'main', section: '市區段',
    lat: 23.828866, lng: 120.779851, nav: '集集大眾爺廟',
    address: '南投縣集集鎮和平里中集路',
    feature: '傳統信仰、廟宇空間、小鎮生活景觀',
    note: '市區段最後一站。可拍廟宇環境與生活感 B-roll。',

  },
  {
    no: 9, name: '綠色隧道', tier: 'main', section: '隧道段',
    lat: 23.827491, lng: 120.771235, nav: '南投縣集集鎮和平里市前街25號',
    address: '南投縣集集鎮和平里市前街25號（投152縣道旁、十三目仔窯一帶）',
    feature: '約4.5公里樟樹林道、鐵道並行、長距離縱深',
    note: '「鐵道與小鎮」核心場景。適合行進式、跟拍及群舞。拍攝需避開車流與其他使用者。官方目前資料顯示場域正常開放，但仍可能因天候或整修暫時封閉。',
    noteStrong: '「鐵道與小鎮」核心場景。',
    extra: '補充：導航點為市前街25號（十三目仔窯鐵道旁），林道沿 152 縣道往名間方向延伸，現勘時再選定最佳機位段落。',

  },
  {
    no: 10, name: '攔河堰管理中心', tier: 'main', section: '濁水溪段',
    lat: 23.82028, lng: 120.76417, nav: '集集攔河堰管理中心',
    address: '南投縣集集鎮林尾里攔河路2號',
    feature: '濁水溪、水利工程、堰體、山景與大尺度河川景觀',
    note: '「濁水溪與生態」核心。拍攝大景、堰體、河川及團體隊形。進入管理中心或觀景設施須配合開放時間。',
    noteStrong: '「濁水溪與生態」核心。',
    extra: '補充：管理中心及展示館官方標示 09:00–17:00，颱風、災害或維修可能封閉；電話 049-2764031 先確認。',

  },
  {
    no: 11, name: '「開闢鴻荒」石碣', tier: 'main', section: '濁水溪段',
    lat: 23.82015, lng: 120.76300, nav: '開闢鴻荒石碣',
    address: '南投縣集集鎮攔河路2號一帶（集集大橋北端、攔河堰旁）',
    feature: '清代石碣、濁水溪、舊集集大橋橋墩、山景',
    note: '與攔河堰管理中心同一區域，應連續拍攝。以歷史 B-roll、橋墩、山河景為主。官方標示 24 小時開放。',
    extra: '補充：座標為集集大橋北端附近推估位置，現場依指標與自行車道入口確認。',

  }
];

const SEGMENTS = [
  { label: '① 車埕到市區（車埕車站 → 大眾爺廟）', from: 1, to: 8 },
  { label: '② 隧道與濁水溪（綠色隧道 → 開闢鴻荒石碣）', from: 9, to: 11 }
];

/* ---------- 工具 ---------- */

const navUrl = (spot) =>
  'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=' +
  encodeURIComponent(spot.nav);

const placeUrl = (spot) =>
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(spot.lat ? `${spot.lat},${spot.lng}` : spot.nav);

/** Google 圖片搜尋：優先用 photoQuery，否則「集集 + 景點名」 */
const photoUrl = (spot) =>
  'https://www.google.com/search?tbm=isch&q=' +
  encodeURIComponent(spot.photoQuery || `集集 ${spot.name}`);

function segmentUrl(from, to) {
  const list = SPOTS.filter((s) => s.no >= from && s.no <= to);
  const dest = list[list.length - 1];
  const waypoints = list.slice(0, -1).map((s) => s.nav);
  let url =
    'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=' +
    encodeURIComponent(dest.nav);
  if (waypoints.length) {
    url += '&waypoints=' + waypoints.map(encodeURIComponent).join('%7C');
  }
  return url;
}

const matchesFilter = (spot, filter) => {
  if (filter === 'all') return true;
  if (filter === 'check') return Boolean(spot.flag === 'check');
  return spot.tier === filter;
};

/* ---------- 地圖 ---------- */

const mapSpots = SPOTS.filter((s) => s.lat !== null);

const street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; OpenStreetMap contributors'
});
const satellite = L.tileLayer(
  'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
  { maxZoom: 19, attribution: 'Tiles &copy; Esri' }
);

const map = L.map('map', { layers: [street], scrollWheelZoom: false });
L.control.layers({ '街道圖': street, '衛星影像': satellite }).addTo(map);
map.on('click', () => map.scrollWheelZoom.enable());

const routeLine = L.polyline(mapSpots.map((s) => [s.lat, s.lng]), {
  color: '#c0392b',
  weight: 3,
  opacity: 0.65,
  dashArray: '8 8'
}).addTo(map);

const markers = new Map();

mapSpots.forEach((spot) => {
  const icon = L.divIcon({
    className: 'pin-wrap',
    html: `<span class="pin tier-${spot.tier}${spot.flag ? ' has-flag' : ''}">${spot.no}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -16]
  });
  const marker = L.marker([spot.lat, spot.lng], { icon, title: `${spot.no}. ${spot.name}` })
    .addTo(map)
    .bindPopup(
      `<div class="popup">
         <p class="popup-tier tier-text-${spot.tier}">${TIERS[spot.tier].icon} ${TIERS[spot.tier].label}${
        spot.flag ? `｜${spot.flagLabel}` : ''
      }</p>
         <h3>${spot.no}. ${spot.name}</h3>
         <p class="popup-feature">${spot.feature}</p>
         <a class="popup-btn" href="${navUrl(spot)}" target="_blank" rel="noopener">Google 導航</a>
         ${spot.tier !== 'end' ? `<a class="popup-info" href="${photoUrl(spot)}" target="_blank" rel="noopener">Google 圖片</a>` : ''}
         <button class="popup-link" data-goto-card="${spot.no}">查看景點卡片</button>
       </div>`
    );
  markers.set(spot.no, marker);
});

map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });

map.on('popupopen', (e) => {
  const btn = e.popup.getElement().querySelector('[data-goto-card]');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const no = Number(btn.dataset.gotoCard);
    const card = document.getElementById(`card-${no}`);
    if (!card) return;
    card.open = true;
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('is-flash');
    setTimeout(() => card.classList.remove('is-flash'), 1200);
  });
});

/* ---------- 卡片 ---------- */

const cardsEl = document.getElementById('cards');
let currentSection = null;

SPOTS.forEach((spot) => {
  if (spot.section !== currentSection) {
    currentSection = spot.section;
    const head = document.createElement('h3');
    head.className = 'section-head';
    head.dataset.section = currentSection;
    head.textContent = currentSection;
    cardsEl.appendChild(head);
  }

  const card = document.createElement('details');
  card.className = `card tier-border-${spot.tier}`;
  card.id = `card-${spot.no}`;
  card.dataset.tier = spot.tier;
  card.dataset.flag = spot.flag || '';

  const noteHtml = spot.noteStrong
    ? spot.note.replace(spot.noteStrong, `<strong>${spot.noteStrong}</strong>`)
    : spot.note;

  const isEnd = spot.tier === 'end';

  card.innerHTML = `
    <summary>
      <span class="card-no tier-${spot.tier}">${isEnd ? '終' : spot.no}</span>
      <span class="card-title">
        <span class="card-name">${spot.name}</span>
        <span class="card-badges">
          <span class="badge tier-bg-${spot.tier}">${TIERS[spot.tier].icon} ${TIERS[spot.tier].label}</span>
          ${spot.flag ? `<span class="badge badge-flag">${spot.flagLabel}</span>` : ''}
        </span>
      </span>
      ${isEnd ? '' : `
      <a class="btn btn-info card-info-btn" href="${photoUrl(spot)}" data-q="${encodeURIComponent(spot.photoQuery || `集集 ${spot.name}`)}" target="_blank" rel="noopener">📷 Google 圖片</a>`}
      <span class="card-chevron" aria-hidden="true"></span>
    </summary>
    <div class="card-body">
      ${isEnd ? '' : `<dl class="card-meta">
        <div><dt>景點特色</dt><dd>${spot.feature}</dd></div>
        <div><dt>位置</dt><dd>${spot.address}</dd></div>
      </dl>`}
      <div class="card-note"><span class="note-label">備考</span><p>${noteHtml}</p></div>
      ${spot.extra ? `<p class="card-extra">${spot.extra}</p>` : ''}
      ${isEnd ? '' : `
      <p class="card-info-line">照片：<a href="${photoUrl(spot)}" target="_blank" rel="noopener">Google 圖片搜尋「集集 ${spot.name}」</a></p>`}
      <div class="card-actions">
        <a class="btn btn-primary" href="${navUrl(spot)}" target="_blank" rel="noopener">
          ${isEnd ? '導航回台中' : 'Google 導航'}
        </a>
        ${isEnd ? '' : `
        <a class="btn" href="${placeUrl(spot)}" target="_blank" rel="noopener">在 Google 地圖開啟</a>
        <button class="btn btn-ghost" data-locate="${spot.no}">在上方地圖定位</button>
        <span class="coords">${spot.lat.toFixed(5)}, ${spot.lng.toFixed(5)}</span>`}
      </div>
    </div>`;

  cardsEl.appendChild(card);
});

cardsEl.addEventListener('click', (e) => {
  const infoBtn = e.target.closest('.card-info-btn');
  if (infoBtn) {
    e.preventDefault();
    e.stopPropagation();
    const q = infoBtn.getAttribute('data-q') || encodeURIComponent('集集');
    window.open('https://www.google.com/search?tbm=isch&q=' + q, '_blank', 'noopener');
    return;
  }

  const btn = e.target.closest('[data-locate]');
  if (!btn) return;
  const no = Number(btn.dataset.locate);
  const marker = markers.get(no);
  if (!marker) return;
  document.getElementById('map-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
  map.setView(marker.getLatLng(), 17, { animate: true });
  marker.openPopup();
});

/* ---------- 分段導航按鈕 ---------- */

const segBtns = document.getElementById('segmentBtns');
SEGMENTS.forEach((seg) => {
  const a = document.createElement('a');
  a.className = 'btn btn-outline';
  a.href = segmentUrl(seg.from, seg.to);
  a.target = '_blank';
  a.rel = 'noopener';
  a.textContent = seg.label;
  segBtns.appendChild(a);
});

/* ---------- 篩選與展開 ---------- */

const filtersEl = document.getElementById('filters');

// 沒有對應景點的篩選按鈕不顯示，避免按下後出現空清單
filtersEl.querySelectorAll('.chip').forEach((chip) => {
  const f = chip.dataset.filter;
  if (f === 'all') return;
  chip.hidden = !SPOTS.some((s) => matchesFilter(s, f));
});

filtersEl.addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  filtersEl.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c === chip));
  applyFilter(chip.dataset.filter);
});

function applyFilter(filter) {
  SPOTS.forEach((spot) => {
    const card = document.getElementById(`card-${spot.no}`);
    const show = filter === 'all' ? true : matchesFilter(spot, filter);
    card.hidden = !show;
    const marker = markers.get(spot.no);
    if (!marker) return;
    if (show) marker.addTo(map);
    else map.removeLayer(marker);
  });

  // 隱藏整段都被篩掉的段落標題
  document.querySelectorAll('.section-head').forEach((head) => {
    const inSection = SPOTS.filter((s) => s.section === head.dataset.section);
    head.hidden = inSection.every((s) => document.getElementById(`card-${s.no}`).hidden);
  });

  if (filter === 'all') {
    routeLine.addTo(map);
    map.fitBounds(routeLine.getBounds(), { padding: [40, 40] });
  } else {
    map.removeLayer(routeLine);
    const visible = mapSpots.filter((s) => matchesFilter(s, filter));
    if (visible.length) {
      map.fitBounds(L.latLngBounds(visible.map((s) => [s.lat, s.lng])), { padding: [60, 60] });
    }
  }
}

document.getElementById('expandAll').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((c) => (c.open = true));
});
document.getElementById('collapseAll').addEventListener('click', () => {
  document.querySelectorAll('.card').forEach((c) => (c.open = false));
});

/* ---------- 統計 ---------- */

document.getElementById('statTotal').textContent = SPOTS.filter((s) => s.tier !== 'end').length;
