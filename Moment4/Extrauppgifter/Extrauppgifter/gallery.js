
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const form = document.getElementById("addImageForm");
    const imageUrl = document.getElementById("imageUrl");
    const resetButton = document.getElementById("resetGallery");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const url = imageUrl.value;
        const img = document.createElement("img");
        img.src = url;
        img.style.width = "150px";
        img.style.margin = "5px";
        gallery.appendChild(img);
        imageUrl.value = "";
    });

    resetButton.addEventListener("click", function () {
        gallery.innerHTML = "";
    });
});
