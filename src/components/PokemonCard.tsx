import'./PokemonCard.css'
interface props {
    pokemon:{
        name: string
        imgSrc?: string;
    }
}

function PokemonCard({ pokemon }: props) {

    return (
        <figure className={`${pokemon.name}`}>
            {pokemon.imgSrc !== undefined ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    )
}

export default PokemonCard;