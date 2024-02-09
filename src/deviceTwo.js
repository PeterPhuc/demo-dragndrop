import ContactView from "./ContactView.js";

export default function DeviceTwo() {
    let device = 2;

    // Tắt device 2, Nếu nó đã bị biến thành 1 thì set lại 1, nếu vẫn còn nguyên zin ==> Tắt Bềnh thường
    window.addEventListener("beforeunload", (event) => {
        localStorage.setItem("secondDevice", "Closed");
        const isDeviceOneActivating = localStorage.getItem("firstDevice");
        if(isDeviceOneActivating == "Activated") {
            return;
        }
        // localStorage.setItem("Position", JSON.stringify({
        //     'top' :  0,
        //     'left' :  0
        // }));
    });

    window.addEventListener("storage", (event)=> {
        // Nhận Position
        const chose = (+localStorage.getItem("firstScreen")) * -1;
        const isPositionChange = JSON.parse(localStorage.getItem("Position"));
        contactView.reStyle(isPositionChange.left + chose, isPositionChange.top);
    });

    const contactView = new ContactView();
    contactView.onMouseDown();
}