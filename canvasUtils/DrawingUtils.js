"use strict";

class DrawingUtils {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.DOMObject.getContext("2d");
    }

    rotated(angle, origin) {
        const newDrawingUtils = new DrawingUtils(this.canvas);

        origin = origin ?? [0, 0];

        newDrawingUtils.ctx.translate(origin[0], origin[1]);
        newDrawingUtils.ctx.rotate(angle);
        newDrawingUtils.ctx.translate(-origin[0], -origin[1]);

        return newDrawingUtils;
    }

    useRotated(angle, origin, func) {
        this.ctx.save();

        this.ctx.translate(origin[0], origin[1]);
        this.ctx.rotate(angle);
        this.ctx.translate(-origin[0], -origin[1]);

        func(this);

        this.ctx.restore();

        return this;
    }

    clear() {
        this.ctx.clearRect(...this.canvas.rect.toArray());

        return this;
    }

    rect(color, rect, width) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();

        this.ctx.rect(...rect);

        this.ctx.closePath();

        if (width == null) this.ctx.fill();
        else {
            this.ctx.lineWidth = width;
            this.ctx.stroke();
        }

        return this;
    }

    fill(color) {
        this.rect(color, this.canvas.rect.toArray());

        return this;
    }

    circle(color, pos, radius, width) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();

        this.ctx.arc(...pos, radius, 0, 2 * Math.PI);

        this.ctx.closePath();

        if (width == null) this.ctx.fill();
        else {
            this.ctx.lineWidth = width;
            this.ctx.stroke();
        }

        return this;
    }

    line(color, startPos, endPos, width = 1) {
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = color;

        this.ctx.beginPath();

        this.ctx.moveTo(...startPos);
        this.ctx.lineTo(...endPos);

        this.ctx.closePath();

        this.ctx.stroke();

        return this;
    }

    poly(color, points, width) {
        this.ctx.strokeStyle = color;
        this.ctx.fillStyle = color;

        this.ctx.beginPath();

        this.ctx.moveTo(...points[points.length - 1]);
        points.forEach(point => this.ctx.lineTo(...point));
        
        this.ctx.closePath();

        if (width == null) this.ctx.fill();
        else {
            this.ctx.lineWidth = width;
            this.ctx.stroke();
        }

        return this;
    }

    image(image, ...args) {
        this.ctx.drawImage(image, ...args);

        return this;
    }
}

export default DrawingUtils;
