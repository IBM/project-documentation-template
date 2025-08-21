import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import clsx from 'clsx';
import styles from './index.module.css';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/* <p className="hero__subtitle">{siteConfig.tagline}</p> */}
      </div>
    </header>
  );
}
export default function Welcome() {
  return (
      <div>
        <HomepageHeader />
        <div class='container'>

          <h2 className="welcome-h2">
            Powering innovation through collaborative development
          </h2>

          <div className="button-group">
            <a className="static-button button-link" href="https://ibm.com/opensource" target="_blank" rel="noopener noreferrer">
              IBM Open Source
            </a>
            <a className="static-button button-link" href="https://github.com/IBM" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a className="static-button button-link" href="https://developer.ibm.com" target="_blank" rel="noopener noreferrer">
              Developer Hub
            </a>
          </div>

          <div className="hidden-for-mobile">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
              totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.
            </p>

            <div className="ibm-links">
              <h3>Explore IBM Open Source</h3>
              <ul>
                <li><a href="https://www.ibm.com/opensource/projects" target="_blank" rel="noopener noreferrer">Featured Projects</a></li>
                <li><a href="https://www.ibm.com/cloud/watson" target="_blank" rel="noopener noreferrer">Watson AI</a></li>
                <li><a href="https://www.redhat.com/en/technologies/cloud-computing/openshift" target="_blank" rel="noopener noreferrer">Red Hat OpenShift</a></li>
                <li><a href="https://www.ibm.com/cloud/kubernetes-service" target="_blank" rel="noopener noreferrer">Kubernetes Service</a></li>
                <li><a href="https://www.ibm.com/opensource/getting-started" target="_blank" rel="noopener noreferrer">Getting Started</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}
