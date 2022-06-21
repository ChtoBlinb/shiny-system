<?php
/* Здесь проверяется существование переменных */
if (isset($_POST['user-phone-number'])) {$phone = $_POST['user-phone-number'];}
if (isset($_POST['user-name'])) {$name = $_POST['user-name'];}
if (isset($_POST['user-address'])) {$adress = $_POST['user-address'];}
if (isset($_POST['user-email'])) {$email = $_POST['user-email'];}
if (isset($_POST['feedback-order-sum'])) {$prodSummary = $_POST['feedback-order-sum'];}
if (isset($_POST['feedback-order-name'])) {$prodName = $_POST['feedback-order-name'];}

/* Сюда впишите свою эл. почту */
$myaddres  = "puzanova.cosmetic@mail.ru"; // кому отправляем
$mailTo = $email;
/* А здесь прописывается текст сообщения, \n - перенос строки */
$mesOne = "Заказ оформлен!\nТелефон менеджера: +79001234567\nАдрес доставки: $adress\nE-mail магазина: puzanova.cosmetic@mail.ru\nСумма к оплате: $prodSummary\nВаши товары: \n$prodName";
$mesTwo = "Поступил заказ!\nТелефон заказчика: $phone\nФИО заказчика: $name\nАдресс отправки: $adress\nE-mail заказчика: $email\nСумма к оплате: $prodSummary\nТовары на отправку: \n$prodName";

/* А эта функция как раз занимается отправкой письма на указанный вами email */
$sub='Заказ'; //сабж
$email='Заказ обратного звонка'; // от кого
$send = mail ($mailTo,$sub,$mesOne,"Content-type:text/plain; charset = utf-8\r\nFrom:$myaddres");
$send2 = mail ($myaddres,$sub,$mesTwo,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");

ini_set('short_open_tag', 'On');
header('Refresh: 3; URL=index.html');
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="refresh" content="3; url=index.html">
    <title>Колесо</title>
    <meta name="generator">
    <script type="text/javascript">
        setTimeout('location.replace("/index.html")', 3000);
        /*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
    </script>
</head>
<body>
<h1 style="text-align: center">Спасибо!<br> Мы получили ваш заказ.<br> С вами свяжется наш сотрудник!<br></h1>
</body>
</html>
