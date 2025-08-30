import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API for empty users', () => {
    test('GET/ - should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });
})
test.describe('User management API for existing users', () => {


    test('GET/ - should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });


    test('GET/ - should return a user by ID', async ({ request }) => {
        const response = await request.get(`${baseURL}`+ '/55');
        expect(response.status()).toBe(200);
        const responseBody = await response.json()
        expect(responseBody.id).toBe(55);
    });


    test('GET/ - should return 404 if user not found', async ({ request }) => {
        const response = await request.get(`${baseURL}`+ '/8');
        expect(response.status()).toBe(404);
    });


    test('POST/ - should add a new user', async ({ request }) => {
        const response = await request.post(`${baseURL}`);
        expect(response.status()).toBe(201);
        const responseBody = await response.json()
        expect(responseBody.id).toBeDefined();
    });


    test('DELETE/ - should delete a user by ID', async ({ request }) => {
        const responseUserCreation = await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId  = responseBodyUserCreation.id


        const response = await request.delete(`${baseURL}`+ '/'+userId);
        expect(response.status()).toBe(200);
    });


    test('DELETE/:id - should return 404 if user not found', async ({ request }) => {
        const responseUserCreation = await request.post(`${baseURL}`);
        expect(responseUserCreation.status()).toBe(201);
        const responseBodyUserCreation = await responseUserCreation.json()
        expect(responseBodyUserCreation.id).toBeDefined();
        const userId  = responseBodyUserCreation.id


        const responseDeletionOne = await request.delete(`${baseURL}`+ '/'+userId);
        expect(responseDeletionOne.status()).toBe(200);


        const responseDeletionTwo = await request.delete(`${baseURL}`+ '/'+userId);
        expect(responseDeletionTwo.status()).toBe(404);
    });
});
