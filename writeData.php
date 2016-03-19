<?php

$post_date = file_get_contents("php://input");



$myfile = fopen("data.json", "w") or die("Unable to open file!");

fwrite($myfile, $post_date);
?>