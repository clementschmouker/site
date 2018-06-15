

export default class CS_grid {

    constructor(params) {
        this.$els = {
            body: document.querySelector('body')
        }

        this.baseValues = {
            colNumber : 9,
        };

        // base col number is 9
        this.colNumber = (params.colNumber > 0) ? params.colNumber : this.baseValues.colNumber;

        this.createElements()
        this.bindEvents()
    }




    createElements() {
        this.gridCtn = document.createElement('div');
        this.gridCtn.classList.add('grid-container');        
        this.gridCols = []
        for (var i = 0; i < this.colNumber; i += 1) {
            const col = document.createElement('span');
            col.classList.add('grid-column');
            
            this.gridCtn.appendChild(col);
        }
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
        this.gridCtn.classList.toggle('is-open');
    }

}