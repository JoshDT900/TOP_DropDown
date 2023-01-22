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

export { dropDown };