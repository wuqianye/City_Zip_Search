import React from "react"

class ZipSearch extends React.Component {

    constructor() {
        super()
        this.state = {
            cities: []
        }
        this.zipSearch = this.zipSearch.bind(this)
    }

    zipSearch(e) {
        const output = document.getElementById("output")
        output.innerHTML = ""

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

        const count = document.createElement("h2")
        count.innerText = this.state.cities.length + " matching results found"
        count.style.margin = "0px"
        count.style.padding = "20px"
        count.style.borderBottom = "solid 1px"
        output.append(count)

        this.state.cities.forEach(entry => {
            const element = document.createElement("div")
            element.setAttribute("className", "displayCard")
            element.style.padding = "20px"
            element.style.borderBottom = "solid 1px"
            const cityName = document.createElement("h2")
            cityName.innerText = entry.City
            const stateName = document.createElement("p")
            stateName.innerText = "State: " + entry.State
            const countryName = document.createElement("p")
            countryName.innerText = "Country: " + entry.Country
            element.append(cityName, stateName, countryName)
            output.append(element)
        })

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form id="zipForm">
                    <input id="zipVal" type="number" placeholder="zip"></input>
                    <button onClick={this.zipSearch} type="submit">Search with Zip</button>
                </form>
                <div id="output"></div>
            </div>
        )
    }
}

export default ZipSearch
