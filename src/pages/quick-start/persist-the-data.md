# Persist the data

Biror bir image orqali containerni tushirdik. Keyin bazaga bir nechta ma'lumotlar kiritdik.

Keyin xuddi shu image orqali yana bir containerni ishga tushirdik. Bu holatda ikkala containerdagi ma'lumotlar bir xil
bo'lmaydi.

Oddiy qilib aytganda bir xil image orqali ishga tushirilgan bo'lsa ham birinchi containerda kiritilgan ma'lumotlar
ikkinchi containerda mavjud bo'lmaydi.

Yoki bo'lmasam, biror bir proyekt qilayotganingizda bazaga ma'lumotlar qo'shgan bo'lsangiz, lekin containerni
yangilasangiz, ma'lumotlar o'chib ketadi. Bu muammoni hal qilish uchun biz `volume`dan foydalanamiz.

`Volume` ma'lumotlarni container fayl tizimidan alohida saqlashga imkon beradi.

to do app ma'lumotlarini container fayl tizimidagi /etc/todos/todo.db SQLite ma'lumotlar bazasida saqlaydi.

## Create a volume and start the container

Volume create qilish:

```bash
docker volume create todo-db
```

Ishlab turgan containerni to'xtatish va o'chirib tashlash:

```bash
docker rm -f <container_id>
```

`Volume` nomini, manzilini berish orqali containerni ishga tushiring.

```bash
docker run -dp 127.0.0.1:3000:3000 --mount type=volume,src=todo-db,target=/etc/todos getting-started
```

Ana endi bazaga ma'lumot qo'shilgandan keyin containerni o'chirib tashlab, qayta ishga tushirilganda ma'lumotlar o'chib
ketmaydi.
