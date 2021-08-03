const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')

const { Admin, Subject, Area, TwoDiplomas } = require('./resourceOptions')

AdminBro.registerAdapter(AdminBroMongoose)

/** @type {import('admin-bro').AdminBroOptions} */
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
      },
      labels: {
        Admin: 'Администраторы',
        Subjects: 'Предметы подготовки',
        Areas: 'Направления подготовки',
        TwoDiplomas: 'Программа "Два диплома"',
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
            'qualification.0': 'Бакалавр/Специалитет',
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
            features: 'Преимущества',
            uploadedFile: 'Фото',
            more: 'Подробное описание',
          },
        },
      },
    },
  },
  resources: [Admin, Subject, Area, TwoDiplomas],
  branding: {
    companyName: 'СахГУ',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
