 let likeCount = localStorage.getItem('likeCount') ? parseInt(localStorage.getItem('likeCount')) : 0;

document.getElementById("like-counter").textContent = likeCount;

function likePost() {
  likeCount++;
  const likeCounter = document.getElementById("like-counter");
  const likeIcon = document.getElementById("like-icon");
  likeCounter.textContent = likeCount;
  localStorage.setItem('likeCount', likeCount);
  animateLike(likeCounter);
  animateHeart(likeIcon);
}

function animateLike(element) {
  element.classList.add('animate-like');
  setTimeout(() => {
    element.classList.remove('animate-like');
  }, 300);
}

function animateHeart(element) {
  element.classList.add('animate-heart');
  setTimeout(() => {
    element.classList.remove('animate-heart');
  }, 200);
}

function addComment() {
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");

  if (commentInput.value.trim() !== "") {
    const commentItem = document.createElement("li");
    commentItem.className = "comment-item";
    commentItem.innerHTML = `
      <span>${commentInput.value}</span>
      <button class="delete-btn" onclick="deleteComment(this)">Delete</button>
    `;
    commentList.appendChild(commentItem);
    commentInput.value = "";
  }
}

function deleteComment(button) {
  const commentItem = button.parentElement;
  commentItem.remove();
}


//automated title in folder
