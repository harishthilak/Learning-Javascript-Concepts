const btn = document.getElementById("btn");
const output = document.getElementById("output");

function getpost() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Check your network");
            }
            return response.json();
        })
        .then((data) => {
            output.innerHTML = "";
            data.forEach((post) => {
                output.innerHTML += `
                <div class="Post">
                    <h3>${post.title}</h3>
                    <p>${post.body}</p>
                </div>`;
            });
        })
        .catch((error) => {
            console.error("Invalid Try Again", error);
        });
}

async function Fetchpost() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(url);

        if (!response.ok){
            throw new Error ("Check your network");
        } 
        const data = await response.json();

        //console.log(data);
        output.innerHTML = " ";
        data.forEach((post) => {
            output.innerHTML += `
            <div class = "Post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            </div>`;
        })

    
    } catch (error) {
        console.error("Invalid Try Again", error);
    }
    
}
btn.addEventListener("click", Fetchpost);
