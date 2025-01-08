<?php
    session_start();
    header('Content-Type: application/json');
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json_data = file_get_contents('php://input');
    $data = json_decode($json_data, true);

    if (isset($data['productId'], $data['action'])) {
        $productId = $data['productId'];
        $action = $data['action'];
        if ($action === 'add'){
        if (isset($_SESSION['user_products'])) {
        $_SESSION['user_products'][] = $productId;
        }
        else {
            $_SESSION['user_products'] = array($productId);
            }
            echo json_encode(['success' => true]);
        }
        else if ($action === 'remove'){
          if (isset($_SESSION['user_products'])){
          $key = array_search($productId, $_SESSION['user_products']);
           if ($key !== false) {
           unset($_SESSION['user_products'][$key]);
            $_SESSION['user_products'] = array_values($_SESSION['user_products']);// Сбрасываем индексы массива
               echo json_encode(['success' => true]);
             } else{
                   echo json_encode(['success' => false, 'error' => 'Product not found in favorites']);
            }
          }
          else {
                  echo json_encode(['success' => false, 'error' => 'Product not found in favorites']);
             }
        } else{
             echo json_encode(['success' => false, 'error' => 'Invalid action']);
        }
    } else {
         echo json_encode(['success' => false, 'error' => 'Missing data']);
        }
    } else {
        echo json_encode(['success' => false, 'error' => 'Invalid request method']);
    }
?>