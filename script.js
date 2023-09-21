const imageSearch = document.querySelector(".SearchContainer");
const searchBox = document.querySelector(".SearchBox");
const imageResult = document.querySelector(".ImageResult");
const showBtn = document.querySelector(".Show-btn");
const accessKey = "iuKbFqhAij1_4Ue9FrPr8oFk36ec1Z-5enajLDtc0fQ";

let keyword = "";
let page = 1;

async function GenImage(){
    keyword = searchBox.value;
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    if(page===1){
        imageResult.innerHTML = "";
    }
 const results =  data.results;

 results.map((result)=>{
    const image = document.createElement("img");
     image.src = result.urls.small;
     const imageLink = document.createElement("a");
     imageLink.href = result.links.html;
     // This line will open the link in new tab 
    //  imageLink.target = "_blank";
     imageLink.appendChild(image);
     imageResult.appendChild(imageLink);
});
showBtn.style.display = "block";
}

imageSearch.addEventListener("submit", (e) =>{
    e.preventDefault();
    page = 1
    GenImage();
})
showBtn.addEventListener("click" ,() =>{
page++;
GenImage()
})