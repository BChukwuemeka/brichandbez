import React from 'react';
import { brichandbez, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="BnB__brand section__padding">
    <div>
      <img src={brichandbez} alt={'brand_image'} style={{width: '12rem'}}  />
    </div>
    <div>
      <img src={slack} alt={'brand_image'} />
    </div>
    <div>
      <img src={atlassian} alt={'brand_image'} />
    </div>
    <div>
      <img src={dropbox} alt={'brand_image'} />
    </div>
    <div>
      <img src={shopify} alt={'brand_image'}  />
    </div>
  </div>
);

export default Brand;
