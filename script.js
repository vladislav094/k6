import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    stages: [
        { duration: '5s', target: 1 },
        { duration: '10s', target: 3 },
        { duration: '5s', target: 1 },
    ],

    thresholds: {
        http_req_duration: ['p(99) < 1000'],
    },
};

export default function () {
    const res = http.get('https://k6.io');
    console.log(res.status)

    sleep(5);
}

