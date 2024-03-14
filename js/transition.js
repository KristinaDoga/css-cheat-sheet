//transition-duration
//Скрыть/показать секцию
let h3td = document.querySelector('.transition-duration-h3')
let secbtd = document.querySelector('.transition-duration')
secbtd.style.display = 'none'
h3td.onclick = () => {
   if (secbtd.style.display == 'none') { secbtd.style.display = 'block' }
   else secbtd.style.display = 'none'
}

//Пример работы
let tdb = document.querySelector('.transition-duration-btn')
let tdi = document.querySelector('.transition-duration-input')

tdi.addEventListener("focusout", () => tdb.style.transitionDuration = tdi.value)
tdi.addEventListener('keydown', function (e) {if (e.keyCode === 13) tdb.style.transitionDuration = tdi.value})


//transition-property
//Скрыть/показать секцию
let h3tp = document.querySelector('.transition-property-h3')
let secbtp = document.querySelector('.transition-property')
secbtp.style.display = 'none'
h3tp.onclick = () => {
   if (secbtp.style.display == 'none') { secbtp.style.display = 'block' }
   else secbtp.style.display = 'none'
}

//Пример работы
let tdp = document.querySelector('.transition-property-btn')
let ab = document.querySelector('.all-btn')
let cb = document.querySelector('.color-btn')
let bsbc = document.querySelector('.bsbc-btn')

ab.onclick = function () { tdp.style.transitionProperty = 'all' }
cb.onclick = function () { tdp.style.transitionProperty = 'color' }
bsbc.onclick = function () { tdp.style.transitionProperty = 'box-shadow, background-color' }

//transition-delay
//Скрыть/показать секцию
let h3tde = document.querySelector('.transition-delay-h3')
let secbtde = document.querySelector('.transition-delay')
secbtde.style.display = 'none'
h3tde.onclick = () => {
   if (secbtde.style.display == 'none') { secbtde.style.display = 'block' }
   else secbtde.style.display = 'none'
}

//Пример работы
let tdeb = document.querySelector('.transition-delay-btn')
let tdei = document.querySelector('.transition-delay-input')

tdei.addEventListener("focusout", () => tdeb.style.transitionDelay = tdei.value)
tdei.addEventListener('keydown', function (e) {if (e.keyCode === 13) tdeb.style.transitionDelay = tdei.value})

//transition-timing-function
//Скрыть/показать секцию
let h3ttf = document.querySelector('.transition-timing-function-h3')
let secttf = document.querySelector('.transition-timing-function')
secttf.style.display = 'none'
h3ttf.onclick = () => {
   if (secttf.style.display == 'none') { secttf.style.display = 'block' }
   else secttf.style.display = 'none'
}

//Пример работы
let ttfbtn = document.querySelector('.timing-function-btn')
let ebtn = document.querySelector('.ease-btn')
let eibtn = document.querySelector('.ease-in-btn')
let eobtn = document.querySelector('.ease-out-btn')
let eiobtn = document.querySelector('.ease-in-out-btn')
let lbtn = document.querySelector('.linear-btn')

ebtn.onclick = function () { ttfbtn.style.transitionTimingFunction = 'ease' }
eibtn.onclick = function () { ttfbtn.style.transitionTimingFunction = 'ease-in' }
eobtn.onclick = function () { ttfbtn.style.transitionTimingFunction = 'ease-out' }
eiobtn.onclick = function () { ttfbtn.style.transitionTimingFunction = 'ease-in-out' }
lbtn.onclick = function () { ttfbtn.style.transitionTimingFunction = 'linear'}

//transition
//Скрыть/показать секцию
let h3t = document.querySelector('.transition-h3')
let secbt = document.querySelector('.transition')
secbt.style.display = 'none'
h3t.onclick = () => {
   if (secbt.style.display == 'none') { secbt.style.display = 'block' }
   else secbt.style.display = 'none'
}

//Пример работы
let tb = document.querySelector('.transition-btn')
let ti = document.querySelector('.transition-input')

ti.addEventListener("focusout", () => tb.style.transition = ti.value)
ti.addEventListener('keydown', function (e) {if (e.keyCode === 13) tb.style.transition = ti.value})




// АНИМАЦИЯ


//animation-name
//Скрыть/показать секцию
let h3an = document.querySelector('.animation-name-h3')
let secan = document.querySelector('.animation-name')
secan.style.display = 'none'
h3an.onclick = () => {
   if (secan.style.display == 'none') { secan.style.display = 'block' }
   else secan.style.display = 'none'
}

let ac = document.querySelector('.animation-circle')
ac.style.animationName = 'none'
ac.onclick = function () { 
   if (ac.style.animationName == 'none') ac.style.animationName = 'circle'
   else  ac.style.animationName = 'none'}


   //animation-duration
//Скрыть/показать секцию
let h3ad = document.querySelector('.animation-duration-h3')
let secbad = document.querySelector('.animation-duration')
secbad.style.display = 'none'
h3ad.onclick = () => {
   if (secbad.style.display == 'none') { secbad.style.display = 'block' }
   else secbad.style.display = 'none'
}

//Пример работы
let adc = document.querySelector('.animation-duration-circle')
let adi = document.querySelector('.animation-duration-input')

adi.addEventListener("focusout", () => adc.style.animationDuration = adi.value)
adi.addEventListener('keydown', function (e) {if (e.keyCode === 13) adc.style.animationDuration = adi.value})



