// @flow strict

const Quantity = ({ setQuery }: Props) => {
	return (
		<select defaultValue={'20'} onChange={(e) => setQuery(`https://pokeapi.co/api/v2/pokemon?limit=${e.target.value}`)}>
			<option value="10">10</option>
			<option value="20">20</option>
			<option value="40">40</option>
		</select>
	)
}

export { Quantity };