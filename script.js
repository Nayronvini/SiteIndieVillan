import { supabase } from "./supabase.js";

// 🔹 REGISTRO DE USUÁRIO
if (document.getElementById("register-form")) {
    document
        .getElementById("register-form")
        .addEventListener("submit", async function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value; // Now used, but not stored
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Criar usuário no Supabase Auth
            const { error } = await supabase.auth.signUp({
                email: email,
                password: password,
                options: {
                    data: {
                        name: name, // Store additional metadata
                    },
                },
            });

            if (error) {
                document.getElementById("message").innerText = "Erro: " + error.message;
                return;
            }

            // Redireciona para login após registro
            document.getElementById("message").innerText =
                "Registro bem-sucedido! Redirecionando...";
            setTimeout(() => {
                window.location.href = "login.html";
            }, 2000);
        });
}

// 🔹 LOGIN DE USUÁRIO
if (document.getElementById("login-form")) {
    document
        .getElementById("login-form")
        .addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) {
                document.getElementById("message").innerText = "Erro: " + error.message;
                return;
            }

            // Redireciona para a página principal
            document.getElementById("message").innerText =
                "Login bem-sucedido! Redirecionando...";
            setTimeout(() => {
                window.location.href = "dashboard.html";
            }, 2000);
        });
}

// 🔹 LOGOUT DE USUÁRIO
if (document.getElementById("logout")) {
    document
        .getElementById("logout")
        .addEventListener("click", async function () {
            const { error } = await supabase.auth.signOut();
            if (error) {
                console.error("Erro ao fazer logout:", error);
            }
            window.location.href = "login.html"; // Redireciona para login após sair
        });
}
