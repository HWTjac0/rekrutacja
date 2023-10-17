<?php

// @author: Michal Dolata <https://github.com/MichalDolata>
// @author: Marcin Lawniczak <marcin@lawniczak.me>
// @date: 26.09.2017
// @update: 26.09.2019
// This task does require Composer. You can add more libraries if you want to.
// We suggest using Guzzle for requests (http://docs.guzzlephp.org/en/stable/)
// Remember to composer install
// The script will be outputting to a web browser, so use HTML for formatting

// When making different kinds of applications, data is often needed that we don't yet have.
// Many 3rd party providers offer APIs (wikipedia.org/wiki/Application_programming_interface)
// that can be consumed to find data we need.

// Your task is to use the The Star Wars API (https://swapi.co/) and it's docs (https://swapi.co/documentation)
// Display all starships provided through the API, with their properties
// Each ship should have the names of pilots and names of films displayed (if none, indicate)
// Each pilot should have its species also displayed
require_once __DIR__ . "/vendor/autoload.php";

use GuzzleHttp\Client;

$client = new Client();

$response = $client->request("GET", "https://swapi.dev/api/starships");
$starships = json_decode($response->getBody());
?>
<style>
  table, tr, td, th {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
<h1>Statki kosmiczne 🚀</h1>
<?php foreach( $starships->results as $starship): ?>
<table>
  <thead>
    <tr>
      <th>Atrybut</th>
      <th>Wartość</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach($starship as $key => $property): ?>
      <tr>
        <td><?php echo $key   ?></td>
        <td>
        <?php 
          if(!is_array($property)) {
            echo $property;
          } else if (empty($property)) {
            echo "Brak";
          } else {
            echo "<ul>";
            foreach ($property as $value) {
              echo "<li>";
              $contents = json_decode($client->request("GET", $value)->getBody());
              $displayed_name = "";
              if($key == "pilots") {
                $displayed_name .= $contents->name . "";
                if(!empty($contents->species)) {
          
                  $species = json_decode($client->request("GET", $contents->species[0])->getBody())->name;
                  $displayed_name .= "- gatunek - " . $species;
                } 
              } else if ($key == "films") {
                $displayed_name .= $contents->title;
              } else {
                $displayed_name .= "dupa";
              }
              echo $displayed_name;
              echo "</li>";
            }
            echo "</ul>";
          }
        ?>
        </td>
      </tr>
    <?php endforeach; ?>  
  </tbody>
</table>
</br>
<?php endforeach; ?>
