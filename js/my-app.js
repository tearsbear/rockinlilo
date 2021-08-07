var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'Rockinlilo',
    // App id
    id: 'com.rockinlilo.web',
    pane: {
        swipe: true,
    },
    theme: 'md',
    // ... other parameters
});

// Init View Main
const mainView = app.views.create('.view-main');