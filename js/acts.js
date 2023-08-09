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

const eventsArr= [
  {
    day: "09",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/005/ocj0178rptm42kgswpssoaao3yczj04f.ods",
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
    day: "07",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/005/ocj0178rptm42kgswpssoaao3yczj04f.ods",
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
    day: "02",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт №АОКС-13_2021_000001.ods",
        url: "/upload/iblock/6d8/c3m7qhxx2hckzznha0fj7rirrke5370a.ods",
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
    day: "02",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000002.ods",
        url: "/upload/iblock/807/3sueqx4n3rj0iza810v2ybjas8d312sw.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "20",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт№АОКС-13_2021_000003.ods",
        url: "/upload/iblock/f5c/xxam1u3tehmnhzr6u19ves344fa9ga4k.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000004.ods",
        url: "/upload/iblock/90b/mqnmwa7yuf0mj8jxdp4bsym89g64tl7g.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000005.ods",
        url: "/upload/iblock/433/cy65wyhk2rvi25tov3ggxro4fg3uqpqn.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "25",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000006.ods",
        url: "/upload/iblock/8f5/rawt905uegqm5kxfcf5ufuv49fps7bqd.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "04",
    month: "03", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000007.ods",
        url: "/upload/iblock/b8b/n9vi3iizpjjtm5z5kc52mwbu30tp7xu0.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "12",
    month: "02", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000008.ods",
        url: "/upload/iblock/266/d9awlllvcizqp7rc5gis2wr752jrhnix.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "12",
    month: "03", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт №АОКС-13_2021_000009.ods",
        url: "/upload/iblock/44f/egi0gi8pbwih2ygliaipvwint8ofyhph.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "29",
    month: "03", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/65b/i5hedw5hq0ev7bf94hfy15j57nldjdvt.ods",
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
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d87/6re17b4cfhvvf3xy5tp6z3gtm99cu43p.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "29",
    month: "03", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/586/64lmdmzt58jkhpo22s1uac9ul2rg36cr.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "12",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e54/b50l00m8qrbrv3k5uekq13qbichdls9y.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "08",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/edd/3sppp9o2dd8a7wv805529cciqfghz1gn.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "27",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/460/ykgvfowpx64h14vb53gktqca8vh88rmn.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/f46/z1bpyqcbowbujhi7hvaa29145b90m1rj.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/c9d/6v9rmgc1flhojfzydhtf1r4ct5l9ceo9.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "04", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d31/v7z3m31y6t96j106hyza1urvi47ctrgp.ods",
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
    day: "11",
    month: "05", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e7f/hvbda77jrjxroylwgy8edt5ffj7uhhkw.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "18",
    month: "05", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ed8/31h2fzp23hr31j5qpryaq63pplc7j5i5.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "18",
    month: "05", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d17/v50d2mawp15c8ib55hojacgwlhqhrdzx.ods",
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
    day: "31",
    month: "05", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/661/g69ywogub5tn1qzurtdj62hbeaid2b22.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "03",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/800/mlfa3v1rm5jajd4zuq34gne32xeejd87.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "15",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a35/if8vmpmvz68neffbl6hytjl7snfedq0t.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "16",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/0f5/v02o4xj3ediqodge2x8klen6kvippdn3.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/926/my8k482kbpvxy2hoy14ttjbmq70srwhl.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/0ae/s0f2xn6jifyi60qma58l7xnro5u99g0e.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a30/67q313fcjgp9bmonmfnuh4t8gby5rnwy.ods",
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
    day: "10",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/034/kg9yc408q5rfqcbsbihso9fsanii32li.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "06", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8c5/dqvgemz9z3ltbxukwe6jzpzn72wcc13m.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "09", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/265/g73l5clere0haj3c8jgzszfkdof6ot2q.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "08",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/5c2/yhtqqy0hjsh2ynbu443uxkyjss8v1p97.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/299/0dk3olzoqio9zdog12q579tu474jrtv2.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "16",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7e2/hzns7k7eqbjlyl1qubew0whu6a9k12z7.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/41c/nnani6nvndkf0cfsjronlvcjbhlkk0j4.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a2d/koojtm6n2fyktvsgapha95s4teqvg3vj.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "06",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ae1/eav9ugpjc1emz7mfuc6dijm38quc36dk.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "29",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/27f/6m953fur4fy7kgi5fcfl1rh78cx2k1qf.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/862/mpg54i32ev3vtjng5ffrbvxkdagk82wx.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "17",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/35c/udiwlhu42q6kkqufampkdzpxczh310r7.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "07", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ca7/2xjlw6k449a2mfw7g030bdhg1p51e0qo.ods",
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
    day: "09",
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/dfc/dqbgtpcf2vieu9vkrvwgmwyh8u2l2xvy.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "10",
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/bc2/as0f1qet1lzk2dq12i1x584s8jpjqs9y.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "18",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d2e/2hehdlm5jxani2f9saxfx4jbz7359d4s.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "18",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/c91/295jnu3qlaic4bjq3q2418oddwma3yvb.ods",
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
    day: "13",
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b0a/28npk3dqutckb7m7jzn16ivgjc526le6.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/cc2/8czp140cy90d5220kj7owuw9cps7jx6d.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.xlsx.ods",
        url: "/upload/iblock/095/q12v4ztcmbgii0qt613lf9wttlpebp5k.ods",
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
    day: "09",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a7b/eaxomfpkxg65vtscixgb29g46dwj0s1l.ods",
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
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a7b/eaxomfpkxg65vtscixgb29g46dwj0s1l.ods",
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
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8f7/ok23831jormlrq1vlcvk3rmhjskfzdju.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "04",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.xlsx.ods",
        url: "/upload/iblock/834/5qacowx70kj5ygyfc33ukdjpab2zg1vc.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8f7/ok23831jormlrq1vlcvk3rmhjskfzdju.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8f7/ok23831jormlrq1vlcvk3rmhjskfzdju.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "08",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/5c9/pxglpyi7bcs5uf74mk9oxtqjwa8v718z.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "14",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/4e7/lg84k6kox360jtyhvebecn4ht2aaav1z.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "14",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.xlsx.ods",
        url: "/upload/iblock/cb8/wgv399elkpnax9hxwr1ryaxsbfgm5l9u.ods",
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
    day: "17",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/fb1/vf5so7nu1golwkff72pt0z3vbgfigduf.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "17",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7d5/2ti0hjyrxv8krme1tkhnugkgwcoery0x.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "17",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7d5/2ti0hjyrxv8krme1tkhnugkgwcoery0x.ods",
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
    day: "24",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/529/6oqjckvgp8oi76b3mlrwar5vxi83vsbm.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "02", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/102/c6xhg7ww3re3w8t074ujxiw9be1mcihh.ods",
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
    day: "02",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/574/4rx7poieg0qoh05qvsx33zpq6ddmko6s.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/78e/nby9i8vle2w0l27m0exwruzt8sg7dlte.ods",
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
    day: "10",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a04/tcd7avkgt9lky362uw6w3ika77296342.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "10",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/41e/iz2igjyrv0qpo0gs1xeq8isdoiyo0blf.ods",
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
    day: "11",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e1b/ioa4t9x22zl6d5y5h8tyjk94atvv1wqs.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "11",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e1b/ioa4t9x22zl6d5y5h8tyjk94atvv1wqs.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "11",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e1b/ioa4t9x22zl6d5y5h8tyjk94atvv1wqs.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a1a/fu41dqr209vmwgijf7ugosuonv25rche.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a1a/fu41dqr209vmwgijf7ugosuonv25rche.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/63c/0ddwm0e8a5okw9wr97m3h1kgddmhj5s5.ods",
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
    day: "24",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2ee/ppa6575p1wn6qgk5s6c8xd65wrp9kue5.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/66e/rfrbozv167jyu7gc73cnv5jxlczolavs.ods",
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
    day: "28",
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8d5/5706xjwcyk1y4t0dmxqvelmqjiao1ul0.ods",
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
    month: "03", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/bc4/j162qr9q2rwwrr49nr9f09fwccpjjgnb.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "07",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/231/ip2s1ywv38ypvxqk5phwr9ynt23zg68u.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "25",
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/5ea/x0mtgn3k3x6gmdqt7ogg022h0b8e7iio.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "07",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/146/pqmmeqs66arb0meawst1ngi1vc5rx2fs.ods",
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
    day: "31",
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a91/cax2x2sizd44ccp6lsv9757tn6yfpvsj.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "04",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d75/3wwt01ijvvuukr3brx1017n5a0utjnfm.ods",
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
    month: "08", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/6e0/ub26mp77zj2ngsawpxhu1kpm6bbeaup3.ods",
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
    day: "11",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/1f5/8eepmp0uq2btjbscklesw3ztz08zlj9b.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "09", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.xlsx",
        url: "/upload/iblock/10d/b6hfvgshpl983ai1kcdln0l2uoi6w9zv.xlsx",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "14",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a06/5805btah2vf5d0y11cvpp9irf3ommq9r.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "09", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b1e/s1f5s6izr35y8knt42wtalvm894192mn.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "14",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/276/fcsy3ma3s6ypjz8j38mnn7ru4x0f9lis.ods",
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
    day: "21",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/baa/prz833a65mym8u4gvobe8v7j05zdkfv5.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "11", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7fe/ghrz7o71ha2s9s9f81b5jflsr5fof183.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "11", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/f0b/gsf22t6elc4g6k7aas0tylfgs3voiojp.ods",
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
    day: "21",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/908/iupfmkzo4skp60xipgc0slhpwbd4qm64.ods",
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
    day: "25",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/42c/hkey9m9ianied9q2vpykhz7ipwo1bahw.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "11", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/417/wkkdrvlsmtsqyctyy6zcspqhazfxodez.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "25",
    month: "04", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/f54/bcc2zg3vfnohgyvrk31sq3wrioodb21l.ods",
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
    day: "09",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/12a/wgft3pazdvkth2f8n31n3ga6nbi0g8xu.ods",
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
    day: "05",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/cb2/4cx8oybd8icptucn5owtbdq8wxb84ce1.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "05",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/774/zzxl5ji16oxuztz3xy0i35giojglz3px.ods",
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
    day: "16",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/97d/p733pszhsyrr4cuxw3icyxk8h007xtgv.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "16",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ccc/924gjkaiugwkyajf22qsmz0goir82qsl.ods",
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
    day: "20",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/cfe/rqn18jhj6xc6wzw6evn16o2t0rj1dnq6.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/fec/e74rqu09jvdid833cqsyk7hx07lchkmt.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "05", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/20f/7q3b4uah98t2zr7zpd933er1ek2qu7v3.ods",
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
    day: "09",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
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
    day: "02",
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/bdc/fir1h5ps2xbspujuj66ft5ikt73l7wox.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "29",
    month: "11", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/872/t45das25zjgtrc4abt7e5dohb7pmpj8m.ods",
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
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2ea/38vjest4fwvnq8u88a8mp9tk6is1s8xh.ods",
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
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/4f2/ojaf71ytg4ecejwnii5kakjwb3n7fnyp.ods",
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
    day: "29",
    month: "11", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/0d0/3d6tfwk4eg8tio9k7jn7iv2p4dpoa2cz.ods",
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
    day: "20",
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/17e/b3mgzik34bcn16m0r9o25spwu2lutcoa.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/5ea/wrflfj2tvtesv1kxafuzh6sqrrivdwea.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "20",
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/251/zn0ix81jpn4kyh30idamri1i7i0p6pgs.ods",
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
    day: "28",
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/0a3/64hzkpfko5pxvm96xgn041g7ps0n88hx.ods",
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
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d71/82tkggp2r2a230kylf80ol601gqgrv21.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "06", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/54a/7mdyh2jhikrnlf27c3cuglm16qno0e3p.ods",
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
    day: "04",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "��� �� ��।������ ������஢�� �⮨����.ods",
        url: "/upload/iblock/24c/pfe66hdlrww39e0dkh3xep6qio2y3jpa.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "08",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2b8/d4h6gvueo699oc4n1kesz4ajuhy34q4v.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "08",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/564/ts1fe10v7ht4i606ax62ra3ktew9stu4.ods",
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
    day: "15",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/713/qbi62ikp534m79f1lds5cp3tf7v9np7z.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "15",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b2d/d123zf182zdpbklso6bru5n5hy1kpv3v.ods",
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
    day: "09",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/43d/16g8tb604yxju2drca92pqfcky7hqxda.ods",
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
    day: "09",
    month: "08", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
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
    day: "25",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/f5b/xusieap71dk8dkybh28vrisrbvpkg1ef.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "13",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.xlsx.ods",
        url: "/upload/iblock/590/6a8p8d59bb65abk22hj9c6l05vvqylml.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "25",
    month: "07", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/26c/6tgqd6yu7268afpy6t9zwejtje5jwuby.ods",
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
    day: "08",
    month: "08", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/3a6/98xskllxd2i2qao6d3muljwtyvstr3cs.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "17",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/57b/kzdckc62ausxalu227mwyg27fi6ktk1s.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "16",
    month: "08", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/96a/cackhj0vv2dt77ebibravmwd69manee8.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/4d6/t4vmx3uf7aweduk56ywrtfelezmdb80z.ods",
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
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a00/0zjjz3lrl13t8acs49xsu8f09nmmy6j7.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "12",
    month: "09", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/c5d/j6f3xb94dvhsexxz3gboyqr10uuzwndw.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/70d/1axo7rd2ir2qni4hkpgxsn8d148yny8i.ods",
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
    day: "20",
    month: "09", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/409/c1y11hd64m05p5dw5akfwdajw5pyrak8.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
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
    day: "20",
    month: "09", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2e9/fhrkgzspkpxbj1d6x8rdjz7stppwqwfx.ods",
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
    day: "26",
    month: "09", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b8d/50mhth0i00cxuq5o2il0zdq0ozpcjtml.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "10",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ea9/2bxqsdph067o1jhwwbc52o86rv05gvs3.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "11",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d03/8i0c3f4gfbsylzfkfjsaw9xgs8pmzddu.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "12", 
    year: "2021",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b8f/djn4nl0jaeugn41mo12icgs08fh0408w.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "11",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/679/84n329nm39jl3g8a7jww3c4kszhksdin.ods",
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
    day: "18",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d9f/b780xv1m16k8n15qu35k274845038w3p.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "18",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a1e/klm32jfspu7qu26vcx0hmms2luniep8c.ods",
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
    day: "24",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/c59/pih0w4dsy444rbpvgqs44a4rsmaj3di6.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "10", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/fd3/ynt29u1kvcdix3odim46bn9gia613pr7.ods",
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
    day: "02",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b10/nlx70xb32npku8atauy0eftq25m4m2r0.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/0e7/67kcmvl0mjghxlq2657c5rlwsq75wfcf.ods",
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
    day: "14",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/cbf/dfu774o71517pw93w3xfbugj3hlv0dyc.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "14",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/d4b/vcu9q0k86u3jlu2a0wejfqa3hxeb40d2.ods",
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
    day: "21",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/78e/ar8r5qsd42s4daibpegwgi36u4dzf4ey.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/cb4/1b8ovgx525rusp8fmi08itiqvn5jco34.ods",
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
    day: "25",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/c6e/h31rhujkg87f0ak2s4bfsny38dzq1m58.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "25",
    month: "11", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/542/py99kzyyg44iga42yzlf5yu6h6tkwa8h.ods",
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
    day: "05",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2a4/kzrew67dzxiz19rb1wqnvi42shcxjh6q.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "05",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/656/uap0tz7c92t9kpg4iz9p1k0fctwsy1xs.ods",
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
    day: "06",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e39/5seyoqu9op23px8a0y1kjw8avs3x40hu.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "06",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/358/3qddz9dy4uvq59qz929rukj1u5yzqbqy.ods",
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
    day: "15",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/ab5/elqm92dj9rn6jixp5im7wjjp38fl7q1z.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "15",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7cc/hhawsin5xelb2hxklxnmsqs9fg1ty5gz.ods",
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
    day: "20",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/7b3/0bodqhwatenab71sh0qm136bu9sdvvi6.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "20",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/909/04393no6le5m4l3jsld7xpm031w285nz.ods",
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
    day: "26",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/9b7/6brvw6m01ezbbh76usoef3hnkhcsglwp.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/765/wleki77hyrywyjmpfb59qgurl24pkclq.ods",
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
    day: "27",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/4de/815u0mmj3q7c0jz20mst1xa79w5mnlrs.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "27",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/1b7/zi97v4rw6b6orfjp1cqq8zgcz4rs1xa2.ods",
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
    day: "28",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a08/bx7h0nq1w3vp44dv8qn0edqws0i6jwex.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b09/sn3if2uoss4ept5bpol03wfnqhi2phty.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "30",
    month: "12", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b2a/0oz2zxtgg25xvy71vm6gm5rkzj22e38p.ods",
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
    day: "17",
    month: "01", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/514/reea2pvkxq87jzbh6o9chjw6md7jnut3.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "19",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a40/9qxgea3wnkaij0poi7jlyr08dsk76sto.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "19",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/255/g8nzf3bpzeapf8wj47549jatphm2te3j.ods",
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
    day: "25",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/3ec/lhup4l7yo7mwmm1vka0pmg3g149qugto.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "27",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/551/3229c8o49s7ia00xwqkqyad3eejpz3o4.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "19",
    month: "01", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/f46/a1mxwylpygu6a010jprc1i8av5vksra0.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "26",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/551/3229c8o49s7ia00xwqkqyad3eejpz3o4.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "27",
    month: "01", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/669/z62kymzht7krq59drck6patckt23uq0q.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "24",
    month: "01", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e35/bhku0orm0b3w72gzkykagqvttrfekm57.ods",
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
    month: "08", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/16a/al6pfiuxm2zm30eu7f9a7wryz5vxevtk.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "08", 
    year: "2022",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8c7/faq7fss73bsicqgc98yjrxh8kuqoc7fx.ods",
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
    month: "01", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/3d0/ytb36xogrrtqkjcbgnkxtg216bfckf14.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "08", 
    year: "2022",
    files: {
      progress: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/63d/w1nhu0km1e51bkqfn5rppnw9lmal808p.ods",
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
    day: "14",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/71a/j2rc8nyeiewfundsg055tvuffjfi82pc.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "15",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b96/q0donh00rh9a5trbzn2xtvntohgr7gp7.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "20",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/1ab/85c1okamlw7yed106419th8cwt3jizji.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/e52/iaqeswfkijv8se41b4dza19mza7bludl.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "22",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/b8a/2nb2mm8w3ebe5vayiebjnm3i8ue2of7z.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "27",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/618/9wxqguwj871pt1a4po6uwfbp0vf3sm4i.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "28",
    month: "02", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/8dc/x6ng6lfltfog0utfmx8w7ujke2pldtr9.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "02",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/eb7/6ajk1k6fiphr350trurrkw6hedxkysxx.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "07",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости .ods",
        url: "/upload/iblock/75b/l360a83nhmmn4yaqpui918e32bhj745h.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "10",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/a19/ynrwr798xa7m878ice33mi25bva911ss.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "13",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/9e7/cp661di3lcch9ktu6n9kjo1492pq7mdu.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "15",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/1c3/8gbm4bw70z8hzv36q175u7u9eyprp9c3.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "20",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/6c3/sg62139l1f1gotbjfmg0pxm4urpwuekp.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "21",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/907/1llzcioc6uzpo6hih16ntz03ll2wt34b.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "23",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2a5/c94mwcb9qex9aaqxkb4h558yzy2nr9g0.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "29",
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2c4/wk6ue3dqbno5wk1u9n94scz09shbg1jt.ods",
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
    month: "03", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/752/0v5izw9sz62q4mr49xqbmb2sxhix06rr.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "03",
    month: "04", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2c4/goxssu0g358bz5i1d9714c98fsj4psh9.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "05",
    month: "04", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/662/yc6riy7fgr4txmyebzz2wzir8ctytvxf.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "07",
    month: "04", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/13f/slvoevvvkjiowwfbo66oevirdk73vr72.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "12",
    month: "04", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/757/nztwhgoz65xrpb2xnzuxfj96kc48oa1t.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
      },
    },
  },
  {
    day: "13",
    month: "04", 
    year: "2023",
    files: {
      progress: {
        status: false,
        title: "",
        url: "",
      },
      done: {
        status: true,
        title: "Акт об определении кадастровой стоимости.ods",
        url: "/upload/iblock/2ea/6lanx8cdps0zkek03bf3f988jtb6ah4p.ods",
      },
      error: {
        status: false,
        title: "",
        url: "",
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
    function prevNextEvent(argMonth,argYear) {
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
