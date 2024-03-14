//display
//Скрыть/показать секцию
let h3df = document.querySelector('.display-flex-h3')
let secdf = document.querySelector('.display-flex')
secdf.style.display = 'none'
h3df.onclick = () => {
   if (secdf.style.display == 'none') { secdf.style.display = 'block' }
   else secdf.style.display = 'none'
}

//Пример работы 
let fc = document.querySelector('.FLEXBOX__container-display')
let ff = document.querySelector('.FLEXBOX__flex')
let fb = document.querySelector('.FLEXBOX__block')
let fif = document.querySelector('.FLEXBOX__inline-flex')


ff.onclick = function () { fc.style.display = 'flex' }
fif.onclick = function () { fc.style.display = 'inline-flex' }
fb.onclick = function () { fc.style.display = 'block' }

//justify-content
//Скрыть/показать секцию
let h3jc = document.querySelector('.justify-content-h3')
let secjc = document.querySelector('.justify-content')
secjc.style.display = 'none'
h3jc.onclick = () => {
   if (secjc.style.display == 'none') { secjc.style.display = 'block' }
   else secjc.style.display = 'none'
}

//Пример работы 
let fcjc = document.querySelector('.FLEXBOX-justify-content')
let fs = document.querySelector('.flex-start')
let fe = document.querySelector('.flex-end')
let fcen = document.querySelector('.center')
let fsb = document.querySelector('.space-between')
let fsa = document.querySelector('.space-around')


fs.onclick = function () { fcjc.style.justifyContent = 'flex-start' }
fe.onclick = function () { fcjc.style.justifyContent = 'flex-end' }
fcen.onclick = function () { fcjc.style.justifyContent = 'center' }
fsb.onclick = function () { fcjc.style.justifyContent = 'space-between' }
fsa.onclick = function () { fcjc.style.justifyContent = 'space-around' }

//align-items
//Скрыть/показать секцию
let h3ai = document.querySelector('.align-items-h3')
let secai = document.querySelector('.align-items')
secai.style.display = 'none'
h3ai.onclick = () => {
   if (secai.style.display == 'none') { secai.style.display = 'block' }
   else secai.style.display = 'none'
}

//Пример работы 
let fai = document.querySelector('.FLEXBOX-align-items')
let fsai = document.querySelector('.flex-start-ai')
let feai = document.querySelector('.flex-end-ai')
let fcenai = document.querySelector('.center-ai')
let fsbai = document.querySelector('.stretch')


fsai.onclick = function () { fai.style.alignItems = 'flex-start' }
feai.onclick = function () { fai.style.alignItems = 'flex-end' }
fcenai.onclick = function () { fai.style.alignItems = 'center' }
fsbai.onclick = function () { fai.style.alignItems = 'stretch' }

//flex-wrap
//Скрыть/показать секцию
let h3fw = document.querySelector('.flex-wrap-h3')
let secfw = document.querySelector('.flex-wrap')
secfw.style.display = 'none'
h3fw.onclick = () => {
   if (secfw.style.display == 'none') { secfw.style.display = 'block' }
   else secfw.style.display = 'none'
}

//Пример работы 
let ffw = document.querySelector('.FLEXBOX-flex-wrap')
let nw = document.querySelector('.nowrap')
let w = document.querySelector('.wrap')
let wr = document.querySelector('.wrap-reverse')


nw.onclick = function () { ffw.style.flexWrap = 'nowrap' }
w.onclick = function () { ffw.style.flexWrap = 'wrap' }
wr.onclick = function () { ffw.style.flexWrap = 'wrap-reverse' }

//align-self
//Скрыть/показать секцию
let h3as = document.querySelector('.align-self-h3')
let secas = document.querySelector('.align-self')
secas.style.display = 'none'
h3as.onclick = () => {
   if (secas.style.display == 'none') { secas.style.display = 'block' }
   else secas.style.display = 'none'
}

