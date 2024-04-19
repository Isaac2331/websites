// Capture search query and log it to the console
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = document.getElementById('searchInput').value.trim();
    console.log('Search term:', searchTerm);
    // You can perform further actions with the search term here, such as filtering content or redirecting to a search results page
  });
  document.addEventListener("DOMContentLoaded", function() {
    // Define working hours for each day of the week
    const workingHours = {
        "Monday": "9:00 AM - 5:00 PM",
        "Tuesday": "9:00 AM - 5:00 PM",
        "Wednesday": "9:00 AM - 5:00 PM",
        "Thursday": "9:00 AM - 5:00 PM",
        "Friday": "9:00 AM - 5:00 PM",
        "Saturday": "10:00 AM - 2:00 PM",
        "Sunday": "Closed"
    };

    // Get the current day of the week
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDate = new Date();
    const currentDay = days[currentDate.getDay()];

    // Display working hours for the current day
    const workingHoursElement = document.getElementById('working-hours');
    if (workingHoursElement) {
        if (workingHours[currentDay]) {
            workingHoursElement.innerHTML = `<strong>Today's Working Hours:</strong> ${workingHours[currentDay]}`;
        } else {
            workingHoursElement.innerHTML = "<strong>Today's Working Hours:</strong> Closed";
        }
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const registrationForm = document.getElementById("registrationForm");
  
    registrationForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission
  
      // Get form values
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Perform client-side validation
      if (username.trim() === "" || email.trim() === "" || password.trim() === "") {
        alert("All fields are required");
        return;
      }
  
      // Send registration data to server or perform further actions
      // Here you can send the registration data to your backend server using AJAX or fetch API
      console.log("Registration data:", { username, email, password });
  
      // Reset form fields
      registrationForm.reset();
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const advertisements = document.querySelectorAll(".advertisement");
  
    searchButton.addEventListener("click", function() {
      const searchTerm = searchInput.value.toLowerCase().trim();
  
      advertisements.forEach(advertisement => {
        const title = advertisement.querySelector("h3").textContent.toLowerCase();
        const description = advertisement.querySelector("p").textContent.toLowerCase();
  
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
          advertisement.style.display = "block";
        } else {
          advertisement.style.display = "none";
        }
      });
    });
  });

  
  //for javaascript 

  document.addEventListener("DOMContentLoaded", function() {
    // Array of category objects with titles, descriptions, and image URLs
    const categories = [
      {
        title: "Category 1",
        description: "Description of Category 1",
        imageUrl: "category1.jpg"
      },
      {
        title: "Category 2",
        description: "Description of Category 2",
        imageUrl: "category2.jpg"
      }
      // Add more category objects as needed
    ];
  
    const categoriesSection = document.getElementById("categoriesSection");
  
    // Iterate over the categories array and generate HTML for each category
    categories.forEach(category => {
      const categoryElement = document.createElement("div");
      categoryElement.classList.add("category");
  
      const imageElement = document.createElement("img");
      imageElement.src = category.imageUrl;
      imageElement.alt = category.title;
  
      const titleElement = document.createElement("h2");
      titleElement.textContent = category.title;
  
      const descriptionElement = document.createElement("p");
      descriptionElement.textContent = category.description;
  
      categoryElement.appendChild(imageElement);
      categoryElement.appendChild(titleElement);
      categoryElement.appendChild(descriptionElement);
  
      categoriesSection.appendChild(categoryElement);
    });
  });// JavaScript is not needed for the footer
/* Add your CSS styles here */
.search {
  text-align: center;
  margin-bottom: 20px;
}

#searchInput {
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

#searchButton {
  padding: 8px 20px;
  background-color: #007bff;
  color: #fff;
  border: 1px solid #007bff;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}

#searchButton:hover {
  background-color: #0056b3;
}document.addEventListener("DOMContentLoaded", function() {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can handle sending the message here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
    
    // Clear form fields after submission
    contactForm.reset();
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const ratingStars = document.getElementById("ratingStars");
  const reviewText = document.getElementById("reviewText");
  const submitReviewBtn = document.getElementById("submitReview");

  // Create 5 star icons dynamically
  for (let i = 1; i <= 5; i++) {
    const starIcon = document.createElement("i");
    starIcon.classList.add("fas", "fa-star");
    starIcon.dataset.value = i;
    ratingStars.appendChild(starIcon);
  }

  // Event listener for rating stars
  ratingStars.addEventListener("click", function(event) {
    const clickedStar = event.target;
    if (clickedStar.classList.contains("fa-star")) {
      const starValue = parseInt(clickedStar.dataset.value);
      highlightStars(starValue);
    }
  });

  // Function to highlight stars up to the clicked star
  function highlightStars(starValue) {
    const starIcons = ratingStars.querySelectorAll(".fa-star");
    starIcons.forEach(starIcon => {
      const iconValue = parseInt(starIcon.dataset.value);
      starIcon.classList.toggle("active", iconValue <= starValue);
    });
  }

  // Event listener for submitting review
  submitReviewBtn.addEventListener("click", function() {
    const rating = getRating();
    const review = reviewText.value.trim();
    // You can handle submitting the rating and review here
    console.log("Rating:", rating);
    console.log("Review:", review);
    // Reset review text area after submission
    reviewText.value = "";
    // Reset rating stars
    highlightStars(0);
  });

  // Function to get the current rating based on highlighted stars
  function getRating() {
    const starIcons = ratingStars.querySelectorAll(".fa-star");
    let rating = 0;
    starIcons.forEach(starIcon => {
      if (starIcon.classList.contains("active")) {
        rating++;
      }
    });
    return rating;
  }
});















  

  

 