import React from 'react'

class CitySearch extends React.Component {

    constructor() {
        super()
        this.state = {
            zipcodes: []
        }
        this.citySearch = this.citySearch.bind(this)
    }

    citySearch(e) {
        const output = document.getElementById("output")
        output.innerHTML = ""

        const city = "https://ctp-zip-api.herokuapp.com/city/" + document.getElementById("cityVal").value.toUpperCase()
        fetch(city)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        zipcodes: result
                    })
                },
                error => {
                    console.log(error)
                }
            )

        const count = document.createElement("h2")
        count.innerText = this.state.zipcodes.length + " matching results found"
        output.append(count)
        
        this.state.zipcodes.forEach(entry => {
            const element = document.createElement("p")
            element.innerText = entry
            output.append(element)
        })

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form id="cityForm">
                    <input id="cityVal" type="text" placeholder="city"></input>
                    <button onClick={this.citySearch} type="submit">Search with City</button>
                </form>
                <div id="output"></div>
            </div>
        )
    }
}

export default CitySearch
