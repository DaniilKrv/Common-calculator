let result = '';
let out = document.querySelector('.output');

document.querySelectorAll('.num').forEach(num => {
  num.addEventListener('click', () => {
    result += num.textContent;
    out.innerHTML = result;
  })
});

document.querySelectorAll('.action').forEach(act => {
  act.addEventListener('click', () => {
    result += act.textContent;
    out.innerHTML = result;
  })
});

document.querySelector('.calculate').addEventListener('click', () => {
  try {
    solve(result);
    out.textContent = solve(result);
  } catch (error) {
    out.textContent = 'Error';
    console.log(error);
  }

  result = '';
  return;
});

let solve = (result) => {
  res = eval(result);
  if (res == Infinity) {
    res = 'Error';
  }
  return res;
}
