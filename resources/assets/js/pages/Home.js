
import TweenMax from 'gsap';

export default class Home {

    constructor() {
        this.$els = {
            logo:           document.querySelector('.header__logo'),
            title:          document.querySelector('.header__title__main'),
            subtitle:       document.querySelector('.header__title__sub'),
            titleDecorator: document.querySelector('.header__title__decorator'),
            spans:          document.querySelectorAll('.header__title span'),
            //shuttle
            shuttle:        document.querySelector('.spaceshuttle'),
            exploreBtn:     document.querySelector('.explore-button'),
        }

        this.lightsOnThreshold = document.querySelector('.section__first').getBoundingClientRect().top + window.pageYOffset;

        this.shuttleLaunched = false;

        this.initTitle()
        this.bindEvents()
    }


    initTitle() {

        for (let i = 0; i < this.$els.spans.length; i += 1) {
            this.$els.spans[i].classList.add('hide');
        }

        TweenMax.fromTo(this.$els.logo, 0.2, {
            y: "-50%",
            opacity: 0,
            ease: Power2.easeOut,
            force3D: true,
        }, {
            y: "0%",
            opacity: 1,

            onComplete: () => {
                this.animateTitle();
            }
        });
    }

    animateTitle() {
        TweenMax.staggerFromTo(this.$els.spans, 0.5, {
            y: "100%",
            opacity: 0,
            force3D: true,
        }, {
            y: "0%",
            opacity: 1,
        }, 0.2, () => {
            TweenMax.to(this.$els.titleDecorator, 0.5, {
                scaleX: 1,
            })
        })
    }



    bindEvents() {
        this.$els.exploreBtn.addEventListener('click', () => {
            this.dropShuttle();
            this.shuttleLaunched = true;
        })

        window.addEventListener('scroll', () => {
            if (!this.shuttleLaunched) {
                this.dropShuttle();
                this.shuttleLaunched = true;
            }

            if (window.pageYOffset + window.innerHeight / 2 > this.lightsOnThreshold) {
                this.flickrShuttleLights();
            }
        })
    }




    dropShuttle() {

        TweenMax.to(this.$els.shuttle, 2.4, {
            y: window.innerHeight + 200,
            x: -window.innerWidth * 3 / 5,
            ease: Power4.easeOut,
            force3D: true,
        })
    }



    flickrShuttleLights() {
        this.$els.shuttle.classList.add('lights-on');
    }

}
