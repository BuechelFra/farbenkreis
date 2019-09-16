import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Cell, Pie, PieChart } from 'recharts';
import { colors } from '../data/colors';

/*<defs>
    <filter id="f1">
        <feGaussianBlur in="SourceGraphic" stdDeviation="30"></feGaussianBlur>
    </filter>
</defs>*/


class ColorPieChart extends Component {
    render() {
        const { data } = this.props;

        /*       let test = document.getElementsByTagName("svg");
               let svg = test[0];
               let def = svg.getElementsByTagName("def")[0];
               def.appendChild()
        console.log(test);*/
        return (
            <PieChart width={300} height={300}>
                <Pie data={data} cx="50%" cy="50%" outerRadius={100} dataKey="value">
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[entry.name]}/>
                        ))
                    }
                </Pie>
            </PieChart>
        );
    }
}

ColorPieChart.propTypes = {
    data: PropTypes.array
};

export default ColorPieChart;
