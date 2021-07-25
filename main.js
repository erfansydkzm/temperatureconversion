function Result() {
    let number = document.getElementById("number").value;
    let select1 = document.getElementById("select");
	let demo = document.getElementById("demo");
	let x;
	let y;
	let formula = document.getElementById("formula");
	
	if(number == "")
	{
		alert("Please Enter A Number...")
	}
	if(select1.value == "Select")
	{
		alert("Please Select A Option...")
	}
	if(select1.value == "fahrenheit")
	{
		let describtion = "Fahrenheit To Celsius =>";
		x = (number - 32) * 5/9 ;
		y = " Formula => (" + number + " - 32) * 5/9";
		demo.innerHTML = describtion + " " + x;
		formula.innerHTML = y;
	}
	if(select1.value == "celsius"){
		let describtion = "Celsius To Fahrenheit =>";
		x = (number * 9/5) + 32 ;
		y = " Formula => (" + number + " * 9/5) + 32";
		demo.innerHTML = describtion + " " + x;
		formula.innerHTML = y;
	}
} 