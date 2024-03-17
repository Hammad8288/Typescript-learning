//Exercise No 45
/*Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.*/
var car1, car2;
function make_car(manufacturer, modelName, options) {
    if (options === void 0) { options = {}; }
    var cars = {
        manufacturer: manufacturer,
        modelName: modelName,
        options: options,
    };
    return cars;
}
car1 = make_car("honda", "civic", {
    color: "black",
});
console.log(car1);
car2 = make_car("honda", "accord", {
    year: 2023,
    color: "white",
    headlights: "popup",
});
console.log(car2);
