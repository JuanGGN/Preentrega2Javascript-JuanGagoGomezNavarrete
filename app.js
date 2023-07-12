alert("Bienvenidos a MotoGrecia!");

prompt("Ingrese su nombre");

prompt("Ingrese su edad");

alert("A continuación podra consultar el stock existente. Somos distribuidor oficial de Benelli, ZANELLA y GILERA")


const motos = [
	{
		marca: 'Zanella',
		modelo: 'ceccato',
		year: 2015,
		precio: 50000,
		color: 'Rojo',
		
	},
	{ 
        marca: 'Gilera', 
        modelo: 'VC', 
        year: 2012, 
        precio: 40000, 
        color: 'Negro', 
        
    },
	{
		marca: 'Benelli',
		modelo: '180s',
		year: 2021,
		precio: 60000,
		puertas: 2,
		color: 'Blanco',
		
	},
	{ 
        marca: 'Zanella', 
        modelo: 'RX', 
        year: 2020, 
        precio: 35000,  
        color: 'Negro', 
        
    },
	{
		marca: 'Benelli',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		color: 'Verde',
		
	},
	{
		marca: 'Gilera',
		modelo: 'Saturno',
		year: 2011,
		precio: 25000,
		color: 'Blanco',
		
	},
	
]

let marca = prompt("Solicitar marca")
let year = prompt("Solicitar anio")
let minimo = prompt("Solicitar minimo")
let maximo = prompt("Solicitar maximo")
let color = prompt("Solicitar color")

const datosBusqueda = {
    marca: marca,
	modelo: '',
	year: year,
	minimo: minimo,
    maximo: maximo,
	color: color,
	
}

function mostrarMotos(motos){
    motos.forEach( moto => {
        console.log(moto.marca + " " + moto.modelo + " " + moto.year + " " + moto.puertas + " " + moto.precio + " " + moto.color)

        document.write("<p>" + moto.marca + " " + moto.modelo + " " + moto.year + " " + "" + " " + moto.precio + " " + moto.color + "</p>")

    })
}

function noRsultdos(){
    console.log("No hay STOCK")
    document.write("No hay STOCK")
}


function filtrarMarca(moto){
    if(datosBusqueda.marca){
        return moto.marca == datosBusqueda.marca
    }
    return moto;
}

function filtrarYear(moto){
    if(datosBusqueda.year){
        return moto.year == datosBusqueda.year
    }
    return moto;
}

function filtrarMinimo(moto){
    if(datosBusqueda.minimo){
        return moto.minimo >= datosBusqueda.minimo
    }
    return moto;
}

function filtrarMaximo(moto){
    if(datosBusqueda.maximo){
        return moto.maximo <= datosBusqueda.maximo
    }
    return moto;
}



function filtrarColor(moto){
    if(datosBusqueda.color){
        return moto.color == datosBusqueda.color
    }
    return moto;
}


function filtrarMotos(){
    let resultado = motos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarColor);


    if(resultado.length){
        mostrarMotos(resultado)
    }else {
        noRsultdos()
    }
}


filtrarMotos();
