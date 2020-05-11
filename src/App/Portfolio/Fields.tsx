import React, { ReactElement, useEffect, useState } from 'react';
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
  allProjectTags: string[][];
}

const Fields = ({ allProjectTags }: FieldsProps): ReactElement => {
  const { values }: FormikValues = useFormikContext();
  const ogTagCounts = getTagCounts(allProjectTags);
  const [currentTags, setCurrentTags] = useState(ogTagCounts);

  useEffect(() => {
    if (values.appliedFilters && values.appliedFilters.length) {
      const { appliedFilters } = values;
      const filteredTags = getFilteredTags(appliedFilters, allProjectTags);
      const filteredTagCounts = getTagCounts(filteredTags);
      setCurrentTags(filteredTagCounts);
    } else {
      setCurrentTags(ogTagCounts);
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
  allProjectTags: PropTypes.arrayOf(
    PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
};

export default Fields;
