# Auto remove container

Proyektimiz `container`da ishga tushirishni o'rgandik. Ammo ma'lum vaqt o'tgandan keyin proyektga qandaydir
o'zgarishlar kiritishimiz mumkin. Agarda proyektga o'zgarish kiritilsa, bu o'zgarishlar `image` va `container`ga ta'sir
qilmaydi va o'zgarishlar natijada ko'rinmaydi.

Chunki joriy `container` proyektning eski holati bo'yicha qurilgan `image` asosida ishga tushgan. `Image`ni esa
tahrirlab bo'lmaydi, ya'ni proyektdagi o'zgarishlarni `image`ga kiritib bo'lmaydi.

Bunday holatda faqat biz proyektning yangi versiyasi uchun yana boshida `image`ni qurishimiz kerak. `Image` qaytadan
qurilgandan keyin bu proyektdagi o'zgarishlar `container`da ham amalga oshishi uchun mavjud `container`ni qaytadan ishga
tushirish o'rniga yangi `image` asosida yangi `container`ni ishga tushiramiz.

Hammasi tushunarli bo'lgan bo'lsa, navbatdagi holatga e'tibor qaratamiz.

Biz oldingi darslarda `container`lar soni ortib ketmasligi uchun mavjud `container`ni qaytadan ishga tushirishni
o'rgangandik. Lekin agarda proyektga o'zgarish kiritilsa, baribir yangi `container` yaratishga majbur bo'lamiz. Natija
`container`lar soni baribir ortib ketmoqda.

Shuning uchun bu holatga navbatdagi yechim bor. Qachonki biz `docker run ...` buyrug'i orqali `container`ni ishga
tushirayotgamizda, qachonki shu `container` ishlashdan to'xtasa, avtomatik o'chib ketadigan qilishimiz mumkin. Ya'ni,
agar `container` ishlashdan to'xtasa, xotiradan avtomatik o'chib ketadi.

Buning uchun containerni ishga tushirish buyrug'ini quyidagicha o'zgartirish kiritamiz:

```bash
docker run -p 3000:3000 --rm 0dbc94488402
```

`--rm` aynan `container` ishlashdan to'xtagandan keyin uni avtomatik o'chirib yuborishga javob beradi.
