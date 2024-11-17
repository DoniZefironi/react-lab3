import React from 'react';
import Acord from './acordion';
import Socr from '../socr/socr'
import './food.css'
import Carus from './carus';

export default function Food() {
    return (
        <div className='food'>
            <Acord />
            <Socr />
            <Carus />
        </div>
    );
}