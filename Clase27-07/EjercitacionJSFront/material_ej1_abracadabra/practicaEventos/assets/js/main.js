window.onload =  () => {
   document.querySelector('#abracadabra').onclick = () => {
        nombre = prompt('Ingresa tu nombre');
        document.querySelector('#titular').innerHTML = "Hi. I'm " + nombre;
   }
   
   let dobleClick = document.querySelector('.test1')
   dobleClick.addEventListener('dblclick', function () {
        arrColores = ['grey','red','blue','green','white'];
        posicion = Math.floor(Math.random()*arrColores.length);
       document.querySelector('.parrafo-color').style.color = arrColores[posicion]
   })

    /*document.querySelector('.test2').onmouseover = () => {
        console.log(this)
        this.style.brackground = 'green'
    }*/
    document.getElementById(".test2").addEventListener("mouseover", () => {
        this.style.color = "red";
      });
}