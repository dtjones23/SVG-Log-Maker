// npm init -y
// npm inquirer
// npm jest
// Import modules - fs and inquirer
const fs = require('fs').promises
const inquirer = require('inquirer')
const {Triangle, Square, Circle} = require('./lib/shapes')

// Add questions
async function init() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'list',
                name: 'shape',
                message: 'Select a shape.',
                choices: ['circle','square','triangle']
            },
            {
                type: 'input',
                message: 'Enter up to 3 characters for logo.',
                name: 'characters',
            },
            {
                type: 'input',
                name: 'shape-color',
                message: 'Enter a color (OR a hexadecimal number) for shape.'
            },
            {
                type:'input',
                name:'text-color',
                message: 'Enter a color for text.'
            },
        ])
        const markdown = getSvgCode(answers)
        // gets the svg based on selected shape

        await fs.writeFile('logo.svg', markdown)
        // function to create logo file

        // logs when successful
        console.log('Generated logo.svg');
    } catch (error) {
        console.error(error);
    }
}

function getSvgCode(answers) {
    // function that generates the shapes and their properties

    switch (answers.shape) {
        case 'triangle':
            const triangle = new Triangle();
            triangle.setColor(answers['shape-color']);
            triangle.setTextColor(answers['text-color']);
            // sets the colors based on user input

            triangle.setCharacters(answers.characters);
            // sets the number of characters based on user input

            return triangle.render()

        case 'square':
            const square = new Square();
            square.setColor(answers['shape-color']);
            square.setTextColor(answers['text-color']);
            // sets the colors based on user input

            square.setCharacters(answers.characters);
            // sets the number of characters based on user input

            return square.render()

        case 'circle':
            const circle = new Circle();
            circle.setColor(answers['shape-color']);
            circle.setTextColor(answers['text-color']);
            // sets the colors based on user input

            circle.setCharacters(answers.characters);
            // sets the number of characters based on user input

            return circle.render()

        default:
    }
}

init()