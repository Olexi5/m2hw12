const form = document.querySelector("#form")
const input = document.querySelector("#date")
class Timer {
  constructor(date) {
    this.targetDate = new Date(date);
  }
  dates() {
    const time = this.targetDate-new Date()
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    document.querySelector('[data-value="days"]').textContent = days;
    document.querySelector('[data-value="hours"]').textContent = hours;
    document.querySelector('[data-value="mins"]').textContent = mins;
    document.querySelector('[data-value="secs"]').textContent = secs;
  }
  timer() {
    this.dates();
    setInterval(()=>this.dates(), 1000);
  }
}
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log(input.value)
    const first = new Timer(input.value);
    first.timer();
})
