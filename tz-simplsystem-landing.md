# ТЗ: Лендинг SimplSystem

## 1. О проекте

- **SimplSystem** — сервис автоматизации бизнес-процессов.
- Специализация: внедрение **1С**, **Mini ITBP** (управленческий учёт).
- ITBP помогает владельцам видеть деньги, долги, сотрудников.
- Лендинг — точка входа для потенциальных клиентов.

---

## 2. Roadmap разработки

1. Согласовать структуру, тексты, визуал.
2. Создать страницы: privacy, consent, thanks.
3. Верстать на HTML/CSS/JS, Tailwind CSS.
4. Контент хранить в `landing-simplsystem.md`.
5. Документы: политика и согласие в PDF.
6. Подключить форму, аналитику, валидацию.

---

## 3. Технические требования

- Стек: **HTML / CSS / JS**. SPA, без фреймворков.
- Адаптивный дизайн, кросс-браузерность.
- Браузеры: Chrome, Firefox, Safari, Edge.
- Разделы (якоря): `checkup`, `services`, `results`, `about`, `faq`, `contacts`.
- Отдельные страницы: `privacy`, `consent`, `thanks`.
- Все формы — нативный HTML5.

---

## 4. Структура лендинга

### 4.1. Header
- Логотип **SimplSystem**.
- Навигация: checkup · services · results · about · FAQ · contacts.
- CTA-кнопка ведёт в `contacts`.
- Sticky-шапка.

### 4.2. Hero
- Заголовок + подзаголовок.
- Описание сервиса.
- **11 лет** опыта, **40+ клиентов**.
- CTA → раздел contacts.
- Фоновый визуал / иллюстрация.
- **9 логотипов** клиентов.

### 4.3. Проблема (Почему мы?)
- **56 болей** бизнеса:
  - Excel вместо CRM
  - хаос в данных
  - нет аналитики
  - и т.д.

### 4.4. Mini ITBP (чекап) — `id="checkup"`
- Описание продукта Mini ITBP.
- Интерактивный чекап.
- Направления:
  - CRM
  - финансы
  - производство
  - склад
  - HR
  - ...
- **35 вопросов**, **13 блоков**.

### 4.5. Результаты — `id="results"`
- Цифры:
  - **40+ клиентов**
  - **58** из 43 — рост показателей
  - **0 → 18** часов сэкономлено
- Краткие кейсы.

### 4.6. Услуги — `id="services"`
- **Блок 1:** Внедрение 1С
  - Настройка
  - Обучение
- **Блок 2:** amoCRM
  - 1С-интеграция
  - Воронки, автоматизация
- **Блок 3:** ITBP
  - Управленческий учёт
  - Дашборды, планирование
- Цены, сроки, результат.

### 4.7. Процесс — `id="process"`
- **4 шага:**
  1. Созвон — 12 мин, знакомство.
  2. Mini ITBP — 23 мин, диагностика.
  3. КП / CRM-предложение.
  4. Внедрение.
- Временны́е рамки.

### 4.8. Кейсы — `id="cases"`
- **34 кейса** (строительство, торговля, производство, услуги).

### 4.9. О SimplSystem — `id="about"`
- История компании.
- **11 лет** на рынке.
- **40+ клиентов**.
- Команда и ITBP-методология.

### 4.10. FAQ — `id="faq"`
- **46 вопросов:**
  - Что такое CRM1?
  - Сколько стоит?
  - Как долго?
  - Есть ли гарантия?
  - ...

### 4.11. Контакты — `id="contacts"`
- Форма обратной связи.
- Чекбоксы согласия.

