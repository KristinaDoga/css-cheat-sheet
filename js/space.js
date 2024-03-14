//padding
//Скрыть/показать секцию
let h3p = document.querySelector('.padding-h3')
let secp = document.querySelector('.padding')
secp.style.display = 'none'
h3p.onclick = () => {
   if (secp.style.display == 'none') { secp.style.display = 'block' }
   else secp.style.display = 'none'
}

//Пример работы 
//Отдельные стороны
let pc = document.querySelector('.padding-content')
let pit = document.querySelector('.padding-input-top')
let pir = document.querySelector('.padding-input-right')
let pib = document.querySelector('.padding-input-bottom')
let pil = document.querySelector('.padding-input-left')

pit.addEventListener("focusout", () => pc.style.paddingTop = pit.value)
pit.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc.style.paddingTop = pit.value
})
pir.addEventListener("focusout", () => pc.style.paddingRight = pir.value)
pir.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc.style.paddingRight = pir.value
})
pib.addEventListener("focusout", () => pc.style.paddingBottom = pib.value)
pib.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc.style.paddingBottom = pib.value
})
pil.addEventListener("focusout", () => pc.style.paddingLeft = pil.value)
pil.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc.style.paddingLeft = pil.value
})

//Блок 1
let pc1 = document.querySelector('.padding-content-1')
let pi1 = document.querySelector('.padding-input-1')

pi1.addEventListener("focusout", () => pc1.style.padding = pi1.value)
pi1.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc1.style.padding = pi1.value
})
//Блок 2
let pc2 = document.querySelector('.padding-content-2')
let pi2 = document.querySelector('.padding-input-2')

pi2.addEventListener("focusout", () => pc2.style.padding = pi2.value)
pi2.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) pc2.style.padding = pi2.value
})
//margin
//Скрыть/показать секцию
let h3m = document.querySelector('.margin-h3')
let secm = document.querySelector('.margin')
secm.style.display = 'none'
h3m.onclick = () => {
   if (secm.style.display == 'none') { secm.style.display = 'block' }
   else secm.style.display = 'none'
}

//Пример работы 
//Отдельные стороны
let mc = document.querySelector('.margin-content')
let mit = document.querySelector('.margin-input-top')
let mir = document.querySelector('.margin-input-right')
let mib = document.querySelector('.margin-input-bottom')
let mil = document.querySelector('.margin-input-left')

mit.addEventListener("focusout", () => mc.style.marginTop = mit.value)
mit.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc.style.marginTop = mit.value
})
mir.addEventListener("focusout", () => mc.style.marginRight = mir.value)
mir.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc.style.marginRight = mir.value
})
mib.addEventListener("focusout", () => mc.style.marginBottom = mib.value)
mib.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc.style.marginBottom = mib.value
})
mil.addEventListener("focusout", () => mc.style.marginLeft = mil.value)
mil.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc.style.marginLeft = mil.value
})

//Блок 1
let mc1 = document.querySelector('.margin-content-1')
let mi1 = document.querySelector('.margin-input-1')

mi1.addEventListener("focusout", () => mc1.style.margin = mi1.value)
mi1.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc1.style.margin = mi1.value
})

//Блок 2
let mc2 = document.querySelector('.margin-content-2')
let mi2 = document.querySelector('.margin-input-2')

mi2.addEventListener("focusout", () => mc2.style.margin = mi2.value)
mi2.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mc2.style.margin = mi2.value
})

//box-sizing
//Скрыть/показать секцию
let h3bsi = document.querySelector('.box-sizing-h3')
let secbsi = document.querySelector('.box-sizing')
secbsi.style.display = 'none'
h3bsi.onclick = () => {
   if (secbsi.style.display == 'none') { secbsi.style.display = 'block' }
   else secbsi.style.display = 'none'
}

//Пример работы
let bsm1 = document.querySelector('.model-1')
let bsm2 = document.querySelector('.model-2')
let bscb = document.querySelector('.box-sizing__content-box')
let bsbb = document.querySelector('.box-sizing__border-box')

bscb.onclick = function () { bsm1.style.boxSizing = 'content-box'; bsm2.style.boxSizing = 'content-box'; }
bsbb.onclick = function () { bsm1.style.boxSizing = 'border-box'; bsm2.style.boxSizing = 'border-box'; }