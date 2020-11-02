import React from 'react';

const ServiceDetails = (props) => {
    return (
        <div>
            <h1>Service Details: {props.match.params.id}</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Reiciendis dignissimos sequi eum pariatur obcaecati asperiores 
                nostrum, necessitatibus maxime veritatis autem iure, sint recusandae 
                quaerat nihil itaque incidunt? Delectus, fugiat nesciunt.
            </p>
        </div>
    );
}

export default ServiceDetails;
