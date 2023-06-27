// Scrolling Through Items
const leftBtn = document.querySelector(".l-btn");
const rightBtn = document.querySelector(".r-btn");

rightBtn.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide");
        conent.scrollLeft += 1100;
        event.preventDefault();

    })
leftBtn.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide");
        conent.scrollLeft -= 1100;
        event.preventDefault();

    })

// Scrolling Through Items
const leftBtn1 = document.querySelector(".btn-1b");
const rightBtn1 = document.querySelector(".btn-1a");


rightBtn1.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide-1");
        conent.scrollLeft += 1100;
        event.preventDefault();

    })
leftBtn1.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide-1");
        conent.scrollLeft -= 1100;
        event.preventDefault();

    })

    // Scrolling Through Items
const leftBtn2 = document.querySelector(".btn-1c");
const rightBtn2 = document.querySelector(".btn-1d");


rightBtn2.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide-2");
        conent.scrollLeft += 1100;
        event.preventDefault();

    })
leftBtn2.addEventListener("click",
    function (event) {
        const conent = document.querySelector(".product-slide-2");
        conent.scrollLeft -= 1100;
        event.preventDefault();

    })

//To Show Side Bar
const sidebar = document.querySelector(".sidebar");
const black = document.querySelector(".black");
const sidebtn = document.querySelector(".second-1");

sidebtn.addEventListener("click", () => {
    sidebar.classList.add("active");
    document.body.classList.add("stop-scroll");
})

const sign = document.querySelector(".ac");
const tri = document.querySelector(".triangle");
const signin = document.querySelector(".hdn-sign");

sign.addEventListener("click", () => {
    black.classList.toggle("active-1");
    signin.classList.toggle("active");
    tri.classList.toggle("active");
    document.body.classList.toggle("stop-scroll");
})
