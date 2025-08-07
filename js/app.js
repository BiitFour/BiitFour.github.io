// // Registro del service worker
// if("serviceWorker" in navigator){
//     window.addEventListener("load", function(){
//         this.navigator.serviceWorker
//         .register("/serviceWorker.js")
//         .then(res => console.log("service worker registered"))
//         .catch(err => console.log("service worker not registered", err));
//     });
// }

//  // // Logica de formulario de contacto
//  document.addEventListener("DOMContentLoaded", function () {
//    const contactForm = document.getElementById("contact-form");

//    if (contactForm) {
//      contactForm.addEventListener("submit", function (e) {
//       e.preventDefault();

//       // Mostrar alerta de éxito
//       Swal.fire({
//         title: '¡Mensaje enviado!',
//         text: 'Gracias por contactarnos. Te responderemos pronto.',
//         icon: 'success',
//         confirmButtonColor: '#4CAF50',
//         confirmButtonText: 'Cerrar'
//       });

//       // Limpiar formulario
//       contactForm.reset();
//     });
//   }
// });

