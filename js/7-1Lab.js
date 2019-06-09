
//Input
function orderDiscount() {
	let dayOfWeek = new Date().getDay();
	let subTotal = (document.getElementById('s').value);
	
	
	//Processing
	if  ( (dayOfWeek == 2 || dayOfWeek == 3) && subTotal > 50) { 
		total = (subTotal * 0.90) * 1.06;
}
	else {
		total = subTotal * 1.06;
	}
//Output
	document.getElementById('output').innerHTML=total.toFixed(2)
	
}