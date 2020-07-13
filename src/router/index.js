import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import NotFound from '@/views/404'

const originalPush = VueRouter.prototype.push
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

//https://www.cnblogs.com/xifengxiaoma/tag/element/ 4
Vue.use(VueRouter)

router.beforeEach((to,from,next)=>{
  /**
   * 登录界面登录成功之后，用户信息保存到会话,存在时间为会话声明周期,页面关闭即失效
   **/
  let user = sessionStorage.getItem('user');
  if(to.path == 'login'){
    //如果已经登录过,有用户信息，跳转到主页
    if(user){
      next({path:'/'})
    }else{
      next()
    }
  }else {
    //没有登录
    if(!user){
      next({path:'/login'})
    }else{
      next()
    }
  }
})

  const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    }

  ]

const router = new VueRouter({
  routes
})

export default router
