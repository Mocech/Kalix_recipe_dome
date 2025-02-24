// Newsletter form submission
const newsletterForm = document.getElementById("newsletter-form")
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault()
    const email = this.querySelector('input[type="email"]').value
    alert(`Thank you for subscribing with: ${email}`)
    this.reset()
  })
}

// Recipe search and filter functionality
const recipeSearch = document.getElementById("recipe-search")
const categoryFilter = document.getElementById("category-filter")
const difficultyFilter = document.getElementById("difficulty-filter")

function filterRecipes() {
  const searchTerm = recipeSearch.value.toLowerCase()
  const category = categoryFilter.value
  const difficulty = difficultyFilter.value

  const recipeCards = document.querySelectorAll(".recipe-card")

  recipeCards.forEach((card) => {
    const title = card.querySelector("h3").textContent.toLowerCase()
    const cardCategory = card.querySelector(".recipe-meta span:first-child").textContent
    const cardDifficulty = card.querySelector(".recipe-meta span:last-child").textContent

    const matchesSearch = title.includes(searchTerm)
    const matchesCategory = category === "" || cardCategory === category
    const matchesDifficulty = difficulty === "" || cardDifficulty === difficulty

    if (matchesSearch && matchesCategory && matchesDifficulty) {
      card.style.display = "block"
    } else {
      card.style.display = "none"
    }
  })
}

if (recipeSearch && categoryFilter && difficultyFilter) {
  recipeSearch.addEventListener("input", filterRecipes)
  categoryFilter.addEventListener("change", filterRecipes)
  difficultyFilter.addEventListener("change", filterRecipes)
}

// Login form submission
const loginForm = document.getElementById("login-form")
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Login functionality would be implemented here.")
    this.reset()
  })
}

// Signup form submission
const signupForm = document.getElementById("signup-form")
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Signup functionality would be implemented here.")
    this.reset()
  })
}

// Contact form submission
const contactForm = document.getElementById("contact-form")
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault()
    alert("Your message has been sent. We'll get back to you soon!")
    this.reset()
  })
}

// Load more recipes button
const loadMoreButton = document.getElementById("load-more")
if (loadMoreButton) {
  loadMoreButton.addEventListener("click", () => {
    alert("This would load more recipes from the server in a real application.")
  })
}

// Profile page functionality
function loadProfile() {
  const favoriteRecipes = [
    {
      id: 1,
      title: "Homemade Margherita Pizza",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food%20Recipe%20Website%20UI%20(1)-U3wqnJeBlL08UoPkPvymDA3BQfVQmt.jpeg",
    },
    {
      id: 2,
      title: "Sadza neMatemba",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sadza%20nematemba,%20missing%20veg-A2WJtyD6B0tX1mPq7YMrKNsPm8Mw1S.jpeg",
    },
  ]

  const recipeGrid = document.querySelector(".favorite-recipes .recipe-grid")
  if (recipeGrid) {
    favoriteRecipes.forEach((recipe) => {
      const recipeCard = document.createElement("div")
      recipeCard.className = "recipe-card"
      recipeCard.innerHTML = `
                <img src="${recipe.image}" alt="${recipe.title}">
                <h3>${recipe.title}</h3>
                <a href="recipe-detail.html?id=${recipe.id}" class="btn btn-secondary">View Recipe</a>
            `
      recipeGrid.appendChild(recipeCard)
    })
  }
}

// Call loadProfile if on the profile page
if (document.querySelector(".profile")) {
  loadProfile()
}

// Recipe detail page functionality
function loadRecipeDetail() {
  const urlParams = new URLSearchParams(window.location.search)
  const recipeId = urlParams.get("id")

  // This is where you would typically fetch the recipe data from a server
  // For this example, we'll use a mock recipe
  const recipe = {
    id: recipeId,
    title: "Homemade Margherita Pizza",
    image:
      "Assests/images/fried_eggs.jpeg",
    category: "Main Course",
    time: "35 mins",
    difficulty: "Medium",
    rating: 4.7,
    ratingCount: 156,
    description: "A classic Italian pizza with a crispy crust, fresh tomatoes, mozzarella, and basil.",
    ingredients: [
      "2 1/4 cups (280g) all-purpose flour",
      "1 tsp salt",
      "1 tsp sugar",
      "1 tbsp active dry yeast",
      "1 tbsp olive oil",
      "3/4 cup (180ml) warm water",
      "1 can (400g) whole peeled tomatoes",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Extra virgin olive oil",
    ],
    instructions: [
      "In a large bowl, mix flour, salt, sugar, and yeast.",
      "Add olive oil and warm water. Mix until a dough forms.",
      "Knead the dough for about 10 minutes until smooth and elastic.",
      "Place the dough in a greased bowl, cover, and let rise for 1 hour.",
      "Preheat your oven to 450°F (230°C).",
      "Roll out the dough and place it on a baking sheet.",
      "Spread crushed tomatoes over the dough, leaving a border for the crust.",
      "Add sliced fresh mozzarella and drizzle with olive oil.",
      "Bake for 15-20 minutes until the crust is golden and cheese is bubbly.",
      "Remove from oven, add fresh basil leaves, slice, and serve!",
    ],
  }

  document.getElementById("recipe-title").textContent = recipe.title
  document.getElementById("recipe-image").src = recipe.image
  document.getElementById("recipe-image").alt = recipe.title
  document.getElementById("recipe-category").textContent = recipe.category
  document.getElementById("recipe-time").textContent = recipe.time
  document.getElementById("recipe-difficulty").textContent = recipe.difficulty
  document.getElementById("recipe-description").textContent = recipe.description

  const ratingElement = document.getElementById("recipe-rating")
  ratingElement.querySelector(".rating-value").textContent = recipe.rating.toFixed(1)
  ratingElement.querySelector(".rating-count").textContent = `(${recipe.ratingCount} ratings)`
  ratingElement.querySelector(".stars").textContent =
    "★".repeat(Math.round(recipe.rating)) + "☆".repeat(5 - Math.round(recipe.rating))

  const ingredientsList = document.getElementById("ingredients-list")
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li")
    li.textContent = ingredient
    ingredientsList.appendChild(li)
  })

  const instructionsList = document.getElementById("instructions-list")
  recipe.instructions.forEach((instruction) => {
    const li = document.createElement("li")
    li.textContent = instruction
    instructionsList.appendChild(li)
  })
}

