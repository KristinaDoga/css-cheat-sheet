
// translate
//Скрыть/показать секцию
let h3t = document.querySelector('.translate-h3')
let sect = document.querySelector('.translate')
sect.style.display = 'none'
h3t.onclick = () => {
   if (sect.style.display == 'none') sect.style.display = 'block';
   else sect.style.display = 'none'
}

//Пример работы 
let ct = document.querySelector('.content__translate')
let tX = document.querySelector('.transformX')
let tY = document.querySelector('.transformY')

tX.addEventListener("focusout", () => ct.style.transform = tX.value)
tX.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) ct.style.transform = tX.value
})

tY.addEventListener("focusout", () => ct.style.transform = tY.value)
tY.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) ct.style.transform = tY.value
})


// scale
//Скрыть/показать секцию
let h3s = document.querySelector('.scale-h3')
let secs = document.querySelector('.scale')
secs.style.display = 'none'
h3s.onclick = () => {
   if (secs.style.display == 'none') secs.style.display = 'block';
   else secs.style.display = 'none'
}

//Пример работы 
let cs = document.querySelector('.content__scale')
let scalei = document.querySelector('.scale-input')


scalei.addEventListener("focusout", () => cs.style.transform = scalei.value)
scalei.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cs.style.transform = scalei.value
}
)

// rotate
//Скрыть/показать секцию
let h3r = document.querySelector('.rotate-h3')
let secr = document.querySelector('.rotate')
secr.style.display = 'none'
h3r.onclick = () => {
   if (secr.style.display == 'none') secr.style.display = 'block';
   else secr.style.display = 'none'
}

//Пример работы 
let cr = document.querySelector('.content__rotate')
let rotatei = document.querySelector('.rotate-input')


rotatei.addEventListener("focusout", () => cr.style.transform = rotatei.value)
rotatei.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cr.style.transform = rotatei.value
})



// skew
//Скрыть/показать секцию
let h3skew = document.querySelector('.skew-h3')
let secskew = document.querySelector('.skew')
secskew.style.display = 'none'
h3skew.onclick = () => {
   if (secskew.style.display == 'none') secskew.style.display = 'block';
   else secskew.style.display = 'none'
}

//Пример работы 
let csecskew = document.querySelector('.content__skew')
let skewi = document.querySelector('.skew-input')


skewi.addEventListener("focusout", () => csecskew.style.transform = skewi.value)
skewi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) csecskew.style.transform = skewi.value
})

// matrix
//Скрыть/показать секцию
let h3matrix = document.querySelector('.matrix-h3')
let secmatrix = document.querySelector('.matrix')
secmatrix.style.display = 'none'
h3matrix.onclick = () => {
   if (secmatrix.style.display == 'none') secmatrix.style.display = 'block';
   else secmatrix.style.display = 'none'
}

//Пример работы 
let csecmatrix = document.querySelector('.content__matrix')
let matrixi = document.querySelector('.matrix-input')

matrixi.addEventListener("focusout", () => csecmatrix.style.transform = matrixi.value)
matrixi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) csecmatrix.style.transform = matrixi.value
})


// multi
//Скрыть/показать секцию
let h3multi = document.querySelector('.multi-h3')
let secmulti = document.querySelector('.multi')
secmulti.style.display = 'none'
h3multi.onclick = () => {
   if (secmulti.style.display == 'none') secmulti.style.display = 'block';
   else secmulti.style.display = 'none'
}

//Пример работы 
let csecmulti = document.querySelector('.content__multi')
let multii = document.querySelector('.multi-input')


multii.addEventListener("focusout", () => csecmulti.style.transform = multii.value)
multii.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) csecmulti.style.transform = multii.value
})

// transform-origin
//Скрыть/показать секцию
let h3transform = document.querySelector('.transform-origin-h3')
let sectransform = document.querySelector('.transform-origin')
sectransform.style.display = 'none'
h3transform.onclick = () => {
   if (sectransform.style.display == 'none') sectransform.style.display = 'block';
   else sectransform.style.display = 'none'
}

//Пример работы 
let cto = document.querySelector('.content__transform-origin')
let toi = document.querySelector('.transform-origin-input')
let ti = document.querySelector('.transf-input')


toi.addEventListener("focusout", () => cto.style.transformOrigin = toi.value)
toi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cto.style.transformOrigin = toi.value
})

ti.addEventListener("focusout", () => cto.style.transform = ti.value)
ti.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cto.style.transform = ti.value
})


// perspective-origin
//Скрыть/показать секцию
let h3perspective = document.querySelector('.perspective-origin-h3')
let secperspective = document.querySelector('.perspective-origin')
secperspective.style.display = 'none'
h3perspective.onclick = () => {
   if (secperspective.style.display == 'none') secperspective.style.display = 'block';
   else secperspective.style.display = 'none'
}

//Пример работы 
let cpo = document.querySelector('.wrapper3d-perspective')
let poi = document.querySelector('.perspective-origin-input')
let pi = document.querySelector('.perspect-input')

