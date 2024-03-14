//background-color
//Скрыть/показать секцию
let h3bc = document.querySelector('.background-color-h3')
let secbc = document.querySelector('.background-color')
secbc.style.display = 'none'
h3bc.onclick = () => {
   if (secbc.style.display == 'none') { secbc.style.display = 'block' }
   else secbc.style.display = 'none'
}

//Пример работы 
let bcd = document.querySelector('.background-color__display')
let bci = document.querySelector('.background-color-input')

bci.addEventListener("focusout", () => bcd.style.backgroundColor = bci.value)
bci.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bcd.style.backgroundColor = bci.value
})

//background-image
//Скрыть/показать секцию
let h3bi = document.querySelector('.background-image-h3')
let secbi = document.querySelector('.background-image')
secbi.style.display = 'none'
h3bi.onclick = () => {
   if (secbi.style.display == 'none') { secbi.style.display = 'block' }
   else secbi.style.display = 'none'
}

//Пример работы 
let bid = document.querySelector('.background-image__display')
let bii = document.querySelector('.background-image-input')

bii.addEventListener("focusout", () => bid.style.backgroundImage = bii.value)
bii.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bid.style.backgroundImage = bii.value
})

//background-position
//Скрыть/показать секцию
let h3bp = document.querySelector('.background-position-h3')
let secbp = document.querySelector('.background-position')
secbp.style.display = 'none'
h3bp.onclick = () => {
   if (secbp.style.display == 'none') { secbp.style.display = 'block' }
   else secbp.style.display = 'none'
}

//Пример работы 
let bpd = document.querySelector('.background-position__display')
let bpip = document.querySelector('.background-position-input-persent')
let bpiw = document.querySelector('.background-position-input-word')

bpip.addEventListener("focusout", () => bpd.style.backgroundPosition = bpip.value)
bpip.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bpd.style.backgroundPosition = bpip.value
})

bpiw.addEventListener("focusout", () => bpd.style.backgroundPosition = bpiw.value)
bpiw.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bpd.style.backgroundPosition = bpiw.value
})

//background-repeat
//Скрыть/показать секцию
let h3bgr = document.querySelector('.background-repeat-h3')
let secbgr = document.querySelector('.background-repeat')
secbgr.style.display = 'none'
h3bgr.onclick = () => {
   if (secbgr.style.display == 'none') { secbgr.style.display = 'block' }
   else secbgr.style.display = 'none'
}

//Пример работы
let brdi = document.querySelector('.background-repeat__display')
let brnr = document.querySelector('.background-repeat__no-repeat')
let brr = document.querySelector('.background-repeat__repeat')
let brrx = document.querySelector('.background-repeat__repeat-x')
let brry = document.querySelector('.background-repeat__repeat-y')
let brs = document.querySelector('.background-repeat__space')
let brro = document.querySelector('.background-repeat__round')

brnr.onclick = function () { brdi.style.backgroundRepeat = 'no-repeat' }
brr.onclick = function () { brdi.style.backgroundRepeat = 'repeat' }
brrx.onclick = function () { brdi.style.backgroundRepeat = 'repeat-x' }
brry.onclick = function () { brdi.style.backgroundRepeat = 'repeat-y' }
brs.onclick = function () { brdi.style.backgroundRepeat = 'space' }
brro.onclick = function () { brdi.style.backgroundRepeat = 'round' }

//background-attachment
//Скрыть/показать секцию
let h3bga = document.querySelector('.background-attachment-h3')
let secbga = document.querySelector('.background-attachment')
secbga.style.display = 'none'
h3bga.onclick = () => {
   if (secbga.style.display == 'none') { secbga.style.display = 'block' }
   else secbga.style.display = 'none'
}

//Пример работы
let badi = document.querySelector('.background-attachment__display')
let baf = document.querySelector('.background-attachment__fixed')
let bas = document.querySelector('.background-attachment__scroll')

baf.onclick = function () { badi.style.backgroundAttachment = 'fixed' }
bas.onclick = function () { badi.style.backgroundAttachment = 'scroll' }

//background-size
//Скрыть/показать секцию
let h3bgs = document.querySelector('.background-size-h3')
let secbgs = document.querySelector('.background-size')
secbgs.style.display = 'none'
h3bgs.onclick = () => {
   if (secbgs.style.display == 'none') { secbgs.style.display = 'block' }
   else secbgs.style.display = 'none'
}

//Пример работы 
let bgsd = document.querySelector('.background-size__display')
let bgsi = document.querySelector('.background-size-input')

bgsi.addEventListener("focusout", () => bgsd.style.backgroundSize = bgsi.value)
bgsi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bgsd.style.backgroundSize = bgsi.value
})

//background
//Скрыть/показать секцию
let h3bg = document.querySelector('.background-h3')
let secbg = document.querySelector('.background')
secbg.style.display = 'none'
h3bg.onclick = () => {
   if (secbg.style.display == 'none') { secbg.style.display = 'block' }
   else secbg.style.display = 'none'
}

//Пример работы 
let bgd = document.querySelector('.background__display')
let bgi = document.querySelector('.background-input')

bgi.addEventListener("focusout", () => bgd.style.background = bgi.value)
bgi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) bgd.style.background = bgi.value
})