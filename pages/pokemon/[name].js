// @flow strict

// $FlowIgnore
import fetch from 'isomorphic-unfetch';

// $FlowIgnore
import Link from 'next/link';

// Props
type Props = {
	next_name: string,
	previous_name: string,
	pokemon: {
		name: string,
		sprites: {
			front_default: string,
			back_default: string
		}
	}
} 

// Pokemon
const Pokemon = ({ pokemon, next_name, previous_name }: Props) => (
	<React.Fragment>
		<h1>
			{pokemon.name}
		</h1>

		<Link href="/pokemon/[name]" as={`/pokemon/${previous_name}`}>
			<a>{previous_name}</a>
		</Link>

		{!!pokemon.sprites.front_default && <img key={`${pokemon.name}-front`} src={pokemon.sprites.front_default} />}

		{!!pokemon.sprites.back_default && <img key={`${pokemon.name}-back`} src={pokemon.sprites.back_default} />}

		<Link href="/pokemon/[name]" as={`/pokemon/${next_name}`}>
			<a>{next_name}</a>
		</Link>
	</React.Fragment>
)

// Props
Pokemon.getInitialProps = async function(context) {
	const { name } = context.query;

	const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
		.then(res => res.json());

	// TO-DO: Breaks if on last
	const next = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id + 1}`)
		.then(res => res.json());

	// TO-DO: Breaks if on first
	const previous = fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id - 1}`)
		.then(res => res.json());

	const [n, p] = await Promise.all([next, previous]);

	return { pokemon, next_name: n.name, previous_name: p.name };
}

export default Pokemon;