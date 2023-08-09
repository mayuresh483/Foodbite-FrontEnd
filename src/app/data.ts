import { Food } from "./shared/models/Food";

export const sample_foods:Food[] = [
    {
        id:'1',
        name:'cheese Pizza',
        price:'120',
        cookTime:'30-45',
        favorite:true,
        origins:['italy'],
        stars:3.0,
        imageUrl:'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1691580414~exp=1691581014~hmac=598a4a24861278c7cedfe1d99120497d6143ef04968e3fa1855c58a6d7231963',
        tags:['Fastfood','pizza']
    },
    {
        id:'2',
        name:'Chinese Pizza',
        price:'128',
        cookTime:'20-45',
        favorite:false,
        origins:['Indian','Itialian'],
        stars:3.0,
        imageUrl:'https://img.freepik.com/free-photo/top-view-pepperoni-pizza-sliced-into-six-slices_141793-2157.jpg?w=1380&t=st=1691580414~exp=1691581014~hmac=598a4a24861278c7cedfe1d99120497d6143ef04968e3fa1855c58a6d7231963',
        tags:['Fastfood','pizza']
    }
]