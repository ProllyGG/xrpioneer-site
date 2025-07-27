// Live XRP price ticker
async function fetchXRP() {
  try {
    const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=xrp&vs_currencies=usd');
    const data = await res.json();
    console.log('XRP Price:', data.xrp.usd);
    // You could insert it into the DOM here if you like
  } catch(e) {
    console.error(e);
  }
}
fetchXRP();
setInterval(fetchXRP, 30000);
