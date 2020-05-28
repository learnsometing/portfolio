import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const AvatarImage = styled.img`
  border-radius: 50%;
  margin: ${(props): string => props.theme.spacing(4)} 10%;
  max-width: 80%;
  @media screen and (min-width: 600px) {
    margin: ${(props): string => props.theme.spacing(5)};
    margin-bottom: 0;
    float: left;
    max-width: 40%;
  }

  @media screen and (min-width: 960px) {
    max-width: 30%;
  }

  @media screen and (min-width: 1280px) {
    max-width: 25%;
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
    <AvatarImage
      src={avatar.publicURL}
      alt="A traced SVG graphic of Brian wearing a blue beanie and leaning against two river birches."
      className="about scroll-in"
    />
  );
};

export default Avatar;
