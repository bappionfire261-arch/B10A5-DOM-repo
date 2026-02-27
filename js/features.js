
document.getElementById('Donate-btn').addEventListener('click', function (event){
    event.preventDefault();
    // console.log('clicked the button');


   const inputDonation = getInputFaielValueById('input-donation');
    const donatinMoney = getTextFaieldValueById('Donation-money');
    const donationPrice = getTextFaieldValueById('danation-price');


    // console.log(inputDonation, donatinMoney, donationPrice);
     
    if(isNaN(inputDonation)){
        alert('worang the donation Price . palce try again')
        return;
    }
     const donation  = document.getElementById('donation-price');
    //  console.log(donation);
    const total = donation + donatinMoney;
     const add = total - inputDonation;
   document.getElementById('Donation-money').innerText = add;

    const price = inputDonation + donationPrice;
   document.getElementById('danation-price').innerText = price;
     
//    add to transection history
 const p = document.createElement('p');
 p.innerText = `Added: ${inputDonation} Tk. Donation:${price}. `;
 console.log(p);
//  should be a common function
document.getElementById('transection-container').appendChild(p);
})