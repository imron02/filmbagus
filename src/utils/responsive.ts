import { Dimensions, PixelRatio } from 'react-native';
const { width: wWidth, height: wHeight } = Dimensions.get('window');

const SCREEN_WIDTH = wWidth;
const SCREEN_HEIGHT = wHeight;

class ResponsiveScreen {
  static wscale = SCREEN_WIDTH / 414;
  static hscale = SCREEN_HEIGHT / 852;

  static normalize = (size: number, based?: string) => {
    const newSize =
      based === 'height'
        ? size * ResponsiveScreen.hscale
        : size * ResponsiveScreen.wscale;

    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  };
}

export default ResponsiveScreen;
