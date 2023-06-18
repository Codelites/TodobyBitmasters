const config = {
    server: {
        port: 4000,
    },
    db: {
        type: 'mongodb', // 'postgres
        uri: "mongodb://127.0.0.1:27017/todos?w=majority"
    }
}

export default config;