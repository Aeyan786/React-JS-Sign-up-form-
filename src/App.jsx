import React from 'react'
import styles from "./App.module.css"

const App = () => {
  return (
    <div className={styles.parent}>
      <div className={styles.main}>
        <div>
          <h1>Sign up</h1>
          <p>Already have an account? <a href="#">Login here</a></p><br /><br />
          <span>Name</span>
          <input type="text"  placeholder='Enter your name here'/><br /><br /><br />
          <span>Email id</span>
          <input type="text" placeholder='Enter your email id here' /><br /><br /><br />
          <span>Password</span>
          <input type="text"  placeholder='Enter your password here'/><br /><br /><br />   
          <input className={styles.check} type="checkbox" />
          <span className={styles.spancheck}>By Signing up you agree to recieve updates nad special Offers  </span><br />
            <br /><br />
            <section className={styles.button}>
            <button>Submit</button>
            </section>
        </div>
        <div className={styles.imgdiv}>
          <img src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
