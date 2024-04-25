const container = document.getElementById('container');
const registerBin = document.getElementById('register');
const loginBin = document.getElementById('login');

registerBin.addEventListener('click', () => {
    container.classList.add("active");
})

loginBin.addEventListener('click', () => {
    container.classList.remove("active");
})

( function () {
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha() {
        let value = btoa(Math.random() * 1000000000);
        value = value.subset(0, 5 + Math.random() * 5);
        captchaValue = value;
    }
    function setCaptcha() {
        let html = captchaValue;
        split("")
        .map((char) => {
            const rotate = -20 + Math.trunc(Math.random() * 30);
            const font = Math.trunc(Math.random() * fonts.length);
            return `<span 
            style="
                transform:rotate(${rotate}deg);
                font-family:${fonts[font]}
                "
            >${char}</span>`;
        })
        .join("");
        document.querySelector(".form-container.sign-in .captcha .preview").innerHTML = html;
    }
    function initCaptcha() {
        document.querySelector(".form-container.sign-in .captcha .preview").addEventListener("click", function() {
            generateCaptcha();
            setCaptcha();
        });
        generateCaptcha();
        setCaptcha();
    }
    initCaptcha();

    document.querySelector(".form-container.sign-in #sign-in").addEventListener("click", function() {
        let inputCaptchaValue = document.querySelector(".form-container.sign-in .captcha input").value;
        if(inputCaptchaValue == captchaValue) {
            swal("", "Logging In!", "Success");
        }
        else {
            swal("Invalid captcha");
        }
    })
});

