const calculateTime = () => {
  let inp = document.getElementById("timeInput").value;
  let scrum = inp.match(/(0[1-9]|1[0-2])(h|H)|([0-5][0-9])(m|M)/g);
  let totalTime = 0,
    hours,
    minutes;
  if (scrum != null && scrum.length > 0) {
    scrum.forEach((item, index) => {
      if (item.match(/(0[1-9]|1[0-2])(h|H)/g)) {
        let time = parseInt(item) * 60;
        totalTime = totalTime + time;
      }
      if (item.match(/([0-5][0-9])(m|M)/g)) {
        let time = parseInt(item);
        totalTime = totalTime + time;
      }
    });
    hours = Math.floor(totalTime / 60);
    minutes = totalTime % 60;
    document.getElementById("output").innerHTML = "Total time: " + hours + "H : " + minutes + "M";
  } else {
    document.getElementById("output").innerHTML = "Time value is not found...";
  }
};

document.getElementById("calculate").addEventListener("click", calculateTime);
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("timeInput").value = "";
});
