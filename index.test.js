const vugleSearch = require('./index');

dbMock = [
    'dog.com',
    'doggy.com',
    'rawdoggy.com',
    'doggypics.com'
]

describe('vugleSearch', () => {
    it('test if hello is hello', () => {
        expect('hello').toBe('hello');
    })
})

it('is searching properly', () => {
    expect(vugleSearch('testtest', dbMock)).toEqual([]);
    expect(vugleSearch('dog', dbMock)).toEqual(['dog.com', 'doggy.com', 'rawdoggy.com',]);
})

it('work with undefined/null inputs', () => {
    expect(vugleSearch(undefined, dbMock)).toEqual([]);
    expect(vugleSearch(null, dbMock)).toEqual([]);
})

it('does not return more then 3 matches', () => {
    expect(vugleSearch('.com', dbMock).length).toEqual(3);
})