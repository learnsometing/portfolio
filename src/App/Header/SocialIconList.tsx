import React, { ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Material-ui
import { Box } from '@material-ui/core';

// Social Icons
import { EmailIcon, GithubIcon, LinkedinIcon } from '../SocialIcons';

const SocialIconList: React.FC = ({ onClick = undefined }) => (
  <Box display="flex" alignItems="center">
    <GithubNavLink onClick={onClick} />
    <LinkedinNavLink onClick={onClick} />
    <EmailNavLink onClick={onClick} />
  </Box>
);

export default SocialIconList;

const StyledAnchor = styled.a`
  margin-right: 0.5rem;
`;

interface Props {
  href: string;
  icon: ReactNode;
  onClick: Function | undefined;
  title: string;
}

const IconNavLink: React.FC<Props> = ({
  href,
  icon,
  onClick = undefined,
  title,
}) => (
  <StyledAnchor
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    title={title}
    onClick={onClick}
  >
    {icon}
  </StyledAnchor>
);

IconNavLink.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  title: PropTypes.string.isRequired,
};

interface LinkProps {
  onClick: Function;
}

const EmailNavLink: React.FC<LinkProps> = ({ onClick = undefined }) => (
  <IconNavLink
    href="mailto: brianmonaccio@protonmail.com"
    icon={<EmailIcon />}
    onClick={onClick}
    title="link to Brian's email address"
  />
);

const GithubNavLink: React.FC<LinkProps> = ({ onClick = undefined }) => (
  <IconNavLink
    href="https://github.com/learnsometing"
    icon={<GithubIcon />}
    onClick={onClick}
    title="link to Brian's github account"
  />
);

const LinkedinNavLink: React.FC<LinkProps> = ({ onClick = undefined }) => (
  <IconNavLink
    href="https://www.linkedin.com/in/brian-monaccio/"
    icon={<LinkedinIcon />}
    onClick={onClick}
    title="link to Brian's LinkedIn account"
  />
);
