import Wave from './Wave';

export default class Waves {

    constructor() {

        this.$els = {
            waves: document.querySelectorAll('.header__wave'),
        }

        this.waves = [];

        for (let i = 0; i < this.$els.waves.length; i += 1){
            this.waves.push(new Wave(this.$els.waves[i], i));
        }

        console.log(this.waves);

        this.updateAll()
    }


    updateAll() {

        this.waves.map((item) => {
            item.update();
        })

        window.requestAnimationFrame(() => {
            this.updateAll();
        });
    }

}