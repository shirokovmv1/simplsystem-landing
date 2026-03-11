document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileToggle && mobileMenu) {
    mobileToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', event => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Checkup multi-step logic
  const checkupForm = document.getElementById('checkup-form');
  if (checkupForm) {
    const steps = Array.from(checkupForm.querySelectorAll('.checkup-step'));
    const btnNext = document.getElementById('checkup-next');
    const btnPrev = document.getElementById('checkup-prev');
    const stepCurrentEl = document.getElementById('checkup-step-current');
    const stepTotalEl = document.getElementById('checkup-step-total');
    const progressBar = document.getElementById('checkup-progress');

    let currentStepIndex = 0;
    const totalSteps = steps.length;
    if (stepTotalEl) stepTotalEl.textContent = String(totalSteps);

    function updateStep(direction) {
      if (direction === 'next') {
        const currentStep = steps[currentStepIndex];
        const inputs = currentStep.querySelectorAll('select, textarea, input[required]');
        let valid = true;
        inputs.forEach(input => {
          input.classList.remove('error');
          if (!input.value) {
            valid = false;
            input.classList.add('error');
          }
        });
        if (!valid) return;
        if (currentStepIndex < totalSteps - 1) currentStepIndex += 1;
      } else if (direction === 'prev') {
        if (currentStepIndex > 0) currentStepIndex -= 1;
      }

      steps.forEach((step, index) => {
        step.classList.toggle('hidden', index !== currentStepIndex);
      });

      const stepNumber = currentStepIndex + 1;
      if (stepCurrentEl) stepCurrentEl.textContent = String(stepNumber);
      if (btnPrev) btnPrev.disabled = currentStepIndex === 0;
      if (btnNext) {
        btnNext.textContent = stepNumber === totalSteps ? 'Отправить мини‑чекап' : 'Далее';
      }
      if (progressBar) {
        const percent = (stepNumber / totalSteps) * 100;
        progressBar.style.width = `${percent}%`;
      }
    }

    updateStep(); // init

    if (btnNext) {
      btnNext.addEventListener('click', () => {
        if (currentStepIndex === totalSteps - 1) {
          // Final pseudo-submit: here you can интегрировать с backend / Telegram
          const formData = new FormData(checkupForm);
          const payload = Object.fromEntries(formData.entries());
          console.log('Mini ITBP checkup payload:', payload);
          alert('Спасибо! Мы получили ответы мини‑чекапа. Менеджер свяжется с вами в Telegram.');
          checkupForm.reset();
          currentStepIndex = 0;
          updateStep();
        } else {
          updateStep('next');
        }
      });
    }

    if (btnPrev) {
      btnPrev.addEventListener('click', () => updateStep('prev'));
    }
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', async event => {
      event.preventDefault();
      if (contactMessage) {
        contactMessage.textContent = '';
      }

      let valid = true;
      const requiredFields = contactForm.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        field.classList.remove('error');
        if (!field.value || (field.type === 'checkbox' && !field.checked)) {
          valid = false;
          field.classList.add('error');
        }
      });
      if (!valid) {
        if (contactMessage) {
          contactMessage.textContent = 'Пожалуйста, заполните обязательные поля и подтвердите согласия.';
        }
        return;
      }

      const submitButton = contactForm.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Отправляем...';
      }

      try {
        const formData = new FormData(contactForm);
        const payload = Object.fromEntries(formData.entries());
        console.log('Contact form payload:', payload);

        // TODO: заменить на реальный endpoint бэкенда / интеграцию с Telegram и email
        // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(payload) });

        // Redirect to thanks page as per ТЗ
        window.location.href = 'thanks.html';
      } catch (error) {
        console.error(error);
        if (contactMessage) {
          contactMessage.textContent = 'Не удалось отправить форму. Попробуйте ещё раз или напишите в Telegram @ShirokovMV.';
        }
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = 'Отправить заявку';
        }
      }
    });
  }
});

