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

    $from = $_POST['name'] . " <" . $_POST['email'] . ">";
    $to = "contato@zavataroprojetos.com.br";
    $subject = $_POST['subject'];
    $message =  $_POST['message'];
    $headers = "From:" . $from;

    if ( mail($to,$subject,$message, $headers)) {
        $data['success'] =  true;
        $data['message'] = 'Mensagem enviada com sucesso!';
    } else {
        $data['success'] = false;
        $data['errors'] = "Falha no envio da mensagem!";
    }
    
}

echo json_encode($data);
?>