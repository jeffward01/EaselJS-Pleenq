(createjs.Graphics.Polygon = function (x, y, points) {
    this.x = x;
    this.y = y;
    this.points = points;
}).prototype.exec = function (ctx) {
    // Start at the end to simplify loop
    var end = this.points[this.points.length - 1];
    ctx.moveTo(end.x, end.y);
    this.points.forEach(function (point) {
        ctx.lineTo(point.x, point.y);
    });
};
createjs.Graphics.prototype.drawPolygon = function (x, y, args) {
    var points = [];
    if (Array.isArray(args)) {
        args.forEach(function (point) {
            point = Array.isArray(point) ? {
                x: point[0],
                y: point[1]
            } : point;
            points.push(point);
        });
    } else {
        args = Array.prototype.slice.call(arguments).slice(2);
        var px = null;
        args.forEach(function (val) {
            if (px === null) {
                px = val;
            } else {
                points.push({
                    x: px,
                    y: val
                });
                px = null;
            }
        });
    }
    return this.append(new createjs.Graphics.Polygon(x, y, points));
};

var stage = new createjs.Stage("display");
stage.enableMouseOver(20);

var image = new createjs.Bitmap("../img/wheel.png");

image.scaleX = 300/400;
image.scaleY = 263/351;
                   
                   
stage.addChild(image);

createPoly(stage);


createjs.Ticker.addEventListener("tick", function () {
    stage.update();
});

function createPoly(stage) {
    var poly1 = new createjs.Shape();

    var hitArea = new createjs.Shape();

    hitArea.graphics.beginFill("#000").drawPolygon(100, 263, 138, 4, 117, 9, 94, 22, 45, 56, 22, 84, 12, 110, 13, 130, 18, 154, 31, 174, 38, 190, 55, 206, 83, 223, 103, 238, 125, 247, 136, 256, 159, 257, 169, 253, 193, 243, 239, 213, 260, 187, 277, 156, 277, 113, 259, 79, 238, 56, 200, 32, 187, 18, 164, 7);

    poly1.graphics.beginFill("#2db674").drawPolygon(100, 263, 138, 4, 117, 9, 94, 22, 45, 56, 22, 84, 12, 110, 13, 130, 18, 154, 31, 174, 38, 190, 55, 206, 83, 223, 103, 238, 125, 247, 136, 256, 159, 257, 169, 253, 193, 243, 239, 213, 260, 187, 277, 156, 277, 113, 259, 79, 238, 56, 200, 32, 187, 18, 164, 7);

    poly1.alpha = 0;
    poly1.hitArea = hitArea;

    poly1.addEventListener("mouseover", function () {
        poly1.alpha = .65;

        // image.ColorFilter(0,0,0,1, 0,0,255,0);
        stage.update();
    });


    poly1.addEventListener("mouseout", function () {
        poly1.alpha = 0;
        stage.update();
    });

    poly1.addEventListener("click", function () {
        window.open("http://www.sharkwheel.com/",true);
    });

    stage.addChild(poly1);
    stage.update();
    debugger;
}