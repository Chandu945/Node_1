const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.end('<h1>Welcome to the Homepage</h1>');
    } else if (req.url === '/contact') {
        res.end('<h1>Contact Us at contact@example.com</h1>');
    } else if (req.url === '/services') {
        res.end('<h1>Our Services include Web Development and Consulting</h1>');
    } else if (req.url === '/products') {
        res.end('<h1>Check out our Products: Laptops, Phones, and Accessories</h1>');
    } else if (req.url === '/blog') {
        res.end('<h1>Read our latest Blog posts here!</h1>');
    } else {
        res.end('<h1>404 Page Not Found</h1>');
    }
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
