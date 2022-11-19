
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

// 돋보기를 클릭해도 서치부분이 넓어지도록
searchEl.addEventListener('click', function(){
//Logic..
searchInputEl.focus();
});

// focus 반대는 blur
searchInputEl.addEventListener('focus', function(){
// 이미 focused가 된
searchEl.classList.add('focused');
// Attribute = HTML속성을 지정할때 쓰는 말
searchInputEl.setAttribute('placeholder', '통합검색');
});

// focus 반대는 blur(focus가 해제된 상태)
searchInputEl.addEventListener('blur', function(){
// 이미 focused가 된
searchEl.classList.remove('focused');
// Attribute = HTML속성을 지정할때 쓰는 말
searchInputEl.setAttribute('placeholder', '');
});

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2022