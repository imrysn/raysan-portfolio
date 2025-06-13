let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section'); 
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ' ]').classList.add('active')
            })
        }
    })
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


const projectModal = document.getElementById('projectModal');
const closeButton = document.querySelector('.close-button');
const modalProjectName = document.getElementById('modal-project-name');
const modalProjectSnapshot = document.getElementById('modal-project-snapshot');
const modalProjectDescription = document.getElementById('modal-project-description');
const modalProjectTechnologies = document.getElementById('modal-project-technologies');
const modalGithubLink = document.getElementById('modal-github-link');
const modalLiveDemoLink = document.getElementById('modal-live-demo-link');

const projectItems = document.querySelectorAll('.project-item');

function openModal(project) {
    modalProjectName.textContent = project.dataset.projectName;
    modalProjectSnapshot.src = project.dataset.snapshotSrc;
    modalProjectDescription.textContent = project.dataset.projectDescription;
    modalProjectTechnologies.textContent = project.dataset.technologies;

    if (project.dataset.githubLink) {
        modalGithubLink.href = project.dataset.githubLink;
        modalGithubLink.classList.remove('hidden'); 
    } else {
        modalGithubLink.classList.add('hidden'); 
    }

    if (project.dataset.liveDemoLink) {
        modalLiveDemoLink.href = project.dataset.liveDemoLink;
        modalLiveDemoLink.classList.remove('hidden'); 
    } else {
        modalLiveDemoLink.classList.add('hidden'); 
    }

    projectModal.style.display = 'flex'; 
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    projectModal.style.display = 'none';
    document.body.style.overflow = 'auto'; 
}


projectItems.forEach(item => {
    item.addEventListener('click', () => openModal(item));
});

closeButton.addEventListener('click', closeModal);

window.addEventListener('click', (event) => {
    if (event.target == projectModal) {
        closeModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && projectModal.style.display === 'flex') {
        closeModal();
    }
});