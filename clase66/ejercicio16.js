
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b 
//que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string 
//con un mensaje avisando qué jugada ganó (o si hubo empate)

const comprobarGanador = (jugadaJugador1, jugadaJugador2) => {
    if (jugadaJugador1 == jugadaJugador2) {
      return;
    }
    const ganoJugador1 =
      (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera") ||
      (jugadaJugador1 == "tijera" && jugadaJugador2 == "papel") ||
      (jugadaJugador1 == "papel" && jugadaJugador2 == "piedra");
  
    if (ganoJugador1) {
      puntaje1++;
    } else {
      puntaje2++;
    }
  };
  









jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!