import React, { useState, useEffect } from 'react';
import MainSlide from './MainSlide/MainSlide';
import ProductSlide from './ProductSlide/ProductSlide';
import MainBanner from './MainBanner/MainBanner';
import PromotionSlide from './PromotionSlide/PromotionSlide';
import MainRecommend from './MainRecommend/MainRecommend';
import { MAIN } from '../.././config';

const Main = () => {
  const [productData, setProductData] = useState([]);

  const [promotionData, setPromotionData] = useState([]);

  useEffect(() => {
    // fetch(`${MAIN}residences?offset=0&limit=6`)
    fetch('data/mainData.json')
      .then(res => res.json())
      .then(data => {
        setProductData(data.productList);
        setPromotionData(data.promotionList);
      });
  }, []);
  console.log(productData, promotionData);

  // mockData 를 위한 임시 주석
  // useEffect(() => {

  //   fetch(`${MAIN}residences?offset=6&limit=4`)
  //     .then(res => res.json())
  //     .then(data => {
  //       setPromotionData(data);
  //     });
  // }, []);

  return (
    <div>
      <MainSlide />
      <ProductSlide productList={productData} />
      <MainBanner />
      <PromotionSlide promotionList={promotionData} />
      <MainRecommend />
    </div>
  );
};

export default Main;
