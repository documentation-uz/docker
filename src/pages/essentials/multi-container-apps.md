# Multi container apps

Shu darsgacha biz faqat bitta containerdan iborat proyektlar bilan ishlab ko'rdik. Endi biz MySQL ma'lumotlar bazasidan
foydalanmoqchimiz? Xo'sh uni proyektimiz bilan bitta konteynerda ishga tushirgan yaxshimi yoki uning uchun alohida
konteyner ochish kerakmi?

Eng yaxshi yechim albatta, MySQL uchun ham alohida konteyner ochish. Bu ayniqsa, har bir konteynerga alohida
yondashishni osonlashtiradi.

![...](https://docs.docker.com/get-started/images/multi-app-architecture.png)

## Container networking

E'tibor bering, containerlar alohida ishlaydi va bir-biridan izolyatsiya qilingan bo'ladi. Ular o'rtasida aloqa
o'rnatish uchun biz `network`dan foydalanamiz.

`Network`ga containerni qo'yishning 2 xil usuli bor:

* Container ishga tushirayotganda `network`ni tayinlash
* Ishlayotgan containerni `network`ga ulash

`Network`ni yaratish:

```bash
docker network create todo-app
```

## Start MySQL

Ana endi MySQL konteynerini ishga tushiramiz va `network`ga ulaymiz. Shuningdek MySQLning dastlabki o'zgaruvchilarining
qiymatlarini belgilab ketishingiz mumkin.

```bash
docker run -d \
    --network todo-app --network-alias mysql \
    -v todo-mysql-data:/var/lib/mysql \
    -e MYSQL_ROOT_PASSWORD=secret \
    -e MYSQL_DATABASE=todos \
    mysql:8.0
```

Yuqoridagi kodda `mysql:8.0` tayyor image orqali container ishga tushirildi. Bazaning nomi (`MYSQL_DATABASE`) `todos`,
parol esa (`MYSQL_ROOT_PASSWORD`) `secret` deb belgilandi.

```bash
-v todo-mysql-data:/var/lib/mysql
```

orqali esa `todo-mysql-data` nomli volume yaratildi va `/var/lib/mysql` manziliga o'rnatildi.

```bash
--network todo-app
```

orqali `network` ko'rsatib ketildi.

```bash
--network-alias mysql
```

esa keyingi qatorlarda to'xtalamiz.

Container ishlayotganini va ma'lumotlar bazasiga ulanganini tekshirish uchun:

```bash
docker exec -it <mysql-container-id> mysql -u root -p
```

Yuqorida biz parolga `secret` deb kiritdik.

`todos` nomli ma'lumotlar bazasi yaratilganini tekshiramiz:

```sql
mysql> SHOW DATABASES;
```

Natija

```text
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mysql              |
| performance_schema |
| sys                |
| todos              |
+--------------------+
5 rows in set (0.00 sec)
```

Bazadan chiqish uchun:

```sql
mysql> exit
```

`todos` ma'lumotlar bazasi ishlashga tayyor.

## Connect to MySQL

Endi siz MySQL ishlayotganligini bilganingizdan so'ng, undan foydalanishingiz mumkin. Lekin, uni qanday ishlatasiz?
Xuddi shu tarmoqda boshqa konteyner ishlatsangiz, konteynerni qanday topasiz? Esda tutingki, har bir konteyner o'z IP
manziliga ega.

Containerning IP manzilini aniqlash uchun `nicolaka/netshoot` imagedan foydalanamiz.

```bash
docker run -it --network todo-app nicolaka/netshoot
```

Network nomi container network nomi bilan bir xil bo'lishi kerak.

Ana endi container IP manzilini aniqlash uchun quyidagi komandani ishga tushiramiz:

```bash
dig mysql
```

`dig` komandasi `nicolaka/netshoot`ga tegishli.

Undan keyin yozilgan mysql esa biz yuqorida mysql:8.0 konteynerini ishga tushirganimizda `--network-alias` orqali berib
ketgan qiymatimiz.

Komandani ishga tushirsangiz, quyidagi o'xshash natijani olishingiz mumkin:

```text
; <<>> DiG 9.18.8 <<>> mysql
;; global options: +cmd
;; Got answer:
;; ->>HEADER<<- opcode: QUERY, status: NOERROR, id: 32162
;; flags: qr rd ra; QUERY: 1, ANSWER: 1, AUTHORITY: 0, ADDITIONAL: 0

;; QUESTION SECTION:
;mysql.				IN	A

;; ANSWER SECTION:
mysql.			600	IN	A	172.23.0.2

;; Query time: 0 msec
;; SERVER: 127.0.0.11#53(127.0.0.11)
;; WHEN: Tue Oct 01 23:47:24 UTC 2019
;; MSG SIZE  rcvd: 44
```

IP manzil `"ANSWER SECTION"`dagi  `172.23.0.2` ekan. Balki sizdagi IP manzil farq qilishi mumkin.

Chiqish uchun `exit` matni kiritiladi.

Buning ma'nosi shundaki, sizning ilovangiz faqat MySQL nomli hostga ulanishi kerak va u ma'lumotlar bazasi bilan
aloqa o'rnatadi.

## Run your app with MySQL

Todo App MySQLga ulanish sozlamalarini belgilash uchun bir nechta muhit o'zgaruvchilari sozlamalarini
qo'llab-quvvatlaydi. Ular:

* `MYSQL_HOST`- ishlayotgan MySQL server uchun host nomi
* `MYSQL_USER`- ulanish uchun foydalanuvchi nomi
* `MYSQL_PASSWORD`- ulanish uchun ishlatiladigan parol
* `MYSQL_DB`- ulangandan keyin foydalanish uchun ma'lumotlar bazasi

`getting-started-app` proyektiga kirib, quyidagi komanda orqali proyektni MySQLga ulang:

```bash
docker run -dp 127.0.0.1:3000:3000 \
  -w /app -v "$(pwd):/app" \
  --network todo-app \
  -e MYSQL_HOST=mysql \
  -e MYSQL_USER=root \
  -e MYSQL_PASSWORD=secret \
  -e MYSQL_DB=todos \
  node:18-alpine \
  sh -c "yarn install && yarn run dev"
```

Agar quyidagi komandani ishga tushirsangiz, proyekt mysqlga ulanganini tekshirishingiz mumkin:

```bash
docker logs -f <container-id>
```
