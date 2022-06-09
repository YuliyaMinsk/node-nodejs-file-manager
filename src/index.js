import * as readline from 'node:readline';
import { getHomeDir, getArgValue } from './utils.js';
import { list } from './ls.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const currentDir = getHomeDir();

const argsArray = process.argv.slice(2);
const username = argsArray.length > 0 ? getArgValue(argsArray) : 'Anonymous';

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${currentDir}`);

rl.on('line', async (input) => {
  const command = input.split(' ')[0];
  switch (command) {
    case '.exit': {
      rl.close();
      break;
    }
    case 'up': {
      break;
    }
    case 'cd': {
      break;
    }
    case 'ls': {
      await list(currentDir);
    }
    case 'cat': {
      break;
    }
    case 'add': {
      break;
    }
    case 'rn': {
      break;
    }
    case 'cp': {
      break;
    }
    case 'mv': {
      break;
    }
    case 'rm': {
      break;
    }
    case 'hash': {
      break;
    }
    case 'compress': {
      break;
    }
    case 'decompress': {
      break;
    }
    case 'os': {
      break;
    }
    default: console.log(`Invalid input! Try again :)`);
  }
  console.log(`\nYou are currently in ${currentDir}`);
});

rl.on('SIGINT', () => rl.close());
rl.on('close', () => console.log(`Thank you for using File Manager, ${username}!`));

