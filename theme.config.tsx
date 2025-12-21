import React, { useEffect, useState } from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FiMenu, FiSidebar } from 'react-icons/fi'
import { FaBriefcase, FaCertificate, FaFolderOpen, FaPhoneAlt } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  '/experience': <FaBriefcase />,
  '/projects': <FaFolderOpen />,
  '/contactme': <FaPhoneAlt />,
  '/certifications': <FaCertificate />
}

const SidebarToggle = () => {
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    const body = document.body
    body.classList.toggle('sidebar-collapsed', collapsed)
    return () => body.classList.remove('sidebar-collapsed')
  }, [collapsed])

  return (
    <button
      type="button"
      aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      aria-pressed={collapsed}
      className="nav-sidebar-toggle"
      onClick={() => setCollapsed(!collapsed)}
    >
      {collapsed ? <FiMenu className="nav-icon" /> : <FiSidebar className="nav-icon" />}
    </button>
  )
}

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <SidebarToggle />
      <span
        style={{
          fontWeight: 800,
          letterSpacing: '0.06em',
          padding: '4px 10px',
          borderRadius: '10px',
          background: 'linear-gradient(120deg, rgba(59,130,246,0.15), rgba(16,185,129,0.12))'
        }}
      >
        Malik Johnson
      </span>
    </div>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  feedback: {
    content: null,
  },
  sidebar: {
    toggleButton: false,
    titleComponent: ({ title, route }) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        {route && iconMap[route] ? <span className="sidebar-item-icon">{iconMap[route]}</span> : null}
        <span className="sidebar-label">{title}</span>
      </span>
    ),
  },
  footer: {
    text: 'Malik Johnson Portfolio',
  },
}

export default config
