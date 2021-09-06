const expressJwt = require('express-jwt');

function authJwt() {
    const secret = "societe siv";

    return expressJwt({
        secret,
        algorithms: ['HS256'],
        isRevoked: isRevoked
    }).unless({
        path: [
            {url: /products(.*)/ , methods: ['GET', 'OPTIONS'] },
            {url: /categories(.*)/ , methods: ['GET', 'OPTIONS'] },
            `/users/login`,
            `/users/register`,
        ]
    })
}

async function isRevoked(req, payload, done) {
    if(!payload.isAdmin) {
        done(null, true)
    }

    done();
}



module.exports = authJwt