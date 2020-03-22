import { shallow } from 'enzyme';

import { Navigation } from '../../components/PokemonArchive/Navigation';

describe('<Navigation />', () => {
	it('should match snapshot', () => {
		const target = shallow(<Navigation />);
		
		expect(target).toMatchSnapshot();
	});
});
