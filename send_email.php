<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Pega os dados do formulário
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = trim($_POST["subject"]);
    $message = trim($_POST["message"]);

    // Validação básica
    if (empty($name) || empty($subject) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, preencha todos os campos corretamente.";
        exit;
    }

    // Definir o endereço de e-mail para onde será enviado
    $to = "douglasdroplatam@gmail.com"; // Coloque aqui seu e-mail
    $headers = "From: " . $email;

    // Construir a mensagem
    $full_message = "Nome: $name\n";
    $full_message .= "Email: $email\n";
    $full_message .= "Assunto: $subject\n\n";
    $full_message .= "Mensagem:\n$message\n";

    // Enviar o e-mail
    if (mail($to, $subject, $full_message, $headers)) {
        echo "Mensagem enviada com sucesso!";
    } else {
        echo "Erro ao enviar a mensagem.";
    }
}
?>
