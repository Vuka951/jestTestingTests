const vugleSearch = require('./index');

dbMock = [
    'dog.com',
    'doggy.com',
    'rawdoggy.com',
    'doggypics.com'
]

it('test if hello is hello', () => {
    expect('hello').toBe('hello');
    
})

it('is searching properly', () => {
    expect(vugleSearch('testtest', dbMock)).toEqual([]);
    expect(vugleSearch('dog', dbMock)).toEqual(['dog.com', 'doggy.com', 'rawdoggy.com',]);
})