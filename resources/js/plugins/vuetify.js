import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import { VNavigationDrawer } from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';

const light = {
    dark: false,
    colors: {
        primary: '#62F7FE',
        secondary: '#090088',
        background: '#10124B',
        dark: '#03002e',
        'text-lighter': 'rgba(2,64,111,0.73)',
    },
    /*
    Logo:
        #031F4F
        #01406D
        #04B4DD
        #08BAE0
        #62F7FE
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
