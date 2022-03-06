  function cep() {
      const btn = document.querySelector("#btn");
      const res = document.querySelector("#res");
      const buscando = document.querySelector("#buscando");
      alert('Obs: digite o cep sem o uso de caracteres especiais... exemplo(123456) caso contrario o cep nao sera encontrado')
      res.hidden = true;
      btn.addEventListener("click", () => {
          if (buscando.value.trim() == '') {
              alert("Dgite o cep na caixa de texto, sem espaços e sem caracter especial")
          } else {
              let url = `https://viacep.com.br/ws/${buscando.value}/json/`;
              fetch(url).then((res) => {
                  return res.json()
              }).then((dados) => {
                  res.hidden = false;
                  res.innerHTML = `
                 <p>Cep: ${dados.cep}</p>
                 <p>Localidade: ${dados.logradouro}</p>
                 <p>Complemento: ${dados.complemento}</p>
                 <p>Bairro: ${dados.bairro}</p>
                 <p>Cidade: ${dados.localidade}</p>
                 <p>Estado:${dados.uf}</p>
                 <p>Ibge: ${dados.ibge}</p>
                 <p>Gia: ${dados.gia}</p>
                 <p>Ddd: ${dados.ddd}</p>
                 <p>Siafi: ${dados.siafi}</p>
                `
              })
          }
          buscando.value = '';
      })
  }
  cep()