/* eslint-disable no-prototype-builtins */
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Modal from '@components/Modal/Modal'
import ConsultationBlock from '@components/ConsultationBlock/ConsultationBlock'
import './AreaBlock.scss'

const AreaBlock = React.memo(({ item, year }) => {
  const {
    name,
    code,
    twoDiplomas,
    twoDiplomasDesc,
    description,
    partners,
    budget,
    paid,
    profile,
    exams,
    activities,
  } = item

  return (
    <div className="area-block">
      {name && <h3 className="area__name">{name}</h3>}
      {twoDiplomas && (
        <Link to="/two-diplomas" target="_blank" className="bage">
          Программа «2 диплома»
        </Link>
      )}
      {twoDiplomasDesc && (
        <p className="text area-block__text">{twoDiplomasDesc}</p>
      )}
      <div className="area-block__profile">
        <ul className="area-block__list">
          {profile.map((profileName, index) => (
            <li key={uuidv4()}>
              Профиль {index + 1}: {profileName}
            </li>
          ))}
        </ul>
        {description && (
          <>
            <h4 className="area-block__subtitle">Описание</h4>
            <p className="text area-block__text">{description}</p>
          </>
        )}
        {Object.keys(exams[0]).length > 1 && (
          <>
            <h4 className="area-block__subtitle">Вступительные испытания</h4>
            <ul className="area-block__list">
              {exams.map(exam => (
                <li key={uuidv4()}>
                  {exam.alternative
                    ? `${exam.main.name} ${
                        exam.mainScore ? `(${exam.mainScore})` : ''
                      }  /
                  ${exam.alternative.name} (${exam.alternativeScore})`
                    : `${exam.main.name} ${
                        exam.mainScore ? `(${exam.mainScore})` : ''
                      }`}
                </li>
              ))}
            </ul>
          </>
        )}
        {activities.length ? (
          <>
            <h4 className="area-block__subtitle">Трудоустройство</h4>
            <ul className="area-block__list">
              {activities.map(activity => (
                <li key={uuidv4()}>{activity}</li>
              ))}
            </ul>
          </>
        ) : null}
        {partners.length ? (
          <>
            <h4 className="area-block__subtitle">Партнеры</h4>
            <ul className="area-block__list">
              {partners.map(partner => (
                <li key={uuidv4()}>{partner}</li>
              ))}
            </ul>
          </>
        ) : null}
        {(budget || paid) && (
          <ul className="area__count">
            {budget && (
              <li key={uuidv4()}>
                <span>{budget.count ? budget.count : '—'}</span>
                <span>бюджетных мест</span>
              </li>
            )}
            {paid && (
              <li>
                <span>{paid.count ? paid.count : '—'}</span>
                <span>платных мест</span>
              </li>
            )}
            {budget && (
              <li>
                <span>{budget.score ? budget.score : '—'}</span>
                <span>проходной балл</span>
                <span>за {year} год</span>
              </li>
            )}
            {paid && (
              <li>
                <span>
                  {paid.cost ? `${paid.cost.toLocaleString('ru-RU')} ₽` : '—'}
                </span>
                <span>стоимость за год</span>
              </li>
            )}
          </ul>
        )}

        <Modal btnText="Хочу поступить сюда" btnColor="yellow">
          <ConsultationBlock
            areaName={name}
            areaCode={code}
            title="Оставьте свои контактные данные
            и мы свяжемся с вами в ближайшее время"
          />
        </Modal>
      </div>
    </div>
  )
})

AreaBlock.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  year: PropTypes.number.isRequired,
}

export default AreaBlock
