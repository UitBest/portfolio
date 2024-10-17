import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md3 } from 'vuetify/blueprints';
import 'vuetify/styles';

const dark = {
    dark: true,
    colors: {
        primary: '#62F7FE',
        secondary: '#090088',
        background: '#10124B',
        dark: '#03002e',
        'text-lighter': 'rgba(2,64,111,0.73)',
    },
    /*
    Logo:
        #710193
        #031F4F
        #01406D
        #04B4DD
        #08BAE0
        #62F7FE
     */
};

export default createVuetify({
    blueprint: md3,
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            dark,
        },
    },
    defaults: {
        VSheet: {
            color: 'transparent',
        },
        VLazy: {
            transition: 'fade-transition',
        },
        VDivider: {
            class: 'mb-1',
        },
    },
});
