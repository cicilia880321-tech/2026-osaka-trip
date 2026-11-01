'use strict';
const statusNames = ['建議／彈性行程', '已安排但待核對', '已確認'];
const statusClasses = ['flexible', 'pending', 'confirmed'];
// Public planning data only. Times are local to Asia/Tokyo, not browser-converted.
const days = [
 {date:'11/28',weekday:'六',city:'大阪',theme:'大阪市區、晚餐、天然溫泉',stay:'御宿野乃難波 · 1 晚，含早餐',hotel:'Onyado Nono Namba Natural Hot Spring',events:[
 ['05:55','桃園機場 T1 起飛 · VZ566',2,'來回航班已確認；時間為日本當地時間，請另核對機票上的出發地時間。','桃園國際機場 第一航廈'],
 ['09:20','抵達關西機場 T1',2,'入境、領行李，預留機場作業時間。','関西国際空港 第1ターミナル'],
 ['11:00–12:30','入境及前往難波',0,'預估時間；依實際入境情形調整。','南海なんば駅'],
 ['13:00','御宿野乃難波寄放行李',2,'先寄放行李，入住時間依飯店規定。','御宿 野乃 なんば'],
 ['14:00–17:30','道頓堀、心齋橋散步',0,'市區散步與購物。',['道頓堀','心斎橋']],
 ['18:15','前往北浜',0,'預留轉乘與步行時間。','北浜駅 大阪'],
 ['19:00','やきとり 温 · 雙人燒鳥晚餐',2,'已確認訂位；出發前核對店家正式地址。','やきとり 温 大阪 北浜'],
 ['晚餐後','返回飯店泡天然溫泉',0,'御宿野乃難波；確認浴場使用時間。','御宿 野乃 なんば']]},
 {date:'11/29',weekday:'日',city:'京都・八瀨',theme:'瑠璃光院、紅葉隧道',stay:'TUNE STAY KYOTO · 11/29–12/2，連住 3 晚',hotel:'TUNE STAY KYOTO',note:'夜楓特別列車為第三方拼團：須核對付款與紙本車票交付。',events:[
 ['08:30','早餐及退房',0,'大阪飯店含早餐。','御宿 野乃 なんば'],
 ['09:30–10:30','大阪 → 京都，寄放行李',0,'前往 TUNE STAY KYOTO；交通時間為預估。','TUNE STAY KYOTO'],
 ['10:45','前往八瀨地區',0,'經出町柳轉叡山電車；依當日班次預留轉乘時間。','八瀬比叡山口駅'],
 ['12:20–12:40','瑠璃光院預約入場 · 2 人',2,'11/29 入場時段已確認，請依預約規定報到。','瑠璃光院 京都'],
 ['14:00–16:00','八瀨散步、返回京都市區',0,'依人潮與交通狀況調整。','八瀬比叡山口駅'],
 ['17:00','Rokkaku ace · 雙人晚餐',2,'已確認訂位。','Rokkaku ace 京都'],
 ['19:00–20:30','前往出町柳',0,'預留交通、候車與集合時間。','出町柳駅'],
 ['20:50','出町柳站與拼團主辦人集合',1,'提前確認集合出口、付款及紙本車票交付。','出町柳駅'],
 ['21:00–22:40','叡山電車夜間紅葉隧道特別列車',1,'第三方拼團安排；以主辦人確認的票券及集合指示為準。','叡山電車 出町柳駅'],
 ['活動後','返回 TUNE STAY KYOTO',0,'事先確認晚間回程班次。','TUNE STAY KYOTO']]},
 {date:'11/30',weekday:'一',city:'京都・東山',theme:'東福寺、清水寺夜楓',stay:'TUNE STAY KYOTO',hotel:'TUNE STAY KYOTO',note:'晚餐與夜間參拜之間須留步行及排隊時間；清水寺開放日期、票價與最後入場時間以官方公告為準。',events:[
 ['09:00','早餐',0,'依當日安排選擇。',null],
 ['10:00–11:30','東福寺紅葉',0,'確認秋季參拜時間及門票。','東福寺 京都'],
 ['12:00','午餐',0,'依動線彈性選擇。',null],
 ['13:30–16:15','東山、二年坂、三年坂散步',0,'步行路線依人潮調整。',['東山 京都','二年坂 京都','三年坂 京都']],
 ['17:00','清水寺附近壽喜燒',1,'店名與正式訂位待確認；導航暫指向清水寺周邊。','清水寺 京都'],
 ['18:30–19:30','清水寺夜間賞楓',0,'2026 夜間參拜日期、票價與最後入場時間尚須查核。','清水寺 京都'],
 ['20:00','目標返回飯店',0,'視排隊與回程交通調整。','TUNE STAY KYOTO'],
 ['晚上','飯店私人浴池',1,'需預約，使用時段及設施條件待向飯店核對。','TUNE STAY KYOTO']]},
 {date:'12/1',weekday:'二',city:'京都・嵐山',theme:'常寂光寺、祐齋亭、嵯峨野小火車',stay:'TUNE STAY KYOTO',hotel:'TUNE STAY KYOTO',note:'16:30 從「トロッコ亀岡駅」上車，方向為龜岡 → 嵯峨；不是 JR 龜岡站，也不是嵯峨站上車。',events:[
 ['08:30','早餐',0,'依當日安排選擇。',null],
 ['09:30–11:00','常寂光寺賞楓',0,'預留上坡步行時間。','常寂光寺 京都'],
 ['11:00–12:15','嵐山散步、簡單午餐',0,'午餐後預留祐齋亭報到時間。','嵐山 京都'],
 ['13:00–13:30','嵐山祐齋亭報到 · 2 人',2,'已確認；依訂位信規定報到。','嵐山 祐斎亭'],
 ['14:15–15:00','前往 JR 嵯峨嵐山站 → JR 馬堀站',0,'步行至 JR 嵯峨嵐山，搭乘往龜岡方向列車至馬堀。',['JR 嵯峨嵐山駅','JR 馬堀駅']],
 ['15:30–16:00','前往小火車龜岡站候車',0,'從 JR 馬堀站步行至「トロッコ亀岡駅」，提早候車。','トロッコ亀岡駅'],
 ['16:30–17:04','嵯峨野觀光小火車 · 龜岡 → 嵯峨',2,'上車：トロッコ亀岡駅；下車：トロッコ嵯峨駅。',['トロッコ亀岡駅','トロッコ嵯峨駅']],
 ['18:30','燒肉荒川',1,'分店、地址與正式訂位待核對；搜尋結果並非已確認分店。','焼肉 荒川 京都'],
 ['晚餐後','泡湯或飯店私人浴池',1,'浴池使用時段需預約核對。','TUNE STAY KYOTO']]},
 {date:'12/2',weekday:'三',city:'京都 → 大阪 → 台灣',theme:'早餐、購物、返台',events:[
 ['09:00','整理行李、退房或寄放行李',0,'確認寄放及領取時間。','TUNE STAY KYOTO'],
 ['10:00–10:50','Kyoto Itookashi · 雙人早餐',2,'12/2 預約已確認。','Kyoto Itookashi'],
 ['11:30–13:00','京都最後散步、領行李',0,'出發大阪前取回行李。','TUNE STAY KYOTO'],
 ['13:00–14:30','京都 → 大阪',0,'交通時間為預估。','大阪駅'],
 ['14:30–18:30','UNIQLO、百貨公司購物',0,'依購物地點安排機場交通；留意行李空間。',['UNIQLO 大阪','大阪 百貨店']],
 ['19:00–20:00','前往關西機場',0,'預估時間；依出發地、班次及航空公司報到截止時間提早出發。','関西国際空港 第1ターミナル'],
 ['20:00 後','辦理登機、安檢、機場免稅購物',0,'先完成必要報到及安檢；確認免稅店營業時間，不影響登機。','関西国際空港 第1ターミナル'],
 ['23:10','關西機場 T1 起飛 · GK057',2,'原始確認信顯示無免費託運行李，確認是否已另行加購。','関西国際空港 第1ターミナル'],
 ['12/3 01:30','抵達桃園機場 T1',2,'本頁時間依提供行程統一標為日本時間；請核對機票上的台灣當地抵達時間。','桃園國際機場 第一航廈']]}];
