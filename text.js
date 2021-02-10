// 計數器
var count = 1;
var countEl = document.getElementById("count");
function plus() {
    count++;
    countEl.value = count;
}
function minus() {
    if (count > 1){
        count--;
        countEl.value = count;
    }
}

// banner
var indaxValue = 1;
        showImg(indexValue);
        function dot_slide(e) {
            showImg((indaxValue = e));
        }
        function side_slide(e) {
            showImg((indaxValue += e));
        }
        function showImg(e) {
            var i;
            const img = document.querySelectorAll('.banner-content>img');
            const sliders = document.querySelectorAll('.dot');
            if (e > img.length) {
                indaxValue = 1;
            }
            if (e < 1) {
                indaxValue = img.length;
            }
            for (i = 0; i < img.length; i++) {
                img[i].style.display = "none";
            }
            for (i = 0; i < sliders.length; i++) {
                sliders[i].style.color = "red";
            }
            img[indaxValue - 1].style.display = "block";
            sliders[indaxValue - 1].style.color = "white";
        }