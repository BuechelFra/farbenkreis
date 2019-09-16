import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getRgbaColorStringWithAlpha } from '../data/colors';

const styles = {
    main: {
        width: '200px',
        height: '200px',
        borderRadius: '200px'
        // backgroundColor: 'rgb(2,0,36)',
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px'
    },
    text: {
        letterSpacing: '5px',
        fontWeight: 100,
        textTransform: 'uppercase',
        fontSize: 'x-small'
    }
};

const gradientSlots = [
    { x: 10, y: 10 }, // 1
    { x: 50, y: 0 },
    { x: 90, y: 10 }, // 2
    { x: 100, y: 50 },
    { x: 90, y: 90 }, // 3
    { x: 50, y: 100 },
    { x: 10, y: 90 }, // 4
    { x: 0, y: 50 } // 4
];

const map = (value, x1, y1, x2, y2) => (value - x1) * (y2 - x2) / (y1 - x1) + x2;

class ColorGradient extends Component {
    createGradient(data) {
        let base = 'radial-gradient(circle at ';
        let filteredColors = data.sort((a, b) => a.percent < b.percent ? -1 : 1).filter(x => x.percent > 0.01);
        console.log(filteredColors);
        // const startSlotIdx = Math.floor(Math.random() * (gradientSlots.length));
        let gradientString = "";
        let currSlotIdx = 3;
        let reach;
        for (let i = 0; i < filteredColors.length; i++) {
            const entry = filteredColors[i];
            if (i === filteredColors.length - 1) {
                reach = 90;
            } else {
                reach = map(entry.percent, filteredColors[0].percent, filteredColors[filteredColors.length - 1].percent, 10, 90);
                console.log(reach);
                // reach = Math.max(30, entry.percent * 100);
            }
            const gradientSlot = gradientSlots[currSlotIdx];
            gradientString = gradientString
                + base
                + gradientSlot.x + '% ' + gradientSlot.y + '%, '
                + getRgbaColorStringWithAlpha(entry.name, 0.8) + ', ' + getRgbaColorStringWithAlpha(entry.name, 0)
                + ' ' + reach + '%'
                + ')';
            if (i < filteredColors.length - 1) {
                gradientString += ', ';
            }
            currSlotIdx = (currSlotIdx + 1) % gradientSlots.length;
        }
        return gradientString;
        /*  return 'radial-gradient(circle at 50% 0,         rgba(255,0,0,.8),         rgba(255,0,0,0) 21%), ' +
              'radial-gradient(circle at 0 100%,         rgba(0,0,255,.8),         rgba(0,0,255,0) 21%), ' +
              'radial-gradient(circle at 90% 100%,         rgba(0,255,0,.8),         rgba(0,255,0,0) 31%), ' +
              'radial-gradient(circle at 5% 25%,         rgba(251, 0, 255, 0.8),         rgba(255,0,255,0) 51%), ' +
              'radial-gradient(circle at 50% 100%,         rgba(0,255,255,.8),         rgba(0,255,256,0) 51%), ' +
              'radial-gradient(circle at 91% 25%,         rgba(212,175,55,.8),         rgba(212,175,55,0) 91%), ' +
              'radial-gradient(circle at 90% 75%,         rgba(255, 235, 59, 0.8),         rgba(255, 235, 59, 0) 1%)';*/
    }

    render() {
        const { classes, data, text } = this.props;
        const gradient = this.createGradient(data);
        return (
            <div className={classes.container}>
                <div className={classes.main}
                     style={{ background: gradient }}>
                </div>
                <h3 className={classes.text}>{text}</h3>
            </div>
        );
    }
}

ColorGradient.propTypes = {
    classes: PropTypes.object.isRequired,
    data: PropTypes.array,
    text: PropTypes.string
};

export default withStyles(styles)(ColorGradient);
