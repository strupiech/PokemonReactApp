const POKESTART = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=60";

class FetchDataService {

    static POKEMONS = this.fetchData();
    static ERROR;

    static fetchData() {
        const pokemonsData = [];

        fetch(POKESTART)
            .then((response) => response.json())
            .then((response) => {
                response.results.map(pokemon => {
                    fetch(pokemon.url)
                        .then(response => response.json())
                        .then(pokeDetails => {
                            pokemonsData.push(pokeDetails)
                        });
                })
            },
                (error) => {
                    ERORR = error;
                });

        pokemonsData.sort(function (a, b) {
            return a.id - b.id;
        });
        return pokemonsData;
    }
}

export default FetchDataService;