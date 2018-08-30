import throttle from 'lodash.throttle';
import Component from './component.js'

export default class Affix extends Component{
    constructor(element, options) {
        super(element);
        const defaultOptions = {
            topOffset: 0, // Pixels from top of page to affix element.
            topDelay: 0, // Pixels to scroll down before affix element.
            className: "affix", // CSS class name to add after affixed.
            stopElement: null, // CSS class of stopper element.
            onScrollBack: false, // Affix only on scroll to top?
            callback: null // Callback function when affixed.
        };
        this.options = defaultOptions;
        this.elements = [];
        if (options) {
            this.options = {
                ...this.options,
                ...options
            };
        }
        this.render();
    }

    calcPosition(element) {
        let position = element.getBoundingClientRect();
        let fromTop = window.pageYOffset || document.documentElement.scrollTop;
        return position.top + fromTop;
    }

    loopElements() {
        this.element.forEach(element => {
            this.elements.push({
                node: element,
                startTopPosition: this.calcPosition(element),
                height: element.offsetHeight
            });
        });
    }

    addAffix(element) {
        element.node.classList.add(this.options.className);
        this.options.callback ? this.options.callback() : null;
    }

    removeAffix(element) {
        element.node.classList.remove(this.options.className);
    }

    render() {

        let stopperPosition = null;
        let lastPosition = window.pageYOffset || document.documentElement.scrollTop;
        
        this.loopElements();

        if(this.options.stopElement) {
            let stopper = this.grabElement(this.options.stopElement);
            stopperPosition = this.calcPosition(stopper[0]);
        }

        window.addEventListener("scroll", throttle(() => {
            this.elements.forEach(element => {
                let fromTop = window.pageYOffset || document.documentElement.scrollTop;
                let affixPosition = fromTop + this.options.topOffset - this.options.topDelay - element.height;

                this.options.onScrollBack ? lastPosition > fromTop && affixPosition > element.startTopPosition ? this.addAffix(element) : this.removeAffix(element) : affixPosition > element.startTopPosition ? this.addAffix(element) : this.removeAffix(element);

                stopperPosition && stopperPosition <= fromTop + element.height ? this.removeAffix(element) : null;

                lastPosition = window.pageYOffset || document.documentElement.scrollTop;
            });
        },100));
    }
}