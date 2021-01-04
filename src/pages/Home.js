import React from "react";
import Jumbotron from "../components/cards/Jumbotron";
import NewArrivals from "../components/home/NewArrivals";
import BestSellers from "../components/home/BestSeller";
import { CopyrightOutlined, createFromIconfontCN } from "@ant-design/icons";
import CategoryList from "../components/category/CategoryList";
import SubList from "../components/sub/SubList";

import { Menu, Carousel, Image } from "antd";

const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});
const contentStyle = {
  height: "100%",
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  objectFit: "cover" ,
  display: "inline-block"
};
const Home = () => {
  return (
    <>
      <div className=" text-center">
        <Carousel>
          <div style={contentStyle}>
            <Image width={700} src="/img/banner/Banner_carousel_01.jpg" />
          </div>
          <div style={contentStyle}>
            <Image width={700} src="/img/banner/Banner_carousel_02.jpg" />
          </div>
          <div style={contentStyle}>
            <Image width={700} src="/img/banner/Banner_carousel_03.jpg" />
          </div>
        </Carousel>
      </div>
<hr/>
      <h4 className="text-center   " >
        New Arrivals
      </h4>
      <hr/>
      <NewArrivals />
      <hr/>

      <h4 className="text-center   ">
        Best Sellers
      </h4>
      <hr/>
      <BestSellers />

      <br />
      <br />
      <hr/>
      <h4 className="text-center   ">
        Categories
      </h4>  <hr/>
      <CategoryList />
      <hr/>
      
      
      <Menu theme="light">
        <div>
          <p className="icons-list text-center font-small p-3 mt-5 mb-5  ">
            <a>Conditions of Use</a> <a>Privacy Notice</a>{" "}
            <a>Interest-Based Ads</a> <CopyrightOutlined />
            2020-2021, VenusNaturals.com, Inc. or its affiliates{" "}
            
          </p>
        </div>
      </Menu>
    </>
  );
};

export default Home;
