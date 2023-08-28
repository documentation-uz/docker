# Update the application

## Update the source code

Ushbu darsda proyektni yangilashni o'rganasiz.

`src/static/js/app.js` fayliga kirib 56-qatorni yangilang.

```html
<p className="text-center">No items yet! Add one above!</p>
```

o'rniga

```html
<p className="text-center">You have no todo items yet! Add one above!</p>
```

ni yozing.

## Yangilangan proyektning containerini ishga tushirish

Yangilangan proyektning imageni yaratish uchun:

```bash
docker build -t getting-started .
```

Containerni ishga tushirish uchun:

```bash
docker run -dp 127.0.0.1:3000:3000 getting-started
```

Ammo bizda quyidagicha xatolik chiqadi.

```text
docker: Error response from daemon: driver failed programming external connectivity on endpoint laughing_burnell 
(bb242b2ca4d67eba76e79474fb36bb5125708ebdabd7f45c8eaf16caaabde9dd): Bind for 127.0.0.1:3000 failed: port is already allocated.
```

Sababi bizda 3000 portda container allaqachon ishlayapti. Avvaliga oldin ishga tushirilgan containerni o'chirish kerak.

## Remove the old container

Containerlar ro'yxati chiqariladi.

```bash
docker ps
```

Container ishlashdan to'xatatiladi.

```bash
docker stop <the-container-id>
```

Container ishlashdan to'xatilgandan keyin u o'chirib yuboriladi.

```bash
docker rm <the-container-id>
```

Containerni bitta komandada -f argumenti orqali avval to'xtatib, keyin o'chirib yuborish mumkin.

```bash
docker rm -f <the-container-id>
```

## Start the updated app container

Yangilangan image orqali containerni ishga tushirish uchun:

```bash
docker run -dp 127.0.0.1:3000:3000 getting-started
```

http://127.0.0.1:3000/ manzili yangilansa, xabar matni o'zgaradi.
