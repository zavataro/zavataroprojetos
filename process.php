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

    $data['success'] =  true;
    $data['message'] = 'Mensagem enviada com sucesso!';

    $from = $_POST['name'] . "<" . $_POST['email'] . ">";
    $to = "contato@zavataroprojetos.com";
    $subject = $_POST['subject'];
    $message =  $_POST['message'];
    $headers = "From:" . $from;
    envio = mail($to,$subject,$message, $headers);
    
}

echo json_encode($data);
?>