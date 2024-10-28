const sendEmail = async(json) => {
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            body:json
        });

        return response;
    } catch(error){
        console.log(error);
        result.innerHTML = "Sorry, your email couldn't be sent";
    }
};

document.getElementById("contact-form").onsubmit = async(x) => {
    console.log("Hello");
    x.preventDefault();
    const json = JSON.stringify(Object.fromEntries(new FormData(x.target)));
    const result = document.getElementById("result");
    result.innerHTML = "Sending...";

    const httpResult = await sendEmail(json);

    if(httpResult.status == 200){
        result.innerHTML = "Form successfully submitted";
    } else {
        result.innerHTML = "Sorry, your email wasn't sent";
    }
}