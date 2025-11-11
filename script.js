// Configuração do Firebase (troque pelos seus dados do console do Firebase)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCsJxghbMCjWoZBwYpu5cnmLe7DEIKHhdc",
  authDomain: "seguraca1app.firebaseapp.com",
  projectId: "seguraca1app",
  storageBucket: "seguraca1app.firebasestorage.app",
  messagingSenderId: "977355627951",
  appId: "1:977355627951:web:7d25fda5964d721463635a",
  measurementId: "G-MKP19W0XX3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.login = function() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  signInWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Login realizado com sucesso!";
      setTimeout(() => alert("Bem-vindo!"), 800);
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
};

window.cadastro = function() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  createUserWithEmailAndPassword(auth, email, senha)
    .then(() => {
      document.getElementById("msg").innerText = "Cadastro feito com sucesso!";
    })
    .catch((error) => {
      document.getElementById("msg").innerText = "Erro: " + error.message;
    });
};
