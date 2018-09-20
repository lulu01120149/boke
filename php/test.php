<?php
include_once "index.php";

$oper = new Operate('grwz');
// 查询数据
$arry = $oper -> search(array('title1','title2','content','photo','time'),'boke');
$oper -> json('200','成功',$arry,count($arry));
