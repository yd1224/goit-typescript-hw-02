/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum weekDay {
  monday = "Monday",
  tuesday = "Tuesday",
  wednesday = "Wednesday",
  thursday = "Thursday",
  friday = "Friday",
  saturday = "Saturday",
  sunday = "Sunday",
}

function isWeekend(dayOfWeek: weekDay):boolean {
  if (dayOfWeek === weekDay.saturday || dayOfWeek === weekDay.sunday) {
    return true;
  } else {
    return false;
  }
}