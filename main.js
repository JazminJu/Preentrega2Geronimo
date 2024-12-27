const Ciudad = function(nombre, poblacion, pais){
    this.nombre= nombre
    this.poblacion = poblacion
    this.pais = pais
}
let Ciudad1  = new Ciudad("Cordoba",1956785,"Argentina")
let Ciudad2  = new Ciudad("Londres",2880989,"Inglaterra")
let Ciudad3  = new Ciudad("Florencia",1275000,"Italia")
let Ciudad4  = new Ciudad("Oslo",690000,"Noruega")
let Ciudad5  = new Ciudad("Marsella",1500000,"Francia")
let Ciudad6  = new Ciudad("Ciudad de Panama",460000,"Panama")
let Ciudad7  = new Ciudad("San Pablo",6900000,"Brasil")

let ciudades = [Ciudad1,Ciudad2,Ciudad3,Ciudad4,Ciudad5,Ciudad6,Ciudad7]

function filtrarCiudad() {
    let queCiudad = prompt("ingresa la Ciudad a buscar:")
    let resultado = ciudades.filter((x)=>x.nombre.toUppercase().includes(queCiudad))
    if (resultado.length > 0) {
        console.table(resultado)
    }else{
        alert("Esta ciudad no se ha encontrado!")
    }
}

function agregarCiudad(){
let nombre= prompt("Ingresa el nombre de la Ciudad")
let poblacion = prompt("Ingresa la población que tiene la Ciudad")
let pais = prompt("Ingresa el país a la que pertenece la Ciudad")

if(isNaN(poblacion) || isNaN(pais) || nombre == ""){
    alert("Debes ingresar valores válidos")
    return
}
let Ciudad = new Ciudad (nombre,poblacion,pais)
ciudades.push(Ciudad)
console.table(ciudades)
}