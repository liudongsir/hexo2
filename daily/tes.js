var httpRequest = new XMLHttpRequest();//第一步：建立所需的对象
httpRequest.open('GET', 'https://v2.alapi.cn/api/zaobao?token=eFiWkgTzAipWiPru&format=json', true);
httpRequest.send();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState == 4 && httpRequest.status == 200) {
        var json = httpRequest.responseText;
        let aa = JSON.parse(json);
        let data = aa.data;
        let image = data.head_image;

        let $div = document.getElementById("blodaily");
        let $img = document.createElement('img');
        $img.src = image;
        $div.insertBefore($img, $div.firstChild)

        let $ul = document.createElement('blonews');
        let news = data.news;
        if (news && news.length > 0) {
            news.forEach((item) => {
                let $new = document.createElement('li');
                $new.text = item;
                $ul.appendChild($new);
            })
        }


    }
};
//
// let $div = $('#blodaily');
// let $img = $('<img src="' + image + '">')
// $div.prepend($img)
// let $ul = $('#blonews')
// let news = data.news;
// if (news && news.length > 0) {
//     news.forEach((item) => {
//         let $new = $('<li>' + item + '</li>')
//         $ul.append($new);
//     })
// }
