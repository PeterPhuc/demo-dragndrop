import DeviceOne from "./deviceOne.js";
import DeviceTwo from "./deviceTwo.js";

// CheckActiveDevice quyết định xài hàm nào
function CheckActiveDevice() {
    const getFirstDevice = localStorage.getItem("firstDevice");
    const getSecondDevice = localStorage.getItem("secondDevice");

    if(!getFirstDevice || getFirstDevice == "Closed") {
        localStorage.setItem("firstDevice", "Activated");
        DeviceOne();
    }
    else if(!getSecondDevice || getSecondDevice == "Closed") {
        localStorage.setItem("secondDevice", "Activated");
        DeviceTwo();
    }
}
CheckActiveDevice();