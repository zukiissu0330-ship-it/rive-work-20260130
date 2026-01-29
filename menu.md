下記内容を各メニューの画像に配置して

・HTML
<div id="gallery" class="gallery">
  <a href="#img1"><img src="thumb1.jpg" alt="写真1"></a>
</div>

<div id="img1" class="lightbox" aria-label="拡大画像">
  <a class="close" href="#gallery" aria-label="閉じる">×</a>
  <img src="large1.jpg" alt="写真1（拡大）">
</div>


・Css
.lightbox{
  position: fixed; inset: 0;
  display: none;
  background: rgba(0,0,0,.75);
  place-items: center;
  padding: 24px;
  z-index: 9999;
}
.lightbox:target{ display: grid; }
.lightbox img{ max-width: min(96vw, 1100px); max-height: 88vh; }
.close{
  position: fixed; top: 16px; right: 16px;
  font-size: 32px; line-height: 1;
  text-decoration: none; color: #fff;
}
