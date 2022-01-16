import React from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

import './styles.css';
import avatar from '../../images/avatar.jpeg';

export const Contact = () => {
  return (
    <div className='contact-page__body'>
      <Grid className='contact-page__body-grid'>
        <Cell col={6}>
          <h3>AbduQahhor Muhamadjonov</h3>
          <img src={avatar} alt='avatar' />
          <p className='contact-page__afew-about-me'>
            Experienced Software Engineer with a demonstrated history of working in the software and the oil & energy industry. Skilled in Software Development - Ruby, C, Java (core), Ruby on Rails, Javascript, ReactJS, Content Management Systems (CMS), Automatic Controls - Electronics, Distributed Control Systems. Strong engineering professional with a Bachelor's degree focused in Information Technologies and Automatic Control from Turin Polytechnic University in Tashkent.
          </p>
        </Cell>
        <Cell col={6}>
          <h3>Contact Info</h3>
          <hr />
          <div className='contact-page__contact-list'>
            <List>
              <ListItem threeLine>
                <ListItemContent>
                  <a href='mailto:abduqahhor.muhamadjonov@gmail.com' target='_blank' rel='noreferrer'>
                    <i className='contact-page__icon fa fa-envelope-square' />
                    <p className='contact-page__list-item-text'>abduqahhor.muhamadjonov@gmail.com</p>
                  </a>
                </ListItemContent>
              </ListItem>
              <ListItem threeLine>
                <ListItemContent>
                  <a href='https://www.linkedin.com/in/abduqahhor-muhamadjonov' target='_blank' rel='noreferrer'>
                    <i className='fa fa-linkedin-square contact-page__icon' />
                    <p className='contact-page__list-item-text'>Follow me on LinkedIn</p>
                  </a>
                </ListItemContent>
              </ListItem>
              <ListItem threeLine>
                <ListItemContent>
                  <a href='https://github.com/JKR007' target='_blank' rel='noreferrer'>
                    <i className='fa fa-github-square contact-page__icon' />
                    <p className='contact-page__list-item-text'>Watch me on GitHub</p>
                  </a>
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  )
}
