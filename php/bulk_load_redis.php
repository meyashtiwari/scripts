<?php

    declare(strict_types=1);

    function main(int $argc, array $argv): void {
        if($argc === 1) {
            print('Pass file names to process');
            return;
        }
        
        for($count = 1; $count < $argc; $count++) {
            readDataFromFile($argv[$count]);
        }
    } main($argc, $argv);

    function readDataFromFile(string $file): void {
        $content = fopen($file, "r") or die("Unable to open file!");
        $row = 0;
        while(!feof($content)) {
            if($row === 0) { 
                fgets($content);
                $row++;
                continue;
            }
            $emailString = fgets($content);
            if($emailString != '') {
                $email = preg_split('/\s+/', $emailString);
                if(!empty($email)) {
                    $hash = substr($email[1], 0, 4);
                    $field = substr($email[1], 4);
                    echo gen_redis_proto("HSET", "$hash", "$field", "1");
                }
            }
        }
    }

    function gen_redis_proto(): string 
    {
        $CRLF = "\r\n";
        $args = func_get_args();
        $proto = '*'.count($args).$CRLF;
        foreach ($args as $arg) {
            $proto .= '$'.strlen($arg).$CRLF;
            $proto .= $arg.$CRLF;
        }
        return $proto;
    }