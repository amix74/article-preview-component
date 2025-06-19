const shareBtn = document.querySelectorAll('.share-btn');
const shareToast = document.querySelector('.share-toast');

function toggleShareToast() {
  console.log('clicked');
  shareToast.classList.toggle('hidden');
}

shareBtn.forEach(btn => {
  btn.addEventListener('click', toggleShareToast)
})

