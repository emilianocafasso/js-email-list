const emaiList = document.getElementById('email-list')

//funzione per generare 10 email casuali con API boolean
function generateEmails() {
    for(let i=0; i<10; i++) {
        fetch('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response => response.json())
            .then(data => {
                const email = data.response
                console.log(email);       
            })    
    }
}



generateEmails();