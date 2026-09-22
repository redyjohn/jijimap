/* 集集街舞 MV 場勘路線
   資料順序即拍攝順序；tier 決定顏色與篩選。 */

const TIERS = {
  main:     { label: '主要景點',   icon: '🟥' },
  backup:   { label: '重要備案',   icon: '🟧' },
  optional: { label: '有時間再拍', icon: '🟨' },
  end:      { label: '收隊',       icon: '—' }
};

const SPOTS = [
  {
    no: 1, name: '集集車站', tier: 'main', section: '市區段',
    lat: 23.82361, lng: 120.78778, nav: '集集車站',
    address: '南投縣集集鎮民生路75號',
    feature: '集集鐵道小鎮代表、木造車站、月台與鐵道景觀',
    note: 'MV開場核心。建議第一站完成主要團體舞、車站正面、月台及鐵道 B-roll。',
    noteStrong: 'MV開場核心。'
  },
  {
    no: 2, name: '軍史公園', tier: 'backup', section: '市區段',
    lat: 23.82718, lng: 120.79541, nav: '集集軍史公園',
    address: '南投縣集集鎮軍史公園（距集集車站約800公尺）',
    feature: '軍機、軍事展示、開闊空間',
    note: '與車站、明新書院同屬市區北側景點。時間不足可取消。'
  },
  {
    no: 3, name: '明新書院', tier: 'main', section: '市區段',
    lat: 23.82753, lng: 120.79963, nav: '明新書院',
    address: '南投縣集集鎮永昌里東昌巷4號',
    feature: '清代書院、紅磚建築、傳統中式格局',
    note: '歷史建築核心。利用門廊、柱列、階梯與對稱空間拍攝。'
  },
  {
    no: 4, name: '化及蠻貊碣', tier: 'backup', section: '市區段',
    lat: 23.826314, lng: 120.807335, nav: '化及蠻貊碣',
    address: '南投縣集集鎮廣明里（特有生物研究保育中心旁巷道進入約800公尺）',
    feature: '歷史石碣、古蹟與小鎮歷史感',
    note: '以 B-roll 為主，控制 5–10 分鐘；不安排完整舞蹈。',
    extra: '補充：進入道路狹窄（約2公尺、難會車），大型車輛不易進出，建議小車前往並留意會車點。'
  },
  {
    no: 5, name: '武昌宮', tier: 'main', section: '市區段',
    lat: 23.831675, lng: 120.792361, nav: '集集武昌宮',
    address: '南投縣集集鎮八張街181號',
    feature: '921 地震遺址、特殊建築、歷史記憶',
    note: '重要視覺場景。建議完整拍攝一段舞蹈；注意遺址安全及場地規範。',
    noteStrong: '重要視覺場景。'
  },
  {
    no: 6, name: '泰順廊橋', tier: 'main', section: '市區段',
    lat: 23.830313, lng: 120.792791, nav: '泰順廊橋',
    address: '南投縣集集鎮八張街（武昌宮旁）',
    feature: '木造廊橋、橋體縱深、特殊空間',
    note: '與武昌宮相鄰，適合連續拍攝。適合雙人、群舞、走位及縱深構圖。',
    extra: '補充：可同一次停車完成武昌宮與廊橋。'
  },
  {
    no: 7, name: '大樟樹', tier: 'main', section: '市區段',
    lat: 23.82890, lng: 120.77970, nav: '集集大樟樹',
    address: '南投縣集集鎮和平里中集路（大眾爺廟旁）',
    feature: '大型老樟樹、樹體尺度、小鎮生活景觀',
    note: '與下一站大眾爺廟相鄰，建議連續拍攝。利用樹體尺度與人物做群舞、走位。',
    noteStrong: '與下一站大眾爺廟相鄰，建議連續拍攝。'
  },
  {
    no: 8, name: '大眾爺廟', tier: 'main', section: '市區段',
    lat: 23.828866, lng: 120.779851, nav: '集集大眾爺廟',
    address: '南投縣集集鎮和平里中集路',
    feature: '傳統信仰、廟宇空間、小鎮生活景觀',
    note: '與大樟樹同區，接續拍攝即可。可拍廟宇環境與生活感 B-roll。'
  },
  {
    no: 9, name: '鄭界宗宅', tier: 'optional', section: '市區段',
    lat: 23.827518, lng: 120.777402, nav: '鄭界宗宅',
    address: '南投縣集集鎮集集街（和平里）',
    feature: '傳統老宅、巷弄、歷史建築',
    note: '只有現場動線真的順才補拍；不可為此繞路。市區段最後一站。',
    extra: '補充：私人產權、未列古蹟，拍攝前須取得屋主同意。'
  },
  {
    no: 10, name: '十三目仔窯', tier: 'main', section: '窯業與隧道段',
    flag: 'check', flagLabel: '⚠️ 待確認',
    lat: 23.827491, lng: 120.771235, nav: '十三目仔窯',
    address: '南投縣集集鎮林尾段山腳巷（鐵道旁）',
    feature: '傳統磚窯、窯體、鐵道周邊空間',
    note: '保留為重要核心，但不得假設可直接進入拍攝。2026年已有實地資料記錄園區停止營業，正式拍攝前必須確認產權、是否開放、是否能進入及場地安全。',
    noteStrong: '保留為重要核心，但不得假設可直接進入拍攝。'
  },
  {
    no: 11, name: '添興窯', tier: 'optional', section: '窯業與隧道段',
    lat: 23.83247, lng: 120.75608, nav: '添興窯陶藝村',
    address: '南投縣集集鎮田寮里楓林巷10號（綠色隧道旁）',
    feature: '傳統陶藝、地方窯業文化',
    note: '若十三目仔窯無法拍，可作為窯業文化替代鏡頭。官方目前資料仍列有營運資訊，但週四公休。',
    extra: '補充：電話 049-2781130，出發前先確認可否商業拍攝與費用。'
  },
  {
    no: 12, name: '集集隧道', tier: 'optional', section: '窯業與隧道段',
    flag: 'check', flagLabel: '⚠️ 安全評估',
    lat: 23.825001, lng: 120.763074, nav: '集集隧道 152縣道',
    address: '南投縣集集鎮投152縣道（草嶺腳段公路隧道）',
    feature: '老隧道、特殊地形、單線道路空間',
    note: '不建議列為固定拍攝點。一線道且有車輛通行，安全與控場難度高；現勘確認後再決定。',
    noteStrong: '不建議列為固定拍攝點。'
  },
  {
    no: 13, name: '綠色隧道', tier: 'main', section: '窯業與隧道段',
    lat: 23.830958, lng: 120.758087, nav: '集集綠色隧道',
    address: '南投縣投152縣道 3K–7.3K（名間鄉至集集鎮，全長約4.5公里）',
    feature: '約4.5公里樟樹林道、鐵道並行、長距離縱深',
    note: '「鐵道與小鎮」核心場景。適合行進式、跟拍及群舞。拍攝需避開車流與其他使用者。官方目前資料顯示場域正常開放，但仍可能因天候或整修暫時封閉。',
    noteStrong: '「鐵道與小鎮」核心場景。',
    extra: '補充：標記點為東側入口附近，林道沿 152 縣道往名間方向延伸，現勘時再選定最佳機位段落。'
  },
  {
    no: 14, name: '集集攔河堰', tier: 'main', section: '濁水溪段',
    lat: 23.82028, lng: 120.76417, nav: '集集攔河堰',
    address: '南投縣集集鎮林尾里攔河路2號',
    feature: '濁水溪、水利工程、堰體、山景與大尺度河川景觀',
    note: '「濁水溪與生態」核心第一站。拍攝大景、堰體、河川及團體隊形。若需要進入管理中心或觀景設施，須配合開放時間。',
    noteStrong: '「濁水溪與生態」核心第一站。',
    extra: '補充：管理中心及展示館官方標示 09:00–17:00，颱風、災害或維修可能封閉；電話 049-2764031 先確認。'
  },
  {
    no: 15, name: '開闢鴻荒石碣', tier: 'main', section: '濁水溪段',
    lat: 23.82015, lng: 120.76300, nav: '開闢鴻荒石碣',
    address: '南投縣集集鎮攔河路2號一帶（集集大橋北端、攔河堰旁）',
    feature: '清代石碣、濁水溪、舊集集大橋橋墩、山景',
    note: '與攔河堰同一區域，應連續拍攝。以歷史 B-roll、橋墩、山河景為主。官方標示 24 小時開放。',
    extra: '補充：座標為集集大橋北端附近推估位置，現場依指標與自行車道入口確認。'
  },
  {
    no: 16, name: '濁水溪河岸', tier: 'main', section: '濁水溪段',
    flag: 'final', flagLabel: '★ 評分收尾',
    lat: 23.81930, lng: 120.76620, nav: '23.81930,120.76620',
    address: '集集大橋北岸河濱一帶（建議由開闢鴻荒自行車道側進入）',
    feature: '濁水溪、河岸、山景與自然地形',
    note: '第二評分標準最重要的收尾場景。拍河流大景＋群舞＋遠景。執行無痕拍攝，不進入危險水域、不破壞植被。',
    noteStrong: '第二評分標準最重要的收尾場景。',
    extra: '補充：此點為區域性場景而非單一地址，導航使用座標定位，實際下車與拍攝位置現勘決定。'
  },
  {
    no: 17, name: '返回台中', tier: 'end', section: '收隊',
    lat: null, lng: null, nav: '台中市',
    address: '—',
    feature: '—',
    note: '河岸拍攝完成後離開集集，不再返回市區。實際回程道路依當日導航及交通狀況決定。'
  }
];

