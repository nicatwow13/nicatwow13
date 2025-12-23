import { HiOutlineSparkles } from 'react-icons/hi2'
import { FiTool } from 'react-icons/fi'
import styles from './counters.module.css'
import { skillIconMap } from '../lib/projectsData.js'

type Highlight = string | { text: string; code?: string }

type Project = {
  slug: string
  title: string
  date: string
  skills: { icon?: string; label: string }[]
  highlights: Highlight[]
}

type SkillTagProps = {
  icon?: string
  label: string
}

const CodeSnippet = ({ code, label }: { code: string; label: string }) => {
  return (
    <div className={styles.code_shell}>
      <div className={styles.code_header}>
        <span className={`${styles.code_dot} ${styles.code_dot_red}`} aria-hidden />
        <span className={`${styles.code_dot} ${styles.code_dot_yellow}`} aria-hidden />
        <span className={`${styles.code_dot} ${styles.code_dot_green}`} aria-hidden />
        <span className={styles.code_filename}>{label}</span>
      </div>
      <pre className={styles.code_block}>
        <code>{code}</code>
      </pre>
    </div>
  )
}

const SkillTag = ({ icon, label }: SkillTagProps) => {
  const Icon = icon && icon in skillIconMap ? skillIconMap[icon as keyof typeof skillIconMap] : FiTool
  return (
    <button type="button" className={styles.skill_badge} disabled aria-disabled="true">
      <Icon className={styles.skill_icon} aria-hidden />
      <span>{label}</span>
    </button>
  )
}

export default function ProjectDetail({ project }: { project?: Project }) {
  if (!project) {
    return (
      <article className={styles.component}>
        <p className={styles.job_university}>Project not found</p>
      </article>
    )
  }

  return (
    <article className={styles.component} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <p className={styles.date}>{project.date}</p>
      <h1 className={styles.job_university} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0 }}>
        <HiOutlineSparkles className={styles.skill_icon} aria-hidden />
        <span>{project.title}</span>
      </h1>
      <div className={styles.skill_row}>
        {project.skills.map((skill) => (
          <SkillTag key={`${project.slug}-${skill.label}`} icon={skill.icon} label={skill.label} />
        ))}
      </div>
      <div className={styles.experience_detail} style={{ marginTop: '8px' }}>
        <ul>
          {project.highlights.map((item, idx) => {
            if (typeof item === 'string') {
              return <li key={`${project.slug}-hl-${idx}`}>{item}</li>
            }

            return (
              <li key={`${project.slug}-hl-${idx}`} className={styles.highlight_item}>
                <div className={styles.highlight_body}>
                  <span>{item.text}</span>
                  {item.code ? (
                    <CodeSnippet code={item.code} label={`snippet-${idx + 1}.ts`} />
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}
