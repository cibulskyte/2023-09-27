// Užduotis:
// 1. Sukurti HTML elementą, kurio id „numbers" +
// 2. JavaScript pagalba šio elemento viduje sukurti: h3 elementą ir du mygtukų elementus +
// 3. h3 elemento tekstas turėtų būti „5" +
// 4. Mygtukų tekstas turėtų būti „+" ir „-" +
// 5. Sukurti „click" (paspaudimo) event listener'ius abiems mygtukams. +
// 6. „-" mygtuko event listeneris turėtų iškviesti funkciją, kuri sumažina skaičių h3 elemente, o „+" mygtuko paspaudimas turėtų skaičių padidinti +

// 7. Jeigu skaitmuo h3 komponente yra mažesnis už du, tai „-" mygtukas turėtų patapti neveiksnus (disabled)- element.setAttribute('disabled', true) / element.removeAttribute('disabled')
// 8. Jeigu skaitmuo h3 komponente yra 10, tai „+" mygtukas turėtų patapti neveiksnus (disabled)
// 9. Jeigu skaitmuo yra 5 arba daugiau, tai jo spalva turėtų būti žalia. Kitu atveju - raudona.

// 10. Sukurti naują mygtuką „Reset". Jį paspaudus viskas atstatoma į pradinę padėtį.

// 11. Sukurti input elementą (number tipo) ir jame įrašytą skaičių pridėti kaip h3 elemento tekstą.

let numbers = document.querySelector('#numbers')

let buttonPositive = document.createElement('button-positive')
buttonPositive.textContent = ('+')
numbers.append(buttonPositive)

let mainNumber = document.createElement('h3')
mainNumber.textContent = ('5')
numbers.append(mainNumber)

let buttonNegative = document.createElement('button-negative')
buttonNegative.textContent = ('-')
numbers.append(buttonNegative)



buttonPositive.addEventListener('click' ,function () {
    let currentNumber = parseInt(mainNumber.textContent)
    if (currentNumber <10) {
    mainNumber.textContent = (currentNumber+1).toString()

}})


buttonNegative.addEventListener ('click', function () {

    let currentNumber = parseInt(mainNumber.textContent)
    if (currentNumber>1) {
        mainNumber.textContent = (currentNumber -1).toString()
    if (currentNumber <2) {
        buttonNegative.setAttribute('disabled', true)
    }
    }
})
let buttonReset = document.createElement('button-reset')
buttonReset.textContent = ('reset')
numbers.append(buttonReset)

buttonReset.addEventListener('click', function() {
    mainNumber.textContent =('5')
})

let inputText = document.createElement ('input-text')











