import { expect, test } from '@playwright/test';

test('API GET Request ', async({request}) => {

    const response = await request.get('https://reqres.in/api/users/2');

    expect(response.status()).toBe(200);
    
    const text = await response.text();
    expect(text).toContain('Janet');

    console.log(await response.json());
})

test('API POST Request', async({request}) => {
    const response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    })

    expect(response.status()).toBe(201);

    expect(await response.text()).toContain('morpheus');
    console.log(await response.json());

})

test('API PUT Request', async({request}) => {
    const response = await request.put("https://reqres.in/api/users/2", {
        data: {
            "name": "morpheus",
            "job": "zion resident"
        }
    })

    expect(response.status()).toBe(200);
    expect(await response.text()).toContain('zion resident');
    console.log(await response.json());
})

test('API DELETE Request', async({request}) => {
    const response = await request.delete("https://reqres.in/api/users/2");
    expect(response.status()).toBe(204);
})
