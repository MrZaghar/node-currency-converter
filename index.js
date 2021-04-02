const fetch = require('node-fetch');
const cheerio = require('cheerio');
class CurrencyConverter {
    constructor(){
        this._from="";
        this._to="";
        this._amount=0;
    }
    from(_from){
        if (typeof _from !== "string") throw new TypeError("Currency code should be a string.")
        this._from=_from.trim()
        return this
    }
    to(_to){
        if (typeof _to !== "string") throw new TypeError("Currency code should be a string.")
        this._to = _to.trim()
        return this
    }
    async convert(_val){
        if (typeof _val !== "number") throw new TypeError("Amount should be a number.")
        if (_val <= 0) throw new Error("Amount should be a positive number")
        this._amount = _val
        if (this._from == "") throw new Error("Currency code should be a string.")
        if (this._to == "") throw new Error("Currency code should be a string.")
        if (this._amount == 0) throw new Error("Currency amount should be a positive value.")
        return await fetch(`https://www.google.com/search?q=${this._amount}+${this._from}+to+${this._to}`, { headers: { 'user-agent': `Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)` } }).then(res=>res.text()).then(body => cheerio.load(body)).then($ => $(".iBp4i").text().split(" ")[0].trim()).then((price) => { return { price: price, dot: price.substr(-3).substr(0, 1) } }).then(({ dot, price }) => parseFloat(price.split(dot).map((e) => e.replace(/[^0-9]/g, '')).join('.'))).then(number => { return { result: number, beautify: new Intl.NumberFormat('EN', { style: 'currency', currency: this._to }).format(number)}})
    }
}

module.exports = CurrencyConverter 