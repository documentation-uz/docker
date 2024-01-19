# Attach & Detach

Bu darsda attach hamda detach modelar haqida gaplashamiz.

E'tibor bergan bo'lsangiz agar containerni

```bash
docker run -p 3000:3000 --rm 0dbc94488402
```

ko'rinishida ishga tushirsak, terminal band bo'lib qoladi. Ya'ni terminal yakunlanmay kutib turadi.

Ammo mavjud containerni qaytadan ishga tushirsak,

```bash
docker start 236ec7e4f8bd
```

terminalni band qilmaydi. Lekin ikkala holatda ham container ishga tushadi. Bunga sabab, ular turli xil modelarda ishga
tushadi.

`docker run ...` buyrug'i bilan container ishga tushganda standart holatda `attach` modeda bo'ladi. Qachonki
container `attach` modeda ishga tushsa, terminal band qilinadi va konsolda chiqadigan xabarlarni kutadi. Misol uchun
proyektimiz asosida qurilgan image yordamida yangi containerni ishga tushiramiz:

```bash
docker run -p 3000:3000 --rm 0dbc94488402
```

Ana endi http://127.0.0.1:8000 manziliga kirib, inputga istalgan matnni kiritamiz va tugmani bosamiz. Terminalga qaytib,
konsolga qarasak biz yozgan matn ko'rinadi.

::: warning
`server.js` faylida konsolga xabar chiqish kodi yozilgani uchun ham xabar ko'rinyapti.
:::

Ko'rib turganingizdek, container `attach` modeda ishga tushganda bizda konsoldagi xabarlarni kuzatish imkoniyati
bo'ladi.

Agarda biz containerni `docker start ...` buyrug'i bilan ishga tushirsak, `detach` modeda ishga tushadi, terminaldagi
jarayon yakunlanadi va container orqa fonda ishga tushadi.

Shunga qaramay biz containerni `docker start ...` buyrug'i bilan `attach` modeda ham ishga tushirishimiz mumkin. Buning
uchun biz `-a` dan foydalanamiz:

```bash
docker start -a 236ec7e4f8bd
```

Xuddi shunday containerni `docker run ...` buyrug'i bilan `detach` modeda ishga tushira olamiz. Buning uchun endi
bizga `-d` kerak bo'ladi:

```bash
docker run -p 3000:3000 --rm -d 0dbc94488402
```

Agar sizga konsoldagi xabarlarni kuzatish kerak bo'lsa, containerni `attach` modeda ishga tushiring, aks holda `detach`
modeda ishga tushirish maqsadga muvofiq. Har ikkala holatda ham container bir xil ishlaydi.

Yana bir narsani qo'shimcha qilish kerak. Agar sizda container `detach` modeda ishlayotgan bo'lsa va siz konsoldagi
xabarlarni ko'rmoqchi bo'lsangiz, buning 2 xil yo'li bor:

1. Ishlab turgan containerni uni o'chirmasdan attach modega o'tkazish:

```bash
docker attach <container_id_yoki_nomi>
```

2. Yig'ilgan xabarlarni konsolga chiqarish:

```bash
docker logs <container_id_yoki_nomi>
```

1-holatda container `attach` modega o'tadi va xabarlarni kuzatib turish mumkin. 2-holatda esa yig'ilgan xabarlarni
konsolga chiqaradi va jarayon yakunlanadi, ya'ni keyingi keladigan xabarlarni kutib turmaydi.

Lekin agar siz `docker logs ...` buyrug'i orqali xabarlarni doimiy kuzatib turmoqchi bo'lsangiz, ya'ni keyingi keladigan
xabarlarni kuzatib turmoqchi bo'lsangiz, `-f`dan foydalanishingiz mumkin:

```bash
docker logs -f <container_id_yoki_nomi>
```
