// class Shape{
//     constructor(color) {
//         this.color = color;
//     }

//     getColor() {
//         return this.color;
//     }

//     setColorGreen(newColor) {
//         this.color = newColor
//     }
// };


// class Circle extends Shape {

//     render() {
//         return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`  
//     } 

// }
// const cir = new Circle('blue');
// cir.render();

// console.log(cir.render());
// cir.setColorGreen('yellow')
// console.log(cir);


class Shape {
    constructor() {
      this.color = 'black';
    }
    setColor(color) {
      this.color = color;
    }
    render() {
      return '';
    }
  }
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  class Square extends Shape {
    render() {
      return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`;
    }
  }
  module.exports = { Triangle, Circle, Square };