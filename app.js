// app.js

// Import the john_doe_restaurant module
const restaurantModule = require('./john_doe_restaurant');

// Add a new restaurant
const restaurant1 = restaurantModule.addRestaurant("Restaurant A", "Location A");
console.log("Added restaurant:", restaurant1);

// Add food items to the restaurant
restaurantModule.addFoodToRestaurant(restaurant1.id, "Food 1", 10);
restaurantModule.addFoodToRestaurant(restaurant1.id, "Food 2", 15);

// Get all restaurants
const allRestaurants = restaurantModule.getAllRestaurants();
console.log("All restaurants:", allRestaurants);

// Get all food items for the first restaurant
const foodForRestaurant1 = restaurantModule.getFoodForRestaurant(restaurant1.id);
console.log("Food items for Restaurant 1:", foodForRestaurant1);

// Delete the first restaurant
restaurantModule.deleteRestaurant(restaurant1.id);
console.log("Restaurant 1 deleted.");

// Get all restaurants after deletion
const updatedRestaurants = restaurantModule.getAllRestaurants();
console.log("All restaurants after deletion:", updatedRestaurants);
