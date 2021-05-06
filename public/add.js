const addMovieBtn = document.getElementsByClassName('add-movie')[0];

const getTextAreaText = (className) => {
  return document.getElementsByClassName(`${className}-text`)[0].value
}


addMovieBtn.addEventListener('click', () => {
  const idText = getTextAreaText('id')
  const titleText = getTextAreaText('title')
  if (!idText || !titleText) {
    alert('请检查输入信息')
    return;
  }
  const yearText = getTextAreaText('year') || undefined
  const directorText = getTextAreaText('director') || undefined
  const countryText = getTextAreaText('country') || undefined


  axios({
    method: "post",
    url: `/movie`,
    data: {
      movie_id: idText,
      movie_title: titleText,
      title_year: yearText,
      director_name: directorText,
      country:countryText,
    },
  }).then(function (res) { //回调函数  接受服务器参数
    console.log(res);
    const data = res.data;
    if (data) {
      alert('保存成功')
    }
    // document.querySelector("h3").innerHTML = res.data;
  }).catch((error) => {
    console.log('error: ', error);
    alert('保存失败')
  })

})