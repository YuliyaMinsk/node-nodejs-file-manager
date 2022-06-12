# node-nodejs-file-manager

Implement File Manager using Node.js APIs

# add file

Создает файл в текущей директории (по тз).

Пример вызова:
> add fff.txt

# delete file

Примеры вызова:
> rm /home/yuliya/fff.txt

> rm fff.txt

# hash

Функция хеша принимает один аргумент - имя файла, можно вместе с путем к нему

Примеры вызова:
> hash /home/yuliya/fff.txt

> hash fff.txt

# compress and decompress

Функции compress и decompess принимают два аргумента. 
Первый аргумент - файл который нужно архивировать или дезархивировать, можно указывать вместе с путем к файлу.
Второй аргумент - папка куда поместить полученный файл.
Если не указать второй аргумент, то будет сжимать в текущую директорию.

Примеры вызова:
> compress /home/yuliya/fff.txt /home/yuliya/ggg/

> decompress ggg/fff.txt.br Downloads
