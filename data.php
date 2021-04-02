<?
$theme = "Форма обратной связи с сайта Blanchard";
if(isset($_POST['name'])) $name = $_POST['name'];
if(isset($_POST['tel'])) $phone = $_POST['tel'];

$header = "";
$header .="Mime-Version: 1.0\r\n";
$header .= "Content-type: text/html; charset=\"utf-8\"\r\n";
$header = "From: $name <$phone>\r\n\r\n";
$message = "Вам пришла заявка в форму обратного звонка от, $name!\nНомер телефона: $phone";

$message = wordwrap($message, 70);

if (mail('semho@yandex.ru', $theme, $message)) {
  $messageClient = "Спасибо, мы свяжемся с Вами в ближайшее время!";
  //echo $messageClient;
} else {
  $messageClient =  "Упс, сообщение не доставлено...";
  //echo $messageClient;
}

$response = ['message' => $messageClient];

header('Content-type: application/json');
echo json_encode($response);

?>
