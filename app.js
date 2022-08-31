const inputTexto = document.querySelector(".textarea1");
const mensaje = document.querySelector(".textarea2");
const imagen = document.querySelector("#lupa");
const mensajeProvisorio = document.querySelector("#mensaje-provisorio");


function encriptar(stringEncriptada){

    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","over"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length ; i++){
        if (stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}
function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["over","o"],["ufat","u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i=0 ; i<matrizCodigo.length ; i++){
        if (stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringDesencriptada;
}
function botonEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    mensaje.style.display = "inline-block";
    imagen.style.display = "none";
    mensajeProvisorio.style.display = "none";
    inputTexto.value = "";
}
function botonDesencriptar(){
    const textoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = textoDesencriptado;
    inputTexto.value = "";
    mensaje.style.display = "inline-block";
    imagen.style.display = "none";
    mensajeProvisorio.style.display = "none";
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
}

