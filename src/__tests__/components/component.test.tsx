import React from 'react';
import renderer from 'react-test-renderer';
import SimpleButton from '../../components/button/PrimaryButton';
import Navbar from '../../components/navbar/Navbar';
import ButtonIcon from '../../components/icon/Icon';

test('testing if button is rendered ', () => {
  const component = renderer.create(<SimpleButton buttonText="btnText" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});

test('testing if Icon is rendered ', () => {
  const component = renderer.create(<ButtonIcon iconType="button" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});

test('testing if navbar is rendered ', () => {
  const component = renderer.create(<Navbar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});
export default {};
