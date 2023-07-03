const { Circle, Triangle, Square } = require('./shapes')


describe('Test for render', () => {
    it('Should return a string for the corresponding SVG file with the given shape color', () => {
        const svg1 = "<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='80' fill='blue' /><text x='150' y='125' font-size='60' text-anchor='middle' fill='red'>ABC</text></svg>"
        const circleShape = new Circle( 'ABC', 'red');
        circleShape.setColor('blue');
        expect(circleShape.render()).toEqual(svg1);
    });
    it('Should return a string for the corresponding SVG file with the given shape color', () => {
        const svg2 = "<svg version='1.1' width='300' height='260' xmlns='http://www.w3.org/2000/svg'><polygon points='150,40 40,220 260,220' fill='blue' /><text x='150' y='160' font-size='60' text-anchor='middle' fill='green'>ABC</text></svg>";
        const triangleShape = new Triangle('ABC', 'green');
        triangleShape.setColor('blue');
        expect(triangleShape.render()).toEqual(svg2);
    });
    it('Should return a string for the corresponding SVG file with the given shape color', () => {
        const svg3 = "<svg version='1.1' width='300' height='300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='200' fill='blue' /><text x='150' y='175' font-size='60' text-anchor='middle' fill='orange'>ABC</text></svg>";
        const squareShape = new Square('ABC', 'orange');
        squareShape.setColor('blue');
        expect(squareShape.render()).toEqual(svg3);
    })
})