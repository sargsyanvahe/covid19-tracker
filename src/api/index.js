const URL = 'https://covid19.mathdro.id/api';

export async function fetchData(country) {

    let flexUrl = URL;

    if (country) {
        flexUrl = `${URL}/countries/${country}`
    }

    try {
        const { confirmed, recovered, deaths, lastUpdate } = await fetch(flexUrl).then(res => res.json());

        return { confirmed, recovered, deaths, lastUpdate };

    } catch (e) {

    }
}

export async function fetchDailyData() {
    try {
        const data = await fetch(`${URL}/daily`)
            .then(res => res.json());

        return data.map(dailyData => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            date: dailyData.reportDate,
        }));
    } catch (e) {

    }
}

export async function fetchCountries() {
    try {
        const data = await fetch(`${URL}/countries`).then(res => res.json());
        return data.countries.map(country => country.name);

    } catch (e) {

    }
}