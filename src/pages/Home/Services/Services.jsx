import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
        .then( res => res.json())
        .then ( data => setServices(data))
    },[])

    return (
        <div className='mt-4'>
            <div className='text-center'>
              <h3 className='text-xl text-color-primary font-bold '>Services</h3>
              <h2 className='text-4xl font-bold '>Our Service Area</h2>
              <p className='lg:w-1/2 mx-auto'>the majority have suffered alteration in some form, by injected humour, or randomized words which don't look even slightly believable. </p>
            </div>

            <div>
                {
                    services.map( service => <ServiceCard
                    key={service?._id} service={service}
                    > </ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;