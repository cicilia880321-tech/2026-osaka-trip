'use strict';
const statusNames = ['建議／彈性行程', '已安排但待核對', '已確認'];
const statusClasses = ['flexible', 'pending', 'confirmed'];
// Public planning data only. Times are local to Asia/Tokyo, not browser-converted.
const days = [{"date":"11/28","weekday":"六","city":"大阪","theme":"難波街區、燒鳥晚餐、溫泉","stay":"御宿野乃難波 · 1 晚，含早餐","hotel":"御宿 野乃 なんば","events":[["05:55","桃園機場 T1 起飛 · VZ566",2,"台灣當地時間；前一晚安排前往機場。","桃園國際機場 第一航廈"],["09:20","抵達關西機場 T1",2,"日本當地時間；入境及機場作業。","関西国際空港 第1ターミナル"],["10:45–11:45","南海電鐵前往難波",0,"依入境速度與列車班次調整。","南海なんば駅"],["11:45–12:15","御宿野乃難波寄放行李",2,"正式入住依飯店規定。","御宿 野乃 なんば"],["12:15–13:30","黑門市場午餐",0,"海鮮、壽司等自由選擇。","黒門市場"],["13:45–14:15","難波八阪神社",0,"巨型獅子殿。","難波八阪神社"],["14:30–15:15","法善寺橫丁",0,"街區散步。","法善寺横丁"],["15:15–16:30","心齋橋商店街",0,"UNIQLO 與散步；可視體力縮短。","心斎橋筋商店街"],["16:30–18:00","飯店休息、天然溫泉",0,"保留交通前的休息時間。","御宿 野乃 なんば"],["18:10–18:15","出發前往北濱",0,"預留轉乘與步行緩衝。","北浜駅 大阪"],["19:00","やきとり 温 · 雙人晚餐",2,"已確認訂位；單點，座位費 ¥500／人。","大阪市中央区平野町2-2-2"],["晚餐後","回飯店；視體力短逛道頓堀",0,"以休息為優先。","道頓堀"]]},{"date":"11/29","weekday":"日","city":"京都・八瀨","theme":"琉璃光院、下鴨神社、紅葉列車","stay":"TUNE STAY KYOTO · 連住 3 晚","hotel":"TUNE STAY KYOTO","note":"17:00 Rokkaku ace 已訂位；20:50 出町柳集合。拼團票券交付仍待核對。","events":[["07:30–08:30","早餐、退房",0,"大阪飯店含早餐。","御宿 野乃 なんば"],["08:30–10:00","大阪前往京都",0,"交通依班次調整。","京都駅"],["10:00–10:30","TUNE STAY KYOTO 寄放行李",2,"京都住宿已確認；住宿稅可能現場另付。","TUNE STAY KYOTO"],["10:30–11:40","前往琉璃光院",0,"預留排隊及步行緩衝。","瑠璃光院"],["12:20–12:40","琉璃光院預約入場",2,"兩人已確認，時段不可任意調整。","瑠璃光院"],["12:40–14:00","琉璃光院參觀",0,"依現場參觀規則。","瑠璃光院"],["14:00–15:00","叡山電車前往下鴨神社",0,"出町柳下車再步行。","下鴨神社"],["15:00–15:50","下鴨神社、糺之森",0,"時間有限，優先森林與神社；必要時縮短。","下鴨神社"],["15:50–16:45","前往京都市中心",0,"以準時抵達餐廳為優先。","京都市中京区土屋町102-2"],["17:00–約18:30","Rokkaku ace · 雙人晚餐",2,"已確認訂位，勿遲到。","京都市中京区土屋町102-2"],["18:30–20:15","休息、前往出町柳",0,"若需先回飯店入住，須計算往返時間。","出町柳駅"],["20:50","出町柳站拼團集合",1,"核對集合出口、付款與紙本車票交付。","出町柳駅"],["21:00–22:40","叡山電車夜間紅葉特別列車",1,"第三方拼團；以主辦人正式指示為準。","出町柳駅"],["22:40 後","返回 TUNE STAY KYOTO",0,"確認夜間回程班次。","TUNE STAY KYOTO"]]},{"date":"11/30","weekday":"一","city":"京都・東山","theme":"東福寺、南禪寺、永觀堂、清水寺夜楓","stay":"TUNE STAY KYOTO","hotel":"TUNE STAY KYOTO","note":"賞楓重點日，景點參觀時間可彈性調整；清水寺夜間開放依官方公告。","events":[["07:30","早餐、出發",0,"提早出發避開人潮。",null],["08:30–10:00","東福寺、通天橋",0,"以秋季實際開放時間為準。","東福寺 京都"],["10:00–10:40","前往南禪寺",0,"計程車可節省轉乘時間。","南禅寺"],["10:40–11:40","南禪寺、水路閣",0,"紅葉與建築。","南禅寺 水路閣"],["11:40–12:00","步行至永觀堂",0,"步行移動。","永観堂"],["12:00–13:30","永觀堂賞楓",0,"白天參觀，依現場排隊調整。","永観堂"],["13:30–14:15","岡崎一帶午餐",0,"午餐時間可彈性調整。","岡崎 京都"],["14:15–14:45","前往東山",0,"計程車較省時間。","二年坂 京都"],["14:45–16:30","二年坂、三年坂、八坂塔",0,"步行與拍照。",["二年坂","三年坂","八坂の塔"]],["16:30–17:30","清水寺周邊休息、候場",0,"保留夜間參拜入場緩衝。","清水寺 京都"],["17:30–19:30","清水寺夜間賞楓",0,"原行程安排 11/30 夜間參拜；請依官方最終公告。","清水寺 京都"],["19:30–20:30","東山晚餐",0,"不預設已有壽喜燒訂位。","東山 京都"],["20:30 後","返回飯店",0,"以體力決定是否休息。","TUNE STAY KYOTO"]]},{"date":"12/1","weekday":"二","city":"京都・嵐山","theme":"常寂光寺、竹林、祐齋亭、小火車","stay":"TUNE STAY KYOTO","hotel":"TUNE STAY KYOTO","note":"16:30 必須從「トロッコ亀岡駅」上車，並非 JR 龜岡站或嵯峨站。","events":[["07:30–08:15","早餐、前往嵐山",0,"盡量提早抵達。","嵐山 京都"],["08:45–10:00","常寂光寺賞楓",0,"石階與山坡路段。","常寂光寺"],["10:00–10:40","嵐山竹林小徑",0,"步行拍照。","竹林の小径"],["10:40–11:15","野宮神社",0,"黑色鳥居。","野宮神社"],["11:15–11:50","渡月橋、桂川河畔",0,"散步。","渡月橋"],["11:50–12:30","嵐山午餐",0,"勿影響祐齋亭報到。","嵐山 京都"],["12:30–13:00","前往祐齋亭",0,"步行預留時間。","嵐山 祐斎亭"],["13:00–13:30","嵐山祐齋亭預約報到",2,"兩人已確認；入場依票券規定。","嵐山 祐斎亭"],["13:30–14:30","祐齋亭參觀",0,"14:30 為目標最晚離開時間。","嵐山 祐斎亭"],["14:30–15:45","前往小火車龜岡站",0,"JR 嵯峨嵐山 → JR 馬堀 → 步行至トロッコ亀岡。",["嵯峨嵐山駅","馬堀駅","トロッコ亀岡駅"]],["15:45–16:00","抵達トロッコ亀岡、驗票",0,"請勿走到 JR 龜岡站。","トロッコ亀岡駅"],["16:30–17:04","嵯峨野觀光小火車：龜岡 → 嵯峨",2,"富貴 5 號車廂，座位 8A、8D；已確認。",["トロッコ亀岡駅","トロッコ嵯峨駅"]],["17:04 後","返回京都市區、晚餐",0,"燒肉荒川尚無已確認訂位信，不列為固定晚餐。","京都駅"]]},{"date":"12/2","weekday":"三","city":"京都 → 關西機場","theme":"Kyoto Itookashi、伏見稻荷、東寺、返台","note":"最後一天不回大阪；京都車站搭 Haruka 前往關西機場。回程託運行李已加購，額度與訂單明細待核對。","events":[["08:00–09:15","整理行李、退房寄放行李",0,"確認飯店是否可寄放至傍晚。","TUNE STAY KYOTO"],["09:15–09:50","前往 Kyoto Itookashi",0,"準時抵達，避免超過遲到規定。","京都市下京区永養寺町224"],["10:00–10:50","Kyoto Itookashi 雙人早餐",2,"已確認改期至 12/2；用餐時間 50 分鐘。","京都市下京区永養寺町224"],["10:50–11:30","前往伏見稻荷",0,"依實際交通班次調整。","伏見稲荷大社"],["11:30–13:00","伏見稻荷大社、千本鳥居",0,"不走完整稻荷山，控制停留時間。","伏見稲荷大社"],["13:00–13:45","簡單午餐、前往東寺",0,"避免延誤下午行程。","東寺 京都"],["13:45–15:00","東寺、五重塔",0,"以當日開放時間為準。","東寺 京都"],["15:00–17:00","京都車站購物、伴手禮",0,"UNIQLO、肌膚之鑰視店面庫存與動線。","京都駅"],["17:00–17:45","京都車站周邊晚餐",0,"簡單用餐。","京都駅"],["17:45–18:20","回 TUNE STAY KYOTO 領行李",0,"確認行李寄放服務與領取時間。","TUNE STAY KYOTO"],["約18:30–19:00","京都車站搭 Haruka 前往關西機場",0,"班次待查；目標 20:00 左右抵達機場。","京都駅"],["約20:00","抵達關西機場、報到、免稅購物",0,"回程託運行李已加購；確認重量、件數及航空公司截止時間。","関西国際空港 第1ターミナル"],["23:10","關西機場 T1 起飛 · GK057",2,"日本當地時間；回程託運行李已加購，額度待核對。","関西国際空港 第1ターミナル"],["12/3 01:30","抵達桃園機場 T1",2,"台灣當地時間。","桃園國際機場 第一航廈"]]}];
const notes = [["12/1｜小火車龜岡站上車","JR 馬堀站步行至トロッコ亀岡駅；16:30 龜岡→嵯峨，勿搭反方向。"],["11/29｜夜楓拼團交票","確認雙人 ¥11,000 的付款狀態、20:50 出町柳集合出口、紙本票交付方式。"],["11/29｜17:00 晚餐與夜楓集合","Rokkaku ace 訂位已確認；用餐後安排前往出町柳，勿錯過 20:50 集合。"],["12/2｜回程託運已加購","已依旅客告知更新為「已加購」。確認 GK057 訂單上的重量、件數、付款憑證及託運截止時間；去程行李規定另行核對。"],["12/2｜京都寄放行李及 Haruka","確認 TUNE STAY KYOTO 可寄放至傍晚；選擇能在 20:00 左右抵達 KIX 的 Haruka 班次。"],["11/28｜大阪飯店延後扣款","Agoda 訂單 ¥40,153，可能因延後扣款幣別換算而異；¥42,161 僅為提醒，不重複計帳。"],["11/28｜燒鳥座位費","やきとり 温 每人 ¥500，雙人 ¥1,000，餐點另外計價。"],["京都住宿｜住宿稅","TUNE STAY KYOTO 提醒住宿稅可能另收；實際金額依房價與飯店規定。"],["秋季參拜｜出發前確認","東福寺、永觀堂、常寂光寺、清水寺等秋季開放與夜間參拜，依官方最新公告。"],["12/1｜祐齋亭至龜岡交通","14:30 目標離開祐齋亭，先回 JR 嵯峨嵐山，再搭 JR 到馬堀、步行至小火車龜岡站。"]];
const expenseDefaults = [
 ['大阪飯店 1 晚',40153,'住宿','11/28','已知金額','Agoda 已確認訂單','延後扣款'],
 ['叡山電車紅葉拼團',11000,'交通','11/29','已知金額','雙人拼團報價','付款待確認'],
 ['嵐山祐齋亭',6000,'門票','12/1','已知金額','訂位信載明雙人金額','付款待確認'],
 ['燒鳥吧台座位費',1000,'餐飲','11/28','已知金額','¥500／人，雙人 ¥1,000','未付款'],
 ['來回機票',null,'機票','未分配','待填','尚未取得確切付款金額','付款待確認'],
 ['TUNE STAY KYOTO 三晚',null,'住宿','未分配','待填','11/29–12/2，雙人三晚總額待填','付款待確認'],
 ['瑠璃光院門票',null,'門票','11/29','待填','尚未取得確切付款金額','付款待確認'],
 ['嵯峨野小火車',null,'交通','12/1','待填','尚未取得確切付款金額','付款待確認'],
 ...['11/28','11/29','11/30','12/1','12/2'].map(d=>[`${d} 餐飲`,null,'餐飲',d,'待填','各餐廳實際消費待填','付款待確認']),
 ['市區交通',null,'交通','未分配','待填','全程市區交通總額待填','付款待確認'],
 ['其他景點門票',null,'門票','未分配','待填','避免重複計入已列門票','付款待確認'],
 ['私人浴池／其他',null,'其他','未分配','待填','費用與使用條件待核對','付款待確認']
].map((a,i)=>({id:`e${i}`,name:a[0],amount:a[1],category:a[2],day:a[3],basis:a[4],source:a[5],payment:a[6]}));
const KEY='osaka-autumn-2026-v1';
const fresh=()=>({version:1,currency:'JPY',people:2,rate:0.22,expenses:structuredClone(expenseDefaults),items:['UNIQLO','SK-II 機場免稅','Clé de Peau Beauté 肌膚之鑰'].map((name,i)=>({id:`s${i}`,name,price:null,quantity:1,notes:'',bought:false}))});
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dayOptions=['11/28','11/29','11/30','12/1','12/2','未分配'];
const bases=['已知金額','估算金額','待填'];
const payments=['付款待確認','延後扣款','未付款','已付款'];
function validAmount(n){return n===null||(typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=1e10)}
function validText(v,max=1000){return typeof v==='string'&&v.length<=max}
function validate(s){
 if(!s||s.version!==1||!['JPY','TWD'].includes(s.currency)||![1,2].includes(s.people)||typeof s.rate!=='number'||!Number.isFinite(s.rate)||s.rate<=0||s.rate>100||!Array.isArray(s.expenses)||s.expenses.length!==expenseDefaults.length||!Array.isArray(s.items)||s.items.length>500)throw Error('備份格式或版本不正確。');
 if(s.expenses.some((e,i)=>!e||e.id!==`e${i}`||!validText(e.name,100)||!validText(e.category,100)||!validText(e.source)||!validAmount(e.amount)||!bases.includes(e.basis)||!payments.includes(e.payment)||!dayOptions.includes(e.day)||(e.basis==='待填'&&e.amount!==null)))throw Error('預算資料格式不正確。');
 if(s.items.some(i=>!i||!validText(i.id,100)||!validText(i.name,100)||!validText(i.notes)||!validAmount(i.price)||!Number.isInteger(i.quantity)||i.quantity<1||i.quantity>9999||typeof i.bought!=='boolean')||new Set(s.items.map(i=>i.id)).size!==s.items.length)throw Error('購物資料格式不正確。');
 return s;
}
let state=fresh();
let loadWarning='';
try{const saved=localStorage.getItem(KEY);if(saved)state=validate(JSON.parse(saved));}catch{loadWarning='無法讀取已儲存資料，現顯示預設內容；請檢查瀏覽器儲存設定或匯入備份。';}
function message(s){$('#message').textContent=s}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{message('儲存失敗，請立即匯出 JSON 備份，避免重新整理後遺失。');}}
function money(n,perPerson=false){const value=n*(state.currency==='TWD'?state.rate:1)/(perPerson&&state.people===1?2:1);return new Intl.NumberFormat('zh-TW',{style:'currency',currency:state.currency,minimumFractionDigits:0,maximumFractionDigits:2}).format(value)}
function maps(q,label){return `<a class="map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}" target="_blank" rel="noopener noreferrer">${esc(label||q)} ↗</a>`}
// One persistent expense per slot. Shared trip costs are labelled explicitly.
const costSlots={'0-0':'e4','0-3':'e0','0-10':'e3','1-4':'e6','1-12':'e1','1-stay':'e5','3-7':'e2','3-11':'e7'};
function costSlot(key){return costSlots[key]?`<div class="cost-slot" data-expense="${costSlots[key]}"></div>`:''}
function renderDays(){
 $('#days').innerHTML=days.map((d,i)=>`<article class="day"><header class="day-head"><span class="day-number">DAY 0${i+1}</span><div><h3>${d.date}（${d.weekday}）${d.city}</h3><p>${d.theme}</p></div></header><div class="timeline">${d.events.map((e,j)=>`<div class="event"><time>${esc(e[0])}</time><div><div class="event-title"><strong>${esc(e[1])}</strong><span class="badge ${statusClasses[e[2]]}">${statusNames[e[2]]}</span></div><p>${esc(e[3])}</p>${e[4]?(Array.isArray(e[4])?e[4]:[e[4]]).map(q=>maps(q)).join('　'):''}</div>${costSlot(`${i}-${j}`)}</div>`).join('')}</div>${d.stay?`<div class="stay">住宿 · ${d.stay} <span class="badge confirmed">已確認</span> ${maps(d.hotel,'飯店導航')}${costSlot(`${i}-stay`)}</div>`:''}${d.note?`<div class="day-note">${esc(d.note)}</div>`:''}</article>`).join('');
 $('#note-list').innerHTML=notes.map(n=>`<details><summary>${esc(n[0])}</summary><p>${esc(n[1])}</p></details>`).join('');
}
function select(options,value,attrs){return `<select ${attrs}>${options.map(o=>`<option${o===value?' selected':''}>${esc(o)}</option>`).join('')}</select>`}
function stat(label,value){return `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`}
function sumExpenses(list,basis){return list.filter(e=>e.amount!==null&&e.basis===basis).reduce((a,e)=>a+e.amount,0)}
function renderBudgetTotals(){
 const known=sumExpenses(state.expenses,'已知金額'),estimate=sumExpenses(state.expenses,'估算金額');
 $('#budget-summary').innerHTML=stat('已知金額 · 非已付款',money(known,true))+stat('獨立估算',money(estimate,true))+stat('整趟已填合計',money(known+estimate,true));
 $('#daily').innerHTML=`<table><thead><tr><th scope="col">日期</th><th scope="col">已知</th><th scope="col">估算</th><th scope="col">小計</th></tr></thead><tbody>${dayOptions.map(d=>{const rows=state.expenses.filter(e=>e.day===d),known=sumExpenses(rows,'已知金額'),estimate=sumExpenses(rows,'估算金額');return `<tr><th scope="row">${d}<small>待填 ${rows.filter(e=>e.amount===null).length} 筆</small></th><td>${money(known,true)}</td><td>${money(estimate,true)}</td><td>${money(known+estimate,true)}</td></tr>`}).join('')}</tbody></table>`;
 document.querySelectorAll('.expense').forEach(el=>{const e=state.expenses.find(e=>e.id===el.dataset.id);el.querySelector('.converted').textContent=e.amount===null?'待填 ＋':money(e.amount,true);el.querySelector('.cost-meta').textContent=`${e.basis} · ${e.payment}`});
}
function renderExpenses(){
 document.querySelectorAll('.cost-slot').forEach(slot=>{const e=state.expenses.find(e=>e.id===slot.dataset.expense);slot.innerHTML=`<details class="expense" data-id="${e.id}"><summary aria-label="編輯${esc(e.name)}費用"><span class="cost-name">${esc(e.name)}${['e4'].includes(e.id)?'（全程）':''}</span><strong class="converted"></strong><small class="cost-meta"></small></summary><div class="fields"><label>雙人金額（JPY）<input aria-label="${esc(e.name)}雙人金額" data-key="amount" type="number" min="0" max="10000000000" step="0.01" placeholder="待填" value="${e.amount??''}"></label><label>金額依據${select(bases,e.basis,'data-key="basis"')}</label><label>類別<input data-key="category" maxlength="100" value="${esc(e.category)}"></label><label>分配日期${select(dayOptions,e.day,'data-key="day"')}</label><label>付款狀態${select(payments,e.payment,'data-key="payment"')}</label><label>金額來源／說明<input data-key="source" maxlength="1000" value="${esc(e.source)}"></label></div></details>`});
 renderBudgetTotals();
}

