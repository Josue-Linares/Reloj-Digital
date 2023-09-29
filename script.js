function tiempo() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = "AM"
    if(h == 0){
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = "PM"
    }

    h = (h <10) ? "0" + h:h;
    m = (m <10) ? "0" + m:m;
    s = (s <10) ? "0" + s:s;
    let tiempoDigital = h + ":" + m + ":" + s + " " + session;
    document.getElementById("miReloj").innerHTML = tiempoDigital;

    setInterval(tiempo,1000);
}

tiempo()


function dia() {
    let daysOfWeek = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let day = new Date();
    let d = day.getDay();
    let imprimirDia = `Estamos en ${daysOfWeek[d]}`;
    document.getElementById("miDia").innerHTML = imprimirDia;
  }


  dia();