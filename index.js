///Animation du menu en vue téléphone

const phoneMenu = document.getElementById('phone_menu_list')

function openMenu(){
    phoneMenu.style.transform = "translateX(0)"
}
function closeMenu(){
    phoneMenu.style.transform = "translateX(100%)"
}

//Apparition au défilement
//Pour cela l'utilisation d'une APi intégrée à la plupart des navigateurs est utilisé
//Le nom de l'APi est "Intersection Observer APi" pour vérifier lorsque l'élément est visible

const ratio = .1

const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleInterserct = function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.intersectionRatio > ratio) {
            entry.target.classList.add('reveal_true')
            observer.unobserve(entry.target)
        }
    })
}

const observer = new IntersectionObserver(handleInterserct, options)
document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r)
})