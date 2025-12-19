import { readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const distPath = resolve(process.cwd(), 'dist');
const indexPath = resolve(distPath, 'index.html');

// Lire le fichier HTML généré par Vite
let html = readFileSync(indexPath, 'utf-8');

// Rendre l'application React en HTML
const appHtml = renderToString(<App />);

// Injecter le HTML rendu dans le div root
html = html.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

// Écrire le fichier HTML mis à jour
writeFileSync(indexPath, html);

console.log('✅ Pré-rendu HTML généré avec succès!');
