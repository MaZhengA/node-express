const express = require('express');
// 结果history模式刷新页面清空问题
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(express.static('public'));

app.get('/person', (req, res) => {
  res.send({
    name: 'tom',
    age: 18
  })
})

app.listen(5005, (err) => {
  if(!err) console.log('服务器起来了')
})