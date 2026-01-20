import React from 'react'
import { useTranslation } from 'react-i18next'

const ProjectCard = ({ project }) => {

  const { t } = useTranslation()
  const imgUrl = `https://opengraph.githubassets.com/1/${project.owner.login}/${project.name}`
  const placeholder = '/placeholder.png'

  return (
    <div className="project__card">
      <img src={imgUrl} alt="" className="project__card-img" onError={(e) => {e.currentTarget.src = placeholder}}/>
      <h2 className="project__card-title">{project.name}</h2>
      <p className="project__card-description">
        {project.description || `${t('no-description')}`}
      </p>
      <div className="project-card__info">
        <span className="project-card__info-rating">{t('rating')}: {project.stargazers_count}</span>
        <span className="project-card__info-languages">{t('languages')}: {project.language || 'N/A'}</span>
      </div>
      <a href={project.html_url} className="project-card__link">GitHub</a>
    </div>
  )
}

export default ProjectCard
