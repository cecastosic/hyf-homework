// Create a class called Circle. It should have one property called radius.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getDiameter() {
        return 2 * this.radius;
    }

    getCircumference() {
        return 2 * this.radius * Math.PI; 
    }
    
    getArea() {
        return Math.pow(this.radius, 2) * Math.PI;
    }
}

const circleTen = new Circle(10);
console.log(circleTen.getDiameter()); // 20
console.log(circleTen.getCircumference()); 
console.log(circleTen.getArea()); 


const circleFive = new Circle(5);
console.log(circleFive.getDiameter()); 
console.log(circleFive.getCircumference()); 
console.log(circleFive.getArea()); 

const circleEleven = new Circle(11);
console.log(circleEleven.getDiameter()); 
console.log(circleEleven.getCircumference()); 
console.log(circleEleven.getArea()); 
