import { defineConfig } from 'vite';

export default defineConfig({
    root: './', // Корень проекта, где лежит index.html
    build: {
        outDir: 'dist', // Папка, куда соберётся готовый сайт
        rollupOptions: {
            output: {
                // Правила именования файлов с хэшем сборки [hash]
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