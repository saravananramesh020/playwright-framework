import {test,expect} from '@playwright/test'
test.describe('api testing',()=>{

test('getapi',async({request})=>{
const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
const resbody=await response.json()
console.log(resbody)
expect(response.status()).toBe(200)
expect(resbody.id).toBe(1)
expect(resbody.userId).toBe(1)
})

test('API Post data testing',async({request})=>{
const newdata=await request.post('https://jsonplaceholder.typicode.com/posts',
    {
data:{
   title:'playwright API',
   body:'API',
   userId:1
}
})
const jsondata= await newdata.json()
console.log(jsondata)
console.log(newdata.status())
expect(newdata.status()).toBe(201)
expect(jsondata.userId).toBe(1)
expect(jsondata.title).toBe("playwright API")
expect(jsondata.body).toBe("API")
})
})