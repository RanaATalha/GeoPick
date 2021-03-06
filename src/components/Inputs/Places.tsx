import React, { useEffect } from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextField from './TextField';

export default function Places(props: any) {
    const [address, setAddress] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    });

    // console.log(coordinates);
    // console.log(address);
    

    const handleSelect = async (value: any) => {
        geocodeByAddress(value)
        .then(results => getLatLng(results[0]))
        .then(latLng =>  props.updateCoordinates(latLng))
        .catch(error => console.error('Error', error));
        setAddress(value);
        props.updateLocation(address);
    };

    return (
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        {/* <p>Latitude: {coordinates.lat}</p>
                        <p>Longitude: {coordinates.lng}</p> */}

                        <TextField {...getInputProps({ placeholder: 'Add Location' })} />

                        <div>
                            {loading ? <div>...loading</div> : null}

                            {suggestions.map((suggestion) => {
                                const style = {
                                    backgroundColor: suggestion.active ? '#41b6e6' : '#fff',
                                };

                                return (
                                    <div {...getSuggestionItemProps(suggestion, { style })}>
                                        {suggestion.description}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </PlacesAutocomplete>
        </div>
    );
}
