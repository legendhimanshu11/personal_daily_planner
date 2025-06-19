const planner = document.getElementById('planner');
const startHour = 7;
const endHour = 22;

function formatHour(hour) {
  const suffix = hour >= 12 ? 'PM' : 'AM';
  const display = hour % 12 || 12;
  return `${display}:00 ${suffix}`;
}

for (let hour = startHour; hour <= endHour; hour++) {
  const timeBlock = document.createElement('div');
  timeBlock.className = 'time-block';

  // Priority logic (optional demo)
  if (hour === 9 || hour === 18) timeBlock.classList.add('priority-high');
  else if (hour === 13 || hour === 20) timeBlock.classList.add('priority-medium');
  else timeBlock.classList.add('priority-low');

  const label = document.createElement('div');
  label.className = 'time-label';
  label.textContent = formatHour(hour);

  const textarea = document.createElement('textarea');
  textarea.rows = 2;
  textarea.placeholder = "Enter your task...";
  textarea.id = `task-${hour}`;
  textarea.value = localStorage.getItem(textarea.id) || '';

  const button = document.createElement('button');
  button.className = 'save-btn';
  button.textContent = 'Save';

  button.addEventListener('click', () => {
    const val = textarea.value.trim();
    localStorage.setItem(textarea.id, val);
    textarea.classList.toggle('completed', val !== '');
  });

  if (textarea.value.trim() !== '') {
    textarea.classList.add('completed');
  }

  timeBlock.appendChild(label);
  timeBlock.appendChild(textarea);
  timeBlock.appendChild(button);
  planner.appendChild(timeBlock);
}