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
import { changeSortingOrder } from '../../state/portfolio/actions';

const SortContainer = styled(Grid)`
  margin: 1rem 0;
`;

const SortControl = styled(FormControl)`
  min-width: 150px;
`;

const Item = styled(MenuItem)`
  padding: 1rem;
`;

interface Props {
  changeSortingOrder: (order: string) => void;
  projectCount: number;
}

const ASC = 'ASC';
const DESC = 'DESC';

const SortMenu: React.FC<Props> = ({ changeSortingOrder, projectCount }) => {
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
  projectCount: PropTypes.number.isRequired,
};

export default connect(null, { changeSortingOrder })(SortMenu);
