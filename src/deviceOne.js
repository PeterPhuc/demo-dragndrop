import ContactView from "./ContactView.js";

export default function DeviceOne() {
    let device = 1;

    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem("firstDevice", "Closed");
        const isDeviceTwoActivating = localStorage.getItem("secondDevice");
        if(isDeviceTwoActivating == "Activated") {
            return;
        }
    });

    window.addEventListener("storage", (event)=> {
        // Nhận Position
        const chose = (+localStorage.getItem("firstScreen")) * -1;
        const isPositionChange = JSON.parse(localStorage.getItem("Position"));
        contactView.reStyle(isPositionChange.left - chose, isPositionChange.top);
    });

    function Size() {
        const $ = window.getComputedStyle(document.querySelector('body'));
        const screen = $.width.split("px")[0];
        localStorage.setItem("firstScreen", screen);
    }
    window.addEventListener("resize", (event)=> {
        Size();
    });

    const contactView = new ContactView();
    contactView.onMouseDown();
    Size();
}