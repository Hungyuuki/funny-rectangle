class Rectangle {
    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    constructor(width, height, canvas) {
        this._width = width;
        this._height = height;
        this.canvas = canvas;
    }

    draw() {
        if (this.width === 0 || this.height === 0) {
            //do nothing
        } else {
            const DISPLAY_BASE_X = 20;
            const DISPLAY_BASE_Y = 20;
            let context = this.canvas.getContext('2d');
            context.clearRect(0, 0, this.canvas.width, this.canvas.height);
            console.log('draw');
            context.beginPath();
            context.moveTo(DISPLAY_BASE_X, DISPLAY_BASE_Y);
            context.lineTo(DISPLAY_BASE_X + this.width, DISPLAY_BASE_Y);
            context.lineTo(DISPLAY_BASE_X + this.width, DISPLAY_BASE_Y + this.height);
            context.lineTo(DISPLAY_BASE_X, DISPLAY_BASE_Y + this.height);
            context.lineTo(DISPLAY_BASE_X, DISPLAY_BASE_Y);
            context.fillStyle='green';
            context.fill();

        }
    }
}