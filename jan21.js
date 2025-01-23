
let Car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};

console.log(Car.brand);
document.write("Car Brand: "+Car.brand+"<br>");
document.write("Car Model: "+Car.model+"<br>");

console.log(Car.model);


Car.year = 2021;
Car.color = "venta Black";
delete Car.brand;
if("brand" in Car){
    document.write("Brand exists in car");
} else {
    document.write("Brand does not exist in car");
}