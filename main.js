/* ======= COUNTDOWN ======= */

function updateTimer() {
  let future = Date.parse("may 01, 2022 01:30:00");
  let now = new Date();
  let diff = future - now;

  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let mins = Math.floor(diff / (1000 * 60));
  let secs = Math.floor(diff / 1000);

  let d = formatTime(days)
  let h = formatTime(hours - days * 24)
  let m = formatTime(mins - hours * 60)
  let s = formatTime(secs - mins * 60)

  function formatTime(time){
    return time < 10 ? `0${time}` : time;
  }

  document.getElementById("timer").innerHTML =
  `${d} : ${h} : ${m} : ${s}`
}

setInterval('updateTimer()', 1000);

/* ======= MODAL ======= */

const Modal = {
  open(){
    document.querySelector('.modal-overlay').classList.add('active');
  },
  close(){
    document.querySelector('.modal-overlay').classList.remove('active');
    //Limpar os fields quando fechar
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
  }
}