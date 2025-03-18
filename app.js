
let buttons = document.querySelectorAll('.ourProducts .product-card button')

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
}

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        scrollToContact();
    })
})

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    const mailBody = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;

    window.open(`mailto:your-email@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(mailBody)}`);

    document.getElementById('successMessage').style.display = 'block';
    this.reset();
});