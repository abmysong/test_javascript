const selectAll = function(selectAll) {
  const checkboxes = document.getElementsByName('select-box');
  checkboxes.forEach(function(checkbox) {
    checkbox.checked = selectAll.checked;
  });
};