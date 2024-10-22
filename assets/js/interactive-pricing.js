// function handlePageViewChange() {
// 	priceAmountTxt.innerText= '$' + rangeInput.value + '.00';
// 	pageviewScore.innerText = rangeInput.value * 2 + 'K PAGEVIEWS';
// }
// rangeInput.addEventListener('input', handlePageViewChange);


const fiyat = 0.00016;

function hesapla() {
  const gosterim = Number(rangeInput.value) * 1000;
  let toplamFiyat = Math.round(gosterim * fiyat);
  if(yillikOdeme.checked) {
    toplamFiyat = (toplamFiyat * 12) * 0.75;
  }
  priceAmountTxt.innerText = toplamFiyat + ' USD';
}

rangeInput.addEventListener('input', hesapla);
yillikOdeme.addEventListener('click', hesapla);

// sayfam çalıştığında hesaplama tetiklenmesi
// kendim manuel olarak ilgili fonksiyonu çağırıyorum
// manuel çağırdığım için this kelimesi çalışmıyor
// çünkü element üzerinden tetiklenmiyor
hesapla();