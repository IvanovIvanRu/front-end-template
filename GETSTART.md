# Если хочешь создать такой проект самостоятельно, действую по этой инструкции. Если хочешь просто получить эту сборку, делай форк: https://github.com/DJChel/lesson4

## Шаг 1. Подготовка окружения

Перед стартом убедись, что на твоём компьютере установлена Node.js.

1. Создай новую папку для проекта (например, `my-vibe-project`) и открой её в редакторе кода (VS Code).

2. Открой терминал в этой папке и инициализируй проект, выполнив команду:

```bash
npm init -y

```

3. Установи Vite в качестве зависимости для разработки:

```bash
npm install vite --save-dev

```

---

## Шаг 2. Структура проекта

Создай в папке проекта следующую структуру файлов. Обрати внимание, что папка `src` будет содержать твой рабочий код, а `assets` — картинки:

```text
my-vibe-project/
├── node_modules/
├── src/
│   ├── assets/
│   │   └── logo.png      # Положи сюда любую картинку для теста
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── main.js
├── index.html
├── package.json
└── vite.config.js

```

---

## Шаг 3. Заполнение файлов

### 1. Конфигурация Vite (`vite.config.js`)

Создай этот файл в корне проекта. Он укажет сборщику правильно раскладывать картинки, стили и скрипты по папкам при финальной сборке, добавляя к ним уникальные хэши против кеширования:

```javascript
import { defineConfig } from 'vite';

export defineConfig({
  root: './', // Корень проекта, где лежит index.html
  build: {
    outDir: 'dist', // Папка, куда соберётся готовый сайт
    rollupOptions: {
      output: {
        // Задаем правила именования файлов с хэшем сборки [hash]
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').at(-1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = 'img';
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
});

```

### 2. Главная страница (`index.html`)

Создай файл в корне проекта. Мы подключаем стили и скрипты как **ES-модули** (`type="module"`), Vite сам разберётся с ними при сборке и добавит метки:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Мой Вайб-Проект</title>
    <link rel="stylesheet" href="./src/css/style.css" />
  </head>
  <body>
    <div id="app">
      <h1>Привет, фронтенд работает! 🚀</h1>
      <p>Измени этот текст в редакторе, и страница обновится сама.</p>

      <img id="logo" src="./src/assets/logo.png" alt="Логотип" />
    </div>

    <script type="module" src="./src/js/main.js"></script>
  </body>
</html>
```

### 3. Стили (`src/css/style.css`)

Добавим немного базовых стилей:

```css
body {
  font-family: sans-serif;
  background-color: #f0f4f8;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

#app {
  text-align: center;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

img {
  max-width: 150px;
  margin-top: 1rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
```

### 4. Скрипт (`src/js/main.js`)

В JS мы можем импортировать картинки напрямую, если захотим вставить их динамически, но пока просто проверим работу скрипта в консоли:

```javascript
console.log("JS успешно подключен и готов к работе!");

// Пример того, как можно импортировать картинку прямо в JS (Vite это умеет):
// import imgUrl from '../assets/logo.png';
// document.getElementById('logo').src = imgUrl;
```

---

## Шаг 4. Настройка команд в `package.json`

Открой файл `package.json`, найди там блок `"scripts"` и замени его на следующий:

```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}

```

---

## Как этим пользоваться?

### 🚀 Разработка (Локальный сервер + авторелоад)

В терминале проекта запусти команду:

```bash
npm run dev

```

Терминал выдаст тебе ссылку вида `http://localhost:5173/`. Открой её в браузере. Теперь меняй любой код в HTML, CSS или JS — страница в браузере будет мгновенно обновляться сама при нажатии Ctrl+S (Cmd+S).

### 📦 Сборка (Для выкатки на хостинг)

Когда сайт будет готов и ты захочешь перенести его на хостинг, выполни команду:

```bash
npm run build

```

Vite создаст в корне папку `dist`. Внутри неё будет чистый, оптимизированный HTML, а в папке `assets` будут лежать твои CSS, JS и картинки, но уже со специальными **хэш-метками в именах** (например, `main-C4b8Xz1a.js`).

Эти метки гарантируют, что как только ты обновишь сайт на хостинге, у твоих пользователей сразу загрузится новая версия, а старая не застрянет в кэше браузера! Распаковывай содержимое папки `dist` на хостинг — и проект готов.
