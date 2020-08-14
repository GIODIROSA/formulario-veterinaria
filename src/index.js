import Animal from './Animal'



//escucha el evento y trae los valores de input DOM
document.getElementById("into").addEventListener("click", show);

function getValue (){
    let nameOwner= document.getElementById("owner").value;
    let direccion= document.getElementById("direction").value;
    let telefono= document.getElementById("phone").value;
    let nombreMascota= document.getElementById("nameMascota").value;
    let tipoMascota= document.getElementById("tipoMascota").value;
    let enfermedad= document.getElementById("disease").value;

    //return un array con las variable cargadas del valor del input
    return [nameOwner, direccion, telefono, nombreMascota, tipoMascota, enfermedad];

}
//prueba del array
console.log(getValue());

function show(){
    // alert("hola");
    //instancia Animal que hereda parametros de dueño
    const getPet= new Animal (getValue()[0], getValue()[1], getValue()[2], getValue()[3], getValue()[4], getValue()[5]);
    getPet.showData();
}

//prueba del canal de comunicación e instancia
console.log(show);