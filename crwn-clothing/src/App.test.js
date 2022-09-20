import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// const getPeople = () => {
//   return fetch('https://swapi.py4e.com/api/people').then(response=> response.json()).then(data=> {
//     console.log(data,'dat')
//     return {
//       count: data.count,
//       results: data.results
//     }
//   })
// }
// console.log(getPeople(), 'people');

it ('calls swapi to get people', () => {
  expect.assertions(1);
  return getPeople().then(data => {
    expect(data.count).toEqual(87)
  })
})

it('getPeople returns count and results', ()=>{
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
      json: () => Promise.resolve({
        count: 87,
        results: [0,1,2,3,4,5]
      })
    }))
    expect.assertions(3)
    return getPeople().then(data=> {
      expect(mockFetch.mock.calls.length).toBe(1)
      expect(mockFetch).toBeCalledWith('https://swapi.py4e.com/api/people')).toBe(1)
      expect(data.count).toEqual(87)
    })
})
