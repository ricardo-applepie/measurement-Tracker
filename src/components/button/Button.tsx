import React from 'react' ; 
import {Button} from '@material-ui/core';
import './button.scss' ; 

interface ButtonProps {
   buttonText: string
}

interface ButtonState {

}



// a reusable button component which recieves props .

class SimpleButton extends React.Component<ButtonProps, ButtonState> {
    constructor(props: ButtonProps) {
        super(props) ; 
    }

    render(): React.ReactNode {
        return (
            <div> 
               <Button className="button" color="primary">{this.props.buttonText}</Button>
            </div>
        )
    }
}

export default SimpleButton ; 