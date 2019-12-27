import React , {Component} from 'react'
import MyContext from './MyContext';

export default class MyProvider extends Component {
    constructor(){
        super();
        this.state = {cars: {
                car001: { name: 'Honda', price: 100 },
                car002: { name: 'BMW', price: 150 },
                car003: { name: 'Mercedes', price: 200 }
            }, 
            digitals:[
                {id:1, name: 'Phone', price: 100 },
                {id:2, name: 'Laptop', price: 150 },
                {id:3, name: 'TV', price: 200 }
            ]
        };
    }

    render() {
        return (
            <MyContext.Provider
                value={{
                    cars: this.state.cars,
                    digitals: this.state.digitals,
                    removeDigital:id => {
                        const temp = this.state.digitals.filter(q => q.id != id);
                        this.setState({
                            digitals: temp
                        });
                    },
                    incrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price + 1;
                        this.setState({
                            cars
                        });
                    },
                    decrementPrice: selectedID => {
                        const cars = Object.assign({}, this.state.cars);
                        cars[selectedID].price = cars[selectedID].price - 1;
                        this.setState({
                            cars
                        });
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        );
    }
}