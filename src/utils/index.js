export const MonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const Priorities = {
  LOW_PRIORITY: 'Low',
  MEDIUM_PRIORITY: 'Medium',
  TOP_PRIORITY: 'High'
};

export const Statuses = {
  DONE: 'Done',
  IN_PROGRESS: 'In Progress',
  REVIEW: 'Review',
  TODO: 'To Do'
};

export function formatDate(date) {
  const month = MonthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`
}

export function getPriority(priority) {
  const priorityLabel = Priorities[priority];
  const priorityEl = document.createElement('div');

  priorityEl.classList.add('priority', `priority__${priorityLabel.toLowerCase()}`);
  priorityEl.innerText = priorityLabel;

  return priorityEl;
}

export function getStatus(status) {
  const statusLabel = Statuses[status];
  const statusEl = document.createElement('div');

  statusEl.classList.add('status', `status__${status.toLowerCase()}`);
  statusEl.innerText = statusLabel;

  return statusEl;
}

export function getSelectedOption(select) {
  return select.options[select.selectedIndex].value;
}
