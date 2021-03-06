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

let Iconiconfontxingxing: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M942.689255 411.229837c-4.743556-14.595558-17.39304-25.298967-32.596745-27.4883l-250.070555-36.367265-111.899275-226.596033c-6.81126-13.74415-20.79867-22.501485-36.124005-22.501485-15.325336 0-29.312745 8.757335-36.124005 22.501485l-111.899275 226.596033-250.070555 36.367265c-15.203706 2.189334-27.853189 12.771113-32.596745 27.4883-4.743556 14.595558-0.729778 30.650671 10.21689 41.35408l180.984915 176.362988L229.939522 878.044423c-2.554223 15.082076 3.648889 30.407412 16.055113 39.408006 12.406224 9.000594 28.826226 10.21689 42.448747 3.040741l223.676921-117.615869 223.676921 117.615869c5.838223 3.040741 12.284594 4.621927 18.730966 4.621927 8.392446 0 16.663262-2.554223 23.717781-7.662668 12.406224-9.000594 18.609336-24.325929 16.055113-39.408006l-42.692006-249.097518 180.984915-176.362988C943.419033 441.880508 947.432811 425.825395 942.689255 411.229837L942.689255 411.229837z"
        fill={getIconColor(color, 0, '#E23938')}
      />
    </Svg>
  );
};

Iconiconfontxingxing.defaultProps = {
  size: 18,
};

Iconiconfontxingxing = React.memo ? React.memo(Iconiconfontxingxing) : Iconiconfontxingxing;

export default Iconiconfontxingxing;