const notes = [
 ['12/1｜從小火車龜岡站上車','先搭 JR 至馬堀站，再步行至トロッコ亀岡駅。16:30 龜岡 → 嵯峨；不是 JR 龜岡站，也不是嵯峨站上車。'],
 ['11/29｜核對夜楓拼團交票與付款','向第三方主辦人確認 ¥11,000 雙人費用是否已付、紙本票交付方式與集合出口；20:50 出町柳集合。'],
 ['11/30｜確認壽喜燒正式訂位','補上店名、地址及 17:00 雙人訂位狀態，預留到清水寺步行及排隊時間。'],
 ['12/1｜確認燒肉荒川分店','核對分店地址、18:30 訂位及小火車抵達後的交通時間。'],
 ['11/30、12/1｜預約私人浴池','向 TUNE STAY KYOTO 確認是否提供所需設施、使用規則、費用與可預約時段。'],
 ['11/28｜留意大阪飯店延後扣款','原訂單 ¥40,153；匯率調整預估等值 ¥42,161，僅為提醒，不重複記帳。核對實際扣款。'],
 ['航班｜確認託運行李與當地時間','原始機票確認信顯示無免費託運行李。確認來回加購額度；本頁依提供資料統一標示日本時間，桃園出發及抵達時間請與機票再次核對。'],
 ['12/2｜先報到安檢，再免稅購物','依航空公司規定提早抵達 T1，核對報到、行李托運與登機截止時間，以及 SK-II、肌膚之鑰免稅櫃營業時間。'],
 ['秋季參拜｜查核官方最新資訊','逐一確認瑠璃光院、東福寺、常寂光寺、祐齋亭、清水寺及叡山電車的 2026 開放日期、夜間參拜、票價與最後入場時間。']];
