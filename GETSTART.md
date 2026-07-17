# Вариант 2. Создание сборки с нуля

Если нужна пошаговая инструкция по созданию такой сборки самостоятельно, следуйте ниже.

## 1. Подготовка окружения

Убедитесь, что на компьютере установлена Node.js.

1. Создайте новую папку проекта и откройте её в редакторе.
2. Инициализируйте npm:

```bash
npm init -y
```

3. Установите Vite:

```bash
npm install vite --save-dev
```

---

## 2. Структура проекта

Создайте такую структуру:

```text
my-project/
├── src/
│   ├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── fonts/
├── index.html
├── package.json
└── vite.config.js
```

---

## 3. Создайте основные файлы

### `vite.config.js`

```javascript
import { defineConfig } from "vite";

export default defineConfig({
  root: "./",
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".").at(-1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "img";
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
      },
    },
  },
});
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Мой проект</title>
    <link rel="stylesheet" href="./src/css/style.css" />
  </head>
  <body>
    <h1>Привет, фронтенд работает!</h1>
    <script type="module" src="./src/js/main.js"></script>
  </body>
</html>
```

### `src/css/style.css`

```css
body {
  font-family: sans-serif;
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

### `src/js/main.js`

```javascript
console.log("JS подключён успешно");
```

---

## 4. Настройка команд в `package.json`

Добавьте в `scripts` следующие команды:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

---

## 5. Запуск и сборка

### Разработка

```bash
npm run dev
```

### Сборка для продакшена

```bash
npm run build
```

После сборки готовые файлы появятся в папке `dist`.
