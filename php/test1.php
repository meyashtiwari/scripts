<?php

function domino($string) {

    $arrayString = explode(',', $string);
    $lengthOfArray = count($arrayString);
    $matchingPairs = [];
    $currentMatchingGroup = 0;

    for($i = 0; $i < $lengthOfArray - 1; $i++) {
        $firstElementBreak = explode('-', $arrayString[$i]);
        $secondElementBreak = explode('-', $arrayString[$i+1]);

        if($firstElementBreak[1] === $secondElementBreak[0]) {
            // (print_r([$firstElementBreak, $secondElementBreak]));
            print_r([$matchingPairs, $i, $firstElementBreak]);
            if(!in_array($firstElementBreak, $matchingPairs[$currentMatchingGroup])) {
                array_push($matchingPairs[$currentMatchingGroup], $firstElementBreak, $secondElementBreak);
            } else {
                array_push($matchingPairs[$currentMatchingGroup], $secondElementBreak);
            }
        } else {
            $currentMatchingGroup++;
            $matchingPairs[$currentMatchingGroup] = [];
        }
    }

    print_r(count($matchingPairs));

    // return (count(max($matchingPairs)));
}


// print domino("1-1,3-5,5-2,2-3,2-4") . PHP_EOL; //should return 3
// print domino("6-3") . PHP_EOL; //should return 1
// print domino("1-2,1-2"). PHP_EOL; // should return 1

print domino("3-2,2-1,1-4,4-4,5-4,4-2,2-1") . PHP_EOL;// 4
// print domino("5-5,5-5,4-4,5-5,5-5,5-5,5-5,5-5,5-5,5-5") . PHP_EOL;// 7
// print domino("1-1,3-5,5-5,5-4,4-2,1-3") . PHP_EOL;// 4
// print domino("1-2,2-2,3-3,3-4,4-5,1-1,1-2") . PHP_EOL;// 3