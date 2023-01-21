"use strict";
(self["webpackChunktop_dropdown"] = self["webpackChunktop_dropdown"] || []).push([["controler"],{

/***/ "./src/controler.js":
/*!**************************!*\
  !*** ./src/controler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dropDown": () => (/* binding */ dropDown)
/* harmony export */ });
let dropDown = (ele) => {
    let menuEle = document.querySelector(".menu_wrap");

    ele.addEventListener("click", (e) => {
        console.log("Works!", e.target)
        menuItems(menuEle);
    })

    return menuEle;
}

let menuItems = (ele) => {
    let newEle = ele;
    let menuArr = ["Home", "Shop", "My Account", "Payment Settings", "Log Out"];

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/controler.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMseUJBQXlCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjs7QUFFQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX2Ryb3Bkb3duLy4vc3JjL2NvbnRyb2xlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgZHJvcERvd24gPSAoZWxlKSA9PiB7XG4gICAgbGV0IG1lbnVFbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1lbnVfd3JhcFwiKTtcblxuICAgIGVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJXb3JrcyFcIiwgZS50YXJnZXQpXG4gICAgICAgIG1lbnVJdGVtcyhtZW51RWxlKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIG1lbnVFbGU7XG59XG5cbmxldCBtZW51SXRlbXMgPSAoZWxlKSA9PiB7XG4gICAgbGV0IG5ld0VsZSA9IGVsZTtcbiAgICBsZXQgbWVudUFyciA9IFtcIkhvbWVcIiwgXCJTaG9wXCIsIFwiTXkgQWNjb3VudFwiLCBcIlBheW1lbnQgU2V0dGluZ3NcIiwgXCJMb2cgT3V0XCJdO1xuXG4gICAgaWYgKGVsZS5jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBtZW51QXJyKSB7XG4gICAgICAgICAgICBsZXQgbWVudUVsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBsZXQgbGlua0VsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgIFxuICAgICAgICAgICAgbWVudUVsZS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1lbnVfaXRlbVwiKTtcbiAgICBcbiAgICAgICAgICAgIGxpbmtFbGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImphdmFzY3JpcHQ6IHZvaWQoMClcIik7XG4gICAgICAgICAgICBsaW5rRWxlLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGAke21lbnVBcnJbaV0udG9Mb3dlckNhc2UoKX1faXRlbWApO1xuICAgICAgICAgICAgbGlua0VsZS5pbm5lckhUTUwgPSBtZW51QXJyW2ldO1xuICAgIFxuICAgICAgICAgICAgbWVudUVsZS5hcHBlbmRDaGlsZChsaW5rRWxlKTtcbiAgICBcbiAgICAgICAgICAgIG5ld0VsZS5hcHBlbmRDaGlsZChtZW51RWxlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBjaGlsZExlbmd0aCA9IGVsZS5jaGlsZHJlbi5sZW5ndGg7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBjaGlsZExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGVsZS5yZW1vdmVDaGlsZChlbGUubGFzdENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdFbGU7XG59XG5cbmV4cG9ydCB7IGRyb3BEb3duIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9