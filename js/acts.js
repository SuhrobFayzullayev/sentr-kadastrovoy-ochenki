const daysContainer = document.querySelector(".days"),
  prev = document.querySelector(".prev"),
  next = document.querySelector(".next"),
  todayBtn = document.querySelector(".today-btn"),
  downloadDoc = document.querySelector(".events"),
  eventDay = document.querySelector(".event-day div"),
  children = document.querySelector(".days").children;
let currentMonths = document.querySelector("#current-date-month");
let currentYears = document.querySelector("#current-date-years");
let monthsMenu = document.querySelector(".select__month__body");
let yearsList = document.querySelector(".select__year__body");

let today = new Date();
let activeDay;
let month = today.getMonth();
let year = today.getFullYear();

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const eventsArr = [
  {
    day: "09",
    month: "08",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/005/ocj0178rptm42kgswpssoaao3yczj04f.ods",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      done: {
        status: true,
        title: "",
        url: "",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      error: {
        status: true,
        title: "",
        url: "",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
    },
  },
  {
    day: "07",
    month: "08",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/005/ocj0178rptm42kgswpssoaao3yczj04f.ods",
        docList: [
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      done: {
        status: true,
        title: "",
        url: "",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      error: {
        status: true,
        title: "",
        url: "",
        docList: [{ title: "test03", url: "test3" }],
      },
    },
  },
  {
    day: "11",
    month: "08",
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "Акт №АОКС-13_2021_000001.ods",
        url: "/upload/iblock/6d8/c3m7qhxx2hckzznha0fj7rirrke5370a.ods",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      done: {
        status: false,
        title: "",
        url: "",
        docList: [
          { title: "test01", url: "test1" },
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
      error: {
        status: true,
        title: "",
        url: "",
        docList: [
          { title: "test02", url: "test2" },
          { title: "test03", url: "test3" },
        ],
      },
    },
  },
];

function removeDuplicates(arr) {
  const uniqueObjects = {}; // Dublikatlarini o'chirish uchun bo'sh obyekt
  const result = []; // Yakuniy natijalarni saqlash uchun massiv

  for (const obj of arr) {
    const key = `${obj.day}-${obj.month}-${obj.year}`;

    if (!uniqueObjects[key]) {
      uniqueObjects[key] = true;
      result.push(obj);
    }
  }

  return result;
}

const uniqueObjectsArray = removeDuplicates(eventsArr);

let eventDate = {
  day: "",
  month: "",
  year: "",
};

let currentEvent = [];

const checkZero = (arg) => (arg < 10 ? `0${arg}` : arg);
const getCurrentDate = (dayArg, monthArg, yearArg = year) => {
  console.log(dayArg, monthArg);
  eventDate.day = checkZero(dayArg);
  eventDate.month = checkZero(monthArg);
  eventDate.year = yearArg;

  currentEvent = uniqueObjectsArray.filter(
    (v) =>
      v.day == eventDate.day &&
      v.month == eventDate.month &&
      v.year == eventDate.year
  );

  let eventDown = `
    <div class="progress-down ${
      currentEvent[0]?.files.progress.status ? "active" : ""
    }">
    ${currentEvent[0]?.files.progress.docList
      .map(
        (v) =>
          `<div class="event-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.6254 16.4999H17.2504V14.9999H17.6254C18.5205 15.0357 19.3932 14.7145 20.0514 14.1069C20.7097 13.4992 21.0996 12.655 21.1354 11.7599C21.1712 10.8648 20.8499 9.99215 20.2423 9.3339C19.6347 8.67564 18.7905 8.28573 17.8954 8.24992H17.2504L17.1754 7.63492C17.009 6.37226 16.3893 5.21313 15.4317 4.37346C14.4741 3.53379 13.244 3.07083 11.9704 3.07083C10.6968 3.07083 9.46664 3.53379 8.50906 4.37346C7.55148 5.21313 6.93178 6.37226 6.76538 7.63492L6.75038 8.24992H6.10538C5.21028 8.28573 4.36606 8.67564 3.75844 9.3339C3.15082 9.99215 2.82958 10.8648 2.86538 11.7599C2.90119 12.655 3.2911 13.4992 3.94936 14.1069C4.60761 14.7145 5.48028 15.0357 6.37538 14.9999H6.75038V16.4999H6.37538C5.17269 16.4923 4.01526 16.0404 3.12562 15.231C2.23599 14.4216 1.67694 13.3119 1.55598 12.1153C1.43502 10.9187 1.76067 9.71961 2.47032 8.74856C3.17998 7.77752 4.22354 7.10308 5.40038 6.85492C5.72416 5.34481 6.55601 3.9914 7.75712 3.02052C8.95823 2.04965 10.456 1.52002 12.0004 1.52002C13.5448 1.52002 15.0425 2.04965 16.2436 3.02052C17.4448 3.9914 18.2766 5.34481 18.6004 6.85492C19.7772 7.10308 20.8208 7.77752 21.5304 8.74856C22.2401 9.71961 22.5658 10.9187 22.4448 12.1153C22.3238 13.3119 21.7648 14.4216 20.8751 15.231C19.9855 16.0404 18.8281 16.4923 17.6254 16.4999Z"
              fill="#F7AB47"
            />
            <path
              d="M12.75 19.6275V10.5H11.25V19.6275L9.3075 17.6925L8.25 18.75L12 22.5L15.75 18.75L14.6925 17.6925L12.75 19.6275Z"
              fill="#F7AB47"
            />
          </svg>
          <span>
            <a href="${v.url}" download></a> ${v.title}
          </span>
        </div>`
      )
      .join(" ")}
    </div>

    <div class="done-down ${
      currentEvent[0]?.files.done.status ? "active" : ""
    }">
      ${currentEvent[0]?.files.done.docList
        .map(
          (v) =>
            `<div class="event-item">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M17.6254 16.4999H17.2504V14.9999H17.6254C18.5205 15.0357 19.3932 14.7145 20.0514 14.1069C20.7097 13.4992 21.0996 12.655 21.1354 11.7599C21.1712 10.8648 20.8499 9.99215 20.2423 9.3339C19.6347 8.67564 18.7905 8.28573 17.8954 8.24992H17.2504L17.1754 7.63492C17.009 6.37226 16.3893 5.21313 15.4317 4.37346C14.4741 3.53379 13.244 3.07083 11.9704 3.07083C10.6968 3.07083 9.46664 3.53379 8.50906 4.37346C7.55148 5.21313 6.93178 6.37226 6.76538 7.63492L6.75038 8.24992H6.10538C5.21028 8.28573 4.36606 8.67564 3.75844 9.3339C3.15082 9.99215 2.82958 10.8648 2.86538 11.7599C2.90119 12.655 3.2911 13.4992 3.94936 14.1069C4.60761 14.7145 5.48028 15.0357 6.37538 14.9999H6.75038V16.4999H6.37538C5.17269 16.4923 4.01526 16.0404 3.12562 15.231C2.23599 14.4216 1.67694 13.3119 1.55598 12.1153C1.43502 10.9187 1.76067 9.71961 2.47032 8.74856C3.17998 7.77752 4.22354 7.10308 5.40038 6.85492C5.72416 5.34481 6.55601 3.9914 7.75712 3.02052C8.95823 2.04965 10.456 1.52002 12.0004 1.52002C13.5448 1.52002 15.0425 2.04965 16.2436 3.02052C17.4448 3.9914 18.2766 5.34481 18.6004 6.85492C19.7772 7.10308 20.8208 7.77752 21.5304 8.74856C22.2401 9.71961 22.5658 10.9187 22.4448 12.1153C22.3238 13.3119 21.7648 14.4216 20.8751 15.231C19.9855 16.0404 18.8281 16.4923 17.6254 16.4999Z" fill="#383085"/>
                <path d="M12.75 19.6275V10.5H11.25V19.6275L9.3075 17.6925L8.25 18.75L12 22.5L15.75 18.75L14.6925 17.6925L12.75 19.6275Z" fill="#383085"/>
              </svg>
              <span>
              <a href="${v.url}" download></a> ${v.title}
              </span>
            </div>`
        )
        .join(" ")}
    </div>
    
    <div class="error-down ${
      currentEvent[0]?.files.error.status ? "active" : ""
    }">
      ${currentEvent[0]?.files.error.docList
        .map(
          (v) =>
            `<div class="event-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17.6254 16.4999H17.2504V14.9999H17.6254C18.5205 15.0357 19.3932 14.7145 20.0514 14.1069C20.7097 13.4992 21.0996 12.655 21.1354 11.7599C21.1712 10.8648 20.8499 9.99215 20.2423 9.3339C19.6347 8.67564 18.7905 8.28573 17.8954 8.24992H17.2504L17.1754 7.63492C17.009 6.37226 16.3893 5.21313 15.4317 4.37346C14.4741 3.53379 13.244 3.07083 11.9704 3.07083C10.6968 3.07083 9.46664 3.53379 8.50906 4.37346C7.55148 5.21313 6.93178 6.37226 6.76538 7.63492L6.75038 8.24992H6.10538C5.21028 8.28573 4.36606 8.67564 3.75844 9.3339C3.15082 9.99215 2.82958 10.8648 2.86538 11.7599C2.90119 12.655 3.2911 13.4992 3.94936 14.1069C4.60761 14.7145 5.48028 15.0357 6.37538 14.9999H6.75038V16.4999H6.37538C5.17269 16.4923 4.01526 16.0404 3.12562 15.231C2.23599 14.4216 1.67694 13.3119 1.55598 12.1153C1.43502 10.9187 1.76067 9.71961 2.47032 8.74856C3.17998 7.77752 4.22354 7.10308 5.40038 6.85492C5.72416 5.34481 6.55601 3.9914 7.75712 3.02052C8.95823 2.04965 10.456 1.52002 12.0004 1.52002C13.5448 1.52002 15.0425 2.04965 16.2436 3.02052C17.4448 3.9914 18.2766 5.34481 18.6004 6.85492C19.7772 7.10308 20.8208 7.77752 21.5304 8.74856C22.2401 9.71961 22.5658 10.9187 22.4448 12.1153C22.3238 13.3119 21.7648 14.4216 20.8751 15.231C19.9855 16.0404 18.8281 16.4923 17.6254 16.4999Z" fill="#AC110A"/>
              <path d="M12.75 19.6275V10.5H11.25V19.6275L9.3075 17.6925L8.25 18.75L12 22.5L15.75 18.75L14.6925 17.6925L12.75 19.6275Z" fill="#AC110A"/>
            </svg>
              <span>
              <a href="${v.url}" download></a> ${v.title}
              </span>
            </div>`
        )
        .join(" ")}
    </div>
   `;
  downloadDoc.innerHTML = eventDown;
};

let firstGetCurrentDate = true;

function initCalendar() {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const prevLastDay = new Date(year, month, 0);
  const prevDays = prevLastDay.getDate();
  const lastDate = lastDay.getDate();
  let day = firstDay.getDay() - 1;
  let nextDays = 7 - lastDay.getDay();

  if (day < 0) day = 0;
  if (nextDays > 6 || day > 6) nextDays = 0;

  let days = "";
  if (firstGetCurrentDate) {
    getCurrentDate(new Date().getDate(), month + 1);
    firstGetCurrentDate = false;
  }

  for (let x = day; x > 0; x--) {
    days += `<div class="day prev-date">
      <div style="height:25%">${prevDays - x + 1}</div>
    </div>`;
  }

  currentMonths.children[0].textContent = months[month];
  currentYears.children[0].textContent = year;

  eventDay.textContent = `${eventDate.day}-${eventDate.month}-${String(
    eventDate.year
  ).slice(2, 4)}`;

  for (let i = 1; i <= lastDate; i++) {
    let event = false;
    let progress = false;
    let done = false;
    let err = false;

    let todayActive = false;
    if (
      today.getDate() == i &&
      today.getMonth() + 1 == month + 1 &&
      today.getFullYear() == year
    ) {
      todayActive = true;
    }

    uniqueObjectsArray.forEach((eventObj) => {
      if (
        eventObj.day == i &&
        eventObj.month == month + 1 &&
        eventObj.year == year
      ) {
        event = true;
        if (eventObj.files.progress.status) progress = true;
        if (eventObj.files.done.status) done = true;
        if (eventObj.files.error.status) err = true;
      }
    });

    if (event) {
      let result = `${progress ? "progress" : ""} ${done ? "done" : ""} ${
        err ? "error" : ""
      }`;

      days += `<div class="day event ${
        todayActive ? "active" : ""
      } ${result}"+><div style="height:25%">${i}</div> <div class="docs">
        <div class="doc-1">АКТ ЗУ</div>
        <div class="doc-2">АКТ ОКС</div>
        <div class="doc-3">АКТ ОШИБКА</div>
        </div></div>`;
    } else {
      days += `<div class="day ${
        todayActive ? "active" : ""
      } "><div style="height:25%">${i}</div></div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="day next-date">
      <div style="height:25%">${j}</div>
    </div>`;
  }

  daysContainer.innerHTML = days;

  if (daysContainer.childNodes.length == 36)
    daysContainer.childNodes[35].remove();

  checkEvent();
}

function prevMonth() {
  month--;
  if (month < 0) {
    month = 11;
    year--;
  }
  initCalendar();
}

function nextMonth() {
  month++;
  if (month > 11) {
    month = 0;
    year++;
  }
  initCalendar();
}

prev.addEventListener("click", prevMonth);
next.addEventListener("click", nextMonth);

initCalendar();

todayBtn.addEventListener("click", () => {
  today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  firstGetCurrentDate = true;
  initCalendar();
});

function redDays() {
  const listArray = [...children];
  let counter = 0;
  listArray.forEach((item) => {
    counter++;
    if (counter >= 6) {
      item.style.backgroundColor = "#FCEEED";
      if (counter == 7) counter = 0;
    }
  });
}
redDays();

function handleOpen(arg1, arg2) {
  if (arg1?.className.includes("active")) arg1.classList.remove("active");
  else {
    arg1.classList.add("active");
    arg2.classList.remove("active");
  }
}

currentMonths.addEventListener("click", () =>
  handleOpen(monthsMenu, yearsList)
);
currentYears.addEventListener("click", () => handleOpen(yearsList, monthsMenu));

monthsMenu.addEventListener("click", (e) => {
  if (e.target.className == "months")
    gotoDate(Number(e.target.id.trim()) - 1, year);
});

yearsList.addEventListener("click", (e) => {
  if (e.target.className == "years")
    gotoDate(month, Number(e.target.textContent.trim()));
});

document.body.addEventListener("click", (e) => {
  if (
    e.target == currentMonths ||
    e.target.parentNode == currentMonths ||
    e.target == monthsMenu ||
    e.target.className.includes("months") ||
    e.target == currentYears ||
    e.target.parentNode == currentYears ||
    e.target == yearsList ||
    e.target.className.includes("years")
  ) {
  } else {
    monthsMenu.classList.remove("active");
    yearsList.classList.remove("active");
  }

  redDays();
});

function gotoDate(sMonth, sYear) {
  month = sMonth;
  year = sYear;

  initCalendar();
  return;
}

function pushYears() {
  for (let i = 1950; i <= year; i++) {
    const yearDivElem = document.createElement("div");
    yearDivElem.classList.add("years");
    yearDivElem.setAttribute("id", i);
    yearDivElem.textContent = i;
    yearsList.prepend(yearDivElem);
  }
}
pushYears();

daysContainer.addEventListener("click", (e) => {
  let dayId = "";

  if (
    e.target.className.includes("day") ||
    e.target.parentNode.className.includes("day") ||
    e.target.parentNode.parentNode.className.includes("day")
  ) {
    if (e.target.className.includes("day")) {
      dayId = e.target.children[0].textContent.split(" ")[0];
    } else if (e.target.parentNode.className.includes("day"))
      dayId = e.target.parentNode.children[0].textContent.split(" ")[0];
    else if (e.target.parentNode.parentNode.className.includes("day"))
      dayId =
        e.target.parentNode.parentNode.children[0].textContent.split(" ")[0];

    getCurrentDate(dayId, month + 1);
    function clearActive() {
      for (let item = 0; item < daysContainer.childElementCount; item++) {
        if (daysContainer.children[item].className.includes("active")) {
          daysContainer.children[item].classList.remove("active");
          break;
        }
      }
    }
    clearActive();

    function checkActive() {
      clearActive();

      for (let item = 0; item < daysContainer.childElementCount; item++) {
        if (
          !daysContainer.children[item].className.includes("prev-date") &&
          !daysContainer.children[item].className.includes("next-date")
        ) {
          if (
            daysContainer.children[item].children[0].textContent.trim() == dayId
          ) {
            daysContainer.children[item].classList.add("active");
            getCurrentDate(dayId, month + 1);
            break;
          }
        }
      }
    }

    if (
      e.target.className.includes("prev-date") ||
      e.target.parentNode.className.includes("prev-date") ||
      e.target.parentNode.parentNode.className.includes("prev-date")
    ) {
      eventDate.month = checkZero(month == 0 ? 12 : month);
      eventDate.day = checkZero(dayId);
      prevMonth();
      checkActive();
    } else if (
      e.target.className.includes("next-date") ||
      e.target.parentNode.className.includes("next-date") ||
      e.target.parentNode.parentNode.className.includes("next-date")
    ) {
      eventDate.month = checkZero(month + 2 === 13 ? 1 : month + 2);
      eventDate.day = checkZero(dayId);
      nextMonth();
      checkActive();
    } else {
      if (e.target.className.includes("day")) e.target.classList.add("active");
      else if (e.target.parentNode.className.includes("day"))
        e.target.parentNode.classList.add("active");
      else if (e.target.parentNode.parentNode.className.includes("day"))
        e.target.parentNode.parentNode.classList.add("active");
    }
  }
  eventDay.textContent = `${eventDate.day}-${eventDate.month}-${String(
    eventDate.year
  ).slice(2, 4)}`;
});

function checkEvent() {
  let arr = [];

  for (let i = 0; i < daysContainer.childElementCount; i++) {
    function prevNextEvent(argMonth, argYear) {
      uniqueObjectsArray.map((v) => {
        if (
          daysContainer.childNodes[i].children[0].textContent.trim() ==
            Number(v.day) &&
          argMonth == Number(v.month) &&
          argYear == Number(v.year)
        ) {
          if (v.files.progress.status)
            daysContainer.children[i].classList.add("progress");
          if (v.files.done.status)
            daysContainer.children[i].classList.add("done");
          if (v.files.error.status)
            daysContainer.children[i].classList.add("error");

          daysContainer.children[i].classList.add("event");

          daysContainer.childNodes[i].innerHTML = `
          <div style="height:25%">${daysContainer.childNodes[i].children[0].textContent}</div> 
          <div class="docs">
            <div class="doc-1">АКТ ЗУ</div>
            <div class="doc-2">АКТ ОКС</div>
            <div class="doc-3">АКТ ОШИБКА</div>
          </div>
        `;
        }
      });
    }

    if (daysContainer.childNodes[i].className.includes("prev-date")) {
      prevNextEvent(month, year);
    } else if (daysContainer.childNodes[i].className.includes("next-date")) {
      prevNextEvent(month + 2, year);
    }
  }
}
checkEvent();
