
document.getElementById('Donate-btn').addEventListener('click', function (event){
    event.preventDefault();
    console.log('clicked the button');


   const inputDonation = getInputFaielValueById('input-donation');
    const donatinMoney = getTextFaieldValueById('Donation-money');
    const donationPrice = getTextFaieldValueById('danation-price');


    // console.log(inputDonation, donatinMoney, donationPrice);
     
    if(isNaN(donationPrice)){
        alert('Faield the donation Price . palce try again')
        return;
    }
     const donation  = document.getElementById('donation-price');
    //  console.log(donation);
    const total = donation + donatinMoney;
     const add = total - inputDonation;
   document.getElementById('Donation-money').innerText = add;

    const price = inputDonation + donationPrice;
   document.getElementById('danation-price').innerText = price;
})