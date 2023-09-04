const searchForm=document.getElementById('search-form');
const searchInput=document.getElementById('input-search');
const searchButton=document.getElementById('search-btn');
const showMoreButton=document.getElementById('show-more');
const searchResults=document.getElementById('search-results');
//const url='https://api.unsplash.com/search/photos?page=1&query=office'
let keyword="";
let page=1;
const accesskey="ZhcKHWHTB5AYyMEVpbw3zhaAWaGSfHxDZxSLUplyZS4";

const bringImages=async ()=>{
    try{
        keyword=searchInput.value;
        //console.log(keyword);
        const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
        const data=await fetch(url);
        const jsondata=await data.json();
        //console.log(jsondata);
        if(page===1)
        {
            searchResults.innerHTML="";
        }
        const results=jsondata.results;
        results.map((result)=>{
            const image=document.createElement("img");
            image.src=result.urls.small;
            const imageLink=document.createElement("a");
            imageLink.href=result.links.html;
            imageLink.target="_blank";
            imageLink.appendChild(image);
            searchResults.appendChild(imageLink);
        })
        showMoreButton.style.display='block';

    }
    catch(error){
        console.log(error);
    }
}

searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    page=1;
    bringImages();

})
showMoreButton.addEventListener('click',()=>{
    page++;
    bringImages();
})



//ZhcKHWHTB5AYyMEVpbw3zhaAWaGSfHxDZxSLUplyZS4