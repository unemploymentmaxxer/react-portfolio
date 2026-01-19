import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProjects } from '../../store/projectsSlice'
import ProjectCard from './ProjectCard'
import './Projects.scss'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(
    (state) => state.projects
  )
  const { t } = useTranslation()

  useEffect(() => {
    dispatch(fetchProjects())
  }, [dispatch])

  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">{t('projects')}</h2>
      {status == 'loading' && <h2>Loading...</h2>}
      {status == 'failed' && <h2>Error: {error}</h2>}
      <div className="projects__list">
        {items.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
