// app.js


const restaurantModule = require('./Ryan_WAD');

// Add a new restaurant
const restaurant1 = restaurantModule.addRestaurant("McDonald", "Waterway Point");
console.log("Added restaurant:", restaurant1);
const restaurant2 = restaurantModule.addRestaurant("KFC", "CompassOne");
console.log("Added restaurant:", restaurant2);
const restaurant3 = restaurantModule.addRestaurant("Saizeriya", "Hougang Mall");
console.log("Added restaurant:", restaurant3);
const restaurant4 = restaurantModule.addRestaurant("Din Tai Fung", "Junction 8");
console.log("Added restaurant:", restaurant4);
const restaurant5 = restaurantModule.addRestaurant("Mala Tang Yuan", "Vivo City");
console.log("Added restaurant:", restaurant5);


// Add food items to the restaurant1
restaurantModule.addFoodToRestaurant(restaurant1.id, "vanilla ice cream", 1);
restaurantModule.addFoodToRestaurant(restaurant1.id, "hot fudge sundae", 2);
restaurantModule.addFoodToRestaurant(restaurant1.id, "sweet potato cone", 1.20);

//Add food items to the restaurant2
restaurantModule.addFoodToRestaurant(restaurant2.id, "egg tart", 3);
restaurantModule.addFoodToRestaurant(restaurant2.id, "zinger burger", 5);
restaurantModule.addFoodToRestaurant(restaurant2.id, "cheese fries", 2);





// Get all restaurants
const allRestaurants = restaurantModule.getAllRestaurants();
console.log("All restaurants:", allRestaurants);

// Get all food items for the first restaurant
const foodForRestaurant1 = restaurantModule.getFoodForRestaurant(restaurant1.id);
console.log("Food items for Restaurant 1:", foodForRestaurant1);

// Get all food items for the second restaurant
const foodForRestaurant2 = restaurantModule.getFoodForRestaurant(restaurant2.id);
console.log("Food items for Restaurant 2:", foodForRestaurant2);

// Delete the 5th restaurant
restaurantModule.deleteRestaurant(restaurant5.id);
console.log("Restaurant 5 deleted.");

// Get all restaurants after deletion
const updatedRestaurants = restaurantModule.getAllRestaurants();
console.log("All restaurants after deletion:", updatedRestaurants);
