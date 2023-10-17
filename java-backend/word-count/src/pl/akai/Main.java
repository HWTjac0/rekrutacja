package pl.akai;

import java.util.*;

public class Main {

    private static String[] sentences = {
            "Taki mamy klimat",
            "Wszędzie dobrze ale w domu najlepiej",
            "Wyskoczył jak Filip z konopii",
            "Gdzie kucharek sześć tam nie ma co jeść",
            "Nie ma to jak w domu",
            "Konduktorze łaskawy zabierz nas do Warszawy",
            "Jeżeli nie zjesz obiadu to nie dostaniesz deseru",
            "Bez pracy nie ma kołaczy",
            "Kto sieje wiatr ten zbiera burzę",
            "Być szybkim jak wiatr",
            "Kopać pod kimś dołki",
            "Gdzie raki zimują",
            "Gdzie pieprz rośnie",
            "Swoją drogą to gdzie rośnie pieprz?",
            "Mam nadzieję, że poradzisz sobie z tym zadaniem bez problemu",
            "Nie powinno sprawić żadnego problemu, bo Google jest dozwolony"
    };

    public static void main(String[] args) {
        /* TODO Twoim zadaniem jest wypisanie na konsoli trzech najczęściej występujących słów
                w tablicy 'sentences' wraz z ilością ich wystąpień..

                Przykładowy wynik:
                1. "mam" - 12
                2. "tak" - 5
                3. "z" - 2
        */
        String[] words = String.join(" ", sentences).toLowerCase().split(" ");
        HashMap<String, Integer> word_count = new HashMap<String, Integer>();
        for (String word : words) {
            word_count.merge(word, 1, Integer::sum);
        }
        
        List<Map.Entry<String, Integer>> word_list = new ArrayList<>(word_count.entrySet());
        word_list.sort((current, next) -> next.getValue().compareTo(current.getValue()));

        for (int i = 0; i < 3 && i < word_list.size(); i++) {
            Map.Entry<String, Integer> entry = word_list.get(i);
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

    }

}
