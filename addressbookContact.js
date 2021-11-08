class AddressbookContact{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;
    constructor(firstname,lastname,address,city,state,zip,phoneNumber,email){
        this.firstname=firstname;
        this.lastname= lastname;
        this.address=address;
        this.city=city;
        this.state=state;
        this.zip=zip;
        this.phoneNumber=phoneNumber;
        this.email=email;
    }

    toString(){
        return "firstname: " + this.firstname + "\nlastname " + this.lastname + "\naddress: " + this.address +
            "\ncity: " + this.city + "\nstate: " + this.state + "\nzip: " + this.zip + "\nphoneNumber: " + 
            this.phoneNumber + "\nemail: " + this.email;
    }
}

let addressbookContact = new AddressbookContact("vignesh","D","abc622","vellore","TN",632006,8012466942,"v@gmail.com");
console.log(addressbookContact.toString());