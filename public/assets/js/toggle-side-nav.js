function darken_screen(yesno)
{
    if(yesno == true){
        document.querySelector('.screen-darken').classList.add('active')
    }
    else if(yesno == false){
        document.querySelector('.screen-darken').classList.remove('active')
    }
}

function close_offcanvas()
{
    darken_screen(false)
    if(document.querySelector('.mobile-offcanvas').classList.contains('show'))
    {
        document.querySelector('.mobile-offcanvas').classList.remove('show')
    }
    
    document.body.classList.remove('offcanvas-active')
}

function show_offcanvas(offcanvas_id)
{
    darken_screen(true)
    document.getElementById(offcanvas_id).classList.add('show')
    document.body.classList.add('offcanvas-active')
}

document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll('[data-trigger]').forEach(function(everyElement){
        let offcanvas_id = everyElement.getAttribute('data-trigger');
        everyElement.addEventListener('click', function(e){
            e.preventDefault()
            show_offcanvas(offcanvas_id)
        })
    })

    document.querySelectorAll('.btn-close').forEach(function(everyButtton){
        everyButtton.addEventListener('click', function(e){
            close_offcanvas()
        })
    })

    document.querySelector('.screen-darken').addEventListener('click', function(e){
        close_offcanvas()
    })
})