function invertir(){
    let cadena=document.getElementById("palabra").value;
    const palabraInvertida= cadena.split('').reverse().join("");
    alert(palabraInvertida);
    document.getElementById("palabraInvertida").innerHTML=palabraInvertida;
    
}
