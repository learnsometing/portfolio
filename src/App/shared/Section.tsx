import styled from 'styled-components';

const Section = styled.section`
  padding: ${(props): string => props.theme.spacing(3)} 0;

  @media screen and (min-width: 1280px) {
    padding: ${(props): string => props.theme.spacing(4)} 0;
  }
`;

export default Section;
