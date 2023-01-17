
let topButton = document.querySelector("#topButton")
let topDiv = document.querySelector("#top")
let img1 = document.querySelector("#mario")
let img2 = document.querySelector("#mario2")
let img3 = document.querySelector("#marioBG")
let topText = document.querySelector("#topText")

async function getData() {
    const response = await fetch('http://www.boredapi.com/api/activity/')
    const data = await response.json()
    return data
  }

let content = document.querySelector("#content")
let activityText = document.querySelector("#activity")
let participantText = document.querySelector("#participant")

async function getData() {
    const response = await fetch('https://www.boredapi.com/api/activity/')
    const data = await response.json()
    console.log(data)

    activityText.innerHTML = data.activity
    if (data.participants === 1){
        participantText.innerHTML = `By yourself!`
    } else {
        participantText.innerHTML = `With ~${data.participants} people`
    }

    let query = data.activity
    let API_KEY = "563492ad6f91700001000001b97a75bc889549559ee24d78e84a6a0d"
    let url1 = `https://api.pexels.com/v1/search?query=${query}&per_page=2`
    let url2 = `https://api.pexels.com/videos/search?query=${query}&per_page=1`

    console.log(query)

    const response2 = await fetch(url1, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        }
    })
    const data2 = await response2.json()

    const response3 = await fetch(url2, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: API_KEY,
        }
    })
    const data3 = await response3.json()

    console.log(data2)
    console.log(data3)

    document.querySelector("#pic1").setAttribute("src", data2.photos[0].src.medium)

    document.querySelector("#pic2").setAttribute("src", data3.videos[0].video_files[0].link)
    document.querySelector("#pic2").setAttribute("type", data3.videos[0].video_files[0].file_type)

    document.querySelector("#pic3").setAttribute("src", data2.photos[1].src.medium)

    let search = document.querySelector("#search")

    let window2 = `https://letmegooglethat.com/?q=how+to+${query}`

    search.addEventListener("click", function(){
        window.open(window2, "replace=false")
        console.log(data.activity)
    })
}

topButton.addEventListener("click", function(){
    topButton.style.display = "none"
    img1.style.display = "none"
    img2.style.display = "block"
    img3.style.display = "block"
    topDiv.style.marginTop = "20px"
    topDiv.style.flexDirection = "row"
    topDiv.style.gap = "40px"
    content.style.display = "flex"

    getData()
    })


img2.addEventListener("click", function(){
    getData()
})



