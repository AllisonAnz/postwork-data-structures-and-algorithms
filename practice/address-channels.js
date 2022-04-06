//What's in a number? In addition to using typical "addresses" (i.e. phone numbers) for SMS messages, Company supports sending messages through different channels such as wc, wa and msngr. These other channels have their own address formats. Company uses a standardized phone number format for SMS messages called E.164 phone numbers.

//Some examples of valid E.164 numbers are: +15555555555, +34864683619, +61491570156, 913858210056
//For other channels messaging, they have addresses that are formatted differently to indicate the provider responsible to route the message to. Some examples of these provider/identifier combinations are:

//whatsapp:34864683619
//messenger:+12025550001
//wechat:gh_a1f37dacefe3
//All these values are passed around as strings. It is important that we validate the format is correct for these addresses, as well as identify the appropriate provider to route tie message to.

//We are asking you to build a function that validates that the address (which is either a standard phone number, or a provider/identifier combo) is formatted correctly, and then returns which channel to route the message to.

//Given: address: A string containing the telephone number or provider:identifier channel string
//Write:
//A function that validates the address and returns where to route the message to
//The return value will be one of:
//For address strings with invalid formatting, return "INVALID_ADDRESS"
//For valid E.164 format addresses, return "SMS"
//For other channels, return the provider string as "WA", "WC", or "MSNGR"
//Constraints

//• The address will be a string between 1 - 258 characters long

//• E.164 numbers

//0 May optionally start with '+'
//Will have up to 15 digits in length (not including the '+')
//Digits can be between 0-9. The first digit can never be 0.
//• Other channel addresses

//No whitespace allowed
//The provider and identifier will always be separated by one colon {provider}:{identifier}
//Valid providers are: wa, wc, and msngr
//Inputs could be lower or upper case, but outputs should always be uppercase
//Valid identifiers
//Identifiers are between 1 and 248 characters long
//wa and msngr identifiers must specifically be E.164 numbers
//Other providers can have identifiers that are made up of any English alphanumeric character and the characters '+', '.' • Including any other characters //would make the identifier invalid.

//Example
//Input: +15555555555
//Output: SMS

//Input: 15555555555
//Output: SMS

//Input: +15555555555555555
//Output: INVALID_ADDRESS

//Input: wa:15555555555
//Output: WA

//Input: wc:identifier:ghke83772
//Output: INVALID_ADDRESS

//Input: wc:ghke83772
//Output: WC

//Input: wa:+15555555555
//Output: WA

//Input: msngr:15555555555
//Output: MSNGR

//Input: msngr:+15555555555
//Output: MSNGR

//Input: msngr:+15555555555555555
//Output: INVALID_ADDRESS

//Input: wa:this_is_not_an_E164_number
//Output: INVALID_ADDRESS

//Input: msngr:this_is_not_an_E164_number
//Output: INVALID_ADDRESS

//Input: wc:this_is_alphanumeric_with_special_character
//Output: WC