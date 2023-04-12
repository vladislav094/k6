import http from 'k6/http';
import { check } from 'k6';

export default function(){
    let url = 'https://httpbin.test.k6.io/post';
    let response = http.post(url, 'Hello World!');

    check(response, {
        'Hello World included in response': (r) => r.body.includes('Hello Bonjour!')
    });
}