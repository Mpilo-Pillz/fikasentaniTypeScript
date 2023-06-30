import { google } from "google-maps";

interface Address {
  streetNumber?: string;
  streetName?: string;
  suburb?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

const geocoder = new google.maps.Geocoder();

geocoder.geocode(
  { address: "1600 Amphitheatre Parkway, Mountain View, CA" },
  (results, status) => {
    if (status === "OK") {
      const address: Address = {};
      const components = results[0].address_components;
      for (const component of components) {
        switch (component.types[0]) {
          case "street_number":
            address.streetNumber = component.long_name;
            break;
          case "route":
            address.streetName = component.long_name;
            break;
          case "locality":
            address.city = component.long_name;
            break;
          case "administrative_area_level_1":
            address.state = component.long_name;
            break;
          case "country":
            address.country = component.long_name;
            break;
          case "postal_code":
            address.postalCode = component.long_name;
            break;
        }
      }
      console.log(address);
    } else {
      console.error(
        "Geocode was not successful for the following reason: " + status
      );
    }
  }
);
