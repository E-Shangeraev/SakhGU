import React from 'react'

const Personal = () => (
  <div className="documents-block documents-block--personal">
    <h3 className="documents-block__title">Лично</h3>
    <p className="documents-block__text">
      Мы ждем тебя в приемной комиссии, которая расположена по адресу: ул.
      Ленина, 290, 2 кабинет. Приемная комиссия работает с 9 до 17 с перерывом
      на обед с 13 до 14 (с понедельника по пятницу) и с 9 до 13 в субботу.
    </p>
    <span>С собой принести:</span>
    <ul className="documents-block__list">
      <li>паспорт,</li>
      <li>документ об образовании (аттестат или диплом),</li>
      <li>СНИЛС (при наличии),</li>
      <li>льготные документы (при наличии),</li>
      <li>
        документы, подтверждающие индивидуальные достижения (при наличии).
      </li>
    </ul>
    <p className="documents-block__text">
      Заявление на поступление и заявление о согласии на обработку персональных
      данных тебе помогут заполнить в приемной комиссии.{' '}
    </p>
    <p className="documents-block__text">
      Для того, чтобы подать заявление, не надо ждать результатов ЕГЭ. Все
      результаты появятся в Федеральной информационной системе.
    </p>
  </div>
)

export default Personal
