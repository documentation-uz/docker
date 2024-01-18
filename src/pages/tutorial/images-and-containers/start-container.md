# Start container

::: warning Tavsiya etiladi
Darsni boshlashdan oldin barcha ishlab turgan containerlarni ishlashdan to'xtatib turishingiz tavsiya etiladi. Buning
uchun albatta oldingi darsdagi `docker stop <container_id_yoki_nomi>` buyrug'idan foydalanasiz.
:::

Har safar `IMAGE ID` yordamida `container`ni ishga tushirganimizda yangi `container` yaratiladi. Natijada `container`lar
soni ortib ketadi. Shuning uchun bu darsda avval yaratilgan `container`ni qaytadan ishga tushirishni o'rganamiz.

Buning uchun avval ishlashdan containerlar ro'yxatini ko'rishimiz kerak. `docker ps` buyrug'i faqat ishlab turgan
containerlar ro'yxatini ko'rsatadi. Bizga esa barcha containerlar ro'yxati kerak. Buning uchun,

```bash
docker ps -a
```

buyrug'idan foydalanamiz. Konsoldagi natijada:

```text
CONTAINER ID   IMAGE          COMMAND                  CREATED          STATUS                            PORTS     NAMES
3f1578125a03   b1fc363351b7   "docker-entrypoint.s…"   12 minutes ago   Exited (137) 11 minutes ago                 vigorous_lumiere
236ec7e4f8bd   b1fc363351b7   "docker-entrypoint.s…"   2 hours ago      Exited (137) About a minute ago             musing_wright
...
```

`STATUS` ustunidagi qiymat `Exited...` bilan boshlansa, demak bu `container` ishlashdan to'xtagan. Biz esa hozir
ishlashdan to'xtagan `container`ni qaytadan ishga tushiramiz.

Buning uchun biz `CONTAINER ID`dan (`container`ning id qiymati) yoki `NAMES`dan (`container`ning nomi) foydalanishimiz
mumkin.

Sintaksis:

```bash
docker start <container_id_yoki_nomi>
```

Birinchi turgan `container`ni qaytadan ishga tushiramiz:

::: code-group

```bash [Id orqali]
docker start 3f1578125a03
```

```bash [Nomi orqali]
docker start vigorous_lumiere
```

:::

Bu holatda `container`lar soni ortib ketmaydi, sababi bu yerda biz mavjud `container`ni ishga tushiryapmiz.
