const selectMovieEle = document.getElementsByClassName("select-movie")[0]
const selectTypeEle = document.getElementsByClassName("select-type")[0].getElementsByTagName('select')[0];
const updateBtn = document.getElementsByClassName("update-btn")[0];
const delBtn = document.getElementsByClassName("del-btn")[0];
const changeText = document.getElementsByClassName("change-text")[0];

axios.get(`/movie`).then((res) => {
  const data = res.data;
  let html = ``
  data.map((ele) => {
    html+= `
      <option value=${ele.movie_id}>${ele.movie_title}</option>
    `
  })
  selectMovieEle.innerHTML = `
    <select>
      ${html}
    </select>
  `
}).catch((err) => {
  console.log('err: ', err);
})

updateBtn.addEventListener('click', () => {
  const selectMovieSelEle = selectMovieEle.getElementsByTagName('select')[0]
  const typeIndex = selectTypeEle.selectedIndex; // selectedIndex代表的是你所选中项的index
  const movieIndex = selectMovieSelEle.selectedIndex; // selectedIndex代表的是你所选中项的index
  const changeType = selectTypeEle.options[typeIndex].value;
  const movieId = selectMovieSelEle.options[movieIndex].value;
  const movieTitle = selectMovieSelEle.options[movieIndex].text;
  if (!movieTitle || !changeText.value || !movieId) {
    alert('请检查输入信息')
    return;
  }
  axios({
    method: "put",
    url: `/movie`,
    data: {
      movie_id: movieId,
      movie_title: movieTitle,
      [changeType]: changeText.value,
    },
  }).then(function (res) { //回调函数  接受服务器参数
    console.log(res);
    const data = res.data;
    data && alert('更新成功')
    // document.querySelector("h3").innerHTML = res.data;
  }).catch((error) => {
    console.log('error: ', error);
    alert('保存失败')
  })
})


delBtn.addEventListener('click', () => {
  const selectMovieSelEle = selectMovieEle.getElementsByTagName('select')[0]

  const movieIndex = selectMovieSelEle.selectedIndex; // selectedIndex代表的是你所选中项的index
  const movieId = selectMovieSelEle.options[movieIndex].value;
  if (!movieId) {
    alert('请检查输入信息')
    return;
  }
  axios({
    method: "delete",
    url: `/movie/${movieId}`,
  }).then(function (res) { //回调函数  接受服务器参数
    console.log(res);
    const data = res.data;
    data && alert('删除成功')
    // document.querySelector("h3").innerHTML = res.data;
  }).catch((error) => {
    console.log('error: ', error);
    alert('删除失败')
  })})
