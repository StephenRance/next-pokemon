// @flow strict

// Components
import { PokemonArchive } from '../components/PokemonArchive';

// Styles
import css from '../assets/sass/main.scss';

// Page
const Page = ({ pokemon }: Props) => {
	return (
		<React.Fragment>
			<main>
				<PokemonArchive pokemon={pokemon} />
			</main>
		</React.Fragment>
	)
}

// Props
Page.getInitialProps = async function() {
	const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon')
		.then(res => res.json());

	return { pokemon };
}

// Export
export default Page;