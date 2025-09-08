import Weather from './Weather.jsx'

const Query = (props) => {
    if (props.q.length === 0) {
        return null
    }
    if (props.len > 10) {
        return <p>Too many matches, specify another filter</p>
    }
    if (props.len === 1) {
        const country = props.countries[0]
        return (
            <div>
                <h1>{country.name.common}</h1>
                <p>capital: {country.capital}</p>
                <p>area: {country.area}</p>
                <h3>Languages</h3>
                <ul>
                    {Object.values(country.languages).map(l => 
                        <li key={l}>{l}</li>
                    )}
                </ul>
                <img src={country.flags.png} />
                <Weather country={props.countries[0]}/>
            </div>
        )
    } 
    return (
        <ul>
            {props.countries.map(country => 
                <li key={country.cca3}>{country.name.common} <button onClick={()=>props.onClick(country)}>Show</button></li>
                
            )}
        </ul>
    )
}

export default Query