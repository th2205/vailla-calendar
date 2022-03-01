import Calendar from "./Calendar";

const calendar = new Calendar();
const $nextButton = document.querySelector(".next");
const $prevButton = document.querySelector(".prev");
calendar.render();

$nextButton.addEventListener("click", () => calendar.renderNextMonth());
$prevButton.addEventListener("click", () => calendar.renderPrevMonth());
