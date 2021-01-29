import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container } from '@material-ui/core';
import styled from 'styled-components';

const AvatarImage = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  margin: 1rem;

  @media only screen and (min-width: 600px) {
    height: 250px;
    width: 250px;
  }

  @media only screen and (min-width: 960px) {
    height: 300px;
    width: 300px;
  }

  /* major third  */

  @media only screen and (min-width: 1280px) {
    width: 355px;
    height: 355px;
  }
`;

const Avatar: React.FC = () => {
  const { avatar } = useStaticQuery(graphql`
    query Avatar {
      avatar: file(name: { regex: "/avatar-tree/" }) {
        publicURL
      }
    }
  `);

  return (
    <Container disableGutters maxWidth="xs">
      <Box display="flex" justifyContent="center">
        <AvatarImage
          src={avatar.publicURL}
          alt="A traced SVG graphic of Brian wearing a blue beanie and leaning against two river birches."
        />
      </Box>
    </Container>
  );
};

export default Avatar;
