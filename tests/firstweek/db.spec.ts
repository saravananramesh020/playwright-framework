import { test, expect } from '@playwright/test'
import { Client } from 'pg'

test('Database connection', async ({}) => {

    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'Saran@6383',
        database: 'automation_testing'
    })
    await client.connect()
    await client.query("update users set name = 'jenifier' where id = 2")
    await client.query("delete from users where id ='3'")
    const result = await client.query('select * from users')
    console.log(result.rows)
    expect(result.rows.length).toBeGreaterThan(0)
    await client.end()
})
