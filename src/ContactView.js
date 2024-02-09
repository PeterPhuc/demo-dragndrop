class ContactView {
    #posX;
    #posY;
    #sizeX;
    #sizeY;
    #imageBox;
    #body;

    #screenX;
    #screenY;

    constructor() {
        this.#imageBox = document.querySelector(".wrapper .image");
        this.#body = document.querySelector('body');
        this.setCurrentPositionImage();
        this.init();
    }
    init () {
        const isPositionChange = JSON.parse(localStorage.getItem("Position"));
        this.reStyle(isPositionChange.left, isPositionChange.top);
    }

    getPos () {
        return {
            posX: this.#posX,
            posY: this.#posY
        }
    }    

    onMouseDown() {
        const _this = this;
        this.#imageBox.addEventListener('mousedown', function(e){
            e.preventDefault();
            if(e.button == 0) {
                _this.setCurrentPositionImage();
                _this.onMouseMove(e.clientX - _this.getPos().posX, e.clientY - _this.getPos().posY);
            }
        })
    }
    onMouseMove(distanceX, distanceY) {
        const _this = this;
        function Wrap (e) {
            e.preventDefault();
            _this.HandleMouseMove(distanceX, distanceY, e);
        }
        this.#body.addEventListener('mousemove', Wrap)
        this.#body.addEventListener('mouseup', function(e){
            this.removeEventListener('mousemove', Wrap);
        })
        this.#body.addEventListener('mouseleave', function(e){
            this.removeEventListener('mousemove', Wrap);
        })
    }

    HandleMouseMove (distanceX, distanceY, e) {
        const Position = {
            'top' :  e.clientY - distanceY,
            'left' :  e.clientX - distanceX
        }
        localStorage.setItem("Position", JSON.stringify(Position));

        this.reStyle(e.clientX - distanceX, e.clientY - distanceY);
    }

    setCurrentPositionImage () {
        const $ = window.getComputedStyle(this.#imageBox);
        this.#posX = this.#imageBox.offsetLeft;
        this.#posY = this.#imageBox.offsetTop;

        console.log(this.#posX, this.#posY);
    }

    reStyle (x, y) {
        this.#imageBox.style.cssText = `
            top: ${y}px;
            left: ${x}px;
        `;

        this.#posX = x;
        this.#posY = y;
    }

    setSizeOfScreen () {
        const $ = window.getComputedStyle(this.#body);
        this.#screenX = +$.width.split("px")[0];
        this.#screenY = +$.height.split("px")[0];
    }
}

export default ContactView;