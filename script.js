import http from 'k6/http';
import { sleep, check } from 'k6';
import { Counter } from 'k6/metrics';

export const requests = new Counter('http_reqs');

export const options = {
    vus: 20,
    iterations: 22,
    // maxDuration: '10s',

    thresholds: {
        http_reqs: ['count < 100'],
    },
};

export default function () {
    const res = http.get('https://k6.io');
    // console.log(res.status)
    sleep(1);

    const checkRes = check(res, {
        'status is 200': (r) => r.status === 200,
        'response body': (r) => r.body.indexOf('Feel free to browser') !== -1,
    });
}

