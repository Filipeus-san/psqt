#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { platform } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// ES modules náhrada za __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Detekce OS
const os = platform(); // 'win32', 'darwin', 'linux', ...

// Vybrání správného binárního souboru
let bin;
switch (os) {
  case 'win32':
    bin = path.join(__dirname, './bin/muj-prikaz-win.exe');
    break;
  case 'darwin':
    bin = path.join(__dirname, './bin/muj-prikaz-macos');
    break;
  case 'linux':
    bin = path.join(__dirname, './bin/psqt-linux');
    break;
  default:
    bin = null;
}

if (!bin || !existsSync(bin)) {
  console.error(`Unsupported operating system: ${os}`);
  process.exit(1);
}

// Spuštění binárního souboru s argumenty
const args = process.argv.slice(2);
const result = spawnSync(bin, args, { stdio: 'inherit' });

process.exit(result.status);
