import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AirPods2ndList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="all-container-airpods-2nd-generation">
      <div className="container-2nd-generation">
        <p>AirPods 2nd Generation</p>
      </div>
      <div className="container-btn-2nd">
        <button className="buy-btn-airpods-2nd">Buy</button>
      </div>

      <div className="container-first-airpods-2nd-img">
        <img
          className="img-airpods-2nd-1"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489688005"
          alt=""
        />
        <img
          className="img-airpods-2nd-2"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489684370"
          alt=""
        />
        <img
          className="img-airpods-2nd-3"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1551489686690"
          alt=""
        />
        <img
          className="img-airpods-2nd-4"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MV7N2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1552508263186"
          alt=""
        />
      </div>

      <Accordion
        className="accardion"
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
            className="info-2nd-airpods"
            sx={{
              width: "33%",
              flexShrink: 0,
              fontSize: "30px",
              paddingLeft: "100px",
            }}>
            Product Information
          </p>
        </AccordionSummary>
        <AccordionDetails sx={{ marginLeft: "200px", marginBottom: "50px" }}>
          <div className="container-info-2nd">
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
                More magical than ever. AirPods deliver the wireless headphone
                experience, reimagined. Just pull them out of the charging case
                and they’re ready to use with your iPhone, Apple Watch, iPad, or
                Mac.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                After a simple one-tap setup, AirPods work like magic. They’re
                automatically on and always connected. AirPods can even sense
                when they’re in your ears and pause when you take them out.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                To adjust the volume, change the song, make a call, or even get
                directions, simply say “Hey Siri” and make your request. You
                have the freedom to wear one or both AirPods, and you can play
                or skip forward with a double-tap when listening to music or
                podcasts.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                AirPods deliver 5 hours of listening time¹ and 3 hours of talk
                time on a single charge.² And they’re made to keep up with you,
                thanks to a charging case that holds multiple charges for more
                than 24 hours of listening time.³ Need a quick charge? Just 15
                minutes in the case gives you 3 hours of listening time⁴ or 2
                hours of talk time.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Powered by the all-new Apple H1 headphone chip, AirPods use
                optical sensors and motion accelerometers to detect when they’re
                in your ears. Whether you’re using both AirPods or just one, the
                H1 chip automatically routes the audio and engages the
                microphone. And when you’re on a call or talking to Siri, an
                additional speech-detecting accelerometer works with beamforming
                microphones to filter out external noise and focus on the sound
                of your voice.
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
                Designed by Apple Automatically on, automatically connected.
                Easy setup for all your Apple devices⁶. Quick access to Siri by
                saying “Hey Siri” or setting up double-tap Double-tap to play or
                skip forward Charges quickly in the case Case can be charged
                with a Lightning connector Rich, high-quality audio and voice
                Seamless switching between devices
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
                AirPods Sensors (each): Dual beamforming microphones Dual
                optical sensors Motion-detecting accelerometer Speech-detecting
                accelerometer
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Chip H1 headphone chip
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Controls Double-tap to play, skip forward, or answer a phone
                call Say “Hey Siri” to do things like play a song, make a call,
                or get directions
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Size and Weight AirPods (each): 0.65 by 0.71 by 1.59 inches
                (16.5 by 18.0 by 40.5 mm)⁷ Charging Case: 1.74 by 0.84 by 2.11
                inches (44.3 by 21.3 by 53.5 mm)⁷ AirPods (each): 0.14 ounce (4
                g)⁷ Charging Case: 1.35 ounces (38.2 g)⁷
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Charging Case Works with the Lightning connector
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Power AirPods with Charging Case: More than 24 hours listening
                time,³ up to 18 hours talk time⁸ AirPods (single charge): Up to
                5 hours listening time,¹ up to 3 hours talk time² 15 minutes in
                the case equals up to 3 hours listening time⁴ or up to 2 hours
                talk time⁵
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Connectivity Bluetooth 5.0
              </Typography>
              <Typography>
                Accessibility Accessibility features help people with
                disabilities get the most out of their new AirPods. Features
                include: Live Listen audio⁹ Headphone levels Headphone
                Accommodations
              </Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AirPods2ndList;
