/*border
Скрыть/показать секцию */
let h3b = document.querySelector('.border-h3')
let secb = document.querySelector('.border')
secb.style.display = 'none'
h3b.onclick = () => {
   if (secb.style.display == 'none') { secb.style.display = 'block' }
   else secb.style.display = 'none'
}

/*Пример работы */
let bd = document.querySelector('.border__display')
let bi = document.querySelector('.border-input')
let bit = document.querySelector('.border-input-top')
let bir = document.querySelector('.border-input-right')
let bib = document.querySelector('.border-input-bottom')
let bil = document.querySelector('.border-input-left')

bi.addEventListener("focusout", () => bd.style.border = bi.value)
bi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bd.style.border = bi.value
})

bit.addEventListener("focusout", () => bd.style.borderTop = bit.value)
bit.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bd.style.borderTop = bit.value
})

bir.addEventListener("focusout", () => bd.style.borderRight = bir.value)
bir.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bd.style.borderRight = bir.value
})

bib.addEventListener("focusout", () => bd.style.borderBottom = bib.value)
bib.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bd.style.borderBottom = bib.value
})

bil.addEventListener("focusout", () => bd.style.borderLeft = bil.value)
bil.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bd.style.borderLeft = bil.value
})

//border-radiur
//Скрыть/показать секцию
let h3br = document.querySelector('.border-radius-h3')
let secbr = document.querySelector('.border-radius')
secbr.style.display = 'none'
h3br.onclick = () => {
   if (secbr.style.display == 'none') { secbr.style.display = 'block' }
   else secbr.style.display = 'none'
}

//Пример работы 
let brd = document.querySelector('.border-radius__display img')
let bri = document.querySelector('.border-radius-input')

bri.addEventListener("focusout", () => brd.style.borderRadius = bri.value)
bri.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) brd.style.borderRadius = bri.value
})

//box-shadow
//Скрыть/показать секцию
let h3bs = document.querySelector('.box-shadow-h3')
let secbs = document.querySelector('.box-shadow')
secbs.style.display = 'none'
h3bs.onclick = () => {
   if (secbs.style.display == 'none') { secbs.style.display = 'block' }
   else secbs.style.display = 'none'
}

//Пример работы 
let bsd = document.querySelector('.box-shadow__display img')
let bsi = document.querySelector('.box-shadow-input')
let bsir = document.querySelector('.box-shadow-input-radius')

bsi.addEventListener("focusout", () => bsd.style.boxShadow = bsi.value)
bsi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bsd.style.boxShadow = bsi.value
})

bsir.addEventListener("focusout", () => bsd.style.borderRadius = bsir.value)
bsir.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bsd.style.borderRadius = bsir.value
})

//opacity
//Скрыть/показать секцию
let h3op = document.querySelector('.opacity-h3')
let secop = document.querySelector('.opacity')
secop.style.display = 'none'
h3op.onclick = () => {
   if (secop.style.display == 'none') { secop.style.display = 'block' }
   else secop.style.display = 'none'
}

//Пример работы 
let opd = document.querySelector('.opacity__display img')
let opi = document.querySelector('.opacity-input')

opi.addEventListener("focusout", () => opd.style.opacity = opi.value)
opi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) opd.style.opacity = opi.value
})

//visibility
//Скрыть/показать секцию
let h3v = document.querySelector('.visibility-h3')
let secv = document.querySelector('.visibility')
secv.style.display = 'none'
h3v.onclick = () => {
   if (secv.style.display == 'none') { secv.style.display = 'block' }
   else secv.style.display = 'none'
}

//Пример работы 
let vd = document.querySelector('.visibility__display img')
let vv = document.querySelector('.visibility__visible')
let vh = document.querySelector('.visibility__hidden')

vv.onclick = function () { vd.style.visibility = 'visible' }
vh.onclick = function () { vd.style.visibility = 'hidden' }

