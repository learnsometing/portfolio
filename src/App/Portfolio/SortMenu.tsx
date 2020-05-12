import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { connect } from 'react-redux';
import { changeSortingOrder } from '../../state/portfolio/actions';

const SortContainer = styled(Grid)`
  padding: 1rem 0;
`;

const SortControl = styled(FormControl)`
  min-width: 150px;
`;

const Item = styled(MenuItem)`
  padding: 1rem;
`;

interface Props {
  changeSortingOrder: (order: string) => void;
}

const ASC = 'ASC';
const DESC = 'DESC';

const SortMenu: React.FC<Props> = ({ changeSortingOrder }) => {
  const handleChange: (event: any) => void = (event) =>
    event.target && event.target.value
      ? changeSortingOrder(event.target.value)
      : undefined;
  return (
    <SortContainer container justify={'flex-end'} item>
      <SortControl variant="outlined">
        <InputLabel id="sort-order">Sort By</InputLabel>
        <Select
          autoWidth={true}
          labelId="sort-label"
          id="sort-order"
          onChange={handleChange}
          label="Sort By"
        >
          <Item value={DESC}>Most Recent</Item>
          <Item value={ASC}>Most Dated</Item>
        </Select>
      </SortControl>
    </SortContainer>
  );
};

SortMenu.propTypes = {
  changeSortingOrder: PropTypes.func.isRequired,
};

export default connect(null, { changeSortingOrder })(SortMenu);
