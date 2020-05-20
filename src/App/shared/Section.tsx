import styled from 'styled-components';

const Section = styled.section`
  padding: ${(props): string => props.theme.spacing(6)} 0;

  @media screen and (min-width: 1280px) {
    padding: ${(props): string => props.theme.spacing(7)} 0;
  }
`;

export default Section;
