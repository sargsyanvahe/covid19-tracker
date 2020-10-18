import React from "react";

import Cards from "../Cards";
import Chart from "../Chart";
import CountryPicker from "../CountryPicker";

import { fetchData } from "../../api";

import logo from './../../images/logo.png'

import './App.css';


class App extends React.Component {

    state = {
        data: {},
        country: ''
    };

    componentDidMount() {
        fetchData()
            .then(data => {
                this.setState({ data })
            })
    }

    handelCountryChange = (country) => {
        fetchData(country)
            .then(data => {
                this.setState({ data, country })
            });
    };

    render() {

        const { data, country } = this.state;

        return (
            <div className='app-container'>
                <img className='image' src={logo} alt="COVID-19"/>
                <Cards data={data}/>
                <CountryPicker handelCountryChange={this.handelCountryChange}/>
                <Chart data={data} country={country}/>
            </div>
        )
    }
}

export default App;