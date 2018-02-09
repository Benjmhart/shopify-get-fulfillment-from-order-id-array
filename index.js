var fetch = require('node-fetch');

var orderIds = ["array of orders"]

var reqInit = {
    method: 'GET',
          headers: {Authorization: `Basic ${ /* BASE64 of your APIKEY:PASSWORD */}`},
    mode: 'cors',
    cache: 'default'
};

async function shopifyRequest(id, reqInit) {
    var fillJSON = await fetch(`https://${/*STORENAME*/}.myshopify.com/admin/orders/${id}/fulfillments.json`, reqInit)
    var fillObj = await fillJSON.json()
    var data = [id, fillObj.fulfillments[0].id ]
    console.log(data)
}



let i = 0

setInterval( function () {
    if(orderIds[i]){
        shopifyRequest(orderIds[i], reqInit)
    }
    i++;
}, 600)

// collect your pairs in the console 