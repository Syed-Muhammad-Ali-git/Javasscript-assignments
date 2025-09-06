const cardContainer = document.getElementById("cardContainer");
const allBtn = document.getElementById("all");
const breakFastBtn = document.getElementById("breakFast");
const lunchBtn = document.getElementById("lunch");
const shakesBtn = document.getElementById("shakes");

axios
  .get("https://dummyjson.com/recipes")
  .then((res) => {
    const recipes = res.data.recipes;
    // Function to render cards
    function renderCards(data) {
      cardContainer.innerHTML = ""; // clear old cards
      data.forEach((element) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
          <div class="mb-2"><img src="${
            element.image
          }" class="rounded-2xl "></div>
          <h2 class="text-2xl font-bold mb-4">${element.name}</h2>
          <p class="mb-2"><strong>Ingredients:</strong> ${element.ingredients.join(
            ", "
          )}</p>
          <p class="mb-2"><strong>Instructions:</strong> ${
            element.instructions
          }</p>
          <p class="mb-2"><strong>Reviews:</strong> ${element.reviewCount}</p>
          <p class="mb-2"><strong>Prep Time:</strong> ${
            element.prepTimeMinutes
          } minutes</p>
          <p class="mb-2"><strong>Cook Time:</strong> ${
            element.cookTimeMinutes
          } minutes</p>
          <p class="mb-2"><strong>Ratings:</strong> ${element.rating}</p>
        `;
        cardContainer.appendChild(card);
      });
    }

    // By default show all recipes cards
    renderCards(recipes);

    // All button
    allBtn.addEventListener("click", () => {
      renderCards(recipes);
    });

    // Breakfast button
    breakFastBtn.addEventListener("click", () => {
      const breakfastRecipes = recipes.filter((item) =>
        item.mealType.includes("Breakfast")
      );
      renderCards(breakfastRecipes);
    });

    // Breakfast button
    lunchBtn.addEventListener("click", () => {
      const lunchRecipes = recipes.filter((item) =>
        item.mealType.includes("Lunch")
      );
      renderCards(lunchRecipes);
    });

    // Shakes button
    shakesBtn.addEventListener("click", () => {
      const shakesRecipe = recipes.filter(
        (item) =>
          item.mealType.includes("Shakes") || item.mealType.includes("Dessert")
      );
      renderCards(shakesRecipe);
    });
  })

  // catch error
  .catch((err) => {
    console.error("Axios error:", err);
  });
