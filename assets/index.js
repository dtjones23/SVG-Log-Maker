// npm init -y
// npm inquirer
// npm jest
// Import modules - fs and inquirer
const fs = require('fs').promises
const inquirer = require('inquirer')
const {Triangle} = require('./lib/shapes')

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
    // function that generates 
    
    switch (answers.shape) {
        case 'triangle':
            const triangle = new Triangle();
            triangle.setColor(answers['shape-color']);
            triangle.setTextColor(answers['text-color']);
            triangle.setCharacters(answers.characters);
            // sets the colors based on user input

            return triangle.render()

        
        default:
            throw new Error('have to select a color')
    }
}

init()