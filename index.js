const justFood = (pocetLidi) => {
  return `catering od Just Food pro ${pocetLidi} lidí za ${Math.round(
    pocetLidi * 85
  )} Kč`;
};
const yourMama = (pocetLidi) => {
  return `catering od Your Mama pro ${pocetLidi} lidí za ${Math.round(
    pocetLidi * 499
  )} Kč`;
};
const flavourHaven = (pocetLidi) => {
  return `catering od Flavour Haven pro ${pocetLidi} lidí za ${Math.round(
    pocetLidi * 3000
  )} Kč`;
};

const createEvent = (nazevUdalosti, pocetLidi, catering) => {
  return `Událost ${nazevUdalosti} s ${catering(pocetLidi)}`;
};

document.body.innerHTML += createEvent(
  'Inaugurace prezidenta',
  100,
  flavourHaven
);