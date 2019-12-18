<!DOCTYPE HTML>
<html>  
<body>

<?php
    if (isset($_POST["guest_email"]) || isset($_POST["opinions"]) {
        $message = "Email: ".$_POST["guest_email"]."\n"."Thoughts: ".$_POST["opinions"]."\n";
        mail("w39song@edu.uwaterloo.ca", "opinions of website", $message);
    } else {
        echo "The information is not submitted successfully. Please try again.";
    }
 ?>

</body>
</html>