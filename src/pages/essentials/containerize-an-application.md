# Containerize an application

Ushbu qoʻllanmaning qolgan qismida siz Node.js da ishlaydigan oddiy vazifalar roʻyxati menejeri bilan ishlaysiz. Agar
siz Node.js bilan tanish bo'lmasangiz, tashvishlanmang. Ushbu qo'llanma JavaScript bilan oldindan tajribaga ega bo'
lishni talab qilmaydi.

## Get the app

GitHubdan repositoriyani klonlang.

```bash
git clone https://github.com/docker/getting-started-app.git
```

## Build the app's image

`getting-started-app` proyektining ichida `Dockerfile` nomli fayl yarating va uning ichiga quyidagi kodni yozing:

```dockerfile
# syntax=docker/dockerfile:1

FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
EXPOSE 3000
```

* `Dockerfile`dagi

```dockerfile
FROM node:18-alpine
```

image qurishni node:18-alpine nomli imagedan boshlashini anglatadi. Agar sizning kompyuteringizda ushbu image mavjud
bo'lmasa, docker uni `Docker Hub`dan yuklab oladi.

::: tip
Docker Hub docker imagelarini saqlash uchun xizmat.
:::

* Undan keyingi qatordagi kod

```dockerfile
WORKDIR /app
```

proyektning `container`dagi manzilini belgilaydi.

* Keyingi qatorda esa joriy manzildagi proyektni ish maydoniga nusxalaydi.

```dockerfile
COPY . .
```

Birinchi `.` bizning kompyuterimizdagi joriy manzilni anglatadi. Ikkinchi `.` konteynerning joriy manzilini anglatadi.
Konteyner uchun joriy manzil `/app`.

::: tip
`WORKDIR /app` ishga tushgandan keyin `container` uchun joriy manzil `/app`ga o'zgaradi va keyingi qatorlarga ham amal
qiladi.
:::

* Keyingi qatorda proyekt uchun kerakli bo'lgan paketlar o'rnatib olish uchun komanda ishga tushirilishi ko'rsatilgan.

```dockerfile
RUN yarn install --production
```

* Keyingi qatorda proyektni ishga tushirish komandasi yozilgan.

```dockerfile
CMD ["node", "src/index.js"]
```

* Oxirgi qatorda esa qaysi portda ishlashi belgilangan.

```dockerfile
EXPOSE 3000
```

Quyidagi komanda orqali proyektning `image`i yaratiladi.

```bash
docker build -t getting-started .
```

Docker komandalari `docker` kalit so'zi bilan boshlanadi. `docker build` komandasi `image` yaratish uchun
`Dockerfile`dan foydalanadi.

`-t` argumenti `image`ning teg nomini belgilaydi. Bizning holatda `image`ning teg nomi `getting-started` bo'lyapti.

Buyruq oxiridagi `.` docker komandasiga `Dockerfile`ni qayerda joylashganini ko'rsatadi.

## Start an app container

`Image` yaratib oldik. Ana endi shu `image` orqali `container`ni ishga tushiramiz.

```bash
docker run -dp 127.0.0.1:3000:3000 getting-started
```

http://127.0.0.1:3000/ manzilida proyekt ishga tushdi.

`docker run` komandasi orqali `container` ishga tushiriladi.

`-d` argumenti `container`ni orqa fonda ishga tushirilishini belgilaydi.

`-p` argumenti container ishga tushadigan manzilni ko'rsatadi.

`-d` va `-p` ni qisqartirib, `-dp` yozilgan.

Oxirida esa `image` nomi yoziladi.

Kompyuterda ishlab turgan containerlarni quyidagi komanda orqali ko'rishingiz mumkin.

```bash
docker ps
```
