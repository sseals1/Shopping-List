const shoppingList = [
    {
        id: 1,
        name: "milk",
        price: 3.45
        
    },
    {
        id: 2,
        name: "Eggs",
        price: 2.55
    },
    {
        id: 3,
        name: "pizza-rolls",
        price: 5.54
    },
    {
        id: 4,
        name: "chicken",
        price: 7.53

    },
    {
        id: 5,
        name: "banana",
        price: 3.78
    },
    {
        id: 6,
        name: "sandwich-buns",
        price: 2.45
    },
    {
        id: 7,
        name: "condiments",
        price: 4.99
    }

]
// console.log(shoppingList)


const addToShoppingList = (name, price) => {
    const idNum = shoppingList.length + 1
    // const date = new Date()
    // const getDate = date.getDate()
    let today = new Date().toISOString().slice(0, 10)
    
    const pushVeg = {
        id: idNum,
        name: name,
        price: price,
        date: today
        
    }

    shoppingList.push(pushVeg)

}

addToShoppingList("corn", 15)
addToShoppingList("watermelon", 4)
addToShoppingList("cabage", 11.89)
addToShoppingList("airplane", 8)
addToShoppingList("onions", 16)

// console.log(shoppingList)

let today = new Date().toISOString().slice(0, 10)
    
//  console.log(shoppingList)

for (const priceOver of shoppingList) {
    if (priceOver.price > 8) {
        console.log(priceOver)
    } 
}
