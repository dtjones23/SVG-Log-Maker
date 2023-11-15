// npm init -y
// npm inquirer
// npm jest
// Import modules - fs and inquirer
const fs = require('fs').promises
const inquirer = require('inquirer')

// Add questions
async function init() {
    try {
        const answers = await inquirer.prompt([
            {
                type: 'number',
                name: 'characters?',
                message: 'Enter number of characters for logo(no more than 3)?'
            },
            {
                type:'input',
                name:'text color',
                message: 'Enter a color for text.'
            },
            {
                type: 'input',
                name: 'shape',
                message: 'Select a shape',
                choices: ['circle','square','triangle']
            },
            {
                type: 'input',
                name: 'shape-color',
                message: 'Enter a color.' // add (OR a hexadecimal number)
            }
        ])

        // function to create logo file
        await fs.writeFile('logo.svg', JSON.stringify([answers]))

        // logs when successful
        console.log('Generated logo.svg');
    } catch (error) {
        console.error(error);
    }

}

init()