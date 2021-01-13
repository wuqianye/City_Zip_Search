import React from "react"
//import { useState } from "react"

/*function ZipSearch() {
    const [cities, setCities] = useState([])

    const zipSearch = (e) => {
        const zip = "https://ctp-zip-api.herokuapp.com/zip/" + document.getElementById("zipVal").value
        fetch(zip)
            .then(res => res.json())
            .then(
                result => {
                    setCities(result.City)
                },
                error => {
                    console.log(error)
                }
            )
        e.preventDefault()
    }

    return (
        <div>
            <form>
                <input id="zipVal" type="number" placeholder="zip"></input>
                <button onClick={zipSearch} type="submit">Search Zip</button>
            </form>
            <div>
                {cities}
            </div>
        </div>
    )
}

export default ZipSearch*/


class ZipSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            cities: []
        }
        this.zipSearch = this.zipSearch.bind(this);
    }

    zipSearch(e) {
        const output = document.getElementById("output")
        output.innerHTML=""

        const zip = "https://ctp-zip-api.herokuapp.com/zip/" + document.getElementById("zipVal").value
        fetch(zip)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        cities: result
                    })
                },
                error => {
                    console.log(error)
                }
            )

        this.state.cities.forEach(entry => {
            const element = document.createElement("div")
            const cityName = document.createElement("h2")
            cityName.innerText = entry.City
            const stateName = document.createElement("p")
            stateName.innerText = entry.State
            const countryName = document.createElement("p")
            countryName.innerText = entry.Country
            element.append(cityName, stateName, countryName)
            output.append(element)
        })

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <input id="zipVal" type="number" placeholder="zip"></input>
                    <button onClick={this.zipSearch} type="submit">Search with Zip</button>
                </form>
                <div id="output">
                    {/* {console.log(this.state.cities.length)}
                    {console.log(this.state.cities)}
                    {this.state.cities.forEach(city => {
                        //console.log(city.City);
                        return <DisplayCard city={city.City} state={city.State} country={city.Country} />
                    })} */}
                </div>
            </div>
        )
    }
}

export default ZipSearch
