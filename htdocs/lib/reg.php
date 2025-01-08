<?php 
    $login = trim(string: filter_var(value: $_POST['username'], filter: FILTER_SANITIZE_SPECIAL_CHARS));
    $email = trim(string: filter_var(value: $_POST['email'], filter: FILTER_SANITIZE_SPECIAL_CHARS));
    $password = trim(string: filter_var(value: $_POST['password'], filter: FILTER_SANITIZE_SPECIAL_CHARS));
    $password_confirm = trim(string: filter_var(value: $_POST['password_confirm'], filter: FILTER_SANITIZE_SPECIAL_CHARS));

    if(strlen(string: $login) < 2) {
        echo "login error";
        exit;
    };
    if(strlen(string: $password) < 8) {
        echo "short password";
        exit;
    };
    if(!str_contains(haystack: $email, needle: '@')) {
        echo "login error";
        exit;
    };
    if($password !== $password_confirm) {
        echo "wrong pass";
        exit;
    }

    $salt = '498v089f8fv0f$FVMNf4hV)4fhnm0hVH)4fvfvH)H&asdasdzxc*';
    $password = md5($salt.$password);
    $password_confirm = md5($salt.$password_confirm);

    //DB
    require "db.php";
    $sql = 'INSERT INTO users(login, email, password, password_confirm) VALUES(?, ?, ?, ?)';
$query = $pd0->prepare(query: $sql);
$query->execute(params: [$login, $email, $password, $password_confirm]);

header('location: /');