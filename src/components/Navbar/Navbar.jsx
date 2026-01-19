import React from 'react'
import './Navbar.scss'
import { toggleTheme } from '../../store/themeSlice'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'

const Navbar = () => {

  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  const changeLanguage = () => {
    const newLng = i18n.language == 'ru' ? 'en' : 'ru'
    i18n.changeLanguage(newLng)
  }
 
  return (
    <>
      <nav className="nav">
        <a href="" className="nav__logo">{t('portfolio')}</a>
        <ul className="nav__list">
          <li><a href="#about" className="nav__list-link">{t('about')}</a></li>
          <li><a href="#skills" className="nav__list-link">{t('skills')}</a></li>
          <li><a href="#projects" className="nav__list-link">{t('projects')}</a></li>
          <li><a href="#contacts" className="nav__list-link">{t('contacts')}</a>
          </li>
        </ul>
        <div className="nav__options">
          <button className="nav__options-language" onClick={() => changeLanguage()}>{t('language')}: {i18n.language == 'ru' ? 'RU' : 'EN'}</button>
          <button className="nav__options-theme" onClick={() => dispatch(toggleTheme())}>{t('theme')}</button>
        </div>
      </nav>
    </>
  )
}

export default Navbar