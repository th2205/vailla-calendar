export default class Calendar {
  constructor() {
    this._target = new Date();
  }

  _renderTitle(year, month, date) {
    const $title = document.querySelector(".title");

    $title.textContent = `${year}년 ${month}월 ${date}일`;
  }

  render() {
    const year = this._target.getFullYear();
    const month = this._target.getMonth() + 1;
    const curDate = this._target.getDate();
    const lastDate = new Date(year, month, 0).getDate();
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    const curDay = this._target.getDay();
    const html = [];
    const $dateBody = document.querySelector(".date-container");

    for (let i = 0; i < curDay; i++) {
      html.unshift(`<div class="date disabled">${prevMonthLastDate - i}</div>`);
    }

    for (let i = 1; i <= lastDate; i++) {
      html.push(`<div class="date">${i}</div>`);
    }

    for (let i = 1; ; i++) {
      if (html.length % 7 === 0) break;
      html.push(`<div class="date disabled">${i}</div>`);
    }

    $dateBody.innerHTML = html.join("");
    this._renderTitle(year, month, curDate);
  }

  renderNextMonth() {
    const year = this._target.getFullYear();
    const month = this._target.getMonth();

    this._target = new Date(year, month + 1);
    this.render();
  }

  renderPrevMonth() {
    const year = this._target.getFullYear();
    const month = this._target.getMonth();

    this._target = new Date(year, month - 1);
    this.render();
  }
}
