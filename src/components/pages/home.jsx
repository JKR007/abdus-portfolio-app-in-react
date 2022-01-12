import React from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../../images/avatar.jpeg';

import './styles.css';

export const Home = () => {
  return (
    <div>
      <Grid className='home-page__grid'>
        <Cell col={12}>
          <img
            alt='Avatar'
            className='home-page__avatar'
            src={avatar}
          />
          <div className='home-page__banner'>
            <h1>Full Stack Software Developer</h1>
            <hr />
            <p>Ruby, Ruby on Rails | MySQL, PostgreSQL | ReactJS, Redux, React Hooks | Javascript, jQuery | Bootsrap, Semantic UI</p>
            {/* <div className='home-page__social-links'>
              <a href='https://www.linkedin.com/in/abduqahhor-muhamadjonov' target='_blank' rel='noreferrer'>
                <i className='fa fa-linkedin-square'></i>
              </a>
              <a href='https://github.com/JKR007' target='_blank' rel='noreferrer'>
                <i className='fa fa-github-square'></i>
              </a>
            </div> */}
          </div>
        </Cell>
      </Grid>
    </div>
  )
}