const SEGMENTS = [
  { label: '① 市區段（車站 → 鄭界宗宅）', from: 1, to: 9 },
  { label: '② 窯業與隧道段（十三目仔窯 → 綠色隧道）', from: 10, to: 13 },
  { label: '③ 濁水溪段（攔河堰 → 濁水溪河岸）', from: 14, to: 16 }
];

/* ---------- 工具 ---------- */

const navUrl = (spot) =>
  'https://www.google.com/maps/dir/?api=1&travelmode=driving&destination=' +
  encodeURIComponent(spot.nav);

const placeUrl = (spot) =>
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent(spot.lat ? `${spot.lat},${spot.lng}` : spot.nav);

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
      <span class="card-chevron" aria-hidden="true"></span>
    </summary>
    <div class="card-body">
      ${isEnd ? '' : `<dl class="card-meta">
        <div><dt>景點特色</dt><dd>${spot.feature}</dd></div>
        <div><dt>位置</dt><dd>${spot.address}</dd></div>
      </dl>`}
      <div class="card-note"><span class="note-label">備考</span><p>${noteHtml}</p></div>
      ${spot.extra ? `<p class="card-extra">${spot.extra}</p>` : ''}
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

/* ---------- 統計與現勘清單 ---------- */

const count = (tier) => SPOTS.filter((s) => s.tier === tier).length;
document.getElementById('statMain').textContent = count('main');
document.getElementById('statBackup').textContent = count('backup');
document.getElementById('statOptional').textContent = count('optional');
document.getElementById('statTotal').textContent = SPOTS.length - 1;

