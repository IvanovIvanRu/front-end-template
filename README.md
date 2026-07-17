# 🚀 Шаблон фронтенд-сборки на Vite

Этот репозиторий содержит минималистичную фронтенд-сборку на Vite для работы с HTML, CSS, JavaScript и статическими файлами.

## Вариант 1. Установить эту сборку

Если нужен готовый шаблон для старта, сделайте следующее:

1. Склонируйте репозиторий или скачайте его архивом.
2. Откройте папку проекта в терминале и установите зависимости:

```bash
npm install
```

3. Запустите локальный сервер:

```bash
npm run dev
```

4. Для финальной сборки выполните:

```bash
npm run build
```

Готовые файлы появятся в папке `dist`.

### Что уже есть в сборке

- `index.html` — точка входа
- `vite.config.js` — конфигурация сборки
- `src/` — исходники проекта
  - `src/assets/` — изображения
  - `src/css/style.css` — стили
  - `src/js/main.js` — JavaScript
  - `src/fonts/` — локальные шрифты

---

## Вариант 2. Создать такую сборку с нуля

Подробная пошаговая инструкция находится в [GETSTART.md](GETSTART.md).

Кратко процесс выглядит так:

1. Создайте папку проекта и инициализируйте npm:

```bash
npm init -y
```

2. Установите Vite:

```bash
npm install vite --save-dev
```

3. Создайте базовую структуру:

```text
src/
  assets/
  css/style.css
  js/main.js
  fonts/
index.html
vite.config.js
package.json
```

4. Добавьте скрипты в `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

5. Запустите проект:

```bash
npm run dev
```

---

## Работа с изображениями и шрифтами

В этой сборке можно подключать:

1. Изображения через HTML:

```html
<img src="./src/assets/logo.png" alt="Логотип" />
```

2. Изображения через JavaScript:

```javascript
import logoUrl from "../assets/logo.png";
document.getElementById("my-img").src = logoUrl;
```

3. Локальные шрифты через CSS и папку `src/fonts`:

```css
@font-face {
  font-family: "MyFont";
  src: url("../fonts/MyFont.woff2") format("woff2");
}
```
