function countbtn(product,price,isIncrease){
    const productInput=document.getElementById(product+"-number");
    let productNumber=productInput.value;
    if(isIncrease==true){
       productNumber=parseInt(productNumber)+1;
    }
    else if(productNumber>0) {
        productNumber=parseInt(productNumber)-1;
    }
    productInput.value=productNumber;
    const caseValue=document.getElementById(product+"-value");
    caseValue.innerText=productNumber*price;
    costCalculation();
    }

    function getProductNumber(product){
        const productsInput=document.getElementById(product+"-number");
        const productsNumber=parseInt(productsInput.value);
        return productsNumber;
    }
    function costCalculation(productsNumber){
        const phoneTotal=getProductNumber("phone")*1219;
        const caseTotal=getProductNumber("case")*59;
        
        const subTotal =document.getElementById("sub-total");
        subTotal.innerText=phoneTotal+caseTotal;
        const subTotalUpdate=subTotal.innerText;
        const taxTotal=document.getElementById("tax-total");
        taxTotal.innerText=parseFloat(subTotalUpdate)/10;
        const taxTotalUpdate=taxTotal.innerText;
        const totalPrice=document.getElementById("total-price");
              totalPrice.innerText=parseFloat(taxTotalUpdate)+parseFloat(subTotalUpdate);
        
      
        // const subTotal=phoneTotal+caseTotal;
        // const texTotal=subTotal/10;
        // const totalPrice=subTotal+texTotal;


        // document.getElementById("sub-total").innerText=subTotal;
        // document.getElementById("tax-total").innerText=texTotal;
      
        // document.getElementById("total-price").innerText=totalPrice;
    }

document.getElementById("phone-plus").addEventListener("click",function(){

    countbtn("phone",1219,true);
})
document.getElementById("phone-minus").addEventListener("click",function(){
    countbtn("phone",1219,false);
})


document.getElementById("case-plus").addEventListener("click",function(){
    countbtn("case",59,true);
})
document.getElementById("case-minus").addEventListener("click",function(){

    countbtn("case",59,false);
})
