function nombre(){
      let nombre=document.getElementById("nombre").value;

      sessionStorage.setItem("clavenombre", nombre);
      document.getElementById("nombre").value="";
     
}
function mostrar(){
  let n1=  sessionStorage.getItem("clavenombre");
  document.getElementById("titulo").innerHTML="Lista de tareas de"+"<br>"+n1;
}

function letras(){
  let tareas=prompt("agrega una tarea");
  let dato=document.createElement("li");
  let contenido=document.createTextNode(tareas);
  dato.appendChild(contenido);
  document.getElementById("agregado").appendChild(dato);
}