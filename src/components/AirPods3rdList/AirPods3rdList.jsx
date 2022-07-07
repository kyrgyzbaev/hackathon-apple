import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AirPods3rdList = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="all-container-aipods-3rd-generation">
      <div className="container-3rd-generation">
        <p>AirPods 3rd Generation</p>
      </div>
      <div className="container-airpods-3rd-img">
        <img
          className="img-airpods-3rd-1"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861342000"
          alt=""
        />
        <img
          className="img-airpods-3rd-2"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV1?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861333000"
          alt=""
        />
        <img
          className="img-airpods-3rd-3"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV2?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861338000"
          alt=""
        />
        <img
          className="img-airpods-3rd-4"
          src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MME73_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1632861336000"
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
            className="info-airpods-3rd"
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
          <div className="container-info-3rd">
            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "text.secondary",
                }}>
                Owerview
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                All-new design AirPods are lightweight and offer a contoured
                design. They sit at just the right angle for comfort and to
                better direct audio to your ear. The stem is 33 percent shorter
                than AirPods (2nd generation) and includes a force sensor to
                easily control music and calls.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Spatial audio with dynamic head tracking Sound is placed all
                around you to create an immersive, three-dimensional listening
                experience for music, TV shows, and movies. Gyroscopes and
                accelerometers in AirPods work together to track your head
                movements — so it sounds like you’re in the center of songs and
                scenes.¹
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Adaptive EQ Music is automatically tuned to suit the shape of
                your ear. Inward-facing microphones detect what you’re hearing,
                then adjust low- and mid-range frequencies to deliver the rich
                details in every song.
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Longer battery life AirPods have an extra hour of battery life
                compared with AirPods (2nd generation) for up to 6 hours of
                listening time² and up to 4 hours of talk time.⁵ With just 5
                minutes of charge, you’ll get around an hour of listening⁶ or
                talk time.⁷ And with the MagSafe Charging Case, you can enjoy up
                to 30 hours of total listening time and charge with compatible
                MagSafe and wireless chargers.⁸
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Sweat and water resistant Both AirPods and the MagSafe Charging
                Case are rated IPX4 water resistant — so they’ll withstand
                anything from rain to heavy workouts.³
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Magical in every way Setup is effortless — pull them out of the
                case and they’re ready to use. Automatically switch between your
                Apple devices. In-ear detection knows the difference between
                your ear and other surfaces. Announce Notifications with Siri
                gives you the option to have Siri read your notifications
                through your AirPods. And with Audio Sharing, you and a friend
                can easily share a song or show between any two sets of
                AirPods.⁴
              </Typography>
            </div>

            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  color: "text.secondary",
                  marginTop: "30px",
                }}>
                Highlights
              </Typography>
              <Typography>
                Designed by Apple Spatial audio with dynamic head tracking for
                an immersive three-dimensional listening experience¹ Amazing
                sound quality with Adaptive EQ Contoured design Force sensor
                control Sweat and water resistant (IPX4)³ Easy setup for all
                your Apple devices Case can be charged either wirelessly using a
                MagSafe charger or Qi-certified charger or with the Lightning
                connector
              </Typography>
            </div>

            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  marginTop: "30px",
                  color: "text.secondary",
                }}>
                What in the box?
              </Typography>
              <Typography>
                AirPods MagSafe Charging Case Lightning to USB-C Cable
                Documentation
              </Typography>
            </div>
            <div>
              <Typography
                sx={{
                  fontSize: "18px",
                  marginBottom: "20px",
                  marginTop: "30px",
                  color: "text.secondary",
                }}>
                Tech Specs
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Audio Technology Spatial audio with dynamic head tracking¹
                Adaptive EQ Custom high-excursion Apple driver Custom high
                dynamic range amplifier
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Sensors Dual beamforming microphones Force sensor Inward-facing
                microphone Motion-detecting accelerometer Skin-detect sensors
                Speech-detecting accelerometer
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                H1 headphone chip
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Controls Press once to play, pause, or answer a phone call Press
                twice to skip forward Press three times to skip back Press and
                hold for Siri Say “Hey Siri” to do things like play a song, make
                a call, or get directions
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Sweat and water resistant (IPX4)³
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Power AirPods with Charging Case: More than 24 hours listening
                time,³ up to 18 hours talk time⁸ AirPods (single charge): Up to
                5 hours listening time,¹ up to 3 hours talk time² 15 minutes in
                the case equals up to 3 hours listening time⁴ or up to 2 hours
                talk time⁵
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Size and Weight AirPods (each)⁹ Height: 1.21 inches (30.79 mm)
                Width: 0.72 inch (18.26 mm) Depth: 0.76 inch (19.21 mm) Weight:
                0.15 ounce (4.28 grams) MagSafe Charging Case⁹ Height: 1.83
                inches (46.40 mm) Width: 2.14 inches (54.40 mm) Depth: 0.84 inch
                (21.38 mm) Weight: 1.34 ounces (37.91 grams)
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Works with MagSafe charger, Qi-certified chargers, or the
                Lightning connector
              </Typography>
              <Typography sx={{ marginBottom: "20px" }}>
                Battery AirPods Up to 6 hours of listening time with a single
                charge (up to 5 hours with spatial audio enabled)² Up to 4 hours
                of talk time with a single charge⁵ AirPods with MagSafe Charging
                Case Up to 30 hours of listening time⁸ Up to 20 hours of talk
                time¹⁰ 5 minutes in the case provides around 1 hour of listening
                time⁶ or around 1 hour of talk time⁷
              </Typography>
              <Typography>Bluetooth 5.0</Typography>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AirPods3rdList;
