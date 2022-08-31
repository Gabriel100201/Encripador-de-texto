function quitarImagen(){
    document.getElementById("lupa").style.display = "none";
    document.getElementById("mensaje-provisorio").style.display = "none";
}


function encriptar(){
    var contador=0;
    var textoParaEncriptar = document.querySelector("#texto1").value;
    let cadena= /e/g;
    textoParaEncriptar = textoParaEncriptar.replace(cadena,"enter");
    cadena= /i/g;
    textoParaEncriptar = textoParaEncriptar.replace(cadena,"imes");
    cadena= /a/g;
    textoParaEncriptar = textoParaEncriptar.replace(cadena,"ai");
    cadena= /o/g;
    textoParaEncriptar = textoParaEncriptar.replace(cadena,"over");
    cadena= /u/g;
    textoParaEncriptar = textoParaEncriptar.replace(cadena,"ufat");
    console.log(textoParaEncriptar);
}

