// Stop script if no URL parameters (prevents reload loop)
if (!location.search) {
    console.log("No data. Stopping.");
    throw new Error("Stop processing");
}

// Read form data
const $_GET = location.search
    .replace("?", "")
    .split("&")
    .map(pair => pair.split("=").reduce((k, v) => ({ [k]: decodeURIComponent(v) })))
    .reduce((acc, obj) => ({ ...acc, ...obj }), {});

let $fullName = $_GET["fullname"];
let $email = $_GET["email"];
let $phone = $_GET["phone"];
let $comment = $_GET["comment"];

// Email info
let $subject = "Contact Form Submission";
let $to = "yourname@iu.edu"; // <-- CHANGE THIS

// Build message
let $Body =
    "Name: " + $fullName + "\n" +
    "Phone Number: " + $phone + "\n" +
    "Email: " + $email + "\n" +
    "Comments: " + $comment + "\n";

// Only process if required fields exist
if ($fullName && $email) {

    // Open email app (may be blocked)
    window.open(
        `mailto:${$to}?subject=${encodeURIComponent($subject)}&body=${encodeURIComponent($Body)}`,
        "_blank"
    );

    // WAIT before redirect (fixes redirect not happening)
    setTimeout(() => {
        location.href = "thanks.html";
    }, 500); // 0.5 seconds

} else {
    location.href = "contact.html";
}
