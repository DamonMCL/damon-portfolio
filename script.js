// Mobile Navigation Toggle
document.addEventListener("DOMContentLoaded", function () {
  const mobileToggle = document.querySelector(".mobile-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle) {
    mobileToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
    });
  }
});

// Newsletter Subscription Handler
function handleSubscribe(event) {
  event.preventDefault();

  const form = event.target;
  const email = form.email.value;
  const messageDiv = document.getElementById("subscribe-message");

  // Validation
  if (!email || !email.includes("@")) {
    messageDiv.className = "form-message error";
    messageDiv.textContent = "Please enter a valid email address.";
    return false;
  }

  // Success message
  messageDiv.className = "form-message success";
  messageDiv.textContent = `Thank you for subscribing! We'll send updates to ${email}.`;

  // Reset form
  form.reset();

  // Hide message after 5 seconds
  setTimeout(function () {
    messageDiv.style.display = "none";
  }, 5000);

  return false;
}

// Contact Form Handler
function handleContact(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const phone = form.phone.value;
  const subject = form.subject.value;
  const message = form.message.value;
  const newsletter = form.newsletter.checked;
  const messageDiv = document.getElementById("contact-message");

  // Validation
  if (!name || !email || !subject || !message) {
    messageDiv.className = "form-message error";
    messageDiv.textContent = "Please fill in all required fields.";
    return false;
  }

  if (!email.includes("@")) {
    messageDiv.className = "form-message error";
    messageDiv.textContent = "Please enter a valid email address.";
    return false;
  }

  // Build submission summary
  let submissionSummary = `
        Thank you, ${name}! Your message has been received.
        
        Submission Details:
        - Email: ${email}
        ${phone ? "- Phone: " + phone : ""}
        - Subject: ${subject}
        - Newsletter: ${newsletter ? "Yes" : "No"}
        
        I'll get back to you within 24-48 hours.
    `;

  // Success message
  messageDiv.className = "form-message success";
  messageDiv.textContent = submissionSummary;
  messageDiv.style.whiteSpace = "pre-line";

  // Console log submission for demonstration
  console.log("Form Submitted:", {
    name,
    email,
    phone,
    subject,
    message,
    newsletter,
    timestamp: new Date().toISOString(),
  });

  // Reset form
  form.reset();

  // Scroll to message
  messageDiv.scrollIntoView({ behavior: "smooth", block: "center" });

  return false;
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  });
});

// Form Input Validation Feedback
document.querySelectorAll(".form-input").forEach((input) => {
  input.addEventListener("blur", function () {
    if (this.hasAttribute("required") && !this.value) {
      this.style.borderColor = "#d5001c";
      this.setAttribute("aria-invalid", "true");
    } else {
      this.style.borderColor = "#ddd";
      this.removeAttribute("aria-invalid");
    }
  });

  input.addEventListener("input", function () {
    if (this.value) {
      this.style.borderColor = "#4CAF50";
    }
  });
});
