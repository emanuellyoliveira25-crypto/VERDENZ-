document.addEventListener("DOMContentLoaded", () => {
  
  // ==========================================
  // CONTROLE DO MODO CLARO E ESCURO
  // ==========================================
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const iconSun = document.querySelector(".icon-sun");
  const iconMoon = document.querySelector(".icon-moon");

  themeToggle.addEventListener("click", () => {
    if (body.classList.contains("light-mode")) {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      iconSun.classList.add("hidden");
      iconMoon.classList.remove("hidden");
      themeToggle.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    } else {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      iconMoon.classList.add("hidden");
      iconSun.classList.remove("hidden");
      themeToggle.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    }
  });

  // ==========================================
  // SIMULAÇÃO DE PESQUISA COM INTELIGÊNCIA ARTIFICIAL
  // (Baseado em fontes científicas e confiáveis)
  // ==========================================
  const searchInput = document.getElementById("ai-search");
  const searchBtn = document.getElementById("search-btn");
  const responseBox = document.getElementById("ai-response");

  // Banco de respostas simulado da IA
  const respostasIA = {
    "sustentabilidade": "🤖 **Resposta da IA Verdenza:** Com base em dados da Embrapa (2026), a sustentabilidade no campo é impulsionada pelo plantio direto e rotação de culturas, o que reduziu a emissão de carbono no solo em até **35%**.",
    "soja": "🤖 **Resposta da IA Verdenza:** Fontes do Conab apontam que a soja brasileira lidera o mercado mundial devido a sementes modificadas que resistem à estiagem sem demandar expansão territorial em áreas protegidas.",
    "milho": "🤖 **Resposta da IA Verdenza:** Segundo o Ministério da Agricultura, o milho safrinha otimiza o calendário agrícola, gerando biocombustível limpo com pegada ecológica reduzida.",
    "tecnologia": "🤖 **Resposta da IA Verdenza:** A Inteligência Artificial e drones de pulverização localizada conseguem diminuir o desperdício de água e insumos em até **40%** nas lavouras modernas."
  };

  function processarBusca() {
    const query = searchInput.value.toLowerCase().trim();
    
    if (query === "") {
      responseBox.classList.add("hidden");
      return;
    }

    responseBox.classList.remove("hidden");
    responseBox.innerHTML = "✨ *Processando resposta a partir de fontes verificadas (Embrapa, IBGE, Conab)...*";

    // Simular um delay de resposta rápida da IA
    setTimeout(() => {
      let encontrou = false;
      
      for (let chave in respostasIA) {
        if (query.includes(chave)) {
          // Substitui a marcação ** por tags strong reais do HTML
          let textoFormatado = respostasIA[chave].replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
          responseBox.innerHTML = textoFormatado;
          encontrou = true;
          break;
        }
      }

      if (!encontrou) {
        responseBox.innerHTML = "🤖 **Resposta da IA:** Encontrei dados gerais sobre sua busca. Os relatórios de 2026 afirmam que a junção de **tecnologia de precisão** e **leis ambientais rígidas** colocam o Agro nacional na vanguarda do desenvolvimento sustentável global.";
      }
    }, 6000); // 600ms de animação de pensamento
  }

  // Eventos para ativar a busca
  searchBtn.addEventListener("click", processarBusca);
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      processarBusca();
    }
  });

  // Fechar a caixa da IA ao clicar fora dela
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      responseBox.classList.add("hidden");
    }
  });
});
