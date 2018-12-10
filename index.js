const  vugleDatabase = [
    'something.com',
    'windows.com',
    'animals.com',
    'mrrr.com',
    'catpics.com',
    'cats.com'
];

const vugleSearch= (searchInput, db) => {
    const matches = db.filter(site => {
        return site.includes(searchInput);
    })
    return matches.length > 3 ? matches.slice(0, 3) : matches;
}
console.log(vugleSearch('mrr', vugleDatabase));

module.exports = vugleSearch;