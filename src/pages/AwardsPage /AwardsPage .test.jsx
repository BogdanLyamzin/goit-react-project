import { render } from '@testing-library/react';
import React from 'react';
import AwardsPage  from './AwardsPage ';

describe('AwardsPage ', () => {
    const defaultProps = {};

    it('should render', () => {
        const props = {...defaultProps};
        const { asFragment, queryByText } = render(<AwardsPage  {...props} />);

        expect(asFragment()).toMatchSnapshot();
        expect(queryByText('AwardsPage ')).toBeTruthy();
    });
});
