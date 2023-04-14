import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    thresholds: {
        http_req_failed: ['rate<0.01'],
        http_req_duration: ['p(90) < 400', 'p(95) < 800', 'p(99.9) < 2000'],
    },
};

export default function () {
    http.get('https://test-api.k6.io/public/crocodiles/1/');
    sleep(1);
}

