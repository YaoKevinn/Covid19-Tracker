import React, { useState, useEffect } from "react";
import { 
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from '@material-ui/core';
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import LineGraph from './LineGraph';
import { sortData, prettyPrintStat } from './util';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat:34.80746, lng:-40.4796 });
  const [mapZoom, setMapZoom] = useState(2);
  const [mapCountries, setMapCountries] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapRender, setMapRender] = useState("false");

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then( res => res.json())
    .then( data => {
      setCountryInfo(data);
    })
  }, [])

  useEffect(() => {
      // Code inside here will run once when the component loads and not again
      // 
      const getCountriesData = async () => {
          await fetch("https://disease.sh/v3/covid-19/countries")
          .then( (res) => res.json())
          .then( (data) => {
              const countries = data.map( country => (
                {
                  name: country.country,
                  value: country.countryInfo.iso2
                }
              ));
              const sortedData = sortData(data);
              setTableData(sortedData);
              setMapCountries(data);
              setCountries(countries);
              console.log("Fetch Countries data Success!!");
          })
          .catch( err => console.log("Fetch Countries data failed: ", err));
      }

      getCountriesData();
  }, [])

  const onCountryChanged = async (event) => {
      const countryCode = event.target.value;
      setCountry(countryCode);

      const url = countryCode === "worldwide" 
      ? "https://disease.sh/v3/covid-19/all" 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;

      await fetch(url)
      .then( res => res.json())
      .then( data => {
          setCountry(countryCode);
          setCountryInfo(data);
          setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
          setMapZoom(4);
          mapReRender();
          const fecha = data.updated;
          const date = new Date(fecha);
          console.log(date);
          console.log(date.toLocaleDateString());
          
      })
      .catch( err => console.log("Fetch Country Code Failed...", err))
  }

  const mapReRender = () => {
     const render = !mapRender;
     setMapRender(render);
  }

  return (
    <div className="app">
        <div className="app__left">
            <div className="app__header">
                <h1>COVID-19 TRACKER</h1>
                <FormControl className="app__dropdown">
                    <Select
                      variant="outlined"
                      value={country}
                      onChange={ event => onCountryChanged(event) }
                    >
                        <MenuItem value="worldwide">Worldwide</MenuItem>
                        {
                          countries.map(country => (
                          <MenuItem value={country.value}>{country.name}</MenuItem>
                          ))
                        }
                    </Select>
                </FormControl>
            </div>
            
            <div className="app__stats">
                <InfoBox 
                    isRed
                    active={ casesType === "cases" }
                    onClick={  e => setCasesType('cases') } 
                    mapReRender={ mapReRender }
                    title="Coronavirus Cases" 
                    cases={prettyPrintStat(countryInfo.todayCases)} 
                    total={prettyPrintStat(countryInfo.cases)}
                />
                <InfoBox
                    active={ casesType === "recovered" }
                    onClick={ e => setCasesType('recovered') } 
                    mapReRender={ mapReRender }
                    title="Recovered" 
                    cases={prettyPrintStat(countryInfo.todayRecovered)} 
                    total={prettyPrintStat(countryInfo.recovered)} 
                />
                <InfoBox 
                    isRed
                    active={ casesType === "deaths" }
                    onClick={ e => setCasesType('deaths') } 
                    mapReRender={ mapReRender }
                    title="Deaths" 
                    cases={prettyPrintStat(countryInfo.todayDeaths)} 
                    total={prettyPrintStat(countryInfo.deaths)} 
                />  
            </div>
            
            {
              mapRender ?　
              <Map 
              key={1}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
              casesType={casesType}
              />:
              <Map 
              key={2}
              countries={mapCountries}
              center={mapCenter}
              zoom={mapZoom}
              casesType={casesType}
              />
            }


        </div>
        <Card className="app__right">
            <CardContent>
               <h3>Live Cases by Country</h3>
               <Table countries={tableData} />
               <h3 style={{padding: "20px 0"}}>WorldWide New {casesType}</h3>
               <LineGraph className="app__graph" casesType={casesType} />
            </CardContent>
        </Card>
    </div>
  );
}

export default App;
