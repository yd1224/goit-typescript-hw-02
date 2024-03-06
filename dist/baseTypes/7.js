/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
var weekDay;
(function (weekDay) {
    weekDay["monday"] = "Monday";
    weekDay["tuesday"] = "Tuesday";
    weekDay["wednesday"] = "Wednesday";
    weekDay["thursday"] = "Thursday";
    weekDay["friday"] = "Friday";
    weekDay["saturday"] = "Saturday";
    weekDay["sunday"] = "Sunday";
})(weekDay || (weekDay = {}));
function isWeekend(dayOfWeek) {
    if (dayOfWeek === weekDay.saturday || dayOfWeek === weekDay.sunday) {
        return true;
    }
    else {
        return false;
    }
}
//# sourceMappingURL=7.js.map