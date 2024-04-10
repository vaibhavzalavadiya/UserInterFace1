window.onload = function() {
    document.getElementById("contact-form").onsubmit = function(event) {
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;

        if (name.trim() == "") {
            alert("Please enter your name.");
            event.preventDefault();
            return false;
        }

        if (email.trim() == "") {
            alert("Please enter your email.");
            event.preventDefault();
            return false;
        }

        if (subject.trim() == "") {
            alert("Please enter the subject.");
            event.preventDefault();
            return false;
        }

        if (message.trim() == "") {
            alert("Please enter your message.");
            event.preventDefault();
            return false;
        }

        return true;
    };
};

<script ></script>
$(function () {
    $.scrollUp({
        scrollText: '', // Text for element

    });
});