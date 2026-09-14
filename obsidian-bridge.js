const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const VAULT_PATH = 'C:\\Users\\Admin\\Documents\\Obsidian Vault';

const COMMAND = process.argv[2] || 'status';
const ARG = process.argv[3];

function checkVault() {
  if (!fs.existsSync(VAULT_PATH)) {
    console.error(`Error: Vault not found at ${VAULT_PATH}`);
    process.exit(1);
  }
}

function getFilesRecursively(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file.startsWith('.')) continue; // ignore .obsidian etc
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getFilesRecursively(fullPath, fileList);
    } else {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

switch (COMMAND) {
  case 'status': {
    checkVault();
    console.log(`\n========================================`);
    console.log(`Obsidian Vault Bridge Status`);
    console.log(`Location: ${VAULT_PATH}`);
    console.log(`========================================`);

    const files = getFilesRecursively(VAULT_PATH);
    const mdFiles = files.filter(f => f.endsWith('.md'));
    const attachments = files.filter(f => !f.endsWith('.md'));

    console.log(`Total Markdown Notes: ${mdFiles.length}`);
    console.log(`Total Attachments:    ${attachments.length}\n`);

    const categories = ['Profile', 'Experience', 'Projects/Commercial', 'Projects/Web & Tools', 'Skills'];
    categories.forEach(cat => {
      const catDir = path.join(VAULT_PATH, ...cat.split('/'));
      if (fs.existsSync(catDir)) {
        const catFiles = fs.readdirSync(catDir).filter(f => f.endsWith('.md'));
        console.log(`📁 ${cat.padEnd(25)}: ${catFiles.length} notes`);
        catFiles.forEach(f => console.log(`   - ${f}`));
      }
    });

    console.log(`\n[OK] Bridge is active and synchronized.`);
    break;
  }

  case 'list': {
    checkVault();
    const files = getFilesRecursively(VAULT_PATH).filter(f => f.endsWith('.md'));
    console.log(`\nNotes in Obsidian Vault (${files.length}):`);
    files.forEach(f => {
      const rel = path.relative(VAULT_PATH, f);
      console.log(` - [[${rel.replace(/\\/g, '/').replace('.md', '')}]]`);
    });
    break;
  }

  case 'read': {
    checkVault();
    if (!ARG) {
      console.error('Usage: node obsidian-bridge.js read <noteName>');
      process.exit(1);
    }
    const files = getFilesRecursively(VAULT_PATH).filter(f => f.endsWith('.md'));
    const match = files.find(f => path.basename(f, '.md').toLowerCase() === ARG.toLowerCase() || path.relative(VAULT_PATH, f).toLowerCase().includes(ARG.toLowerCase()));
    if (!match) {
      console.error(`Note matching "${ARG}" not found in vault.`);
      process.exit(1);
    }
    console.log(`\n--- [${path.relative(VAULT_PATH, match)}] ---\n`);
    console.log(fs.readFileSync(match, 'utf-8'));
    break;
  }

  case 'open': {
    exec(`start "" "C:\\Program Files\\Obsidian\\Obsidian.exe"`, (err) => {
      if (err) console.error('Failed to open Obsidian:', err);
      else console.log('Opened Obsidian.');
    });
    break;
  }

  default:
    console.log('Available commands: status, list, read <name>, open');
}
