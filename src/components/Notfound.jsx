import React from 'react'

const Notfound = () => {
  return (
    <>
      <div class="notfound">
        <h1 class="err-code">404</h1>
        <p class="err-head">PAGE NOT FOUND</p>
        <p class="err-message">The page you're looking for could not be found</p>
        <p class="err-message">Please check the URL or Try again later</p>
        <a class="home-link" href="/">Go to Homepage</a>
      </div>
    </>
  )
}

export default Notfound
