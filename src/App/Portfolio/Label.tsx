import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Material-Ui
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const TagText = styled(Typography)`
  display: inline-block;
  margin-right: 0.25rem;
`;

const CountText = styled(TagText)`
  color: #74746a;
`;

interface FilterFieldProps {
  filter: string;
  count: number;
}

const LabelText: React.FC<FilterFieldProps> = ({ filter, count }) => (
  <Grid container alignItems={'center'}>
    <TagText variant={'h6'}>{filter}</TagText>
    <CountText variant={'body2'}>{` (${count})`}</CountText>
  </Grid>
);

LabelText.propTypes = {
  filter: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default LabelText;
