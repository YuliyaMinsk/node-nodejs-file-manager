# node-nodejs-file-manager

Implement File Manager using Node.js APIs

# help

Команда помогает получить помощь внутри приложения. Выводит список всех команд, с форматом и пояснениями какая команда что делает.

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

# copy file

Копирует файл из одной папки в другую, не удаляя его. Требует два аргумента.

Примеры вызова:
> cp /home/yuliya/myfolder/file.txt /home/yuliya

> cp myfolder/file.txt /home/yuliya

# move file

Работает как копирование, только удаляет исходный файл.

Примеры вызова:
> mv myfolder/file.txt /home/yuliya

# hash

Функция хеша принимает один аргумент - имя файла, можно вместе с путем к нему

Примеры вызова:
> hash /home/yuliya/filename.txt

> hash filename.txt

# compress and decompress

Функции compress и decompess принимают два аргумента. 
Первый аргумент - файл который нужно архивировать или дезархивировать, можно указывать вместе с путем к файлу.
Второй аргумент - папка (не файл!) куда поместить полученный файл.
Если не указать второй аргумент, то будет сжимать в текущую директорию.

Примеры вызова:
> compress /home/yuliya/filename.txt /home/yuliya/myfolder/

> decompress myfolder/filename.txt.br otherfolder
