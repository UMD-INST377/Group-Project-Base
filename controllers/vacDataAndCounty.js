const VCdata = `SELECT county AS County,
                population AS Population,
                confirmed_deaths AS Confirmed_Death,
                positive_cases AS Positive_Cases,
                first_dose_count AS First_Dose,
                second_dose_count AS Second_Dose
                FROM county_information
                JOIN covid_statistics_by_county USING (county_ID)
                JOIN vaccine_data_by_county USING (county_ID)
                ORDER BY county;`

export default VCdata