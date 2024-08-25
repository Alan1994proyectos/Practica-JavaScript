//!  datos de  usuario

alert(" A continuacion llenaras tus datos")

// Validacion de edad  usuario
//! NOTA: Faltan los ESC en caso de no querer continuar
let edadUsuario;
do {
    let anioDeNacimiento = parseInt(prompt("Ingrese su año de nacimiento: "));
    if (isNaN(anioDeNacimiento) || anioDeNacimiento == "") {
        alert("Error: Ingrese un año válido");
        continue;
    }
    let anioActual = 2024;
    edadUsuario = anioActual - anioDeNacimiento;
    if (edadUsuario < 18) {
        alert("ERROR: Debes ser mayor de edad para continuar");
    }
} while (edadUsuario < 18 || isNaN(edadUsuario));

console.log("Edad de usuario: " + edadUsuario);


// Nombre de usuario
let nombreUsuario;
do {
    nombreUsuario = prompt("Ingrese su nombre: ");
    if (nombreUsuario == "") {
        alert("Error: Ingrese un nombre válido");
    }
} while (nombreUsuario == "");

console.log("Nombre de usuario: " + nombreUsuario);

// Apellido de usuario
let apellidoUsuario;
do {
    apellidoUsuario = prompt("Ingrese su apellido: ");
    if (apellidoUsuario == "") {
        alert("Error: Ingrese un nombre válido");
    }
} while (apellidoUsuario == "");

console.log("Apellido de usuario :" + apellidoUsuario)

// Dirección de envío

// Cantidad de usuarios registrados
//!NOTA ! aqui iria un contador de usuarios registrados con exito 

alert("USUARIO REGISTRADO !")



alert(" Ya puedes seleccionar tus Productos :" + " " + nombreUsuario +  " " + apellidoUsuario )


let productosPredefinidos = [
    { nombre: "Caja de 12 colores", precio: 1500 },
    { nombre: "Pack de 6 Borradores", precio: 800 },
    { nombre: "Pack de 100 Hojas de linea", precio: 1000 },
    { nombre: "Pack de 100 Hojas cuadriculadas", precio: 1200 },
    { nombre: "Resma de Hojas", precio: 2000 }
  ];
  
  let listaDeCompras = [];
  
  function mostrarMenu() {
    let opcion = prompt("Seleccione una opción:\n1. Agregar producto\n2. Ver lista de compras\n3. Salir");
    switch (opcion) {
      case "1":
        console.log("El usuario seleccionó la opción 1: Agregar producto");
        let productoSeleccionado = prompt("Seleccione un producto:\n1. Caja de 12 colores\n2. Pack de 6 Borradores\n3. Pack de 100 hojas de linea\n4. Pack de 100 Hojas cuadriculadas\n5. Resma de hojas");
        switch (productoSeleccionado) {
          case "1":
            listaDeCompras.push(productosPredefinidos[0]);
            break;
          case "2":
            listaDeCompras.push(productosPredefinidos[1]);
            break;
          case "3":
            listaDeCompras.push(productosPredefinidos[2]);
            break;
          case "4":
            listaDeCompras.push(productosPredefinidos[3]);
            break;
          case "5":
            listaDeCompras.push(productosPredefinidos[4]);
            break;
          default:
            console.log("El usuario seleccionó una opción inválida");
            alert("Opción inválida. Por favor, seleccione una opción válida.");
            break;
        }
        mostrarMenu();
        break;
      case "2":
        console.log("El usuario seleccionó la opción 2: Ver lista de compras");
        let listaDeComprasTexto = "Lista de compras:\n";
        listaDeCompras.forEach(producto => {
          listaDeComprasTexto += `${producto.nombre} - $${producto.precio}\n`;
        });
        alert(listaDeComprasTexto);
        mostrarMenu();
        break;
      case "3":
        console.log("El usuario seleccionó la opción 3: Salir");
        alert("Gracias por elegirnos, vuelva pronto!");
        break;
      default:
        console.log("El usuario seleccionó una opción inválida");
        alert("Opción inválida. Por favor, seleccione una opción válida.");
        mostrarMenu();
        break;
    }
  }
  
  mostrarMenu();

  //! NOTA ! Falta  introducir una totalizacion de productos seleccionados ,para la facturacion.