const notificationNumber = document.querySelector(".notifications-number");

const unreadNotifMark = document.querySelector(".mark-webber");
const unreadNotifAngela = document.querySelector(".angela-gray");
const unreadNotifJacob = document.querySelector(".jacob-thompson");

const circleMark = document.querySelector(".circle-mark");
const circleAngela = document.querySelector(".circle-angela");
const circleJacob = document.querySelector(".circle-jacob");

const markNumber = () => {
  notificationNumber.textContent = "0";

  unreadNotifMark.style.backgroundColor = "white";
  unreadNotifAngela.style.backgroundColor = "white";
  unreadNotifJacob.style.backgroundColor = "white";

  circleMark.style.backgroundColor = "white";
  circleAngela.style.backgroundColor = "white";
  circleJacob.style.backgroundColor = "white";
};
