import React from "react";
import "./homepage.scss";
import Form from "../../components/form/Form";
import Iconbuttons from "../../components/icon/Icon";
import DatePicker from "../../components/date/Date";
import ProgressBar from "../../components/progressBar/ProgressBar";
import Carousel from "../../components/swipper/Swipper";
import { HomeProps, homepageState } from "./homepageTypes";
import { connect, useDispatch } from "react-redux";
import {
  deleteMeasurement,
  Measurement,
  measurementSuccess,
} from "../../store/actionCreators/actions";
import Modal from "../../components/modal/Modal";
import { Dispatch } from "redux";

interface Prevprops {
  dispatch: Dispatch;
  measurements: {
    measurements: Array<Measurement>;
    updating: Boolean;
  };
}
class HomePage extends React.Component<HomeProps, homepageState> {
  constructor(props: HomeProps) {
    super(props);
    this.state = this.createStore(props);
  }

  componentWillReceiveProps(prevprops: HomeProps) {
    console.log(prevprops);
    // updates HomePage state if props from parent changes
    if (prevprops.measurements) {
      this.setState({
        ...this.state.measurements,
        measurements: prevprops.measurements,
      });
    }
  }
  createStore(props: HomeProps) {
    return {
      measurements: props.measurements,
    };
  }

  render() {
    const { measurements } = this.state.measurements;
    const updating = this.state.measurements.updating;
    const totalMeasurements = measurements.length;

    return (
      <div className="homepage">
        {updating && <div className="spinner-border" role="status"></div>}

        <section className="row form-section hero">
          <h1 className="center">Measurement Track</h1>
          <div className="col-md-3">
            <ProgressBar
              value={totalMeasurements / 100}
              totalMeasurements={totalMeasurements}
            />
          </div>
          <div className="col col-md-8 shadow">
            <Form deleteMeasurement={false} />
            <h3 className="center">User Timeline</h3>
            <div className="list-wrapper">
              <ul className="list-group">
                {measurements &&
                  measurements.map((measurement: any, index: number) => {
                    return (
                      <React.Fragment>
                        <li key={index} className="list-group-item">
                          <span className="list-weight">
                            {measurement.weight}
                          </span>
                          <span className="date">
                            {measurement.date.toString()}
                          </span>
                          <span
                            onClick={() => {
                              this.props.dispatch(
                                deleteMeasurement(measurement)
                              );
                              setTimeout(() => {
                                this.props.dispatch(measurementSuccess());
                              }, 1000);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-x-octagon-fill"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
                            </svg>
                          </span>

                          <span className="delete-icon">
                            <Modal measurement={measurement} />
                          </span>
                        </li>
                      </React.Fragment>
                    );
                  })}
              </ul>
            </div>
          </div>
        </section>
        <section className="excercise">
          <div className="row">
            <div className="col col-md-8">
              <Carousel />
            </div>
            <div className="col-md-3 ">
              <ProgressBar
                value={totalMeasurements / 100}
                totalMeasurements={totalMeasurements}
              />
            </div>
          </div>
        </section>
        <section></section>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  dispatch,
});

// connecting redux store to Homepage component , so this component can have access to state .
export default connect(
  (state: any) => ({
    measurements: state.measurementsData,
  }),
  mapDispatchToProps
)(HomePage);
