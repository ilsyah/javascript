document.querySelector("#klik").addEventListener("click",tampil);

async function tampil() {

    const url = "https://jsonplaceholder.typicode.com/users";

    const res = await fetch(url);

    const data = await res.json();

    let out = "<ul>";

    data.forEach(x => {
        console.log(x.name);
        out += `<li>${x.name}</li>`
    });
    out += "</ul>";
    document.querySelector("#isi").innerHTML = out;
    
}