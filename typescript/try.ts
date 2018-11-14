function greeter(person: string) :string{
    return "Hello, " + person + " 你最近又胖了";
}

var user = "Jane User";
document.body.innerHTML = greeter(user);
