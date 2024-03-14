
// font-family

//Скрыть/показать секцию
let h3ff = document.querySelector('.font-family-h3')
let secff = document.querySelector('.font-family')
secff.style.display = 'none'
h3ff.onclick = () => {
   if (secff.style.display == 'none') secff.style.display = 'block';
   else secff.style.display = 'none'
}

//Пример работы 
let display = document.querySelector('.font-family__display')
let ffb1 = document.querySelector('.ffe-1')
let ffb2 = document.querySelector('.ffe-2')
let ffb3 = document.querySelector('.ffe-3')
let ffb4 = document.querySelector('.ffe-4')
let ffb5 = document.querySelector('.ffe-5')

ffb1.onclick = () => { display.style.fontFamily = "'Times New Roman'" }
ffb2.onclick = function () { display.style.fontFamily = "Arial" }
ffb3.onclick = function () { display.style.fontFamily = "monospace" }
ffb4.onclick = function () { display.style.fontFamily = "cursive" }
ffb5.onclick = function () { display.style.fontFamily = "fantasy" }

//font-size

//Скрыть/показать секцию
let h3fz = document.querySelector('.font-size-h3')
let secfz = document.querySelector('.font-size')
secfz.style.display = 'none'
h3fz.onclick = () => {
   if (secfz.style.display == 'none') { secfz.style.display = 'block' }
   else secfz.style.display = 'none'
}

//Пример работы 
let fzd = document.querySelector('.font-size__display')
let fzi = document.querySelector('.font-size__input')

fzi.addEventListener("focusout", () => fzd.style.fontSize = fzi.value)
fzi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) fzd.style.fontSize = fzi.value
})

//font-style
//Скрыть/показать секцию
let h3fs = document.querySelector('.font-style-h3')
let secfs = document.querySelector('.font-style')
secfs.style.display = 'none'
h3fs.onclick = () => {
   if (secfs.style.display == 'none') { secfs.style.display = 'block' }
   else secfs.style.display = 'none'
}

//Пример работы 
let fsd = document.querySelector('.font-style__display')
let fsn = document.querySelector('.font-style__normal')
let fsi = document.querySelector('.font-style__italic')

fsn.onclick = function () { fsd.style.fontStyle = 'normal' }
fsi.onclick = function () { fsd.style.fontStyle = 'italic' }

//font-weight
//Скрыть/показать секцию
let h3fw = document.querySelector('.font-weight-h3')
let secfw = document.querySelector('.font-weight')
secfw.style.display = 'none'
h3fw.onclick = () => {
   if (secfw.style.display == 'none') { secfw.style.display = 'block' }
   else secfw.style.display = 'none'
}

//Пример работы 
let fwd = document.querySelector('.font-weight__display')
let fwi = document.querySelector('.font-weight__input')

fwi.addEventListener("focusout", () => fwd.style.fontWeight = fwi.value)
fwi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) fwd.style.fontWeight = fwi.value
})

//color
//Скрыть/показать секцию
let h3c = document.querySelector('.color-h3')
let secc = document.querySelector('.color')
secc.style.display = 'none'
h3c.onclick = () => {
   if (secc.style.display == 'none') { secc.style.display = 'block' }
   else secc.style.display = 'none'
}

//Пример работы 
let cd = document.querySelector('.color__display')
let ci_1 = document.querySelector('.ci-1')
let ci_2 = document.querySelector('.ci-2')
let ci_3 = document.querySelector('.ci-3')

ci_1.addEventListener("focusout", () => cd.style.color = ci_1.value)
ci_1.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cd.style.color = ci_1.value
})

ci_2.addEventListener("focusout", () => cd.style.color = ci_2.value)
ci_2.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cd.style.color = ci_2.value
})

ci_3.addEventListener("focusout", () => cd.style.color = ci_3.value)
ci_3.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cd.style.color = ci_3.value
})

//text-align
//Скрыть/показать секцию
let h3ta = document.querySelector('.text-align-h3')
let secta = document.querySelector('.text-align')
secta.style.display = 'none'
h3ta.onclick = () => {
   if (secta.style.display == 'none') { secta.style.display = 'block' }
   else secta.style.display = 'none'
}

