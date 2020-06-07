//辅助类 Vector: 向量==矢量，有方向的标量;
(function () {
    function Vector(x, y) {
        this.x = x || 0;
        this.y = y || 0;
    }

    Vector.prototype = {
        constructor: Vector,
        square: function () {
            return this.x ** 2 + this.y ** 2;
        },
        length: function () {
            return Math.sqrt(this.square());
        },
        add: function (q) {
            return new Vector(this.x + q.x, this.y + q.y)
        },
        minus: function (q) {
            return new Vector(this.x - q.x, this.y - q.y)
        },
        multiply: function (scale) {
            return new Vector(this.x * scale, this.y * scale)
        },

        //标准化: 乘以一个方向向量，相当于length在某向量上的投影
        normalize: function (length) {
            if (length == undefined) {
                length = 1;
            }
            return this.multiply(length / this.length());
        }
    };
    Vector.fromPoints = function (p1, p2) { //函数可以有自己的方法
        return new Vector(p2.x - p1.x, p2.y - p1.y);
    };
    window.Vector = Vector;
})();