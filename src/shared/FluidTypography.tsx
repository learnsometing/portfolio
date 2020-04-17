import styled from 'styled-components';
import PropTypes from 'prop-types';

interface Props {
  minFontSize: string;
  maxFontSize: string;
  minViewportWidth: string;
  maxViewportWidth: string;
}

export function stripUnits(fontSize: string): string {
  if (!fontSize.match(/[0-9]/g)) return fontSize;
  const fontSizeStripped = fontSize.replace(/[^0-9.]/g, '');
  // returning fontSize will cause the rule to be invalid
  return fontSizeStripped;
}

const FluidTypography = styled.p<Props>`
  font-size: calc(
    ${(props): string => props.minFontSize} +
      (
        ${(props): string => stripUnits(props.maxFontSize)} -
          ${(props): string => stripUnits(props.minFontSize)}
      ) *
      (
        (100vw - ${(props): string => props.minViewportWidth}) /
          (
            ${(props): string => stripUnits(props.maxViewportWidth)} -
              ${(props): string => stripUnits(props.minViewportWidth)}
          )
      )
  );
`;

FluidTypography.propTypes = {
  minFontSize: PropTypes.string.isRequired,
  minViewportWidth: PropTypes.string.isRequired,
  maxFontSize: PropTypes.string.isRequired,
  maxViewportWidth: PropTypes.string.isRequired,
};

FluidTypography.defaultProps = {
  minFontSize: '16px',
  minViewportWidth: '320px',
};

export default FluidTypography;