//Пример работы 
let fas1 = document.querySelector('.align-self-block-1')
let fsas1 = document.querySelector('.flex-start-as-1')
let feas1 = document.querySelector('.flex-end-as-1')
let fcenas1 = document.querySelector('.center-as-1')
let fsbas1 = document.querySelector('.stretch-as-1')

fsas1.onclick = function () { fas1.style.alignSelf = 'flex-start' }
feas1.onclick = function () { fas1.style.alignSelf = 'flex-end' }
fcenas1.onclick = function () { fas1.style.alignSelf = 'center' }
fsbas1.onclick = function () { fas1.style.alignSelf = 'stretch' }



let fas2 = document.querySelector('.align-self-block-2')
let fsas2 = document.querySelector('.flex-start-as-2')
let feas2 = document.querySelector('.flex-end-as-2')
let fcenas2 = document.querySelector('.center-as-2')
let fsbas2 = document.querySelector('.stretch-as-2')

fsas2.onclick = function () { fas2.style.alignSelf = 'flex-start' }
feas2.onclick = function () { fas2.style.alignSelf = 'flex-end' }
fcenas2.onclick = function () { fas2.style.alignSelf = 'center' }
fsbas2.onclick = function () { fas2.style.alignSelf = 'stretch' }


let fas3 = document.querySelector('.align-self-block-3')
let fsas3 = document.querySelector('.flex-start-as-3')
let feas3 = document.querySelector('.flex-end-as-3')
let fcenas3 = document.querySelector('.center-as-3')
let fsbas3 = document.querySelector('.stretch-as-3')

fsas3.onclick = function () { fas3.style.alignSelf = 'flex-start' }
feas3.onclick = function () { fas3.style.alignSelf = 'flex-end' }
fcenas3.onclick = function () { fas3.style.alignSelf = 'center' }
fsbas3.onclick = function () { fas3.style.alignSelf = 'stretch' }


//order
//Скрыть/показать секцию
let h3o = document.querySelector('.order-h3')
let seco = document.querySelector('.order')
seco.style.display = 'none'
h3o.onclick = () => {
   if (seco.style.display == 'none') { seco.style.display = 'block' }
   else seco.style.display = 'none'
}

//Пример работы 
//Отдельные стороны
let ob1 = document.querySelector('.order-block-1')
let oi1 = document.querySelector('.order-input-1')
oi1.addEventListener("focusout", () => ob1.style.order = oi1.value)
oi1.addEventListener('keydown', function (e) { if (e.keyCode === 13) ob1.style.order = oi1.value })

let ob2 = document.querySelector('.order-block-2')
let oi2 = document.querySelector('.order-input-2')
oi2.addEventListener("focusout", () => ob2.style.order = oi2.value)
oi2.addEventListener('keydown', function (e) { if (e.keyCode === 13) ob2.style.order = oi2.value })

let ob3 = document.querySelector('.order-block-3')
let oi3 = document.querySelector('.order-input-3')
oi3.addEventListener("focusout", () => ob3.style.order = oi3.value)
oi3.addEventListener('keydown', function (e) { if (e.keyCode === 13) ob3.style.order = oi3.value })

//flex-basis
//Скрыть/показать секцию
let h3fb = document.querySelector('.flex-basis-h3')
let secfb = document.querySelector('.flex-basis')
secfb.style.display = 'none'
h3fb.onclick = () => {
   if (secfb.style.display == 'none') { secfb.style.display = 'block' }
   else secfb.style.display = 'none'
}

//Пример работы 
//Отдельные стороны
let fbb1 = document.querySelector('.flex-basis-block-1')
let fbi1 = document.querySelector('.flex-basis-input-1')
fbi1.addEventListener("focusout", () => fbb1.style.flexBasis = fbi1.value)
fbi1.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb1.style.flexBasis = fbi1.value })

let fgi1 = document.querySelector('.flex-grow-input-1')
fgi1.addEventListener("focusout", () => fbb1.style.flexGrow = fgi1.value)
fgi1.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb1.style.flexGrow = fgi1.value })

