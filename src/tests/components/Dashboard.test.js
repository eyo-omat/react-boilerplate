import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from '../../components/DashboardPage';

test("should render DashboardPage correctly", () => {

    const wrapper = shallow(<Dashboard />);
    expect(wrapper).toMatchSnapshot();

});
