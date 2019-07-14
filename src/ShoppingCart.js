
class ShoppingCart {
    constructor() {
        this.items = []
    }

    // Get items
    getItems () {
        return this.items
    }

    // Add an item
    addItem (itemName, quantity, price) {
        const myObj = {name: itemName, quantity: quantity, pricePerUnit: price}
        this.items.push(myObj)
    }

    // Clear the array
    clear () {
        this.items = []
    }

    // Total value of shopping cart
    total () {
        let sum = []
        for (let item of this.items) {
            sum.push(item.quantity * item.pricePerUnit)
        }
        return sum.reduce((total, num) => {
            return total + num
        }, 0)
    }
}


module.exports.ShoppingCart = ShoppingCart