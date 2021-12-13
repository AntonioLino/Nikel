const myModal = new bootstrap.Modal("#register-modal");
let logged =  sessionStorage.getItem("logged");
const session =  localStorage.getItem("session");

checkLogged();

//Logar no sistema
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const checkSession = document.getElementById("session-check").checked;

    const account = getAccount(email);

    if (!account) {
        alert("Ops! Verifique o usuário ou a senha");
        return;
    }

    if (account) {
        if (account.password !== password) {
            alert("Ops! Verifique o usuário ou a senha");
            return;
        }
        saveSessin(email, checkSession);
        window.location.href = "home.html";
    }

});

// Criar conta
document.getElementById("create-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.getElementById("email-create-input").value;
    const password = document.getElementById("password-create-input").value;

    if (email.length < 5) {
        alert("Preencha o campo com e-mail válido");
        return;
    }

    if (password.length < 4) {
        alert("Preencha a senha com no mínimo 4 dígitos");
        return;
    }

    saveAccount({
        login : email,
        password: password,
        transactions: []
    });
    myModal.hide();
    alert("Conta criada com sucesso.");

})

function checkLogged() {
    if (session) {
        sessionStorage.getItem("logged", session);
        logged = session;
    }

    if (logged) {
        saveSessin(logged, session);
        window.location.href = "home.html";
    }
}

function saveAccount(data) {
    localStorage.setItem(data.login, JSON.stringify(data));
}

function saveSessin(data, saveSessin) {
    if (saveSessin) {
        localStorage.setItem("session", data);
    }
    
    sessionStorage.setItem("logged", data);
}

function getAccount(key) {
    const account = localStorage.getItem(key);

    if (account) {
        return JSON.parse(account);
    }
    return "";
}
