# Assignment 1

You will only need one file, ie, your node module, for this assignment.

In this readme file, describe how to use your node module. It could be similar to **app.js** from Lab2, where you call some functions in your node module and display the output. Describe how to setup your node module, if any. Describe how to call the functions, what parameters required and so on.

You can press **Ctrl+Shift+V** in this file in Visual Studio Code to see a live preview of the readme file.

For some tips in formatting text in readme file, refer to https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax




The CommonJS module format specifies a way to define a module using a require()function to load modules and module.exports or exports object to expose functionality.

It can  define functions and data within the module file and export them using the module.exports object. 


To use the functionality provided by the module, you import it into your script using the require function and assign it to a variable.


When it is imported, you can call the exported functions by accessing them through the variable to which the module was assigned.

My code provides functionalities for managing restaurants , their food items, add new restaurants, add food items to restaurants, retrieve all restaurants, retrieve food items for a specific restaurant, and delete restaurants along with their associated food items.


addRestaurant(name, location) function adds a new restaurant to the database.
Parameters:
-name (string): The name of the restaurant.
-location (string): The location of the restaurant.
Returns: An object representing the newly added restaurant.

addFoodToRestaurant(restaurantId, name, price) function adds a new food item to a specific restaurant in the database.
Parameters:
-restaurantId (number): The ID of the restaurant to which the food item belongs.
-name (string): The name of the food item.
-price (number): The price of the food item.
Returns: An object representing the newly added food item.

getAllRestaurants() function retrieves all restaurants stored in the database.
Parameters: NIL
Returns: An array containing all restaurant objects.

getFoodForRestaurant(restaurantId) function retrieves all food items for a specific restaurant.
Parameters:
-restaurantId (number): The ID of the restaurant.
Returns: An array containing all food items belonging to the specified restaurant.

deleteRestaurant(restaurantId) function deletes a restaurant and all its associated food items from the database.
Parameters:
-restaurantId (number): The ID of the restaurant to delete.
Returns: Boolean (true if the restaurant was deleted successfully, false if not found).