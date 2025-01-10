let body = document.querySelector("body");

function gradeWebsite() {
    const url = document.getElementById('websiteUrl').value.trim();
    const resultDiv = document.getElementById('result');

    if (!url) {
      resultDiv.innerHTML = 'Please enter a valid URL!';
      return;
    }

    // Simulate criteria evaluation (customize as needed)
    let grade = 'C';
    if (url.includes('secure') || url.startsWith('https')) {
      grade = 'A';
      body.style.backgroundColor = '#24ff2462';
    } else if (url.includes('www')) {
      grade = 'B';
      body.style.backgroundColor = '#fbff2462';
    }

    else if(url.includes){
      grade = 'C'
      body.style.backgroundColor = '#ff5324b2';
    }

    // Display result
    resultDiv.innerHTML = `The website <strong>${url}</strong> is graded: <span class="grade">${grade}</span>`;
  }

