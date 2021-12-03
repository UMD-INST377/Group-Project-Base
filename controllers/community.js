/* eslint-disable no-multi-str */
const communityData = 'SELECT * FROM community_survey';

const postCoomunitySQL = 'INSERT INTO community_survey (community_identifier, pct_foreign_born, pct_poverty, pct_unemployed, \
  pct_bachelors, median_household_income, pct_little_english) \
                       VALUES \
                       (:community_survey, :pct_foreign_born, :pct_poverty, :pct_unemployed, :pct_bachelors, :median_household_income, \
                       :pct_little_english)';

export default {
  communityData, postCoomunitySQL
};
