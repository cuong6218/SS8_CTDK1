function kiemTraNamNhuan(){
    let a = document.getElementById("textbox").value;
    let b = parseInt(a);
    if (b%400==0 && b%100==0 || b%4==0){
        alert("Năm đó là năm nhuận");}
        else {alert("Năm đó không là năm nhuận");}
    }