const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const { Circle, Triangle, Square } = require('./lib/shapes');

//Create an array of questions
const questions = [
    {
        name: 'text',
        message: 'Please enter up to three characters for the text:'
    },
    {
        name: 'text_color',
        message: 'Please enter a color keyword or a hexadecimal number for the text color:'
    },
    {
        name: 'shape_color',
        message: 'Please enter a color keyword or a hexadecimal number for the shape color:'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape do you want?',
        choices: ['circle', 'triangle', 'square']
    }
];

//Create a function that will give me shape based on the answers 
function createShape() {
    inquirer.prompt(questions)
        .then((answers) => {
            switch (answers.shape) {
                case 'circle':
                    console.log('Creating file...');
                    const newCircle = new Circle(answers.text, answers.text_color);
                    newCircle.setColor(answers.shape_color);
                    writeSvg(newCircle);

                    break;
                case 'triangle':
                    console.log('Creating file...');
                    const newTriangle = new Triangle(answers.text, answers.text_color);
                    newTriangle.setColor(answers.shape_color);
                    writeSvg(newTriangle);

                    break;
                default:
                    console.log('Creating file...')
                    const newSquare = new Square(answers.text, answers.text_color);
                    newSquare.setColor(answers.shape_color);
                    writeSvg(newSquare);
            };
        });
};

//Create a function to create the svg file 
function writeSvg(chosenShape) {
    fs.writeFile('logo.svg', chosenShape.render(), (err) => {
        if (err) throw err;
        else {
            console.log('Generated logo.svg');
        };
    });
};


createShape()
