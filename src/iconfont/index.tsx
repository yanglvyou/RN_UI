/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import Iconzujian from './Iconzujian';
import Iconshezhi from './Iconshezhi';
import Iconsaoma from './Iconsaoma';
import Iconxiangxia1 from './Iconxiangxia1';
import Iconguanbi from './Iconguanbi';
import IconyinpinbofangqiXiazaiwanchengIcon from './IconyinpinbofangqiXiazaiwanchengIcon';
import IconiconTest1 from './IconiconTest1';
import Iconhuojian1 from './Iconhuojian1';
import Iconhuojian2 from './Iconhuojian2';
import IconrocketEasyiCopy from './IconrocketEasyiCopy';
import Iconhuojian from './Iconhuojian';
import Iconzuo from './Iconzuo';
import Icontuichu from './Icontuichu';
import Icontuichudenglu from './Icontuichudenglu';
import Iconmenu from './Iconmenu';
import Iconmenu1 from './Iconmenu1';
import Iconmenu2 from './Iconmenu2';
import Iconmenu3 from './Iconmenu3';
import Iconmimabukejian from './Iconmimabukejian';
import Iconmimakejian from './Iconmimakejian';
import Iconzhengque from './Iconzhengque';
import Iconxingmingyonghumingnicheng from './Iconxingmingyonghumingnicheng';
import Iconmima from './Iconmima';
import Iconhuanyingni from './Iconhuanyingni';
import Iconzongyi from './Iconzongyi';
import Icondongman from './Icondongman';
import Iconhuiyuan from './Iconhuiyuan';
import Icontinggeshiqu from './Icontinggeshiqu';
import Iconhuiyuan1 from './Iconhuiyuan1';
import Iconhuiyuan2 from './Iconhuiyuan2';
import Iconhuiyuan3 from './Iconhuiyuan3';
import Iconerjiyinletingge from './Iconerjiyinletingge';
import Iconhuiyuan7 from './Iconhuiyuan7';
import Iconhuiyuan4 from './Iconhuiyuan4';
import Iconbofang1 from './Iconbofang1';
import Iconshanchu from './Iconshanchu';
import Iconshangyishou from './Iconshangyishou';
import Iconxiayishou from './Iconxiayishou';
import Iconzantingtingzhi from './Iconzantingtingzhi';
import Iconbofang from './Iconbofang';
import IconarrowDown from './IconarrowDown';
import Iconshijian from './Iconshijian';
import Iconjia from './Iconjia';
import Iconjian from './Iconjian';
import Iconmeiyoushuju from './Iconmeiyoushuju';
import Iconshengyin from './Iconshengyin';
import IconiconTest from './IconiconTest';
import Iconshengyin1 from './Iconshengyin1';
import Iconxihuan from './Iconxihuan';
import Iconxihuantianchong from './Iconxihuantianchong';
import Iconziyuan from './Iconziyuan';
import Icongengduo from './Icongengduo';
import Iconfaxian from './Iconfaxian';
import Iconiconfontxingxing from './Iconiconfontxingxing';
import Iconzhanghao from './Iconzhanghao';
import Iconren from './Iconren';
import Iconshoucang from './Iconshoucang';
import Iconyemian from './Iconyemian';
import Iconyemian1 from './Iconyemian1';
import Iconindex from './Iconindex';
import Iconindex1 from './Iconindex1';

