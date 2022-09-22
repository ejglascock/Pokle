// import pokemonBank from "../App/pokemonBank.txt"

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
    // await fetch(pokemonBank)
    // .then((response) => response.text())
    // .then((result) => {
    //     const pokeArr = result.split("\r\n");
    //     todaysPoke = pokeArr[Math.floor(Math.random() * pokeArr.length)]
    //     pokemon = new Set(pokeArr);
    // });

    await fetch("https://pokeapi.co/api/v2/pokemon?limit=905")
    .then((response) => response.json())
    .then((result) => {
        const resultArr = result.results;
        var newPokeArr = [];
        resultArr.forEach(element => {
            newPokeArr.push(element.name)
        });
        newPokeArr[28] = "nidoranf";
        newPokeArr[31] = "nidoranm";
        newPokeArr[121] = "mrmime";
        newPokeArr[232] = "porygontwo";
        newPokeArr[249] = "hooh";
        newPokeArr[385] = "deoxys";
        newPokeArr[412] = "wormadam";
        newPokeArr[438] = "mimejr";
        newPokeArr[473] = "porygonz";
        newPokeArr[486] = "giratina";
        newPokeArr[491] = "shaymin";
        newPokeArr[549] = "basculin";
        newPokeArr[554] = "darmanitan";
        newPokeArr[640] = "tornadus";
        newPokeArr[641] = "thundurus";
        newPokeArr[644] = "landorus";
        newPokeArr[646] = "keldeo";
        newPokeArr[647] = "meloetta";
        newPokeArr[677] = "meowstic";
        newPokeArr[680] = "aegislash";
        newPokeArr[709] = "pumpkaboo";
        newPokeArr[710] = "gourgeist";
        newPokeArr[717] = "zygarde";
        newPokeArr[740] = "oricorio";
        newPokeArr[744] = "lycanroc";
        newPokeArr[745] = "wishiwashi";
        newPokeArr[771] = "typenull";
        newPokeArr[773] = "minior";
        newPokeArr[777] = "mimikyu";
        newPokeArr[781] = "jangmoo";
        newPokeArr[782] = "hakamoo";
        newPokeArr[783] = "kommoo";
        newPokeArr[784] = "tapukoko";
        newPokeArr[785] = "tapulele";
        newPokeArr[786] = "tapubulu";
        newPokeArr[787] = "tapufini";
        newPokeArr[848] = "toxtricity";
        newPokeArr[865] = "mrrime";
        newPokeArr[874] = "eiscue";
        newPokeArr[875] = "indeedee";
        newPokeArr[876] = "morpeko";
        newPokeArr[891] = "urshifu";
        newPokeArr[901] = "basculegion";
        newPokeArr[904] = "enamorus";
        todaysPoke = newPokeArr[Math.floor(Math.random() * newPokeArr.length)]
        pokemon = new Set(newPokeArr);
    })
    
    return { pokemon, todaysPoke };
}