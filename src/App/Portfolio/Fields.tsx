import React, { ReactElement, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Field, useFormikContext, FormikValues } from 'formik';

// Material UI
import { CheckboxWithLabel } from 'formik-material-ui';

// Logic Helpers
import getTagCounts from './helpers/getTagCounts';
import getFilteredTags from './helpers/getFilteredTags';

// Custom Components
import LabelText from './Label';

interface FieldsProps {
  filters: string[][];
}

const Fields = ({ filters }: FieldsProps): ReactElement => {
  const { values }: FormikValues = useFormikContext();
  const ogTagCounts = useRef(getTagCounts(filters));
  const [currentTags, setCurrentTags] = useState(ogTagCounts.current);

  useEffect(() => {
    if (values.appliedFilters && values.appliedFilters.length) {
      const { appliedFilters } = values;
      const filteredTags = getFilteredTags(appliedFilters, filters);
      const filteredTagCounts = getTagCounts(filteredTags);
      setCurrentTags(filteredTagCounts);
    } else {
      setCurrentTags(ogTagCounts.current);
    }
  }, [values.appliedFilters]);

  return (
    <>
      {Object.entries(currentTags).map(([filter, count]) => (
        <Field
          key={filter}
          component={CheckboxWithLabel}
          type={'checkbox'}
          name="appliedFilters"
          Label={{ label: <LabelText filter={filter} count={count} /> }}
          value={filter}
        />
      ))}
    </>
  );
};

Fields.propTypes = {
  filters: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default Fields;
