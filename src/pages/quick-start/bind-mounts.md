# Bind mounts

Bind mount image qayta ishga tushirmasdan o'zgarishlarni avtomatik olish uchun foydalaniladi.

`get-started-app` papkasiga kirib olamiz va ubuntu containerini ishga tushiramiz.

```bash
docker run -it --mount type=bind,src="$(pwd)",target=/src ubuntu bash
```

`mount` turi bu yerda `volume` o'rniga `bind` bo'ladi.

`src` orqali qaysi joriy proyekt (get-started-app) manzili ko'rsatilyapti.

`target` orqali joriy proyekt containerda qaysi manzilda turishini belgilaydi.

```bash
ls /src/
```

ishga tushganda proyektimiz fayllarini ko'rishimiz mumkin.

Agar biz biror fayl yaratsak, masalan:

```bash
touch myfile.txt
```

Kompyuterda proyekt papkasiga kirib tekshirsak, bu yerda ham myfile.txt fayli mavjud bo'ladi.

Agar faylni o'chirib tashlasak,

```bash
rm -rf myfile.txt
```

kompyuterimizda ham o'chib ketadi.

Chiqish uchun `CTRL`+`D`.

## Xulosa

`Bind mount` odatda development holatida foydalanish tavsiya etiladi. Chunki har safar o'zgartirish kiritilganda imageni
qayta qurish talab qilimaydi. Lekin production holatida `volume`dan foydalanish tavsiya etiladi.
