import React from 'react'
import { useSelector } from 'react-redux'
import './About.scss'
import { useTranslation } from 'react-i18next'

const About = () => {
  const { data } = useSelector((state) => state.user)
  const { t } = useTranslation()

  return (
    <section className="about" id="about">
      <div className="about__left">
        <img src={data?.avatar_url} className="about__left-img"/>
      </div>
      <div className="about__right">
        <p className="about__right-info">
          {t('about-info')}
        </p>
        <p className="about__right-degrees">
          {t('about-degrees')}
        </p>
      </div>
    </section>
  )
}

export default About