//width
//Скрыть/показать секцию
let h3w = document.querySelector('.width-h3')
let secw = document.querySelector('.width')
secw.style.display = 'none'
h3w.onclick = () => {
   if (secw.style.display == 'none') { secw.style.display = 'block' }
   else secw.style.display = 'none'
}

//Пример работы 
let wd = document.querySelector('.width-content')
let wi = document.querySelector('.width-input')
let mawi = document.querySelector('.max-width-input')
let miwi = document.querySelector('.min-width-input')

wi.addEventListener("focusout", () => wd.style.width = wi.value)
wi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) wd.style.width = wi.value
})


mawi.addEventListener("focusout", () => wd.style.maxWidth = mawi.value)
mawi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) wd.style.maxWidth = mawi.value
})

miwi.addEventListener("focusout", () => wd.style.minWidth = miwi.value)
miwi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) wd.style.minWidth = miwi.value
})

//height
//Скрыть/показать секцию
let h3h = document.querySelector('.height-h3')
let sech = document.querySelector('.height')
sech.style.display = 'none'
h3h.onclick = () => {
   if (sech.style.display == 'none') { sech.style.display = 'block' }
   else sech.style.display = 'none'
}

//Пример работы 
let hd = document.querySelector('.height-content')
let hi = document.querySelector('.height-input')
let mahi = document.querySelector('.max-height-input')
let mihi = document.querySelector('.min-height-input')

hi.addEventListener("focusout", () => hd.style.height = hi.value)
hi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) hd.style.height = hi.value
})


mahi.addEventListener("focusout", () => hd.style.maxHeight = mahi.value)
mahi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) hd.style.maxHeight = mahi.value
})

mihi.addEventListener("focusout", () => hd.style.minHeight = mihi.value)
mihi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) hd.style.minHeight = mihi.value
})

//overflow
//Скрыть/показать секцию
let h3ov = document.querySelector('.overflow-h3')
let secov = document.querySelector('.overflow')
secov.style.display = 'none'
h3ov.onclick = () => {
   if (secov.style.display == 'none') { secov.style.display = 'block' }
   else secov.style.display = 'none'
}

//Пример работы 
let ovd = document.querySelector('.overflow-content')
let ovv = document.querySelector('.overflow__visible')
let ovh = document.querySelector('.overflow__hidden')
let ovs = document.querySelector('.overflow__scroll')
let ova = document.querySelector('.overflow__auto')

ovv.onclick = function () { ovd.style.overflow = 'visible' }
ovh.onclick = function () { ovd.style.overflow = 'hidden' }
ovs.onclick = function () { ovd.style.overflow = 'scroll' }
ova.onclick = function () { ovd.style.overflow = 'auto' }

//display
//Скрыть/показать секцию
let h3d = document.querySelector('.displ-h3')
let secd = document.querySelector('.displ')
secd.style.display = 'none'
h3d.onclick = () => {
   if (secd.style.display == 'none') { secd.style.display = 'block' }
   else secd.style.display = 'none'
}

//Пример работы 
//Для абзаца
let dp = document.querySelector('.displ__p')
let dbp = document.querySelector('.displ__block-p')
let dip = document.querySelector('.displ__inline-p')
let dibp = document.querySelector('.displ__inline-block-p')
let dnp = document.querySelector('.displ__none-p')

dbp.onclick = function () { dp.style.display = 'block' }
dip.onclick = function () { dp.style.display = 'inline' }
dibp.onclick = function () { dp.style.display = 'inline-block' }
dnp.onclick = function () { dp.style.display = 'none' }

//Для ссылки
let da = document.querySelector('.displ__a')
let dba = document.querySelector('.displ__block-a')
let dia = document.querySelector('.displ__inline-a')
let diba = document.querySelector('.displ__inline-block-a')
let dna = document.querySelector('.displ__none-a')

dba.onclick = function () { da.style.display = 'block' }
dia.onclick = function () { da.style.display = 'inline' }
diba.onclick = function () { da.style.display = 'inline-block' }
dna.onclick = function () { da.style.display = 'none' }