const expenseDefaults = [
 ['大阪飯店 1 晚',40153,'住宿','11/28','已知金額','Agoda 已確認訂單','延後扣款'],
 ['叡山電車紅葉拼團',11000,'交通','11/29','已知金額','雙人拼團報價','付款待確認'],
 ['嵐山祐齋亭',6000,'門票','12/1','已知金額','訂位信載明雙人金額','付款待確認'],
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
function renderDays(){
 $('#days').innerHTML=days.map((d,i)=>`<article class="day"><header class="day-head"><span class="day-number">DAY 0${i+1}</span><div><h3>${d.date}（${d.weekday}）${d.city}</h3><p>${d.theme}</p></div></header><div class="timeline">${d.events.map(e=>`<div class="event"><time>${esc(e[0])}</time><div><div class="event-title"><strong>${esc(e[1])}</strong><span class="badge ${statusClasses[e[2]]}">${statusNames[e[2]]}</span></div><p>${esc(e[3])}</p>${e[4]?(Array.isArray(e[4])?e[4]:[e[4]]).map(q=>maps(q)).join('　'):''}</div></div>`).join('')}</div>${d.stay?`<div class="stay">住宿 · ${d.stay} <span class="badge confirmed">已確認</span> ${maps(d.hotel,'飯店導航')}</div>`:''}${d.note?`<div class="day-note">${esc(d.note)}</div>`:''}</article>`).join('');
 $('#note-list').innerHTML=notes.map(n=>`<details><summary>${esc(n[0])}</summary><p>${esc(n[1])}</p></details>`).join('');
}
function select(options,value,attrs){return `<select ${attrs}>${options.map(o=>`<option${o===value?' selected':''}>${esc(o)}</option>`).join('')}</select>`}
function stat(label,value){return `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`}
function sumExpenses(list,basis){return list.filter(e=>e.amount!==null&&e.basis===basis).reduce((a,e)=>a+e.amount,0)}
function renderBudgetTotals(){
 const known=sumExpenses(state.expenses,'已知金額'),estimate=sumExpenses(state.expenses,'估算金額');
 $('#budget-summary').innerHTML=stat('已知金額 · 非已付款',money(known,true))+stat('獨立估算',money(estimate,true))+stat('整趟已填合計',money(known+estimate,true));
 $('#daily').innerHTML=dayOptions.map(d=>{const rows=state.expenses.filter(e=>e.day===d);return `<div>${d}<strong>${money(sumExpenses(rows,'已知金額')+sumExpenses(rows,'估算金額'),true)}</strong>已知 ${money(sumExpenses(rows,'已知金額'),true)}<br>估算 ${money(sumExpenses(rows,'估算金額'),true)} · 待填 ${rows.filter(e=>e.amount===null).length} 筆</div>`}).join('');
 document.querySelectorAll('.expense').forEach(el=>{const e=state.expenses.find(e=>e.id===el.dataset.id);el.querySelector('.converted').textContent=e.amount===null?'待填':`${money(e.amount,true)} · ${e.basis}`});
}
function renderExpenses(){
 $('#expenses').innerHTML=state.expenses.map(e=>`<article class="expense" data-id="${e.id}"><h3>${esc(e.name)}</h3><div class="converted"></div><div class="fields"><label>雙人金額（JPY）<input aria-label="${esc(e.name)}雙人金額" data-key="amount" type="number" min="0" max="10000000000" step="0.01" placeholder="待填" value="${e.amount??''}"></label><label>金額依據${select(bases,e.basis,'data-key="basis"')}</label><label>類別<input data-key="category" maxlength="100" value="${esc(e.category)}"></label><label>分配日期${select(dayOptions,e.day,'data-key="day"')}</label><label class="wide">付款狀態${select(payments,e.payment,'data-key="payment"')}</label><label class="wide">金額來源／說明<input data-key="source" maxlength="1000" value="${esc(e.source)}"></label></div></article>`).join('');
 renderBudgetTotals();
}
function renderShoppingTotals(){
 const total=state.items.reduce((a,i)=>a+(i.price??0)*i.quantity,0),bought=state.items.filter(i=>i.bought).reduce((a,i)=>a+(i.price??0)*i.quantity,0);
 $('#shopping-summary').innerHTML=stat('購物總預算',money(total))+stat('已購買總額',money(bought))+stat('價格待填',`${state.items.filter(i=>i.price===null).length} 項`);
 document.querySelectorAll('.item').forEach(el=>{const i=state.items.find(i=>i.id===el.dataset.id);el.classList.toggle('bought',i.bought);el.querySelector('.item-total').textContent=i.price===null?'價格待填':`小計 ${money(i.price*i.quantity)}`});
}
function renderItems(){
 $('#items').innerHTML=state.items.map(i=>`<div class="item" data-id="${esc(i.id)}"><input type="checkbox" data-key="bought" aria-label="標記${esc(i.name)}已購買"${i.bought?' checked':''}><label>商品名稱<input data-key="name" maxlength="100" value="${esc(i.name)}"></label><label>單價（JPY）<input data-key="price" type="number" min="0" max="10000000000" step="0.01" placeholder="待填" value="${i.price??''}"></label><label>數量<input data-key="quantity" type="number" min="1" max="9999" step="1" value="${i.quantity}"></label><label class="item-notes">備註<textarea data-key="notes" maxlength="1000" rows="1">${esc(i.notes)}</textarea></label><button class="delete" type="button" aria-label="刪除${esc(i.name)}">刪除</button><div class="item-total"></div></div>`).join('');
 renderShoppingTotals();
}
function renderControls(){$('#currency').value=state.currency;$('#people').value=state.people;$('#rate').value=state.rate}
function renderAll(){renderControls();renderExpenses();renderItems()}
$('#currency').addEventListener('change',e=>{state.currency=e.target.value;save();renderBudgetTotals();renderShoppingTotals()});
$('#people').addEventListener('change',e=>{state.people=Number(e.target.value);save();renderBudgetTotals()});
$('#rate').addEventListener('change',e=>{const n=Number(e.target.value);if(!Number.isFinite(n)||n<=0||n>100){e.target.value=state.rate;message('匯率須大於 0 且不超過 100。');return}state.rate=n;save();renderBudgetTotals();renderShoppingTotals()});
$('#expenses').addEventListener('change',e=>{
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
