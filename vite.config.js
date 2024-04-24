// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import viteTsconfigPaths from 'vite-tsconfig-paths';
// import svgrPlugin from 'vite-plugin-svgr';
// import eslint from 'vite-plugin-eslint';

// // https://vitejs.dev/config/
// export default defineConfig({
//     plugins: [
//         react(),
//         eslint({
//             emitWarning: true,
//             emitError: true,
//             failOnError: true,
//         }),
//         viteTsconfigPaths(),
//         svgrPlugin(),
//     ],
// });

import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
    },
})