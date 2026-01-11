# 🎯 Adivina el Número

Mini juego interactivo desarrollado con **HTML, CSS y JavaScript** donde el usuario debe adivinar un número secreto entre **1 y 10**.  
El juego ofrece pistas dinámicas, control de intentos y una experiencia de usuario limpia y moderna.

---

## 🕹️ ¿Cómo funciona?

1. El sistema genera un número aleatorio entre **1 y 10**
2. El usuario ingresa un número
3. Al presionar **Revelar**:
   - ✅ Si acierta → gana el juego
   - 🔼 Si el número es menor → pista: _es más alto_
   - 🔽 Si el número es mayor → pista: _es más bajo_
4. Cada error suma un intento fallido
5. Si el número ingresado no es válido:
   - Se muestra un mensaje dentro de la app
   - No se suman intentos
   - Se ocultan los datos innecesarios
6. El botón **Otra vez!** reinicia el juego completamente

---

## ✨ Características

- ✔️ Generación de número aleatorio
- ✔️ Validación de input sin `alert()`
- ✔️ Sistema de pistas dinámicas
- ✔️ Contador de intentos fallidos
- ✔️ Botón de reinicio
- ✔️ Feedback visual con CSS
- ✔️ Interfaz centrada y responsive
- ✔️ UX clara y profesional

---

## 🧠 Tecnologías utilizadas

- **HTML5** – estructura
- **CSS3 (Flexbox)** – diseño y layout
- **JavaScript (Vanilla)** – lógica del juego y DOM

---

## 📂 Estructura del proyecto

/adivina-el-numero
│
├── index.html
├── style.css
├── javascript.js
└── README.md

---

## 🚀 Objetivo del proyecto

Este proyecto fue creado con fines **educativos**, para practicar:

- Manipulación del DOM
- Eventos en JavaScript
- Validaciones de formularios
- Manejo de estado
- Buenas prácticas de UX
- Separación de responsabilidades (HTML / CSS / JS)

---

## 🔮 Posibles mejoras futuras

- Limitar cantidad de intentos
- Mostrar historial de números ingresados
- Guardar récord en `localStorage`
- Agregar animaciones
- Versión en React o Flutter

---

## 👨‍💻 Autor

**Lautaro López**  
Estudiante de 2do año de Tecnicatura Universitaria En Programacion A Distancia UTN...
Desarrollador Backend / Frontend  
Proyecto realizado como práctica de lógica y JavaScript.

---

⭐ Si te gustó este proyecto, ¡no olvides darle una estrella!
