# Proyecto: Juego de Memoria (Héroes y Villanos)

## Descripción
Utilizando los contenidos vistos en el curso, te proponemos crear un proyecto de **dos páginas** al igual que el programado en las clases. La primera debe presentar los datos necesarios de entrada del jugador y la segunda un juego sobre el que os damos una idea (Héroes y Villanos de Dragon Ball, Marvel, DC, etcétera). Puedes llevar más allá tu imaginación e inventarte el tuyo.

---

## 🛠️ Mínimos a desarrollar

1. **Estructura del proyecto**: Definir una estructura de directorios ordenada con `HTML`, `CSS`, `JS` e imágenes.
2. **Página de entrada del jugador**:
   - Logo inventado o buscado.
   - **Formulario** con los siguientes campos:
     - **Nick** de juego.
     - **Dificultad** del juego: baja, media o alta.
     - **Número de tarjetas**: 9, 16 o 25 (3x3, 4x4, 5x5).
     - **Avatar** del jugador relacionado con la temática elegida.
3. **Página de juego**: En el que se intentará emparejar tarjetas de personajes que correspondan a villanos y superhéroes:
   - En un primer momento todas las tarjetas están boca-abajo.
   - El jugador hace clic sobre dos tarjetas y se dan la vuelta. Dependiendo de la dificultad, el tiempo que las tarjetas estén visibles será mayor o menor.
   - **Contador de tiradas** que debe ser limitado dependiendo de la dificultad.
   - Las tarjetas que se emparejen quedarán al descubierto y se añadirá la puntuación.
   - El juego finaliza bien cuando el usuario empareja todas las cartas, o bien cuando se acaban las tiradas.
4. **Requisitos técnicos** (se debe usar en el proyecto como mínimo):
   - DOM + Eventos
   - API Drag & Drop
   - API LocalStorage
5. **Despliegue**: Publicación en **Github** del resultado final o en otro *site* donde sea accesible el resultado.

---

## ✅ Buenas prácticas

Por supuesto no te olvides de seguir unas buenas prácticas de código:

- Uso de los **comentarios**.
- Uso de las **tabulaciones** (correcta indentación).
- Uso de un **buen nombrado** para las clases e IDs.

---

## 🦸‍♂️ Conviértete en un superhéroe (Modificación del proyecto)

Añade a tu proyecto **artefactos y bombas** para darle una capa extra de profundidad:

- **En la página de entrada**: Incluye la posibilidad de que el jugador pueda elegir 1 o 2 **artefactos** que le puedan ayudar en el juego. *Ejemplos de artefactos: destapar todas las cartas un instante, destapar una pareja, añadir más turnos, etc.*
- **En el juego**: Se pueden añadir **bombas o dificultades** adicionales. *Ejemplos: calaveras que te hagan perder el juego directamente si se emparejan, elementos que barajen todo el panel, etc.*