import React from 'react'
import './Skills.scss'
import { useTranslation } from 'react-i18next'

const Skills = () => {

const { t } = useTranslation()

const skills = [
  {
    id: 1,
    title: 'HTML',
    level: 'Advanced',
  },
  {
    id: 2,
    title: 'CSS / SCSS',
    level: 'Advanced',
  },
  {
    id: 3,
    title: 'JavaScript',
    level: 'Intermediate',
  },
  {
    id: 4,
    title: 'React',
    level: 'Intermediate',
  },
  {
    id: 5,
    title: 'Git',
    level: 'Beginner',
  },
  {
    id: 6,
    title: 'Redux',
    level: 'Intermediate',
  },
]

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">{t('skills')}</h2>
      <div className="skills__list">
        {skills.map((skill) => (
          <div className="skills__card" key={skill.id}>
            <h3 className="skills__card-title">{skill.title}</h3>
            <span className="skills__card-level">{skill.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills