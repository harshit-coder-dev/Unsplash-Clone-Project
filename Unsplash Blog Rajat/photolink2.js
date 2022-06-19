let objmod = [
    {img:"https://unsplash.com/blog/content/images/size/w2400/2022/06/erwan-hesry-p41bpZu4izo-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w2400/2022/06/brad-west-TTa_AjLU_QQ-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/jon-anders-dalan-9jSe9ZIFtGw-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1000/2022/06/nick-gosset-SVDRsXOCUkQ-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/mike-hindle-KJ9ye97ofe4-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/patrick-federi-MAKmfukLPqo-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1000/2022/06/skyler-ewing-NDimYbebLc8-unsplash--1-.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
    {img:"https://unsplash.com/blog/content/images/size/w1600/2022/06/rod-long-960falDRw9Y-unsplash.jpg",
    name:"Annie Frank",
    text:"“There’s something about being in an ice cave that feels crazy, thousands of years of ice, silent, and cold, feels too good to be true.” — Nick Gosset 🇨🇦"},
]
objmod.forEach(function(elem){
    let product = document.createElement("div");
    let img = document.createElement("img");
    img.src = elem.img;
    let div1 = document.createElement("div");
    
    let text = document.createElement("p");
    text.innerText = elem.text;
    let hr = document.createElement("hr");
    div1.append(text);
    product.append(img,div1,hr);
    document.querySelector("#adsContainer").append(product);
})