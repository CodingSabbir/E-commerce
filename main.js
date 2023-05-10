
function increament(incDec,prc,itm){
var count=document.getElementById(incDec);
var price=document.getElementById(prc);
var item=document.getElementById(itm);
var prAmount=document.getElementById('pr-amount').innerHTML;
var charge=document.getElementById('charge').innerHTML;
var total_amount=document.getElementById('total-amount').innerHTML;
    if(count.value>=5){
        count.value=5;
        alert('only five products allow')
    }else{
        count.value++;
        var result=parseInt(price.innerHTML)+parseInt(item.innerHTML);
        item.innerHTML=result;

         var total_product=parseInt(price.innerHTML)+ parseInt (prAmount);
         document.getElementById('pr-amount').innerHTML=total_product;
        // for total+charge 
         var Newresult=total_product+parseInt(charge);
          document.getElementById('total-amount').innerHTML=Newresult;

        // kupon code
          var kupon_mainDiv=document.querySelector('.kupon-mainDiv');
          if(total_amount>=200){
            kupon_mainDiv.style.display='block';
          }
        
    }
};
 
// for minus button

function decriment(incDec,prc,itm){
    var count=document.getElementById(incDec);
    var price=document.getElementById(prc);
    var item=document.getElementById(itm);
    var prAmount=document.getElementById('pr-amount').innerHTML;

    var charge=document.getElementById('charge').innerHTML;
    var total_amount=document.getElementById('total-amount').innerHTML;

        if(count.value<=0){
            count.value=0;
            alert('only minimum 1 products allow')
        }else{
            count.value--;
            var result=parseInt(item.innerHTML)- parseInt(price.innerHTML);
            item.innerHTML=result;
            // for product amount
            var total_product=parseInt(prAmount)- parseInt (price.innerHTML);
            document.getElementById('pr-amount').innerHTML=total_product;
            // for total+ charge
        var Newresult=total_product+parseInt(charge);
          document.getElementById('total-amount').innerHTML=Newresult;
        }
    };


    var kupon_maindiv=document.querySelector('.kupon-mainDiv');
    kupon_maindiv.style.display='none';
    var ApplyBtn=document.querySelector('#ApplyBtn');
    ApplyBtn.addEventListener('click',function(){
        var KuponInput=document.querySelector('#KuponInput');

        var total_amount=document.getElementById('total-amount').innerHTML;
        if(KuponInput.value=='402046'){
            var total=parseInt(total_amount)-50;
            document.getElementById('total-amount').innerHTML=total;
            alert('congratulation');
            kupon_maindiv.style.display='none';
        }else{
            alert('kupon not match');
        }
    })