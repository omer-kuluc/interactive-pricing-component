
const fiyat = 0.00016;

function hesapla() {
  const gosterim = Number(rangeInput.value) * 1000;
  let toplamFiyat = Math.round(gosterim * fiyat);
  if(yillikOdeme.checked) {
    toplamFiyat = (toplamFiyat * 12) * 0.75;
  }
  priceAmountTxt.innerText = toplamFiyat + ' USD';
	pageviewScore.innerText = toplamFiyat * 3 + 'K PAGEVIEWS';
}
rangeInput.addEventListener('input', hesapla);
yillikOdeme.addEventListener('click', hesapla);

hesapla();