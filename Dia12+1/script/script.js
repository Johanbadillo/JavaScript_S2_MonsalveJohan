

function buscarpersonaje() {
    const xhr = new XMLHttpRequest();
    const nombreUsar = document.getElementById("nombreInput").value.trim();
    const url = `https://www.superheroapi.com/api.php/ec6dbf94c6af92c02c23f6061649b68d//search/${nombreUsar}`
    console.log(url)
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
        try {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const data = JSON.parse(xhr.responseText);
                console.log(data);
                for (let i = 0; i < data.results.length; i++) {
                    division = document.getElementById("contenido")
                    console.log("adsfdasfd");
                    division.innerHTML += `
                    <div class="card">
                    <img src="${data["results"][i]["image"]["url"]}" alt="">
                    </div>
                    `
                    console.log(data)
                }
            }
        } catch {
            console.log("No Se a Encontrado El personaje")
        }
    }
    xhr.send()
}







