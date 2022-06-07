import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

export const getPath = (url, filename) => {
  const currentDir = dirname(fileURLToPath(url));
  const filePath = join(currentDir, filename);

  return filePath;
};
