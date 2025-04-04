const api_url = "https://v2.jokeapi.dev/joke/Programming?type=single";
const button = document.getElementById('next-btn');
const display = document.getElementById('display');
const body = document.getElementsByTagName('body')[0];
button.addEventListener('click',async ()=>{
    const joke = await generateJoke();
    const jokePara = document.createElement('p');
    const oldjoke = document.getElementById('joke-txt');
    jokePara.textContent = `" ${joke} "`;
    jokePara.setAttribute('id','joke-txt')
    display.replaceChild(jokePara, oldjoke)
    body.style.background = `radial-gradient(circle, ${generateBgColor()}, ${generateBgColor()} )`
    
})

window.onload= async()=>{
    const joke = await generateJoke();
    const jokePara = document.createElement('p');
    const oldjoke = document.getElementById('joke-txt');
    jokePara.textContent = `" ${joke} "`;
    jokePara.setAttribute('id','joke-txt')
    display.replaceChild(jokePara, oldjoke)
    body.style.background = `radial-gradient(circle, ${generateBgColor()}, ${generateBgColor()} )`
}


async function generateJoke() {
    try {
        // Fetching data from the API
        const response = await fetch(api_url);

        // Check if the response is not successful
        if (!response.ok) {
            console.log("No data fetched from the URL");
            return;
        }

        // Convert response to JSON
        const joke = await response.json();
        
        // Log the quote and author
        return joke.joke;
        
    } catch (error) {
        console.log("Something went wrong, please try again later!");
        console.log(error); // Log the actual error for debugging
    }
}


function generateBgColor(){
    return '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6,'0');
}

