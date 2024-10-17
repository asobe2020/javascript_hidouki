const output = document.querySelector("#output");
const button = document.querySelector("#set-alarm");
const name = document.querySelector("#name");
const delay = document.querySelector("#delay");

// function setAlarm() {
//   setTimeout(() => {
//     output.textContent = `起きて！${endTime}`;
//   }, 1000);
// }


function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error("アラームの待ち時間を負数にすることはできません。");
      }
      setTimeout(() => {
        resolve(`${person}、起きて！`);
      }, delay);
    });
  }

button.addEventListener('click', () => {
    alarm(name.value, delay.value)
})