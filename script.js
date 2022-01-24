// selection 
let back = document.querySelector(".back");
let one  = document.querySelector("#one");
let two  = document.querySelector("#two");
let three  = document.querySelector("#three");
let btn  = document.querySelector("#btn");
let cntnt = document.querySelector("#cntnt input");
let dibba = document.querySelector("#dibba");
let alertBox = document.querySelector("#alertBox");


btn.addEventListener("click",function(){
    cntnt.value = `linear-gradient(47deg, ${one.value} 0%, ${two.value} 41%, ${three.value} 97%);`;
    back.style.background = `linear-gradient(47deg, ${one.value} 0%, ${two.value} 41%, ${three.value} 97%)`;
})

dibba.addEventListener("click", function(){

    navigator.clipboard.writeText(cntnt.value);

    alertBox.style.opacity = "1";
    alertBox.style.top = "20%";

    setTimeout(() => {
        alertBox.style.opacity = "0";
        alertBox.style.top = "0%";
    }, 3000);
    
});


// let data={
// 	seller:{
// 		customerName:"",
// 		customerAddressLine:"",
// 		customerGst:"",
// 		customerEmail:"",
// 		customerPhone:"",
// 		logoUrl:"",
// 		accountNo:"",
// 		ifscCode:"",
// 		bankName:"",
// 		branchName:"",
// 		upiId:"",	
// 		"qrcode(paymentLink)":"",
// 		paymentMode:"",
// 	},
	
// 	buyer:{
// 		customerName:"",
// 		customerAddressLine:"",
// 		customerGst:"",
// 		customerEmail:"",
// 		customerPhone:"",
// 	},
// 	invoiceDate:"",
// 	invoiceNo:"",
// 	invoiceNotes:"",
// 	products:[

// 		{
// 			brandName:"",
// 			secondaryName:"",
// 			extra:[
// 				{
// 					color:"",
// 					batteryNo:"",
// 					chargerNo:""	
// 				},
// 			],

// 			hsnCode:"",
// 			productQuantity:"",
// 			subTotalAmount:""
// 		},
// 	]
// },
// 	subTotalAmount="",
// 	billInWords="",
// 	taxInWords="",
// 	pendingAmount ="",
// 	loanid = "",
// 	emiPeriod ="",
// 	emiDueDate="",
// 	paidAmount="",
// 	emiAmount="",

