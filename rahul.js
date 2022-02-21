

fetch("https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0", {
    "method": "GET",
    "headers": {
        "x-rapidapi-host": "coinranking1.p.rapidapi.com",
        "x-rapidapi-key": "83e1ec97c0msh1cf024d5aa97dd5p1aaeadjsn6950d6d6ef7b"
    }
}).then((response) => {
    if (response.ok) {
        response.json().then((json) => {
            console.log(json.data.coins);
            let coinsData = json.data.coins
            if (coinsData.length > 0) {
                var cryptoCoins = ""
            }
            coinsData.forEach((coin) => {
                cryptoCoins += "<tr>"
                // cryptoCoins += `<td> ${coin.uuid}</td>`;
                // cryptoCoins += `<td> ${coin.btcPrice}</td>`;
                cryptoCoins += `<td> ${coin.rank}</td>`;
                cryptoCoins += `<td> ${coin.name}</td>`;
                cryptoCoins += `<td> $${coin.price}</td>`;
                cryptoCoins += `<td> ${coin.symbol}</td>`;
                cryptoCoins += `<td> ${coin.tier}</td>`; "<tr>";
                document.getElementById("data").innerHTML = cryptoCoins
            })

        })
    }
}).catch((error) => {
    console.log(error);
});
