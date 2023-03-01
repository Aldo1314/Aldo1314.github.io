const $form =  document.querySelector('#form');
const $buttonMailto =  document.querySelector('#m-mail');

$form.addEventListener('submit' , handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form = new FormData(this);
    $buttonMailto.setAttribute('href', `mailto:aldoivancarp01fa@gmail.com?subject=${form.get('email')}&body=${form.get('message')}`)
    $buttonMailto.click()
}