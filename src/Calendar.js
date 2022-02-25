const DAYS = ["일", "월", "화", "수", "목", "금", "토"];

export default class Calendar {
  constructor() {
    this.today = new Date();
    this.currentYear = this.today.getFullYear();
    this.currentMonth = this.today.getMonth() + 1;
    this.firstDate = new Date(
      this.currentYear,
      this.currentMonth - 1,
      1,
    ).getDate();
    this.lastDate = new Date(this.currentYear, this.currentMonth, 0).getDate();
    this.firstDay = new Date(
      this.currentYear,
      this.currentMonth - 1,
      1,
    ).getDay();
    this.lastDay = new Date(this.currentYear, this.currentMonth, 1).getDay();
    console.log(this.currentYear);
    console.log(this.currentMonth);
    console.log(this.firstDate);
    console.log(this.lastDate);
    console.log(this.firstDay);
  }

  render() {
    const html = [];
    const $dateBody = document.querySelector(".date-container");
    let curDate = 1;
    let isStart = false;

    for (let i = 0; i <= 31; i++) {
      const curDay = i;

      if (curDay === this.firstDay) isStart = true;

      if (isStart) {
        html.push(`
                <div class="date">
                    ${curDate}
                </div>
            `);
        curDate++;
      } else {
        html.push(`
        <div class="date">
            
        </div>
    `);
      }
    }

    $dateBody.innerHTML = html.join("");
  }
}
