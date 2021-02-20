import React from "react";
import "./tags.scss";
import Textfield from "./TextField";

import { Box, TextField as MatTextField, TextFieldProps, withStyles } from '@material-ui/core';

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: 'black',
        },
        '& label': {
            color: 'black',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'black',
        },
        '& .MuiFilledInput-root': {
            borderRadius: 20,
            background: 'white',
            color: 'black',
            '& fieldset': {
                borderColor: 'black',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'black',
            },
        },
    },
})(MatTextField);

const Tags = (props: any) => {
    const [tags, setTags] = React.useState(Array());

    const addTags = (event: any) => {
        if (event.key === "Enter" && event.target.value !== "") {
            setTags([...tags, event.target.value.toLowerCase()]);
            props.selectedTags([...tags, event.target.value.toLowerCase()]);
            event.target.value = "";
        }
    };
    const removeTags = (index: any) => {
        setTags([...tags.filter(tag => tags.indexOf(tag) !== index)]);
    };
    return (
        <div className="tags-input">
            <ul id="tags">
                {tags.map((tag, index) => (
                    <li key={index} className="tag">
                        <span className='tag-title'>{tag}</span>
                        <span className='tag-close-icon'
                        onClick={() => removeTags(index)}
                        >
                        x
                        </span>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                id="tags-input"
                style={{display: 'none'}}
                
                placeholder="Press enter to add tags"
            />
            <label htmlFor="tags-input">
                <Textfield
                    // variant="filled"
                    // fullWidth
                    className="tags-input"
                    label="Press Enter To Add Tags"
                    onKeyUp={event => addTags(event)}
                />
            </label>
        </div>
    );
};
export default Tags;