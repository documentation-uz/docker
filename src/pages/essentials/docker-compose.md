# Docker compose

`Docker compose` bilan bir nechta containerlarni bir vaqtning o'zida bitta buyruq bilan boshqarish imkonini beradi.
Ya'ni bir nechta konteynerlarni bir buyruq bilan ishga tushirishingiz, to'xtashingiz va yana ko'plab amallarni
bajarishingiz mumkin.

## Create the compose file

`get-started-app` proyektiga kiramiz va uning ichida `compose.yaml` faylini yaratamiz.

## Define the app service

Oldingi darsda quyidagi komanda orqali proyektni ma'lumotlar bazasiga ulab, containerni ishga tushirgan edik.

```bash:line-numbers
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

Ana endi shuni `docker compose` orqali orqali qanday amalga oshirish mumkinligini ko'rasiz.

---

```yaml {3}
services:
  app:
    image: node:18-alpine
```

Har bir containerlar xususan servislar deb ataladi. Servisning nomi `app` deb nomlandi.

```yaml
image: node:18-alpine
```

Bu komandadagi 8-qatorga to'g'ri keladi.

---

```yaml {4}
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
```

Bu komandadagi 9-qatorga to'g'ri keladi.

---

```yaml {5,6}
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 127.0.0.1:3000:3000
```

Bu komandadagi 1-qatorga to'g'ri keladi.

---

```yaml {7-9}
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 127.0.0.1:3000:3000
    working_dir: /app
    volumes:
      - ./:/app
```

Bu komandadagi 2-qatorga to'g'ri keladi.

`working_dir` proyektning konteynerdagi manzilini belgilaydi.

---

```yaml {10-14}
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 127.0.0.1:3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos
```

Bu komandadagi 4-, 5-, 6-, 7-qatorlarga to'g'ri keladi.

`Docker compose` containerlar o'rtasida aloqa o'rnatish uchun kerak bo'ladigan networkni avtomatik yaratadi.

## Define the MySQL service

MySQL containerini ishga tushirish uchun quyidagi komandani ishga tushirgan edik:

```bash:line-numbers
docker run -d \
  --network todo-app --network-alias mysql \
  -v todo-mysql-data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=secret \
  -e MYSQL_DATABASE=todos \
  mysql:8.0

```

Navbat mysql containerni compose.yaml fayldagi kodini yozish.

```bash {5}
services:
  app:
    ...
  mysql:
    image: mysql:8.0
```

Servis nomi `mysql` deb nomlandi. `mysql:8.0` imagedan foydalanilishi belgilandi.

Bu komandadagi 6-qatorga to'g'ri keladi.

---

```yaml {6,7,9,10}
services:
  app:
    ...
  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql

volumes:
  todo-mysql-data:
```

Bu komandadagi 3-qatorga to'g'ri keladi.

---

```yaml {8-10}
services:
  app:
    ...
  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

Bu komandadagi 4-, 5-qatorlarga to'g'ri keladi.

---

Shunday qilib `compose.yaml` fayli quyidagi ko'rinishga keladi.

```yaml
services:
  app:
    image: node:18-alpine
    command: sh -c "yarn install && yarn run dev"
    ports:
      - 127.0.0.1:3000:3000
    working_dir: /app
    volumes:
      - ./:/app
    environment:
      MYSQL_HOST: mysql
      MYSQL_USER: root
      MYSQL_PASSWORD: secret
      MYSQL_DB: todos

  mysql:
    image: mysql:8.0
    volumes:
      - todo-mysql-data:/var/lib/mysql
    environment:
      MYSQL_ROOT_PASSWORD: secret
      MYSQL_DATABASE: todos

volumes:
  todo-mysql-data:
```

## Run the application stack

`compose.yaml` faylini ishga tushirishdan oldin `getting-started-app` va `mysql` containerlarini ishlashdan to'xtatish
kerak.

Undan keyin quyidagi komanda orqali containerlarni ishga tushirish mumkin.

```bash
docker compose up -d
```
