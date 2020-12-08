/*Mostrar sección Dashboard*/
function dash(){
    document.getElementById('dashboard').style.display="block";
    document.getElementById('headcount').style.display="none";
    document.getElementById('dispersion').style.display="none";
    document.getElementById('validacion').style.display="none";
    document.getElementById('gastoagente').style.display="none";
}
/*Mostrar sección Head-Count*/
function hc(){
    document.getElementById('dashboard').style.display="none";
    document.getElementById('headcount').style.display="block";
    document.getElementById('dispersion').style.display="none";
    document.getElementById('validacion').style.display="none";
    document.getElementById('gastoagente').style.display="none";
}
/*Mostrar sección Dispersión de Gasto*/
function disper(){
    document.getElementById('dashboard').style.display="none";
    document.getElementById('headcount').style.display="none";
    document.getElementById('dispersion').style.display="block";
    document.getElementById('validacion').style.display="none";
    document.getElementById('gastoagente').style.display="none";
}
/*Mostrar sección Validación de Nómina*/
function valid(){
    document.getElementById('dashboard').style.display="none";
    document.getElementById('headcount').style.display="none";
    document.getElementById('dispersion').style.display="none";
    document.getElementById('validacion').style.display="block";
    document.getElementById('gastoagente').style.display="none";
}
/*Mostrar sección Gasto por Agente*/
function gasto(){
    document.getElementById('dashboard').style.display="none";
    document.getElementById('headcount').style.display="none";
    document.getElementById('dispersion').style.display="none";
    document.getElementById('validacion').style.display="none";
    document.getElementById('gastoagente').style.display="block";
}