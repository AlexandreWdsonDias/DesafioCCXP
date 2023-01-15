const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const min = document.getElementById("min");
const seg = document.getElementById("seg");

const lancamento = "23 nov 2022";

function countDown (){
    const dataLanc = new Date(lancamento);
    const hoje = new Date();

    const segTotal = (dataLanc - hoje) / 1000;

    const dias = Math.floor(segTotal / 3600 / 24);
    const horas = Math.floor(segTotal / 3600) % 24;
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal) % 60;

    dia.innerHTML = `<strong> ${dias} D</strong>`
    hora.innerHTML = `<strong> ${formatoTempo(horas)} H</strong>`
    min.innerHTML = `<strong> ${formatoTempo(minutos)} M</strong>`
    seg.innerHTML = `<strong> ${formatoTempo(segundos)} S</strong>`
}

function formatoTempo( tempo ){
    return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000)