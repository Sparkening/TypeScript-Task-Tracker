<?php
// api.php

// 1. Allow cross-origin requests (CORS) for local development
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// 2. Mock Database
$tasks = [
    ["id" => 1, "title" => "Update resume", "completed" => true],
    ["id" => 2, "title" => "Build PHP/TS project", "completed" => false],
    ["id" => 3, "title" => "Submit application", "completed" => false]
];

// 3. Handle the incoming request method
$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        // Return all tasks
        http_response_code(200);
        echo json_encode(["status" => "success", "data" => $tasks]);
        break;
        
    case 'POST':
        // Get the posted data
        $data = json_decode(file_get_contents("php://input"));
        
        if(!empty($data->title)) {
            // Mock saving the task
            $newTask = [
                "id" => count($tasks) + 1,
                "title" => htmlspecialchars(strip_tags($data->title)),
                "completed" => false
            ];
            http_response_code(201);
            echo json_encode(["status" => "success", "message" => "Task created", "data" => $newTask]);
        } else {
            http_response_code(400);
            echo json_encode(["status" => "error", "message" => "Task title is required."]);
        }
        break;
        
    default:
        http_response_code(405);
        echo json_encode(["status" => "error", "message" => "Method not allowed"]);
        break;
}
?>