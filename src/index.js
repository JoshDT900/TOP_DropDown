import { dropDown } from "./controller.js";
import css from "./style.css"

let pageRender = () => {
    let bodyEle = document.querySelector("body")

    let menuWrapEle = document.createElement("div");
    menuWrapEle.setAttribute("class", "menu_wrap");
    bodyEle.appendChild(menuWrapEle);

    let menuItemEle = document.createElement("div");
    menuItemEle.setAttribute("class", "menu_item");
    menuWrapEle.appendChild(menuItemEle)

    let menuItemAnchEle = document.createElement("a");
    menuItemAnchEle.setAttribute("href", "javascript: void(0)");
    menuItemAnchEle.setAttribute("class", "menu_drop");
    menuItemAnchEle.innerHTML = "Drop Down Menu"
    menuItemEle.appendChild(menuItemAnchEle);

    let menuArr = ["Home", "Shop", "My Account", "Payment Settings", "Log Out"]
    dropDown(menuItemEle, menuArr);
}

(() => {
    pageRender();
})();