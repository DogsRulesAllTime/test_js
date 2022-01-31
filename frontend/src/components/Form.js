import React from "react"

export default function Form() {
    return (
        <section className="login-page">
            <div className="main">
                <form className="signup">
                    <label for="chk" aria-hidden="true">Авторизация</label>
                    <input type="text" name="txt" placeholder="Username" required="" />
                    <input type="password" name="pswd" placeholder="Password" required="" />
                    <input type="Authentication" name="Authentication" placeholder="Authentication" required="" />
                    <button >Вход</button>
                </form>
            </div>
        </section>      
    )   
}