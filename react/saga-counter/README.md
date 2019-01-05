# redux-saga

中间? UI <-> Redux
中间件 middleware 生态npm

UI dispatch INCREMENT_ASYNC
何时
中间处理一下，发布者 redux-thunk redux-saga 请求， setTimeout dispatch INCREMENT
redux

异步请求使用saga中间件来请求， redux不请求，通过中间件saga返回一个redux需要的同步请求

saga 是redux 状态异步处理的中间件，
原生的react 通过声明周期或者业务逻辑， 来异步请求数据， 耦合了redux 数据管理业务在UI之中，是不可取的，异步是绝对不能改变的， (axioxs, 定时器) promise + generator* yield / async await
放到saga文件中
watch每一个actionTypes， take给一个异步函数去执行， 位于中间件中， 仍然属于redux createStore(reducers, applyMiddleware(sagaMiddleware))
sageMiddleware.run(rootSaga)
takeEvery(ActionType, gen);

redux状态仍然是同步处理的
put 在saga内部dispatch同步action
异步流程很多， 所以把他合为一处 all