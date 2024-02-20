let btn = document.querySelector('.btn');
let emailInput = document.querySelector('#email');
let paragraph = document.querySelector('.hero-paragraph');
let error = document.querySelector('.img-error');

function attentionStyle() {
    let attention = document.createElement('p');
    attention.textContent = 'Please provide a valid email';
    attention.style.color = 'red';
    attention.style.fontSize = '12px';
    attention.style.lineHeight = '100%';
    attention.style.marginLeft = '30px';
    paragraph.appendChild(attention);
}

btn.addEventListener('click', function() {
    const emailRegex =
        new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/, "gm");
    const isValidEmail = emailRegex.test("");
    console.log(isValidEmail);
    if (isValidEmail === false) {
        emailInput.style.borderColor = 'red';
        attentionStyle()
        error.style.display = 'block';
    } else {
        console.log('email validé');
    }
})