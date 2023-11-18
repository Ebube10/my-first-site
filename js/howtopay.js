let country = document.getElementById("country")
let paymentCont = document.getElementById("seclect-content")

function payment() {
    if (country.value == "NG") {
        paymentCont.innerHTML = `
        <div class="pa">
                <h3>Step-By-Step Approach On How To Make Payment On Xpertodds</h3>
                <ul>
                    <li>Register with "A VALID EMAIL ADDRESS": <br><span>The first thing you need to do is to register your profile on the website Fill the form.</span></li>
                    <li>Login into your account after registering. Then select any of the
                    plans you wish to pay for and proceed.</li>
                    <br>

                    <p>You can make payments for your Xpertodds account activation/upgrade by following the below steps.</p>
                <h5>Account name: Xpertodds</h5>
                <h5>Account Number: 6373701000</h5>
                <h5>Bank: Moniepoint</h5>
                <p>After making payment, ensure you send your payment details as an email to <a href="mailto:xpertodds@gmail.com">xpertodds@gmail.com</a></p>  or through WhatsApp to <a href="https://api.whatsapp.com/send/?phone=2347019436746&text&type=phone_number&app_absent=0">+234(0)701-943-6746</a></p>


            <p class="y">Your account will be upgraded before the close of working hours.</p>
                </ul>
                
             
                
                
            </div>
        `
    }
    else if (country.value == 'choose') {
        paymentCont.innerHTML = `
        <p>choose a country to process</p>
        `
    }
    else {
        paymentCont.innerHTML = `
        <div class="axav">
            <h3>Step-By-Step Approach On How To Make Payment On Xpertodds</h3>
            <ul>
                <p class="r">Register with "A VALID EMAIL ADDRESS":</p>
                <li>The first thing you need to do is to register your profile on the websites. Fill the form.</li>
                <li>Login into your account after registering. Then select
                    any of the
                    plans you wish to pay for and proceed.</li>
                    <br>
                         <h5>Listed below are the different methods of payment available for your country:</h5>
                         <h4>Pay Via Bitcoin</h4>
                         
            <p class="a">All payments should be made ONLY to <span>1BbByTrgiEfF15FHZAPVzN4sZoRP7deNo3</span></p>
            <p class="f">After successful transaction, send us an email containing, Your Email Address, The Date of Payment, and
                Transaction hash
                code to <a href="mailto:xpertodds@gmail.com">xpertodds@gmail.com</a> or through WhatsApp to <a href="https://api.whatsapp.com/send/?phone=2347019436746&text&type=phone_number&app_absent=0">+234(0)701-943-6746</a></p>
            <p class="y">Your account will be upgraded before the close of working hours.</p>
            </ul>
       
           </div>
       `



    }
}