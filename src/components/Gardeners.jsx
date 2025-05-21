import React from 'react';
import GardenersCard from './GardenersCard';

const Gardeners = ({gardener}) => {
   
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-12 max-w-6xl mx-auto'>
            {
             gardener.map(gardeners=><GardenersCard key={gardeners._id} gardeners={gardeners}></GardenersCard>)
            }
        </div>
    );
};

export default Gardeners;