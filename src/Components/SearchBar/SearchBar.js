import React, {Fragment, useState} from "react";

/*
const SearchBar = (props) => {

    const [description, setDescription] = useState("Pokemon name or id number");

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const searchItem = description.toLowerCase();
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchItem}`)
            const thing = await response.json();
            console.log(response);
            console.log(thing);
            console.log(thing.name);
            props.pokemonCallback(thing);
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Pokemon Search</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)} />
                <button className="btn btn-primary">Search</button>
            </form>
        </Fragment>
    )
}

export default SearchBar;
*/