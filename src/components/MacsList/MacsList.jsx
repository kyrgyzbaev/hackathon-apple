import {
  Box,
  Button,
  Container,
  ImageList,
  ImageListItem,
  Stack,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";

const ProductsList = () => {
  const { isAdmin } = useContext(authContext);

  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  // const [price, setPrice] = useState([1, 10000]);

  // setSearchParams({
  //   q: search,
  // price_gte: price[0],
  // price_lte: price[1],
  // _page: page,
  //     _limit: 4,
  //   });
  // }, [search ]);
  // useEffect(() => {
  //   getMacs();
  // }, [searchParams]);

  // console.log(pages);
  //   console.log(price);

  //   console.log(searchParams.get("q"));
  //   console.log(window.location.search);
  return (
    <Container>
      <div className="icons-air-pro">
        <div className="air">
          <img
            onClick={() => navigate("/macbook-air")}
            className="macbook-air-icon"
            src="	https://www.apple.com/v/mac/home/bp/images/familybrowser/macbookair_light__f0o95rwae8ae_large.svg"
            alt=""
          />
          <p>MacBook Air</p>
        </div>
        <div className="pro">
          <img
            onClick={() => navigate("/macbook-pro")}
            className="macbook-pro-icon"
            src="	https://www.apple.com/v/mac/home/bp/images/familybrowser/macbook_pro_light__e791sjqzt32a_large.svg"
            alt=""
          />
          <p>Macbook Pro</p>
        </div>
      </div>
      <div className="macs-container">
        Save on Mac for college with an Apple education discount.Plus get a $150
        gift card.<a href="">◊◊Shop now{" >"}</a>
      </div>
      <div className="container-macbook-air">
        <div className="inscriptions-macbook-air">
          <p className="air-name">MacBook Air</p>
          <p className="dont-take">Don’t take it lightly.</p>
          <p className="dollar">$ 1199</p>
          <button>Buy</button>
          <a href="/macbook-air">Learn more {">"} </a>
        </div>

        <img
          className="img-air"
          src="	https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_air_m2__r1jrymq4ftea_large_2x.jpg"
          alt=""
        />
      </div>

      <div className="div-black">
        <div className="black-p">
          <p className="div-bl-p">MacBook Pro 13</p>
          <p className="div-bl-p-2">Pro anywhere.</p>
          <p className="from">$ 1299</p>
          <button>Buy</button>
          <a href="/macbook-pro">Learn more {">"} </a>
        </div>

        <img
          className="img-macBook"
          src="https://www.apple.com/v/mac/home/bp/images/overview/hero/macbook_pro_13__e3r46kd69eoi_large_2x.jpg"
          alt=""
        />
      </div>

      {/* <Filters
        search={search}
        setSearch={setSearch}
        price={price}
        setPrice={setPrice}
      /> */}
      {/* <Box display={"flex"} justifyContent={"center"}>
        {advertisingPicture.map(item => (
          <AdvertisingPictureMacs key={item.id} item={item} />
        ))}
      </Box> */}
    </Container>
  );
};

export default ProductsList;
