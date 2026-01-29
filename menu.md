下記内容を各メニューの画像に配置して

・HTML
<details class="menu-acc">
  <summary class="menu-acc__summary">
    <img src="/assets/menu-1.jpg" alt="パスタ">
  </summary>
  <div class="menu-acc__panel">
    <div class="menu-acc__name">本日のパスタ</div>
    <div class="menu-acc__price">¥1,200</div>
  </div>
</details>

・Css
.menu-acc__panel{
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  transition: max-height 600ms ease, opacity 600ms ease;
}
.menu-acc[open] .menu-acc__panel{
  max-height: 140px; /* 中身に合わせて調整 */
  opacity: 1;
}
.menu-acc__summary{ list-style: none; cursor: pointer; }
.menu-acc__summary::-webkit-details-marker{ display:none; }
