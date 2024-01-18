# Build the first image

Avvalgi darsda proyektimiz uchun `Dockerfile` faylida kod yozdik. Ana endi shu fayl asosida `image` qurib olamiz.
`Image`ni qurish uchun terminalni ochib olamiz.

::: warning E'tibor bering
Terminaldagi manzil proyekt joylashgan manzil bo'lishi kerak.
:::

Terminalda imageni qurish uchun quyidagi komandani yozamiz:

```bash
docker build .
```

`build` buyrug'i `image`ni qurish uchun foydalaniladi. `.` esa `Dockerfile` fayli joylashgan manzilni anglatadi.

Ana endi `image`lar ro'yxatini ko'rib, `image`ning `id` qiymatini aniqlab olamiz.

Buning uchun quyidagi komandadan foydalanamiz:

```bash
docker images
```

Konsolda quyidagi natija ko'rinadi:

```text
REPOSITORY            TAG       IMAGE ID       CREATED         SIZE
<none>                <none>    b1fc363351b7   5 seconds ago   1.11GB
...
```

`IMAGE ID` pastida turgan qiymat `image`ning `id` qiymati hisoblanadi.

::: tip
Bu yerdagi qiymat siznikidan farq qilishi mumkin.
:::
