import { Font } from '@react-pdf/renderer';

export function registerFonts() {
    Font.register({
        family: 'Roboto', fonts: [
            {
                fontStyle: 'normal',
                fontWeight: 'light',
                src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Light.ttf'
            },
            // {
            //     fontStyle: 'normal',
            //     fontWeight: 'regular',
            //     src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Regular.ttf'
            // },
            {
                fontStyle: 'normal',
                fontWeight: 'medium',
                src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Medium.ttf'
            },
            {
                fontStyle: 'normal',
                fontWeight: 'bold',
                src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Bold.ttf'
            },
            {
                fontStyle: 'italic',
                fontWeight: 'normal',
                src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-Italic.ttf'
            },
            // {
            //     fontStyle: 'italic',
            //     fontWeight: 'light',
            //     src: 'https://github.com/googlefonts/roboto/raw/main/src/hinted/Roboto-LightItalic.ttf'
            // }
        ]
    });

    Font.register({
        family: 'Open Sans', fonts: [
            {
                fontStyle: 'normal',
                fontWeight: 'normal',
                src: 'https://github.com/googlefonts/opensans/raw/main/fonts/ttf/OpenSans-Regular.ttf'
            },
            // {
            //     fontStyle: 'normal',
            //     fontWeight: 'semibold',
            //     src: 'https://github.com/googlefonts/opensans/raw/main/fonts/ttf/OpenSans-SemiBold.ttf'
            // },
            // {
            //     fontStyle: 'bold',
            //     src: 'https://github.com/googlefonts/opensans/raw/main/fonts/ttf/OpenSans-Bold.ttf'
            // },
            {
                fontStyle: 'italic',
                fontWeight: 'light',
                src: 'https://github.com/googlefonts/opensans/raw/main/fonts/ttf/OpenSans-LightItalic.ttf'
            }
        ]
    });
}