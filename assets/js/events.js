document.addEventListener("DOMContentLoaded", () => {
  // Calendar functionality
  const calendarDays = document.getElementById("calendar-days");
  const currentMonthElement = document.getElementById("current-month");
  const prevMonthBtn = document.getElementById("prev-month");
  const nextMonthBtn = document.getElementById("next-month");

  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  // Sample events data (in a real application, this would come from a backend)
  const events = [
    { date: "2024-04-15", title: "Temple Festival" },
    { date: "2024-04-20", title: "Village Meeting" },
    { date: "2024-04-25", title: "Cultural Night" },
  ];

  function updateCalendar() {
    // Clear previous calendar days
    calendarDays.innerHTML = "";

    // Set current month and year in header
    currentMonthElement.textContent = new Date(
      currentYear,
      currentMonth
    ).toLocaleString("default", { month: "long", year: "numeric" });

    // Get first day of the month
    const firstDay = new Date(currentYear, currentMonth, 1);
    const startingDay = firstDay.getDay();

    // Get number of days in the month
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDay; i++) {
      const emptyCell = document.createElement("div");
      emptyCell.className = "calendar-day empty";
      calendarDays.appendChild(emptyCell);
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayElement = document.createElement("div");
      dayElement.className = "calendar-day";
      dayElement.textContent = day;

      // Check if the day has an event
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(
        2,
        "0"
      )}-${String(day).padStart(2, "0")}`;
      const hasEvent = events.some((event) => event.date === dateString);

      if (hasEvent) {
        dayElement.classList.add("has-event");
      }

      // Check if it's today
      const today = new Date();
      if (
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear()
      ) {
        dayElement.classList.add("today");
      }

      calendarDays.appendChild(dayElement);
    }
  }

  // Event listeners for month navigation
  prevMonthBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    updateCalendar();
  });

  nextMonthBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    updateCalendar();
  });

  // Initialize calendar
  updateCalendar();

  // Event form submission
  const eventForm = document.getElementById("event-submission-form");
  eventForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const eventName = document.getElementById("event-name").value;
    const eventDate = document.getElementById("event-date").value;
    const eventTime = document.getElementById("event-time").value;
    const eventLocation = document.getElementById("event-location").value;
    const eventDescription = document.getElementById("event-description").value;

    // In a real application, you would send this data to a backend
    console.log("Event submitted:", {
      name: eventName,
      date: eventDate,
      time: eventTime,
      location: eventLocation,
      description: eventDescription,
    });

    // Show success message
    alert("Event submitted successfully!");
    eventForm.reset();
  });

  // RSVP button functionality
  const rsvpButtons = document.querySelectorAll(".event-rsvp");
  rsvpButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const eventCard = button.closest(".event-card");
      const eventName = eventCard.querySelector("h3").textContent;
      alert(
        `Thank you for your interest in "${eventName}"! We will contact you with more details.`
      );
    });
  });

  // Calendar day click functionality
  calendarDays.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("calendar-day") &&
      !e.target.classList.contains("empty")
    ) {
      const day = e.target.textContent;
      const date = new Date(currentYear, currentMonth, day);
      const formattedDate = date.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      });

      const event = events.find((event) => {
        const eventDate = new Date(event.date);
        return (
          eventDate.getDate() === date.getDate() &&
          eventDate.getMonth() === date.getMonth() &&
          eventDate.getFullYear() === date.getFullYear()
        );
      });

      if (event) {
        alert(`Event on ${formattedDate}:\n${event.title}`);
      } else {
        alert(`No events scheduled for ${formattedDate}`);
      }
    }
  });
});
