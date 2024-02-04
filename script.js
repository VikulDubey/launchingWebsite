const [days, hours, minutes, seconds] = document.querySelectorAll(
  "#days, #hours, #minutes, #seconds"
);

const launchingTime = new Date("16 March 2024 12:10:00");

const intervalId = setInterval(() => {
  const launchingTimeInMilliseconds = launchingTime.getTime();
  const timeRightNow = new Date().getTime();
  const difference = launchingTimeInMilliseconds - timeRightNow;
  const mySec = Math.floor(difference / 1000);
  const myMin = Math.floor(mySec / 60);
  const myHour = Math.floor(myMin / 60);
  const myDay = Math.floor(myHour / 24);
  seconds.innerHTML = `${mySec % 60}`;
  minutes.innerHTML = `${myMin % 60}`;
  hours.innerHTML = `${myHour % 24}`;
  days.innerHTML = `${myDay}`;
  if (myDay < 0) {
    clearInterval(intervalId);
    seconds.innerHTML = "00";
    minutes.innerHTML = "00";
    hours.innerHTML = "00";
    days.innerHTML = "00";
  }
}, 1000);
