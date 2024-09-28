// Constructor para el objeto Automóvil
function Automovil(marca, modelo, color, anio, titular) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
    this.titular = titular;
  }
  
  // Método para vender el automóvil y cambiar de titular
  Automovil.prototype.venderAutomovil = function(nuevoTitular) {
    this.titular = nuevoTitular;
  };
  
  // Método para ver los detalles del automóvil
  Automovil.prototype.verAuto = function() {
    return `${this.marca} ${this.modelo} - ${this.anio} - Titular: ${this.titular}`;
  };
  
  // Método para encender el automóvil
  Automovil.prototype.encender = function() {
    alert("El automóvil está en marcha");
  };
  
  // Crear 3 instancias de Automóviles
  const auto1 = new Automovil('Toyota', 'Corolla', 'Rojo', 2020, 'Carlos Pérez');
  const auto2 = new Automovil('Honda', 'Civic', 'Azul', 2018, 'María López');
  const auto3 = new Automovil('Ford', 'Fiesta', 'Negro', 2019, 'Pedro Gómez');
  
  // Función para mostrar los autos en pantalla
  function mostrarAutos() {
    const infoAutosDiv = document.getElementById('infoAutos');
    infoAutosDiv.innerHTML = ''; // Limpiar el contenido previo
    
    // Mostrar la información de cada auto utilizando el método verAuto()
    const autos = [auto1, auto2, auto3];
    autos.forEach(auto => {
      const p = document.createElement('p');
      p.textContent = auto.verAuto();
      infoAutosDiv.appendChild(p);
    });
  }
  
  // Asignar el evento al botón para mostrar los autos
  document.getElementById('mostrarAutos').addEventListener('click', mostrarAutos);
  