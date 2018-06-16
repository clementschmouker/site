

import TwenMax from 'gsap';

export default class Parallax {
    
    constructor() {
        this.$els = {
            parallaxedItems : document.querySelectorAll('.parallaxed-item'),
        }

        this.getDatas()
        this.bindEvents()
    }

    // Handlers
    bindEvents() {
        window.addEventListener('scroll', () => {
            this.prlx.map((item) => {
                this.value = -((window.pageYOffset - item.offsetTop) * item.speed) / 10

                TweenMax.to(item.el, 0.3, {
                    y: this.value,
                    force3D: true,
                })

                return item
            })
        })
    }

    getDatas() {
        this.prlx = []

        for (let i = 0; i < this.$els.parallaxedItems.length; i += 1) {
            this.prlx.push({
                el: this.$els.parallaxedItems[i],
                offsetTop: this.$els.parallaxedItems[i].getBoundingClientRect().top + window.pageYOffset,
                speed: this.$els.parallaxedItems[i].getAttribute('data-speed'),
            })
        }

        console.log(this.prlx);
    }

}
