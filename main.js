const showBtn = document.querySelector('.share-toast-show-btn');
const closeBtn = document.querySelector('.share-toast-close-btn');
const shareToast = document.querySelector('.share-toast');

function toggleShareToast(e) {
  shareToast.classList.toggle('hidden');
  showBtn.classList.toggle('share-btn-focus')

  if (!shareToast.classList.contains('hidden')) {
    document.addEventListener('keydown', hiddenShareToast);
    document.body.addEventListener('click', hiddenShareToast);
  } else {
    document.removeEventListener('keydown', hiddenShareToast);
    document.body.removeEventListener('click', hiddenShareToast);
  }

}

function hiddenShareToast(e) {
  if (e.key === 'Escape') {
    toggleShareToast();
  }

  if (!shareToast.contains(e.target) && !showBtn.contains(e.target)) {
    toggleShareToast();
  }
}

showBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleShareToast();
});

closeBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleShareToast();
});


