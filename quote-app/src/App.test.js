import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Quote from './Quote';
import QuoteCard from './QuoteCard';
import { configure } from "enzyme";
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

test('renders quote that is not empty', () => {
  const wrapper = shallow(<Quote />);
  const linkElement = wrapper.find('p').text();
  expect(linkElement).not.toBe('');
});

it('The new quote will appear after click', () => {

  // quote.findByType('button').props.onClick();

  const quote = shallow(
    <Quote test='hello'/>
  );

  quote.find('#btn').simulate('click');
  expect(screen.queryByText('Keep on dreaming')).toBeInTheDocument()

  // const button = getByTestId(quote, 'btn');
  //   fireEvent.click(button);

  // expect(closeRightSectionSpy).toHaveBeenCalled();
  // expect(queryByLabelText(/off/i)).toBeTruthy();

  // fireEvent.click(getByLabelText(/off/i));

  // expect(queryByLabelText(/on/i)).toBeTruthy();
});


//THIS WORKS
const quote = {
  text: "Test text",
  author: "Adeneye David",
};

describe("<QuoteCard />", () => {
  it("contains account", () => {
    const wrapper = mount(<QuoteCard quote={quote} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("Test text");
  });
  it("accepts quote props", () => {
    const wrapper = mount(<QuoteCard quote={quote} />);
    expect(wrapper.props().quote).toEqual(quote);
  });
});

// it("renders without crashing", () => {
//   shallow(<App />);
// });


// describe("Click tests", () => {
//       it("testing login click", () => {
//         const clickMock = jest.fn();
//         const wrapper = shallow(<Quote />);
//         const btn = wrapper.find("#btn");
//         if (btn) btn.simulate("click");
//         expect(clickMock.mock.calls.length).toBe(1);
//       });
//     });
