import Pokemon from '../../pages/pokemon/[name]';
import { render, mount } from 'enzyme';

const props = {
	next_name: 'Next',
	previous_name: 'Previous',
	pokemon: {
		name: 'Name',
		sprites: {
			front_default: 'Front',
			back_default: 'Back'
		}
	}
}

describe('<Pokemon />', () => {
	it('should match snapshot', () => {
		const target = render(<Pokemon {...props} />);

		expect(target).toMatchSnapshot();
	});

	it('images should have correct sources', () => {
		const target = mount(<Pokemon {...props} />);

		expect(target.find('img')).toHaveLength(2);
		expect(target.find('img').at(0).prop('src')).toEqual('Front');
		expect(target.find('img').at(1).prop('src')).toEqual('Back');
	});

	it('images should not render if not set', () => {
		delete props.pokemon.sprites.front_default;
		delete props.pokemon.sprites.back_default;

		const target = mount(<Pokemon {...props} />);

		expect(target.find('img')).toHaveLength(0);
	});
})