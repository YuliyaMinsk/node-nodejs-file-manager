import { EOL, cpus, homedir, userInfo, arch } from 'os';

export const os = async (command) => {
  try {

    if (command.length > 1) {
      throw new Error('Invalid command arguments!');
    }

    switch (command[0]) {
      case '--EOL': {
        console.log('EOL: ' + JSON.stringify(EOL));
        break;
      }
      case '--cpus': {
        console.log('Number of CPU cores: ' + cpus().length);
        console.table(cpus());
        break;
      }
      case '--homedir': {
        console.log('Homedir: ' + homedir());
        break;
      }
      case '--username': {
        console.log('Username: ' + userInfo().username);
        break;
      }
      case '--architecture': {
        console.log('Architecture: ' + arch());
        break;
      }

      default: console.log(`Invalid command arguments! Try again :)`);
    }
    
  }
  catch(err) {
    console.error('Operation failed. ' + err.message);
  }
};