function renderShoppingTotals(){
 const total=state.items.reduce((a,i)=>a+(i.price??0)*i.quantity,0),bought=state.items.filter(i=>i.bought).reduce((a,i)=>a+(i.price??0)*i.quantity,0);
 $('#shopping-summary').innerHTML=stat('購物總預算',money(total))+stat('已購買總額',money(bought))+stat('價格待填',`${state.items.filter(i=>i.price===null).length} 項`);
 document.querySelectorAll('.item').forEach(el=>{const i=state.items.find(i=>i.id===el.dataset.id);el.classList.toggle('bought',i.bought);el.querySelector('.item-total').textContent=i.price===null?'價格待填':`小計 ${money(i.price*i.quantity)}`});
}
function renderItems(){
 $('#items').innerHTML=state.items.map(i=>`<div class="item" data-id="${esc(i.id)}"><input type="checkbox" data-key="bought" aria-label="標記${esc(i.name)}已購買"${i.bought?' checked':''}><input class="item-name" aria-label="商品名稱" data-key="name" maxlength="100" value="${esc(i.name)}"><label class="price-label">單價 ¥<input aria-label="單價（日幣）" data-key="price" type="number" min="0" max="10000000000" step="0.01" placeholder="待填" value="${i.price??''}"></label><label class="quantity-label">×<input aria-label="數量" data-key="quantity" type="number" min="1" max="9999" step="1" value="${i.quantity}"></label><div class="item-total"></div><details class="item-more"><summary>更多</summary><label>備註<textarea data-key="notes" maxlength="1000" rows="2">${esc(i.notes)}</textarea></label><button class="delete" type="button" aria-label="刪除${esc(i.name)}">刪除商品</button></details></div>`).join('');
 renderShoppingTotals();
}

