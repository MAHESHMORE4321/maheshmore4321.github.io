import React, { Component } from 'react';
import * as api from '../../constant/constant';
import axios from 'axios'; 

import EducationDetails from './education_details';

class Education extends Component {
  constructor(props){
		super(props)

		this.state = {
      education_: [],
      loaded: false
    }
  }
  componentDidMount(){
		axios.get(api.JSON_FILE_DATA)
		.then(response =>{ 
      this.setState({education_: response.data.education});
		})
		.catch(error =>{
			console.log(error);
		})
	}
  render() {
    const {education_} = this.state;
    return (
      <>
        <section className="sym-experience" data-section="education">
          <div className="sym-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Academics</span>
                <h2 className="sym-heading animate-box">Education</h2>
              </div>
              <div className="row" style={{margintop:'20px'}}>
                <div className="col-md-12">
                  <div className="timeline-centered">
                    {
                      education_.map((education_inner, index) =>
                        <EducationDetails  
                          key={index}
                          data={education_inner}
                          id={index}
                        />
                      )
                    }
                    <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                      <div className="timeline-entry-inner">
                        <div className="timeline-icon color-none"></div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Education;