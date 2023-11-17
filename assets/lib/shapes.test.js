// Jest tests for shapes 
const {Triangle, Square, Circle} = require('./shapes');

describe('Triangle', () => {
    
    // Triangle test
    test('renders SVG correctly', () => {
        const triangle = new Triangle();
        
        // sets test values
        const color = 'red';
        const textColor = 'green';
        const characters = 'ABC';

        triangle.setColor(color)
        triangle.setTextColor(textColor)
        triangle.setCharacters(characters)

        // checks if properties are set correctly
        expect(triangle.color).toBe(color);
        expect(triangle.textColor).toBe(textColor);
        expect(triangle.characters).toBe(characters);
    });


    test('renders SVG correctly', () => {
        // Square test
        const square = new Square();
        
        // sets test values
        const color = 'red';
        const textColor = 'green';
        const characters = 'ABC';

        square.setColor(color)
        square.setTextColor(textColor)
        square.setCharacters(characters)

        // checks if properties are set correctly
        expect(square.color).toBe(color);
        expect(square.textColor).toBe(textColor);
        expect(square.characters).toBe(characters);
    });


    test('renders SVG correctly', () => {
        // Circle test
        const circle = new Circle();
        
        // sets test values
        const color = 'red';
        const textColor = 'green';
        const characters = 'ABC';

        circle.setColor(color)
        circle.setTextColor(textColor)
        circle.setCharacters(characters)

        // checks if properties are set correctly
        expect(circle.color).toBe(color);
        expect(circle.textColor).toBe(textColor);
        expect(circle.characters).toBe(characters);
    });
})
