import React from 'react'
import './Footer.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {

  const { t } = useTranslation()

  return (
    <footer className="footer">
      <p className="footer__text">
        © 2026 unemploymentmaxxer. {t('all-rights-reserved')}.
      </p>
    </footer>
  )
}

export default Footer
