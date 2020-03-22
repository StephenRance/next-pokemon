// @flow strict

// Navigation
const Navigation = ({ next, previous, setQuery }: Props) => {
	return (
		<React.Fragment>
			<ul className="c-list  c-list--right">
				<li className="c-list__item">
					<button className="c-btn" disabled={!previous} onClick={() => setQuery(previous)}>Previous</button>
				</li>

				<li className="c-list__item">
					<button className="c-btn" disabled={!next} onClick={() => setQuery(next)}>Next</button>
				</li>
			</ul>
		</React.Fragment>
	)
}

// Export
export { Navigation };