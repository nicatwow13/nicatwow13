import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaBriefcase, FaCertificate, FaFolderOpen, FaHome, FaPhoneAlt } from 'react-icons/fa'

const iconMap: Record<string, React.ReactNode> = {
  '/': <FaHome />,
  '/experience': <FaBriefcase />,
  '/projects': <FaFolderOpen />,
  '/contactme': <FaPhoneAlt />,
  '/certifications': <FaCertificate />
}

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
      <img
        src="/Malik.png"
        alt="Malik Johnson logo"
        style={{
          height: 'auto',
          width: 67,
          objectFit: 'contain',
          borderRadius: '12px'
        }}
      />
    </div>
  ),
  project: {
    link: 'https://github.com/jdev422',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  editLink: {
    component: null,
  },
  feedback: {
    content: null,
  },
  sidebar: {
    toggleButton: false,
    // Keep all sidebar items expanded by default and non-collapsible
    defaultMenuCollapseLevel: 10,
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
  head: () => (
    <>
      <link rel="icon" href="/favicon.svg" />
      <link rel="apple-touch-icon" href="/favicon.svg" />
    </>
  ),
}

export default config
