// error messages need to be returned in JSON format
const jsonMessage = (msg) => {
    return { message : msg };
    };

const provider = require('./data-provider.js');
const stocks = provider.data;
// return all the stocks when a root request arrives
const handleAllStocks = (app) => {
};
// return just the requested stock
const handleSingleSymbol = (app) => {
    app.get('/stock/:symbol', (req,resp) => {
        // change user supplied symbol to upper case
        const symbolToFind = req.params.symbol.toUpperCase();
        // search the array of objects for a match
        const matches = stocks.filter(s => symbolToFind ===
        s.symbol);
        // return the matching stock
        resp.json(matches);
        });
};
// return all the stocks whose name contains the supplied text
const handleNameSearch = (app) => {
    app.get('/stock/name/:substring', (req,resp) => {
        // change user supplied substring to lower case
        const substring = req.params.substring.toLowerCase();
        // search the array of objects for a match
        const matches = stocks.filter( s =>
        s.name.toLowerCase().includes(substring) );
        // return the matching stocks
        resp.json(matches);
        });
};
module.exports = {
handleAllStocks,
handleSingleSymbol,
handleNameSearch
};