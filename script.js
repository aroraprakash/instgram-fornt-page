function demo() {
  var menu = document.getElementById("menu-bar");
  var arrow = document.getElementById("arrowIcon");

  // Ye check karta hai ki CSS mein display 'none' hai ya nahi
  if (window.getComputedStyle(menu).display === "none") {

    menu.style.display="none";
    
    // Agar none hai (hidden hai), toh dono ko show kar do
    menu.style.display = "block";
    arrow.style.display = "inline-block";
    
  } else {
    
    // Agar dikh raha hai, toh wapas dono ko hide kar do
    menu.style.display = "none";
    arrow.style.display = "none";
 }
}
