//position
//Скрыть/показать секцию
let h3p = document.querySelector('.position-h3')
let sep = document.querySelector('.position')
sep.style.display = 'none'
h3p.onclick = () => {
   if (sep.style.display == 'none') { sep.style.display = 'block' }
   else sep.style.display = 'none'
}

//Пример работы 

//Блоки для демонстрации
let pb1 = document.querySelector('.position__block-1')
let pb2 = document.querySelector('.position__block-2')
let pb3 = document.querySelector('.position__block-3')

//Основные свойства
let si1 = document.querySelector('.static-input-1')
si1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.position = si1.value })

let si2 = document.querySelector('.static-input-2')
si2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.position = si2.value })

let si3 = document.querySelector('.static-input-3')
si3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.position = si3.value })


//Дополнительные свойства

let sit1 = document.querySelector('.static-it-1')
sit1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.top = sit1.value })
let sit2 = document.querySelector('.static-it-2')
sit2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.top = sit2.value })
let sit3 = document.querySelector('.static-it-3')
sit3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.top = sit3.value })


let ril1 = document.querySelector('.relative-il-1')
ril1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.left = ril1.value })
let ril2 = document.querySelector('.relative-il-2')
ril2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.left = ril2.value })
let ril3 = document.querySelector('.relative-il-3')
ril3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.left = ril3.value })



let air1 = document.querySelector('.absolute-ir-1')
air1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.right = air1.value })
let air2 = document.querySelector('.absolute-ir-2')
air2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.right = air2.value })
let air3 = document.querySelector('.absolute-ir-3')
air3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.right = air3.value })

let fib1 = document.querySelector('.fixed-ib-1')
fib1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.bottom = fib1.value })
let fib2 = document.querySelector('.fixed-ib-2')
fib2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.bottom = fib2.value })
let fib3 = document.querySelector('.fixed-ib-3')
fib3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.bottom = fib3.value })

let fiz1 = document.querySelector('.fixed-iz-1')
fiz1.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb1.style.zIndex = fiz1.value })
let fiz2 = document.querySelector('.fixed-iz-2')
fiz2.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb2.style.zIndex = fiz2.value })
let fiz3 = document.querySelector('.fixed-iz-3')
fiz3.addEventListener('keydown', function (e) { if (e.keyCode === 13) pb3.style.zIndex = fiz3.value })





