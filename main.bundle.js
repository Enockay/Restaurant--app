"use strict";
(self["webpackChunkrestaurant_app"] = self["webpackChunkrestaurant_app"] || []).push([["main"],{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   displayMenu: () => (/* binding */ displayMenu),
/* harmony export */   setPrice: () => (/* binding */ setPrice)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



 function displayMenu(){
    //main container
    const div1 = document.createElement("div");
    div1.setAttribute("id", "menu");
    div1.classList.add("menu-container");

    //heading
    const head = document.createElement("h2");
    head.classList.add("head");
    head.textContent = "Explore Our Menu.";
    div1.appendChild(head);

    //menu grids
    const div = document.createElement("div");
    div.classList.add("menu-page");
    div1.appendChild(div);

  
   //food
    const div2 = document.createElement("div");
    div2.classList.add("food");
    div2.setAttribute("data-price", "100");
    div2.setAttribute("id", "food");
    div.appendChild(div2);

   
   const img1 = document.createElement("img");
   img1.classList.add("img1");
   img1.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
   div2.appendChild(img1);

   const name = document.createElement("h3");
   name.classList.add("name");
   name.textContent = "Meal  here Burger COST :$100"; 
  
   div2.appendChild(name);

   const div3 = document.createElement("div");
   div3.classList.add("food");
   div3.setAttribute("data-price", "500");
   div3.setAttribute("id", "food");
   div.appendChild(div3);

   const img2 = document.createElement("img");
   img2.classList.add("img1");
   img2.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
   div3.appendChild(img2);

   const name1 = document.createElement("h3");
   name1.classList.add("name");
   name1.textContent = "Meal  here is turn food  COST :$500";
   div3.appendChild(name1);

   const div4 = document.createElement("div");
   div4.classList.add("food");
   div4.setAttribute("id", "food");
   div4.setAttribute("data-price", "400");
   div.appendChild(div4);

   const img3 = document.createElement("img");
   img3.classList.add("img1");
   img3.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
   div4.appendChild(img3);

   const name2 = document.createElement("h3");
   name2.classList.add("name");
   name2.textContent = "Meal  here is turn food  COST :$400";
   div4.appendChild(name2);

   const div5 = document.createElement("div");
   div5.classList.add("food");
   div5.setAttribute("id", "food");
   div5.setAttribute("data-price", "100");
   div.appendChild(div5);

   const image = document.createElement("img");
   image.classList.add("img1");
   image.src = fish;

   div5.appendChild(image);
   
   const name3 = document.createElement("h3");
   name3.classList.add("name");
   name3.textContent = "Meal  here is chafool COST :$100";
   div5.appendChild(name3);

   const div6 = document.createElement("div");
   div6.classList.add("food");
   div6.setAttribute("id", "food");
   div6.setAttribute("data-price", "50");
   div.appendChild(div6);

   const img4 = document.createElement("img");
   img4.classList.add("img1");
   img4.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
   div6.appendChild(img4);

   const name4 = document.createElement("h3");
   name4.classList.add("name");
   name4.textContent = "Meal  here is kenyan meal COST :$50";
   div6.appendChild(name4);

   const div7 = document.createElement("div");
   div7.classList.add("food");
   div7.setAttribute("id", "food");
   div7.setAttribute("data-price", "100");
   div.appendChild(div7);

   const img5 = document.createElement("img");
   img5.classList.add("img1");
   img5.src = Object(function webpackMissingModule() { var e = new Error("Cannot find module './pictures'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
   div7.appendChild(img5);

   const name5 = document.createElement("h3");
   name5.classList.add("name");
   name5.textContent = "Meal  here is Animal Interstines COST :$100";
   div7.appendChild(name5);

   const footer = document.createElement("h3");
   footer.classList.add("head2");
   footer.textContent = "You can choose the meal you want its our pleasure to have you...";
   div1.appendChild(footer);
      
   

   setPrice();
   
    return div1
}

function setPrice(){
const PriceArray = [];

class price {
    constructor(price){
        this.price = price;
    }
    getPrice(){
        return this.price
    }
    setPrice(value){
        this.price = value;
    }
}



const prices = document.querySelectorAll(".food");
prices.forEach((item) => {
    item.addEventListener("click", function(){
     const itemPrice = new price(item.getAttribute("data-price"));
        PriceArray.push(itemPrice.price);
    })
})

console.log(PriceArray);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQThCO0FBQzZCOztBQUUzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyx5SUFBTTtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGNBQWMseUlBQUk7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyx5SUFBSztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyx5SUFBSztBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxjQUFjLHlJQUFPO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUM7O0FBRUQ7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtLWFwcC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7ZGlzcGxheU1lbnUsc2V0UHJpY2V9O1xuaW1wb3J0IHtCdXJnZXIsVHVybixwaG90byxtYXR1bWJvLHVnYWxpfSBmcm9tIFwiLi9waWN0dXJlc1wiO1xuXG4gZnVuY3Rpb24gZGlzcGxheU1lbnUoKXtcbiAgICAvL21haW4gY29udGFpbmVyXG4gICAgY29uc3QgZGl2MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGl2MS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1lbnVcIik7XG4gICAgZGl2MS5jbGFzc0xpc3QuYWRkKFwibWVudS1jb250YWluZXJcIik7XG5cbiAgICAvL2hlYWRpbmdcbiAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGhlYWQuY2xhc3NMaXN0LmFkZChcImhlYWRcIik7XG4gICAgaGVhZC50ZXh0Q29udGVudCA9IFwiRXhwbG9yZSBPdXIgTWVudS5cIjtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGhlYWQpO1xuXG4gICAgLy9tZW51IGdyaWRzXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChcIm1lbnUtcGFnZVwiKTtcbiAgICBkaXYxLmFwcGVuZENoaWxkKGRpdik7XG5cbiAgXG4gICAvL2Zvb2RcbiAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBkaXYyLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuICAgIGRpdjIuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZVwiLCBcIjEwMFwiKTtcbiAgICBkaXYyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZFwiKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZGl2Mik7XG5cbiAgIFxuICAgY29uc3QgaW1nMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICBpbWcxLmNsYXNzTGlzdC5hZGQoXCJpbWcxXCIpO1xuICAgaW1nMS5zcmMgPSBCdXJnZXI7XG4gICBkaXYyLmFwcGVuZENoaWxkKGltZzEpO1xuXG4gICBjb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgbmFtZS5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgIG5hbWUudGV4dENvbnRlbnQgPSBcIk1lYWwgIGhlcmUgQnVyZ2VyIENPU1QgOiQxMDBcIjsgXG4gIFxuICAgZGl2Mi5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBkaXYzLmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuICAgZGl2My5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaWNlXCIsIFwiNTAwXCIpO1xuICAgZGl2My5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RcIik7XG4gICBkaXYuYXBwZW5kQ2hpbGQoZGl2Myk7XG5cbiAgIGNvbnN0IGltZzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgaW1nMi5jbGFzc0xpc3QuYWRkKFwiaW1nMVwiKTtcbiAgIGltZzIuc3JjID0gVHVybjtcbiAgIGRpdjMuYXBwZW5kQ2hpbGQoaW1nMik7XG5cbiAgIGNvbnN0IG5hbWUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgbmFtZTEuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICBuYW1lMS50ZXh0Q29udGVudCA9IFwiTWVhbCAgaGVyZSBpcyB0dXJuIGZvb2QgIENPU1QgOiQ1MDBcIjtcbiAgIGRpdjMuYXBwZW5kQ2hpbGQobmFtZTEpO1xuXG4gICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIGRpdjQuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICBkaXY0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZFwiKTtcbiAgIGRpdjQuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZVwiLCBcIjQwMFwiKTtcbiAgIGRpdi5hcHBlbmRDaGlsZChkaXY0KTtcblxuICAgY29uc3QgaW1nMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICBpbWczLmNsYXNzTGlzdC5hZGQoXCJpbWcxXCIpO1xuICAgaW1nMy5zcmMgPSBwaG90bztcbiAgIGRpdjQuYXBwZW5kQ2hpbGQoaW1nMyk7XG5cbiAgIGNvbnN0IG5hbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgbmFtZTIuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICBuYW1lMi50ZXh0Q29udGVudCA9IFwiTWVhbCAgaGVyZSBpcyB0dXJuIGZvb2QgIENPU1QgOiQ0MDBcIjtcbiAgIGRpdjQuYXBwZW5kQ2hpbGQobmFtZTIpO1xuXG4gICBjb25zdCBkaXY1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgIGRpdjUuY2xhc3NMaXN0LmFkZChcImZvb2RcIik7XG4gICBkaXY1LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vZFwiKTtcbiAgIGRpdjUuc2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZVwiLCBcIjEwMFwiKTtcbiAgIGRpdi5hcHBlbmRDaGlsZChkaXY1KTtcblxuICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgaW1hZ2UuY2xhc3NMaXN0LmFkZChcImltZzFcIik7XG4gICBpbWFnZS5zcmMgPSBmaXNoO1xuXG4gICBkaXY1LmFwcGVuZENoaWxkKGltYWdlKTtcbiAgIFxuICAgY29uc3QgbmFtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICBuYW1lMy5jbGFzc0xpc3QuYWRkKFwibmFtZVwiKTtcbiAgIG5hbWUzLnRleHRDb250ZW50ID0gXCJNZWFsICBoZXJlIGlzIGNoYWZvb2wgQ09TVCA6JDEwMFwiO1xuICAgZGl2NS5hcHBlbmRDaGlsZChuYW1lMyk7XG5cbiAgIGNvbnN0IGRpdjYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgZGl2Ni5jbGFzc0xpc3QuYWRkKFwiZm9vZFwiKTtcbiAgIGRpdjYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb29kXCIpO1xuICAgZGl2Ni5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByaWNlXCIsIFwiNTBcIik7XG4gICBkaXYuYXBwZW5kQ2hpbGQoZGl2Nik7XG5cbiAgIGNvbnN0IGltZzQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgaW1nNC5jbGFzc0xpc3QuYWRkKFwiaW1nMVwiKTtcbiAgIGltZzQuc3JjID0gdWdhbGk7XG4gICBkaXY2LmFwcGVuZENoaWxkKGltZzQpO1xuXG4gICBjb25zdCBuYW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgIG5hbWU0LmNsYXNzTGlzdC5hZGQoXCJuYW1lXCIpO1xuICAgbmFtZTQudGV4dENvbnRlbnQgPSBcIk1lYWwgIGhlcmUgaXMga2VueWFuIG1lYWwgQ09TVCA6JDUwXCI7XG4gICBkaXY2LmFwcGVuZENoaWxkKG5hbWU0KTtcblxuICAgY29uc3QgZGl2NyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICBkaXY3LmNsYXNzTGlzdC5hZGQoXCJmb29kXCIpO1xuICAgZGl2Ny5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvb2RcIik7XG4gICBkaXY3LnNldEF0dHJpYnV0ZShcImRhdGEtcHJpY2VcIiwgXCIxMDBcIik7XG4gICBkaXYuYXBwZW5kQ2hpbGQoZGl2Nyk7XG5cbiAgIGNvbnN0IGltZzUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgaW1nNS5jbGFzc0xpc3QuYWRkKFwiaW1nMVwiKTtcbiAgIGltZzUuc3JjID0gbWF0dW1ibztcbiAgIGRpdjcuYXBwZW5kQ2hpbGQoaW1nNSk7XG5cbiAgIGNvbnN0IG5hbWU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgbmFtZTUuY2xhc3NMaXN0LmFkZChcIm5hbWVcIik7XG4gICBuYW1lNS50ZXh0Q29udGVudCA9IFwiTWVhbCAgaGVyZSBpcyBBbmltYWwgSW50ZXJzdGluZXMgQ09TVCA6JDEwMFwiO1xuICAgZGl2Ny5hcHBlbmRDaGlsZChuYW1lNSk7XG5cbiAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKFwiaGVhZDJcIik7XG4gICBmb290ZXIudGV4dENvbnRlbnQgPSBcIllvdSBjYW4gY2hvb3NlIHRoZSBtZWFsIHlvdSB3YW50IGl0cyBvdXIgcGxlYXN1cmUgdG8gaGF2ZSB5b3UuLi5cIjtcbiAgIGRpdjEuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcbiAgICAgIFxuICAgXG5cbiAgIHNldFByaWNlKCk7XG4gICBcbiAgICByZXR1cm4gZGl2MVxufVxuXG5mdW5jdGlvbiBzZXRQcmljZSgpe1xuY29uc3QgUHJpY2VBcnJheSA9IFtdO1xuXG5jbGFzcyBwcmljZSB7XG4gICAgY29uc3RydWN0b3IocHJpY2Upe1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuICAgIGdldFByaWNlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaWNlXG4gICAgfVxuICAgIHNldFByaWNlKHZhbHVlKXtcbiAgICAgICAgdGhpcy5wcmljZSA9IHZhbHVlO1xuICAgIH1cbn1cblxuXG5cbmNvbnN0IHByaWNlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZm9vZFwiKTtcbnByaWNlcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcbiAgICAgY29uc3QgaXRlbVByaWNlID0gbmV3IHByaWNlKGl0ZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmljZVwiKSk7XG4gICAgICAgIFByaWNlQXJyYXkucHVzaChpdGVtUHJpY2UucHJpY2UpO1xuICAgIH0pXG59KVxuXG5jb25zb2xlLmxvZyhQcmljZUFycmF5KTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=