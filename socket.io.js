const io = new Server(server, {
    cors: {
        origin: '*', // या अपने क्लाइंट यूआरएल को निर्दिष्ट करें
        methods: ['GET', 'POST'],
    },
});
