// ---------------------------------------
// HOME
// ----------------------------------------


export default class Flakes {

    constructor() {

        this.canvas = document.querySelector('.header__canvas');
        this.setupCanvas();
        this.createFlakes();
        
        this.renderFlakes();
    }


    setupCanvas() {
        this.ctx = this.canvas.getContext('2d');

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.tempCanvas = document.createElement('canvas');
        this.tempCtx = this.tempCanvas.getContext('2d');
        this.flakeSize = 20;
        this.tempCanvas.width = this.flakeSize / 2;
        this.tempCanvas.height = this.flakeSize / 2;
        this.tempCtx.arc(this.flakeSize / 4, this.flakeSize / 4, this.flakeSize / 4, 0, Math.PI*2);
        this.tempCtx.fill();
    }
    
    createFlakes() {
        function Flake() {
            this.x = Math.random() * window.innerWidth;
            this.y = Math.random() * window.innerHeight;
            this.scale = Math.random();
            this.opacity = Math.random();
            this.size = 10;
            this.velocity = {
                x: (Math.random() - 0.5) *2,
                y: Math.random() + 0.1,
            }
            this.update = (context, tempCanvas) => {
                context.globalAlpha = this.opacity;
                this.x += this.velocity.x;
                this.y -= this.velocity.y;

                context.drawImage(tempCanvas,
                                   this.x,
                                   this.y,
                                   this.scale*tempCanvas.width,
                                   this.scale*tempCanvas.height);

                if (this.y < -this.size) {
                    this.y = window.innerHeight - this.size;
                }
                if (this.x > window.innerWidth) {
                    this.x = -this.size;
                }
                if (this.x < -this.size) {
                    this.x = window.innerWidth - this.size;
                }
            }
        }

        this.flakeArray = [];
        this.flakeNumber = 125;
        for (var i = 0; i < this.flakeNumber; i += 1) {
            this.flakeArray.push(new Flake());
        }
    }


    renderFlakes() {
        this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        for (let i = 0; i < this.flakeArray.length; i += 1) {
            this.flakeArray[i].update(this.ctx, this.tempCanvas);
        }

        setTimeout(() => {
            this.renderFlakes()
        }, 1000/60)
    }

}
