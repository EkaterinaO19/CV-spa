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