// User rating functionality
function initializeRating() {
  const stars = document.querySelectorAll(".star-rating .star")
  const submitButton = document.getElementById("submit-rating")

  stars.forEach((star) => {
    star.addEventListener("click", () => {
      const rating = Number.parseInt(star.getAttribute("data-rating"))
      stars.forEach((s) => {
        if (Number.parseInt(s.getAttribute("data-rating")) <= rating) {
          s.classList.add("active")
        } else {
          s.classList.remove("active")
        }
      })
    })
  })

  submitButton.addEventListener("click", () => {
    const selectedRating = document.querySelector(".star-rating .star.active")
    if (selectedRating) {
      const rating = Number.parseInt(selectedRating.getAttribute("data-rating"))
      alert(`Thank you for rating this recipe ${rating} stars!`)
      // Here you would typically send the rating to a server
    } else {
      alert("Please select a rating before submitting.")
    }
  })
}

// Call functions if on the recipe detail page
if (document.querySelector(".recipe-detail")) {
  loadRecipeDetail()
  initializeRating()
}

// Add these new functions to your existing script.js file

// Profile page functionality
document.addEventListener("DOMContentLoaded", () => {
  // Edit Profile Form Handler
  const editProfileForm = document.getElementById("edit-profile-form")
  if (editProfileForm) {
    const profilePreview = document.getElementById("profile-preview")
    const profilePicture = document.getElementById("profile-picture")

    profilePicture?.addEventListener("change", (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          profilePreview.src = e.target.result
        }
        reader.readAsDataURL(file)
      }
    })

    editProfileForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      alert("Profile updated successfully!")
      window.location.href = "profile.html"
    })
  }

  // Add Recipe Form Handler
  const addRecipeForm = document.getElementById("add-recipe-form")
  if (addRecipeForm) {
    const recipePreview = document.getElementById("recipe-preview")
    const recipeImage = document.getElementById("recipe-image")
    const addIngredientBtn = document.getElementById("add-ingredient")
    const addInstructionBtn = document.getElementById("add-instruction")
    const ingredientsContainer = document.getElementById("ingredients-container")
    const instructionsContainer = document.getElementById("instructions-container")

    // Image preview
    recipeImage?.addEventListener("change", (e) => {
      const file = e.target.files[0]
      if (file) {
        const reader = new FileReader()
        reader.onload = (e) => {
          recipePreview.src = e.target.result
        }
        reader.readAsDataURL(file)
      }
    })

    // Add ingredient field
    addIngredientBtn?.addEventListener("click", () => {
      const ingredientRow = document.createElement("div")
      ingredientRow.className = "ingredient-row"
      ingredientRow.innerHTML = `
                <input type="text" name="ingredients[]" placeholder="Enter ingredient" required>
                <button type="button" class="btn btn-secondary remove-ingredient">Remove</button>
            `
      ingredientsContainer.appendChild(ingredientRow)
    })

    // Add instruction field
    addInstructionBtn?.addEventListener("click", () => {
      const instructionRow = document.createElement("div")
      instructionRow.className = "instruction-row"
      instructionRow.innerHTML = `
                <textarea name="instructions[]" placeholder="Enter instruction step" required></textarea>
                <button type="button" class="btn btn-secondary remove-instruction">Remove</button>
            `
      instructionsContainer.appendChild(instructionRow)
    })

    // Remove ingredient/instruction
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("remove-ingredient")) {
        if (ingredientsContainer.children.length > 1) {
          e.target.parentElement.remove()
        }
      }
      if (e.target.classList.contains("remove-instruction")) {
        if (instructionsContainer.children.length > 1) {
          e.target.parentElement.remove()
        }
      }
    })

    // Form submission
    addRecipeForm.addEventListener("submit", (e) => {
      e.preventDefault()
      // Here you would typically send the form data to a server
      alert("Recipe added successfully!")
      window.location.href = "profile.html"
    })
  }

  // Delete recipe handler
  const deleteButtons = document.querySelectorAll(".delete-recipe")
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      if (confirm("Are you sure you want to delete this recipe?")) {
        const recipeId = this.getAttribute("data-id")
        // Here you would typically send a delete request to the server
        this.closest(".recipe-card").remove()
        alert("Recipe deleted successfully!")
      }
    })
  })

  // Edit recipe handler
  const editButtons = document.querySelectorAll(".edit-recipe")
  editButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const recipeId = this.getAttribute("data-id")
      // Redirect to edit recipe page (you would need to create this page)
      window.location.href = `edit-recipe.html?id=${recipeId}`
    })
  })
})

