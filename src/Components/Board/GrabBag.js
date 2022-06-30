import pokemonBank from "../App/pokemonBank.txt"

export const boardDefault = [
    ["", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", "", "", ""]
];

export const generatePokeSet = async () => {
    let pokemon;
    await fetch(pokemonBank)
    .then((response) => response.text())
    .then((result) => {
        const pokeArr = result.split("\r\n");
        pokemon = new Set(pokeArr);
    });
    
    return { pokemon };
}