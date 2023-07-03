class Shapes {
    constructor(text, textColor) {
        this.color = '';
        this.text = text;
        this.textColor = textColor;
    };

    setColor(color) {
        this.color = color
    }
};

class Circle extends Shapes {
    render() {
        return `<svg version='1.1' width='300' height='200' xmlns='http://www.w3.org/2000/svg'><circle cx='150' cy='100' r='80' fill='${this.color}' /><text x='150' y='125' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text></svg>`
    }

};



class Triangle extends Shapes {

    render(){
        return `<svg version='1.1' width='300' height='260' xmlns='http://www.w3.org/2000/svg'><polygon points='150,40 40,220 260,220' fill='${this.color}' /><text x='150' y='160' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text></svg>`
    }

};

class Square extends Shapes {

    render(){
         return `<svg version='1.1' width='300' height='300' xmlns='http://www.w3.org/2000/svg'><rect x='50' y='50' width='200' height='200' fill='${this.color}' /><text x='150' y='175' font-size='60' text-anchor='middle' fill='${this.textColor}'>${this.text}</text></svg>`
    }

};



module.exports = { Circle, Triangle, Square }