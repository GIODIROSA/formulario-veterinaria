//class padre

class Owner {
    constructor(nameOwner, direccion, telefono){
        this.nameOwner = nameOwner;
        this.direccion = direccion;
        this.telefono = telefono;
    }
    getOwner(){
        return this.nameOwner;
    }
    getDirection(){
        return this.direccion;
    }
    getTelf(){
        return this.telefono
    }
}



export default Owner