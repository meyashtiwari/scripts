<?php
    print solution(3);
    
    function solution($n) {
        if($n === 1) return 1;
        return (4 * ($n-1)) + solution($n-1);
    }
