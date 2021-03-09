/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let Icondongman: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1109 1024" width={size} height={size} {...rest}>
      <Path
        d="M276.314453 109.482667A154.368 154.368 0 0 0 157.018453 52.309333C70.40512 52.309333 0.00512 124.928 0.00512 214.186667A162.133333 162.133333 0 0 0 83.631787 357.290667c-22.698667 61.610667-37.546667 133.973333-40.96 219.306666-1.450667 36.266667 2.218667 70.912 10.752 102.997334 26.709333 99.84 127.573333 327.253333 491.264 343.381333V1024c7.082667 0 13.909333-0.256 20.736-0.426667 6.826667 0.170667 13.653333 0.426667 20.736 0.426667v-1.024c363.690667-16.128 464.554667-243.541333 491.178666-343.381333 8.618667-32 12.288-66.730667 10.837334-102.912-3.498667-90.538667-20.053333-166.4-45.141334-230.4 41.557333-30.378667 66.389333-79.36 66.389334-132.096 0-89.258667-70.4-161.877333-157.013334-161.877334-42.24 0-82.090667 17.493333-111.530666 48.298667C742.91712 39.082667 641.114453 18.773333 586.074453 12.288c-20.906667-3.157333-41.472 0-41.472 0-57.6 6.826667-166.4 28.672-268.288 97.194667"
        fill={getIconColor(color, 0, '#3FA3FF')}
      />
      <Path
        d="M633.178453 751.36V637.184c33.792-9.642667 57.685333-32.938667 57.685334-60.16 0-35.84-41.301333-65.024-92.330667-65.024-50.944 0-92.330667 29.098667-92.330667 65.024 0 27.306667 23.893333 50.517333 57.685334 60.16V753.493333c-64.853333-9.557333-115.882667-50.176-144.725334-78.848a44.202667 44.202667 0 0 0-59.306666-3.242666 50.346667 50.346667 0 0 0-4.437334 73.984c41.386667 41.472 116.394667 99.669333 215.637334 107.093333 7.168 0.512 14.336 0.853333 21.333333 0.853333 83.370667 0 165.632-36.608 245.333333-109.056a50.602667 50.602667 0 0 0 1.962667-71.082666 44.544 44.544 0 0 0-62.976-2.133334c-48.128 43.52-96.170667 70.4-143.530667 80.213334"
        fill={getIconColor(color, 1, '#FFFFFF')}
      />
    </Svg>
  );
};

Icondongman.defaultProps = {
  size: 18,
};

Icondongman = React.memo ? React.memo(Icondongman) : Icondongman;

export default Icondongman;
