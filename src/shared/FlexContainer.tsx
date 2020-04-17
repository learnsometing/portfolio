import styled from 'styled-components';
import PropTypes from 'prop-types';

interface Props {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
}

const FlexContainer = styled.div<Props>`
  display: flex;
  flex-direction: ${(props): string => props.flexDirection || 'row'};
  justify-content: ${(props): string => props.justifyContent || 'flex-start'};
  align-items: ${(props): string => props.alignItems || 'flex-start'};
`;

FlexContainer.propTypes = {
  flexDirection: PropTypes.string.isRequired,
  justifyContent: PropTypes.string.isRequired,
  alignItems: PropTypes.string.isRequired,
};

export default FlexContainer;
