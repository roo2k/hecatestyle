<?php
$login = trim(string: filter_var(value: $_POST['username'], filter: FILTER_SANITIZE_SPECIAL_CHARS));
$password = trim(string: filter_var(value: $_POST['password'], filter: FILTER_SANITIZE_SPECIAL_CHARS));

if (strlen( $login) < 2) {
    echo "login error";
    exit;
};
if (strlen($password) < 8) {
    echo "short password";
    exit;
};

$salt = '498v089f8fv0f$FVMNf4hV)4fhnm0hVH)4fvfvH)H&asdasdzxc*';
$password = md5($salt . $password);

require "db.php";

$sql = 'SELECT id FROM users WHERE login = ? AND password = ?';
$query = $pd0->prepare($sql);
$query->execute([$login, $password]);

if($query->rowCount() == 0)
    echo 'no user';
else {
    setcookie('login', $login, time() + 3600 * 24 * 30, '/');
    header('location: /user.php');
}
