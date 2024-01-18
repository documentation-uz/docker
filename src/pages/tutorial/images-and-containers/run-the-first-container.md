# Run the first container

Avvalgi darsimizda qurilgan `image` asosida birinchi `container`imizni ishga tushiramiz. Buning uchun bizga `image`
ning `id` qiymati kerak bo'ladi.

Sintaksis quyidagicha:

```bash
docker run <image_id>
```

`image_id` o'rniga o'zimizning qiymatni qo'yadigan bo'lsak,

```bash
docker run b1fc363351b7
```

bo'ladi.

::: warning E'tibor bering
`image_id` o'rniga o'zingiz yaratgan `IMAGE ID` qiymatingizni yozasiz.
:::

Buyruqni ishga tushiramiz. Proyektimiz http://127.0.0.1:3000 manzilida ishga tushishi kerak. Lekin browser orqali ushbu
manzilga kirsak, ishlamayotganini ko'rishimiz mumkin.

`Container` ishlayapti, lekin proyekt `container`ning ichida ishga tushgan. Kompyuterimizda proyekt bilan aloqa bo'lishi
uchun `container`dagi proyekt ma'lum bir portda chop etilishi kerak.

Shuning uchun, `container`ni ishga tushirish buyrug'iga o'zgartirish kiritamiz. Bundan avval ishlab turgan `container`ni
to'xtatib olishimiz kerak. Buning uchun yangi terminal oynasini ochib olamiz va ishlab turgan `container`lar ro'yxati
konsolga chiqaramiz:

```bash
docker ps
```

Konsolda quyidagi natija ko'rinadi:

```text
CONTAINER ID   IMAGE          COMMAND                  CREATED             STATUS             PORTS     NAMES
236ec7e4f8bd   b1fc363351b7   "docker-entrypoint.s…"   About an hour ago   Up About an hour   80/tcp    musing_wright
```

`Container`ni `CONTAINER ID` (id qiymati) yoki `NAMES` (nomi) orqali to'xtatishimiz mumkin:

Sintaksis:

```bash
docker stop <container_id_yoki_nomi>
```

`Container`ni to'xtatib olamiz:

::: code-group

```bash [Id orqali]
docker stop 236ec7e4f8bd
```

```bash [Nomi orqali]
docker stop musing_wright
```

:::

Bu biroz vaqt olishi mumkin. Jarayon yakunlangandan keyin oldingi terminalga qaytsak, `container` to'xtaganini
ko'rishimiz mumkin.

Ana endi yangilangan buyruq yordamida containerni ishga tushiramiz:

```bash
docker run -p 3000:3000 b1fc363351b7
```

`-p` `container`dagi portni ma'lum bir portda chop etish uchun foydalaniladi.

Sintaksis:

```bash
docker run -p <chop_etish_uchun_port>:<container_ichidagi_port> ...
```

Birinchi port bu chop etiladigan port. Ikkinchi port, `:`dan keyingi port esa container ichida ishlab turgan, biz chop
etmoqchi bo'lgan port hisoblanadi.

Ishlash oson bo'lishi uchun `3000` portni `3000` portida chop etish buyrug'i yozildi. Aslida `container` ichidagi portni
istalgan portda chop etish mumkin. Agar biz `3000` portni 8000 portda chop etmoqchi bo'lsak, `container`ni ishga
tushirish buyrug'i quyidagicha o'zgaradi:

```bash
docker run -p 8000:3000 b1fc363351b7
```

Lekin avvalgi buyruqni ishga tushiramiz:

```bash
docker run -p 3000:3000 b1fc363351b7
```

Ana endi http://127.0.0.1:3000 manziliga kirsak, proyekt ishlayotganini ko'rishimiz mumkin.
