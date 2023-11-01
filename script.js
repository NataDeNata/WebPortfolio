// JavaScript to show/hide the pop-up image
document.getElementById("showImageBtn").addEventListener("click", function() {
    document.getElementById("imagePopup").style.display = "block";
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("imagePopup").style.display = "none";
});
