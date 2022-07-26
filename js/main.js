let elBody = document.querySelector("body")
let elList = document.querySelector(".list")
let elBtnPokemon = document.querySelector(".btn-pokemon");
let elBtnMovies = document.querySelector(".btn-movies");
let elBtnBoth = document.querySelector(".btn-both");
let elBtnCelar = document.querySelector(".btn-clear");
let elSpan = document.querySelector(".image");
let elImg = document.createElement("img")
let elImage = document.createElement("img")
elSpan.classList.add("d-flex")

elBtnPokemon.addEventListener("click", function() {
    renderArray(pokemons.slice(0, 50));
})
elBtnMovies.addEventListener("click", function() {
    renderArray(movies.slice(0, 50));
})
elBtnBoth.addEventListener("click", function() {
    renderBoth(pokemons.slice(0, 50), movies.slice(0, 50));
})
elBtnCelar.addEventListener("click", function() {
    elList.innerHTML = null
    elSpan.innerHTML = null
})

function renderArray(array) {
    elList.innerHTML = null
    for (const item of array) {
        let newItem = document.createElement("li");
        let newDiv = document.createElement("div")
        let listImg = document.createElement("img");
        let listName = document.createElement("h3");
        let listType = document.createElement("p");
        let listHeight = document.createElement("p");
        let listWeight = document.createElement("p");

        elList.appendChild(newItem);
        newItem.appendChild(newDiv);
        newDiv.appendChild(listImg);
        newDiv.appendChild(listName);
        newDiv.appendChild(listType);
        newDiv.appendChild(listHeight);
        newDiv.appendChild(listWeight);
        
        if (item.name) {
            elSpan.innerHTML = null
            elImg.src = "./image/pokemon_logo.png";
            elSpan.classList.add("d-flex", "justify-content-center")
            elSpan.appendChild(elImg);
            elImg.width = "500"
            elImg.height = "300"

            elList.classList.add("row", "list-unstyled")
            newItem.classList.add("col-12", "col-lg-6", "col-xl-3", "mb-4")
            newDiv.classList.add("d-flex", "flex-column", "align-items-center", "bg-white", "rounded-5", "p-4")
            listImg.src = item.img;
            listImg.width = "150";
            listImg.height = "150";
            listName.textContent = item.name;
            listType.textContent = item.type;
            listHeight.textContent = item.height;
            listWeight.textContent = item.weight;
        }else {
            elSpan.innerHTML = null
            elImage.src = "./image/pngwing.com.png";
            elSpan.classList.add("d-flex", "justify-content-center")
            elSpan.appendChild(elImage);
            elImage.width = "500"
            elImage.height = "300"

            elList.classList.add("row", "list-unstyled")
            newItem.classList.add("col-12", "col-lg-6", "col-xl-3", "mb-4")
            newDiv.classList.add("d-flex", "flex-column", "align-items-center", "bg-white", "h-auto", "pb-3")
            listImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            listImg.classList.add("w-100", "h-100")
            listName.textContent = item.Title;
            listName.classList.add("bg-info", "w-100", "h5", "text-white", "text-center")
            listType.textContent = item.fulltitle;
            listType.classList.add("small", "my-0")
            listHeight.textContent = item.imdb_rating;
            listHeight.classList.add("my-0")
            listWeight.textContent = item.movie_year;
            listWeight.classList.add("my-0")
            let newNavbar = document.createElement("nav");
            let newBtnTrailer = document.createElement("a");
            let newBtnBookmark = document.createElement("button");
            let newBtnInfo = document.createElement("button");
            newBtnTrailer.href = `https://www.youtube.com/watch?v=${item.ytid}`
            newBtnTrailer.target = "_blank"
    
            newDiv.appendChild(newNavbar);
            newNavbar.appendChild(newBtnTrailer);
            newNavbar.appendChild(newBtnBookmark);
            newNavbar.appendChild(newBtnInfo);
    
            newBtnTrailer.textContent = "Trailer"
            newBtnBookmark.textContent = "Bookmark"
            newBtnInfo.textContent = "More Info"
    
            newNavbar.classList.add("wrapper","d-flex", "justify-content-between")
            newBtnTrailer.classList.add("btn", "btn-outline-primary", "mx-1")
            newBtnBookmark.classList.add("btn", "btn-outline-success", "mx-1")
            newBtnInfo.classList.add("btn", "btn-outline-info", "mx-1")
        }
    }
}

function renderBoth(array, array1) {
    let newArray = array.concat(array1)
    elList.innerHTML = null
    for (const item of newArray) {
        let newItem = document.createElement("li");
        let newDiv = document.createElement("div")
        let listImg = document.createElement("img");
        let listName = document.createElement("h3");
        let listType = document.createElement("p");
        let listHeight = document.createElement("p");
        let listWeight = document.createElement("p");

        elList.appendChild(newItem);
        newItem.appendChild(newDiv);
        newDiv.appendChild(listImg);
        newDiv.appendChild(listName);
        newDiv.appendChild(listType);
        newDiv.appendChild(listHeight);
        newDiv.appendChild(listWeight);

        elSpan.appendChild(elImg);
        elImg.width = "500"
        elImg.height = "300"
        elSpan.appendChild(elImage);
        elImage.width = "500"
        elImage.height = "300"
        elImg.src = "./image/pokemon_logo.png";
        elImage.src = "./image/pngwing.com.png";
        elSpan.classList.add("d-flex", "justify-content-between")
        
        if (item.name) {
            elList.classList.add("row", "list-unstyled")
            newItem.classList.add("col-12", "col-lg-6", "col-xl-3", "mb-4")
            newDiv.classList.add("d-flex", "flex-column", "align-items-center", "bg-white", "rounded-5", "p-4")
            listImg.src = item.img;
            listImg.width = "150";
            listImg.height = "150";
            listName.textContent = item.name;
            listType.textContent = item.type;
            listHeight.textContent = item.height;
            listWeight.textContent = item.weight;
        }else {
            elList.classList.add("row", "list-unstyled")
            newItem.classList.add("col-12", "col-lg-6", "col-xl-3")
            newDiv.classList.add("d-flex", "flex-column", "align-items-center", "bg-white", "h-auto", "pb-3")
            listImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`;
            listName.textContent = item.Title;
            listName.classList.add("bg-info", "d-block", "small", "text-white")
            listType.textContent = item.fulltitle;
            listType.classList.add("small", "my-0")
            listHeight.textContent = item.imdb_rating;
            listHeight.classList.add("my-0")
            listWeight.textContent = item.movie_year;
            listWeight.classList.add("my-0")
            let newNavbar = document.createElement("nav");
            let newBtnTrailer = document.createElement("a");
            let newBtnBookmark = document.createElement("button");
            let newBtnInfo = document.createElement("button");
            newBtnTrailer.href = `https://www.youtube.com/watch?v=${item.ytid}`
            newBtnTrailer.target = "_blank"
    
            newDiv.appendChild(newNavbar);
            newNavbar.appendChild(newBtnTrailer);
            newNavbar.appendChild(newBtnBookmark);
            newNavbar.appendChild(newBtnInfo);
    
            newBtnTrailer.textContent = "Trailer"
            newBtnBookmark.textContent = "Bookmark"
            newBtnInfo.textContent = "More Info"
    
            newNavbar.classList.add("wrapper","d-flex", "justify-content-between")
            newBtnTrailer.classList.add("btn", "btn-outline-primary", "mx-1")
            newBtnBookmark.classList.add("btn", "btn-outline-success", "mx-1")
            newBtnInfo.classList.add("btn", "btn-outline-info", "mx-1")
        }
    }
}