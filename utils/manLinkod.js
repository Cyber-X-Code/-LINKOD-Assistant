const manText = [
    "Привет! Я бот [LINKOD].",
    "В моей базе знаний имеется множество команд по работе с Linux. Что бы узнать, как работать с той или иной командой, напишите <linkod команда и имя_команды>, например;",
    "",
    "linkod команда ls", 
    "",
    "и я вам выдам справку как работать с этой командой. Далее команды разделены по их назначению, для наиболее удобной сортировки:",
    "",
    "Пользователи:",
    "1 Id - Подробная информация о пользователе (uid, gid и группа)",
    "2 last - Список информации о последних входах в систему, включая время, имя пользователя, ip-адрес и длительность сеанса",
    "3 who - Просмотр авторизованных пользователей",
    "4 groupadd testgroup - Создает группу с именем testgroup",
    "5 adduser NewUser - Добавляет пользователя с именем NewUser",
    "6 userdel NewUser - Удаляет пользователя с именем NewUser",
    "7 usermod NewUser - изменяет информацию о пользователе NewUser",
    "",
    "Навигация по каталогам:",
    "1 cd /. - Переход в основной каталог",
    "2 cd - Переход в домашний каталог (переменная $HOME)",
    "3 cd /root - Переход в каталог /root",
    "4 cd .. - Переход на один уровень ниже",
    "5 cd .ssh - Переход в скрытую папку .ssh",
    "",
    "Работа с файлами:",
    "1 ls -al – Показывает файлы и каталоги в текущей папке",
    "2 pwd - Отображает текущий рабочий каталог",
    "3 mkdir NewFolder - Создает новый каталог с именем NewFolder",
    "4 rm NewFile - Удаляет файл с именем NewFile",
    "5 rm -f NewFile - Принудительное удаление файла с именем NewFile",
    "6 rm -r NewFolder - Рекурсивно удаляет каталог с именем NewFolder",
    "7 rm -rf NewFolder - Принудительное удаление каталога с именем NewFolder рекурсивно",
    "8 cp oldfile1 newfile2 - Копирует содержимое oldfile1 в newfile2",
    "9 cp -r olddir1 newdir2 - Рекурсивно копирует каталог olddir1 в newdir2. Dir2 будет создан, если он не существует.",
    "10 mv oldfile1 newfile2 - Переименовывает oldfile1 в newfile2",
    "11 ln -s /etc/log/file logfile - Создает ярлык на файл",
    "12 touch newfile - Создает пустой файл с именем newfile",
    "13 cat > newfile - Помещает STDIN в newfile",
    "14 more newfile - Выводит содержимое newfile по частям",
    "15 head newfile - Выводит первые 10 строк файла newfile",
    "16 tail newfile - Вывод последних 10 строк newfile",
    "17 gpg -c newfile - Шифрует newfile в формат gpg с помощью пароля и сохраняет его в том же каталоге.",
    "18 gpg newfile.gpg – Расшифровывает gpg файл",
    "19 wc newfile - Выводит количество байт, слов и строк нового файла.",
    "",
    "Права доступа к файлам/каталогам:",
    "1 chmod 777 /root/ssh - устанавливает права rwx(чтение, запись, выполнение) на файл ssh для всех, кто имеет доступ к серверу (владелец, группа, другие)",
    "2 chmod 755 /root/ssh - Настраивает разрешения rwx для владельца и r_x для группы и других.",
    "3 chmod 766 /root/ssh - Устанавливает права rwx для владельца и rw для группы и других.",
    "4 chown newuser newfile - Меняет владельца newfile на newuser",
    "5 chown newuser:newgroup newfile - Изменяет владельца и группу-владельца для newfile на newuser и newgroup",
    "6 chown newuser:newgroup newfolder - Меняет владельца и группу-владельца каталога newfolder на newuser и newgroup",
    "7 stat -c %U %G newfile - отображает владельцев пользователей и групп newfile",
    "",
    "Поиск:",
    "1 grep searchargument newfile - Поиск аргумента searchargument в newfile",
    "2 grep -r searchargument newfolder - рекурсивно просматривает все файлы в папке newfolder на наличие поискового аргумента",
    "3 locate newfile - Показывает все местоположения нового файла",
    "4 find /etc/ -name searchargument - Находит файлы с именем, начинающимся с searchargument, в каталоге /etc",
    "5 find /etc/ -size +50000k - Найти файлы размером более 50000k в каталоге /etc.",
    "",
    "Архивирование:",
    "1 tar -cf archive.tar newfile - Создать архив 'archive.tar' из файла 'newfile'",
    "2 tar -xf archive.tar - Распаковать файл 'archive.tar'",
    "3 tar -zcvf archive.tar.gz /var/log/ - Создать архив из каталога /var/log",
    "4 gzip newfile - Сжать новый файл (он будет иметь расширение .gz)",
    "",
    "Установка программ из пакетов:",
    "1 rpm -i pkg_program.rpm - Устанавливает пакет rpm (CentOS, RHEL...)",
    "2 rpm -e pkg_name - Удаляет пакет rpm (CentOS, RHEL...)",
    "3 dnf install pkg_name - Устанавливает пакет с помощью dnf из репозитория. Ранее использовался YUM, но недавно YUM был заменен на DNF. (CentOS, RHEL...)",
    "4 dpkg -i pkg_name - Установка из deb-пакета (Debian, Ubuntu, Mint...)",
    "5 dpkg -r pkg_name - Удаляет deb-пакет (Debian, Ubuntu, Mint...)",
    "6 apt install pkg_name - Устанавливает пакет из репозитория (Debian, Ubuntu, Mint...)",
    "7 apt remove pkg_name - Удаляет пакет (Debian, Ubuntu, Mint...)",
    "8 apt upgrade && apt update - Обновление пакетов в системе (Debian, Ubuntu, Mint...) и последующее обновление репозиториев.",
    "",
    "Процессы:",
    "1 ps - Выводит текущие запущенные процессы",
    "2 ps aux | grep 'bash' - Найти идентификатор процесса 'bash'",
    "3 pmap -x 11 - Сопоставить процесс с PID = 11 в памяти процесса",
    "4 top - Показывает все запущенные процессы",
    "5 kill pid - Завершить процесс по pid",
    "6 killall process - Завершить все процессы с именем 'process'",
    "7 pkill process-name - Послать сигнал процессу",
    "8 bg - Отправить приостановленный процесс на фоновое выполнение",
    "9 fg - Вывести запущенный процесс из фона",
    "10 fg process - Вывести процесс с именем 'process' из фонового режима",
    "11 lsof – Показать списки файлов, которые используют процессы",
    "12 renice 19 PID - Устанавливает самый низкий приоритет процесса",
    "13 pgrep bash - найти идентификатор процесса bash",
    "14 pstree - Показывает древовидное представление процессов",
    "",
    "Система:",
    "1 uname - Показать информацию о системе",
    "2 uname -r - Показывает информацию о ядре Linux",
    "3 uptime - Продолжительность работы системы и средняя загрузка",
    "4 hostname - Показывает имя хоста",
    "5 hostname -i - Показывает IP-адрес хоста",
    "6 last reboot - Показывает историю перезагрузок",
    "7 date - Показывает дату и время",
    "8 timedatectl - Выводит и изменяет дату и время",
    "9 cal - Выводит календарь",
    "10 w - Отображает пользователей, работающих в системе",
    "11 whoami - Отображает ваше имя пользователя",
    "12 finger root - Показывает информацию о пользователе root. Требуется установка с помощью apt-get install finger",
    "",
    "Аппаратное обеспечение:",
    "1 dmesg - Отображает системные сообщения при загрузке системы",
    "2 cat /proc/cpuinfo - Показывает информацию о процессоре",
    "3 cat /proc/meminfo - Показывает информацию об оперативной памяти",
    "4 lshw - Показывает информацию об устройствах",
    "5 lsblk - Показать информацию о жестком диске",
    "6 free -m - Освобождает память: RAM и swap (переключатель -m в MB)",
    "7 lspci -tv - Показывает информацию об устройствах PCI в виде дерева",
    "8 lsusb -tv - Отображает USB-устройства в древовидном виде.",
    "9 dmidecode - Показывает информацию об устройствах BIOS",
    "10 hdparm -i /dev/xda - Показывает информацию о диске",
    "11 hdparm -tT /dev/xda - Показывает скорость чтения и записи xda",
    "12 badblocks -s /dev/xda - Показывает тест на наличие битых секторов",
    "",
    "Использование диска:",
    "1 df -h - Показывает свободное пространство на смонтированных разделах (в байтах)",
    "2 df -i - Показывает свободные inodes в файловой системе",
    "3 fdisk -l - Показывает информацию о диске, разделах и файловой системе",
    "4 du -sh - Отображает нераспределенное пространство на смонтированных разделах в MB, GB, TB",
    "5 findmnt - Отображает все точки монтирования",
    "6 mount /dev/sdb1 /mnt - Монтирует раздел 1 диска sdb в /mnt",
    "",
    "Сеть:",
    "1 ip addr show - Показывает IP-адреса всех доступных сетевых интерфейсов",
    "2 ip address add 192.168.0.1/24 dev eth0 - Присваивает адрес 192.168.0.1 интерфейсу eth0",
    "3 ifconfig - Показывает IP-адреса всех доступных сетевых интерфейсов",
    "4 ping 192.168.0.1 - Отправляет запрос по протоколу ICMP для подключения к узлу 192.168.0.1.",
    "5 whois domain - Показывает информацию о доменном имени",
    "6 dig domain - Получает информацию DNS о домене",
    "7 dig -x 192.168.0.1 - Инвертирует разрешение имен",
    "8 host serverspace.us - Резолвит адрес хоста",
    "9 hostname -I - Показывает локальные адреса",
    "10 wget имя_файла(ссылка на файл) - Загружает файл",
    "11 netstat -pnltu - Показывает все порты, прослушиваемые на хосте (требуется apt-get install net-tools)",
    "",
    "Удаленное подключение:",
    "1 ssh root@host - Подключение к удаленному хосту по ssh от имени root",
    "2 ssh -p port_number user@host - Подключается к удаленному хосту, если используется порт ssh, отличный от 22.",
    "3 ssh host - Использует соединение по умолчанию в качестве текущего пользователя",
    "4 telnet host - Использует соединение telnet (порт 23)"
];

module.exports = manText;
