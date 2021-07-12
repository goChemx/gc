function rmdFunction(num1, num2) {
    var dots1 = document.getElementById("service"+num1+"dots");
    var moreText1 = document.getElementById("service"+num1+"more");
    var dots2 = document.getElementById("service"+num2+"dots");
    var moreText2 = document.getElementById("service"+num2+"more");
    var dbtnText = (num1 == 1) ? document.getElementById("mydBtn1") :  document.getElementById("mydBtn2");

    if (dots1.style.display === "none") {
        dots1.style.display = "inline"; dots2.style.display = "inline";
        dbtnText.innerHTML = "READ MORE";
        moreText1.style.display = "none"; moreText2.style.display = "none";
    } else {
        dots1.style.display = "none"; dots2.style.display = "none";
        dbtnText.innerHTML = "READ LESS";
        moreText1.style.display = "inline"; moreText2.style.display = "inline";
    }}

function rmmFunction(srvcnum) {
    var dots = document.getElementById("service"+srvcnum+"dots");
    var more = document.getElementById("service"+srvcnum+"more");
    var mbtn = document.getElementById("mymBtn"+srvcnum); var service = document.getElementById("service"+srvcnum);

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        mbtn.innerHTML = "READ MORE";
        
        
        var servicePosition = service.getBoundingClientRect().top;
        window.scrollBy({ top: servicePosition + 200 , behavior: "auto" });
        
        
        setTimeout(function() {
          
          more.style.display="none";          
        }, 50);
        
    } else {
        dots.style.display = "none";
        mbtn.innerHTML = "READ LESS";
        more.style.display = "inline";
    }}
