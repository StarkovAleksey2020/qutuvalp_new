$(document).ready(function () {
  // i18next
  i18next.init(
    {
      lng: "en",
      resources: {
        en: {
          translation: {
            bodyAll: {
              sendRequest: "Send request",
              scheduleCall: "Schedule a Call",
              companyName: "Qutuva",
              menuItemServices: "Services",
              menuItemICan: "I can",
              menuItemStudy: "Study",
              menuItemPortfolio: "Our works",
              menuItemJob: "Job",
              menuItemContact: "Contact us",
              menuItemContacts: "Contacts",
              mainTitle: "Any Business challenge will be solved",
              mainSubTitle:
                "You shouldn’t have to be a software engineer to bring you business to life",
              buttonQuiz: "Request a consultation",
              servicesTitle: "Competing in a digital marketplace",
              servicesSubTitle1: "You know what you need",
              servicesSubTitle2: "Let us worry about how to do it",
              serviceWebTitle: "Web Development",
              serviceWebText:
                "Growing pains are a part of any successful venture, but they don’t have to slow you down. Cloud-based applications are scalable solutions that boost functionality and reduce cost",
              serviceMobileTitle: "Mobile Development",
              serviceMobileText:
                "Be prepared when your customer needs you most, even if that's on the move",
              serviceMVPTitle: "MVP",
              serviceMVPText:
                "Achieving liftoff requires a laser-focus on the essentials without compromising on quality. We get it",
              serviceAuditTitle: "IT Audit and Consulting",
              serviceAuditText:
                "Did you know that almost 50% of cyber attacks target small businesses?",
              worksTitle: "Our works",
              worksMechanicalTitle: "Mechanical engineering",
              worksMechanicalText:
                "AUTOMATE DOCUMENT MANAGEMENT SYSTEM AND SAVE $600K/YEAR Client: Irkut corporation",
              worksFinanceTitle: "Finance",
              worksFinanceText:
                "WHEN PAYROLL GOES DOWN, THE PRICE IS STEEP: $120,000/HOUR Client: VL Bank",
              worksMediaTitle: "Media",
              worksMediaText:
                "AUTOMATED PROGRAM SAVED BWC $10K PER MINUTE Client: Baikal West Com--BWC",
              worksMVPTitle: "MVP",
              worksMVPText:
                "ROBUST MVP FOR $440,000 LESS THAN THE NEAREST COMPETITION Client: Liquid Media",
              contactTitle: "Get in touch",
              footerContactsTitle: "Contacts",
              footerAboutTitle: "About us",
              footerNetworksTitle: "Social networks",
              footerTeam: "Core team",
              footerVacancies: "Vacancies",
              portfolioBlockTitle: "Our works",
              contactsWriteMe: "Write me",
              contactsName: "Name *",
              contactsEmail: "Email *",
              contactsPhone: "Phone",
              contactsMessage: "Tell us more, or just say hi!",
              contactsSend: "Send",
              contactsObligatory: "* Obligatory field",
              quizTitle:
                "Hi there, just a couple quick questions to understand your situation",
              quizName: "What's your name?",
              quizFieldIndustry: "Field of Industry?",
              quizFieldIndustryFinance: "Finance",
              quizFieldIndustryTrade: "Trade",
              quizFieldIndustryProduction: "Production",
              quizFieldIndustryTransport: "Transport",
              quizFieldIndustryEducation: "Education",
              quizFieldIndustryTourism: "Tourism",
              quizFieldIndustryRelaxation: "Relaxation",
              quizFieldIndustryScience: "Science",
              quizFieldIndustryServices: "Services",
              quizFieldIndustryOther: "Other",
              quizLocation: "Location?",
              quizHelp: "How can we help?",
              quizIssue: "Describe your issue ...",
              quizAddress: "How can we reach you?",
              quizFinish: "Finish",
              thankYouTitle: "Thank you!",
              thankYouSubTitle: "Your message has been sent",
              thankYouText: "I will contact you as soon as possible",
              thankYouBack: "Return",
              worksSlideCustomerTitle: "Client:",
              worksSlideProblemTitle: "Problem:",
              worksSlideResultTitle: "Result:",
              worksSlideMore: "More details",
              worksSlideTitle1:
                "AUTOMATE DOCUMENT MANAGEMENT SYSTEM AND SAVE $600K/YEAR",
              worksSlideCustomer1: "Irkut corporation",
              worksSlideProblem1:
                "Old document management system unable to process additional documents.",
              worksSlideResult1_0:
                "- A brand new DMS based on a Microsoft platform with a workflow-based UI, making it user-friendly and simple to use.",
              worksSlideResult1_1:
                "- Drastically improved employee time management to save $600,000/year.",
              worksSlideTitle2:
                "WHEN PAYROLL GOES DOWN, THE PRICE IS STEEP: $120,000/HOUR",
              worksSlideCustomer2: "VL Bank",
              worksSlideProblem2: "Unstable payment system.",
              worksSlideResult2_0:
                "- Stabilized payment system in two months, saving the bank 120K/hour.",
              worksSlideResult2_1:
                "- Greater predictability and full departmental control of the core banking software and payment system.",
              worksSlideResult2_2:
                "- Customized CI-server software to collect runtime information and alert the operator if anything goes wrong.",
              worksSlideResult2_3:
                "- After several years of runtime, not a single moment of downtime.",
              worksSlideTitle3: "AUTOMATED PROGRAM SAVED BWC $10K PER MINUTE.",
              worksSlideCustomer3: "Baikal West Com--BWC",
              worksSlideProblem3:
                "Outdated manual interface and lack of automation resulted in extremely slow and costly functionality.",
              worksSlideResult3_0:
                "- Significantly decreased working capital expenditures.",
              worksSlideResult3_1:
                "- Fewer mistakes and superior troubleshooting capabilities.",
              worksSlideResult3_2: "- Maximized long-term growth potential.",
              worksSlideTitle4:
                "ROBUST MVP FOR $440,000 LESS THAN THE NEAREST COMPETITION.",
              worksSlideCustomer4: "Liquid Media",
              worksSlideProblem4:
                "Unskilled contractors created an unsupportable and unscalable MVP--entire overhaul was necessary to ensure functionality.",
              worksSlideResult4_0:
                "- Fully capable web version launched after only 2 months.",
              worksSlideResult4_1:
                "- Reduced total expenses by nearly half a million dollars.",
              worksSlideResult4_2:
                "- New structure enabled seamless implementation of additional platform functionality. (Android, IOS)",
              teamSubtitle:
                "Skilled IT professionals with a passion for startups.",
              coreTeam: "Core team",
            },
          },
        },
        ru: {
          translation: {
            bodyAll: {
              sendRequest: "Отправить запрос",
              scheduleCall: "Запланировать звонок",
              companyName: "Qutuva",
              menuItemServices: "Услуги",
              menuItemICan: "Я умею",
              menuItemStudy: "Где учился",
              menuItemPortfolio: "Наши работы",
              menuItemJob: "Где работал",
              menuItemContact: "Написать нам",
              menuItemContacts: "Контакты",
              mainTitle: "Программное обеспечение",
              mainSubTitle: "Разработка & Поддержка",
              buttonQuiz: "Заказать услугу",
              servicesTitle: "Конкуренция на цифровом рынке",
              servicesSubTitle1: "Вы знаете что вам нужно",
              servicesSubTitle2: "Давайте подумаем о том, как это сделать",
              serviceWebTitle: "Веб-разработка",
              serviceWebText:
                "Проблемы роста являются частью любого успешного предприятия, но они не должны вас тормозить. Облачные приложения - это масштабируемые решения, повышающие функциональность и снижающие затраты.",
              serviceMobileTitle: "Мобильная разработка",
              serviceMobileText:
                "Будьте готовы к тому, что клиенту вы больше всего нужны, в момент когда он находится в движении.",
              serviceMVPTitle: "Минимально жизнеспособный продукт",
              serviceMVPText:
                "Чтобы добиться успеха, необходимо сосредоточиться на главном без ущерба для качества. Мы получим это.",
              serviceAuditTitle: "ИТ-аудит и консалтинг",
              serviceAuditText:
                "Знаете ли вы, что почти 50% кибератак нацелены на малый бизнес?",
              worksTitle: "Портфолио",
              worksMechanicalTitle: "Инженерное дело",
              worksMechanicalText:
                "АВТОМАТИЧЕСКАЯ СИСТЕМА УПРАВЛЕНИЯ ДОКУМЕНТАМИ И ЭКОНОМИЯ 600 ТЫС. ДОЛЛАРОВ В ГОД. Клиент: Корпорация Иркут",
              worksFinanceTitle: "Финансы",
              worksFinanceText:
                "КОГДА ПЕРЕДАЧА УМЕНЬШАЕТСЯ, ЦЕНА: 120 000 $/ЧАС. Клиент: VL Bank",
              worksMediaTitle: "СМИ",
              worksMediaText:
                "АВТОМАТИЧЕСКАЯ ПРОГРАММА СОХРАНЯЕТ BWC 10 000 $ В МИНУТУ. Клиент: Baikal West Com - BWC",
              worksMVPTitle: "Минимально жизнеспособный продукт",
              worksMVPText:
                "НАДЕЖНЫЙ MVP НА 440 000 долларов ДЕШЕВЛЕ, ЧЕМ У БЛИЖАЙШИХ КОНКУРЕНТОВ. Клиент: Liquid Media",
              contactTitle: "Напишите нам",
              footerContactsTitle: "Контакты",
              footerAboutTitle: "О нас",
              footerNetworksTitle: "Социальные сети",
              footerTeam: "Команда",
              footerVacancies: "Вакансии",
              portfolioBlockTitle: "Портфолио",
              contactsTitle: "Связаться",
              contactsWriteMe: "Напишите мне",
              contactsName: "Имя *",
              contactsPhone: "Телефон",
              contactsEmail: "Email *",
              contactsMessage:
                "Расскажите подробнее или просто поздоровайтесь!",
              contactsSend: "Отправить",
              contactsObligatory: "* Обязательное поле",
              quizTitle:
                "Привет, всего пара простых вопросов, чтобы понять вашу ситуацию",
              quizName: "Как вас зовут?",
              quizFieldIndustry: "Сфера деятельности?",
              quizFieldIndustryFinance: "Финансы",
              quizFieldIndustryTrade: "Торговля",
              quizFieldIndustryProduction: "Производство",
              quizFieldIndustryTransport: "Транспорт",
              quizFieldIndustryEducation: "Образование",
              quizFieldIndustryTourism: "Туризм",
              quizFieldIndustryRelaxation: "Отдых",
              quizFieldIndustryScience: "Наука",
              quizFieldIndustryServices: "Услуги",
              quizFieldIndustryOther: "Прочее",
              quizLocation: "Расположение?",
              quizHelp: "Как мы можем помочь?",
              quizIssue: "Опишите вашу проблему ...",
              quizAddress: "Как мы можем с вами связаться?",
              quizFinish: "Завершить",
              thankYouTitle: "Спасибо!",
              thankYouSubTitle: "Ваше сообщение отправлено",
              thankYouText: "Я свяжусь с Вами в самое ближайшее время",
              thankYouBack: "Вернуться",
              worksSlideCustomerTitle: "Клиент: ",
              worksSlideProblemTitle: "Основная проблема:",
              worksSlideResultTitle: "Результат: ",
              worksSlideMore: "Подробнее",
              worksSlideTitle1:
                "АВТОМАТИЧЕСКАЯ СИСТЕМА УПРАВЛЕНИЯ ДОКУМЕНТАМИ И ЭКОНОМИЯ 600000 ДОЛЛАРОВ В ГОД.",
              worksSlideCustomer1: "Корпорация ИРКУТ",
              worksSlideProblem1:
                "Старая система управления документами не может обрабатывать дополнительные документы.",
              worksSlideResult1_0:
                "- Совершенно новая DMS на платформе Microsoft с пользовательским интерфейсом на основе рабочего процесса, что делает ее удобной и простой в использовании.",
              worksSlideResult1_1:
                "- Значительно улучшено управление временем сотрудников, экономия составила 600 000 долларов в год.",
              worksSlideTitle2:
                "КОГДА ПЛАТЕЖИ УМЕНЬШАЮТСЯ, ЭКОНОМИЯ: 120 000 $ / ЧАС",
              worksSlideCustomer2: "ВЛ БАНК",
              worksSlideProblem2: "Нестабильная платежная система.",
              worksSlideResult2_0:
                "- Стабилизированная платежная система за два месяца, экономия банка 120к / час.",
              worksSlideResult2_1:
                "- Большая предсказуемость и полный ведомственный контроль над основным банковским программным обеспечением и платежной системой.",
              worksSlideResult2_2:
                "- Настроенное программное обеспечение CI-сервера для сбора информации о времени выполнения и предупреждения оператора, если что-то пойдет не так.",
              worksSlideResult2_3:
                "- После нескольких лет работы без единого простоя.",
              worksSlideTitle3:
                "АВТОМАТИЧЕСКАЯ ПРОГРАММА ЭКОНОМИЛА BWC 10 000 ДОЛЛАРОВ В МИНУТУ.",
              worksSlideCustomer3: "БайкалВестКом",
              worksSlideProblem3:
                "Устаревший ручной интерфейс и отсутствие автоматизации привели к чрезвычайно медленной и дорогостоящей работе.",
              worksSlideResult3_0:
                "- Значительно снизились затраты на оборотный капитал.",
              worksSlideResult3_1:
                "- Меньше ошибок и превосходные возможности устранения неполадок.",
              worksSlideResult3_2:
                "- Максимальный потенциал долгосрочного роста.",
              worksSlideTitle4:
                "НАДЕЖНЫЙ MVP ЗА 440 000 долларов МЕНЬШЕ БЛИЖАЙШЕГО КОНКУРСА.",
              worksSlideCustomer4: "Liquid Media",
              worksSlideProblem4:
                "Неквалифицированные подрядчики создали неподдерживаемый и не масштабируемый MVP - для обеспечения функциональности потребовался полный ремонт.",
              worksSlideResult4_0:
                "- Полнофункциональная веб-версия запущена всего через 2 месяца.",
              worksSlideResult4_1:
                "- Снижены общие расходы почти на полмиллиона долларов.",
              worksSlideResult4_2:
                "- Новая структура позволила беспрепятственно реализовать дополнительные функции платформы (Android, IOS).",
              teamSubtitle:
                "Квалифицированные ИТ-специалисты, увлеченные стартапами.",
              coreTeam: "Команда",
            },
          },
        },
      },
    },
    function (err, t) {
      i18nextJquery.init(i18next, $);
      $(".bodyAll").localize();

      $(".lang-select").click(function () {
        i18next.changeLanguage(this.innerHTML);
        var langEn = $(".lang-en");
        var langRu = $(".lang-ru");
        if (this.type === "ru") {
          langRu.addClass("lang-select-image--pressed");
          langEn.removeClass("lang-select-image--pressed");
        }
        if (this.type === "en") {
          langEn.addClass("lang-select-image--pressed");
          langRu.removeClass("lang-select-image--pressed");
        }
        i18next.changeLanguage(this.type);
        $(".bodyAll").localize();
      });
    }
  );
});
