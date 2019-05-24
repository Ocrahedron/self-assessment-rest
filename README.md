## Self-Assessment-Rest

Пожалуйста, постарайтесь справиться с этим заданием за 3 часа. 

Если Вы не закончите выполнение этой задачи в течение трех часов, не забудьте сделать коммит по истечении трех часов, и после можно продолжеть работу.

Удачи!

# Приложение для подписки на канал

К настоящему времени Вы должны быть знакомы с созданием базовых веб-приложений с использованием фреймфорка Express. В настоящем задании Вы будете создавать приложение для подписки на канал для кабельных компаний. Это даст Вам возможность продемонстрировать свои знания путем написания кода для model, view и контроллеров, базовые знания HTML и некоторое понимание CSS.

Задание разбито на несколько частей. Вы должны завершить выполнение одной части, прежде чем переходить к следующей. Мы обозначили приблизительные временные рамки для каждой части, чтобы помочь Вам.

### Release 1: Механизм аутентификации (Регламентирование по времени ~ 60 минут)

Сделать аутентификацию на основе сессий. Сессии можно хранить в памяти, в Redis, в файловой системе или любом другом store на ваше усмотрение.
Пароль для пользователя можно хранить в открытом виде, можно в виде хеша [sha-256](https://www.npmjs.com/package/sha256)  , можно использовать готовую библиотеку, например, [PassportJS](http://www.passportjs.org/) 

#### Модель пользователя

Создайте модель `User`. Добавьте проверки в модель `User`, которые гарантируют следующее:

- Каждый пользователь имеет адрес электронной почты
- Электронная почта каждого пользователя является уникальной
- Каждый пользователь имеет пароль

#### AJAX-регистрация нового пользователя, авторизация, выход из системы

Создайте маршруты(`routes`) и представления(`views`), чтобы позволить пользователю:

1. Зарегистрироваться в качестве нового пользователя
2. Войти в систему в качестве существующего пользователя
3. Выйти из системы за существующего пользователя

Эти действия должны выполняться с помощью асинхронных запросов (с использованием fetch). Устанавливаемые серверо cookie сохраняются в браузере клиента даже при асинхронном запросе с помощью fetch, поэтому это не будет проблемой для работы с сессиями.

### Release 2: Каналы (Регламентирование по времени ~ 30 минут)

Пользователи могут добавлять и удалять каналы из своей учетной записи пользователя. Пользователи могут подписываться на многие каналы, и канал может иметь много подписчиков. 

Не забудьте написать скрипт, который наполнит вашу БД каналами (`seeds.js`).


### Release 3: CRUD It Up (Регламентирование по времени ~ 90 минут)

После аутентификации пользователя создайте некоторые страницы CRUD.

1. Без входа в систему пользователь может видеть список всех каналов
2. После входа в систему пользователь может видеть страницу профиля пользователя, включая:
   * список каналов пользователя
   * общую стоимость в месяц всех каналов пользователя
   * После входа в систему Пользователь должен оказаться на своей странице.
3. Страница для отображения информации об одном канале, включая:
   * название канала, цену
   * общее количество абонентов
   * кнопку для подписки на канал, если пользователь зарегистрирован, но еще не подписан
   * кнопку для отмены подписки на канал, если пользователь вошел в систему и уже подписался

Через три часа создайте pull request и отметьте своих преподавателей. Смело продолжайте работу над этой задачей, но обязательно отметьте, на каком этапе Вы находитесь по истечении трех часов.



