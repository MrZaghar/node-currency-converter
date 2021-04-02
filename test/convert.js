const currencyConverter = new (require('../index.js'));
(async () => {
    var toGbp =await currencyConverter.from('USD').to('GBP').convert(300);
    var toEUR =await currencyConverter.from('GBP').to('EUR').convert(300);
    
    // from USD to GBP
    console.log(toGbp.result)
    console.log(toGbp.beautify)

    // from GBP to EUR
    console.log(toEUR.result)
    console.log(toEUR.beautify)

    var btcToUSD = await currencyConverter.from('BTC').to('USD').convert(1);

    console.log(btcToUSD.result)
    console.log(btcToUSD.beautify)
})()

