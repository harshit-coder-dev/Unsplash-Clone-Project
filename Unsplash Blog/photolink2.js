let arr = [
	{image:"https://unsplash.com/blog/content/images/size/w1000/2022/06/erwan-hesry-p41bpZu4izo-unsplash.jpg",
    text:"“We were in Saint Malo, France, my wife and I, for a night. We were hoping for a great sunset, we got a dense fog instead. A walk on the city historic battlements, the sound of a ferry departing to UK, the vibe was special for that time of the year. Another couple got a walk. I saw them, waited for them to go in front of the spot light.” — Erwan Hesry 🇫🇷"},
	{image:"https://unsplash.com/blog/content/images/size/w1000/2022/06/brad-west-TTa_AjLU_QQ-unsplash.jpg",
    text:"“I went out to photograph the milky way over Sunset Arch in Escalante, Utah. I walked down the hill before the milky way rose and noticed from this unusual angle that Sunset Arch resemble a stegosaurus! Using low level lighting the hill and arch were lit to capture this unique view of the arch against the night stars.” — Brad West 🇺🇸"},
	{image:"https://unsplash.com/blog/content/images/size/w1600/2022/06/evan-brorby-jTydUBI2rAg-unsplash.jpg",
    text:"“Took a mellow 9-hour walk to a cabin in the middle of snowy Norway. I wasn’t planning on taking any pictures that night - I was just peeking my head out the window to look at the night sky while enjoying the cabin I had heated for an entire day. Came to think of all the hours spent walking there with the intent to photograph nature, but I was tired and not quite feeling it. However I had to document my experience, right?” — Jon Anders Dalan 🇳🇴"},
    {image:"https://unsplash.com/blog/content/images/size/w1000/2022/06/jake-weirick-TWZpM7nBN5Q-unsplash--1-.jpg",
    text:"“We were in Saint Malo, France, my wife and I, for a night. We were hoping for a great sunset, we got a dense fog instead. A walk on the city historic battlements, the sound of a ferry departing to UK, the vibe was special for that time of the year. Another couple got a walk. I saw them, waited for them to go in front of the spot light.” — Erwan Hesry 🇫🇷"},
	{image:"https://unsplash.com/blog/content/images/size/w1600/2022/06/vincent-van-zalinge-5vCvYLEJRzg-unsplash--1-.jpg",
    text:"“I went out to photograph the milky way over Sunset Arch in Escalante, Utah. I walked down the hill before the milky way rose and noticed from this unusual angle that Sunset Arch resemble a stegosaurus! Using low level lighting the hill and arch were lit to capture this unique view of the arch against the night stars.” — Brad West 🇺🇸"},
	{image:"https://unsplash.com/blog/content/images/size/w1000/2022/06/matthew-costello-H8YxlikBgTU-unsplash.jpg",
    text:"“Took a mellow 9-hour walk to a cabin in the middle of snowy Norway. I wasn’t planning on taking any pictures that night - I was just peeking my head out the window to look at the night sky while enjoying the cabin I had heated for an entire day. Came to think of all the hours spent walking there with the intent to photograph nature, but I was tired and not quite feeling it. However I had to document my experience, right?” — Jon Anders Dalan 🇳🇴"},
    {image:"https://unsplash.com/blog/content/images/size/w1600/2022/06/rod-long-960falDRw9Y-unsplash.jpg",
    text:"“We were in Saint Malo, France, my wife and I, for a night. We were hoping for a great sunset, we got a dense fog instead. A walk on the city historic battlements, the sound of a ferry departing to UK, the vibe was special for that time of the year. Another couple got a walk. I saw them, waited for them to go in front of the spot light.” — Erwan Hesry 🇫🇷"},
	{image:"https://unsplash.com/blog/content/images/size/w1000/2022/06/skyler-ewing-NDimYbebLc8-unsplash--1-.jpg",
    text:"“I had the pleasure of photographing this beautiful female cardinal in a cold winter day while I was leaving in Illinois. It’s one of my images I took in my first few months of learning photography.” — Skyler Ewing"},
	
]
let lastcont = [
    {image:"https://unsplash.com/blog/content/images/2022/05/Amy-Shamblen--Blog--1.jpg",
    header:"announcement",
    topic:"Meet Amy Shamblen",
    footer:"Annie Spratt   May 6,2021"},
    {image:"https://unsplash.com/blog/content/images/size/w2400/2022/05/shingi-rice-NXbBSg5DUMc-unsplash--1-.jpg",
    header:"announcement",
    topic:"Pride in Open Photography",
    footer:"Annie Spratt   June 1,2022"},
    {image:"https://unsplash.com/blog/content/images/2022/05/The_Importance_of_Editing_-Blog--1.jpeg",
    header:"announcement",
    topic:"How Editing Can Transform an Image",
    footer:"Annie Spratt   May 24,2022"},
]
arr.forEach(function(elem){
    let cont = document.createElement("div");
    let image = document.createElement("img");
    image.src = elem.image;
    let ddiv = document.createElement("div");
    let text = document.createElement("p");
    text.innerText = elem.text;
    text.style.color = "#111111"
    let hr = document.createElement("hr");
    ddiv.append(text)
    cont.append(image,ddiv,hr);
    document.querySelector("#adsContainer").append(cont);
})

lastcont.forEach(function(elem){
    let product = document.createElement("div")
    let image = document.createElement("img")
    image.src = elem.image
    image.className = "responsive image-resize";
    let udiv = document.createElement("div");   
    let topic = document.createElement("p");
    topic.innerText = elem.header;
    topic.style.margin="10px 0px 10px 0px"
    let subTopic = document.createElement("h1");
    subTopic.innerText =elem.topic;
    let footer = document.createElement("p");
    footer.innerText = elem.footer;
    udiv.append(topic,subTopic,footer)
    footer.style.margin ="20px 0px 20px 0px"
    product.append(image,udiv );
    document.querySelector("#lastCont").append(product); 
})