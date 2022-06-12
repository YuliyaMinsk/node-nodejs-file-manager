# node-nodejs-file-manager

Implement File Manager using Node.js APIs

# add file

Создает файл в текущей директории (по тз).

Пример вызова:
> add filename.txt

# delete file

Удаляет файл в текущей директории или по указанному пути.

Примеры вызова:
> rm /home/yuliya/filename.txt

> rm filename.txt

# rename file

Переименовывает файл из старого названия в новое. 
Старое имя файла можно указывать с путем к нему. Новое имя файла без пути.

Примеры вызова:
> rn myfolder/filewitholdname.txt filewithnewname.txt

# hash

Функция хеша принимает один аргумент - имя файла, можно вместе с путем к нему

Примеры вызова:
> hash /home/yuliya/filename.txt

> hash filename.txt

# compress and decompress

Функции compress и decompess принимают два аргумента. 
Первый аргумент - файл который нужно архивировать или дезархивировать, можно указывать вместе с путем к файлу.
Второй аргумент - папка куда поместить полученный файл.
Если не указать второй аргумент, то будет сжимать в текущую директорию.

Примеры вызова:
> compress /home/yuliya/filename.txt /home/yuliya/myfolder/

> decompress myfolder/filename.txt.br otherfolder
