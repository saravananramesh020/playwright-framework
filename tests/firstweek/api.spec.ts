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

test('PUT api testing',async({request})=>{

const putdata=await request.put('https://jsonplaceholder.typicode.com/posts/1',{

data :{
    id:1,
    userId:100,
    title:"Put api testing",
    body:'API'
}
}
)
const jsondata= await putdata.json()
console.log(putdata.status())
expect(putdata.status()).toBe(200)
expect(jsondata.userId).toBe(100)
expect(jsondata.id).toBe(1)
expect(jsondata.body).toBe('API')
expect(jsondata.title).toBe('Put api testing')

const patchupdate= await request.patch('https://jsonplaceholder.typicode.com/posts/1',{

data :{
    id:1,
    title:'patch API'
}}
)
const updatedata= await patchupdate.json()
console.log(updatedata.id)
console.log(updatedata.title)
expect(updatedata.id).toBe(1)
expect(jsondata.body).toBe('API')
expect(updatedata.title).toBe('patch API')

})




})