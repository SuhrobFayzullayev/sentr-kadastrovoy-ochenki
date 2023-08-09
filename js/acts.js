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
    day: "30",
    month: "06",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "test1",
        url: `data:image/jpeg;base64,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`,
      },
      done: {
        status: true,
        title: "fd",
        url: "",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "31",
    month: "07",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "test1",
        url: `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERERERERIREREREQ8PERESEREPEQ8RGBQZGRgUGBgcIS4lHB4rHxgYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHBISHjQkJCs0NDQxNDQ0NDQ0NDQ0NjQ0OjQ0NDQ0NDQ0NDQxNDQ2NDQ0NDQ0NDQ0MTQ0NDE0NDQ0NP/AABEIAMEBBQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAgEDBAUGB//EADwQAAIBAgQCCAQFAgUFAQAAAAABAgMRBBIhMUFRBRMiYXGBkaEGscHwFDJCYtFS8SNDcoLhJFSSk6IV/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EAC4RAAICAQIEAwgCAwAAAAAAAAABAhEDEiETMXHwBEFhBRQyUYGhsdEikSPB4f/aAAwDAQACEQMRAD8A6kR0JEsifEn046HiIh4iYFkRkREZEMkZDoVFiESwQ6QqHQiGShkiEhkgIBIZIEiUgJsEhkgSJSAmyLE2GSJAVi2IsOACsSxFiyxDQDsraIaHaIaAdiNCtDtEMChGhGixiMC0KxGWMrYFCsRljEYy0KBABZRzYlkRIjxNSiyJZEriWRJAtiMhYjIhkjoZCoZCIY6HQiGQEMdDoUlAQxkMhUOhEslIZIVDjIBImxBNgERYLDBYBWRYgkGBQojHYrAEIyGSxWIsVisZisZaEYjLGIwLSFZWx2IwNEQAAAzmRHiyiLLIs2LL0x4sqiyyLJEXRZYiiLLYsliZYmOipMsTJIY8R0VodAQyxMZCRYyEZssQyEQyAljoZCoZDIJQ6RCQ6iBDYtgaLFB8gcRWhWUsVluURjKTEYrGYjApCsRjsrYjRAIxmIwKRDK2MxWM0QrEYzYrYFoi4CNgUUcqLLIszxkWxkbMsvix4soiy2MiGIuiy2LM8WWxkSI0JjJlEZFqZBLRamMmVxY6YEMsTLEUpliYjNliGRWmPFgZlqHiVxNFCDlJJbvQaTbpczOWxow2Gc3ptxZ06eGjHhd82WUqajFRXAc+r8H7Ox4YpzSlLzfOun75s87Jkcn6EWSIlBPdXGA9BpNU+RkYq+BT1jo+Ry6kGm09Gj0Jwel+kKcXWzadQqEW005VKtVvLRjHjO2Wy49YjxPaHs2Gl5cKprmvJ9Pk/P1OjFladMySKHXhmnDNHNBKU4t2cYvaTXLR67aPky6tUjBJzagm4R1a0lKSjGN+bk0vFngvjDpR1KdenClVjiqOKWCoV4ZcsnVyXpt3zdqnPVNWvFNarTw8WLiTUeV7X5denzO1ypWe4YtxKFPJCELt5IQhd7vLFK/sS2ZG6RDYjZLYrYGiRDYjYSYjYy0gbK3ImUiqUhotIlyAqbAoo5MZjxmZVMeMzpcSzZGZbGRhjMtjMhxFRtjItizFCoWwqEOIjXGRbGRlhMthNGbQjSmPFlMZrvLIvvRJDRamOmVRY6YjNouTGTKVIsiwM2i6LOp0Sry8Ff6HIjI6fRNS07f1ff0OrwLS8Tjv5r/n3ObOnoZ3AAD7M8sCG7a/8mfE4yNPR6vkUUuk4PSXZ773OWfjvD456JTSf46vkvqy1jm1aRn+Iel1hcHVxMFGajCUo9pKLeVta8W7WS4tpaHhPgnoyr0li63S9Wc6dB1JU6FG+aU3ClCk6je0Xljlbjq25q6W/F+PfiiH/VdH4epHE4arONfN/wBtX63PUpwmtJxclf8Aa5tJtKy8nhvirGwoU8HDE1qOFi5rJh4QVWWeUpu0rxlJuUrWzLfZ7PbVboenY+gfGHxNh41IYN1oxy1adfFTV3kp05qp1Mbb1ZOMVZbJts4nwnga+NxdTpCupQwzryxOHpS2nVaywnbioRsr8WtOJ2uhvgzAUYwlKlKtVyqTeJaqZZPVrIuxdPjZ+J6KU7actD5F5cWODhiTdqm3X1pb1e297JKt936UMUpO5f133Za5CORW5i5zko61EdyElIRzFzIZaiS2JKRM7czNOpHn7aDSstDykVSmJOfg/DUqlU8PVFqIy7OBjddcwL0MZyFUGzmHrSynNs7nALNaqlkaphnK2xMZd9idAHRhWLoV0ctVeH2x41CHjGdeFcvhVOPCqXQrGTxgdiFQthVOTCuXQrmTgSdaFWxbGtzOQsQNHEk8MTimdm65lkZJo48cR3lkcV3k6GQ4HWjItp18jUk9U16nG/Fd4fihKLW5DxXzPVy6dbtlhbnd3uTLp3R2hZ207Vzyf4oHijt9+8Xv/kf2/X4MfcsXyOrVxTbbb1buz518YUOk6lSsoutUwjtKEaUoqOXKrxcIvNKzvwZ6yWJKniDPBklhlqST698/U0lgjJVy6Hxubtodb4Qx1OhjaVSrkUGqkHOdstNuPZnd7apK/eU/E1NQxVZRSS6xySWyUtfqcaTPptMc2GnykvyjyneOfqmfe5Ylbp96ZW8X4eJ8n6E+LauGhGlOKq0o6R1cakI/0p7NdzPR4b4wwlRaylSk9LVItr/yjdHg5PZuaD+G181+uZ6mPxOKa50/U9p+Ki917g8TfayR5j/97Db/AIij/wCyP8mSr8WYSDt1uZ/thNr1tYxj4XJL4Yt/RmznCO7kl9T2EsR4GedY8mvi/Bv/ADZLvdOp/B0qOPjUjnpyU4vjFpocvCzh8UWuqY4ThP4ZJ9GdSpX7zPUrmKVcqnVGsZoap1ymdczSrcPv71MqxHacXwvr6Ne0kbRxCckbnWAwdam2r7WXn92INOELUUZxlUexlUhlI30makalMeMjKpDqZLiOzVGZZGoY1MdTIcSrNkZlkahiUhlMhxHZ0I1R1WOcpjqoTwx2dBViyNY5qqDqqQ4BZ0lXHVc5qqjKqRwwOl14dcc/rQ60NAHR64OuOd1hPWBoEbXWEdYyOoI6g1ADzHxjhlGpGrG/+KpZu6UbL5NHlmz3nT2Edek1H88Hmh+521j5/wAHgGz3fAy1YkvNbfo8jxkNOS/J9sGxWwbIO04wZAAMQGnAOp1kI0pypynKMVJNx1b0vYzHQ6Ep5q8H/R/ieNtl6tEZHUJP0LxrVOK9e/sej+H+l6lbPCrrOFu3azfC0lz0NuKxmSUU3ZN3XJ6O/wA0ZpYhJy0t+puyV/Hv0MmNmpwzJrSTWV6pZotbb63+2jytEZT1JUmespSjj06raOsqvbl/phJPxun8kc3pHFOnWhK181Nxava7TVku97C0Knave8cqXOy1Vu9KRj6Xr8HZum813ro7L5S9iseL+dCyZP4Wb1Wkvyy53elm7u7Xnck89WxKb3lay2bXass3uB0e7HP713Z6FSGUilSGUjno67LlIZSKFIZSJoeovUh1IzqRKkTpKs0qZKmZ1IlSJ0lWaVMdTMymMpkuI7NKmMpmVTJUydI7NaqDKZkzEqoLSFmvrCesMqmNnFpCzT1gZzJUnpyvpfk3s/Uqo4rNG7/s+QcMWrejc6grqGdVU9UUyxOjfBO3uUoNhqS5mxzPP9OdEZ5KdJRUpN9Ym7Jt65/vmdVVr38vRmXH43JTlK17L0ldWT8TXDrhNOPMyzKEoPVyPHVYOMpRl+aLcXrfVOzLqeBrSs405tNJp5XZp8U2VzpzeWT/AMxys+bvZv1Z7XOksqf5Ul4cj082Z40q3f6PMwYFlbvZL/Z5ih0HXl+ZRgucpJ6eCudGl0BSt2p1G9+zaK9Gmb1Xv7fJMyzr2zau6u7843at7fI53myz866HUsGGCur6nm8TRcJyg/0u1+a4P0HwOI6upGXDVPwaszb0ms6VRbpP/cr6ryu/fkc6Li1ro0rJrj4nZF64b/U4JR0T/j1R33i0pptqUWlFyT0evZn9PPxMWP8AyycXaMpSt+nWLtbfu9jn0ZWzJ7W24N3RDrPLl+X1Iji0ytGs82qNM2rG23vZxj5PMm0+7QzYrE50ubbb+iM8pN+wpooJOzKWWTVE3AgCzM9WmSmVJ7DJnmUexZYmSpFUZDJhQ7LFIZSKrgpa+RNDsvUiVIzqe3eWKQnEEy6MwlLhz+X38zHCt20ucU/O39grVO0lfg793F+yXqPRuLibGyFS4+czQnZL+1mPnIcS1IudQbOY5VO0ruyim353SfsyHV+cb/tV0GgNZqdbdcUr+IUq9780o++n0MlWrZX8bcNeX3zKYVHdtauCWv8AUrN5fT3KWO0Q8lM6dSpeLW/Zd13NHMo1XFVIN3cqrcXfeOkr+OsvQmGKSjG+ua3m9rmLGStVi09Kis357/8A0/U0x4/LvYzyZOUu9zqwxMU5u/ZbTvyV7N+t/VFFLE3pJvRuai1/u1+pzp1sylwUE3ZaXvd5fJcOfgTGqmknq5uk7areUW2vb1L4SSI41v8Av7m38V1d57xzLTbsvZ926b8B8ZBSWT8105T/AHcl87eByvxK2f6W5cuCivmR+JyKUbuUbpLmorZeTui+E7TXPv8ABHGVU+Xf5M+d5oRzNwptyg7aqLea51oYzRpuzteT0fD/AJX3vw6lS8pNbO/uR1r92/Xc3lj1JHNDLobrvyOjh8fZ9q/LvStw80/UVYjSSb1cm7cHrqn3afI5gD4UbFxpVRpdfSSWzVlfzMwAaJUZtthcAABAAAAAAAAHoHO0kubt5/fyJrzypvnt/qWplqzzNpb207pKUd/VEyqZo5ttrLlxb9fkcejkzvc+aNsHbTyJU+Bgp1m4pvTsp24vl4blsqvZbVuCT5t6W9RODLWRUa1LXwEnUs/N38Mt/oimnPm/48Rass0ZtOz7STfc7P77hKO43PbY0RnpF87JeCT+/MslOyvy9zmrEWkkvyx77rbRJ8dy6pX3vppe3ruxvHuKORURGbj1spPXO1DfZOy+oUaqlNu7snNtr9VmlFee/kuZhoVG5Zm7Xbs+9u738WRTr2jZK3Zsu+TX82fkavHzMFl5M7PXa2b4+Pa+/qTKrbw9Xt/Y5bq2SXm+98BVXvu7atPw4+/yI4RpxjXUxWumreRJK+tldL1d/QeOJto/zXi0uMne/wBPI5U6ivK2zbtq3ZdyfclqKqlmne738eX34mnCVGXGaZ2Z4ntK9lZ2lu1d8b/e5lnVSc2nbPGNtfytN2XiYpYlte/n93KZVG9/vkOOKiZ57Nk697q94p6cGrr3WnldlFeu5NPlp5MouQaKCRk5tl/4h2aXHfvEdR/JeSVkVgOkS5NjOT3FABiAAAAAAAAAAAAAAAAAAAAAAAANlSs078Ve1uN23YeWIWqvu9Hbg3d/P2RgAnQi+IzR12kVd6bvnZ6ew7xWnLVeiMgD0oSm0avxT4crfwVyrtq3Dj3+JSAaUDnJliqv+O4nrnZrnpfzuVAOkK2Pm0twXAjM/wCBQAVj538iG29efuKABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==`,
      },
      done: {
        status: true,
        title: "ds",
        url: "",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "09",
    month: "08",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "test1",
        url: "",
      },
      done: {
        status: false,
        title: "",
        url: "",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "01",
    month: "09",
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "test1",
        url: "",
      },
      done: {
        status: false,
        title: "",
        url: "",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
];

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

  currentEvent = eventsArr.filter(
    (v) =>
      v.day == eventDate.day &&
      v.month == eventDate.month &&
      v.year == eventDate.year
  );

  let eventDown = `
  <div class="progress-down ${
    currentEvent[0]?.files.progress.status ? "active" : ""
  }">
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
    <span><a href="${currentEvent[0]?.files.progress.url}" download></a> ${
    currentEvent[0]?.files.progress.title
  }</span>
  </div>
  <div class="done-down ${currentEvent[0]?.files.done.status ? "active" : ""}">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path d="M17.6254 16.4999H17.2504V14.9999H17.6254C18.5205 15.0357 19.3932 14.7145 20.0514 14.1069C20.7097 13.4992 21.0996 12.655 21.1354 11.7599C21.1712 10.8648 20.8499 9.99215 20.2423 9.3339C19.6347 8.67564 18.7905 8.28573 17.8954 8.24992H17.2504L17.1754 7.63492C17.009 6.37226 16.3893 5.21313 15.4317 4.37346C14.4741 3.53379 13.244 3.07083 11.9704 3.07083C10.6968 3.07083 9.46664 3.53379 8.50906 4.37346C7.55148 5.21313 6.93178 6.37226 6.76538 7.63492L6.75038 8.24992H6.10538C5.21028 8.28573 4.36606 8.67564 3.75844 9.3339C3.15082 9.99215 2.82958 10.8648 2.86538 11.7599C2.90119 12.655 3.2911 13.4992 3.94936 14.1069C4.60761 14.7145 5.48028 15.0357 6.37538 14.9999H6.75038V16.4999H6.37538C5.17269 16.4923 4.01526 16.0404 3.12562 15.231C2.23599 14.4216 1.67694 13.3119 1.55598 12.1153C1.43502 10.9187 1.76067 9.71961 2.47032 8.74856C3.17998 7.77752 4.22354 7.10308 5.40038 6.85492C5.72416 5.34481 6.55601 3.9914 7.75712 3.02052C8.95823 2.04965 10.456 1.52002 12.0004 1.52002C13.5448 1.52002 15.0425 2.04965 16.2436 3.02052C17.4448 3.9914 18.2766 5.34481 18.6004 6.85492C19.7772 7.10308 20.8208 7.77752 21.5304 8.74856C22.2401 9.71961 22.5658 10.9187 22.4448 12.1153C22.3238 13.3119 21.7648 14.4216 20.8751 15.231C19.9855 16.0404 18.8281 16.4923 17.6254 16.4999Z" fill="#383085"/>
      <path d="M12.75 19.6275V10.5H11.25V19.6275L9.3075 17.6925L8.25 18.75L12 22.5L15.75 18.75L14.6925 17.6925L12.75 19.6275Z" fill="#383085"/>
    </svg>
    <span><a href="${currentEvent[0]?.files.done.url}" download></a> ${
    currentEvent[0]?.files.done.title
  }</span>
  </div>
  <div class="error-down ${
    currentEvent[0]?.files.error.status ? "active" : ""
  }">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M17.6254 16.4999H17.2504V14.9999H17.6254C18.5205 15.0357 19.3932 14.7145 20.0514 14.1069C20.7097 13.4992 21.0996 12.655 21.1354 11.7599C21.1712 10.8648 20.8499 9.99215 20.2423 9.3339C19.6347 8.67564 18.7905 8.28573 17.8954 8.24992H17.2504L17.1754 7.63492C17.009 6.37226 16.3893 5.21313 15.4317 4.37346C14.4741 3.53379 13.244 3.07083 11.9704 3.07083C10.6968 3.07083 9.46664 3.53379 8.50906 4.37346C7.55148 5.21313 6.93178 6.37226 6.76538 7.63492L6.75038 8.24992H6.10538C5.21028 8.28573 4.36606 8.67564 3.75844 9.3339C3.15082 9.99215 2.82958 10.8648 2.86538 11.7599C2.90119 12.655 3.2911 13.4992 3.94936 14.1069C4.60761 14.7145 5.48028 15.0357 6.37538 14.9999H6.75038V16.4999H6.37538C5.17269 16.4923 4.01526 16.0404 3.12562 15.231C2.23599 14.4216 1.67694 13.3119 1.55598 12.1153C1.43502 10.9187 1.76067 9.71961 2.47032 8.74856C3.17998 7.77752 4.22354 7.10308 5.40038 6.85492C5.72416 5.34481 6.55601 3.9914 7.75712 3.02052C8.95823 2.04965 10.456 1.52002 12.0004 1.52002C13.5448 1.52002 15.0425 2.04965 16.2436 3.02052C17.4448 3.9914 18.2766 5.34481 18.6004 6.85492C19.7772 7.10308 20.8208 7.77752 21.5304 8.74856C22.2401 9.71961 22.5658 10.9187 22.4448 12.1153C22.3238 13.3119 21.7648 14.4216 20.8751 15.231C19.9855 16.0404 18.8281 16.4923 17.6254 16.4999Z"
        fill="#AC110A"
      />
      <path
        d="M12.75 19.6275V10.5H11.25V19.6275L9.3075 17.6925L8.25 18.75L12 22.5L15.75 18.75L14.6925 17.6925L12.75 19.6275Z"
        fill="#AC110A"
      />
    </svg>
    <span><a href="${currentEvent[0]?.files.error.url}" download></a> ${
    currentEvent[0]?.files.error.title
  }</span>
  </div>`;
  downloadDoc.innerHTML = eventDown;
};

// console.log(month + 1);

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
    days += `<div class="day prev-date">${prevDays - x + 1}  </div>`;
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

    eventsArr.forEach((eventObj) => {
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
    days += `<div class="day next-date">${j}</div>`;
  }

  daysContainer.innerHTML = days;

  if (daysContainer.childNodes.length == 36)
    daysContainer.childNodes[35].remove();
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
    if (e.target.className.includes("day"))
      dayId = e.target.textContent.split(" ")[0];
    else if (e.target.parentNode.className.includes("day"))
      dayId = e.target.parentNode.textContent.split(" ")[0];
    else if (e.target.parentNode.parentNode.className.includes("day"))
      dayId = e.target.parentNode.parentNode.textContent.split(" ")[0];

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
          if (daysContainer.children[item].children[0].textContent == dayId) {
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


