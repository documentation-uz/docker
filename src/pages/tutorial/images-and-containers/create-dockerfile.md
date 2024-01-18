# Create Dockerfile

Proyektni docker uchun sozlashni boshlaymiz.

Proyektning ichida `Dockerfile` nomli fayl yaratamiz va kod yozishni boshlaymiz.
Birinchi bo'lib quyidagi kodni yozamiz:

::: code-group

```dockerfile [Dockerfile]
FROM node
```

:::

Proyektimiz nodejsda bo'lgani uchun dockerning `node` image asosida proyektni qurishimizni anglatadi.

::: tip
Barcha imagelarning ro'yxati bilan [Docker Hub](https://hub.docker.com/) saytida tanishib chiqishingiz mumkin.
:::

Ana endi containerdagi ish muhitimizning manzilini ko'rsatamiz:

::: code-group

```dockerfile {3} [Dockerfile]
FROM node

WORKDIR /app
```

:::

::: tip
Bu yerda `app` papkasi container fayl tizimidagi papka bo'lib, uning o'rniga boshqa papkani ham tanlashingiz mumkin.
Lekin odatda ish muhiti uchun `app` papkasini tanlanadi.
:::

Ana endi proyektimizni containerga nusxalab o'tkazish kodini yozamiz:

::: code-group

```dockerfile {5} [Dockerfile]
FROM node

WORKDIR /app

COPY . /app
```

:::

`COPY` buyrug'idan keyingi birinchi manzil kompyuterimizdagi proyekt manzili. Ikkinchi manzil esa containerdagi proyekt
joylashadigan manzil.

`COPY` buyrug'ida yozilgan `.`(nuqta) `Dockerfile` turgan manzilni anglatadi, ya'ni `Dockerfile` bilan yonma-yon turgan
barcha
papka va fayllarni o'z ichiga oladi (bular `public/`, `server.js`, `package.json`).

Sintaksis quyidagicha:

```dockerfile
COPY proyekt_manzili containerdagi_manzil
```

Nodejsda yozilgan proyektda kerakli paketlarni yuklab olish uchun `npm install` buyrug'idan foydalaniladi.
Dockerda buyruqlarni ishga tushirish uchun `RUN` buyrug'idan foydalanamiz.

::: code-group

```dockerfile {7} [Dockerfile]
FROM node

WORKDIR /app

COPY . /app

RUN npm install
```

:::

Proyektimiz ishga tushganda browserda `3000` portda ishlaydi.
Buni `server.js` faylida ko'rishimiz mumkin.

::: code-group

```js [server.js]
// ...

app.listen(3000);
```

:::

Shuning uchun containerda `3000` portni tinglash uchun `EXPOSE` buyrug'idan foydalanamiz.

::: code-group

```dockerfile {9} [Dockerfile]
FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000
```

:::

Ana endi oxirgisi proyektni ishga tushirish buyrug'i qoldi. `node server.js` buyrug'i orqali proyektni ishga tushirimiz
mumkin. Buni ishga tushirish uchun dockerda `CMD` buyrug'idan foydalanamiz.

::: code-group

```dockerfile {11} [Dockerfile]
FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 3000

CMD ["node", "server.js"]
```

:::

::: tip
`CMD` buyrug'idan Dockerfile faylida faqat bir marta ishlatish kerak. Bir nechta `CMD` buyruqlaridan foydalanilgan
taqdir ham faqat eng oxirgi `CMD` buyrug'i ishlaydi.
:::

Shu yerda savol tug'ilishi mumkin. `RUN` ham buyruqlarni ishga tushirish uchun foydalanilsa, nega `CMD` o'rniga
ham `RUN`buyrug'idan foydalanmaymiz?

Sababi, `RUN` buyrug'i `image`ni qurishda ishga tushsa, `CMD` buyrug'i container ishga tushganda ishlaydi.
