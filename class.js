class Polygon {
    constructor(width,height) {
        this.name = 'Polygon';
        this.height = height || 1;
        this.width = width || 1;
    }
    sayName() {
        console.log('Hi, I am a ', this.name + '.');
    }
}

class Square extends Polygon {
    constructor(width, height) {
        super(width, height);// 调用父类的构造函数
        console.log(this.width, this.height)
    }
}

const squre = new Square(20,10);
