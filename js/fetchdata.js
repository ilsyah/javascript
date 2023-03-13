document.querySelector("#klik").addEventListener("click",tampil);

function tampil() {
    let url = "https://jsonplaceholder.typicode.com/todos";

    fetch(url)
    .then(res => res.json())
    // .then(function (res) {
    //     return res.json()
    // })

    .then(data => {
        //console.log(data)

        let out = "<ul>";

        data.forEach(x => {
            out += `<li>${x.title}</li>`
            //console.log(x.title);
        });

        out += "</ul>";
        document.querySelector("#isi").innerHTML = out;

    })
    // .then(function (data) {
    //     console.log(data)
    // })
}