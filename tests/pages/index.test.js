import Pokemon from '../../pages';
import { render, mount } from 'enzyme';

describe('<Pokemon />', () => {
	const props = {
		pokemon_results: [
			{
				name: 'Item 1'
			},
			{
				name: 'Item 2'
			},
			{
				name: 'Item 3'
			},
			{
				name: 'Item 4'
			}
		]
	};

	it('should match snapshot', () => {
		const target = render(<Pokemon {...props} />);

		expect(target).toMatchSnapshot();
	});

	it('should have 4 pokemon', () => {
		const target = mount(<Pokemon {...props} />);

		expect(target.find('Column')).toHaveLength(props.pokemon_results.length);
	});

	it('should have 0 pokemon', () => {
		props.pokemon_results = []
		const target = mount(<Pokemon {...props} />);

		expect(target.find('Column')).toHaveLength(0)
	});
});
