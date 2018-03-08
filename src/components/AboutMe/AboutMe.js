import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CircleImage from '../CircleImage/CircleImage';
import {mediaBaseUrl} from '../../config';

import './AboutMe.scss';

class AboutMe extends Component {
    static propTypes = {
        name: PropTypes.string,
        location: PropTypes.string,
        imageUrl: PropTypes.string,
        details: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
                value: PropTypes.string
            })
        )
    }

    render() {
        const {
            name,
            details
        } = this.props;

        return (
            <div className="about-me">
                <h1 className="about-me__name">{name}</h1>
                <CircleImage imageUrl={`${mediaBaseUrl}/fb_photo_medium.jpg`} />
                <div className="about-me__info-container">
                    {details.map((detail, i) => {
                        return (
                            <p key={i} className="about-me__detail">{detail.value}</p>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default AboutMe;
