'use strict';
const statusNames = ['建議／彈性行程', '已安排但待核對', '已確認'];
const statusClasses = ['flexible', 'pending', 'confirmed'];
// Public planning data only. Times are local to Asia/Tokyo, not browser-converted.
const days = [{"date":"11/28","weekday":"六","city":"大阪","theme":"両忘午餐、入住後的自由時間、飯店溫泉","stay":"御宿野乃難波 · 1 晚，含早餐","hotel":"御宿 野乃 なんば","events":[["05:55","桃園機場 T1 起飛 · VZ566",2,"台灣當地時間；前一晚安排前往機場。","桃園國際機場 第一航廈"],["09:20","抵達關西機場 T1",2,"日本當地時間；入境及機場作業。","関西国際空港 第1ターミナル"],["10:30–11:50","關西機場 → 西心齋橋両忘",0,"大眾交通為主，09:20落地至12:00訂位緩衝偏緊；不先寄放行李，須確認店家是否可攜小行李入內。","大阪府大阪市中央区西心斎橋1-10-17"],["12:00–14:30","両忘（兩忘）· 雙人套餐午餐",0,"Jack轉寄Tabelog確認信：11/28 12:00，2人，¥13,800／人（合計¥27,600），系統費¥880已收；現場付餐費。套餐2.5小時。前一天取消50%、當天100%；訂位者需到場。","御宿 野乃 なんば"],["14:30–15:35","前往御宿野乃難波寄放行李｜兩人分開活動",0,"午餐後寄放行李；Cecilia 減法散步、Jack 自由購物，兩人約好返回飯店時間與集合點。","御宿 野乃 なんば"],["晚餐彈性","たこ梅本店（可選）／飯店休息",0,"不列必吃或固定訂位。若想吃關東煮且體力足再去；不想移動就留在飯店，享受溫泉、免費宵夜拉麵與休息。隔天早起，放鬆優先。","たこ梅 本店 大阪 道頓堀1-1-8"],["晚間","御宿野乃｜溫泉、免費宵夜拉麵、早休息",0,"留白，不安排遠距離移動；隔天早起出發。","御宿 野乃 なんば"]],"note":"第一天採減法：午餐後兩人各自自由活動；たこ梅只列彈性晚餐。隔天早起移動，晚上以御宿野乃溫泉、免費宵夜拉麵及休息為主。"},{"date":"11/29","weekday":"日","city":"京都・八瀨","theme":"琉璃光院、京都站寄物、Rokkaku ace、夜楓列車","stay":"TUNE STAY KYOTO · 連住 3 晚","hotel":"TUNE STAY KYOTO","note":"11/29以琉璃光院及晚間已確認活動為優先。建議先將行李寄放京都站大型置物櫃／寄存服務，再直接前往琉璃光院；回市中心取行李、到 TUNE STAY KYOTO 寄放／入住，前往17:00 Rokkaku ace。20:50 出町柳站拼團集合是固定關鍵時間，務必留交通、集合出口及交票緩衝。若京都站寄物滿位，備案先到飯店寄放。","events":[["07:30–08:30","早餐、退房",0,"大阪飯店早餐；退房後帶行李出發。","御宿 野乃 なんば"],["08:30–09:45","大阪 → 京都站",0,"搭鐵路前往京都站；以實際班次為準。","京都駅"],["09:45–10:15","京都站寄放行李（置物櫃／寄存服務）",0,"先寄放行李，不先繞去住宿；11/29京都站設有秋季臨時寄存服務（官方公告），也可使用大型置物櫃。","京都駅"],["10:15–11:40","京都站 → 琉璃光院",0,"搭鐵路往八瀨／比叡山方向，依當日班次安排轉乘與步行。","瑠璃光院"],["12:20–12:40","琉璃光院預約入場",2,"兩人已確認；入場時段固定，預留提前抵達與驗票。","瑠璃光院"],["12:40–14:00","琉璃光院參觀",0,"依現場規則；留意入場票是否需出示預約憑證。","瑠璃光院"],["14:00–15:15","琉璃光院 → 京都市中心／京都站",0,"搭鐵路返回市區，依班次及人潮調整。","出町柳駅"],["15:15–16:20","京都站取行李 → TUNE STAY KYOTO 寄放／入住",0,"取回行李，再前往住宿放行李或辦理入住；若入住時間未到先寄放。","TUNE STAY KYOTO"],["16:20–16:50","前往 Rokkaku ace",0,"步行／地鐵前往餐廳，留足迷路及交通緩衝。","京都市中京区土屋町102-2"],["17:00–約18:30","Rokkaku ace · 雙人晚餐",2,"已確認訂位，避免遲到。","京都市中京区土屋町102-2"],["18:30–20:15","晚餐後 → 出町柳站／集合附近",0,"晚餐後直接前往集合地點；不要安排回飯店再折返。","出町柳駅"],["20:50","出町柳站拼團集合",1,"重要固定集合時間：確認集合出口、主辦人聯絡方式、紙本票／車票交付；雙人 ¥11,000 現金已確認，預先備好。","出町柳駅"],["21:00–22:40","叡山電車夜間紅葉特別列車",1,"拼團活動已確認；依主辦人通知與實際車票指示。","出町柳駅"],["22:40後","返回 TUNE STAY KYOTO",0,"夜間返程班次先確認，回飯店後辦理入住／休息。","TUNE STAY KYOTO"]]},{"date":"11/30","weekday":"一","city":"京都・東山","theme":"東福寺、下鴨神社、南禪寺、永觀堂、清水寺夜楓","stay":"TUNE STAY KYOTO","hotel":"TUNE STAY KYOTO","note":"11/30、12/1 為賞楓主日，所有已列景點均保留。交通與參觀時間依實際人潮、官方營業／夜間參拜時間調整；若延誤，優先縮短午餐或付費區停留，不直接刪除景點。","events":[["07:30","早餐、出發",0,"提早出發避開人潮。",null],["08:30–09:45","東福寺、通天橋",0,"秋季參觀，依當天排隊調整。","東福寺 京都"],["09:45–10:45","東福寺 → 出町柳 → 下鴨神社",0,"搭京阪電車往出町柳後步行，含候車緩衝。","出町柳駅"],["10:45–12:00","下鴨神社＋糺之森",0,"若上午延誤可縮短森林散步。","下鴨神社"],["12:00–13:00","簡單午餐、前往南禪寺",0,"午餐避免排隊太久；此段交通較緊，視實際班次調整。","南禅寺"],["13:00–14:30","南禪寺完整參觀｜三門、水路閣、方丈庭園",0,"約90分鐘；三門與方丈分別付費，水路閣免費。若時間不足可擇一付費區參觀。","南禅寺"],["14:30–16:00","永觀堂賞楓",0,"日間最晚16:00入場，建議14:30前後抵達；預留排隊時間。","永観堂"],["16:00–17:30","前往清水寺／休息或提早用餐",0,"不專程安排二年坂、三年坂；交通與夜楓排隊緩衝。","清水寺"],["18:00–19:30","清水寺夜間特別參拜",0,"夜間參拜依2026年官方公告與現場排隊狀況。","清水寺"],["19:30後","晚餐、返回 TUNE STAY KYOTO",0,"若16:00後已用餐，晚上可直接回飯店。","TUNE STAY KYOTO"]]},{"date":"12/1","weekday":"二","city":"京都・嵐山","theme":"常寂光寺、竹林、祐齋亭、小火車","stay":"TUNE STAY KYOTO","hotel":"TUNE STAY KYOTO","note":"12/1 賞楓景點全部保留。祐齋亭13:00預約與16:30トロッコ亀岡上車為兩個硬時間；移動段不要臨時加景點，預留JR馬堀站至小火車龜岡站步行及驗票時間。","events":[["07:30–08:15","早餐、前往嵐山",0,"盡量提早抵達。","嵐山 京都"],["08:45–10:00","常寂光寺賞楓",0,"石階與山坡路段。","常寂光寺"],["10:00–10:40","嵐山竹林小徑",0,"步行拍照。","竹林の小径"],["10:40–11:15","野宮神社",0,"黑色鳥居。","野宮神社"],["11:15–11:50","渡月橋、桂川河畔",0,"散步。","渡月橋"],["11:50–12:30","嵐山午餐",0,"勿影響祐齋亭報到。","嵐山 京都"],["12:30–13:00","前往祐齋亭",0,"步行預留時間。","嵐山 祐斎亭"],["13:00–13:30","嵐山祐齋亭預約報到",2,"兩人已確認；入場依票券規定。","嵐山 祐斎亭"],["13:30–14:15","祐齋亭參觀",0,"14:15–14:30前離開，保護小火車。","嵐山 祐斎亭"],["14:15–15:45","JR嵯峨嵐山 → 馬堀 → 小火車龜岡",0,"JR到馬堀後步行至トロッコ亀岡；非JR龜岡。",["嵯峨嵐山駅","馬堀駅","トロッコ亀岡駅"]],["15:45–16:00","抵達トロッコ亀岡、驗票",0,"請勿走到 JR 龜岡站。","トロッコ亀岡駅"],["16:30–17:04","嵯峨野觀光小火車：龜岡 → 嵯峨",2,"富貴 5 號車廂，座位 8A、8D；已確認。",["トロッコ亀岡駅","トロッコ嵯峨駅"]],["17:04 後","返回京都市區、晚餐",0,"燒肉荒川尚無已確認訂位信，不列為固定晚餐。","京都駅"]]},{"date":"12/2","weekday":"三","city":"京都 → 關西機場","theme":"Kyoto Itookashi、伏見稻荷、東寺五重塔、返台","note":"東寺及五重塔為必去，不再列為可犧牲景點。最後一天購物採減法：只安排京都站附近 Donki／便利商店／UNIQLO 等簡單補買，刪除長時間購物；SK-II 機場免稅已移除，肌膚之鑰只買妝前產品。","events":[["08:00–09:15","整理行李、退房寄放行李",0,"確認飯店是否可寄放至傍晚。","TUNE STAY KYOTO"],["09:15–09:50","前往 Kyoto Itookashi",0,"準時抵達，避免超過遲到規定。","京都市下京区永養寺町224"],["10:00–10:50","Kyoto Itookashi 雙人早餐",2,"已確認改期至 12/2；用餐時間 50 分鐘。","京都市下京区永養寺町224"],["10:50–11:30","前往伏見稻荷",0,"依實際交通班次調整。","伏見稲荷大社"],["11:30–12:45","伏見稻荷大社、千本鳥居",0,"不走完整稻荷山，保留購物時間。","伏見稲荷大社"],["12:15–12:45","簡單午餐、前往東寺",0,"簡單午餐後前往東寺，預留交通時間。","東寺 京都"],["12:45–13:30","東寺、五重塔（必去）",0,"必去景點；若上午延誤，縮短伏見稻荷停留或午餐，不取消東寺。確認當日寺院開放範圍與入場時間。","東寺 京都"],["13:30–14:30","返回飯店取行李 → 京都站",0,"先取回行李再前往京都站；預留交通緩衝。","TUNE STAY KYOTO"],["14:30–16:30","京都站附近簡單採購｜Donki、便利商店、UNIQLO",0,"購物減法：只補買必需品／小伴手禮，不排長時間百貨購物。肌膚之鑰只買妝前產品；SK-II 機場免稅已刪除。","京都駅"],["16:30–17:15","整理行李、簡單晚餐",0,"確認回程託運重量與報到時間。","京都駅"],["約17:15–18:00","京都站搭 HARUKA 前往關西機場",0,"選擇能預留報到、安檢與免稅購物的班次；班次出發前再核對。","京都駅"],["約20:00","抵達關西機場、報到、免稅購物",0,"回程託運行李已加購；確認重量、件數及航空公司截止時間。","関西国際空港 第1ターミナル"],["23:10","關西機場 T1 起飛 · GK057",2,"日本當地時間；回程託運行李已加購，額度待核對。","関西国際空港 第1ターミナル"],["12/3 01:30","抵達桃園機場 T1",2,"台灣當地時間。","桃園國際機場 第一航廈"]]}];
const notes = [["★ 11/28 12:00｜両忘已訂位","Jack轉寄Tabelog確認信：兩人，¥13,800／人；用餐2.5小時；預約系統費¥880；前一天取消50%、當天取消100%。09:20抵達KIX，直奔西心齋橋，時間緊，確認店家可否帶輕便行李入內。"],["★ 11/29｜出町柳站夜楓拼團集合","20:50集合是固定時間，晚餐後直接前往，不回飯店折返。提前確認集合出口、主辦人聯絡方式與票券交付；雙人 ¥11,000 現金備妥。"],["★ 11/30、12/1｜賞楓重點日","兩日景點皆保留。交通與門票提醒已附在對應行程下方的可展開筆記；人潮延誤時先縮短午餐／付費區，盡量不刪景點。"],["★ 12/2｜東寺、五重塔必去","不因購物取消東寺；上午若延誤，縮短伏見稻荷或午餐。注意五重塔內部開放可能有期間限制，出發前確認官方公告。"],["★ 最後採購｜減法購物","京都站周邊 Donki、便利商店、UNIQLO 簡單補買即可。SK-II 機場免稅已移除；肌膚之鑰只買妝前產品。"],["★ 全程｜付款與現金準備","寺院門票備日幣現金；夜楓拼團雙人 ¥11,000 現金已確認。各景點票種、現金／電子支付接受方式依當日公告。"],["★ 秋季參拜｜出發前確認","東福寺、永觀堂、常寂光寺、清水寺等秋季開放及夜間參拜，出發前複核官方公告。"],["★ 出發前｜Visit Japan Web 已完成","出發前確認護照資訊、入境 QR Code 可正常開啟，必要時保留離線備份。"],["京都住宿｜住宿稅","TUNE STAY KYOTO 可能於入住時另收城市住宿稅，依飯店實際通知。"],["11/28｜大阪飯店延後扣款","Agoda 訂單 ¥40,153，11/25 預定扣款；換匯預估不是額外第二筆費用。"],["★ 11/29 12:20｜瑠璃光院入場","12:20–12:40 已預約入場，請準備確認信／QR，提前到場，票價與入場規則以訂單為準。"],["★ 11/29 17:00｜Rokkaku ace 晚餐","雙人訂位已確認；留意取消規則，預留出町柳集合交通時間。"],["★ 12/1 13:00｜祐齋亭預約","雙人預約已確認；保留 QR／確認信，確認付款狀態。"],["★ 12/1 16:30｜小火車龜岡站上車","已訂票：トロッコ亀岡駅16:30上車，17:04抵達トロッコ嵯峨；不要走到 JR 龜岡站。"],["★ 12/2 10:00｜Kyoto Itookashi 早餐","10:00–10:50 已訂位，準時到場；¥200 暫時授權不等於餐費。"],["★ 12/2 傍晚｜京都行李與 HARUKA","確認飯店寄放行李、HARUKA 班次、機場報到時間與回程20kg託運額度。"]];
const expenseDefaults = [
 ['大阪飯店 1 晚',39122,'住宿','11/28','已知金額','Agoda 新優惠價：¥36,741＋稅費 ¥7,716－優惠 ¥5,335＝¥39,122；11/25 延後扣款，住宿稅可能另收；舊訂單取消待確認','延後扣款'],
 ['叡山電車紅葉拼團',11000,'交通','11/29','已知金額','雙人拼團報價','付款待確認'],
 ['嵐山祐齋亭',6000,'門票','12/1','已知金額','訂位信載明雙人金額','付款待確認'],
 ['燒鳥吧台座位費（已取消）',0,'餐飲','11/28','已知金額','¥500／人，雙人 ¥1,000','未付款'],
 ['Cecilia 機票＋回程託運行李',9386,'機票','未分配','已知金額','Trip.com 電子收據：NT$9,386','已付款'],
 ['TUNE STAY KYOTO 三晚',52072,'住宿','11/29','已知金額','Agoda 11/1 新訂單確認：¥48,099＋稅費 ¥10,099－優惠 ¥6,126＝¥52,072；舊訂單已免費取消；11/25 扣款，住宿稅可能另收','延後扣款'],
 ['瑠璃光院門票',null,'門票','11/29','待填','尚未取得確切付款金額','付款待確認'],
 ['嵯峨野小火車',null,'交通','12/1','待填','尚未取得確切付款金額','付款待確認'],
 ...['11/28','11/29','11/30','12/1','12/2'].map(d=>[`${d} 餐飲`,null,'餐飲',d,'待填','各餐廳實際消費待填','付款待確認']),
 ['市區交通',null,'交通','未分配','待填','全程市區交通總額待填','付款待確認'],
 ['其他景點門票',null,'門票','未分配','待填','避免重複計入已列門票','付款待確認'],
 ['私人浴池／其他',null,'其他','未分配','待填','費用與使用條件待核對','付款待確認']
].map((a,i)=>({id:`e${i}`,name:a[0],amount:a[1],category:a[2],day:a[3],basis:a[4],source:a[5],payment:a[6],owner:i===4?'Cecilia':'共同',nativeCurrency:i===4?'TWD':'JPY'})).concat([{id:'e16',name:'Jack 來回機票',amount:9100,category:'機票',day:'未分配',basis:'估算金額',source:'Jack 提供機票金額 NT$9,100，待收據核對',payment:'付款待確認',owner:'Jack',nativeCurrency:'TWD'},{id:'e17',name:'Cecilia 回程託運行李 20 kg',amount:4900,category:'行李',day:'12/2',basis:'已知金額',source:'本人提供：¥4,900，20 kg，回程 GK057',payment:'已付款',owner:'Cecilia',nativeCurrency:'JPY'}]);
const KEY='osaka-autumn-2026-v1';
const fresh=()=>({version:1,currency:'JPY',people:2,view:'合計',rate:0.22,expenses:structuredClone(expenseDefaults),items:[{id:'s0',name:'UNIQLO',price:null,quantity:1,notes:'線上預訂／最後簡單補買',bought:false},{id:'s1',name:'Clé de Peau Beauté 肌膚之鑰｜妝前',price:null,quantity:1,notes:'只購買妝前產品（primer）',bought:false}]});
const $=s=>document.querySelector(s);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const dayOptions=['11/28','11/29','11/30','12/1','12/2','未分配'];
const bases=['已知金額','估算金額','待填'];
const payments=['付款待確認','延後扣款','未付款','已付款'];
function validAmount(n){return n===null||(typeof n==='number'&&Number.isFinite(n)&&n>=0&&n<=1e10)}
function validText(v,max=1000){return typeof v==='string'&&v.length<=max}
function validate(s){
 if(!s||s.version!==1||!['JPY','TWD'].includes(s.currency)||![1,2].includes(s.people)||typeof s.rate!=='number'||!Number.isFinite(s.rate)||s.rate<=0||s.rate>100||!Array.isArray(s.expenses)||s.expenses.length!==expenseDefaults.length||!Array.isArray(s.items)||s.items.length>500)throw Error('備份格式或版本不正確。');
 if(s.view!==undefined&&!['合計','Cecilia','Jack'].includes(s.view))throw Error('預算檢視方式不正確。');
 if(s.expenses.some((e,i)=>!e||e.id!==`e${i}`||!validText(e.name,100)||!validText(e.category,100)||!validText(e.source)||!validAmount(e.amount)||!bases.includes(e.basis)||!payments.includes(e.payment)||!dayOptions.includes(e.day)||!['Cecilia','Jack','共同'].includes(e.owner)||!['JPY','TWD'].includes(e.nativeCurrency)||(e.basis==='待填'&&e.amount!==null)))throw Error('預算資料格式不正確。');
 if(s.items.some(i=>!i||!validText(i.id,100)||!validText(i.name,100)||!validText(i.notes)||!validAmount(i.price)||!Number.isInteger(i.quantity)||i.quantity<1||i.quantity>9999||typeof i.bought!=='boolean')||new Set(s.items.map(i=>i.id)).size!==s.items.length)throw Error('購物資料格式不正確。');
 s.view=s.view||'合計';return s;
}
let state=fresh();
let loadWarning='';
function migrateOld(old){
 if(!old||old.version!==1||!Array.isArray(old.expenses)||old.expenses.length!==16)return old;
 const upgraded=fresh();
 upgraded.currency=old.currency;upgraded.people=old.people;upgraded.rate=old.rate;
 upgraded.items=old.items;
 old.expenses.forEach((e,i)=>{if(i!==4)upgraded.expenses[i]={...e,owner:'共同',nativeCurrency:'JPY'};});
 return upgraded;
}
try{const saved=localStorage.getItem(KEY);if(saved){state=validate(migrateOld(JSON.parse(saved)));state.items=state.items.filter(i=>i.name!=='SK-II 機場免稅');const cpb=state.items.find(i=>i.name.includes('Clé de Peau'));if(cpb)cpb.notes='只購買妝前產品（primer）';const hotel=state.expenses.find(e=>e.id==='e5');if(hotel&&(hotel.amount===null||hotel.amount===57777)){Object.assign(hotel,structuredClone(expenseDefaults[5]));}const jack=state.expenses.find(e=>e.id==='e16');if(jack&&jack.amount===9150&&jack.basis==='估算金額')jack.amount=9100;const cecilia=state.expenses.find(e=>e.id==='e4');if(cecilia&&cecilia.name==='Cecilia 來回機票')cecilia.name='Cecilia 機票＋回程託運行李';const osaka=state.expenses.find(e=>e.id==='e0');if(osaka&&(osaka.amount===null||osaka.amount===40153)){Object.assign(osaka,structuredClone(expenseDefaults[0]));}localStorage.setItem(KEY,JSON.stringify(state));}}catch{loadWarning='無法讀取已儲存資料，現顯示預設內容；請檢查瀏覽器儲存設定或匯入備份。';}
function message(s){$('#message').textContent=s}
function save(){try{localStorage.setItem(KEY,JSON.stringify(state));}catch{message('儲存失敗，請立即匯出 JSON 備份，避免重新整理後遺失。');}}
function formatMoney(n){return new Intl.NumberFormat('zh-TW',{style:'currency',currency:state.currency,minimumFractionDigits:0,maximumFractionDigits:2}).format(n)}
function money(n,perPerson=false){return formatMoney(n*(state.currency==='TWD'?state.rate:1)/(perPerson&&state.people===1?2:1))}
function inJPY(e){return e.amount===null?0:e.amount*(e.nativeCurrency==='TWD'?1/state.rate:1)}
function allocatedTo(e,person){const v=inJPY(e)*(state.currency==='TWD'?state.rate:1);return person==='合計'?v:e.owner==='共同'?v/2:e.owner===person?v:0}
function allocation(e){return allocatedTo(e,state.view)}
function expenseColumns(e){const amount=person=>allocatedTo(e,person)+(e.id==='e4'?allocatedTo(state.expenses.find(x=>x.id==='e17'),person):0);return `<div class="expense-columns">${['Cecilia','Jack','合計'].map(person=>`<div class="expense-column"><span>${person==='合計'?'兩人合計':person}</span><strong>${e.amount===null?'待填':formatMoney(amount(person))}</strong></div>`).join('')}</div>`}
function budgetMoney(e){return formatMoney(allocation(e))}
function sumBudget(rows,basis){return rows.filter(e=>e.amount!==null&&e.basis===basis).reduce((n,e)=>n+allocation(e),0)}
function maps(q,label){return `<a class="map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}" target="_blank" rel="noopener noreferrer">${esc(label||q)} ↗</a>`}
// One persistent expense per slot. Shared trip costs are labelled explicitly.
const costSlots={'0-3':'e0','0-10':'e3','1-4':'e6','1-12':'e1','1-stay':'e5','3-7':'e2','3-11':'e7'};
function costSlot(key){return costSlots[key]?`<div class="cost-slot" data-expense="${costSlots[key]}"></div>`:''}

