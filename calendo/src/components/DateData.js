export default {
  now: new Date(),
  daysinMonth: new Date(this.now.getFullYear(), this.now.getMonth()+1, 0).getDate(),
  // weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  // dayOfTheWeek: this.now.getDay(),
  // nameOfTheWeek: this.weekdays[this.dayOfTheWeek],
  // previousMonth: this.now.getMonth(),
  // currYear: this.now.getFullYear(),
  // nameOfMonth: this.now.toLocaleString(
  //   'default', { month: 'long' }
  // ),
  // fullDateOfFirstDayOfMonth: new Date(`${this.nameOfMonth} ${1}, ${this.currYear} 01:15:00`),
  // exactDayOfWeek: this.fullDateOfFirstDayOfMonth.getDay(),
  // today: this.now.getDate(),
  // numberOfdaysInPreviousMonth: new Date(this.currYear, this.previousMonth, 0).getDate()
}
