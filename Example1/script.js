fetch('data.txt')
        .then(response => response.text())
        .then(data =>{
            console.log(data);
            document.getElementById("output").textContent = data;
        })
        .catch(error=>console.error('Error reading file:',error));