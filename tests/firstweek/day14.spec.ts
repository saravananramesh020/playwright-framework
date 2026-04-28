import { test, expect } from '@playwright/test'
import { Client } from 'pg'

test('database connection', async ({ page, request }) => {
    const apiResponse = await request.get('https://reqres.in/api/users?page=2');
    const apiData = await apiResponse.json();
    console.log(apiData);

    const client = new Client(
        {
            user: 'postgres',
            host: 'localhost',
            database: 'automation_testing',
            password: 'Saran@6383',
            port: 5432
        }
    )
    await client.connect()
    const result = await client.query(`select * from orders `)
    const users = await client.query('select * from users')
    console.log(JSON.stringify(result.rows, null, 2))
    console.log(JSON.stringify(users.rows, null, 2))
    expect(result.rows.length).toBeGreaterThan(0)
    expect(result.rows[0].product).toBe('laptop')
    expect(result.rows[0].amount).toBe(12000)
    await client.end()

 //   await page.goto('your-ui-url');

  expect(apiResponse.status()).toBe(401);
})