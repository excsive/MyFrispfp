let screenPrice = prompt('Сколько будет стоить данная работа?', "12000")
console.log(screenPrice)

let servicePrice1 = prompt('Сколько это будет стоить?')
console.log(servicePrice1)

let servicePrice2 = prompt('Сколько это будет стоить?')
console.log(servicePrice2)

let fullprice = screenPrice + servicePrice1 + servicePrice2

const allServicePrices = function name(price) {
    if (price >= 30000) {
        return "Делаем скидку в 10%"
    }   else if (price >= 15000 && price < 30000) {
        return "делаем скидку в 5%"
    } else if (price >= 0 && price < 15000){
        return "Скидка не предусмотрена"
    }
}

console.log(allServicePrices(fullprice))
