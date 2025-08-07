// // Verifica si está soportado
// if ('Notification' in window && 'serviceWorker' in navigator) {
//   navigator.serviceWorker.register('serviceWorker.js').then(registration => {
//     console.log("ServiceWorker registrado correctamente");

//     // // Detectar envío de formulario
//     const formulario = document.getElementById("contact-form");

//     if (formulario) {
//       formulario.addEventListener("submit", function (e) {
//         e.preventDefault();

//     //     // Aquí puedes agregar tu lógica para enviar los datos con Firebase o fetch
//     //     // Simulamos envío exitoso:
//         Notification.requestPermission().then(permission => {
//           if (permission === "granted") {
//             registration.showNotification("¡Gracias por tu mensaje!", {
//               body: "Nos pondremos en contacto contigo pronto.",
//               icon: "icons/icons-1.png",
//               badge: "icons/icons-2.png",
//               vibrate: [100, 50, 100],
//             });
//           }
//         });

//         // Mostrar alerta visual en pantalla también
//         if (window.Swal) {
//           Swal.fire({
//             icon: 'success',
//             title: 'Mensaje enviado',
//             text: 'Gracias por escribirnos.',
//             timer: 3000,
//             showConfirmButton: false
//           });
//         }

//         // Limpiar el formulario
//         formulario.reset();
//       });
//     }
//   });
// }


