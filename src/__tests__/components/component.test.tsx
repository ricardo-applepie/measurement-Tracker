import React from "react";
import renderer from "react-test-renderer";
import SimpleButton from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";

test("testing if button is rendered ", () => {
  const component = renderer.create(<SimpleButton buttonText="btnText" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});

test("testing if navbar is rendered ", () => {
  const component = renderer.create(<Navbar />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
});
export default {};
