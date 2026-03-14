<!doctype html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Re:Cast</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div class="recast-app">
      <header class="header">
        <h1 class="header__logo">Re:Cast</h1>
        <button class="header__search-btn">🔍</button>
      </header>

      <main class="content">
        <section class="home">

          <!-- 오늘의 공연 배너 -->
          <h2 class="section-title">오늘의 공연</h2>
          
          <div class="banner-slider">

            <div class="banner-card">
              <img src="images/이미지1.jpeg">
              <div class="banner-info">
                <span class="banner-tag">인기</span>
                <h3>레미제라블</h3>
              </div>
            </div>

            <div class="banner-card">
              <img src="images/이미지2.jpeg">
              <div class="banner-info">
                <span class="banner-tag">추천</span>
                <h3>킹카부츠</h3>
              </div>
            </div>

            <div class="banner-card">
              <img src="images/이미지3.jpeg">
              <div class="banner-info">
                <span class="banner-tag">NEW</span>
                <h3>베르테르</h3>
              </div>
            </div>

            <div class="banner-card">
              <img src="images/이미지4.jpeg">
              <div class="banner-info">
                <span class="banner-tag">HOT</span>
                <h3>영웅</h3>
              </div>
            </div>

          </div>

          <!-- 찜한 배우 -->
          <h2 class="section-title">찜한 배우</h2>
          <div class="favorite-actors">
            <div class="actor">
              <img src="images/이미지6.jpg">
              <p>양요섭</p>
            </div>
            <div class="actor">
              <img src="images/이미지7.jpeg">
              <p>최수진</p>
            </div>
            <div class="actor">
              <img src="images/이미지9.jpeg">
              <p>이한율</p>
            </div>
            <div class="actor">
              <img src="images/이미지10.jpeg">
              <p>홍나현</p>
            </div>
          </div>

          <!-- 오늘의 도슨트 -->
          <h2 class="section-title">오늘의 도슨트</h2>
          <div class="docent-card">
            <h3>뮤지컬 &lt;레미제라블&gt; 해설</h3>
            <p>
              혁명은 거창한 구호에서 시작되지 않습니다.<br>
              한 사람의 선택과 양심에서 시작됩니다.<br>
              오늘 공연에서는 장발장의 인간적인 갈등과<br>
              자베르의 신념 충돌에 집중해 보세요.
            </p>
          </div>
          <div class="docent-card">
            <h3>오늘의 관람 포인트</h3>
            <ul>
              <li>장발장의 독백 넘버 "Who Am I?"</li>
              <li>바리케이드 장면 속 청년들의 이상</li>
              <li>자베르의 신념이 흔들리는 순간</li>
            </ul>
          </div>

          <!-- 뮤지컬 슬라이드 -->
          <h2 class="section-title">뮤지컬 둘러보기</h2>
          <div class="musical-slider">
            <div class="musical-card">
              <img src="images/이미지1.jpeg">
              <p>레미제라블</p>
            </div>
            <div class="musical-card">
              <img src="images/이미지2.jpeg">
              <p>킹카부츠</p>
            </div>
            <div class="musical-card">
              <img src="images/이미지3.jpeg">
              <p>베르테르</p>
            </div>
            <div class="musical-card">
              <img src="images/이미지4.jpeg">
              <p>영웅</p>
            </div>
          </div>

          <!-- 인기 캐스팅 해석 -->
          <h2 class="section-title">인기 캐스팅 해석</h2>
          <div class="casting-card">
            <h3>양요섭 캐스팅</h3>
            <p class="tag-text">#애절함 #첫사랑</p>
            <p>
              양요섭의 베르테르는 감정을 크게 드러내기보다<br>
              마음속에서 천천히 무너지는 인물을 보여준다.<br>
              첫사랑의 기억처럼 조용히 스며드는 감정이 특징이다.
            </p>
          </div>
          <div class="casting-card">
            <h3>김호영 캐스팅</h3>
            <p class="tag-text">#에너지 #유쾌한남자</p>
            <p>
              김호영의 롤라는 화려한 카리스마와 유쾌함을 동시에 지닌다.<br>
              무대 위에서 그는 자신을 사랑하는 용기를 보여준다.
            </p>
          </div>

          <!-- 최근 관람 기록 (Merged from remote) -->
          <h2 class="section-title">최근 관람 기록</h2>
          <div class="record-list">
            <div class="record-item">
              <div class="record-item__img"></div>
              <div class="record-item__info">
                <p class="record-item__name">지킬앤하이드</p>
                <p class="record-item__meta">26.03.05 | 조승우 캐스트</p>
              </div>
            </div>
          </div>
        </section>
        </section>
      </main>

      <nav class="nav-bar">
        <div class="nav-bar__item nav-bar__item--active">🏠<br />Home</div>
        <div class="nav-bar__item">📖<br />Guide</div>
        <div class="nav-bar__item">🔴<br />Record</div>
        <div class="nav-bar__item">⚖️<br />Compare</div>
        <div class="nav-bar__item">👤<br />My</div>
      </nav>
    </div>
  </body>
</html>
