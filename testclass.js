function Banana (country) {
    this.country = country;
    this.color = "green";
    this.WhoAmI = function () {
        return "I am a " + this.color + " banana living in " + this.country + " !";    
    }
}