// Curated photo subjects; freely licensed photographs are loaded from Wikimedia Commons.
// Photos are illustrative and may show a different autumn season.
// A fixed, landmark-specific Wikipedia article is used for each photograph.
// No fuzzy image search: never show a photo of a different attraction.
// Autumn-first, location-specific images. Fixed Commons filenames are preferred.
// Never fall back to green-season Wikipedia thumbnails or unrelated places.
const autumnPhotos=[
 ['琉璃光院','Rurikoin-autumn-reflection-2019-Luka-Peternel.jpg'],
 ['東福寺','Tofukuji-bridge-autumn-2017-Luka-Peternel.jpg'],
 ['清水寺','Kiyomizu-dera autumn'],
 ['常寂光寺','Jojakkoji autumn leaves'],
 ['永觀堂','Eikando autumn foliage'],
 ['南禪寺','Nanzenji aqueduct autumn'],
 ['下鴨神社','Shimogamo Shrine autumn leaves'],
 ['叡山電車','Eizan railway maple tunnel autumn'],
 ['祐齋亭','Yusai-tei Arashiyama autumn'],
 ['渡月橋','Togetsukyo0270.jpg'],
 ['伏見稻荷','Fushimi Inari autumn leaves'],
 ['東寺','To-ji and Kitano Tenmangu, Kyoto - Toji7797.jpg'],
 ['野宮神社','Nonomiya Shrine autumn'],
 ['竹林小徑','Arashiyama autumn bamboo'],
 ['二年坂','Sannenzaka autumn Kyoto'],
 ['難波八阪神社','Namba Yasaka shrine autumn'],
 ['法善寺橫丁','Hozenji Yokocho autumn'],
 ['心齋橋','Shinsaibashi autumn Osaka'],
 ['黑門市場','Kuromon market Osaka autumn']
];
function eventPhoto(e,dayIndex,eventIndex){
 const entry=autumnPhotos.find(x=>e[1].includes(x[0]));
 if(!entry)return '';
 if(days[dayIndex].events.slice(0,eventIndex).some(previous=>previous[1].includes(entry[0])))return '';
 return '<figure class="event-photo" data-autumn="'+encodeURIComponent(entry[1])+'" data-label="'+esc(entry[0])+'"><figcaption>'+esc(entry[0])+' · 秋季景點參考照</figcaption></figure>';
}
async function loadLandmarkPhotos(){
 const blocks=[...document.querySelectorAll('[data-autumn]')];
 const cache=new Map();
 async function getPhoto(term){
  if(cache.has(term))return cache.get(term);
  const exact=/\.(jpg|jpeg|png)$/i.test(term);
  const api=new URL('https://commons.wikimedia.org/w/api.php');
  api.searchParams.set('action','query');api.searchParams.set('format','json');api.searchParams.set('origin','*');
  api.searchParams.set('prop','imageinfo');api.searchParams.set('iiprop','url|mime');api.searchParams.set('iiurlwidth','700');
  if(exact)api.searchParams.set('titles','File:'+term);
  else {api.searchParams.set('generator','search');api.searchParams.set('gsrnamespace','6');api.searchParams.set('gsrlimit','12');api.searchParams.set('gsrsearch','filetype:bitmap '+term);}
  try{
   const response=await fetch(api.toString());if(!response.ok)throw Error('image unavailable');
   const json=await response.json();
   const pages=Object.values(json.query?.pages||{}).filter(p=>p.imageinfo?.[0]?.thumburl&&/image\/(jpeg|png|webp)/.test(p.imageinfo[0].mime||''));
   const chosen=exact?pages[0]:pages.find(p=>/autumn|fall|foliage|maple|momiji|紅葉|秋/i.test(p.title)&&!/(illustration|drawing|painting|poster|map\b)/i.test(p.title));
   const item=chosen?{src:chosen.imageinfo[0].thumburl,url:chosen.imageinfo[0].descriptionurl}:null;
   cache.set(term,item);return item;
  }catch(_){cache.set(term,null);return null;}
 }
 await Promise.all(blocks.map(async block=>{
  const photo=await getPhoto(decodeURIComponent(block.dataset.autumn));
  if(!photo){block.remove();return;}
  const img=document.createElement('img');img.src=photo.src;img.alt=block.dataset.label+' 秋季景點照片';img.loading='lazy';img.decoding='async';
  const link=document.createElement('a');link.href=photo.url;link.target='_blank';link.rel='noopener noreferrer';link.title='查看照片來源與授權';link.appendChild(img);block.prepend(link);
 }));
}
const travelNotes={
0:{2:["🚆 關西機場 → 西心齋橋両忘｜搭車優先順序","09:20 日本時間抵達 KIX T1。入境後往南海電鐵，挑最早抵達難波的車，不用執著 Rapi:t。10:05 Rapi:t β→10:43；10:11 空港急行→10:58；10:24 空港急行→11:10；10:35 Rapi:t→11:12；10:39 空港急行→11:25。目標10:24前上車、10:35為備案。難波後轉御堂筋線到心齋橋或步行前往両忘。官方時刻表：https://www.nankai.co.jp/tc_railway/access-timetable"],4:["🧳 午餐後分流／寄放行李","先寄放御宿野乃行李；Cecilia 減法散步、Jack 自由購物，約好回飯店時間與集合點。"],5:["🍢 たこ梅｜彈性晚餐","不列必吃或固定訂位。若想吃關東煮且體力足再去；不想移動就留在飯店，享受溫泉、免費宵夜拉麵與休息。隔天早起，放鬆優先。"]},
1:{2:["🧳 京都站寄物 → 琉璃光院","大阪退房後先到京都站寄物，再直接前往琉璃光院。11/29適逢京都站秋季臨時行李寄存服務（站前廣場、Granvia前；9:00–20:00，預約¥800／現場¥1,000），亦可使用大型置物櫃；若寄物點滿位，備案先到 TUNE STAY KYOTO 寄放。"],3:["🚃 京都站 → 琉璃光院","搭鐵路往八瀨／比叡山方向，依當日班次安排轉乘與步行，不要壓縮轉乘時間。"],4:["🎟️ 琉璃光院入場提醒","12:20–12:40 兩位已預約。提前抵達，準備預約 QR／確認信；門票、付款及入場規則依訂單為準。"],7:["🏨 取行李、入住 TUNE STAY KYOTO","取回京都站寄放行李後前往住宿辦理入住／寄放；確認晚間列車後返館的入住方式。"],10:["🌙 出町柳集合｜夜楓拼團","20:50 固定集合，晚餐後直接去出町柳，不回飯店折返。提前確認集合出口、主辦人聯絡方式與車票交付方式；雙人 ¥11,000 現金備妥。"]},
2:{1:["🍁 東福寺參觀提醒","紅葉季人潮可能影響排隊及參觀；入場時段、票種與現場規則依官方公告。"],3:["🌳 下鴨神社＋糺之森","一般神社參拜無需入場票；特別活動或設施可能另外收費。散步時間依人潮彈性。"],5:["⛩️ 南禪寺完整參觀｜門票筆記","三門、方丈庭園等付費區分別計費；水路閣可免費參觀。時間不足先看水路閣與三門，方丈庭園視時間決定。開放時間與票價出發前查官方公告。"],6:["🍁 永觀堂賞楓","日間賞楓與夜間特別參拜可能是不同票種／時段。確認日期、最後入場時間及排隊。"],8:["🌙 清水寺夜間特別參拜","夜間特別參拜日期、時間、票價與排隊規則以當年官方公告為準；提早抵達並備現金。"]},
3:{1:["🍁 常寂光寺門票／開門時間","確認當日開放時間與門票；若09:00才開門，08:45作交通與排隊緩衝。"],7:["🎟️ 祐齋亭預約提醒","13:00預約報到，兩位已確認。保留 QR／確認信並確認付款狀態；請勿延誤離開時間。"],9:["🚃 祐齋亭 → 小火車龜岡","14:15離開祐齋亭：步行至 JR 嵯峨嵐山 → JR 馬堀 → 步行到トロッコ亀岡駅（不是 JR 龜岡站）。預留步行、找入口、驗票。"],10:["🚂 16:30 小火車龜岡站上車","已確認 16:30 トロッコ亀岡駅出發、17:04抵達トロッコ嵯峨；Rich Car 5，座位8A／8D。提前到站驗票，不要導航到 JR 龜岡站。"]},
4:{6:["🏯 東寺＋五重塔｜必去提醒","東寺與五重塔列為必去，不因購物取消。確認當日開放區域與五重塔是否開放內部參觀；若上午延誤，縮短伏見稻荷或午餐。"],8:["🛍️ 最後一天購物減法","京都站附近 Donki、便利商店、UNIQLO 簡單補買即可，不安排長時間百貨購物。肌膚之鑰只買妝前（primer）；SK-II 機場免稅已刪除。"],10:["🚆 京都站 → KIX｜HARUKA","選約20:00前抵達 KIX 的 HARUKA，預留報到、安檢及免稅時間；確認班次、票券 QR 與回程20kg託運額度。"]}};
const noteHtml=n=>'<details class="travel-note"><summary>'+esc(n[0])+'</summary><p>'+esc(n[1])+'</p></details>';
function renderDays(){
 $('#days').innerHTML=days.map((d,i)=>`<article class="day"><header class="day-head"><span class="day-number">DAY 0${i+1}</span><div><h3>${d.date}（${d.weekday}）${d.city}</h3><p>${d.theme}</p></div></header><div class="timeline">${d.events.map((e,j)=>`<div class="event"><time>${esc(e[0])}</time><div><div class="event-title"><strong>${esc(e[1])}</strong><span class="badge ${statusClasses[e[2]]}">${statusNames[e[2]]}</span></div><p>${esc(e[3])}</p>${e[4]?(Array.isArray(e[4])?e[4]:[e[4]]).map(q=>maps(q)).join('　'):''}${travelNotes[i]?.[j]?noteHtml(travelNotes[i][j]):''}</div>${eventPhoto(e,i,j)}${costSlot(`${i}-${j}`)}</div>`).join('')}</div>${d.stay?`<div class="stay">住宿 · ${d.stay} <span class="badge confirmed">已確認</span> ${maps(d.hotel,'飯店導航')}${costSlot(`${i}-stay`)}</div>`:''}${d.note?`<div class="day-note">${esc(d.note)}</div>`:''}</article>`).join('');
 $('#note-list').innerHTML=notes.map(n=>`<details><summary>${esc(n[0])}</summary><p>${esc(n[1])}</p></details>`).join('');
}
function select(options,value,attrs){return `<select ${attrs}>${options.map(o=>`<option${o===value?' selected':''}>${esc(o)}</option>`).join('')}</select>`}
function stat(label,value){return `<div class="stat"><span>${label}</span><strong>${value}</strong></div>`}
function sumExpenses(list,basis){return list.filter(e=>e.amount!==null&&e.basis===basis).reduce((a,e)=>a+e.amount,0)}
function renderBudgetTotals(){
 const known=sumBudget(state.expenses,'已知金額'),estimate=sumBudget(state.expenses,'估算金額');
 $('#budget-summary').innerHTML=['Cecilia','Jack','合計'].map(person=>stat(person==='合計'?'兩人合計':person,formatMoney(state.expenses.reduce((n,e)=>n+allocatedTo(e,person),0)))).join('')+'<p class="budget-status">含估算金額；尚未填入的支出不計入。</p>';
 $('#daily').innerHTML=`<table><thead><tr><th scope="col">日期</th><th scope="col">Cecilia</th><th scope="col">Jack</th><th scope="col">兩人合計</th></tr></thead><tbody>${dayOptions.map(d=>{const rows=state.expenses.filter(e=>e.day===d);return `<tr><th scope="row">${d}<small>待填 ${rows.filter(e=>e.amount===null).length} 筆</small></th>${['Cecilia','Jack','合計'].map(person=>`<td>${formatMoney(rows.reduce((n,e)=>n+allocatedTo(e,person),0))}</td>`).join('')}</tr>`}).join('')}</tbody></table>`;
 document.querySelectorAll('.expense').forEach(el=>{const e=state.expenses.find(e=>e.id===el.dataset.id);el.querySelector('.converted').innerHTML=expenseColumns(e);el.querySelector('.cost-meta').textContent=`${e.owner} · ${e.basis} · ${e.payment}`});
}
function renderExpenses(){
 document.querySelectorAll('.cost-slot').forEach(slot=>{const e=state.expenses.find(e=>e.id===slot.dataset.expense);slot.innerHTML=`<details class="expense" data-id="${e.id}"><summary aria-label="編輯${esc(e.name)}費用"><span class="cost-name">${esc(e.name)}${['e4'].includes(e.id)?'（全程）':''}</span><div class="converted"></div><small class="cost-meta"></small></summary><div class="fields"><label>原始金額（${e.nativeCurrency}）<input aria-label="${esc(e.name)}雙人金額" data-key="amount" type="number" min="0" max="10000000000" step="0.01" placeholder="待填" value="${e.amount??''}"></label><label>歸屬${select(['共同','Cecilia','Jack'],e.owner,'data-key="owner"')}</label><label>原始幣別${select(['JPY','TWD'],e.nativeCurrency,'data-key="nativeCurrency"')}</label><label>金額依據${select(bases,e.basis,'data-key="basis"')}</label><label>類別<input data-key="category" maxlength="100" value="${esc(e.category)}"></label><label>分配日期${select(dayOptions,e.day,'data-key="day"')}</label><label>付款狀態${select(payments,e.payment,'data-key="payment"')}</label><label>金額來源／說明<input data-key="source" maxlength="1000" value="${esc(e.source)}"></label></div></details>`});
 $('#extra-expenses').innerHTML=state.expenses.filter(e=>['e4','e16'].includes(e.id)).map(e=>'<div class="cost-slot" data-expense="'+e.id+'"></div>').join('');
 // Reuse the same expense editor markup for the two additional individual items.
 document.querySelectorAll('#extra-expenses .cost-slot').forEach(slot=>{
 const e=state.expenses.find(x=>x.id===slot.dataset.expense);
 slot.innerHTML=`<details class="expense" data-id="${e.id}"><summary><span class="cost-name">${esc(e.name)}</span><div class="converted"></div><small class="cost-meta"></small></summary><div class="fields"><label>${e.id==='e4'?'來回機票（TWD）':`原始金額（${e.nativeCurrency}）`}<input data-key="amount" type="number" min="0" step="0.01" value="${e.amount??''}"></label>${e.id==='e4'?`<label>回程託運 20 kg（JPY）<input data-key="baggageAmount" type="number" min="0" step="0.01" value="${state.expenses.find(x=>x.id==='e17').amount??''}"></label>`:''}<label>歸屬${select(['共同','Cecilia','Jack'],e.owner,'data-key="owner"')}</label><label>原始幣別${select(['JPY','TWD'],e.nativeCurrency,'data-key="nativeCurrency"')}</label><label>金額依據${select(bases,e.basis,'data-key="basis"')}</label><label>付款狀態${select(payments,e.payment,'data-key="payment"')}</label><label>金額來源／說明<input data-key="source" value="${esc(e.source)}"></label></div></details>`;
 });
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

function renderControls(){$('#currency').value=state.currency;$('#people').value=state.people;$('#owner-view').value=state.view||'合計';$('#rate').value=state.rate}
function renderAll(){renderControls();renderExpenses();renderItems()}
$('#currency').addEventListener('change',e=>{state.currency=e.target.value;save();renderBudgetTotals();renderShoppingTotals()});
$('#people').addEventListener('change',e=>{state.people=Number(e.target.value);save();renderBudgetTotals()});
$('#owner-view').addEventListener('change',e=>{state.view=e.target.value;save();renderBudgetTotals()});
$('#rate').addEventListener('change',e=>{const n=Number(e.target.value);if(!Number.isFinite(n)||n<=0||n>100){e.target.value=state.rate;message('匯率須大於 0 且不超過 100。');return}state.rate=n;save();renderBudgetTotals();renderShoppingTotals()});
function expenseChanged(e){
 const key=e.target.dataset.key,card=e.target.closest('.expense');if(!key||!card)return;const row=state.expenses.find(r=>r.id===card.dataset.id);
 if(key==='baggageAmount'){const baggage=state.expenses.find(x=>x.id==='e17');const n=e.target.value===''?null:Number(e.target.value);if(!validAmount(n)){message('請輸入有效的行李金額。');return}baggage.amount=n;baggage.basis=n===null?'待填':'已知金額';save();renderExpenses();return;}
  if(key==='amount') {const n=e.target.value===''?null:Number(e.target.value);if(!validAmount(n)){e.target.value=row.amount??'';message('請輸入有效的非負金額。');return}row.amount=n;if(n===null)row.basis='待填';else if(row.basis==='待填')row.basis='估算金額';card.querySelector('[data-key=basis]').value=row.basis;}
 else if(key==='basis'){row.basis=e.target.value;if(row.basis==='待填'){row.amount=null;card.querySelector('[data-key=amount]').value=''}else if(row.amount===null){row.basis='待填';e.target.value='待填';message('請先填入金額，再指定已知或估算依據。');}}
 else row[key]=e.target.value;
 save();renderExpenses();
}
$('#days').addEventListener('change',expenseChanged);
$('#extra-expenses').addEventListener('change',expenseChanged);
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
$('#import').addEventListener('change',async e=>{const file=e.target.files[0];if(!file)return;try{if(file.size>2*1024*1024)throw Error('備份檔案不可超過 2 MB。');const incoming=validate(migrateOld(JSON.parse(await file.text())));if(!confirm('匯入會取代此瀏覽器的預算與購物清單。確定已備份並繼續？'))return;state=incoming;save();renderAll();message('已匯入備份。')}catch(err){message(`匯入失敗，原資料保留：${err.message}`)}finally{e.target.value=''}});
renderDays();loadLandmarkPhotos();renderAll();if(loadWarning)message(loadWarning);
