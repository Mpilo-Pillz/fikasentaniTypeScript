export const getAddressLine = (addressLine: string, addressLines: any[]) =>
  addressLines.find((addressItem) => addressItem.types[0] === addressLine);

export const addAutoComplete = (
  mountNode: HTMLInputElement,
  callback: (address: any) => void
) => {
  const autocomplete = new google.maps.places.Autocomplete(mountNode, {
    types: ["address"],
    componentRestrictions: { country: ["ZA"] },
    fields: ["place_id", "address_component"],
  });

  autocomplete.addListener("place_changed", async () => {
    const { address_components: addressComponent } =
      await autocomplete.getPlace();

    console.log("addComponent-->", addressComponent);

    if (!addressComponent) {
      return;
    } else {
      callback({
        streetNumber:
          getAddressLine(AutocompleteAddress.STREET_NUMBER, addressComponent)
            ?.long_name ?? "",
        streetName:
          getAddressLine(AutocompleteAddress.STREET_NAME, addressComponent)
            ?.long_name ?? "",
        suburb:
          getAddressLine(AutocompleteAddress.SUBURB, addressComponent)
            ?.long_name ?? "",
        town:
          getAddressLine(AutocompleteAddress.TOWN, addressComponent)
            ?.long_name ?? "",
        city:
          getAddressLine(AutocompleteAddress.CITY, addressComponent)
            ?.long_name ?? "",
        province:
          getAddressLine(AutocompleteAddress.PROVINCE, addressComponent)
            ?.long_name ?? "",
        postalCode:
          getAddressLine(AutocompleteAddress.POSTAL_CODE, addressComponent)
            ?.long_name ?? "",
      });
    }
  });

  return autocomplete;
};
