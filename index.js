(function(){

    let test = document.getElementById('test')

    test.addEventListener('click', () => {
        console.log('here')
        document.querySelector('.modalParent').style.display = 'block'
    })

    function handleClickFunction() {
        console.log('hello')
    }
    
    function handleButtonClicked(e) {
        console.log(e.target.id)
    }
})()

