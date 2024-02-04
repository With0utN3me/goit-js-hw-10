const form = document.querySelector("form")
let localStoragekey = "feedback-form-state";
let formData = {};
window.addEventListener("load", () => { 
    if (localStorage.getItem(localStoragekey) !== null ){
        let parsedData = JSON.parse(localStorage.getItem(localStoragekey));
        form.elements.email.value = parsedData.email ?? "";
        form.elements.message.value = parsedData.message ?? "";
    };
})

form.addEventListener("input", () => {
    formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    }
    localStorage.setItem(localStoragekey, JSON.stringify(formData));
});

form.addEventListener("submit", (evt) => {
    if(form.elements.email.value.trim() !== "" && form.elements.message.value.trim() !== ""){
        let parsedData = JSON.parse(localStorage.getItem(localStoragekey));
        evt.preventDefault();
        console.log(parsedData);
        localStorage.removeItem(localStoragekey);
        form.reset();
    }
    else{
        evt.preventDefault();
        alert("Please, fill all the inputs");
    }
});
