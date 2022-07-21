// links

const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(e => e.classList.remove('active'));
        link.classList.add('active');
    })
});

// dinamic cards projects

const projectContainer = document.querySelector('.project-container');

projects.forEach(p => () => {
    projectContainer.innerHTML += `
    <div class="project-card">
    <img src=".img/${p.image}" alt="">
    <div class="content">
        <h1 class="project-name">${p.name}</h1>
        <span class="tags"></span>
    </div>
</div>
    `;
})

// contact form
const contactBtn = document.querySelector('.contact-btn');
const firstName = document.querySelector('.first-name')
const lastName = document.querySelector('.last-name')
const email = document.querySelector('.email')
const msg = document.querySelector('.message')

contactBtn.addEventListener('cliick', () => {
    if(firstName.ariaValueMax.length && lastName.ariaValueMax.length && 
        email.ariaValueMax.length && msg.ariaValueMax.length) {
            fetch('/mail', {
                method: 'post',
                header: new Headers({'Content-Type': "application/json"}),
                body: JSON.stringify({
                    firstname: firstName.value,
                    lasttname: lastName.value,
                    email: email.value,
                    msg: msg.value,
                })
            }) 
            .then(res => res.json())
            .then(data => {
                alert(data)
            })
        }
})