const CHECKS = [
  { no: 5, text: '武昌宮：遺址安全與場地規範，拍攝舞蹈前先向廟方確認。' },
  { no: 10, text: '十三目仔窯：確認產權、是否開放、能否進入拍攝及場地安全（有資料記錄園區停止營業）。' },
  { no: 11, text: '添興窯：週四公休，作為窯業替代場景前先確認營運與拍攝許可。' },
  { no: 12, text: '集集隧道：一線道且有車輛通行，安全與控場難度高，現勘後再決定是否納入。' },
  { no: 13, text: '綠色隧道：可能因天候或整修暫時封閉；拍攝需避開車流與其他使用者。' },
  { no: 14, text: '集集攔河堰：進入管理中心或觀景設施須配合開放時間。' },
  { no: 16, text: '濁水溪河岸：執行無痕拍攝，不進入危險水域、不破壞植被。' }
];

const checklistEl = document.getElementById('checklist');
CHECKS.forEach((item, i) => {
  const spot = SPOTS.find((s) => s.no === item.no);
  const li = document.createElement('li');
  const id = `check-${i}`;
  li.innerHTML = `
    <input type="checkbox" id="${id}">
    <label for="${id}"><b>${spot.no}. ${spot.name}</b>｜${item.text.replace(/^[^：]*：/, '')}</label>
    <a class="check-link" href="${navUrl(spot)}" target="_blank" rel="noopener">導航</a>`;
  checklistEl.appendChild(li);
});
