import React from 'react';
import '../../style/Breadcrumbs.css'

interface Breadcrumb {
  label: string;
  link?: string;
}

interface BreadcrumbsProps {
  crumbs: Breadcrumb[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  if (!crumbs || !crumbs.length) {
    return null;
  }
//lol
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol className="breadcrumb-list">
        {crumbs.map((crumb, index) => (
          <React.Fragment key={crumb.label}>
            <li className="breadcrumb-item">
              {crumb.link ? <a href={crumb.link}>{crumb.label}</a> : crumb.label}
            </li>
            {index < crumbs.length - 1 && (
              <span className="breadcrumb-separator">&gt;</span>
            )}
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;