document.addEventListener("DOMContentLoaded", function () {
  const batteryLevel = document.querySelector(".battery-level");
  const animationDuration = 2000; // Duración de la animación en milisegundos

  function chargeBattery() {
      batteryLevel.style.transition = "none"; // Desactiva la transición
      batteryLevel.style.width = "0"; // Reinicia la batería
      setTimeout(() => {
          batteryLevel.style.transition = `width ${animationDuration / 1000}s linear`; // Activa la transición suave
          batteryLevel.style.width = "100%"; // Llena la batería
      }, 0);
      setTimeout(resetBattery, animationDuration); // Espera antes de reiniciar la carga (ajusta según tus necesidades)
  }

  function resetBattery() {
      batteryLevel.style.transition = "none"; // Desactiva la transición
      batteryLevel.style.width = "0"; // Reinicia la batería
      setTimeout(() => {
          batteryLevel.style.transition = `width ${animationDuration / 1000}s linear`; // Activa la transición suave
          batteryLevel.style.width = "100%"; // Llena la batería
      }, 0);
      setTimeout(chargeBattery, animationDuration); // Espera antes de comenzar un nuevo ciclo de carga (ajusta según tus necesidades)
  }

  chargeBattery(); // Inicia la animación al cargar la página
});