export type IconNames =
  | 'zujian'
  | 'shezhi'
  | 'saoma'
  | 'xiangxia1'
  | 'guanbi'
  | 'yinpinbofangqi_xiazaiwancheng_icon-'
  | 'icon-test1'
  | 'huojian1'
  | 'huojian2'
  | 'rocket__easyi-copy'
  | 'huojian'
  | 'zuo'
  | 'tuichu'
  | 'tuichudenglu'
  | 'menu'
  | 'menu1'
  | 'menu2'
  | 'menu3'
  | 'mimabukejian'
  | 'mimakejian'
  | 'zhengque'
  | 'xingmingyonghumingnicheng'
  | 'mima'
  | 'huanyingni'
  | 'zongyi'
  | 'dongman'
  | 'huiyuan'
  | 'tinggeshiqu'
  | 'huiyuan1'
  | 'huiyuan2'
  | 'huiyuan3'
  | 'erjiyinletingge'
  | 'huiyuan7'
  | 'huiyuan4'
  | 'bofang1'
  | 'shanchu'
  | 'shangyishou'
  | 'xiayishou'
  | 'zantingtingzhi'
  | 'bofang'
  | 'arrow-down'
  | 'shijian'
  | 'jia'
  | 'jian'
  | 'meiyoushuju'
  | 'shengyin'
  | 'icon-test'
  | 'shengyin1'
  | 'xihuan-'
  | 'xihuantianchong'
  | 'ziyuan'
  | 'gengduo'
  | 'faxian'
  | 'iconfontxingxing'
  | 'zhanghao'
  | 'ren'
  | 'shoucang'
  | 'yemian'
  | 'yemian1'
  | 'index'
  | 'index1';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'zujian':
      return <Iconzujian key="1" {...rest} />;
    case 'shezhi':
      return <Iconshezhi key="2" {...rest} />;
    case 'saoma':
      return <Iconsaoma key="3" {...rest} />;
    case 'xiangxia1':
      return <Iconxiangxia1 key="4" {...rest} />;
    case 'guanbi':
      return <Iconguanbi key="5" {...rest} />;
    case 'yinpinbofangqi_xiazaiwancheng_icon-':
      return <IconyinpinbofangqiXiazaiwanchengIcon key="6" {...rest} />;
    case 'icon-test1':
      return <IconiconTest1 key="7" {...rest} />;
    case 'huojian1':
      return <Iconhuojian1 key="8" {...rest} />;
    case 'huojian2':
      return <Iconhuojian2 key="9" {...rest} />;
    case 'rocket__easyi-copy':
      return <IconrocketEasyiCopy key="10" {...rest} />;
    case 'huojian':
      return <Iconhuojian key="11" {...rest} />;
    case 'zuo':
      return <Iconzuo key="12" {...rest} />;
    case 'tuichu':
      return <Icontuichu key="13" {...rest} />;
    case 'tuichudenglu':
      return <Icontuichudenglu key="14" {...rest} />;
    case 'menu':
      return <Iconmenu key="15" {...rest} />;
    case 'menu1':
      return <Iconmenu1 key="16" {...rest} />;
    case 'menu2':
      return <Iconmenu2 key="17" {...rest} />;
    case 'menu3':
      return <Iconmenu3 key="18" {...rest} />;
    case 'mimabukejian':
      return <Iconmimabukejian key="19" {...rest} />;
    case 'mimakejian':
      return <Iconmimakejian key="20" {...rest} />;
    case 'zhengque':
      return <Iconzhengque key="21" {...rest} />;
    case 'xingmingyonghumingnicheng':
      return <Iconxingmingyonghumingnicheng key="22" {...rest} />;
    case 'mima':
      return <Iconmima key="23" {...rest} />;
    case 'huanyingni':
      return <Iconhuanyingni key="24" {...rest} />;
    case 'zongyi':
      return <Iconzongyi key="25" {...rest} />;
    case 'dongman':
      return <Icondongman key="26" {...rest} />;
    case 'huiyuan':
      return <Iconhuiyuan key="27" {...rest} />;
    case 'tinggeshiqu':
      return <Icontinggeshiqu key="28" {...rest} />;
    case 'huiyuan1':
      return <Iconhuiyuan1 key="29" {...rest} />;
    case 'huiyuan2':
      return <Iconhuiyuan2 key="30" {...rest} />;
    case 'huiyuan3':
      return <Iconhuiyuan3 key="31" {...rest} />;
    case 'erjiyinletingge':
      return <Iconerjiyinletingge key="32" {...rest} />;
    case 'huiyuan7':
      return <Iconhuiyuan7 key="33" {...rest} />;
    case 'huiyuan4':
      return <Iconhuiyuan4 key="34" {...rest} />;
    case 'bofang1':
      return <Iconbofang1 key="35" {...rest} />;
    case 'shanchu':
      return <Iconshanchu key="36" {...rest} />;
    case 'shangyishou':
      return <Iconshangyishou key="37" {...rest} />;
    case 'xiayishou':
      return <Iconxiayishou key="38" {...rest} />;
    case 'zantingtingzhi':
      return <Iconzantingtingzhi key="39" {...rest} />;
    case 'bofang':
      return <Iconbofang key="40" {...rest} />;
    case 'arrow-down':
      return <IconarrowDown key="41" {...rest} />;
    case 'shijian':
      return <Iconshijian key="42" {...rest} />;
    case 'jia':
      return <Iconjia key="43" {...rest} />;
    case 'jian':
      return <Iconjian key="44" {...rest} />;
    case 'meiyoushuju':
      return <Iconmeiyoushuju key="45" {...rest} />;
    case 'shengyin':
      return <Iconshengyin key="46" {...rest} />;
    case 'icon-test':
      return <IconiconTest key="47" {...rest} />;
    case 'shengyin1':
      return <Iconshengyin1 key="48" {...rest} />;
    case 'xihuan-':
      return <Iconxihuan key="49" {...rest} />;
    case 'xihuantianchong':
      return <Iconxihuantianchong key="50" {...rest} />;
    case 'ziyuan':
      return <Iconziyuan key="51" {...rest} />;
    case 'gengduo':
      return <Icongengduo key="52" {...rest} />;
    case 'faxian':
      return <Iconfaxian key="53" {...rest} />;
    case 'iconfontxingxing':
      return <Iconiconfontxingxing key="54" {...rest} />;
    case 'zhanghao':
      return <Iconzhanghao key="55" {...rest} />;
    case 'ren':
      return <Iconren key="56" {...rest} />;
    case 'shoucang':
      return <Iconshoucang key="57" {...rest} />;
    case 'yemian':
      return <Iconyemian key="58" {...rest} />;
    case 'yemian1':
      return <Iconyemian1 key="59" {...rest} />;
    case 'index':
      return <Iconindex key="60" {...rest} />;
    case 'index1':
      return <Iconindex1 key="61" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
