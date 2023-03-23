/* eslint-disable @typescript-eslint/strict-boolean-expressions */

import { useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import CountryStateSelect from '../CustomFields/CountrySelect';
import options from '../CountryData/country_state.json';

export default function Step2() {
  const { watch } = useFormContext();

  const { country, stateProvinces } = watch('country');

  const { countryOptions, stateOptions } = useMemo(
    () => ({
      countryOptions: [
        ...new Set(
          options
            .filter((option: { stateProvinces: any; }) =>
              stateProvinces
                ? option.stateProvinces === stateProvinces
                : option,
            )
            .map((option: { name: any; }) => option.name),
        ),
      ],
      stateOptions: [
        ...new Set(
          options
            .filter((option: { name: any; }) => (country ? option.name === country : option))
            .map((option: { stateProvinces: any; }) => option.stateProvinces),
        ),
      ],
    }),
    [country, stateProvinces],
  );

  return (
    <div>
      <br />
      <CountryStateSelect
        name="country"
        placeholder="Country"
        label="country"
        rules="required"
        options={countryOptions}
      />
      <br />
      <CountryStateSelect
        name="stateProvinces"
        placeholder="state"
        label="stateProvinces"
        st
        on
        typ
        rules="required"
        options={stateOptions}
      />
      <br />
    </div>
  );
}
