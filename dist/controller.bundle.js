"use strict";
(self["webpackChunktop_dropdown"] = self["webpackChunktop_dropdown"] || []).push([["controller"],{

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropDown": () => (/* binding */ dropDown)
/* harmony export */ });
let dropDown = (ele, arr) => {
    let menuEle = document.querySelector(".menu_wrap");

    ele.addEventListener("click", (e) => {
        menuItems(menuEle, arr);
    })

    return menuEle;
}

let menuItems = (ele, arr) => {
    let newEle = ele;
    let menuArr = [...arr];

    if (ele.children.length === 1) {
        for (let i in menuArr) {
            let menuEle = document.createElement("div");
            let linkEle = document.createElement("a");
    
            menuEle.setAttribute("class", "menu_item");
    
            linkEle.setAttribute("href", "javascript: void(0)");
            linkEle.setAttribute("class", `${menuArr[i].toLowerCase()}_item`);
            linkEle.innerHTML = menuArr[i];
    
            menuEle.appendChild(linkEle);
    
            newEle.appendChild(menuEle);
        }
    } else {
        let childLength = ele.children.length;

        for (let i = 1; i < childLength; i++){
            ele.removeChild(ele.lastChild);
        }
    }

    return newEle;
}



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controller.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGxlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyx5QkFBeUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3BfZHJvcGRvd24vLi9zcmMvY29udHJvbGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZHJvcERvd24gPSAoZWxlLCBhcnIpID0+IHtcbiAgICBsZXQgbWVudUVsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudV93cmFwXCIpO1xuXG4gICAgZWxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICBtZW51SXRlbXMobWVudUVsZSwgYXJyKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1lbnVFbGU7XG59XG5cbmxldCBtZW51SXRlbXMgPSAoZWxlLCBhcnIpID0+IHtcbiAgICBsZXQgbmV3RWxlID0gZWxlO1xuICAgIGxldCBtZW51QXJyID0gWy4uLmFycl07XG5cbiAgICBpZiAoZWxlLmNoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBmb3IgKGxldCBpIGluIG1lbnVBcnIpIHtcbiAgICAgICAgICAgIGxldCBtZW51RWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIGxldCBsaW5rRWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgXG4gICAgICAgICAgICBtZW51RWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWVudV9pdGVtXCIpO1xuICAgIFxuICAgICAgICAgICAgbGlua0VsZS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiamF2YXNjcmlwdDogdm9pZCgwKVwiKTtcbiAgICAgICAgICAgIGxpbmtFbGUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgYCR7bWVudUFycltpXS50b0xvd2VyQ2FzZSgpfV9pdGVtYCk7XG4gICAgICAgICAgICBsaW5rRWxlLmlubmVySFRNTCA9IG1lbnVBcnJbaV07XG4gICAgXG4gICAgICAgICAgICBtZW51RWxlLmFwcGVuZENoaWxkKGxpbmtFbGUpO1xuICAgIFxuICAgICAgICAgICAgbmV3RWxlLmFwcGVuZENoaWxkKG1lbnVFbGUpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbGV0IGNoaWxkTGVuZ3RoID0gZWxlLmNoaWxkcmVuLmxlbmd0aDtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGNoaWxkTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZWxlLnJlbW92ZUNoaWxkKGVsZS5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ld0VsZTtcbn1cblxuZXhwb3J0IHsgZHJvcERvd24gfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=