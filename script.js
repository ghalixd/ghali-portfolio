function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Function to display a welcome message
function welcomeUser() {
  let name = prompt("Welcome to my portfolio! What's your name?");
  if (name) {
    alert("Hello, " + name + "! Enjoy exploring my work.");
  } else {
    alert("Hello, Guest! Enjoy exploring my portfolio.");
  }
}

// Function to allow the user to select a section to explore
function explorePortfolio() {
  let section;
  do {
    section = prompt(
      "Which section would you like to explore?\n1. About Me\n2. Experience\n3. Projects\n4. Exit"
    );

    if (section === "1") {
      alert("About Me: Learn more about my background, skills, and interests.");
    } else if (section === "2") {
      alert("Experience: Check out my professional and academic achievements.");
    } else if (section === "3") {
      alert("Projects: Explore my latest work and contributions.");
    } else if (section !== "4") {
      alert("Invalid choice. Please select a valid option.");
    }
  } while (section !== "4");
}


// Main function to run the script
function startPortfolioInteraction() {
  welcomeUser();
  explorePortfolio();
  let addFeedback = confirm("Would you like to leave feedback?");
  if (addFeedback) {
    collectFeedback();
  }
}

// Call the main function when the page loads
window.onload = startPortfolioInteraction;
