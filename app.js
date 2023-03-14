
let hidden = document.querySelectorAll('p');
for (let i = 0; i < hidden.length; i++) {
    hidden[i].style.display = 'none';
}

document.querySelectorAll('.qr').forEach(element => {

    element.addEventListener("click", (event) => {
        let qr = event.target.parentNode.parentNode;
        if (event.target.nodeName == "P" || event.target.nodeName == "DIV") 
            qr = event.target.parentNode;
        if (event.target.className == "qr") 
            qr = event.target;
        let reponse = qr.querySelector('p');
        let arrow = qr.querySelector('.arrow');
        let title = qr.querySelector('h3');

        
         if (reponse.style.display == 'none') {
            reponse.style.display = 'block';
            arrow.style.rotate = "180deg";
            title.style.color = "hsl(238, 29%, 16%)"

        } else {
            reponse.style.display = 'none'
            arrow.style.rotate = "0deg";
            title.style.color = "hsl(240, 6%, 50%)"
        }


    });
});



