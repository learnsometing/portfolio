import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { RootState } from '../../state/createStore';
import { getSortingOrder } from '../../state/portfolio/selectors';
import { changeSortingOrder } from '../../state/portfolio/actions';

// Hooks
import useScrollAnimation from '../shared/useScrollAnimation';

const SortContainer = styled(Grid)`
  padding: ${(props): string => props.theme.spacing(4)} 0;
  transform: translateY(100px);
  opacity: 0;
  @media screen and (min-width: 1280px) {
    padding: ${(props): string =>
      `${props.theme.spacing(2)} ${props.theme.spacing(4)}`};
  }
`;

const SortControl = styled(FormControl)`
  min-width: 150px;
`;

const Item = styled(MenuItem)`
  padding: ${(props): string => props.theme.spacing(4)};
  color: rgba(0, 0, 0, 0.8);
`;

const OutlinedInput = styled(Select)`
  &:hover fieldset {
    border-color: ${(props): string => props.theme.text} !important;
  }
`;

interface Props {
  order: string;
  changeSortingOrder: (order: string) => void;
  projectCount: number;
}

const ASC = 'ASC';
const DESC = 'DESC';

const SortMenu: React.FC<Props> = ({
  changeSortingOrder,
  order,
  projectCount,
}) => {
  const handleChange: (event: any) => void = (event) =>
    event.target && event.target.value
      ? changeSortingOrder(event.target.value)
      : undefined;

  return (
    <SortContainer
      container
      justify={'space-between'}
      alignItems={'center'}
      item
      ref={useScrollAnimation(0)}
    >
      <Typography variant={'h2'} component={'h2'}>
        {projectCount
          ? `${projectCount} 
        ${projectCount > 1 ? 'projects' : 'project'}
        `
          : null}
      </Typography>
      <SortControl variant="outlined">
        <InputLabel id="sort-order">Sort By</InputLabel>
        <OutlinedInput
          autoWidth={true}
          labelId="sort-label"
          id="sort-order"
          onChange={handleChange}
          label="Sort By"
          value={order}
        >
          <Item value={DESC}>Most Recent</Item>
          <Item value={ASC}>Most Dated</Item>
        </OutlinedInput>
      </SortControl>
    </SortContainer>
  );
};

SortMenu.propTypes = {
  changeSortingOrder: PropTypes.func.isRequired,
  order: PropTypes.string.isRequired,
  projectCount: PropTypes.number.isRequired,
};

export default connect(
  (state: RootState) => ({
    order: getSortingOrder(state),
  }),
  { changeSortingOrder }
)(SortMenu);
