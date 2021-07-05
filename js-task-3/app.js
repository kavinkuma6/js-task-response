/*
on click on the <a> "click to action", 
instead of going to default url:

https://someurl.com/mypath?uuid=ABCD-EFGH-1234-XYZ&name=John&surname=Doe

it should go to a new url:

https://someurl.com/v2/mypath?uuid=ABCD-EFGH-1234-XYZ&locale=de_AT

locale parameter depends on country and language select values.

if there's no language selected, by default use english,
if there's no country selected, by default use UK.
*/

function redirect() {
  const clickToRedirectEl = document.getElementById("click-to-action");
  const countryEl = document.getElementById("country");
  const languageEl = document.getElementById("language");
  let country = countryEl.value || "UK";
  let language = languageEl.value || "en";
  clickToRedirectEl.href = `https://someurl.com/v2/mypath?uuid=ABCD-EFGH-1234-XYZ&locale=${language}_${country}`;
}
