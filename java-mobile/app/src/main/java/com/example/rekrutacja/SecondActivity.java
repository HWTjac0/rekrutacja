package com.example.rekrutacja;

import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.example.rekrutacja.databinding.ActivitySecondBinding;

public class SecondActivity extends AppCompatActivity {

    private ActivitySecondBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        binding = ActivitySecondBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

   /*3. TODO Poniżej znajduje się kod, który obsługuje kliknięcia dwóch przycisków,
                jednak na wyświetlającym się widoku nie są one podpisane. Twoim
                zadaniem jest wywnioskowanie co kliknięcie na poszczególny przycisk zmienia
                i adekwatne podpisanie tych przycisków w pliku activity_second.xml.
                Kolejne zadanie znajduje się poniżej.

                Podpisanie - chodzi o android:text.
         */

        binding.firstButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (binding.image.getVisibility() == View.GONE) {
                    CharSequence text = "Obrazek jest niewidoczny";
                    int duration = Toast.LENGTH_SHORT;
                    Toast toast = Toast.makeText(SecondActivity.this, text, duration);
                    toast.show();
                } else {
                    binding.image.setVisibility(View.GONE);
                }
            }
        });
        binding.secondButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (binding.image.getVisibility() == View.VISIBLE) {
                    CharSequence text = "Obrazek jest widoczny";
                    int duration = Toast.LENGTH_SHORT;
                    Toast toast = Toast.makeText(SecondActivity.this, text, duration);
                    toast.show();
                } else {
                    binding.image.setVisibility(View.VISIBLE);
                }
            }
        });

        binding.bothButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                int current_vis = binding.image.getVisibility();
                binding.image.setVisibility(current_vis == View.GONE ? View.VISIBLE : View.GONE);
            }
        });

        binding.returnButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                finish();
            }
        });

        /*4. TODO W tym activity znajduje się jeszcze jeden przycisk niestety kliknięcie
                na niego nic nie robi. Twoim zadaniem jest implementacja kliknięcia w taki sposób,
                aby jak obrazek jest widoczy przycisk chował obrazek, w przeciwnym wypadku,
                gdy obrazek jest schowany po kliknięciu obrazek ma się pojawić. Dodatkowo należy
                przerobić listenery poprzednich obrazków tak, aby np. Klikając na przycisk do chowania
                obrazka, chował on obrazek, a w przypadku kliknięcia, gdy obrazek jest niewidoczny
                wyświetlał informację o tym, obrazek jest już niewidoczny (np. za pomocą Toast lub
                SnackBar lub AlertDialog). Podobnie dla drugiego przycisku odpowiedzialnego za
                wyświetlanie obrazka. Jednocześnie zmień widok tego przycisku tak, aby nie wszystkie
                litery, były pisane wielką literą.
                Kolejne zadanie znajduje się poniżej.
         */

        /*5. TODO Ostatnie zadanie polega na dodaniu przycisku pozwalającego na przejście spowrotem
                do MainActivity. Tutaj jednak nie chcemy, abyś otwierał nowe activity, tylko po
                kliknięcku przycisku zamknął aktualne, ponieważ pod aktualnie wyświetlanym activity
                jest już instancja MainActivity.

         */

        /* TODO Zadanie Dodatkowe. Tutaj masz zupełną dowolność, jeśli masz jeszcze czas
                i ochotę zrób coś kreatywnego, ale jednocześnie prostego,
                pamiętaj jednak, aby nie naruszyć tym kodu,
                który realizuje poprzednich zadań. Nie jest to zadanie obowiązkowe.
         */
    }
}
