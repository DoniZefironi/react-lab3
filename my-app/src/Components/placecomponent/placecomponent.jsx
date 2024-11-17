import React from 'react';
import './placecomponent.css';
import Message from '../message/message';
import CompanyGoal from '../Task/task';

export default function PlaceComponent({ organization }){
    return (
      <div className="place" id="place">
        <div className="placetext">
          <div className="placete">
            <h2 id="mesto">A MEETING PLACE FOR LOCAL RESIDENTS OF RICHMOND.{organization}</h2>
            <p id="ivse">(AND ALL THE OTHERS).</p>
            <Message />
            <CompanyGoal />
          </div>
        </div>
        <div className="imgplaceimg">
          <div className="imgplace">
          </div>
        </div>
      </div>
    );
  }