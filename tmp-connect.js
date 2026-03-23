const fs = require('fs');
const path = require('path');

const envPath = path.join(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
    fs.readFileSync(envPath, 'utf8')
        .split(/\r?\n/)
        .forEach((line) => {
            const m = line.match(/^\s*([^#=\s]+)=(.*)$/);
            if (m) process.env[m[1]] = m[2].trim();
        });
}

const clientPromise = require('./lib/mongodb').default;

clientPromise
    .then((c) => {
        console.log('connected');
        return c.close();
    })
    .catch((e) => {
        console.error('connect error', e);
        process.exit(1);
    });
