import React, { useEffect, useState } from "react";
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from "../../api";

function CountryPicker({ handelCountryChange }) {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetchCountries().then(data => {
            setCountries(data)
        })
    }, []);

    return (
        <FormControl>
            <NativeSelect defaultValue="" onChange={(e) => handelCountryChange(e.target.value)}>
                <option value=''>Global</option>
                {countries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker;