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
     
      lutaElement.style.display = "none";
      perdeuElement.style.display = "inline"
      mensagemElement.innerText = json.value;

    } catch (error) {
      console.error(error.message);
    }
  }

var acao =  document.querySelector('.acao');

acao.addEventListener("click", (e) => {
    getData();

})



  
