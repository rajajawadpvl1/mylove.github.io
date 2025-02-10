const febHolidays = [
    "Kunjaaahhhhh, please feel it",
    "This my love cycle, Just feel it",
    "Uh r my best frnd, Someyimes just more than that😊",
    "Billoions kanakkin alukaley edenn nki anne kityy 🤩",
    "Ups and downs il okke yyi nd 🤨",
    "Ente life time motham yyi madhyy ❤",
    "I need uh, I want uh, I love you❤️",
    "You're my everything ✔",
    "You are my soulmate ✨💕",
    "And of course... wait baby.....",
    "My future wife🤭",
    "I will always be there for you",
    "No matter how far we are🥰",
    "I promise I will never cheat on you",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "I'm always be with uh kunjuooohhh 🤞✔",
    "Yyi orikkalum otakk avoola ambilyyyy💓",
    "You are the most special person in my life🥰",
    "I don't want to loose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best Kunjukkilyyyy!! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "I love the moments when I'm with uh",
    "Ath eni msg yakkumbo anelum neritt anelum 💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete love cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "I'm in love with uh Muthmanyyy",
    "Padachoney ithiney nki thannen nanni nd 🙏",
    "You're the love of my life,",
    "I Love You Soooooo much muthmanyyyyyy❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  
