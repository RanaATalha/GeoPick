import * as React from 'react';
import './styles.scss';
import WhiteLogo from "./WhiteLogo.svg";
import googleButton from "./googleButton.svg";
interface WelcomeProps {
    
}

const WelcomeScreen: React.FunctionComponent<WelcomeProps> = (props) => {
    return (
    <html>
        <body>
        
            <div className="welcomepg">
                <img src={WhiteLogo}/>
            
                <p className="caption"><span>A tool for</span><br></br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;shutterbugs!</p>
               <div className= "">
                    <button className="g-btn"><img src={googleButton} width="22px"/><p className="text">Sign in</p></button>
                
               </div>
                   <p className="or">-----------------or-----------------</p>
                   <button className="sign-btn">Sign up now!</button><br></br>
                   <button className="sign-btn1" >Sign in</button>
            
            </div>
        </body>
    </html>);
};

export default WelcomeScreen;
