const advice_no = document.querySelector(".advice-no");
const advice_text = document.querySelector(".advice-text");
const next_button = document.querySelector(".next-advice-button");

api_fetch = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((result) => {
      //   console.log(result);
      advice_no.innerHTML = `Advice #${result.slip.id}`;
      advice_text.innerHTML = `"${result.slip.advice}"`;
    });
};
next_button.addEventListener("click", () => {
  api_fetch();
});
