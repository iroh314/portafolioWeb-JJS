//Se crea controles en js para interactividad en la pagina, solo aplica para section
const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

//Se crea funcion para que al momento de dar click en los botones cambie de color y solo se active diche boton(botones de menu)
function PageTransition(){
    //Ciclo para activar cada boton de forma independiente
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Se activan las section del body, con un escuchador de eventos
    allSections.addEventListener('click', (e)=>{
        //Se verifica que sirve al dar click en cada boton del menu y que me llevara a la seccion correcta del portafolio console.log(e.target)
        //Se crea constante para que al momento de dar click en los botones del menu, solo muestre el contenido de esa seccion
        const id = e.target.dataset.id;
        if(id){

            sectBtns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //Ocultar otras secciones
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}
//Se llama la función 
PageTransition();