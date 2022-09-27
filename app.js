const items = [...document.querySelectorAll(".number")];

const updateCount = function (el) {
  const value = parseInt(el.dataset.value);
  console.log(el.dataset.value);
  const increment = Math.ceil(value / 1000);
  let initialValue = 0;

  const increaseCount = setInterval(() => {
    initialValue += increment;

    if (initialValue > value) {
      el.textContent = `${value}+`;
      clearInterval(increaseCount);
      return;
    }

    el.textContent = `${initialValue}`;
  }, 10);
};

items.forEach((item) => {
  console.log(item);
  updateCount(item);
});
