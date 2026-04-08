let nombresDominio = document.querySelector("#nombresDominio");

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let ext = ['.com', '.net', '.us', '.io'];

for (let p of pronoun) {
    for (let a of adj) {
        for (let n of noun) {
            for (let e of ext) {
                nombresDominio.innerHTML += `<p>${p + a + n + e}</p>`;
            }
        }
    }
}