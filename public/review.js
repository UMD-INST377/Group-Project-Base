const selectEle = document.getElementsByClassName('select')[0];
const scoreText = document.getElementsByClassName('score-text')[0];
const submitBtn = document.getElementsByClassName('submit-review')[0];

axios.get(`/movie`,{
  headers: {"Access-Control-Allow-Origin": "*"},
  crossdomain: true,
  crossorigin:true 
}).then((res) => {
  const data = res.data;
  let html = ``
  data.map((ele) => {
    html+= `
      <option value=${ele.movie_id}>${ele.movie_title}</option>
    `
  })
  selectEle.innerHTML = `
    <select>
      ${html}
    </select>
  `
}).catch((err) => {
  console.log('err: ', err);
})

submitBtn.addEventListener('click', () => {
  const selectSelEle = selectEle.getElementsByTagName('select')[0]
  const index = selectSelEle.selectedIndex; // selectedIndex代表的是你所选中项的index
  console.log('我输入了', changeText.value);
  console.log('我选中了', selectSelEle.options[index].value, selectSelEle.options[index].text);
  if (!scoreText.value || !selectSelEle.options[index].value) {
    alert('请检查输入信息')
    return;
  }
  axios({
    method: "put",
    url: `/movie_imdb_ratings`,
    data: {
      movie_id: selectSelEle.options[index].value,
      imdb_score: scoreText.value,
    },
  }).then(function (res) { //回调函数  接受服务器参数
    console.log(res);
    const data = res.data;
    data && alert('更新成功')
  }).catch((error) => {
    console.log('error: ', error);
    alert('更新失败')
  })
})