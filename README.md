<div align="center">
<h1>Node Currency Converter</h1>
<p>Node Currency Converter library unlimited requests no API needs.</p>
</div>

### Installation

```bash
npm install node-currency-converter
```

### Usage

```javascript
const currencyConverter = new (require('node-currency-converter'))
```

```javascript
(async () => {
    var toGbp =await currencyConverter.from('USD').to('GBP').convert(300);
    
    // from USD to GBP
    console.log(toGbp.result) // 216.88
    console.log(toGbp.beautify) // £216.88

})()
```


### Example

```javascript
const currencyConverter = new (require('node-currency-converter'));
(async () => {
    var toGbp =await currencyConverter.from('USD').to('GBP').convert(300);
    var toEUR =await currencyConverter.from('GBP').to('EUR').convert(300);
    
    // from USD to GBP
    console.log(toGbp.result) // 216.88
    console.log(toGbp.beautify) // £216.88

    // from GBP to EUR
    console.log(toEUR.result) // 352.38
    console.log(toEUR.beautify) // €352.38

    // Convert from Bitcoin to USD
    var btcToUSD = await currencyConverter.from('BTC').to('USD').convert(1);

    console.log(btcToUSD.result) // 58855.9
    console.log(btcToUSD.beautify) // $58,855.90
})()


```
