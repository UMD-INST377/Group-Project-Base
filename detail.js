var url = '';
var access_token = GetQueryString('access_token')
console.log(data)
function GetQueryString (name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
console.log(GetQueryString('url'));
if (GetQueryString('url') == null) {
  showlist(data)
} else {
  url = GetQueryString('url');
  showdetail(url)
}
function showdetail (href) {
  fetch(href, {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token }
  }).then(response => response.json())//解析为可读数据
    .then(data => {
      showlist(data)
    })//执行结果是 resolve就调用then方法
    .catch(err => console.log("Oh, error", err))//执行结果是 reject就调用catch方法
}
/* 显示列表 */
function showlist (data) {
  console.log(data)
  document.querySelector('.tit').innerHTML = `${data.name} <small>${data.release_date}</small>`
  document.querySelector('.png').setAttribute('src', data.images[0].url)
  var mediahtml = '';
  console.log(data.tracks.items)
  data.tracks.items.forEach(ele => {
    mediahtml += `
            <div class="media">
              <div class="media-body">
                <h3><a href="${ele.preview_url}" target=_blank>
                  name:${ele.name}
                </a></h3>
                <h4 class="media-heading">type:${ele.type}</h4>
                <p><a href="${ele.artists[0].external_urls.spotify}" target="_blank">artists:${ele.artists[0].name}</a></p>
              </div>
            </div>
        `
  }); "https://p.scdn.co/mp3-preview/2886b49cc532acef618df2339759625e3696d749?cid=e401920d65c744c0b6b85dd07d110aa3"
  document.querySelector('.mediabox').innerHTML = mediahtml;
}