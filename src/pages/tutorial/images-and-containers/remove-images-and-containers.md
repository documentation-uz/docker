# Remove images & containers

Bu darsda keraksiz `image` va `container`larni o'chirishni o'rganamiz.

Avvaliga `container`larni qanday o'chirishni o'rganamiz.

`Container`ni o'chirish uchun avvalambor u ishlashdan to'xtagan bo'lishi shart. To'xtagan `container`ning id qiymati
yoki nomi yordamida o'chirish mumkin.

Sintaksis:

```bash
docker rm <container_id_yoki_nomi>
```

Agar bir nechta `container`larni o'chirmoqchi bo'lsak, shunchaki `container`larni ketma-ket yozish kifoya:

```bash
docker rm <container_id_yoki_nomi_1> <container_id_yoki_nomi_2> ...
```

Barcha ishlashdan to'xtagan `container`larni bitta buyruq bilan o'chirib tashlash uchun esa:

```bash
docker container prune
```

Ana endi `image`ni o'chirishni o'rganamiz.

`Image`ni o'chirish uchun avval shu `image` asosida yaratilgan `container`(lar)ni o'chirish kerak.

`Image`ni o'chirish uchun sintaksis:

```bash
docker rmi <image_id>
```

Bir nechta `image`larni o'chirish uchun shunchaki ketma-ket yozish kifoya:

```bash
docker rmi <image_id1> <image_id2> ...
```

Foydalanilmayotgan va tag qiymati bo'lmagan barcha imagelarni o'chirish uchun:

```bash
docker image prune
```

Imagelar ro'yxatini ko'radigan bo'lsak,

```bash
docker images
```

natijada

```text
REPOSITORY   TAG       IMAGE ID       CREATED         SIZE
<none>       <none>    d59a2d117c4a   8 minutes ago   1.11GB
python       latest    e07822fe64e5   5 weeks ago     1.02GB
```

Tag bu `TAG` ustunidagi qiymat. `<none>` degani qiymati yo'q degani.

Barcha foydalanilmayotgan (tag qiymati bor bo'lsa ham, bo'lmasa ham) `image`larni o'chirish uchun:

```bash
docker image prune -a
```
