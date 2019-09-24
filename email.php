<?php
/*
****************************************************
Name: Curtis Ramsey Eddins
Assignment: 04
Purpose: Use PHP.
Notes: 
*********************************************************
 */

function redirect($url) {

    ob_start();
    header('Location: ' . $url);
    ob_end_flush();
    die();
}

function main() {
    //this first if statement tests to make sure we have a valid $_POST array
    if (!empty($_POST)) {
        
        $name = substr(strip_tags(trim($_POST['name'])),0,64);
        $subject = substr(strip_tags(trim($_POST['subject'])),0,64);
        $message = substr(strip_tags(trim($_POST['message'])),0,1000);

        $from = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

        

        if ( !empty($name) && !empty($from) && !empty($subject) && !empty($message) ) {

            $headers = "From: $from\r\n";
            $headers .= "Reply-to: $from\r\n";
            $headers .= "MIME-Version: 1.0\r\n";
            $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

            mail('ramseyeddins@gmail.com', $subject . ' : ' . $name, $message, $headers);

            if (mail('ramseyeddins@gmail.com', $subject . ' : ' . $name, $message, $headers) == TRUE){
                redirect('email-success.html');
            } else {
                redirect('email-error.html');
            }
 
        } else {
            redirect('email-error.html');
        }
        

    } else {
        redirect('email-error.html');
    }

    
}

//this calls main
main();



