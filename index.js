/*
const phoneNumbers = ["+1555-555-5555", "123-123-4534", "232-1231-232"]

Requirements:
a) International
    1) Start with + 
    2) Has at least 11 chars
3) Local
    1) 10 characters 
    2) No plus in the beginning

* validate mask <- Regexp

*/

function printValidPhoneNumbers(phoneNumbers){
    return  phoneNumbers.map(phoneNumber => {
        return phoneNumber.replace(/-/g, '');
    }).filter(pn => {
        return validateLocalPhoneNumber(pn) || validateInternationalPhoneNumber(pn)
    })
}

function validateLocalPhoneNumber(phone){
    return phone.length === 10;
}

function validateInternationalPhoneNumber(phone){
    return phone.startsWith('+') && phone.length === 12;
}

module.exports = printValidPhoneNumbers;