# SimplSystem Landing

> Лендинг сервиса автоматизации бизнес-процессов на базе **1С** и **amoCRM**.

---

## Что здесь

Репозиторий содержит полное ТЗ на разработку лендинга SimplSystem.

| Файл | Описание |
|---|---|
| [`tz-simplsystem-landing.md`](./tz-simplsystem-landing.md) | Полное ТЗ на разработку лендинга |

---

## Задача для Cursor

Прочитай файл [`tz-simplsystem-landing.md`](./tz-simplsystem-landing.md) и создай лендинг согласно требованиям.

### Кратко о проекте

- **SimplSystem** — сервис автоматизации бизнес-процессов, 11 лет на рынке, 40+ клиентов
- Специализация: 1С, amoCRM, Mini ITBP (управленческий учёт)
- Цель лендинга: привлечение клиентов через контактную форму и Mini ITBP чекап

### Стек

- HTML / CSS / JS (без фреймворков)
- Tailwind CSS
- Адаптивность под все браузеры

### Структура файлов

```
simplsystem-landing/
├── index.html          # Главная страница лендинга
├── privacy.html        # Политика конфиденциальности
├── consent.html        # Согласие на обработку ПД
├── thanks.html         # Страница благодарности
├── css/
│   └── style.css
├── js/
│   └── main.js
└── tz-simplsystem-landing.md  # Полное ТЗ
```

### Разделы (SPA якоря)

| ID | Название |
|---|---|
| `#checkup` | Mini ITBP чекап |
| `#services` | Услуги |
| `#results` | Результаты |
| `#about` | О компании |
| `#faq` | Частые вопросы |
| `#contacts` | Контакты / Форма |

### Design Tokens

| Переменная | Значение |
|---|---|
| `--color-brand` | `#1A1A40` |
| `--color-accent` | `#00A8E8` |
| `--color-bg` | `#F8FAFC` |
| `--color-text-main` | `#111827` |

Шрифт: **Inter** (Google Fonts, 400/500/600/700)

---

## Контакты

- Email: shirokov-mv1@yandex.ru
- Telegram: [@ShirokovMV](https://t.me/ShirokovMV)
