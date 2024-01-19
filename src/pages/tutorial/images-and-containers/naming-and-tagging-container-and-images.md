# Naming & Tagging Containers and Images

Bu darsda image va containerlarni nomlashni o'rganamiz.

Avval imageni nomlashni o'rganamiz. Avvalgi qurgan imagelarimizni ko'radigan bo'lsak,

```bash
docker images
```

quyidagi natija ko'rinadi:

```text
REPOSITORY   TAG       IMAGE ID       CREATED        SIZE
<none>       <none>    d59a2d117c4a   16 hours ago   1.11GB
```

`REPOSITORY` ustunidagi qiymat imagening nomi, `TAG` ustunidagi qiymat imagening tegi bo'ladi. Ya'ni imagening 2 qismdan
iborat bo'ladi: asosiy nom va uning versiyasi.

Misol uchun `python:3.12` nomli image bor. `python` imagening nomi, `3.12` imagening tegi, boshqacha qilib aytganda
versiyasi yoki ko'rinishi.

Xuddi shunday biz ham imageni qurayotganimizda unga nom berishimiz mumkin. Ammo bu bizga nega kerak? Qachonki yangi
containerni ishga tushirayotganimizda avval imagening id qiymatini aniqlab olib, shu asosida bu jarayonni amalga
oshiramiz. Agar imageni biror nomda qursak, shu nom orqali ham yangi containerni ishga tushirishimiz mumkin. Bu albatta
ishlash uchun qulay.

Imageni nom berib qurish sintaksisi:

```bash
docker build -t <nomi>:<teg> .
```

Buning uchun biz `-t`dan foydalanamiz. Misol uchun proyektimiz asosida yangi image quramiz:

```bash
docker build -t node-app-example:1.0
```

Imagelar ro'yxatini ko'radigan bo'lsak,

```text
REPOSITORY         TAG       IMAGE ID       CREATED         SIZE
node-app-example   1.0       2c23f2c462c6   5 seconds ago   1.11GB
...
```

yangi nomdagi image qo'shilganini ko'rishimiz mumkin. Shuningdek imageni qurayotganimizda tegning qiymatini berishimiz
shart emas:

```bash
docker build -t node-app-example
```

Bu holatda tegning qiymati avtomatik ravishda `latest` bo'ladi.

```text
REPOSITORY         TAG       IMAGE ID       CREATED         SIZE
node-app-example   1.0       2c23f2c462c6   3 minutes ago   1.11GB
node-app-example   latest    2c23f2c462c6   3 minutes ago   1.11GB
```

Imageni nom berish orqali qurishni o'rgandik. Endi containerlarga nom berib, ishga tushirishni o'rganamiz.

Containerlar ro'yxatini ko'radigan bo'lsak,

```bash
docker ps -a
```

natijada

```text
CONTAINER ID   IMAGE          COMMAND                  CREATED        STATUS                      PORTS     NAMES
e80c78508344   python         "python3"                16 hours ago   Exited (0) 16 hours ago               vigorous_gould
61b7b302d662   d59a2d117c4a   "docker-entrypoint.s…"   16 hours ago   Exited (137) 16 hours ago             lucid_mahavira
```

ushbu ma'lumotni ko'rishimiz mumkin. `NAMES` ustunida containerlarni nomi bor. Containerni yaratishda nom bermasak,
docker avtomatik ravishda uni tasodifiy nom bilan nomlaydi.

O'zimiz xohlagan nom bilan containerni ishga tushirmoqchi bo'lsak, u holda `--name`dan foydalanamiz:

```bash
docker run -p 3000:80 -d --rm --name my-node-app node-app-example:1.0
```

Containerni `my-node-app` deb nomladik. Agarda containerni o'chirmoqchi bo'lsak, uning nomini aniq bilganimiz uchun
containerlar ro'yxatini tekshirib, nomi yoki id qiymatini topishimiz shart emas.

```bash
docker stop my-node-app
```

Yuqorida `node-app-example:1.0` image asosida containerni ishga tushirdik. Uning o'rniga endi `node-app-example:latest`
image asosida containerni ishga tushiramiz:

```bash
docker run -p 3000:80 -d --rm --name my-node-app node-app-example:latest
```

Teg `latest` bo'lganda tegni yozmasdan faqat uning nomini yozishimiz mumkin:

```bash
docker run -p 3000:80 -d --rm --name my-node-app node-app-example
```

Proyektimizdagi `Dockerfile` faylidagi birinchi qatorda turgan

::: code-group

```dockerfile [Dockerfile]
FROM node

# ...
```

:::

`node` bu yerda image va uning tegi yozilmagani uchun docker avtomatik ravishda `node:latest` imageni tushunadi.

::: tip Ma'lumot uchun
`latest` o'zbek tiliga tarjima qilinganda `eng oxirgi`, ya'ni bu yerda `node` imagening eng oxirgi versiyasidan
foydalanilayotgani nazarda tutilyapti.
:::
