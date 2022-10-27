let random = () => {
fetch('https://api.kanye.rest/')
.then (response => response.json())
.then (data => {
    console.log(data)


document.querySelector("#quotes").innerHTML = data.quote;
})}
random()

let btn = document.querySelector("#getRandom");
btn.addEventListener('click', () => {
    random()
})
