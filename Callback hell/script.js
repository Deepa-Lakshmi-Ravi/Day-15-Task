function countdown(count, callback) {
    document.getElementById('countdown-display').innerText = count;
    if (count > 0) {
      setTimeout(function() {
        countdown(count - 1, callback);
      }, 1000);
    } else {
      callback();
    }
  }
  
  function showIndependenceDay() {
    document.getElementById('countdown-display').innerText = 'Happy Independence Day!';
  }
  
  countdown(10, showIndependenceDay);