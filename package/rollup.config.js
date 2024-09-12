import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image'; 
import url from '@rollup/plugin-url';
import commonjs from '@rollup/plugin-commonjs';
import {terser} from 'rollup-plugin-terser';
import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';

export default [
    {
        input: './src/index.js',
        output: [
            {
                file: 'dist/index.js',
                format: 'cjs',
              },
              {
                file: 'dist/index.es.js',
                format: 'es',
                exports: 'named',
              }
        ],
        external: ['react', 'react-dom'],
        plugins: [
            postcss({
                plugins: [],
                minimize: true
            }),
            babel({
                babelHelpers: 'bundled',
                presets: ['@babel/preset-env', '@babel/preset-react'], 
                exclude: 'node_modules/**',
            }),
            external(),
            resolve(),
            image(),
            terser(),
            url({
                limit: 0,                    
                include: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg'], 
                emitFiles: true,         
                fileName: '[name][hash][ext]', 
              }),
              copy({
                targets: [
                  { src: 'src/assets/*', dest: 'dist/assets' }  // Copies images to 'dist/assets' folder
                ]
              }),
            commonjs(),  
        ]
    }
]