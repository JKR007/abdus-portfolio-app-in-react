import React from 'react';
import { Grid, Cell } from 'react-mdl';

import './styles.css';

export const About = () => {
  return (
    <div>
      <Grid className='about-page__grid'>
        <Cell col={4} className='about-page__left-cell' shadow={3}>
          <h3 className='about-page__left-cell-title'>Skills</h3>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg' alt='ruby-lang' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' alt='c-lang' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg' alt='java-lang' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' alt='js-script-lang' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg' alt='ruby-on-rails' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg' alt='node-script' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg' alt='react-js' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' alt='redux-js' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg' alt='jquery' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/coffeescript/coffeescript-original-wordmark.svg' alt='coffeescript-js' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain-wordmark.svg' alt='bootstrap-js' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' alt='sass' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg' alt='cascaded-style-sheets' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg' alt='html' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg' alt='postgresql' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' alt='mysql' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg' alt='mongodb' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original-wordmark.svg' alt='redis' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain-wordmark.svg' alt='git' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' alt='git-hub' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original-wordmark.svg' alt='webpack' />
            </Cell>
          </Grid>
          <Grid className='about-page__left-cell-grid'>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain-wordmark.svg' alt='docker' />
            </Cell>
            <Cell col={4}>
              <img src='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' alt='aws' />
            </Cell>
            <Cell col={4}>
              <p>And more ...</p>
            </Cell>
          </Grid>
        </Cell>
        <Cell col={8} className='about-page__right-cell' shadow={3}>
          <Grid className='about-page__right-cell-grid'>
            <Cell col={3} className='left-cell'>
              <p>Gap Intelligence Inc.</p>
              <p>Software Engineer</p>
              <p>2019 March - Present</p>
            </Cell>
            <Cell col={9} className='right-cell'>
              <p className='right-cell__info'>
                &emsp; Gap Intelligence is the most respected business intelligence services and platform company helping manufacturers, resellers and industry players within the IT, consumer electronics, and home appliance industries gain an edge.
                As as Software Engineer my duties are to support existing projects, build and add new tools for internal and external usage, attending daily scrum meetings, discuss and share ideas to develop high quality products,
                to write clean code with test coverages, to keep projects up-to-date with new versions, active pull request reviews and give suggestions to keep codebase clean and consistent.
              </p>
            </Cell>
          </Grid>
          <hr />
          <Grid className='about-page__right-cell-grid'>
            <Cell col={3} className='left-cell'>
              <p>ERIELL Group</p>
              <p>Engineer on Electronices & Automated Control Systems</p>
              <p>2018 September - 2019 January</p>
            </Cell>
            <Cell col={9} className='right-cell'>
              <p className='right-cell__info'>
                &emsp; ERIELL, an international oilfield service group provides well drilling and workover services to leading oil and gas companies in the Russian Federation, Central and Southern Asia, and Middle East. As an Enginner, my duty was to
                diagnose and re-program the PLC of electrical generators and work on electronic parts of top drive drilling systems during setting up for drilling rig tower.
              </p>
            </Cell>
          </Grid>
          <hr />
          <Grid className='about-page__right-cell-grid'>
            <Cell col={3} className='left-cell'>
              <p>Education Standard</p>
              <p>Web Developer Intern</p>
              <p>2018 Jan - 2018 June</p>
            </Cell>
            <Cell col={9} className='right-cell'>
              <p className='right-cell__info'>
                &emsp; Education Standard was established as a specialist on institutions of higher education in Australia, USA, EU, Canada and Great Britain. The company works closely with many universities and colleges in these countries,
                and prides itself on helping potential students make sound choices. As a web developer my duty was support the website of the company. It was my the first working place and there I got very essential experiance for my future career.
                And I am really greatful for managers and teammates of Education Stadard for the real life school.
              </p>
            </Cell>
          </Grid>
          <hr />
          <Grid className='about-page__right-cell-grid'>
            <Cell col={3} className='left-cell'>
              <p>Turin Polytechnic University in Tashkent</p>
              <p>Tashkent branch of Politecnico de Torino</p>
              <p>Bachelor's degree - Automatic control and computer engineering</p>
              <p>2013 - 2017</p>
            </Cell>
            <Cell col={9} className='right-cell'>
              <p className='right-cell__info'>
                &emsp; The Department of Control and Computer Engineering is the point of reference in Turin Polytechnic University in Tashkent for the area of Information and Communication Technologies (ICT) which studies the methodologies and technologies used for the management, processing and transmission of information.
                The Department of Control and Computer Engineering promotes, coordinates and manages basic and applied research, training, technology transfer and services to the local community in the areas of systems and control engineering, computer science and computer engineering and operations research.
              </p>
              <p>
                Grades on Special Subjects: Operating Systems - A, Databases - A, Object Oriented Programming - A, Computer Networks - A, Graduation Thesis Work - A.
              </p>
              <p>
                Graduation Thesis Work was dedicated to - "Software Development for the Modeling in engineering: Agile Software Development and User Experience".
              </p>
            </Cell>
          </Grid>
          <hr />
          <Grid className='about-page__right-cell-grid'>
            <Cell col={3} className='left-cell'>
              <p>Academic Lyceum under Tashkent Institue of Finance</p>
              <p>2010 - 2013</p>
            </Cell>
            <Cell col={9} className='right-cell'>
              <p className='right-cell__info'>
                &emsp; The lyceum was specialized to teach students on more than twenty subjects in three academic years. The main subjects were Mathematics (includes beginning of higher mathematics), Uzbek language and literature, English and Russian languages.
                Graduated with honors.
              </p>
            </Cell>
          </Grid>
        </Cell>
      </Grid>
    </div>
  )
}
