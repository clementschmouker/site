

export default class CS_grid {

    constructor(params) {
        console.log('init grid')

        this.$els = {
            body: document.querySelector('body')
        }

        this.baseValues = {
            colNumber : 9,
            gutWidth : 20,
            maxWidth : 1024,
            margin : '50px',
        };

        // base col number is 9
        this.colNumber = (params.colNumber > 0) ? params.colNumber : this.baseValues.colNumber;
        this.gutNumber = this.colNumber - 1;
        this.gutWidth = (params.gutWidth > 0) ? params.gutWidth : this.baseValues.gutWidth;
        
        this.maxWidth = (params.maxWidth > 0) ? params.maxWidth : this.baseValues.maxWidth;
        this.margin = (params.margin > 0) ? params.margin : this.baseValues.margin;

        this.isOpen = false;

        this.createElements()
        this.bindEvents()
    }




    createElements() {
        this.gridCtn = document.createElement('div');
        this.gridCtn.classList.add('grid-container');        
        // grid CTN style
        this.gridCtn.style.display = 'flex';
        this.gridCtn.style.justifyContent = 'space-between';
        this.gridCtn.style.paddingLeft = this.margin;
        this.gridCtn.style.paddingRight = this.margin;
        this.gridCtn.style.maxWidth = this.maxWidth + 'px';
        this.gridCtn.style.width = '100vw';
        this.gridCtn.style.height = '100vh';
        this.gridCtn.style.position = 'fixed';
        this.gridCtn.style.top = '0';
        this.gridCtn.style.left = '50%';
        this.gridCtn.style.transformOrigin = 'top center';
        this.gridCtn.style.transform = 'translateX(-50%) scaleY(0)';
        this.gridCtn.style.pointerEvents = 'none';
        this.gridCtn.style.background = 'rgba(186, 218, 85, .3)';
        this.gridCtn.style.transition = 'all .3s ease-out';


        this.gridCols = []
        for (var i = 0; i < this.colNumber; i += 1) {
            const col = document.createElement('span');
            col.classList.add('grid-column');
            // grid COL style
            col.style.display = 'block';
            col.style.width = (this.maxWidth / this.colNumber) - this.gutWidth + 'px';
            col.style.height = '100%';
            col.style.background = 'rgba(0, 255, 0, .5)';

            this.gridCtn.appendChild(col);
        }
        // Appends grid to DOM
        this.$els.body.appendChild(this.gridCtn);
    }




    bindEvents() {
        window.addEventListener('keydown', (e) => {
            if (e.key == 'g') {
                this.onKeyPressed()
            }
        })
    }

    onKeyPressed() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.gridCtn.style.transform = 'translateX(-50%) scaleY(1)';
        } else {
            this.gridCtn.style.transform = 'translateX(-50%) scaleY(0)';
        }
    }

}