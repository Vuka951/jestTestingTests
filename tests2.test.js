const fetch = require('node-fetch');
const swapi = require('./tests2');

it('calls swapi to get ppl', (done) => {
    expect.assertions(1);
    swapi.getPeople(fetch).then(data => {
        expect(data.count).toEqual(87);
        done();
    })
})

it('calls swapi to get ppl with a promise', () => {
    expect.assertions(2);
    return swapi.getPeoplePromise(fetch).then(data => {
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})

// Mocking the api call in order to make the test faster
it('get people retuns count and results', () => {
    const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
        json: () => Promise.resolve({
            count: 87,
            results: [0, 1, 2, 3, 4, 5]
        })
    }))
    expect.assertions(4);
    return swapi.getPeoplePromise(mockFetch).then(data => {
        expect(mockFetch.mock.calls.length).toBe(1);
        expect(mockFetch).toBeCalledWith('https://swapi.co/api/people/');
        expect(data.count).toEqual(87);
        expect(data.results.length).toBeGreaterThan(5);
    })
})