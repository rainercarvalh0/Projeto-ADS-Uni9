document.addEventListener("DOMContentLoaded", () => {
  // Anima entrada: slide da direita para o centro
  document.body.style.transform = "translateX(0)";
  document.body.style.opacity = "1";

  const links = document.querySelectorAll("a[href]");

  links.forEach(link => {
    const url = link.getAttribute("href");

    if (!url.startsWith("#") && !url.startsWith("http")) {
      link.addEventListener("click", function (e) {
        e.preventDefault();
        
        // Anima saída: slide para a esquerda
        document.body.style.transform = "translateX(-100%)";
        document.body.style.opacity = "0";

        setTimeout(() => {
          window.location.href = url;
        }, 80); // tempo de transição
      });
    }
  });
});