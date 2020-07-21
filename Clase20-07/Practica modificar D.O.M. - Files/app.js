alert('bienvenido al sitio');

let avanzar = confirm('Queres avanzar?')

if(avanzar){
    document.querySelector('h2').innerText = "Qué alegría que quieras con tu visita por este maravilloso sitio.";
    let nombre = prompt('Ingrese su nombre')
    document.querySelector('h1').innerText += ' ' + nombre;
    let edad = prompt('Ingrese su edad')
    if(edad>=18){
        let hobbies = prompt('Ingrese hobbies').split(',');
        let filterHobbies = hobbies.filter(hobbie => { return hobbie == 'programación' || hobbie =="programacion"})
        filterHobbies.length != 0 ? alert('Que bueno que te guste programar') : alert('Q lastima q no te guste programar')
        for(let i=0; i < hobbies.length;i++){
            document.querySelector("article.hobbies").innerHTML += `<li>${hobbies[i]}<li>`
        }
    } else {
       let clase = document.querySelector(".container-general");
       document.getElementsByClassName('container-general')[0].getElementsByClassName.display = 'none';
       document.getElementById('accesoDenegado').style.display = 'block';

    }
} else {
    document.querySelector('h2').innerText = "Lamentamos que no quieras continuar tu visita por este maravilloso sitio.";
}