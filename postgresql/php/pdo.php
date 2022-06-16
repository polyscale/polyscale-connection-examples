<?php
$dbuser = '';
$dbpass = '';
$host = 'psedge.global';
$port = 5432;
$dbname = '';
$appname = '';

try {
    $dsn = "pgsql:host=$host;port=5432;dbname=$dbname;application_name=$appname";

    // make a database connection
    $pdo = new PDO($dsn, $dbuser, $dbpass, [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]);

    if ($pdo) {
        echo "Connected to the $dbname database successfully!";
    }
} catch (PDOException $e) {
    die($e->getMessage());
} finally {
    if ($pdo) {
        $pdo = null;
    }
}
