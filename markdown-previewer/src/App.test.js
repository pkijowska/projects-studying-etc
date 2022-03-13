import { render, screen, fireEvent } from '@testing-library/react';
import MarkdownEditor from './MarkdownEditor';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import { shallow, mount } from 'enzyme';

test('renders learn react link', () => {
  render(<MarkdownEditor />);
  const linkElement = screen.getByText(/Welcome to my React Markdown Previewer!/i);
  expect(linkElement).toBeInTheDocument();
});
