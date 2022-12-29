function Verification()
{
    var name = document.getElementById('name').value;
    var email= document.getElementById('email').value;
    atpos = email.indexOf("@");
    dotpos = email.lastIndexOf(",");
    var subject=document.getElementById('subject').value;

    if(name=="")
    {
        alert("Name must be filled out")
        return false;
    }

    if(atpos < 1 || (dotpos - atpos < 2)) {
        alert("Invalid email, please enter correct email")
        return false;
    }

    if(subject==""){
        alert("subject must be filled out")
        return false;
    }

    else{
        alert("Message sent")
        return true;
    }
}

