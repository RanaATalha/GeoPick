import * as React from 'react';
import InputBase from '@material-ui/core/InputBase';
import { render } from '@testing-library/react';
import { IconButton } from '@material-ui/core';
import PublishRoundedIcon from '@material-ui/icons/PublishRounded';
import fb from 'firebase/app';

export interface PostViewProps {
    newComment: string;
}

// const useStyles = makeStyles((theme: Theme) =>
//     createStyles({
//         root: {
//             flexGrow: 1,
//         },
//         paper: {
//             padding: theme.spacing(2),
//             textAlign: 'center',
//             color: theme.palette.text.secondary,
//         },
//     }),
// );
// const PostView: React.FunctionComponent<PostViewProps> = (props) =>
// const classes = useStyles();
/* var config={
   apiKey:"",
   authDomain:"",
   databaseURL:"",
   project:"",
   storeageBucket:"",
   messageingSenderid:""
;*/

export class PostViewScreen extends React.Component<{}, { newComment: string }> {
    render() {
        const handleChange = (event: any) => {
            console.log(event.target.value);
            this.setState({ newComment: event.target.value as string });
        };

        const handleClick = (event: any) => {
            const FieldValue = fb.firestore.FieldValue;
            const comment = this.state.newComment;
            fb.firestore()
                .collection('Posts')
                .doc('tBKONbLunJRyvL1Td0SB')
                .update({
                    comments: FieldValue.arrayUnion(comment),
                    comments_count: fb.firestore.FieldValue.increment(1),
                });
            console.log('state', comment);
        };

        return (
            <html>
                <body>
                    {/* <img src ={background} width='auto'> */}
                    <div className="welcomepg">
                        <InputBase
                            onChange={handleChange}
                            placeholder="Start typing..."
                            style={{
                                width: '32.5%',
                                marginRight: '-12%',
                                textDecorationColor: '#FAFAFA',
                                border: '1px solid #FAFAFA',
                                borderRadius: '10px',
                                height: '50px',
                                padding: '10px',
                                color: 'black',
                            }}
                            endAdornment={
                                <IconButton
                                    onClick={handleClick}
                                    aria-label="upload"
                                    type="submit"
                                    style={{ color: '#FAFAFA', alignContent: 'end' }}
                                >
                                    <PublishRoundedIcon />
                                </IconButton>
                            }
                        />
                    </div>
                </body>
            </html>
        );
    }
}

export default PostViewScreen;
