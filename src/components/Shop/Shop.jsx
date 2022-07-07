import { Box, Pagination, Slider, Stack } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { iphone12Context } from "../../contexts/iphone12Context";
import { iphone13Context } from "../../contexts/iphone13Context";
import { iphone13ProContext } from "../../contexts/iphone13ProContext";
import { macbookAirContext } from "../../contexts/macbookAirContext";
import { macProContext } from "../../contexts/macbookPro";
import { airpodsContext } from "../../contexts/airpodsContext";
import MacBookProCard from "../MacBookProCard/MacBookProCard";
import MacbookAirCard from "../MacbookAirCard/MacbookAirCard";
import Iphone13ProCard from "../Iphone13ProCard/Iphone13ProCard";
import Iphone13Card from "../Iphone13Card/Iphone13Card";
import Iphone12Card from "../Iphone12Card/Iphone12Card";
import AirpodsCard from "../AirpodsCard/AirpodsCard";
import { useNavigate, useSearchParams } from "react-router-dom";
import Filters from "../Filters/Filters";

const Shop = () => {
  const { macPro, getMacPro, pages } = useContext(macProContext);
  const { airs, getAirs } = useContext(macbookAirContext);
  const { iphone13Pro, getIphone13Pro } = useContext(iphone13ProContext);
  const { iphone13, getIphone13 } = useContext(iphone13Context);
  const { iphone12, getIphone12 } = useContext(iphone12Context);
  const { airpods, getAirpods } = useContext(airpodsContext);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [price, setPrice] = useState([1, 2500]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getMacPro();
    getAirs();
    getIphone13Pro();
    getIphone13();
    getIphone12();
    getAirpods();
  }, []);

  useEffect(() => {
    setSearchParams({
      q: search,
      price_gte: price[0],
      price_lte: price[1],
      _page: page,
      _limit: 3,
    });
  }, [search, price, page]);

  useEffect(() => {
    getMacPro();
    getAirs();
    getIphone13Pro();
    getIphone13();
    getIphone12();
    getAirpods();
  }, [searchParams]);

  return (
    <div className="all-container-all-products">
      <div className="container-all-products-apple">
        <Filters
          search={search}
          setSearch={setSearch}
          price={price}
          setPrice={setPrice}
        />
        <div className="container-p-all-products-apple">
          <p className="all-products-apple-p">All Products Apple</p>
        </div>
        <Slider
          // getAriaLabel={() => "Temperature range"}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            maxWidth: "400px",
            marginLeft: "100px",
          }}
          className="filters"
          value={price}
          onChange={(e, value) => setPrice(value)}
          valueLabelDisplay="auto"
          min={1}
          max={2600}
          step={100}
          color={"secondary"}
        />
      </div>
      <div className="container-all-products">
        <Box
          className="box-mac-pro-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {macPro.map(item => (
            <MacBookProCard key={item.id} item={item} />
          ))}
        </Box>

        <Box
          className="box-mac-air-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {airs.map(item => (
            <MacbookAirCard key={item.id} item={item} />
          ))}
        </Box>
        <Box
          className="box-iphone-13-pro-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {iphone13Pro.map(item => (
            <Iphone13ProCard key={item.id} item={item} />
          ))}
        </Box>
        <Box
          className="box-iphone-13-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {iphone13.map(item => (
            <Iphone13Card key={item.id} item={item} />
          ))}
        </Box>
        <Box
          className="box-iphone-12-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {iphone12.map(item => (
            <Iphone12Card key={item.id} item={item} />
          ))}
        </Box>
        <Box
          className="box-airpods-card"
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          paddingTop={"30px"}>
          {airpods.map(item => (
            <AirpodsCard key={item.id} item={item} />
          ))}
        </Box>
        <Box display={"flex"} justifyContent={"center"} margin={"30px"}>
          <Stack>
            <Pagination
              color="primary"
              page={page}
              count={isNaN(pages) ? 0 : pages}
              variant="outlined"
              shape="circle"
              onChange={(e, value) => setPage(value)}
            />
          </Stack>
        </Box>
      </div>

      {/* <img
        className="img-macbook"
        src="https://www.apple.com/v/macbook-pro-13/m/images/overview/hero_endframe__bsza6x4fldiq_large_2x.jpg"
        alt=""
      />
      <img
        className="img-macbook-2"
        src="https://www.apple.com/v/macbook-pro-14-and-16/b/images/overview/hero/hero_intro_endframe__e6khcva4hkeq_large_2x.jpg"
        alt=""
      /> */}
    </div>
  );
};

export default Shop;
