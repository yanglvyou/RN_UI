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

let Iconguanbi: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M7.669378 512.002556c0 282.769964 227.197651 511.997444 507.457172 511.997444 280.269746 0 507.457172-229.22748 507.457172-511.997444S795.396296 0 515.12655 0C234.867029 0 7.669378 229.232593 7.669378 512.002556z"
        fill={getIconColor(color, 0, '#dbdbdb')}
      />
      <Path
        d="M793.678355 233.13375c15.08311 14.883706 15.08311 40.913575 0 55.802393l-509.594371 502.063043c-15.108674 14.853029-41.532238 14.853029-56.6358 0-15.08311-14.878593-15.08311-40.918688 0-55.802394l509.589259-502.063042c15.108674-14.858141 41.537351-14.858141 56.640912 0z"
        fill={getIconColor(color, 1, '#ffffff')}
      />
      <Path
        d="M236.58497 240.823579c14.658738-14.408205 40.294912-14.408205 54.953649 0l494.45502 486.836771c14.62806 14.433769 14.62806 39.681361 0 54.110018-14.658738 14.403092-40.294912 14.403092-54.958762 0L236.58497 294.933597c-14.633173-14.438882-14.633173-39.681361 0-54.110018z"
        fill={getIconColor(color, 2, '#ffffff')}
      />
    </Svg>
  );
};

Iconguanbi.defaultProps = {
  size: 18,
};

Iconguanbi = React.memo ? React.memo(Iconguanbi) : Iconguanbi;

export default Iconguanbi;
