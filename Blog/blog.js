let item = [
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/04/Visuals-compressed-Blog--1.gif",
    header:"Community",
    topic:"Visuals Peoples Are Searching For",
    footer:"Natalie brennan  April 14,2022"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},

    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/2022/05/April-Round-up--Blog--1.jpg",
    header:"announcement",
    topic:"A Look Back On April",
    footer:"Annie Spratt  May 6,2021"},
    

]
Displaytable()
function Displaytable(){
    item.forEach(function(elem){
        let product = document.createElement("div")
        let image = document.createElement("img")
        image.src = elem.image
        let div = document.createElement("div");
        let topic = document.createElement("p");
        topic.innerText = elem.header;
        topic.style.margin="10px 0px 10px 0px"
        let subTopic = document.createElement("h1");
        subTopic.innerText =elem.topic;
        let footer = document.createElement("p");
        footer.innerText = elem.footer;
        footer.style.margin ="20px 0px 20px 0px"
        div.append(topic,subTopic,footer)
        product.append(image,div);
        console.log(product);
        document.querySelector("#adsContainer").append(product); 
    })
}
let loadMorebtn = document.querySelectorAll("#adsContainer>div");
let btn = document.querySelector("#LoadMore");
let curr = 6;
btn.addEventListener("click",function(){
    for(let i=curr;i<curr+6;i++){
        if(loadMorebtn[i]){
            loadMorebtn[i].style.display="inline-block";
        }
    }
    curr += 6;
    if(curr>=loadMorebtn.length){
        btn.style.display="none";
    }
})