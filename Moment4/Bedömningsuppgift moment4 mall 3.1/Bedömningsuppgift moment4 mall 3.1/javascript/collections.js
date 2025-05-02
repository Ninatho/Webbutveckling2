function rensa() //Knappen Återställ som vi skapat en funktion för.
{ 
    document.getElementById("utskrift").innerHTML = "";  //Hämtar Id=utskrift så man ska kunna rensa fjärde kolumnen.
}
function submitForm() //Knappen Skicka text i fält som vi skapar en funktion för.
{  
    const index = document.forms[0][4].value; // Här sparas och hämtas det valda nummret. 
    //Sen referera vi till form elementet i html som nås via intex. 0 - 4.
    const värdeFrånFörstaFält = document.forms[0][index-1].value; //Här används den siffran vi valde men vi kör index -1 eftersom formulärfältet räknar från 0.
    document.getElementById("utskrift").innerHTML = värdeFrånFörstaFält; //Här hämtar vi id för kolimn 4 så det vi valt kan skrivas ut.
}
function submitDivar()//Knappen skicka text i divar som vi skapan en funktion för.
{
    const allaDivar = document.querySelectorAll("#text div");//Här hämtar vi alla divar som ligger innuti diven med id text. querySelectorAll retunerar en nodelist.
    let string = "";//Använd för att bygga upp en textpresentation
    let textNodes = [];//En array som sparar alla textnoder den refererar till.
    for(let i = 0; i < allaDivar.length; i++)//En for lopp där i börjar på noll, så länge i är mindre än allaDivar.length så fortsätter loopen, i++ lägger till en efter varje varv.
    {                                                                                                //längden på alla divar
        string += i + ": ";//Denna gör så att alla divar så ett nummer med början på noll, alltså i är utser vilket nummer.
        for(let j = 0; j < allaDivar[i].childNodes.length; j++)//En for loop där j börjar på noll. fortsätter så länge som j är mindre än alladivar. [i] visar vilket nummer som kommer före diven,
        { //childnodes är listan på alla "barn" till div elementen kan också avra textnoder och .length hur många "barn" det finns. j++ lägger till en efter varje loop.
            if(allaDivar[i].childNodes[j].nodeType == Node.TEXT_NODE)//Denna if sats kollar vilken typ av nod [j]barnet är till [i]diven och node.text_mode betyder textnod.
            { 
                string += allaDivar[i].childNodes[j].nodeValue;//Tar själva textinnehållet och lägger till den i variabeln string.
                textNodes.push(allaDivar[i].childNodes[j]);//Denna lägger till hela textnoden i arrayen som vi skapade med namnet textNodes.
            }
        }
        string += "<br>";//En string som lägger till en radbrytning mellan varje rad.
    }
    string = "";//Rensar variabeln string.
    for(let i = 0; i < textNodes.length; i++)//For loop där i börjar på noll. fortsätter så länge i är mindre än längden på textnodes. i++ lägger till en efter varje loop.
    {
        string += i + ": " + textNodes[i].nodeValue + "<br>";//Här tar vi index och lägger till kolon med mellanslag, plockar fram texten från [i]textnode och lägger <br> efter varje. som sedan läggs in i string.
    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla divar i kolumn fyra.
}
function submitAllEntries()//En fuktions som vi skapat för knappen Skicka Entries.
{
    const entries = document.getElementById("nodes").childNodes;//Hämtar det värdet i html som har rätt id. childNodes hämtar alla typer av noder. entries blir en nodelist
    let string = "";//skapar en tom variabel för text som kommer skrivas ut.
    for(let x of entries)//En for loop där varje x/nod i listan går över varje värde.
    {
        string += x.nodeName + "<br>";//Denna tar fram "namnet" på noden, alltså div, p, text..
    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla entreis i kolumn fyra.
}

function submitAllKeys()//En fuktions som vi skapat för knappen Skicka Keys.
{
    const keys = document.getElementById("nodes").childNodes.keys();//Hämtar värdet i html med rätt id. childNodes hämtar nodelist över alla barnnoder. .keys anropar keys metoden.
    let string = "";//Skar en tom string som kommer skriva ut text                                                                       //keys retunerar en iterator över index för barnnoder. 
    for(let x of keys)//for loop som går igenom alla index från keys. x är ett nummer och som blir ett nytt nummer varje gång loopen körs.
    {
        string += x + "<br>";// lägger till indexet x i string och lägger till en radbrytning efter varje rad.
    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla keys i kolumn fyra.
}
function submitAllValues()//En fuktions som vi skapat för knappen Skicka Values.
{
    const children = document.getElementById("nodes").children;//Hämtar värden från html med rätt id. children hämtar en html collection av alla barn som är html element.
    let string = "";//Skapr en tom string som kommer skriva ut text.
    for(let x of children)//En for loop går igenom x/barn-element i children.
    {
        string += x.innerHTML + "<br>";//x.innerHTML hämtar allt som är i html elementet x, lägger det i string och med en radbrytning.

    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla values i kolumn fyra.
}
function submitParagraphValues()//En fuktions som vi skapat för knappen Skicka Paragrafvärden.
{
    const paragraphs = document.getElementById("nodes").getElementsByTagName("p");//Hämtar värdet från html med rätt id. .getElementsByTagName("p") hämtar alla p element som ligger i id node elementet.
    let string = "";// En tom string vi kommer skriva ut text i sen.
    for(let p of paragraphs)//En for loop som kör igenom alla p element i paragraphs.
    {
        string += p.innerHTML + "<br>";//Här hämtar vi all i just p taggen som sedan läggs in i den tomma strängen och med en radbrytning efter varje rad.

    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla paragraphs i kolumn fyra.
}
function submitHeader4Value()//En fuktions som vi skapat för knappen Skicka värde i h4..
{
    const h4 = document.getElementById("nodes").querySelector("h4");//Hämtar värdet från html med rätt id. .querySelector("h4") används för att hitta det underliggande h4 elementet.
    let string = "";// En tom string vi kommer skriva ut text i sen.
    if(h4)//Denna if sats kollar om h4 finns eller inte.
    {
        string += h4.innerHTML + "<br>";//Om den gör det så hämtar denna all som finns i h4 elementet, lägger det i string och sedan med en radbrytning.
    }
    else
    {
        //Här behöver vi inte skriva något.
    }
    document.getElementById("utskrift").innerHTML = string;//Hämtar värdet utskrift så vi kan skriva ut alla header i kolumn fyra.
}
