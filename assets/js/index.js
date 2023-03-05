const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "https://quintafuerzamx.s3.us-east-2.amazonaws.com/Leopard/uploads/2021/02/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

//++++ constantes +++++++++++++++++++++++++++++++++++++++++++++++++++++++

const propiedades = document.querySelector(".propiedades");
const total = document.querySelector("#tt");
const btn = document.querySelector("#btn");
let contador;

const prop = (fill) => {//--- funcion con el contenido a editar en el HTML ---
  return (`<div class="propiedad">  
                <div class="img" style="background-image: url(${fill.src})"></div>
                <section>
                    <h5>${fill.name}</h5>
                    <div class="d-flex justify-content-between">
                        <p>Cuartos: ${fill.rooms}</p>
                        <p>Metros: ${fill.m}</p>
                    </div>
                    <p class="my-3">${fill.description}</p>
                    <button class="btn btn-info ">Ver más</button>
                </section>
              </div>`
  )
};
//-----------------------------------------------------------------------

//++++ funcion para primera carga de la página ++++++++++++++++++++++
function inicio() {
  let html = "";
  for (let propiedad of propiedadesJSON) {
    html += prop(propiedad);
  }
  propiedades.innerHTML = html;
  total.innerHTML = propiedadesJSON.length;
}
//-----------------------------------------------------------------------

//++++ funcion para actualizar el total luego del filtro ++++++++++++++++
function ttls(contador) {
  total.innerHTML = contador;
}
//-----------------------------------------------------------------------

//++++ funcion para validación y filtro del usuario +++++++++++++++++++++
function validate() {
  let rooms = document.querySelector("#rooms").value;
  let desde = document.querySelector("#desde").value;
  let hasta = document.querySelector("#hasta").value;
  let html = "";
  let contador = 0;

  //recorre el arreglo y muestra el filtro del usuario
  for (const propiedad of propiedadesJSON) {
    if (propiedad.rooms >= rooms && propiedad.m >= desde && propiedad.m <= hasta) {
      html += prop(propiedad);
      contador += 1;
    }
  }
  //109 a 116: alerta al usuario de que los valores ingresados no son correctos
  if (rooms == 0 || desde == 0 || hasta == 0) {
    alert("Debes completar todos los espacios con valores mayores a 0.");
    return;
  }

  if (contador == 0) {
    alert("Lo sentimos, no existen propiedades con esas características.")
    return;
  } else {
    inicio();
  }
  propiedades.innerHTML = html; //se edita el html
  ttls(contador) //se actualiza el total 

}
//-----------------------------------------------------------------------

//se llama a la función inicial para primera carga de la pagina
inicio();

//se agrega un evento click al boton de búsqueda para filtrar y validad los valores ingresados
btn.addEventListener("click", validate);