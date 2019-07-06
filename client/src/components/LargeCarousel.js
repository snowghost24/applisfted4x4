import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

// this componenet is used int he Mainapage
// TODO: Crop images at width 1360 and height of 450
class LargeCarousel extends React.Component {
    render () {
      if (isWidthUp('sm', this.props.width)) {
        return      <Carousel autoPlay showThumbs={false} thumbWidth={1360}>
        <div>
            <img src="https://storage.googleapis.com/hsimages/whitetruck.jpg" alt='trucks'/>
            {/* <p className="legend">Legend 3</p> */}
        </div>
    </Carousel>;
      }
      return <span />
    }
  }
  
  export default withWidth()(LargeCarousel);