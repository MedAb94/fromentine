import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            light: {
                primary: "#003c71",
                blueDark: "#003c71",
                blue: "#0088ff",
                secondary: "#ccc",
                dark: "#2c2c2c",
                light: "#f0efef",
                orange: "#ff7c24",
            },
            dark: {
                accent: "#424242",
                secondary: "#ff8f00",
                info: "#26a69a",
                warning: "#ffc107",
                error: "#dd2c00",
                success: "#00e676"
            },
        },
    },

});

