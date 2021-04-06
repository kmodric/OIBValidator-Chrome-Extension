# OIBValidator-Chrome-Extension

For details please see [Google Web Store](https://chrome.google.com/webstore/detail/oib-validator/fhacgojihicckkpikfobmmgkbnokmpom){:target="_blank"} and/or [Youtube Video](https://www.youtube.com/watch?v=Pulo6HCOW9Q){:target="_blank"}

OIB Validator is a Chrome extension designed to check if OIBs is valid or not.
OIB is personal identification number used in Croatia. If you are outside of Croatia it is unlikely that this will be of much use to you.

## How to use
Install the extension and right Click on any selected text for which you would like to check if OIBs is valid or not. Menu item "Check if OIB is OK..." will be shown and upon clicking it, you will be shown message containing if those number are Mathematically correct OIB or not.

## How does it work
OIBs are created by first generating 10 digits and then calculating the final, 11th, control digit that is used to validate the OIB. The last digit is generated from first 10 digit using the ISO7064 (MOD 11,10) specification.

This extension just checks if OIBs are Mathematiclly correct or not. If OIB are valid this does not mean that it is used by the citizens or companies in Croatia.

## Privacy
All calculation is done locally (on the client) and none of personal information is shared via internet
