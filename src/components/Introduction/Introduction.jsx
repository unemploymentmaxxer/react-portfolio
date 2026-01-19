import React from 'react'
import { useSelector } from 'react-redux'
import './Introduction.scss'
import { useTranslation } from 'react-i18next'

const Introduction = () => {
  const { data, status } = useSelector((state) => state.user)
  const { t } = useTranslation()

  return (
    <section className="introduction">
      <h2 className="introduction__title">
        {status === 'loading' ? 'Loading...' : `${t('intro')} ${data?.login}`}
      </h2>
      <p className="introduction__speciality">Frontend / React Developer</p>
      <a href={data?.html_url} className="introduction__link">GitHub</a>
    </section>
  )
}

export default Introduction
