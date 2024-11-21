console.log('oi');

async function getData() {

  const botaoElement = document.getElementById("botao");

  botaoElement.style.boxShadow = "none";

    const url = "https://api.chucknorris.io/jokes/random";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json.value);

      const mensagemElement = document.getElementById("mensagem");
      const lutaElement = document.getElementById("luta");
      const perdeuElement = document.getElementById("perdeu");
      const venceuElement = document.getElementById("vencedor");
      const buttonElement = document.getElementById("botao");
     
      venceuElement.textContent = "Congratulations, you defeated Mike Tyson! As a reward for your epic vitory, here's a legendary Chuck Norris quote to inspire you";
      lutaElement.style.display = "none";
      perdeuElement.style.display = "inline";
      buttonElement.style.display = "none";
      mensagemElement.innerText = "''" + json.value + "''";


    } catch (error) {
      console.error(error.message);
    }
  }

var acao =  document.querySelector('.acao');

acao.addEventListener("click", (e) => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
  
  const count = 200,
    defaults = {
      origin: { y: 0.7 },
    };

  function fire(particleRatio, opts) {
    confetti(
      Object.assign({}, defaults, opts, {
        particleCount: Math.floor(count * particleRatio),
      })
    );
  }
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  
  fire(0.2, {
    spread: 60,
  });
  
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
  });
  
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
  getData();


})



  
