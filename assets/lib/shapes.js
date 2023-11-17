// Export  `Triangle`, `Circle`, and `Square` classes
class Shape {
    
    // builds the colors of the logo
    constructor () {
        this.color = '';
    }
    setColor(color){
        this.color=(color)
    }
}

class Triangle extends Shape {
    // sets the colors and properties of the triangle 
    constructor () {
        super();
        this.textColor ='';
        this.characters = '';
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,200 150,0 300,200" fill="${this.color}" />
            <text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.characters}</text>
        </svg>`;
    }

    setTextColor(color){
        // text color
        this.textColor=(color)
    }

    setCharacters(answers){
        // number of characters
        this.characters=(answers)
    }
}

class Square extends Shape {
    // sets the colors and properties of the square 
    constructor () {
        super();
        this.textColor ='';
        this.characters = '';
    }

    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="300" height="200" fill="${this.color}" /><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.characters}</text>
        </svg>`;
    }

    setTextColor(color){
        // text color
        this.textColor=(color)
    }

    setCharacters(answers){
        // number of characters
        this.characters=(answers)
    }
}


class Circle extends Shape {
    // sets the colors and properties of the circle
    constructor () {
        super();
        this.textColor ='';
        this.characters = '';
    }

    render() {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="150" r="150" fill="${this.color}" /><text x="50%" y="50%" alignment-baseline="middle" text-anchor="middle" fill="${this.textColor}" font-size="20">${this.characters}</text>
        </svg>`;
    }

    setTextColor(color){
        // text color
        this.textColor=(color)
    }

    setCharacters(answers){
        // number of characters
        this.characters=(answers)
    }
}



module.exports = {Triangle, Square, Circle}