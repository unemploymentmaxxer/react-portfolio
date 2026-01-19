import React from 'react'
import './Contacts.scss'
import { useTranslation } from 'react-i18next'

const Contacts = () => {

  const { t } = useTranslation()

  return (
    <section className="contacts" id="contacts">
      <h2 className="contacts__title">{t('contacts')}</h2>
      <ul className="contacts__list">
        <li>
          <span className="contacts__email">{t('email')}:</span>
          <a href="mailto:example@mail.com" className="contacts__link">kadrileevworkmail@gmail.com</a>
        </li>
        <li>
          <span className="contacts__github">GitHub:</span>
          <a href="https://github.com/unemploymentmaxxer"className="contacts__link">github.com/unemploymentmaxxer</a>
        </li>
      </ul>
    </section>
  )
}

export default Contacts
