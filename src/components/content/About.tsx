import {List, ListItem, Typography} from '@mui/material';
import {Container} from '@mui/system';
import React from 'react';

const About = () => {
   return (
      <Container maxWidth="sm" sx={{marginTop: '5rem', minHeight: '80vh'}}>
         <Typography variant="h3" sx={{marginBottom: '1rem'}}>
            {' '}
            About this app
         </Typography>
         <Typography variant="h6">
            This is a React Typescript based Todo list app. The following
            technologies has been used to build this app:
         </Typography>
         <List sx={{marginTop: '1rem'}}>
            <ListItem>React library </ListItem>
            <ListItem>Typescript </ListItem>
            <ListItem>Redux Toolkit</ListItem>
            <ListItem>Material UI</ListItem>
            <ListItem>Toasts and Alerts from Material UI</ListItem>
            <ListItem>Masonry component from Material Lab package</ListItem>
            <ListItem>React Router Dom</ListItem>
            <ListItem>Axios</ListItem>
         </List>
      </Container>
   );
};

export default About;
