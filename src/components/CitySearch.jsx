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
        
        this.state.zipcodes.forEach(entry => {
            const element = document.createElement("h6")
            element.innerText = entry
            output.append(element)
        })
        //console.log(this.state.zipcodes)

        e.preventDefault()
    }

    render() {
        return (
            <div>
                <form>
                    <input id="cityVal" type="text" placeholder="city"></input>
                    <button onClick={this.citySearch} type="submit">Search with City</button>
                </form>
                <div id="output">
                    {/* {console.log(this.state.zipcodes)}
                    {this.state.zipcodes.forEach(entry => {
                        return (<h6>{entry}</h6>)
                    })} */}
                </div>
            </div>
        )
    }
}

export default CitySearch
