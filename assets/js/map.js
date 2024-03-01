document.addEventListener("DOMContentLoaded", (Event) =>{
    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `<iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16436.515800908703!2d-4.645900027258192!3d36.54473328744724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72e224bfc13a2d%3A0xa33b26b775f926f0!2sMijas%20Costa%2C%2029651%20Las%20Lagunas%20de%20Mijas%2C%20M%C3%A1laga!5e0!3m2!1ses-419!2ses!4v1708942154664!5m2!1ses-419!2ses"></iframe>`;
    }, 1000);
   
});