//animation-timing-function
//Скрыть/показать секцию
let h3atf = document.querySelector('.animation-timing-function-h3')
let secatf = document.querySelector('.animation-timing-function')
secatf.style.display = 'none'
h3atf.onclick = () => {
   if (secatf.style.display == 'none') { secatf.style.display = 'block' }
   else secatf.style.display = 'none'
}

//Пример работы
let atfc = document.querySelector('.animation-timing-function-circle')
let aebtn = document.querySelector('.aease-btn')
let aeibtn = document.querySelector('.aease-in-btn')
let aeobtn = document.querySelector('.aease-out-btn')
let aeiobtn = document.querySelector('.aease-in-out-btn')
let albtn = document.querySelector('.alinear-btn')

aebtn.onclick = function () { atfc.style.animationTimingFunction = 'ease' }
aeibtn.onclick = function () { atfc.style.animationTimingFunction = 'ease-in' }
aeobtn.onclick = function () { atfc.style.animationTimingFunction = 'ease-out' }
aeiobtn.onclick = function () { atfc.style.animationTimingFunction = 'ease-in-out' }
lbtn.onclick = function () { atfc.style.animationTimingFunction = 'linear'}



   //iteration-count
//Скрыть/показать секцию
let h3ic = document.querySelector('.iteration-count-h3')
let secic = document.querySelector('.iteration-count')
secic.style.display = 'none'
h3ic.onclick = () => {
   if (secic.style.display == 'none') { secic.style.display = 'block' }
   else secic.style.display = 'none'
}

//Пример работы
let icc = document.querySelector('.animation-iteration-count-circle')
let ici = document.querySelector('.iteration-count-input')


icc.style.animationName = 'none'
icc.onclick = function () { 
   if (icc.style.animationName == 'none') icc.style.animationName = 'circle'
   else  icc.style.animationName = 'none'}

ici.addEventListener("focusout", () => icc.style.animationDuration = ici.value)
ici.addEventListener('keydown', function (e) {if (e.keyCode === 13) icc.style.animationIterationCount = ici.value})

//animation-direction
//Скрыть/показать секцию
let h3adi = document.querySelector('.animation-direction-h3')
let secadi = document.querySelector('.animation-direction')
secadi.style.display = 'none'
h3adi.onclick = () => {
   if (secadi.style.display == 'none') { secadi.style.display = 'block' }
   else secadi.style.display = 'none'
}

//Пример работы
let adci = document.querySelector('.animation-direction-circle')
let an = document.querySelector('.normal')
let ar = document.querySelector('.reverse')
let aa = document.querySelector('.alternate')
let aar = document.querySelector('.alternate-reverse')

adci.style.animationName = 'none'
adci.onclick = function () { 
   if (adci.style.animationName == 'none') adci.style.animationName = 'circle'
   else  adci.style.animationName = 'none'}

an.onclick = function () { adci.style.animationDirection = 'normal' }
ar.onclick = function () { adci.style.animationDirection = 'reverse' }
aa.onclick = function () { adci.style.animationDirection = 'alternate' }
aar.onclick = function () { adci.style.animationDirection = 'alternate-reverse' }

//animation-play-state
//Скрыть/показать секцию
let h3aps = document.querySelector('.animation-play-state-h3')
let secaps = document.querySelector('.animation-play-state')
secaps.style.display = 'none'
h3aps.onclick = () => {
   if (secaps.style.display == 'none') { secaps.style.display = 'block' }
   else secaps.style.display = 'none'
}

//Пример работы
let apsc = document.querySelector('.animation-play-state-circle')
let run = document.querySelector('.running')
let paus = document.querySelector('.paused')


run.onclick = function () { apsc.style.animationPlayState = 'running' }
paus.onclick = function () { apsc.style.animationPlayState = 'paused' }



//animation-delay
//Скрыть/показать секцию
let h3ade = document.querySelector('.animation-delay-h3')
let secbade = document.querySelector('.animation-delay')
secbade.style.display = 'none'
h3ade.onclick = () => {
   if (secbade.style.display == 'none') { secbade.style.display = 'block' }
   else secbade.style.display = 'none'
}


//Пример работы

let adeb = document.querySelector('.animation-delay-circle')
let adei = document.querySelector('.animation-delay-input')

adeb.style.animationName = 'none'
adeb.onclick = function () { 
   if (adeb.style.animationName == 'none') adeb.style.animationName = 'circle'
   else  adeb.style.animationName = 'none'}

adei.addEventListener("focusout", () => adeb.style.animationDelay = adei.value)
adei.addEventListener('keydown', function (e) {if (e.keyCode === 13) adeb.style.animationDelay = adei.value})



//animation-fill-mode
//Скрыть/показать секцию
let h3afm = document.querySelector('.animation-fill-mode-h3')
let secafm = document.querySelector('.animation-fill-mode')
secafm.style.display = 'none'
h3afm.onclick = () => {
   if (secafm.style.display == 'none') { secafm.style.display = 'block' }
   else secafm.style.display = 'none'
}

//Пример работы
let afmc = document.querySelector('.animation-fill-mode-circle')
let none = document.querySelector('.none')
let forwards = document.querySelector('.forwards')
let both = document.querySelector('.both')
let backwards = document.querySelector('.backwards')

afmc.style.animationName = 'none'
afmc.onclick = function () { 
   if (afmc.style.animationName == 'none') afmc.style.animationName = 'circle'
   else  afmc.style.animationName = 'none'}


none.onclick = function () { afmc.style.animationFillMode = 'none' }
forwards.onclick = function () { afmc.style.animationFillMode = 'forwards' }
both.onclick = function () { afmc.style.animationFillMode = 'both' }
backwards.onclick = function () { afmc.style.animationFillMode = 'backwards'}