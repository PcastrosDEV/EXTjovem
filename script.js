// script.js
document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".navigation li");
    const sections = document.querySelectorAll(".section");
  
    navItems.forEach(item => {
      item.addEventListener("click", () => {
        // Remove a classe active de todos os itens e seções
        navItems.forEach(i => i.classList.remove("active"));
        sections.forEach(section => section.classList.remove("active"));
  
        // Ativa o item clicado e a seção correspondente
        item.classList.add("active");
        const target = item.querySelector("a").getAttribute("href").substring(1);
        const targetSection = document.getElementById(target);
        if (targetSection) {
          targetSection.classList.add("active");
        }
      });
    });
  });
  