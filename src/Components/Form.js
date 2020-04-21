import React from 'react';

const  Form = props  => {
    return (
        <div>
            <form onSubmit={props.getWeather}>
                <input 
                    type="text"
                    name="country"
                    placeholder="Country"
                />
                <br/>
                <input 
                    type="text" 
                    name="countryCode"
                    placeholder="CountryCode"
                />
                <div>
                    <button type="submit">
                        Send
                    </button>
                </div>
           </form>
        </div>
    )
}

export default Form;