### 4.12. Footer
- © SimplSystem, 2026.
- Ссылки: privacy, consent.
- PDF: [Политика](https://disk.yandex.ru/i/TLGlDVXwnJAuVQ) · [Согласие](https://disk.yandex.ru/i/bFYqbfEg2FtpOw)
- Email · Telegram.

---

## 5. Логика форм

### 5.1. Чекап
- Мультишаговая форма.
- Прогресс-бар + Telegram.
- Сохранение промежуточных ответов.

### 5.2. Контакты
- Обязательные поля.
- Ссылки на privacy и consent.
- Чекбоксы согласия.

### 5.3. Обратная связь
- Отправка данных на бэкенд.
- Перенаправление на страницу `thanks`.

### 5.4. Telegram-уведомление
- Уведомление менеджеру в течение **5 мин**.
- Формат: **10–15 строк**.

### 5.5. Email
- Письмо на shirokov-mv1@yandex.ru.
- Резервный канал (Telegram + CRM — основные).

---

## 6. Отдельные страницы

### 6.1. Privacy
- Политика конфиденциальности.
- Реквизиты: ИНН 3245081002 / 3198146, ОГРН 613802484146.
- Адрес: 143260, Московская обл., Шаховская.
- [PDF](https://disk.yandex.ru/i/TLGlDVXwnJAuVQ) target=_blank, rel=noopener noreferrer.

### 6.2. Consent
- Согласие на обработку персональных данных.
- [PDF](https://disk.yandex.ru/i/bFYqbfEg2FtpOw).

### 6.3. Thanks
- Страница «Спасибо!»
- Подтверждение и следующий шаг.

---

## 7. Design Tokens

### 7.1. Цвета (CSS)

```css
:root {
  --color-bg: #F8FAFC;
  --color-bg-white: #FFFFFF;
  --color-text-main: #111827;
  --color-text-muted: #6B7280;
  --color-border: #E5E7EB;
  --color-brand: #1A1A40;
  --color-brand-soft: #312E81;
  --color-accent: #00A8E8;
  --color-accent-hover: #008FC2;
  --color-success: #16A34A;
  --color-danger: #DC2626;
}
```

### 7.2. Шрифт

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

```css
body {
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 16px;
  line-height: 1.6;
}
h1 { font-size: 34px; font-weight: 700; line-height: 1.2; color: var(--color-brand); }
h2 { font-size: 26px; font-weight: 600; line-height: 1.3; color: var(--color-brand); }
h3 { font-size: 20px; font-weight: 600; line-height: 1.4; }

.button-primary {
  display: inline-flex; align-items: center; justify-content: center;
  padding: 12px 20px; border-radius: 9999px;
  background-color: var(--color-accent); color: #FFFFFF;
  font-weight: 600; font-size: 16px;
  border: none; cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
}
.button-primary:hover { background-color: var(--color-accent-hover); transform: translateY(-1px); }

.button-secondary {
  padding: 10px 18px; border-radius: 9999px;
  border: 1px solid var(--color-border); background-color: #FFFFFF;
  color: var(--color-brand); font-weight: 500;
}
```

### 7.3. Сетка

```css
.section { padding-top: 64px; padding-bottom: 64px; }
@media (min-width: 1024px) { .section { padding-top: 80px; padding-bottom: 80px; } }
.container { width: 100%; max-width: 1120px; margin: 0 auto; padding-left: 16px; padding-right: 16px; }
```

---

## 8. Рекомендации по контенту

### 8.1. Тексты
- Конкретные цифры и факты.
- Без воды, без клише.
- Говорим языком клиента.

### 8.2. Структура аргументации
- Боль → решение → доказательство.
- Mini ITBP — пошаговый pipeline.
- Кейсы по отраслям.
- FAQ закрывает возражения.

---

## 9. Документы и ссылки

- [Политика конфиденциальности (PDF)](https://disk.yandex.ru/i/TLGlDVXwnJAuVQ)
- [Согласие на обработку ПД (PDF)](https://disk.yandex.ru/i/bFYqbfEg2FtpOw)
- [Лендинг контент (MD)](https://disk.yandex.ru/i/kVcuKUcVrbPcpw)
- [Лендинг тексты (MD)](https://disk.yandex.ru/i/tIDd9bA-CxyGyg)

---

## 10. Контакты проекта

- Email: shirokov-mv1@yandex.ru
- Telegram: @ShirokovMV
