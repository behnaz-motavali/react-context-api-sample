import React, {Fragment, Consumer} from 'react'
import MyContext from '../ContextAPI/MyContext'
export const Digitals = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Digitals:</h4>
                {context.digitals.map((item, index) => (
                    <Digital
                        key={index}
                        name={item.name}
                        price={item.price}
                        removeDigital={() => context.removeDigital(item.id)}
                    />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
)

export const Digital = (props) => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.removeDigital}>Delete</button>
    </Fragment>
)

export default Digitals;
