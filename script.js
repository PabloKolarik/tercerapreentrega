let pokemon = [
    {
        id: 1,
        nombre: "Bulbasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 10,
        img: "./img/001.png"

    },
    {
        id: 2,
        nombre: "Ivysaur",
        tipo: "planta",
        numevo: 3,
        color: "azul",
        precio: 20,
        img: "./img/002.png"
    },
    {
        id: 3,
        nombre: "Venasaur",
        tipo: "planta",
        numevo: 3,
        color: "verde",
        precio: 30,
        img: "./img/003.png"
    },
    {
        id: 4,
        nombre: "Charmander",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 10,
        img: "./img/004.png"
    },
    {
        id: 5,
        nombre: "Charmeleon",
        tipo: "fuego",
        numevo: 3,
        color: "rojo",
        precio: 20,
        img: "./img/005.png"

    },
    {
        id: 6,
        nombre: "Charizard",
        tipo: "fuego",
        numevo: 3,
        color: "naranja",
        precio: 30,
        img: "./img/006.png"
    },
    {
        id: 7,
        nombre: "Squirtle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 10,
        img: "./img/007.png"
    },
    {
        id: 8,
        nombre: "Wartortle",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 20,
        img: "./img/008.png"
    },
    {
        id: 9,
        nombre: "Blastoise",
        tipo: "agua",
        numevo: 3,
        color: "azul",
        precio: 30,
        img: "./img/009.png"
    },
    {
        id: 10,
        nombre: "Caterpie",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 10,
        img: "./img/010.png"
    },
    {
        id: 11,
        nombre: "Metapod",
        tipo: "bicho",
        numevo: 3,
        color: "verde",
        precio: 20,
        img: "./img/011.png"
    },
    {
        id: 12,
        nombre: "Butterfree",
        tipo: "bicho",
        numevo: 3,
        color: "violeta",
        precio: 30,
        img: "./img/012.png"
    },
    {
        id: 13,
        nombre: "Weedle",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 10,
        img: "./img/013.png"
    },
    {
        id: 14,
        nombre: "Kakuna",
        tipo: "bicho",
        numevo: 3,
        color: "marron",
        precio: 20,
        img: "./img/014.png"
    },
    {
        id: 15,
        nombre: "Beedrill",
        tipo: "bicho",
        numevo: 3,
        color: "amarillo",
        precio: 30,
        img: "./img/015.png"
    },
    {
        id: 16,
        nombre: "Pidgey",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 10,
        img: "./img/016.png"
    },
    {
        id: 17,
        nombre: "Pidgeotto",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 20,
        img: "./img/017.png"
    },
    {
        id: 18,
        nombre: "Pidgeot",
        tipo: "normal",
        numevo: 3,
        color: "marron",
        precio: 30,
        img: "./img/018.png"
    },
    {
        id: 19,
        nombre: "Rattata",
        tipo: "normal",
        numevo: 2,
        color: "violeta",
        precio: 10,
        img: "./img/019.png"
    },
    {
        id: 20,
        nombre: "Raticate",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/020.png"
    },
    {
        id: 21,
        nombre: "Spearow",
        tipo: "normal",
        numevo: 2,
        color: "rojo",
        precio: 10,
        img: "./img/021.png"
    },
    {
        id: 22,
        nombre: "Fearow",
        tipo: "normal",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/022.png"
    },
    {
        id: 23,
        nombre: "Ekans",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 10,
        img: "./img/023.png"
    },
    {
        id: 24,
        nombre: "Arbok",
        tipo: "veneno",
        numevo: 2,
        color: "violeta",
        precio: 20,
        img: "./img/024.png"
    },
    {
        id: 25,
        nombre: "Pikachu",
        tipo: "electrico",
        numevo: 2,
        color: "amarillo",
        precio: 10,
        img: "./img/025.png"
    },
    {
        id: 26,
        nombre: "Raichu",
        tipo: "electrico",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/026.png"
    },
    {
        id: 27,
        nombre: "Sandshrew",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 10,
        img: "./img/027.png"
    },
    {
        id: 28,
        nombre: "Sandslash",
        tipo: "tierra",
        numevo: 2,
        color: "marron",
        precio: 20,
        img: "./img/028.png"
    },


]





