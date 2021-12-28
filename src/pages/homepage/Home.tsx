import React  from "react";
import './homepage.scss' ;
import Form from '../../components/form/Form'; 
import Iconbuttons from '../../components/icon/Icon'; 
import DatePicker from '../../components/date/Date'; 

type HomeProps = {
  // using `interface` is also ok
  message?: string;
};

type State = {
  data: string; // like this
};



class Home extends React.Component<HomeProps, State> {
    constructor(props: HomeProps) {
        super(props)
        this.state = {
            data: ""
        }

    }

    componentDidMount() {
      console.log("Testing")
    }

    render() {

        return (
            <div className="homepage">
              <section className="row form-section">
                <div className="col col-md-6  shadow">
                  <Form />
                
                   <div className="list-wrapper">
                      <ul className="list-group">
                        <li className="list-group-item"><span className="list-weight">Dapibus ac facilisis in</span>
                           <span>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16" fill="currentColor"
                                className="bi bi-x-octagon-fill" 
                                viewBox="0 0 16 16">
                                <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                              </svg>
                            </span>
                           </li>
                           <li className="list-group-item"><span className="list-weight">Dapibus ac facilisis in</span>
                            <span>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16" fill="currentColor"
                                  className="bi bi-x-octagon-fill" 
                                  viewBox="0 0 16 16">
                                  <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                                </svg>
                              </span>
                            </li>                     
                       </ul>
                    </div>
                </div>
              </section>
            </div>
        )
    }
}
export default Home ; 