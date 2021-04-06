/**
 * Create a context menu which will only show up for selection.
 */


chrome.contextMenus.create({
  "title" : "Check if OIB is OK...",
  "type" : "normal",
  contexts: ["selection"],
  "onclick" : isOibValid()
});


/**
 * Returns a alert message if OIB is valid or not.
 */


function isOibValid(info, tab) {

return function(info, tab) {

    oib = info.selectionText;

    if (oib === undefined) { 
        alert("OIB not valid: It is empty or only contains spaces."); 
        return; 
    }

    if (oib.match(/^\d+$/) === null ) {
        alert("OIB not valid: Numbers not selected.\r\nPlease select numbers only.");
        return;
    }


   if (oib.match(/\d{11}/) === null || oib.length != 11 ) {

    if (oib.length <= 10) {
        alert("OIB not valid: Number is too short.\r\nYour number has "+ oib.length +", but needs to have 11 digits");
        return;
    }
 
    if (oib.length >= 12) {
        alert("OIB not valid: Number is too big.\r\nYour number has "+ oib.length +", but needs to have 11 digits");
        return;
    }
   }



    let calculated = 10;

    for (const digit of oib.substring(0, 10)) {
        calculated += parseInt(digit);

        calculated %= 10;

        if (calculated === 0) {
            calculated = 10;
        }

        calculated *= 2;

        calculated %= 11;
    }

    check = 11 - calculated;
    
    if (check === 10) {
        check = 0;
    }

    if (check === parseInt(oib[10])) {
      alert("Valid OIB!\r\nMathematiclly correct OIB.");
    } else {
      alert("OIB not valid: Control digit not valid");
    }


}};