/*

let opcion
let opcionSub
let menu = "Bienvenido, seleccione la opcion desesada\n1 - para listar pokemon disponibles \n2 - para filtar \n3 - para ver carrito \n4 - para ordenar por precio \n5 - para agregar pokemon al carrito \n0 - para finalizar"
let subMenu = "Elija el filtro\n1 - por tipo \n2 - por color \n3 - por numero de evoluciones \n4 - por nombre \n0 - Para volver"
let carrito = []

do {
    opcion = Number(prompt(menu))
    switch (opcion) {
        case 1:
            alert("Pokemon disponible: \n" + listado(pokemon))

            break;



        case 2:
            do {
                opcionSub = Number(prompt(subMenu))
                switch (opcionSub) {
                    case 1:
                        let tipo = prompt("Ingrese el tipo de pokemon").toLocaleLowerCase()
                        let pokemonTipo = pokemon.filter(pokemon => pokemon.tipo === tipo)
                        if (pokemonTipo.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon tipo " + tipo + ": \n" + listado(pokemonTipo))

                        }

                        break;

                    case 2:
                        let color = prompt("Ingrese el color de pokemon que desea").toLocaleLowerCase()
                        let pokemonColor = pokemon.filter(pokemon => pokemon.color === color)

                        if (pokemonColor.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon color " + color + ": \n" + listado(pokemonColor))

                        }

                        break;

                    case 3:
                        let numevo = prompt("Ingrese cuantas evoluciones desea")
                        let pokemonnumEvo = pokemon.filter(pokemon => pokemon.numevo == numevo)
                        if (pokemonnumEvo.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon con numero " + numevo + "de evoluciones" + ": \n" + listado(pokemonnumEvo))

                        }

                        break;

                    case 4:
                        let nombre = prompt("Ingrese el nombre del pokemon que desea")
                        let pokemonNombre = pokemon.filter(pokemon => pokemon.nombre === nombre)
                        if (pokemonNombre.length === 0) {
                            alert("Ingrese opcion correcta")
                        } else {
                            alert("Pokemon " + nombre + " esta disponible para el viaje" + ": \n" + listado(pokemonNombre))

                        }
                        break;



                }
            } while (opcionSub != 0);

            break;




        case 3:
            alert("Pokemon en el carrito: \n" + listado(carrito))

            break;

        case 4:
            pokemon.sort((a, b) => a.precio - b.precio);

            alert(listado(pokemon))
            break;






        case 5:
            let idPokemon = Number(prompt("pokemon disponible: \n" + listado(pokemon)))
            let pokemonSeleccionado = pokemon.find(pokemon => pokemon.id === idPokemon)
            if (pokemonSeleccionado) {
                carrito.push(pokemonSeleccionado)
                alert("Pokemon agregado al Carrito")

            } else {
                alert("seleccione un id correcto")

            }

            break;

        default:
            if (opcion != 0) {
                alert("Ingrese una opcion valida")
            }

            break;

    }


} while (opcion != 0)


function listado(pokemon) {
    return pokemon.map(pokemon => {
        return `ID: ${pokemon.id} Nombre: ${pokemon.nombre} Precio: ${pokemon.precio}`

    }).join("\n")
}
*/





let chango = []
let carroMuestra = document.getElementById("chango")

cargaPokemon(pokemon)



function cargaPokemon(arrayPokemon) {
    let contenedor = document.getElementById("pokemonCard")
    contenedor.innerHTML = ""
    arrayPokemon.forEach(pokemon => {
        let tarjetaPokemon = document.createElement("div")
        tarjetaPokemon.className = "tarjetaPokemon col-10 col-md-5 col-lg-4 col-xl-4 col-xxl-3"

        tarjetaPokemon.innerHTML = `
    <h2 class=tituloCard>${pokemon.nombre}</h2>
    <img src=${pokemon.img}>
    <p>tipo ${pokemon.tipo}</p>
    <p>color principal: ${pokemon.color}</p>
    <p>Valor: ${pokemon.precio}</p>
    <button id=${pokemon.id} class="boton"> Agregar al carrito </button>
    `
        contenedor.appendChild(tarjetaPokemon)

        let boton = document.getElementById(pokemon.id)
        boton.addEventListener("click", agregarAlCarro)
    })
}

let buscador = document.getElementById("buscador")

buscador.addEventListener("input", filtroNombre)
function filtroNombre() {
    let arrayPokemon = pokemon.filter(pokemon => pokemon.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    cargaPokemon(arrayPokemon)
}



if (localStorage.getItem("chango")) {
    carrito = JSON.parse(localStorage.getItem("chango"))    
}



function agregarAlCarro(e) {
    
    /*if (chango.some(pokemon => pokemon.id === pokemonBuscado.id)) {

    } else {
        chango.push({
            id: pokemonBuscado.id,
            nombre: pokemonBuscado,
            precio: pokemonBuscado.precio,
            cantidad: 1,

        })
    }*/
    let pokemonBuscado = pokemon.find(pokemon => pokemon.id === Number(e.target.id))
    chango.push(pokemonBuscado)
    cargaCarro(chango)
    
}

function cargaCarro(arrayPokemon) {
    carroMuestra.innerHTML = ""
    arrayPokemon.forEach(pokemon => {
        carroMuestra.innerHTML += `<h3>${pokemon.nombre}</h3>`
    })
    
}
