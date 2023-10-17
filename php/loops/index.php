<?php
// @author: Marcin Lawniczak <marcin@lawniczak.me>
// @date: 24.10.2017
// @update: 26.09.2019
// This is a simple task, which does not require Composer
// The script will be outputting to a web browser, so use HTML for formatting
// Write out numbers from 100 to 0, each in a separate line
// If the number is a multiple of 4, write Fire instead of the number
// If the number is a multiple of 7, write Boom instead of the number
// If the number is a multiple of 10, repeat it 10 times in the same line in red
// Nie było napisane co zrobić jeśli np. liczba jest i wielokrotnością 10 i 4 lub 4 i 7 więc zostawiej tak jak jest. :)
for($i = 100; $i >= 0; $i--) {
  $output = match(0) {
    $i % 4  => "Fire",
    $i % 7  => "Boom",
    $i % 10 => "<span style='color: red'>" . str_repeat($i . " ", 10) . "</span>",
    default => $i,
  };
  echo $output . "</br>";
}