let fsi1 = document.querySelector('.flex-shrink-input-1')
fsi1.addEventListener("focusout", () => fbb1.style.flexShrink = fsi1.value)
fsi1.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb1.style.flexShrink = fsi1.value })


let fbb2 = document.querySelector('.flex-basis-block-2')
let fbi2 = document.querySelector('.flex-basis-input-2')
fbi2.addEventListener("focusout", () => fbb2.style.flexBasis = fbi2.value)
fbi2.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb2.style.flexBasis = fbi2.value })

let fgi2 = document.querySelector('.flex-grow-input-2')
fgi2.addEventListener("focusout", () => fbb2.style.flexGrow = fgi2.value)
fgi2.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb2.style.flexGrow = fgi2.value })

let fsi2 = document.querySelector('.flex-shrink-input-2')
fsi2.addEventListener("focusout", () => fbb2.style.flexShrink = fsi2.value)
fsi2.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb2.style.flexShrink = fsi2.value })

let fbb3 = document.querySelector('.flex-basis-block-3')
let fbi3 = document.querySelector('.flex-basis-input-3')
fbi3.addEventListener("focusout", () => fbb3.style.flexBasis = fbi3.value)
fbi3.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb3.style.flexBasis = fbi3.value })
let fgi3 = document.querySelector('.flex-grow-input-3')
fgi3.addEventListener("focusout", () => fbb3.style.flexGrow = fgi3.value)
fgi3.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb3.style.flexGrow = fgi3.value })

let fsi3 = document.querySelector('.flex-shrink-input-3')
fsi3.addEventListener("focusout", () => fbb3.style.flexShrink = fsi3.value)
fsi3.addEventListener('keydown', function (e) { if (e.keyCode === 13) fbb3.style.flexShrink = fsi3.value })



//flex-direction
//Скрыть/показать секцию
let h3fd = document.querySelector('.flex-direction-h3')
let secfd = document.querySelector('.flex-direction')
secfd.style.display = 'none'
h3fd.onclick = () => {
   if (secfd.style.display == 'none') { secfd.style.display = 'block' }
   else secfd.style.display = 'none'
}

//Пример работы 
let ffd = document.querySelector('.FLEXBOX-flex-direction')

let rfd = document.querySelector('.row-fd')
let rrfd = document.querySelector('.row-reverse-fd')
let cfd = document.querySelector('.column-fd')
let rcfd = document.querySelector('.column-reverse-fd')


rfd.onclick = function () { ffd.style.flexDirection = 'row' }
rrfd.onclick = function () { ffd.style.flexDirection = 'row-reverse' }
cfd.onclick = function () { ffd.style.flexDirection = 'column' }
rcfd.onclick = function () { ffd.style.flexDirection = 'column-reverse' }



let fsfd = document.querySelector('.flex-start-fd')
let fefd = document.querySelector('.flex-end-fd')
let fcenfd = document.querySelector('.center-fd')
let fsbfd = document.querySelector('.space-between-fd')
let fsafd = document.querySelector('.space-around-fd')


fsfd.onclick = function () { ffd.style.justifyContent = 'flex-start' }
fefd.onclick = function () { ffd.style.justifyContent = 'flex-end' }
fcenfd.onclick = function () { ffd.style.justifyContent = 'center' }
fsbfd.onclick = function () { ffd.style.justifyContent = 'space-between' }
fsafd.onclick = function () { ffd.style.justifyContent = 'space-around' }


let fsaifd = document.querySelector('.flex-start-ai-fd')
let feaifd = document.querySelector('.flex-end-ai-fd')
let fcenaifd = document.querySelector('.center-ai-fd')
let fsbaifd = document.querySelector('.stretch-fd')


fsaifd.onclick = function () { ffd.style.alignItems = 'flex-start' }
feaifd.onclick = function () { ffd.style.alignItems = 'flex-end' }
fcenaifd.onclick = function () { ffd.style.alignItems = 'center' }
fsbaifd.onclick = function () { ffd.style.alignItems = 'stretch' }