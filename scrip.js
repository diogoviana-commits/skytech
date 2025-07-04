// Alternância de tema
document.getElementById("toggle-theme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Simulação de envio
document.querySelector("form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Mensagem enviada com sucesso!");
});

// Carregamento de planos
fetch("./planos.json")
  .then(res => res.json())
  .then(planos => {
    const container = document.getElementById("planos-container");
    planos.forEach(plan => {
      const div = document.createElement("div");
      div.className = "plan";
      div.innerHTML = `
        <h3>${plan.nome}</h3>
        <p><strong>${plan.preco}</strong></p>
        <ul>
          ${plan.beneficios.map(b => `<li>${b}</li>`).join("")}
        </ul>
      `;
      container.appendChild(div);
    });
  })
  .catch(err => {
    console.error("Erro ao carregar os planos:", err);
  });
