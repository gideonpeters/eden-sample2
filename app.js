const startApp = () => {
  const viewMealsButton = document.querySelector(
    "[data-action='view-meals-button']"
  );
  const viewMealsModal = document.querySelector(
    "[data-action='view-meals-modal']"
  );
  const viewMealItemModal = document.querySelector(
    "[data-action='view-meal-item-modal']"
  );
  const mealItem = document.querySelectorAll(".app__view-meals__item");
  const closeViewMealsModalButton = document.querySelector(
    "[data-action='close-view-meals-button']"
  );

  viewMealsButton.addEventListener("click", () => {
    viewMealsModal.classList.remove("hidden");
  });

  closeViewMealsModalButton.addEventListener("click", () => {
    viewMealsModal.classList.add("hidden");
  });

  mealItem.forEach((item) => {
    item.addEventListener("click", () => {
      viewMealItemModal.classList.remove("hidden");
    });
  });

  viewMealItemModal.addEventListener("click", () => {
    viewMealItemModal.classList.add("hidden");
  });
};

document.addEventListener("DOMContentLoaded", startApp);
