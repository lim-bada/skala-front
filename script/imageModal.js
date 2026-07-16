// 사진을 클릭했을 때 모달 창 열기
function openImageModal(imageSrc, imageAlt) {
    var modal = document.getElementById("imageModal");
    var modalImage = document.getElementById("modalImage");
    var modalCaption = document.getElementById("modalCaption");

    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modalCaption.textContent = imageAlt;

    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");

    // 모달이 열렸을 때 뒤쪽 페이지 스크롤 막기
    document.body.style.overflow = "hidden";
}


// 모달 창 닫기
function closeImageModal(event) {
    var modal = document.getElementById("imageModal");

    // 배경을 클릭한 경우가 아니라 이미지 자체를 클릭한 경우에는 닫지 않음
    if (event && event.target !== modal) {
        return;
    }

    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");

    // 페이지 스크롤 다시 허용
    document.body.style.overflow = "";
}


// 키보드의 ESC 키를 눌러도 모달 닫기
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeImageModal();
    }
});