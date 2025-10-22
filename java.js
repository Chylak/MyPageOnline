const watchBtn = document.getElementById('watchBtn');
const infoBtn = document.getElementById('infoBtn');
const adSlot = document.getElementById('adSlot');

watchBtn.addEventListener('click', async () => {
  watchBtn.disabled = true; 
  watchBtn.textContent = 'Oglądanie...';
  const duration = 8; // sekundy demo oglądania

  for(let i=duration;i>0;i--){
    adSlot.textContent = `Oglądaj — otrzymasz nagrodę za ${i} s`;
    await new Promise(r => setTimeout(r, 1000));
  }

  adSlot.textContent = 'Dziękujemy! Otrzymałeś nagrodę. (Demo)';
  watchBtn.textContent = 'Oglądaj ponownie';
  watchBtn.disabled = false;

  giveReward();
  if(window.dataLayer) window.dataLayer.push({event:'reward_given'});
});

infoBtn.addEventListener('click', ()=>{
  alert('Demo: zamień ./assets/logo.png na swoje logo. Aby zarabiać na reklamach, użyj oficjalnych sieci reklamowych (AdSense/AdMob, etc.).');
});

function giveReward(){
  console.log('Użytkownik otrzymał nagrodę (demo).');
}

adSlot.style.cursor = 'pointer';
adSlot.addEventListener('click', ()=>{
  const url = 'https://savebig.pro/a/1wQ87sEg9upwD8'; 
  window.open(url, '_blank');
  console.log('Użytkownik kliknął reklamę (demo).');
});

