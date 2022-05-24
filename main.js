//ham menu
var hamBtn = document.getElementById("hamburger");
hamBtn.addEventListener('click', function (event) {
    var nav = document.getElementById("menu");
    nav.classList.toggle("active");
})


/* popup team-section */


// Get the button that opens the modal
var btn = document.querySelectorAll(".team-section .outer-box a");

Array.from(btn).forEach(a => {
    a.addEventListener('click', function (event) {
        event.preventDefault();

        // Get ID of the modal content stored in the href attribute
        var modalContentId = a.getAttribute('href');
        modalContentId = modalContentId.replace('#', '');

        console.log(modalContentId);

        var modal = document.getElementById(modalContentId);


        // Show the modal on click
        modal.style.display = "block";

        var span = modal.getElementsByClassName("close")[0];
        //When the user clicks on <span> (x), close the modal
        span.onclick = function () {
            modal.style.display = "none";

        }
    });
});

