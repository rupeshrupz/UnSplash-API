let list = document.querySelector('#list')
let API_KEY ="kPQI4Xzp7H8qS7-FGJf07Kib4bZdZVaapRN4KsF93Dc"
let grid = document.querySelector('#gridData')
let gridModel = document.querySelector('#gridModel')
let Title = document.querySelector('#gridTitleMain')
console.log(Title)

list.addEventListener('click', e=>
{
    let value = e.target.innerText
    getPhotos(value)
})

async function getPhotos(value)
{
    let BASE_URL = `https://api.unsplash.com/search/collections?client_id=${API_KEY}&&page=10&query=${value}`
    let data = await window.fetch(BASE_URL)
    let {results} = await data.json()
    let output =""
    let title1 = ""
    for(let [index,photo] of results.entries())
    {
        
        let {cover_photo,links,preview_photos,tags,title,published_at} = photo
        console.log(published_at)
        output += `
        <img src=${preview_photos[0].urls.full} alt="" width="400px" height="300px" id="gridPhotos">
        `
   
    }
    grid.innerHTML = output

    let gridOutPut = ""

    grid.addEventListener('click', e=>
    {
        let gridVal = e.path[0].currentSrc
        
        gridOutPut = `
        <img src=${gridVal} height="400px" width="400px" id="gridModelImage" />
        <input type="submit" value="Close" id="closeButton">
        `
        gridModel.innerHTML = gridOutPut

            gridModel.style.display = "block"
            gridModel.style.background = "linear-gradient(black, transparent)"
            gridModel.style.width = "100%"
            gridModel.style.height= "100%"
            gridModel.style.position= "absolute"
            gridModel.style.top = "0px"
            document.body.style.overflow = 'hidden';
        let closeButton = document.querySelector('#closeButton')
        closeButton.addEventListener('click', e=>{
          
            gridModel.style.display = "none"
            document.body.style.overflow = 'visible';
            console.log("clicked")
         
        })   
    })
       
     
  
   
}
