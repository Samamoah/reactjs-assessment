import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/styles";
import styles from "./mapStyles";
import MarkerIcon from "../../images/marker_spotlight.png";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "#gmap_canvas": {
      "& img": {
        maxWidth: "none!important",
        background: "none!important",
      },
    },
  },
  maps: {
    width: "100%",
    height: 543,
    borderBottom: "1px solid #ededed",
    margin: 0,
    textAlign: "center",
    "& #gmap_canvas": {
      pointerEvents: "none",
    },
    [theme.breakpoints.down("sm")]: {
      height: 200,
    },
  },
}));

const APIKey = "AIzaSyAn6o57Vjqcd3Z375OtAuRrMML7mDzU5tI";

function AddressMap({ Latitude, Longitude }) {
  const classes = useStyles();
  const [mapLoaded, setMapLoaded] = useState(false);


  useEffect(() => {
    if (!mapLoaded) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${APIKey}&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);
      window.initMap = () => {
        const google = window.google;
        const myOptions = {
          zoom: 12,
          center: new google.maps.LatLng(Latitude, Longitude),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          scrollwheel: false,
          fullscreenControl: false,
          navigationControl: false,
          mapTypeControl: false,
          zoomControlOptions: false,
          zoomControl: false,
          panControl: false,
          streetViewControl: false,
          scaleControl: false,
          draggable: false,
          styles,
        };

        const map = new google.maps.Map(
          document.getElementById("gmap_canvas"),
          myOptions
        );
        const marker = new google.maps.Marker({
          map,
          icon: {
            url: MarkerIcon,
            // scaledSize: new google.maps.Size(32, 32)
          },
          position: new google.maps.LatLng(Latitude, Longitude),
        });
        const infowindow = new google.maps.InfoWindow({
          content: "<strong>Accra, Ghana</strong>",
        });
        google.maps.event.addListener(marker, "click", () => {
          infowindow.open(map, marker);
        });
        setMapLoaded(true);
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [Latitude, Longitude, mapLoaded]);

  const enablePointerEvents = () => {};

  return (
    <div
      style={{
        overflow: "hidden",
        height: `${"543px"}`,
        width: "100%",
        position: "relative",
        transform: "translateZ(0px)",
        backgroundColor: "rgb(229, 227, 223)",
      }}
      className={classes.maps}
      onClick={enablePointerEvents}
    >
      <div id="gmap_canvas" style={{ height: "543px", width: "100%" }}></div>
      <div>
        <small>
          <a href="http://embedgooglemaps.com">embed google maps</a>
        </small>
      </div>
      <div>
        <small>
          <a href="https://termsofusegenerator.net">terms of use example</a>
        </small>
      </div>
    </div>
  );
}

AddressMap.propTypes = {
  Latitude: PropTypes.number,
  Longitude: PropTypes.number,
};

AddressMap.defaultProps = {
  Latitude: 5.5745365,
  Longitude: -0.2188927,
};

export default AddressMap;
