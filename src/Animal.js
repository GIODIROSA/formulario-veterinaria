// class hija de owner padre
import Owner from './Duenno'

class Animal extends Owner{
    constructor(nameOwner, direccion, telefono, nombreMascota, tipoMascota, enfermedad){
        super(nameOwner, direccion, telefono)
        this.nombreMascota = nombreMascota;
        this.tipoMascota = tipoMascota;
        this.enfermedad = enfermedad
    }
    getNombreMascota(){
        return this.nombreMascota; 
    }
    getEspecie(){
        return this.tipoMascota
    }
    getEnfermedad(){
        return this.enfermedad;
    }
    showData(){
    //    console.log(`${this.nameOwner} ${this.direccion} ${this.telefono} ${this.nombreMascota} ${this.tipoMascota} ${this.enfermedad}`);
    const data = document.getElementById("data");
    data.innerHTML += `
    <ul class="listAnimal">
         <li>El nombre del dueño es: ${this.nameOwner}</li>
         <li>La dirección es: ${this.direccion}</li>
         <li>El teléfono es: ${this.telefono}</li>
         <li>Nombre del Paciente: ${this.nombreMascota}</li>
         <li>Especie: ${this.tipoMascota}</li>
         <li>Patología presente: ${this.enfermedad}</li>
     </ul>
    
    `
    



    }


}






export default Animal