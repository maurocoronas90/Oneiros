const frases = [
"Ogni sogno appartiene a qualcuno.",
"Finché qualcuno non lo ruba.",
"Benvenuto in ONEIROS."
];

let i = 0;

setInterval(() => {
    i++;
    if (i >= frases.length) i = 0;
    document.getElementById("phrase").innerText = frases[i];
}, 3500);

document.getElementById("enter").onclick = () => {
    window.location.href = "ONEIROS_PILOT_Mobile_Edition(2).pdf";
};
