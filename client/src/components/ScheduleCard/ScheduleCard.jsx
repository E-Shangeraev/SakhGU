import React from 'react'
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid'
import timeIcon from '@assets/img/icons/time.svg'
import mapIcon from '@assets/img/icons/map.svg'
import phoneIcon from '@assets/img/icons/phone.svg'
import mailIcon from '@assets/img/icons/mail-2.svg'
import './ScheduleCard.scss'

const ScheduleCard = ({ institute, time, address, phone, email }) => (
  <div className="schedule-card">
    <h4 className="schedule-card__institute">{institute}</h4>
    <ul className="schedule-card__contacts">
      <li>
        <p>
          <img src={timeIcon} alt="Иконка часов" />
          <b>Время работы:</b>
        </p>
        <div>
          {time.length ? time.map(item => <p key={uuidv4()}>{item}</p>) : null}
        </div>
      </li>
      <li>
        <p>
          <img src={mapIcon} alt="Иконка карты" />
          <b>Адрес:</b>
        </p>
        <span>{address}</span>
      </li>
      <li>
        <p>
          <img src={phoneIcon} alt="Иконка телефона" />
          <b>Рабочий телефон:</b>
        </p>
        <div>
          {phone.length
            ? phone.map(item => (
                <p key={uuidv4()}>
                  <a href={`tel:${item.phone}`}>{item.phone}</a>{' '}
                  {item.text && <span>({item.text})</span>}
                </p>
              ))
            : null}
        </div>
      </li>
      <li>
        <p>
          <img src={mailIcon} alt="Иконка конверта" />
          <b>E‑mail:</b>
        </p>
        <a href={`mailto:${email}`}>{email}</a>
      </li>
    </ul>
  </div>
)

ScheduleCard.propTypes = {
  institute: PropTypes.string.isRequired,
  time: PropTypes.arrayOf(PropTypes.string).isRequired,
  address: PropTypes.string.isRequired,
  phone: PropTypes.arrayOf(PropTypes.object).isRequired,
  email: PropTypes.string.isRequired,
}

export default ScheduleCard
