import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div class="footer clearfix mb-0 text-muted">
        <div class="float-start">
          <p>2021 &copy; Suesca</p>
        </div>
        <div class="float-end">
          <p>
            Elaborado con{' '}
            <span class="text-danger">
              <i class="bi bi-heart"></i>
            </span>{' '}
            por <a href="http://ahmadsaugi.com">Luis</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
