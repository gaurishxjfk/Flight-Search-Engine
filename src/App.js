import "./styles.css";
import React, { useState } from "react";

const flightList = [
  //  oneWay: [
  {
    "company": "AirAsia",
    "model": "AA-12",
    "fromCity": "Pune",
    "toCity": "Delhi",
    "fromDate": "2021-01-10",
    "departTime": "10:00 AM",
    "arrival": "12:00 AM",
    "price": "2000",
    "capacity": "50"
  },
  {
    "company": "Indigo",
    "model": "TC-92",
    "fromCity": "Pune",
    "toCity": "Delhi",
    "fromDate": "2021-01-10",
    "departTime": "11:00 AM",
    "arrival": "1:00 AM",
    "price": "3500",
    "capacity": "80"
  },
  {
    "company": "Indigo",
    "model": "TC-91",
    "fromCity": "Mumbai",
    "toCity": "Delhi",
    "fromDate": "2021-01-10",
    "departTime": "12:00 AM",
    "arrival": "3:00 AM",
    "price": "3500",
    "capacity": "80"
  },
  {
    "company": "Indigo",
    "model": "TC-62",
    "fromCity": "Pune",
    "toCity": "Banglore",
    "fromDate": "2021-01-10",
    "departTime": "11:00 AM",
    "arrival": "1:00 AM",
    "price": "1500",
    "capacity": "75"
  }
  /**  ],
  return: [
    {
      company: "AirAsia",
      model: "AA-12",
      fromCity: "Pune",
      toCity: "Delhi",
      fromDate: "2021-01-10",
      departTime: "10:00 AM",
      arrival: "12:00 AM",
      returnDate: "2021-02-10",
      returnDepartTime: "09:00 AM",
      returnArrival: "11:00 AM",
      price: "4000",
      capacity: "50"
    },
    {
      company: "Indigo",
      model: "IA-92",
      fromCity: "Pune",
      toCity: "Delhi",
      fromDate: "2021-01-10",
      departTime: "10:00 AM",
      arrival: "12:00 AM",
      returnDate: "2021-02-10",
      returnDepartTime: "09:00 AM",
      returnArrival: "11:00 AM",
      price: "6000",
      capacity: "50"
    },
    {
      company: "AirAsia",
      model: "AA-15",
      fromCity: "Pune",
      toCity: "Delhi",
      fromDate: "2021-02-10",
      departTime: "10:00 AM",
      arrival: "12:00 AM",
      returnDate: "2021-05-10",
      returnDepartTime: "09:00 AM",
      returnArrival: "11:00 AM",
      price: "4000",
      capacity: "50"
    }
  ]*/
];

class Tabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      active: 0
    };
  }

  select = (i) => {
    let _this = this;
    return function () {
      _this.setState({
        active: i
      });
    };
  };

  renderTabs = () => {
    return React.Children.map(this.props.children, (item, i) => {
      if (i % 2 === 0) {
        let active = this.state.active === i ? "active" : "";
        return (
          <a onClick={this.select(i)} className={`${active} tab`}>
            {item}
          </a>
        );
      }
    });
  };

  renderContent() {
    return React.Children.map(this.props.children, (item, i) => {
      if (i - 1 === this.state.active) {
        return <div className="content">{item}</div>;
      } else {
        return;
      }
    });
  }

  render() {
    return (
      <div className="tabs">
        {this.renderTabs()}
        {this.renderContent()}
      </div>
    );
  }
}

export default function App() {
  var [originCity, setOriginCity] = useState();
  var [destinationCity, setDestinationCity] = useState();
  var [departureDate, setDepartureDate] = useState();
  var [returnDate, setReturnDate] = useState();
  var [passengers, setPassengers] = useState(1);
  var [priceFilter, setPriceFilter] = useState(1000);
  const [items, setItems] = useState([]);
        //     set search query to empty string
        const [q, setQ] = useState("");
        //     set search parameters
    
        const [searchParam] = useState(["fromCity","toCity"]);
  function getFlights() {}

  function calculatePrice(noOfPpl, priceOfFlight) {
    return priceOfFlight * noOfPpl; 
  }

  function search(items) {
    return Object.keys(flightList).filter((itemi) => {
     
        return searchParam.some((newItem) => {          
            return (
               flightList[itemi].[newItem]
                    .toString()
                    .toLowerCase()
                   .indexOf(originCity) > -1
            );
        });
    });
}



  return (
    <div className="App">
      <h1>Flight Search Engine</h1>
      <div className="main-content">
        <div className="side-bar">
          <main>
            <Tabs>
              One
              <span>
                <div className="tab-content">
                  <div id="tab-1" className="tab-pane active">
                    <input
                      type="text"
                      id="origin-city"
                      placeholder="Enter origin city"
                      value={originCity}
                      onInput={(e) => setOriginCity(e.target.value)}
                    />
                    <input
                      type="text"
                      id="destination-city"
                      placeholder="Enter destination city"
                      value={destinationCity}
                      onInput={(e) => setDestinationCity(e.target.value)}
                    />
                    <input
                      type="date"
                      id="departure-date"
                      placeholder="Departure date"
                      value={departureDate}
                      onInput={(e) => setDepartureDate(e.target.value)}
                    />
                    <input
                      type="date"
                      id="return-date"
                      placeholder="Return date"
                      value={returnDate}
                      onInput={(e) => setReturnDate(e.target.value)}
                    />
                    <input
                      type="number"
                      id="passenger"
                      placeholder="Passengers"
                      value={passengers}
                      onInput={(e) => setPassengers(e.target.value)}
                    />
                    <button id="btn-search" onClick={getFlights}>
                      Search
                    </button>

                    <label>
                      <input
                        id="typeinp"
                        type="range"
                        min="1000"
                        max="7500"
                        value={priceFilter}
                        onChange={(e) => setPriceFilter(e.target.value)}
                        step="500"
                      />
                      {priceFilter}
                    </label>
                  </div>
                  <div id="tab-2" className="tab-pane"></div>
                </div>
              </span>
              Two
              <span>Two thing</span>
            </Tabs>
          </main>
        </div>
        <div className="result-section">
        
          {
            // return Object.keys(flightList).filter((item) => {
  //   return searchParam.some((newItem) => {
    search(Object.keys(flightList)).map((type) => (
            //console.log(flightList[type].model)calculatePrice(flightList[type].price)
            
          <div>
              <p>{calculatePrice(passengers, flightList[type].price)}</p>
              <p>{flightList[type].model}</p>
              <p>
                {flightList[type].fromCity}
                <span>-</span>
                {flightList[type].toCity}
              </p>
              <p>Departure : {flightList[type].departTime}</p>
              <p>Arrival : {flightList[type].arrival}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
// });
// });
}
