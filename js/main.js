/* start navbar */
/* settings variables */
let bars = document.querySelectorAll('.bars')
let links = document.querySelectorAll('.links')
let openSubMenu = document.querySelectorAll('.open-sub-menu')
let subMenu = document.querySelectorAll('.sub-links')
let closeMenu = document.querySelectorAll('.close')

// fixed navbar
$(function () {
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 80) {
      $('.fixed-nav').slideDown(1000)
    } else {
      $('.fixed-nav').css('display', 'none')
    }
  })
})

// bars
bars.forEach((item) => {
  item.addEventListener('click', function () {
    item.classList.toggle('change')
    if (item.classList.contains('change')) {
      item.querySelector('i').className = 'fa fa-times'
      links.forEach((ele) => {
        ele.style.height = ele.scrollHeight + 'px'
      })
    } else {
      item.querySelector('i').className = 'fa fa-bars'
      links.forEach((ele) => {
        ele.style.height = 0
      })
    }
  })
})

// open submenu
openSubMenu.forEach((ele) => {
  ele.addEventListener('click', function (e) {
    e.preventDefault()
    e.target.classList.toggle('open')
    if (e.target.classList.contains('open')) {
      subMenu.forEach((el) => {
        el.style.display = 'flex'
      })
    } else {
      subMenu.forEach((el) => {
        el.style.display = 'none'
      })
    }
  })
})

// close submenu
closeMenu.forEach((ele) => {
  ele.addEventListener('click', function () {
    subMenu.forEach((ele) => {
      ele.style.display = 'none'
    })

    openSubMenu.forEach((item) => {
      item.classList.remove('open')
    })
  })
})

// end navbar

// auto writing in header
let heading = document.querySelector('.header-text h1')
let headingText = heading.getAttribute('data-text')
let haedingArr = headingText.split('')
let i = 0

const autoWriting = () => {
  heading.innerHTML += haedingArr[i]
  i++
  if (i > haedingArr.length) {
    heading.innerHTML = ''
    i = 0
  }
}
let autoWr = setInterval(autoWriting, 300)

/* skills section */
let skillSection = document.getElementById('skills')
let spans = document.querySelectorAll('.progress span')
window.addEventListener('scroll', function () {
  if (this.scrollY > skillSection.offsetTop) {
    spans.forEach((ele) => {
      ele.style.width = ele.dataset.progress + '%'
    })
  } else {
    spans.forEach((ele) => {
      ele.style.width = 0
    })
  }
})

/* event section ==> count down */

let countDownDate = new Date('Dec 31, 2021 23:59:59').getTime()

let countDown = setInterval(() => {
  let nowDate = new Date().getTime()
  let dataDiff = countDownDate - nowDate

  let days = Math.floor(dataDiff / (24 * 60 * 60 * 1000))
  let hours = Math.floor((dataDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000))
  let minutes = Math.floor((dataDiff % (60 * 60 * 1000)) / (60 * 1000))
  let seconds = Math.floor((dataDiff % (60 * 1000)) / 1000)

  let daysSpan = document.querySelector('.days')
  let hoursSpan = document.querySelector('.hours')
  let minutesSpan = document.querySelector('.minutes')
  let secondsSpan = document.querySelector('.seconds')

  daysSpan.innerHTML = days < 10 ? `0${days}` : `${days}`
  hoursSpan.innerHTML = hours < 10 ? `0${hours}` : `${hours}`
  minutesSpan.innerHTML = minutes < 10 ? `0${minutes}` : `${minutes}`
  secondsSpan.innerHTML = seconds < 10 ? `0${seconds}` : `${seconds}`

  if (dataDiff < 0) {
    clearInterval(countDown)
    document.querySelector('.time').innerHTML = `<div>The Event time out</div>`
  }
}, 1000)

/* events section ==> input */

let emailInp = document.querySelector('#email')
let placeholder = emailInp.getAttribute('placeholder')

emailInp.addEventListener('focus', function () {
  emailInp.setAttribute('placeholder', '')
})

emailInp.addEventListener('blur', function () {
  emailInp.setAttribute('placeholder', placeholder)
})

/* stats section ==> increase number */
let nums = document.querySelectorAll('.stat-number')
let statSection = document.querySelector('.stats')
let started = false

function startIncrease(element) {
  let goal = element.dataset.goal
  let count = setInterval(() => {
    element.textContent++
    if (element.textContent === goal) {
      clearInterval(count)
    }
  }, 2000 / goal)
}

window.onscroll = function () {
  if (this.scrollY >= statSection.offsetTop) {
    if (!started) {
      nums.forEach((item) => {
        startIncrease(item)
      })
    }
    started = true
  }
}
