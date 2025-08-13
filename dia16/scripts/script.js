document.addEventListener('DOMContentLoaded', () => {
    const datosContenedor = document.querySelector('.opciones');
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');

    async function fetchData() {
        const res = await fetch('https://689a16c8fed141b96ba1d280.mockapi.io/schema', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });


        let data = await res.json();
        return data;
    }

    async function addNewTask() {
        const task = taskInput.value;
        console.log(task);
        if (task.trim() === '') return;
        await fetch(`https://689a16c8fed141b96ba1d280.mockapi.io/schema`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                task, status: 'On hold'
            })
        });
        taskInput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    async function deleteTask(id) {
        await fetch(`https://689a16c8fed141b96ba1d280.mockapi.io/schema/${id}`, {
            method: 'DELETE',
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
        })
        taskInput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }

    async function terminadoTask(id) {
        await fetch(`https://689a16c8fed141b96ba1d280.mockapi.io/schema/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status: 'ready'
            })
        });
        taskInput.value = '';
        const data = await fetchData();
        displayCapsula(data);
    }




    //console.log(fetchData());
    function displayCapsula(capsula) {
        datosContenedor.innerHTML = '';
        capsula.forEach(cap => {
            const capDiv = document.createElement('div')
            if (cap.status === "ready") {
                capDiv.classList.add('capsulaNegativa');
                capDiv.innerHTML = `
                <div class="infoTextNegativo">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
            <div class="ñodalElimi">
                    <img src="./storage/img/ham-removebg-preview.png" alt="">
                </div>
                <div class="terminadoNegativo">
                    <img src="./storage/img/pngwing.com (2).png" data-id="${cap["id"]}" alt="" class="terminado-btn">
                </div>
                <div class="eliminadoNegativo">
                    <img src="./storage/img/pngwing.com (4).png" data-id="${cap["id"]}" alt="" class="delete-btn">
                </div>
            </div>
                `
            } else if (cap.status === "On hold") {
                capDiv.classList.add('capsula');
                capDiv.innerHTML = `
            <div class="capsula">
            <div class="infoText">
                <p>${cap["task"]}</p>
            </div>
            <div class="botones">
            <div class="ñodal">
                    <img src="./storage/img/ham-removebg-preview.png" alt="">
                </div>
                <div class="terminado">
                    <img src="./storage/img/pngwing.com (2).png" data-id="${cap["id"]}" alt="" class="terminado-btn">
                </div>
                <div class="eliminado">
                    <img src="./storage/img/pngwing.com (4).png" data-id="${cap["id"]}" alt="" class="delete-btn">
                </div>
            </div>`
            }
            datosContenedor.appendChild(capDiv);
            const deleteBtn = capDiv.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => deleteTask(cap.id));
            const finishBtn = capDiv.querySelector('.terminado-btn');
            finishBtn.addEventListener('click', () => terminadoTask(cap.id));
        });
    }
    fetchData().then(data => {
        displayCapsula(data);
    });
    addTaskButton.addEventListener('click', addNewTask);
    document.getElementById('taskInput').addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addNewTask();
        }
    })
});