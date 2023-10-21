/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    AKAI Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia!
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
// Nie chciało mi sie już robić jakiejś poprawnej walidacji :P
const form = document.getElementById("form");
form.addEventListener("submit", e =>{
  e.preventDefault();
  const data = new FormData(form);
  const formData = {}
  for(const [key, value] of data.entries()) {
    formData[key] = value.trim();
  }
  if(formData.first_name === "" || formData.last_name === "" || formData.email === "" || formData.section === undefined) {
    alert("Uzupełnij wszystkie dane");
  } else {
    alert("Brawo!!! Należysz do AKAI!");
  } 
})
