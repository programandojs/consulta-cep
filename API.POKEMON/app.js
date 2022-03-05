function pokedex() {
    const conteudo = document.getElementById('conteudo');
    const pokemon = document.getElementById('pokemon');
    const informa = document.getElementById('informa');
    const guarda = document.getElementById('guarda');
    const sair = document.getElementById('sair');

    for (let id = 1; id <= 100; id++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

        fetch(url).then((res) => {
            return res.json()
        }).then((data) => {
            informa.hidden = true;
            let criar = document.createElement('div');
            pokemon.appendChild(criar);
            criar.innerHTML = `
            <a href="#sair">
            <img src=${data.sprites.front_default}>
            <p># ${data.id}</p>
            <p>${data.name}</p>
            </a>
            `

            criar.addEventListener('click', () => {
                informa.hidden = false;
                guarda.innerHTML = `
                <img src=${data.sprites.front_default}>
                <p># ${data.id}</p>
                <p>${data.name}</p>
                <p>Tipo: ${data.types[0].type.name}</p>
                <p>Habilidade: ${data.abilities[0].ability.name}</p>
                <p>Experiência:${data.base_experience}</p>
                <p> Altura: ${data.height}</p>
                <p>Peso: ${data.weight}</p>
                `

            })

            sair.addEventListener('click', () => {
                informa.hidden = true;
            })

            console.log(data)
        }).catch(e => console.log(`deu erro ${e}`))
    }
}

pokedex();