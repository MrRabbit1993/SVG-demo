class Vector {
    constructor(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }
    square() {
        return this.x ** 2 + this.y ** 2;
    }
    length() {
        return Math.sqrt(this.square());
    }
    add(q) {
        return new Vector(this.x + q.x, this.y + q.y)
    }
    minus(q) {
        return new Vector(this.x - q.x, this.y - q.y)
    }
    multiply(scale) {
        return new Vector(this.x * scale, this.y * scale)
    }
    //标准化: 乘以一个方向向量，相当于length在某向量上的投影
    normalize(length) {
        if (length == undefined) {
            length = 1;
        }
        return this.multiply(length / this.length());
    }
    static fromPoints(p1, p2) { //静态方法
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    };
}