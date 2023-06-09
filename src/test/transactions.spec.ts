import request from 'supertest';
import { test, beforeAll, afterAll } from 'vitest';

import { app } from '../app';

beforeAll(async () => {
    await app.ready();
})

afterAll(async () => {
    await app.close();
});

test('O usuário consegue criar uma nova transação', async () => {
    await request(app.server)
        .post('/transactions')
        .send({
            title: 'New transaction',
            value: 5000,
            type: 'credit',
        })
        .expect(201);
});

test('O usuário consegue visualizar uma transação', async () => {

})
