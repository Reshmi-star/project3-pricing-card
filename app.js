const monthlyButton = document.getElementById("monthly");
const yearlyButton = document.getElementById("yearly");

const prices = document.querySelectorAll(".price");
const units = document.querySelectorAll(".unit");

function setPeriod(period) {
  prices.forEach(function (price) {
    price.textContent = price.dataset[period];
  });

  units.forEach(function (unit) {
    if (period === "monthly") {
      unit.textContent = "per month";
    } else {
      unit.textContent = "per year";
    }
  });

  monthlyButton.classList.toggle("active", period === "monthly");
  yearlyButton.classList.toggle("active", period === "yearly");

  monthlyButton.setAttribute("aria-pressed", String(period === "monthly"));

  yearlyButton.setAttribute("aria-pressed", String(period === "yearly"));
}

monthlyButton.addEventListener("click", function () {
  setPeriod("monthly");
});

yearlyButton.addEventListener("click", function () {
  setPeriod("yearly");
});

// Show monthly prices when the page first opens.
setPeriod("monthly");
