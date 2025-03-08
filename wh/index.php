<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

header("Content-Type: application/javascript");

$github_url = "https://raw.githubusercontent.com/douxxtech/weedhack/refs/heads/main/wh/wh.js";

$github_content = @file_get_contents($github_url);

if ($github_content !== false) {
    echo $github_content;
} else {
    header("HTTP/1.0 404 Not Found");
    echo "// Error: Failed to fetch content from GitHub repository.";
}
?>