<?php

$post_date = file_get_contents("php://input");
$data = json_decode($post_date);
if(isset($data->i) )
$i =$data->i;

$myfile = fopen("data1.json", "w") or die("Unable to open file!");

fwrite($myfile, $i);
?>