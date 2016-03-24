<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2016/2/25
 * Time: 12:45
 */
function getIP(){
    global $ip;
    if (getenv("HTTP_CLIENT_IP"))
        $ip = getenv("HTTP_CLIENT_IP");
    else if(getenv("HTTP_X_FORWARDED_FOR"))
        $ip = getenv("HTTP_X_FORWARDED_FOR");
    else if(getenv("REMOTE_ADDR"))
        $ip = getenv("REMOTE_ADDR");
    else $ip = "unKnow";
    return $ip;
}
// 使用方法：
include 'IP.class.php';
$ipClass = new IP();
$ip = '211.64.0.0';
$find =$ipClass->find($ip);
print_r($find);

?>