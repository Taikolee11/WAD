let restaurants = [];
let foods = [];

// Function 1: Adds a new restaurant to the database
function addRestaurant(name, location) {
    const newRestaurant = { id: restaurants.length + 1, name, location };
    restaurants.push(newRestaurant);
    return newRestaurant;
}

// Function 2: Adds a new food item to a restaurant
function addFoodToRestaurant(restaurantId, name, price) {
    const restaurant = restaurants.find(restaurant => restaurant.id === restaurantId);
    if (!restaurant) {
        throw new Error("Restaurant not found");
    }
    const newFood = { id: foods.length + 1, name, price, restaurantId };
    foods.push(newFood);
    return newFood;
}


// Function 3: Gets all restaurants from the database
function getAllRestaurants() {
    return restaurants;
}

// Function 4: Gets all food items for a specific restaurant
function getFoodForRestaurant(restaurantId) {
    return foods.filter(food => food.restaurantId === restaurantId);
}

// Function 5: Deletes a restaurant and all its associated food items
function deleteRestaurant(restaurantId) {
    restaurants = restaurants.filter(restaurant => restaurant.id !== restaurantId);
    foods = foods.filter(food => food.restaurantId !== restaurantId);
}


module.exports = {
    addRestaurant,
    addFoodToRestaurant,
    getAllRestaurants,
    getFoodForRestaurant,
    deleteRestaurant
};