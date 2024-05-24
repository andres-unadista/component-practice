import React from 'react';

export const FourthComponent = () => {
  // Eventos
  const handleClicked = (e) => alert('Click!');
  const handleDoubleClicked = (e) => {
    alert('Has hecho doble click al botón');
  };
  // onMouseEnter y onMouseLeave con dos funciones
  const handleMouseEnter = (e) => {
    console.log('Has entrado a mi caja con el Mouse!! ');
  };

  const handleMouseLeave = (e) => {
    console.log('Has salido de mi caja!! ');
  };

  // onMouseEnter y onMouseLeave con una sola función con Alert
  const handleMouse = (e, action) => {
    alert(`Has ${action}  la caja`);
  };

  // onMouseEnter y onMouseLeave con una sola función con  Console Log
  const handleMouseCl = (e, action) => {
    console.log(`Has ${action}  la caja`);
  };

  // onFocus
  const handleFocus = (e) => {
    console.log('Evento focus, dentro del input');
  };

  const onLeaveInput = (e) => {
    console.log('Evento blur, salir del input');
  };

  return (
    <div>
      <h2>Eventos en React</h2>
      <button
        onClick={() => {
          console.log('Hola se hizó click');
        }}
      >
        Haz click!
      </button>
      <button onClick={handleClicked}>Haz click handle!</button>
      {/* Evento Mouse Enter y Mouse Leave */}
      <hr />
      <div>
        <button onClick={handleClicked}>Aquí también haz Click!!</button>
      </div>

      {/* Evento Doble Click */}
      <div>
        <button onDoubleClick={handleDoubleClicked}>Haz doble click!!</button>
      </div>

      {/* Evento Mouse Enter y Mouse Leave */}
      <hr />
      <div id="box">
        <div id="box1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <p>Pasa el Mouse por encima!!!</p>
        </div>
        <div
          id="box2"
          onMouseEnter={(e) => handleMouse(e, 'entrado a')}
          onMouseLeave={(e) => handleMouse(e, 'salido de')}
        >
          <p>Pasa el Mouse por encima!!!</p>
        </div>
        <div
          id="box3"
          onMouseEnter={(e) => handleMouseCl(e, 'entrado a')}
          onMouseLeave={(e) => handleMouseCl(e, 'salido de')}
        >
          <p>Pasa el Mouse por encima!!!</p>
        </div>
      </div>
      {/* Evento Focus y Blur */}
      <input className="mt-5" type="text" placeholder="Escribe tu nombre" onFocus={handleFocus} onBlur={onLeaveInput} />
    </div>
  );
};
