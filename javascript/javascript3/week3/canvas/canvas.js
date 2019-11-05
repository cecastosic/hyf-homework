
// Lets create a class called Circle. 
// Where the constructor should look like this: constructor(x, y, r, startAngle, endAngle, fillColor)
// The circle should have one method: draw that draws the circle to the canvas. 

class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw () {
        const canvas = document.getElementById('canvas');
        if (canvas.getContext) {
          // What if we wanted the canvas to have the same width and height of the screen?
          canvas.height = window.innerHeight;
          canvas.width = window.innerWidth;
          let ctx = canvas.getContext('2d');
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.r, this.startAngle, this.endAngle); 
          ctx.closePath();
          ctx.fillStyle = this.fillColor;
          ctx.fill();
        }
    }
}
  
// Every half second create a new circle class and draw that to the canvas.
// The circle should have random x, y, radius and color

const color = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// function drawNewCircle() {
//     let random1 = Math.floor(Math.random() * 10) + 50;
//     let random2 = Math.floor(Math.random() * 10) + 50;
//     let circle = new Circle(mouseX, mouseY, random2, 0, 2 * Math.PI, color());
//     circle.draw();
// }

// setInterval(drawNewCircle, 500);


// Follow the mouse - optional
// Instead of the circles just randomly appearing on the screen, make them appear around the cursor.

window.addEventListener("mousemove", event => {
  
    let randomRadius = Math.floor(Math.random() * 50);
    let circle = new Circle(event.clientX, event.clientY, randomRadius, 0, 2 * Math.PI, color());
    circle.draw();

});
  