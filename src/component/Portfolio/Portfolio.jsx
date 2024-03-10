import React from 'react'
import styles from './Portfolio.module.css'

function Portfolio() {
  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Portfolio</h3>
      <div className={styles.port_list}>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
        <div className={styles.port_items}>
            <img src="https://plus.unsplash.com/premium_photo-1690303193653-0418179e5512?q=80&w=1297&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <p>Project Title</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio