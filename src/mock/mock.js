import Mock from 'mockjs'

Mock.mock('http://localhost:3333/login',{
    data:{
        'token':'46531654643',
        'ctime':'213131311132'
    }
});

Mock.mock('http://localhost:3333/user',{
    'name': '@name', //随机生成一个name
    'email': '@email', //随机生成一个email
    'age|1-10': 5, //年龄
});

Mock.mock('http://localhost:3333/menu',{
    'id': '@increment', //随机生成一个name
    'menu': 'menu', //随机生成一个email
    'order|10-20': 12, //排序码
});