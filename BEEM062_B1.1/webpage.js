var z = new QRCode(document.getElementById("qrcode")); 

function getButton() {

    var privateKey = bsv.PrivateKey.fromRandom();
    var publicKey = privateKey.publicKey;
    var address = bsv.Address.fromPublicKey(publicKey);
    var mnemonic = new bsv.Mnemonic();
    var words = mnemonic.phrase;

    document.getElementById("publicKey").innerHTML = publicKey.toString();
    document.getElementById("address").innerHTML = address.toString();
    document.getElementById("mnemonic").innerHTML = words;

    z.clear();
    z.makeCode(address.toString());

    fetch(`https://blockchain.info/balance?active=${address.toString()}&cors=true`)
    .then(response => {

        if (!response.ok) {
            throw new Error(" Sorry! The balance cannot be displayed currently.");
        }
        return response.json();
    })
    .then(data => {
        var balance = data[address.tostring()].final_balance / 100000000;
        document.getElementById("balance").innerHTML = balance;
    })
    .catch(error => {
        console.error("Fetch error:", error);
        document.getElementById("balance").innerHTML = " Sorry! The balance cannot be displayed currently.";
    });
}

$.get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd", function(data) {
    var price = data.bitcoin.usd;
    var y = document.querySelector("#price");
    y.innerHTML = "$" + price + " USD";
});

document.getElementById("generateButton").addEventListener("click", getButton);


