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
  //fix that
  quote.find('#btn').simulate('click');
  expect(screen.queryByText('Keep on dreaming')).toBeInTheDocument()
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
    console.log(wrapper)
    expect(wrapper.props().quote).toEqual(quote);
  });
});
const sendRequest = async () => {
  try {
    const api = await fetch('https://type.fit/api/quotes');
    const jsn = await api.json();
    const randomQuote = Math.floor((Math.random(jsn.length)*100)+1);
    const final = jsn[randomQuote].text;
    return final
  } catch {
    console.log('error')
  }
}
test('checking if I get async quotes', async () => {
  expect.hasAssertions();
  const data = await sendRequest();
  console.log('what this', data)
  expect(typeof 'data').toBe('string');
  expect(data).not.toBe('');
});
