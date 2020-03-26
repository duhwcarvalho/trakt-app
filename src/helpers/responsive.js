import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const deviceWidth = 414, deviceHeight = 736;

const scale = size => PixelRatio.roundToNearestPixel(width / deviceWidth * size);

const responsiveCircle = (size, factor = 0.5) => PixelRatio.roundToNearestPixel(size + ( scale(size) - size ) * factor);

const responsiveWidth = (value) => {
    const percent = (value * 100)/deviceWidth;
    const _width = (width * percent)/100;
    return _width;
}

const responsiveHeight = (value) => {
    const percent = (value * 100)/deviceHeight;
    const _height = (height * percent)/100;
    return _height;
}

export {
    responsiveCircle,
    responsiveWidth,
    responsiveHeight
}