const emailList = document.getElementById('email-list')
const button = document.getElementById('generate-btn')

// funzione per generare 10 email casuali con API boolean
function generateEmails() {
    emailList.innerHTML = ""

    for (let i = 0; i < 10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {
                const email = data.response
                console.log(email);
                
                // creo un nuovo elemento <li> per ogni email e lo aggiungo alla lista 
                const li = document.createElement('li')
                li.textContent = email
                emailList.appendChild(li)
            })
    }
}

generateEmails();
button.addEventListener("click", generateEmails)