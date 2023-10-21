<?php

$errors = [];
$data = [];

if (empty($_POST['name'])) {
    $errors['name'] = 'Digite seu nome.';
}

if (empty($_POST['email'])) {
    $errors['email'] = 'Digite seu email.';
}

if (empty($_POST['subject'])) {
    $errors['subject'] = 'Digite o assunto da mensagem.';
}

if (empty($_POST['message'])) {
    $errors['message'] = 'Digite a mensagem que deseja enviar.';
}

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors'] = $errors;
} else {

    ini_set( 'display_errors', 1 );
    error_reporting( E_ALL );
    $from = "contato@zavataroprojetos.com";
    $to = "gabriela@zavataroprojetos.com.br";
    $subject = "Mensagem Enviada pelo Site";
    $message = "Nome: " . $_POST['name'] . " <br /> ".
               "Email: " . $_POST['email'] . "<br /> ".
               "Assunto: " . $_POST['subject'] . "<br /> ".
               "Mensagem: " . $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message, $headers);
    echo "The email message was sent.";

    $data['success'] = true;
    $data['message'] = 'Mensagem enviada com sucesso!';
}

echo json_encode($data);