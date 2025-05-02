let myCities = new Array()
function pushArray()
{
    for(let i = 0; i < myCities.length; i++)
    {
        let string = "city"+(i+1);
        document.getElementById(string).value = myCities[i];
        
    }
}

function addCity()
{
    let city = document.getElementById("cityInput").value.trim();
    myCities.push(city.trim());

   
    pushArray();
    paragraf();
    
}
function resetFix()
{
    myCities = [];
    for(let i = 0; i < 5; i++)
    {
        let string = "city"+(i+1);
        document.getElementById(string).innerHTML = "";
    }

}
function sortCity()
{
    myCities.sort();
    document.getElementById("cityList").value = myCities.join();
    pushArray();
}
function paragraf()
{
    let string = "";
    let stad = document.getElementById("cityInput").value;
    let förstaBokstav = stad.charAt(0);
    string += "Första bokstaven i staden:" + förstaBokstav + "   ";
    
    let antal = stad.length;
    string += "Antal bokstäver i staden:" + antal + "   ";

    string += myCities[myCities.length-1].toUpperCase();
    document.getElementById("senasteStad").innerHTML = string;
}
/*Först behöver vi göra en array där våra städer ska ligga. Vi skapa en funtion som heter
pucharray och i funtionen skapar vi en for loop där i börjar på noll, körs så länge som
i är mindre än myCities.length och lägger på en efetr varje gång. 
let string = "city" + (i+1) hittar vårat id i listan och så att dom lägger sig i rad. 
document.getElementById(sträng).value = myCities[i] lägger till våra städer i listan.
Först en funktion med namnet som våran onclick knapp har, i funktionen så hämtar  
let city = document.getElementById("cityInput").value.trim() värdet i vårat inputfält 
där vi skriver in text och trimmar bort onödiga mellanslag. myCities.push(city.trim())
lägger till staden i arrayen, pushArray(); kallar på funtionen som finns längre upp och går
igenom arrayen och lägger rädd stad på rätt plats. paragraf(); kallar även på paragraf som 
ligge längre ner så att första bokstav mm visas korekt. Sedan en funktion för våran reset 
knapp där vi göra så att våran array tömms på städer. En for loop som räknar igeom alla 
texareas och en id sträng som hittar alla fält som ska tömmas, getElementById som innehåller 
string och innerHTML som sätter det till en tom string. En funtion med namnet sortCity som även 
våran sort knapp har, myCities.sort sorterar arrayen i bokstavsordning. getElementById hämtar div id 
som håller i alla textareas, value = myCities.join() sätter innehållet till alla städer i en string. 
kallar på funtionen pushArray som ser till atta alla id i textarean uppdateras på rätt sätt från myCities.
Sista funktionen för paragraf där vi skapar en tom textsträng, let stad = document.getElementById("cityInput").value hämtar 
det vi skrev in i inputfältet och sparar det i stad, let förstabokstav = stad.charAt(0) hämtar ut
den första bokstaven från staden som vi skrev in. sedan skapar vi en string där vi skriver in text som sedan skrivs ut 
+ förstabokstaven + skriver då ut den första bokkstaven framför texten. let antal = stad.length räknar ut 
hur många bokstäver det är i just denna stad vi skrivit in och samma där med string och text. Sedan en string 
där vi tar den senaste staden i listan och gör den till stora bokstäver. */
