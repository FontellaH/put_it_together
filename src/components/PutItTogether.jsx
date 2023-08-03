import React, { useState } from 'react';


//Deconstructing
const PutItTogether = (props) => {
    const { firstname, lastname,  hairColor } = props


    const [age, setAge] = useState(props.age)
    const handleClick = () => setAge(age + 1)


    return (
        <div className="putTogether" >
            <h1>{lastname} {firstname}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button for {firstname} {lastname} </button>
        </div>
    )
}


export default PutItTogether;