function renderControls(){$('#currency').value=state.currency;$('#people').value=state.people;$('#rate').value=state.rate}
function renderAll(){renderControls();renderExpenses();renderItems()}
$('#currency').addEventListener('change',e=>{state.currency=e.target.value;save();renderBudgetTotals();renderShoppingTotals()});
$('#people').addEventListener('change',e=>{state.people=Number(e.target.value);save();renderBudgetTotals()});
$('#rate').addEventListener('change',e=>{const n=Number(e.target.value);if(!Number.isFinite(n)||n<=0||n>100){e.target.value=state.rate;message('匯率須大於 0 且不超過 100。');return}state.rate=n;save();renderBudgetTotals();renderShoppingTotals()});
$('#days').addEventListener('change',e=>{
 const key=e.target.dataset.key,card=e.target.closest('.expense');if(!key||!card)return;const row=state.expenses.find(r=>r.id===card.dataset.id);
 if(key==='amount') {const n=e.target.value===''?null:Number(e.target.value);if(!validAmount(n)){e.target.value=row.amount??'';message('請輸入有效的非負金額。');return}row.amount=n;if(n===null)row.basis='待填';else if(row.basis==='待填')row.basis='估算金額';card.querySelector('[data-key=basis]').value=row.basis;}
 else if(key==='basis'){row.basis=e.target.value;if(row.basis==='待填'){row.amount=null;card.querySelector('[data-key=amount]').value=''}else if(row.amount===null){row.basis='待填';e.target.value='待填';message('請先填入金額，再指定已知或估算依據。');}}
 else row[key]=e.target.value;
 save();renderBudgetTotals();
});
$('#add-item').addEventListener('click',()=>{if(state.items.length>=500){message('最多 500 項商品。');return}state.items.push({id:crypto.randomUUID(),name:'新商品',price:null,quantity:1,notes:'',bought:false});save();renderItems();$('#items .item:last-child [data-key=name]').focus()});
$('#items').addEventListener('change',e=>{
 const key=e.target.dataset.key,card=e.target.closest('.item');if(!key||!card)return;const row=state.items.find(i=>i.id===card.dataset.id);
 if(key==='bought')row.bought=e.target.checked;
 else if(key==='price'){const n=e.target.value===''?null:Number(e.target.value);if(!validAmount(n)){e.target.value=row.price??'';message('請輸入有效的非負單價。');return}row.price=n;}
 else if(key==='quantity'){const n=Number(e.target.value);if(!Number.isInteger(n)||n<1||n>9999){e.target.value=row.quantity;message('數量須為 1–9999 的整數。');return}row.quantity=n;}
 else row[key]=e.target.value;
 save();renderShoppingTotals();
});
$('#items').addEventListener('click',e=>{if(!e.target.closest('.delete'))return;const card=e.target.closest('.item');state.items=state.items.filter(i=>i.id!==card.dataset.id);save();renderItems();$('#add-item').focus()});
$('#export').addEventListener('click',()=>{const url=URL.createObjectURL(new Blob([JSON.stringify(state,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download='kyoto-osaka-2026-backup.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);message('已匯出預算、購物清單與設定備份。')});
$('#import').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>2*1024*1024)throw Error('備份檔案不可超過 2 MB。');const incoming=validate(JSON.parse(await file.text()));if(!confirm('匯入會取代此瀏覽器的預算與購物清單。確定已備份並繼續？'))return;state=incoming;save();renderAll();message('已匯入備份。')}catch(err){message(`匯入失敗，原資料保留：${err.message}`)}finally{e.target.value=''}});
renderDays();renderAll();if(loadWarning)message(loadWarning);
