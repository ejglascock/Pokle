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
    let todaysPoke;
    await fetch(pokemonBank)
    .then((response) => response.text())
    .then((result) => {
        const pokeArr = result.split("\r\n");
        todaysPoke = pokeArr[Math.floor(Math.random() * pokeArr.length)]
        pokemon = new Set(pokeArr);
    });
    
    return { pokemon, todaysPoke };
}