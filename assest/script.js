document.addEventListener("DOMContentLoaded", () => {
    const text = document.getElementById("text");
  
    setTimeout(() => {
      text.style.opacity = 0;
      setTimeout(() => {
        text.textContent = "Please forgive me";
        text.style.opacity = 1;
      }, 1000);
    }, 3000);
  });
  