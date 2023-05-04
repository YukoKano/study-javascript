export const checkOverdue = (due) => {
  const today = new Date(Date.now());
  const deadline = new Date(due);
  const overdue = today > deadline;
  return overdue;
}