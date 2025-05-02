    function saveFile() 
    {
        // Hämtar data från varje element i form.
        let image = document.getElementById("feedbackImage");
        const name = document.getElementById('txtName');
        const email = document.getElementById('txtEmail');
        const city = document.getElementById('selCity');
        const msg = document.getElementById('msg');
        
        //Hämtar data från alla arrow med att dom inte ska visas
        document.getElementById("arrowName").style.display = "none";
        document.getElementById("arrowEmail").style.display = "none";
        document.getElementById("arrowCity").style.display = "none";
        document.getElementById("arrowMessage").style.display = "none";
        if(validateName(name.value)) //validerar namnet som den tar längre ner i koden
        {   //när man skrivit rätt namn så slutar arrow att synas.
            document.querySelector('.arrow').style.display = 'none';

        }
        else
        {   //det kommer en alertbox om man skrivit fel och arrow visas.
            alert("Fel i fyllt, du måste fylla i hela formuläret.")
            document.getElementById("arrowName").style.display = "block";

            return; //göt så att funktionen avbryts och inte körs förns det är fixat
        }

        if(validateEmail(email.value)) //validerar email som den hämtar längre ner.
        {  //visar en alertbox med rätt meddelande. arrow slutar visas. 
            alert("Du har skrivit rätt mailadress.")
            document.querySelector('.arrow').style.display = 'none';
         
        }
        else
        {   //en alerbox med felmeddelande visas och arrow kommer fram.
            alert("Du ha skrivit fel mailadress.")
            document.getElementById("arrowEmail").style.display = "block";
            return;
        }
        if (city.value === "") //boolean där om det är tomt så visas alertbox och arrow visas
        {
            alert("Du måste välja en stad.");
            document.getElementById("arrowCity").style.display = "block";
            return;
        }
        if (msg.value.trim() === "")  //boolean där om det är tomt så visas alertbox och arrow visas
        {
            alert("Skriv ett meddelande.");
            document.getElementById("arrowMessage").style.display = "block";
            return;
        }
        
        //fördröjer koden med 200ms, byter ut bilden please till thank you, 
        //lägger till animation med en fade-spin som vi så klart har i css, 
        //den andra settimeout körs 800ms efter att den första gått ut, och den tar då bort effekten
        setTimeout(() => { 
          
            image.src = "img/thankyou.png";
            image.classList.add("fade-spin");
    
            setTimeout(() => {
              image.classList.remove("fade-spin");
            }, 800);
        }, 200);
        

        //Denna variabel lagrar all data.
        let data = '\r Name: ' + name.value + ' \r\n ' +
            'Email: ' + email.value + ' \r\n ' +
            'City: ' + city.value + ' \r\n ' +
            'Message: ' + msg.value;

        // konverterar texten till BLOB.
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'formData.txt'; // Filen för att spara data.

        // skapar ett nytt element (länk) "a", gör så att länken laddar ner filer.
        let newLink = document.createElement("a");
        newLink.download = sFileName;

        //Här kollar man om webbläsaren har stöd för webkitURL och den under skapar tillfällig 
        //länkt till filens innehåll.
        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        //om webitURL inte finns så görs samma sak med vanlig URL, display none gömmer länken från sidan
        //lägger till i sidan så den fungerar.
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();// ett klick på länken görs så att den laddas ner automatiskt.
    }

    // Här kollar vi om email adressen är korrekt skriven 
    function validateEmail(email) 
    {
        //detta är Reguljärt uttryck regex som beskriver reglerna för en giltig epostadress.
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return emailPattern.test(email);//om det är rätt så retuneras det true.
        
        
    }

    //Här kollar vi om namn är skrivet korrekt
    function validateName(name)
    {
        //detta visar att det ska börja med stor bokstav, får innehålla bindestreck/apostrof,
        //man kan skriva både för och efternamn och efetr mellanslag så ska det vara stor bokstav.
       const namePattern = /^[A-Z](['-]?[A-Za-z])*(,? [A-Z](['-]?[A-Za-z])*)*$/;
       return namePattern.test(name); //Om true så retuneras namnet om mönstret matchar.
    }

    //Här återstöller vi hela sidan och även bilden när man trycker på reset knappen.
    //dock inte arrow, den visar fortfarande vart du hade gjort fel.
    function resetFix()
    {
        let image = document.getElementById("feedbackImage");
        image.src = "img/please.png";
    
    }