//Пример работы 
let tad = document.querySelector('.text-align__display')
let tac = document.querySelector('.text-align__center')
let tal = document.querySelector('.text-align__left')
let tar = document.querySelector('.text-align__right')
let taj = document.querySelector('.text-align__justify')

tac.onclick = function () { tad.style.textAlign = 'center' }
tal.onclick = function () { tad.style.textAlign = 'left' }
tar.onclick = function () { tad.style.textAlign = 'right' }
taj.onclick = function () { tad.style.textAlign = 'justify' }

//text-decoration
//Скрыть/показать секцию
let h3td = document.querySelector('.text-decoration-h3')
let sectd = document.querySelector('.text-decoration')
sectd.style.display = 'none'
h3td.onclick = () => {
   if (sectd.style.display == 'none') { sectd.style.display = 'block' }
   else sectd.style.display = 'none'
}

//Пример работы 
let tdd = document.querySelector('.text-decoration__display')
let tdl = document.querySelector('.text-decoration__line-through')
let tdo = document.querySelector('.text-decoration__overline')
let tdu = document.querySelector('.text-decoration__underline')
let tdn = document.querySelector('.text-decoration__none')

tdl.onclick = function () { tdd.style.textDecoration = 'line-through' }
tdo.onclick = function () { tdd.style.textDecoration = 'overline' }
tdu.onclick = function () { tdd.style.textDecoration = 'underline' }
tdn.onclick = function () { tdd.style.textDecoration = 'none' }

//text-shadow
//Скрыть/показать секцию
let h3ts = document.querySelector('.text-shadow-h3')
let sects = document.querySelector('.text-shadow')
sects.style.display = 'none'
h3ts.onclick = () => {
   if (sects.style.display == 'none') { sects.style.display = 'block' }
   else sects.style.display = 'none'
}

//Пример работы 
let tsd = document.querySelector('.text-shadow__display')
let tsi = document.querySelector('.text-shadow__input')

tsi.addEventListener("focusout", () => tsd.style.textShadow = tsi.value)
tsi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) tsd.style.textShadow = tsi.value
})

//text-transform
//Скрыть/показать секцию
let h3tt = document.querySelector('.text-transform-h3')
let sectt = document.querySelector('.text-transform')
sectt.style.display = 'none'
h3tt.onclick = () => {
   if (sectt.style.display == 'none') { sectt.style.display = 'block' }
   else sectt.style.display = 'none'
}

//Пример работы 
let ttd = document.querySelector('.text-transform__display')
let ttc = document.querySelector('.text-transform__capitalize')
let ttl = document.querySelector('.text-transform__lowercase')
let ttu = document.querySelector('.text-transform__uppercase')
let ttn = document.querySelector('.text-transform__none')

ttc.onclick = function () { ttd.style.textTransform = 'capitalize' }
ttl.onclick = function () { ttd.style.textTransform = 'lowercase' }
ttu.onclick = function () { ttd.style.textTransform = 'uppercase' }
ttn.onclick = function () { ttd.style.textTransform = 'none' }

//other
//Скрыть/показать секцию
let h3o = document.querySelector('.other-h3')
let seco = document.querySelector('.other')
seco.style.display = 'none'
h3o.onclick = () => {
   if (seco.style.display == 'none') { seco.style.display = 'block' }
   else seco.style.display = 'none'
}

//Пример работы 
let od = document.querySelector('.other__display')
let tii = document.querySelector('.text-indent-input')
let lsi = document.querySelector('.letter-spacing-input')
let lhi = document.querySelector('.line-height-input')
let wsi = document.querySelector('.word-spacing-input')
od.style.textIndent = '0px'
tii.addEventListener("focusout", () => od.style.textIndent = tii.value)
tii.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) od.style.textIndent = tii.value
})

od.style.letterSpacing = 'normal'
lsi.addEventListener("focusout", () => od.style.letterSpacing = lsi.value)
lsi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) od.style.letterSpacing = lsi.value
})

od.style.lineHeight = 'normal'
lhi.addEventListener("focusout", () => od.style.lineHeight = lhi.value)
lhi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) od.style.lineHeight = lhi.value
})

od.style.wordSpacing = 'normal'
wsi.addEventListener("focusout", () => od.style.wordSpacing = wsi.value)
wsi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) od.style.wordSpacing = wsi.value
})