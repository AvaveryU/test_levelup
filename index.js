const getTime = (endtime) => {
  const time = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 1000 / 60) % 60);
  return {
    total: time,
    minutes: minutes,
    seconds: seconds,
  };
};

const countingTime = (endtime) => {
  const blockCounter = document.querySelector(".order__counter");
  const counterId = blockCounter.querySelector("#counter");
  const counterText = blockCounter.querySelector(".order__text");
  const minutes = blockCounter.querySelector(".order__minutes");
  const seconds = counterId.querySelector(".order__seconds");

  function updateClock() {
    const time = getTime(endtime);
    minutes.innerHTML = ("0" + time.minutes).slice(-2) + " :";
    seconds.innerHTML = ("0" + time.seconds).slice(-2);
    if (time.total <= 0) {
      clearInterval(timeinterval);
      minutes.innerHTML = "акция закончилась!";
      seconds.innerHTML = "";
      counterText.innerHTML = "";
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
};

const deadline = new Date(Date.parse(new Date()) + 30 * 60 * 1000);
countingTime(deadline);

const form = document.querySelector(".order__form");
const formName = form.querySelector(".order__item_type_name");
const formNumber = form.querySelector(".order__item_type_number");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (formName.value >= 2 && formNumber.value.length === 11) {
    console.log("Данные отправлены!");
  }
});
