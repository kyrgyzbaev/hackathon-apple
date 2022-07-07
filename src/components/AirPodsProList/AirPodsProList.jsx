import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

const AirPodsProList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="all-container-airpods-pro">
      <div className="container-airpods-pro-list">
        <p>AirPods Pro</p>
      </div>
      <div className="container-airpods-pro-img">
        <img
          className="img-airpods-pro-1"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634795000"
          alt=""
        />
        <img
          className="img-airpods-pro-2"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634652000"
          alt=""
        />
        <img
          className="img-airpods-pro-3"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634643000"
          alt=""
        />
        <img
          className="img-airpods-pro-4"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MWP22_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1591634662000"
          alt=""
        />
      </div>
      <Accordion
        sx={{
          maxWidth: "1300px",
          marginLeft: "200px",
          boxShadow: "none",
          marginBottom: "30px",
        }}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}>
        <AccordionSummary
          sx={{
            maxWidth: "1300px",
            marginLeft: "200px",
          }}
          expandIcon={<ExpandMoreIcon sx={{ fontSize: "50px" }} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <p
            className="info-airpods-pro"
            sx={{
              width: "33%",
              flexShrink: 0,
              fontSize: "30px",
              paddingLeft: "50px",
            }}>
            Product Information
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "200px", marginBottom: "50px" }}>
          <div className="container-info-airpods-pro">
            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "text.secondary",
                  marginLeft: "-100px",
                }}>
                Owerview
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Magic like you’ve never heard AirPods Pro have been designed to
                deliver Active Noise Cancellation for immersive sound,
                Transparency mode so you can hear your surroundings, and a
                customizable fit for all-day comfort. Just like AirPods, AirPods
                Pro connect magically to your Apple devices. And they’re ready
                to use right out of the case.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Active Noise Cancellation Incredibly light noise-cancelling
                headphones, AirPods Pro block out your environment so you can
                focus on what you’re listening to. AirPods Pro use two
                microphones, an outward-facing microphone and an inward-facing
                microphone, to create superior noise cancellation. By
                continuously adapting to the geometry of your ear and the fit of
                the ear tips, Active Noise Cancellation silences the world to
                keep you fully tuned in to your music, podcasts, and calls.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Transparency mode Switch to Transparency mode and AirPods Pro
                let the outside sound in, allowing you to hear and connect to
                your surroundings. Outward- and inward-facing microphones enable
                AirPods Pro to undo the sound-isolating effect of the silicone
                tips so things sound and feel natural, like when you’re talking
                to people around you. And Conversation Boost makes it easier to
                hear people during face-to-face conversations in noisy
                environments by focusing your AirPods Pro on the person talking
                directly in front of you.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Customizable fit AirPods Pro offer a more customizable fit with
                three sizes of flexible silicone tips to choose from. With an
                internal taper, they conform to the shape of your ear, securing
                your AirPods Pro in place and creating an exceptional seal for
                superior noise cancellation.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                MagSafe Charging Case AirPods Pro with the MagSafe Charging Case
                deliver more than 24 hours of battery life.¹ When it’s time to
                charge, just set the case down on your MagSafe charger, or a
                wireless charging mat, and let it charge. And when you’re away
                from a wireless charger, you can use the Lightning port to
                charge.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Amazing audio quality A custom-built high-excursion,
                low-distortion driver delivers powerful bass. A superefficient
                high dynamic range amplifier produces pure, incredibly clear
                sound while also extending battery life. Spatial audio with
                dynamic head tracking places sound all around you.² And Adaptive
                EQ automatically tunes music to suit the shape of your ear for a
                rich, consistent listening experience.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Even more magical The Apple-designed H1 chip delivers incredibly
                low audio latency. A force sensor on the stem makes it easy to
                control music and calls and switch between Active Noise
                Cancellation and Transparency mode. Announce Messages with Siri
                gives you the option to have Siri read your messages through
                your AirPods. And with Audio Sharing, you and a friend can share
                the same audio stream on two sets of AirPods — so you can play a
                game, watch a movie, or listen to a song together.³
              </Typography>
            </div>

            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "text.secondary",
                  marginTop: "30px",
                  marginLeft: "-100px",
                }}>
                Highlights
              </Typography>
              <Typography>
                Designed by Apple Active Noise Cancellation More customizable
                fit and seal Transparency mode Spatial audio with dynamic head
                tracking² Amazing sound quality with Adaptive EQ Sweat and water
                resistant (IPX4)⁴ Easy setup for all your Apple devices Case can
                be charged either wirelessly using a MagSafe charger or
                Qi-certified charger, or with the Lightning connector
              </Typography>
            </div>

            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  marginTop: "30px",
                  color: "text.secondary",
                  marginLeft: "-100px",
                }}>
                What in the box?
              </Typography>
              <Typography>
                AirPods Pro MagSafe Charging Case Silicone ear tips (three
                sizes) Lightning to USB-C Cable Documentation
              </Typography>
            </div>

            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  marginTop: "30px",
                  color: "text.secondary",
                  marginLeft: "-100px",
                }}>
                Tech Specs
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Audio Technology Active Noise Cancellation Transparency mode
                Spatial audio with dynamic head tracking² Adaptive EQ Vent
                system for pressure equalization Custom high-excursion Apple
                driver Custom high dynamic range amplifier
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Sensors Dual beamforming microphones Inward-facing microphone
                Dual optical sensors Motion-detecting accelerometer
                Speech-detecting accelerometer Force sensor
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                H1-based System in Package
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Controls Press once to play, pause, or answer a phone call Press
                twice to skip forward Press three times to skip back Press and
                hold to switch between Active Noise Cancellation and
                Transparency mode Say “Hey Siri” to do things like play a song,
                make a call, or get directions
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Sweat and water resistant (IPX4)⁴
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Size and Weight AirPods Pro (each)⁵ Height: 1.22 inches (30.9
                mm) Width: 0.86 inch (21.8 mm) Depth: 0.94 inch (24.0 mm)
                Weight: 0.19 ounce (5.4 grams) MagSafe Charging Case⁵ Height:
                1.78 inches (45.2 mm) Width: 2.39 inches (60.6 mm) Depth: 0.85
                inch (21.7 mm) Weight: 1.61 ounces (45.6 grams)
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Charging Case Works with MagSafe charger, Qi-certified chargers,
                or the Lightning connector
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Battery AirPods Pro Up to 4.5 hours of listening time with a
                single charge (up to 5 hours with Active Noise Cancellation and
                Transparency off)⁶ Up to 3.5 hours of talk time with a single
                charge⁷ AirPods Pro with MagSafe Charging Case More than 24
                hours of listening time¹ More than 18 hours of talk time⁸ 5
                minutes in the case provides around 1 hour of listening time⁹ or
                around 1 hour of talk time¹⁰
              </Typography>
              <Typography>Bluetooth 5.0</Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AirPodsProList;
