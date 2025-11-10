// 年を自動表示
document.getElementById('year').textContent = new Date().getFullYear();

// 簡易スムーススクロール（hrefが#のリンク）
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const target = document.querySelector(a.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth'});
    }
  });
});
