let settings = {};

if(process.env.NODE_ENV === 'production'){
    settings = {
        backend_url: 'https://backend.liskhunt.com'
    };
} else {
    settings = {
        backend_url: 'http://localhost:3001'
    };
}
export default settings