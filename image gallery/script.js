const searchForm = document.querySelector(".custom_input");
const searchBtn = document.querySelector(".svg_icon");
const searchInput = document.querySelector(".input");
const searchResult = document.querySelector(".searchResult");
const showmore = document.querySelector(".show-more");

let keyword = "";
let pages = 1;

//const accessKey = M-9XUucnwt3RPi8XccvyFqG0wbSL4bJa6g9HHKGbd78;

const searchImage = async() => {
    keyword = searchInput.value;
    const url = `https://api.unsplash.com/search/photos?page=${pages}&query=${keyword}&client_id=M-9XUucnwt3RPi8XccvyFqG0wbSL4bJa6g9HHKGbd78&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    
    const results = data.results;

    //console.log(data);

    results.map((result) => {
        const image = document.createElement("img");
        image.src = result.urls.small;
        const imagelnk = document.createElement("a");
        imagelnk.href = result.links.html;
        imagelnk.target = "_blank";

        imagelnk.appendChild(image);
        searchResult.appendChild(imagelnk);
    })
    if(keyword !== ""){
        showmore.style.display = "block";
        searchResult.style.margin = "100px auto 50px"
    }

}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    pages = 1;
    searchImage();
})

showmore.addEventListener('click', () => {
    pages += 1;
    searchImage();
})

