const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const name = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_texts = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML =
    '<img src="https://shethink.in/wp-content/uploads/2021/07/react.js-img-1536x864.png" alt="" />'
  title.innerHTML = 'React Js Developer'
  excerpt.innerHTML =
    'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.'
  profile_img.innerHTML =
    '<img src="https://lh3.googleusercontent.com/a-/AOh14GisQwDi2OG5wK3sEnGllAVsLP1kAHiBgwIndLGY1A=s288-p-rw-no" alt="" />'
  name.innerHTML = 'Sagar Patel'
  date.innerHTML = 'Jul 02, 2022'

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}