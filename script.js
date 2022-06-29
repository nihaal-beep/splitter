const amount = document.querySelector(".amount");
const tip = document.querySelectorAll(".tip-def");
const custm_tip = document.querySelector(".custom-inpt");
const custm_form = document.querySelector(".cstm-form");
const num_ppl = document.querySelector(".num-ppl");
const num_form = document.querySelector(".num-form");
const amount_form = document.querySelector(".amount-form");
const tip_amt = document.querySelector(".tip-amt");
const total_amt = document.querySelector(".total-amt");
const error_amt = document.querySelector(".error-amt");
const error_ppl = document.querySelector(".error-ppl");
var r = document.querySelector(':root');
const reset = document.querySelector(".reset");
var rs = getComputedStyle(r);

var tip_percent;

tip.forEach(item=>{
    item.addEventListener("click",()=>{
        tip_percent = item.dataset.val;
        if(amount.value!=0 && num_ppl.value!=0)
        {
            calculateTip();
        }
    })
})
custm_form.addEventListener("change",(event)=>{
    event.preventDefault();
    tip_percent = custm_tip.value;
    if(amount.value!=0 && num_ppl.value!=0)
    {
        calculateTip();
    }
 
})

window.addEventListener("submit",calculateTip);
reset.addEventListener("click",()=>{
    amount.value = ""
    num_ppl.value=""
    tip_amt.innerHTML="0.00$"
    total_amt.innerHTML = "0.00$"

})

function calculateTip(){
    event.preventDefault();
    console.log(amount.value);
    console.log(num_ppl.value)

    if(amount.value==0)
    {
        error_amt.classList.remove("invisible")
        r.style.setProperty('--colorAmt', 'red');
        r.style.setProperty('--borderColorAmt','red');
    }
    else{
        error_amt.classList.add("invisible")
        r.style.setProperty('--colorAmt', 'hsl(189, 41%, 97%)');
        r.style.setProperty('--borderColorAmt','hsl(172, 67%, 45%)');
    }
    if(num_ppl.value==0){
        error_ppl.classList.remove("invisible");  
        r.style.setProperty('--colorPpl', 'red'); 
        r.style.setProperty('--borderColorPpl','red');
    }
    else{
        error_ppl.classList.add("invisible");
        r.style.setProperty('--colorPpl', 'hsl(189, 41%, 97%)');
        r.style.setProperty('--borderColorPpl','hsl(172, 67%, 45%)');
    }
    console.log(tip_percent )
    let total_tip = (parseFloat(amount.value) * tip_percent)/100;
    let tip_perPerson = total_tip / parseFloat(num_ppl.value);
    let dis_tip = tip_perPerson + "$";
    tip_amt.innerHTML = dis_tip;
    let total_bill = total_tip + parseFloat(amount.value);
    let total_billpp = total_bill/parseFloat(num_ppl.value);
    let total_disp = total_billpp +"$";
    total_amt.innerHTML = total_disp;
}




