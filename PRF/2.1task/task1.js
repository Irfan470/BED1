class MenuItems {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    description() {
        return `${this.name} costs ${this.price} dollars`;
    }
}
class Pizza extends MenuItems {
    constructor(name, price, ingredients) {
        super(name, price);
        this.ingredients = ingredients;
    }
    description() {
       let ingredients = this.ingredients.join(', ');
         return super.description() + ` and contains ${ingredients}`;
    }
}
const myPizza = new Pizza('Margherita', 10, ['tomato', 'mozzarella', 'basil']);
console.log(myPizza.description()); // Margherita costs 10 dollars and contains tomato, mozzarella, basil
class Pancakes extends MenuItems {
    constructor(name, price, sweet) {
        super(name, price);
        this.sweet = sweet;
    }
    description() {
        return super.description() + ` and are ${this.sweet ? 'sweet' : 'salty'}`;
    }   
}
const myPancakes = new Pancakes('American pancakes', 5, false);
console.log(myPancakes.description()); // American pancakes costs 5 dollars and are sweet

class Pasta extends MenuItems {
    constructor(name, price, vegetarian) {
        super(name, price);
        this.vegetarian = vegetarian;
    }
    description() {
        return super.description() + ` and is ${this.vegetarian ? 'vegetarian' : 'non-vegetarian'}`;
    }
}
const myPasta = new Pasta('Carbonara', 12, false);
console.log(myPasta.description()); // Carbonara costs 12 dollars and are non-vegetarian
      
   