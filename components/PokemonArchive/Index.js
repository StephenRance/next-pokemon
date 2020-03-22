// @flow strict
import React, { useState } from "react";

// $FlowIgnore
import fetch from 'isomorphic-unfetch';

// $FlowIgnore
import Link from 'next/link';

// Components
import { Navigation } from './Navigation';
import { Quantity } from './Quantity';

// Flow
type Props = {
	loading: boolean,
	pokemon: {
		next: string,
		previous: string,
		results: Array<{
			name: string
		}>
	}
}

// PokemonArchive
const PokemonArchive = ({ pokemon }: Props) => {
	const [loading, setLoading] = useState(false);
	const [next, setNext] = useState(pokemon.next);
	const [previous, setPrevious] = useState(pokemon.previous);
	const [results, setResults] = useState(pokemon.results);

	// Query
	const setQuery = async (query) => {
		setLoading(true);

		const pokemon = await fetch(query)
			.then(res => res.json());

		setTimeout(() => {
			setNext(pokemon.next);
			setPrevious(pokemon.previous);
	
			!!pokemon.results && setResults(pokemon.results);

			setLoading(false);
		}, 1000);
	};

	return (
		<React.Fragment>
			<section className="o-row">
				<div className="c-archive">
					<div className="o-grid">
						{!!results && results.map((result) => (
							<div className="o-col  o-col--2  o-col--3-desk  o-col--4-desk-sml  o-col--6-mob-lrg" key={result.name}>
								<Link href={`/pokemon/${result.name}`} as={`/pokemon/${result.name}`}>
									<a className="c-card">
										<figure className="o-ar  o-ar--1-1">
											<img src={`https://img.pokemondb.net/artwork/${result.name}.jpg`} className="o-img  o-img--contain  c-card__img" />
										</figure>
									</a>
								</Link>
							</div>
						))}
					</div>

					<div className="o-grid">
						<div className="o-col  o-col--6">
							<Quantity setQuery={setQuery} />
						</div>

						<div className="o-col  o-col--6">
							<Navigation next={next} previous={previous} setQuery={setQuery} />
						</div>
					</div>
				</div>
			</section>

			<aside className={`c-archive__overlay${loading ? "  is-visible" : ""}`}>
				<img src="https://vignette.wikia.nocookie.net/pokemonmmo/images/4/4c/Pokeball.png/revision/latest/scale-to-width-down/220?cb=20140922213610" className="c-archive__icon" />
			</aside>
		</React.Fragment>
	)
}

// Export
export { PokemonArchive };