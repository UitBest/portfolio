import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { VNavigationDrawer } from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

const light = {
    dark: false,
    colors: {
        primary: '#62f4ff',
        secondary: '#02406f',
        background: '#04244d',
        'text-lighter': 'rgba(2,64,111,0.73)',
    },
    /*  Van logo:
    *   Icon color: #62f4ff
    *   Text color: #ffffff
    *   Bg color: #02406f
    *   Text bg color: #04244d
    */
};

const dark = {
    dark: true,
    // colors: {
    //     primary: '',
    //     secondary: '',
    // },
};

export default createVuetify({
    blueprint: md3,
    components,
    directives,
    theme: {
        defaultTheme: 'light',
        themes: {
            light,
            dark,
        },
    },
    defaults: {
        VSheet: {
            color: 'transparent',
        },
    },
    VNavigationDrawer,
});
