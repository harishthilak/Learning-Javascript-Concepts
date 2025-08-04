class FoodFactory {
  static create(ingredient) {
    return new ingredient(ingredient.name, ingredient.type, ingredient.calories);
  }
}

const water = new Ingredient("Water", "liquid", 0);

const pot1 = [FoodFactory.create(water)];
const pot2 = [FoodFactory.create(water)];

pot1[0].calories += 50;

console.log("pot1:", pot1);
console.log("pot2:", pot2);
