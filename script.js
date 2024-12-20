const sections = document.querySelectorAll('.section');
const controls = document.querySelectorAll('.control'); 


controls.forEach(link => {
    link.addEventListener('click', function () {
        controls.forEach(control => {
            control.classList.remove('active-btn');
        });
        

        this.classList.add('active-btn');


        const id = this.getAttribute('data-id');
        sections.forEach(section => {
            section.classList.remove('active'); 
        });
        document.getElementById(id).classList.add('active'); 
    });
});
