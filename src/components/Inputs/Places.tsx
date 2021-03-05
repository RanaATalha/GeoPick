import React from 'react';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import TextField from './TextField';

export default function Places(props: any) {
    const [address, setAddress] = React.useState('');
    const [coordinates, setCoordinates] = React.useState({
        lat: null,
        lng: null,
    });

    const handleSelect = async (value: any) => {
        const results = await geocodeByAddress(value);
        const latLng = await getLatLng(results[0]);
        setAddress(value);
        props.address(address);
        setCoordinates((latLng as unknown) as { lat: null; lng: null });
    };

    return (
        <div>
            <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                    <div>
                        <TextField {...getInputProps({ placeholder: 'Add Location' })}/>

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
