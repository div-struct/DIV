var Templates = [
    {
        "name": "Online Store",
        "image": "https://github.com/div-struct/DIV/blob/main/img/1.png?raw=true",
        "fullImage": "https://kellycu.github.io/img/web1.png",
        "link": "https://animestocks.github.io",
        "description": "A site for selling your products online.",
        "price": "₱500.00",
        "addons": "+₱300 for Addons"
    },
    {
        "name": "E-commerce Site",
        "image": "https://github.com/div-struct/DIV/blob/main/img/2.png?raw=true",
        "fullImage": "https://github.com/div-struct/DIV/blob/main/img/Sample%201%20Redesign.png?raw=true",
        "link": "https://samplewebsites.github.io/",
        "description": "A buy and sell website for all your products/services.",
        "price": "₱500.00",
        "addons": "+₱300 for Addons"
    },
    {
        "name": "Bakeshop",
        "image": "https://github.com/div-struct/DIV/blob/main/img/3.png?raw=trues",
        "fullImage": "https://kellycu.github.io/img/web3.png",
        "link": "#/sample3",
        "description": "Showcase your best baked products and sell them online.",
        "price": "₱500.00",
        "addons": "+₱300 for Addons"
    },
    {
        "name": "Online Store 2",
        "image": "https://github.com/div-struct/DIV/blob/main/img/4.png?raw=true",
        "fullImage": "https://kellycu.github.io/img/web4.png",
        "link": "#/sample4",
        "description": "Sell your products online and showcase why they are the best!",
        "price": "₱500.00",
        "addons": "+₱300 for Addons"
    },
]

function Rmv() {
    document.getElementById('preview').remove();
    console.log("Removed");
}

var navBar = document.getElementById("navbar");
window.onscroll = function() {
    if(window.scrollY > 27){
        navbar.classList.add('scrolled');
    }
    else {
        navbar.classList.remove('scrolled');
    }
}


