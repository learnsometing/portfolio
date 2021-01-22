import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Container } from '@material-ui/core';
import styled from 'styled-components';

const AvatarImage = styled.img`
  border-radius: 50%;
  width: 65%;
  margin: 1rem;

  @media only screen and (min-width: 960px) {
    width: 70%;
  }

  /* major third  */

  @media only screen and (min-width: 1280px) {
    width: 80%;
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
