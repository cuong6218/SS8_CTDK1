function kiemTraNamNhuan(){
    let a = document.getElementById("textbox").value;
    let b = parseInt(a);
    if (b%4==0){
        if (b%100==0){
            if (b%400==0){
                alert("năm đó là năm nhuận");
            }
            else alert("năm đó không là năm nhuận");
        }
        else alert ("năm đó là năm nhuận");
    }
    else alert ("năm đó không là năm nhuận");
}