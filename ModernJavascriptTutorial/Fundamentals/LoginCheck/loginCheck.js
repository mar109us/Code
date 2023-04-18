const correctUser = "admin"

const wrongUser = "I don't know you!"

const correctPassword = "admin"

const wrongPassword = "Wrong Password!"

const cancelled = "Cancelled!"

const loginSuccess = "Welcome!"



let input = prompt ("What's your name? (admin)");

if (input === correctUser)
{
    let input = prompt ("What's the password? (admin)");

    if (input === correctPassword)
        {
        alert(loginSuccess)
        }

    else if (input === null)
        {
        alert(cancelled)
        }

    else
        {
        alert(wrongPassword)
        } 
}

else if (input === null)
{
alert(cancelled)
}

else
{
alert(wrongUser)
}


