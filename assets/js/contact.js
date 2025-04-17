document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const mapContainer = document.querySelector(".map-container");

  // Form validation and submission
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // In a real application, you would send this data to a backend
    console.log("Contact form submitted:", {
      name,
      email,
      subject,
      message,
    });

    // Show success message
    alert("Thank you for your message! We will get back to you soon.");
    contactForm.reset();
  });

  // Initialize Google Maps (you'll need to replace YOUR_API_KEY with an actual Google Maps API key)
  function initMap() {
    // Replace these coordinates with the actual coordinates of Viriyur Village
    const villageLocation = { lat: 11.1271, lng: 78.6569 };

    const map = new google.maps.Map(mapContainer, {
      zoom: 14,
      center: villageLocation,
      styles: [
        {
          featureType: "all",
          elementType: "labels.text.fill",
          stylers: [{ color: "#2c3e50" }],
        },
        {
          featureType: "all",
          elementType: "labels.text.stroke",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "all",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.fill",
          stylers: [{ color: "#000000" }, { lightness: 20 }],
        },
        {
          featureType: "administrative",
          elementType: "geometry.stroke",
          stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
        },
        {
          featureType: "landscape",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "poi",
          elementType: "geometry",
          stylers: [{ color: "#f5f5f5" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.fill",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
        },
        {
          featureType: "road.arterial",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "road.local",
          elementType: "geometry",
          stylers: [{ color: "#ffffff" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#3498db" }],
        },
      ],
    });

    const marker = new google.maps.Marker({
      position: villageLocation,
      map: map,
      title: "Viriyur Village",
    });

    const infoWindow = new google.maps.InfoWindow({
      content:
        "<h3>Viriyur Village</h3><p>A beautiful village in Tamil Nadu, India</p>",
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
  }

  // Load Google Maps API
  const script = document.createElement("script");
  script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
  script.defer = true;
  script.async = true;
  document.head.appendChild(script);

  // Social media links
  const socialIcons = document.querySelectorAll(".social-icon");
  socialIcons.forEach((icon) => {
    icon.addEventListener("click", (e) => {
      e.preventDefault();
      const platform = icon
        .querySelector("i")
        .className.split(" ")[1]
        .split("-")[1];
      alert(
        `You clicked on our ${platform} link. In a real application, this would take you to our ${platform} page.`
      );
    });
  });
});
