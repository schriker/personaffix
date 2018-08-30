export default class Component {
    constructor(element) {
        this.element = this.grabElement(element);
    }
    grabElement(element) {
        if (typeof element == "string") {
            element = document.querySelectorAll(element);
            if (element.length === 0) {
                console.error("Couldn't find element of that selector :(");
                return;
            }
        }
        if (!element || element.length === 0) {
            console.error("Please provide a correct element!");
            return;
        }
        return element;
    }
}