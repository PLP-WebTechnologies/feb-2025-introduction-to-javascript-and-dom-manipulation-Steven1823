// Change text and style
document.getElementById('action-btn').addEventListener('click', function () {
  const desc = document.getElementById('description');
  desc.textContent = 'Text updated with JavaScript!';
  desc.style.color = 'blue';
  desc.style.fontWeight = 'bold';
});

// Remove an element
document.getElementById('remove-btn').addEventListener('click', function () {
  const area = document.getElementById('toggle-area');
  area.remove(); // removes the entire div and its contents
});
