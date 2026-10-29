import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
    thresholds: {
        checks: ['rate==1'],
    },
};

export default function () {
    const response = http.get('http://localhost:3000/products');

    check(response, {
        'status is 200': (r) => r.status === 200,
    });

    sleep(1);
}