poi.addEventListener("focusout", () => cpo.style.perspectiveOrigin = poi.value)
poi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cpo.style.perspectiveOrigin = poi.value
})

pi.addEventListener("focusout", () => cpo.style.perspective = pi.value)
pi.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) cpo.style.perspective = pi.value
})


// translate3d
//Скрыть/показать секцию
let h3translate3d = document.querySelector('.translate3d-h3')
let sectranslate3d = document.querySelector('.translate3d')
sectranslate3d.style.display = 'none'
h3translate3d.onclick = () => {
   if (sectranslate3d.style.display == 'none') sectranslate3d.style.display = 'block';
   else sectranslate3d.style.display = 'none'
}
//Пример работы 
let wt3d = document.querySelector('.content__translate3d')
let t3di = document.querySelector('.translate3d-input')

t3di.addEventListener("focusout", () => wt3d.style.transform = t3di.value)
t3di.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) wt3d.style.transform = t3di.value
})

// scale3d
//Скрыть/показать секцию
let h3scale3d = document.querySelector('.scale3d-h3')
let secscale3d = document.querySelector('.scale3d')
secscale3d.style.display = 'none'
h3scale3d.onclick = () => {
   if (secscale3d.style.display == 'none') secscale3d.style.display = 'block';
   else secscale3d.style.display = 'none'
}
//Пример работы
let ws3d = document.querySelector('.content__scale3d')
let s3di = document.querySelector('.scale3d-input')


s3di.addEventListener("focusout", () => ws3d.style.transform = s3di.value)
s3di.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) ws3d.style.transform = s3di.value
})

// rotate3d
//Скрыть/показать секцию
let h3rotate3d = document.querySelector('.rotate3d-h3')
let secrotate3d = document.querySelector('.rotate3d')
secrotate3d.style.display = 'none'
h3rotate3d.onclick = () => {
   if (secrotate3d.style.display == 'none') secrotate3d.style.display = 'block';
   else secrotate3d.style.display = 'none'
}
//Пример работы
let wr3d = document.querySelector('.content__rotate3d')
let r3di = document.querySelector('.rotate3d-input')


r3di.addEventListener("focusout", () => wr3d.style.transform = r3di.value)
r3di.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) wr3d.style.transform = r3di.value
})

// matrix3d
//Скрыть/показать секцию
let h3matrix3d = document.querySelector('.matrix3d-h3')
let secmatrix3d = document.querySelector('.matrix3d')
secmatrix3d.style.display = 'none'
h3matrix3d.onclick = () => {
   if (secmatrix3d.style.display == 'none') secmatrix3d.style.display = 'block';
   else secmatrix3d.style.display = 'none'
}


// multi3d
//Скрыть/показать секцию
let h3multi3d = document.querySelector('.multi3d-h3')
let secmulti3d = document.querySelector('.multi3d')
secmulti3d.style.display = 'none'
h3multi3d.onclick = () => {
   if (secmulti3d.style.display == 'none') secmulti3d.style.display = 'block';
   else secmulti3d.style.display = 'none'
}
//Пример работы
let mul3d = document.querySelector('.content__multi3d')
let mul3di = document.querySelector('.multi3d-input')


mul3di.addEventListener("focusout", () => mul3d.style.transform = mul3di.value)
mul3di.addEventListener('keydown', function (e) {
   if (e.keyCode === 13) mul3d.style.transform = mul3di.value
})

// transform-style
//Скрыть/показать секцию
let h3style = document.querySelector('.style-h3')
let secstyle = document.querySelector('.style')
secstyle.style.display = 'none'
h3style.onclick = () => {
   if (secstyle.style.display == 'none') secstyle.style.display = 'block';
   else secstyle.style.display = 'none'
}
//Пример работы
let ctsw = document.querySelector('.content__transform-style-wrapper')
let flat = document.querySelector('.flat')
let preserve = document.querySelector('.preserve')


flat.onclick = () => { ctsw.style.transformStyle = "flat" }
preserve.onclick = () => { ctsw.style.transformStyle = "preserve-3d" }

// visible
//Скрыть/показать секцию
let h3visibility = document.querySelector('.visibility-h3')
let secvisibility = document.querySelector('.visibility')
secvisibility.style.display = 'none'
h3visibility.onclick = () => {
   if (secvisibility.style.display == 'none') secvisibility.style.display = 'block';
   else secvisibility.style.display = 'none'
}
//Пример работы
let cvw = document.querySelector('.flip__front')
let visible = document.querySelector('.visible')
let hidden = document.querySelector('.hidden')


visible.onclick = () => { cvw.style.backfaceVisibility = "visible" }
hidden.onclick = () => { cvw.style.backfaceVisibility = "hidden" }


// visible-code
//Скрыть/показать секцию
let codeLink = document.querySelector('.codeLink')
let codeList = document.querySelector('.codeList')
codeList.style.display = 'none'
codeLink.onclick = () => {
   if (codeList.style.display == 'none') codeList.style.display = 'block';
   else codeList.style.display = 'none'
}
