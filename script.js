document.addEventListener("DOMContentLoaded", () => {
  // Newsletter Form Submission
  const newsletterForm = document.getElementById("newsletter-form")
  const sidebarNewsletterForm = document.getElementById("sidebar-newsletter-form")
  const contactForm = document.getElementById("contact-form")
  const searchBtn = document.getElementById("search-btn")
  const searchInput = document.getElementById("search-input")
  const loadMoreBtn = document.querySelector(".load-more button")

  // Handle main newsletter form submission
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // Simulate form submission
      console.log("Newsletter subscription for:", email)

      // Show success message
      showNotification("Thanks for subscribing to our newsletter!")

      // Reset form
      this.reset()
    })
  }

  // Handle sidebar newsletter form submission
  if (sidebarNewsletterForm) {
    sidebarNewsletterForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value

      // Simulate form submission
      console.log("Sidebar newsletter subscription for:", email)

      // Show success message
      showNotification("Thanks for subscribing to our newsletter!")

      // Reset form
      this.reset()
    })
  }

  // Handle contact form submission
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault()
      const email = this.querySelector('input[type="email"]').value
      const message = this.querySelector("textarea").value

      // Simulate form submission
      console.log("Contact form submission:", { email, message })

      // Show success message
      showNotification("Your message has been sent. We'll get back to you soon!")

      // Reset form
      this.reset()
    })
  }

  // Handle search functionality
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      handleSearch()
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        handleSearch()
      }
    })
  }

  // Handle load more button
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener("click", () => {
      // Simulate loading more posts
      loadMorePosts()
    })
  }

  // Function to handle search
  function handleSearch() {
    const query = searchInput.value.trim()

    if (query) {
      // Simulate search functionality
      console.log("Searching for:", query)
      showNotification(`Searching for: ${query}`)

      // In a real application, you would redirect to search results page
      // window.location.href = `/search?q=${encodeURIComponent(query)}`;

      // For demo purposes, just clear the input
      searchInput.value = ""
    }
  }

  // Function to show notification
  function showNotification(message) {
    // Create notification element
    const notification = document.createElement("div")
    notification.className = "notification"
    notification.textContent = message

    // Style the notification
    Object.assign(notification.style, {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "var(--accent-color)",
      color: "var(--darker-bg)",
      padding: "12px 20px",
      borderRadius: "4px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      zIndex: "1000",
      opacity: "0",
      transition: "opacity 0.3s ease",
    })

    // Add to DOM
    document.body.appendChild(notification)

    // Trigger animation
    setTimeout(() => {
      notification.style.opacity = "1"
    }, 10)

    // Remove after 3 seconds
    setTimeout(() => {
      notification.style.opacity = "0"
      setTimeout(() => {
        document.body.removeChild(notification)
      }, 300)
    }, 3000)
  }

  // Function to simulate loading more posts
  function loadMorePosts() {
    // Show loading state
    loadMoreBtn.textContent = "Loading..."
    loadMoreBtn.disabled = true

    // Simulate API call delay
    setTimeout(() => {
      // Create new post elements
      const latestPosts = document.querySelector(".latest-posts")

      // Sample post data - in a real app, this would come from an API
      const newPosts = [
        {
          title: "How to Build a Second Brain for Enhanced Productivity",
          category: "Organization",
          date: "May 18, 2023",
          readTime: "8 min read",
          excerpt:
            "Learn how to create an external knowledge management system to enhance your productivity and creativity.",
        },
        {
          title: "The 80/20 Rule: Focus on What Really Matters",
          category: "Mindset",
          date: "May 15, 2023",
          readTime: "6 min read",
          excerpt:
            "Discover how to apply the Pareto Principle to identify the 20% of tasks that yield 80% of your results.",
        },
      ]

      // Add new posts to the DOM
      newPosts.forEach((post) => {
        const postElement = document.createElement("article")
        postElement.className = "post-card"
        postElement.innerHTML = `
                    <div class="post-image">
                        <img src="/placeholder.svg?height=250&width=400" alt="${post.title}">
                    </div>
                    <div class="post-content">
                        <span class="category">${post.category}</span>
                        <h3>${post.title}</h3>
                        <p>${post.excerpt}</p>
                        <div class="post-meta">
                            <span class="date">${post.date}</span>
                            <span class="read-time">${post.readTime}</span>
                        </div>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                `

        // Insert before the load more button container
        latestPosts.insertBefore(postElement, document.querySelector(".load-more"))
      })

      // Reset button state
      loadMoreBtn.textContent = "Load More Articles"
      loadMoreBtn.disabled = false

      // Show notification
      showNotification("New articles loaded")
    }, 1500)
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const targetId = this.getAttribute("href")
      if (targetId === "#") return

      const targetElement = document.querySelector(targetId)
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        })
      }
    })
  })

  // Add active class to current nav item
  function setActiveNavItem() {
    const navItems = document.querySelectorAll("nav ul li a")
    const currentPath = window.location.pathname

    navItems.forEach((item) => {
      const href = item.getAttribute("href")
      if (href === currentPath || (currentPath === "/" && href === "index.html")) {
        item.classList.add("active")
      } else {
        item.classList.remove("active")
      }
    })
  }

  setActiveNavItem()
})
