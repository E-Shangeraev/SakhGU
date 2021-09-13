const { default: AdminJS } = require('adminjs')
const AdminJSMongoose = require('@adminjs/mongoose')

const {
  Admin,
  Subject,
  Area,
  TwoDiplomas,
  Institute,
  BachelorStepsOptions: BachelorSteps,
  MagistracyStepsOptions: MagistracySteps,
  News,
  BachelorDocumentsOptions: BachelorDocuments,
  MagistracyDocumentsOptions: MagistracyDocuments,
  GraduateDocumentsOptions: GraduateDocuments,
  SSEDocumentsOptions: SSEDocuments,
  ContactsMain,
  Contacts,
  ContactsSecretary,
  ContactsHE,
  ContactsME,
  YourStart,
  Uniqueness,
  Reviews,
} = require('./resourceOptions')

AdminJS.registerAdapter(AdminJSMongoose)

/** @type {import('adminjs').AdminJSOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
        yes: 'Да',
      },
      labels: {
        Admin: 'Администраторы',
        Subjects: 'Вступительные испытания',
        Areas: 'Направления подготовки',
        TwoDiplomas: 'Программа "Два диплома"',
        Institutes: 'Институты',
        BachelorSteps: 'Бакалавриат',
        MagistracySteps: 'Магистратура',
        News: 'Новости',
        BachelorDocuments: 'Бакалавриат',
        MagistracyDocuments: 'Магистратура',
        GraduateDocuments: 'Аспирантура',
        SSEDocuments: 'СПО',
        ContactsMain: 'Главная',
        Contacts: 'Контакты',
        ContactsSecretary: 'Ответственный секретарь',
        ContactsHE: 'Прием документов (ВО)',
        ContactsME: 'Прием документов (СПО)',
        YourStart: 'Твое начало пути',
        Uniqueness: 'Уникальность СахГУ',
        Reviews: 'Отзывы выпускников',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        Subjects: {
          properties: {
            name: 'Название предмета',
          },
        },
        Areas: {
          properties: {
            qualification: 'Квалификация',
            'qualification.0': 'Бакалавр/Специалист',
            'qualification.1': 'Магистр',
            code: 'Код специальности',
            name: 'Название',
            profile: 'Профиль',
            description: 'Описание',
            activities: 'Трудоустройство',
            twoDiplomas: 'Программа "Два диплома"',
            twoDiplomasDesc: 'О программе',
            partners: 'Партнеры',
            exams: 'Вступительные экзамены',
            'exams.main': 'Основной',
            'exams.mainScore': 'Кол-во баллов осн.',
            'exams.alternative': 'Альтернативный экзамен',
            'exams.alternativeScore': 'Кол-во баллов альт.',
            budget: 'Бюджетное',
            'budget.count': 'Кол-во мест',
            'budget.score': 'Проходной балл',
            paid: 'Платное',
            'paid.count': 'Кол-во мест',
            'paid.cost': 'Стоимость обучения',
          },
        },
        TwoDiplomas: {
          properties: {
            qualification: 'Квалификация',
            'qualification.0': 'Бакалавр',
            'qualification.1': 'Магистр',
            name: 'Название',
            description: 'Описание',
            features: 'О дипломах',
            uploadedFile: 'Фото',
            more: 'Подробное описание',
            published: 'Опубликовано',
            'published.yes': 'Да',
            'published.no': 'Нет',
          },
        },
        Institutes: {
          properties: {
            name: 'Имя',
            social: 'Ссылка на соцсеть',
            areas: 'Направления подготовки',
          },
        },
        BachelorSteps: {
          properties: {
            number: 'Порядковый номер',
            title: 'Заголовок',
            subtitle: 'Подзаголовок',
            uploadedImage: 'Изображение',
            text: 'Текст',
            fileNames: 'Названия файлов',
            uploadedFile: 'Файлы',
          },
        },
        MagistracySteps: {
          properties: {
            number: 'Порядковый номер',
            title: 'Заголовок',
            subtitle: 'Подзаголовок',
            uploadedImage: 'Изображение',
            text: 'Текст',
            fileNames: 'Названия файлов',
            uploadedFile: 'Файлы',
          },
        },
        News: {
          properties: {
            title: 'Заголовок',
            previewText: 'Превью текст',
            uploadedFile: 'Изображение',
            text: 'Текст',
            date: 'Дата публикации',
          },
        },
        BachelorDocuments: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            uploadedFile: 'Документы',
          },
        },
        MagistracyDocuments: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            uploadedFile: 'Документы',
          },
        },
        GraduateDocuments: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            uploadedFile: 'Документы',
          },
        },
        SSEDocuments: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            uploadedFile: 'Документы',
          },
        },
        ContactsMain: {
          properties: {
            phone: 'Номер телефона',
            email: 'Эл.почта',
            sites: 'Сайты',
            address: 'Адрес',
          },
        },
        Contacts: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            address: 'Адрес',
            phone: 'Номер телефона',
            email: 'Эл.почта',
          },
        },
        ContactsSecretary: {
          properties: {
            name: 'Имя',
            address: 'Адрес',
            phone: 'Номер телефона',
            email: 'Эл.почта',
          },
        },
        ContactsHE: {
          properties: {
            index: 'Порядковый номер',
            organization: 'Название организации',
            workTime: 'Время работы',
            address: 'Адрес',
            phone: 'Рабочий телефон',
            'phone.phone': 'Номер',
            'phone.text': 'Доп. текст',
            email: 'Эл.почта',
          },
        },
        ContactsME: {
          properties: {
            index: 'Порядковый номер',
            organization: 'Название организации',
            workTime: 'Время работы',
            address: 'Адрес',
            phone: 'Рабочий телефон',
            'phone.phone': 'Номер',
            'phone.text': 'Доп. текст',
            email: 'Эл.почта',
          },
        },
        YourStart: {
          properties: {
            text: 'Текст',
          },
        },
        Uniqueness: {
          properties: {
            index: 'Порядковый номер',
            title: 'Заголовок',
            text: 'Текст',
          },
        },
        Reviews: {
          properties: {
            index: 'Порядковый номер',
            uploadedFile: 'Фото',
            name: 'Имя',
            subtitle: 'Подзаголовок',
            text: 'Текст',
          },
        },
      },
    },
  },
  resources: [
    Admin,
    Subject,
    Area,
    TwoDiplomas,
    Institute,
    BachelorSteps,
    MagistracySteps,
    News,
    BachelorDocuments,
    MagistracyDocuments,
    GraduateDocuments,
    SSEDocuments,
    ContactsMain,
    Contacts,
    ContactsSecretary,
    ContactsHE,
    ContactsME,
    YourStart,
    Uniqueness,
    Reviews,
  ],
  branding: {
    companyName: 'СахГУ',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
